import { connection } from "next/server";
import { promises as fs } from "fs";
import path from "path";
import matter from "gray-matter";
import {
  ALL_MODULE_IDS,
  ICON_NAMES,
  SIGNAL_CONFIDENCES,
  SIGNAL_KINDS,
  type AssemblyMeta,
  type Channel,
  type ChannelSource,
  type IconName,
  type ModuleConnection,
  type ModuleId,
  type ModuleMeta,
  type ModuleTier,
  type SignalConfidence,
  type SignalKind,
  type SignalMeta,
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
const KIND_SET = new Set<string>(SIGNAL_KINDS);
const CONFIDENCE_SET = new Set<string>(SIGNAL_CONFIDENCES);

/** The workspace root: /work under docker compose, else the parent of this app. */
const sourceRoot = () => process.env.MODULES_DIR ?? path.join(process.cwd(), "..");

/**
 * Opt out of caching so every request re-reads the docs. Skipped under
 * STATIC_EXPORT (the GitHub Pages build): `connection()` forces dynamic
 * rendering, which a static export cannot do, and there the snapshot taken at
 * build time is exactly what we want.
 */
async function liveRead() {
  if (process.env.STATIC_EXPORT === "1") return;
  await connection();
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
  await liveRead();
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
  await liveRead();
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

/* ---------------------------------------------------------------------------
 * The library floors — assemblies & signals, read across every module.
 *
 * One doc per entry under `<module>/assemblies/*.md` and `<module>/signals/*.md`:
 * a frontmatter card face (the metas) plus a narrative body. Read live like the
 * module + channel docs; a module missing a floor just contributes nothing.
 * ------------------------------------------------------------------------- */

/** An assembly entry ready to render: its module, frontmatter and body. */
export interface AssemblyDoc {
  moduleId: ModuleId;
  meta: AssemblyMeta;
  body: string;
}

/** A signal entry ready to render: its module, frontmatter and body. */
export interface SignalDoc {
  moduleId: ModuleId;
  meta: SignalMeta;
  body: string;
}

/** Only keep the string members of a frontmatter list (drops anything malformed). */
const strList = (v: unknown): string[] =>
  Array.isArray(v) ? (v.filter((x): x is string => typeof x === "string")) : [];

function coerceAssembly(data: Record<string, unknown>): AssemblyMeta | null {
  if (typeof data.id !== "string" || typeof data.label !== "string") return null;
  return {
    id: data.id,
    label: data.label,
    blurb: typeof data.blurb === "string" ? data.blurb : "",
    about: typeof data.about === "string" ? data.about : undefined,
    deterministic: data.deterministic === true,
    inputs: strList(data.inputs),
  };
}

function coerceSignal(data: Record<string, unknown>): SignalMeta | null {
  if (typeof data.id !== "string" || typeof data.label !== "string") return null;
  return {
    id: data.id,
    label: data.label,
    blurb: typeof data.blurb === "string" ? data.blurb : "",
    inputs: strList(data.inputs),
    measures: strList(data.measures),
    answers: strList(data.answers),
    modes: strList(data.modes).filter((m) => MODES.has(m)),
    kind: KIND_SET.has(data.kind as string) ? (data.kind as SignalKind) : undefined,
    confidence: CONFIDENCE_SET.has(data.confidence as string)
      ? (data.confidence as SignalConfidence)
      : undefined,
    needs: strList(data.needs),
    pull: typeof data.pull === "string" ? data.pull : undefined,
  };
}

/** Read every `.md` in a floor dir into {frontmatter, body}; [] if the dir is absent. */
async function readFloorDir(
  dir: string,
): Promise<{ data: Record<string, unknown>; body: string }[]> {
  let files: string[];
  try {
    files = (await fs.readdir(dir)).filter((f) => f.endsWith(".md")).sort();
  } catch {
    return [];
  }
  const docs = await Promise.all(
    files.map(async (f) => {
      try {
        const raw = await fs.readFile(path.join(dir, f), "utf8");
        const { data, content } = matter(raw);
        return { data: data as Record<string, unknown>, body: content.trim() };
      } catch {
        return null;
      }
    }),
  );
  return docs.filter((d): d is { data: Record<string, unknown>; body: string } => d !== null);
}

/**
 * Sweeps all modules for their assembly + signal floors, tagging each entry with
 * its module so the Library can group and filter. Ordered by module (ALL_MODULE_IDS)
 * then by filename, for a stable gallery. Read live, never written.
 */
export async function readLibrary(): Promise<{
  assemblies: AssemblyDoc[];
  signals: SignalDoc[];
}> {
  await liveRead();
  const root = sourceRoot();

  const perModule = await Promise.all(
    ALL_MODULE_IDS.map(async (moduleId) => {
      const [aRaw, sRaw] = await Promise.all([
        readFloorDir(path.join(root, moduleId, "assemblies")),
        readFloorDir(path.join(root, moduleId, "signals")),
      ]);
      const assemblies = aRaw
        .map(({ data, body }) => {
          const meta = coerceAssembly(data);
          return meta ? { moduleId, meta, body } : null;
        })
        .filter((d): d is AssemblyDoc => d !== null);
      const signals = sRaw
        .map(({ data, body }) => {
          const meta = coerceSignal(data);
          return meta ? { moduleId, meta, body } : null;
        })
        .filter((d): d is SignalDoc => d !== null);
      return { assemblies, signals };
    }),
  );

  return {
    assemblies: perModule.flatMap((m) => m.assemblies),
    signals: perModule.flatMap((m) => m.signals),
  };
}
