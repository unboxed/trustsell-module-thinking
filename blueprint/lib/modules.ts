import { connection } from "next/server";
import { promises as fs } from "fs";
import path from "path";
import matter from "gray-matter";
import {
  ALL_MODULE_IDS,
  ICON_NAMES,
  type IconName,
  type ModuleConnection,
  type ModuleId,
  type ModuleMeta,
  type ModuleTier,
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
const TIERS = new Set<string>(["brain", "assistant", "connector"]);
const MODES = new Set<string>(["sustain", "advance", "expand"]);

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

  return {
    name: str(data.name, id),
    title: str(data.title),
    blurb: str(data.blurb),
    icon,
    optional: data.optional === true,
    tier: TIERS.has(data.tier as string) ? (data.tier as ModuleTier) : undefined,
    modes: modes?.length ? modes : undefined,
    connects: connects?.length ? connects : undefined,
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
