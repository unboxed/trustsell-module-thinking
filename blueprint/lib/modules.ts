import { connection } from "next/server";
import { promises as fs } from "fs";
import path from "path";
import matter from "gray-matter";
import {
  ALL_MODULE_IDS,
  ICON_NAMES,
  type Channel,
  type ChannelSource,
  type IconName,
  type ModuleConnection,
  type ModuleId,
  type ModuleMeta,
  type ModuleTier,
} from "./blueprint.config";
import { parseRecordsTable } from "./channel-records";

/**
 * Reads each module's module.md straight from disk at request time so the map
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
const TIERS = new Set<string>(["brain", "assistant", "connector"]);
const MODES = new Set<string>(["plant", "grow", "nurture"]);

/** The workspace root: /work under docker compose, else the parent of this app. */
const sourceRoot = () => process.env.MODULES_DIR ?? path.join(process.cwd(), "..");

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

  return {
    name: str(data.name, id),
    title: str(data.title),
    blurb: str(data.blurb),
    icon,
    optional: data.optional === true,
    tier: TIERS.has(data.tier as string) ? (data.tier as ModuleTier) : undefined,
    modes: modes?.length ? modes : undefined,
    connects: connects?.length ? connects : undefined,
    drawsFrom: drawsFrom?.length ? drawsFrom : undefined,
  };
}

export async function readModules(): Promise<ModuleDoc[]> {
  await connection();
  const root = sourceRoot();

  return Promise.all(
    ALL_MODULE_IDS.map(async (id) => {
      try {
        const raw = await fs.readFile(path.join(root, id, "module.md"), "utf8");
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

/**
 * Build one Channel from a `01-integrations/channels/<id>.md` doc: its frontmatter
 * (id · name · brand · source · connected · icon) plus the `## Records` table parsed
 * into records. Unknown icons pass through as a glyph string (e.g. "in").
 */
function coerceChannel(data: Record<string, unknown>, body: string): Channel | null {
  if (typeof data.id !== "string" || typeof data.name !== "string") return null;
  const source: ChannelSource = data.source === "builtin" ? "builtin" : "account";
  const icon = typeof data.icon === "string" && data.icon.length ? data.icon : "globe";
  return {
    id: data.id,
    name: data.name,
    icon,
    source,
    brand: typeof data.brand === "string" ? data.brand : undefined,
    connected: data.connected === true,
    records: parseRecordsTable(body),
  };
}

/**
 * Reads the raw-data floor: one doc per channel under `01-integrations/channels/`.
 * Each doc is the single source for that plug — its card face and its `## Records`
 * table. Sorted by filename for a stable plug order. Read live, never written.
 */
export async function readChannels(): Promise<Channel[]> {
  await connection();
  const dir = path.join(sourceRoot(), "01-integrations", "channels");

  let files: string[];
  try {
    files = (await fs.readdir(dir)).filter((f) => f.endsWith(".md")).sort();
  } catch {
    return [];
  }

  const channels = await Promise.all(
    files.map(async (f) => {
      try {
        const raw = await fs.readFile(path.join(dir, f), "utf8");
        const { data, content } = matter(raw);
        return coerceChannel(data as Record<string, unknown>, content);
      } catch {
        return null;
      }
    }),
  );

  return channels.filter((c): c is Channel => c !== null);
}
