import { connection } from "next/server";
import { promises as fs } from "fs";
import path from "path";
import matter from "gray-matter";
import {
  ALL_MODULE_IDS,
  CHANNEL_ICON_NAMES,
  ICON_NAMES,
  type Channel,
  type ChannelIcon,
  type ChannelSource,
  type IconName,
  type ModuleConnection,
  type ModuleId,
  type ModuleMeta,
  type ModuleTier,
  type RecordNode,
} from "./blueprint.config";

/**
 * Reads each module's CLAUDE.md straight from disk at request time so the map
 * always reflects the current thinking. A doc is frontmatter (the card face, in
 * ModuleMeta) plus a narrative body; `gray-matter` splits the two. `connection()`
 * opts out of caching (Next 16 removed `export const dynamic`). MODULES_DIR points
 * at the workspace root (set to /work by docker compose); locally it defaults to
 * the parent of the blueprint app. The source docs are read, never written.
 */

export interface ModuleDoc {
  id: ModuleId;
  meta: ModuleMeta;
  /** markdown body with the frontmatter stripped */
  body: string;
}

const ID_SET = new Set<string>(ALL_MODULE_IDS);
const ICON_SET = new Set<string>(ICON_NAMES);
const CHANNEL_ICON_SET = new Set<string>(CHANNEL_ICON_NAMES);
const TIERS = new Set<string>(["brain", "assistant", "connector"]);
const MODES = new Set<string>(["sustain", "advance", "expand"]);

/**
 * Normalise the frontmatter `records` tree. Each entry is a bare string (a leaf) or
 * `{ label, children: [...] }`; recurse so the children carry their own subtrees.
 */
function coerceRecords(x: unknown): RecordNode[] {
  if (!Array.isArray(x)) return [];
  return x
    .map((item): RecordNode | null => {
      if (typeof item === "string") return { label: item, children: [] };
      if (item && typeof item === "object") {
        const o = item as Record<string, unknown>;
        if (typeof o.label !== "string") return null;
        return { label: o.label, children: coerceRecords(o.children) };
      }
      return null;
    })
    .filter((r): r is RecordNode => r !== null);
}

/** Pull a clean ModuleMeta out of whatever the frontmatter parsed to. */
function coerceMeta(id: ModuleId, data: Record<string, unknown>): ModuleMeta {
  const str = (v: unknown, fallback = "") =>
    typeof v === "string" ? v : fallback;

  const icon: IconName = ICON_SET.has(data.icon as string)
    ? (data.icon as IconName)
    : "brain";

  const modes = Array.isArray(data.modes)
    ? (data.modes.filter((m) => MODES.has(m as string)) as string[])
    : undefined;

  const connects = Array.isArray(data.connects)
    ? (data.connects
        .map((c): ModuleConnection | null => {
          const to = (c as { to?: unknown })?.to;
          if (typeof to !== "string" || !ID_SET.has(to)) return null;
          const requests = (c as { requests?: unknown })?.requests;
          const provides = (c as { provides?: unknown })?.provides;
          return {
            to: to as ModuleId,
            requests: typeof requests === "string" ? requests : undefined,
            provides: typeof provides === "string" ? provides : undefined,
          };
        })
        .filter(Boolean) as ModuleConnection[])
    : undefined;

  // The channel ids this module draws raw data through (validated against the real
  // channel list later, where the port doc is in hand — see app/page.tsx).
  const drawsFrom = Array.isArray(data.draws_from)
    ? (data.draws_from.filter((c): c is string => typeof c === "string") as string[])
    : undefined;

  const channels = Array.isArray(data.channels)
    ? (data.channels
        .map((c): Channel | null => {
          const o = c as Record<string, unknown>;
          if (typeof o?.id !== "string" || typeof o?.name !== "string") return null;
          const rawIcon = typeof o.icon === "string" && o.icon.length ? o.icon : "globe";
          const records = coerceRecords(o.records);
          const source: ChannelSource = o.source === "builtin" ? "builtin" : "account";
          return {
            id: o.id,
            name: o.name,
            // keep allow-listed icons; otherwise pass the raw string through as a glyph fallback
            icon: CHANNEL_ICON_SET.has(rawIcon) ? (rawIcon as ChannelIcon) : rawIcon,
            source,
            brand: typeof o.brand === "string" ? o.brand : undefined,
            connected: o.connected === true,
            records,
          };
        })
        .filter(Boolean) as Channel[])
    : undefined;

  return {
    name: str(data.name, id),
    title: str(data.title),
    blurb: str(data.blurb),
    icon,
    optional: data.optional === true,
    tier: TIERS.has(data.tier as string) ? (data.tier as ModuleTier) : undefined,
    modes: modes?.length ? modes : undefined,
    connects: connects?.length ? connects : undefined,
    channels: channels?.length ? channels : undefined,
    drawsFrom: drawsFrom?.length ? drawsFrom : undefined,
  };
}

export async function readModules(): Promise<ModuleDoc[]> {
  await connection();
  const root = process.env.MODULES_DIR ?? path.join(process.cwd(), "..");

  return Promise.all(
    ALL_MODULE_IDS.map(async (id) => {
      try {
        const raw = await fs.readFile(path.join(root, id, "CLAUDE.md"), "utf8");
        const { data, content } = matter(raw);
        return {
          id,
          meta: coerceMeta(id, data as Record<string, unknown>),
          body: content.trim(),
        };
      } catch {
        return { id, meta: coerceMeta(id, {}), body: "" };
      }
    }),
  );
}
