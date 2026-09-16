/**
 * The six modules of the system, in order. Each id maps to a folder whose
 * module.md holds that module's current notes — read live by lib/modules.ts.
 *
 * A module doc is two layers in one file: a thin **frontmatter** block (the facts
 * below, in ModuleMeta) and a **narrative body**. The frontmatter is the single
 * source of a node's card face; canvas-layout.ts only adds where the node sits.
 */

export type ModuleId =
  | "00-spine"
  | "01-integrations"
  | "02-relationships"
  | "03-offerings"
  | "04-organization"
  | "05-persona-you";

export const ALL_MODULE_IDS: ModuleId[] = [
  "00-spine",
  "01-integrations",
  "02-relationships",
  "03-offerings",
  "04-organization",
  "05-persona-you",
];

/** lucide icon name; mapped to a component in node-card.tsx. */
export type IconName =
  | "brain"
  | "cable"
  | "users"
  | "package"
  | "building"
  | "pen";

export const ICON_NAMES: IconName[] = [
  "brain",
  "cable",
  "users",
  "package",
  "building",
  "pen",
];

/** The three tiers from the model: the brain, its assistants, the connector. */
export type ModuleTier = "brain" | "assistant" | "connector";

/**
 * A declared two-way link to another module: what this module `requests` of it (the
 * out-flow) and `provides` to it (the give-back). Either side may be absent when a
 * module only pulls or only answers. The wire between them is auto-routed by React
 * Flow from this link (see components/canvas/rf).
 */
export interface ModuleConnection {
  to: ModuleId;
  requests?: string;
  provides?: string;
}

/**
 * A channel is one source of raw data, described once in its own doc under
 * `01-integrations/channels/<id>.md`. Two kinds: `account` (a tool the user connects,
 * e.g. Gmail, Slack) and `builtin` (a tool shipped with the product, always on, e.g.
 * web search). Each doc's `## Records` table — Record · Field · Source — is read into
 * the records below (see `readChannels` / `parseRecordsTable`).
 */
export type ChannelSource = "account" | "builtin";

/** lucide icon name for a channel plug; mapped to a component in rf-channel-node.tsx. */
export type ChannelIcon =
  | "mail"
  | "calendar"
  | "hard-drive"
  | "contact-round"
  | "video"
  | "hash"
  | "telescope"
  | "globe"
  | "cloud";

export const CHANNEL_ICON_NAMES: ChannelIcon[] = [
  "mail",
  "calendar",
  "hard-drive",
  "contact-round",
  "video",
  "hash",
  "telescope",
  "globe",
  "cloud",
];

/**
 * One field of a raw-data record: its plain name and the Source note from the doc's
 * `## Records` table — the real API field, `derived`, or a not-connected reason.
 */
export interface RecordField {
  label: string;
  source: string | null;
}

/**
 * A raw-data record type and the fields it carries — one group of rows in a channel
 * doc's `## Records` table (e.g. Gmail's "Email message" with its sender/subject/…).
 */
export interface ChannelRecord {
  label: string;
  fields: RecordField[];
}

export interface Channel {
  id: string;
  name: string;
  /** an allow-listed ChannelIcon, or a raw glyph string fallback (e.g. "in"). */
  icon: ChannelIcon | string;
  source: ChannelSource;
  /** the labelled square this service sits in (e.g. "Google" holds Gmail, Calendar, …).
   * One brand may hold several services or just one; defaults to the channel name. */
  brand?: string;
  connected: boolean;
  /** the raw-data records this channel can pull, read from its doc's `## Records` table. */
  records: ChannelRecord[];
}

/**
 * The facts a module declares in its frontmatter — the card face plus a few semantic
 * fields. `name`/`title`/`blurb`/`icon`/`optional` are rendered today;
 * `tier`/`modes`/`connects` are documented now and drawn later. `drawsFrom` lists the
 * channel ids a module pulls raw data through, drawn as a single inflow arrow from each
 * channel plug into the module. (The channel plugs themselves are read separately from
 * `01-integrations/channels/*.md` — see `readChannels`.)
 */
export interface ModuleMeta {
  name: string;
  title: string;
  blurb: string;
  icon: IconName;
  optional: boolean;
  tier?: ModuleTier;
  modes?: string[];
  connects?: ModuleConnection[];
  /** channel ids (sub-items of `01-integrations`) this module pulls raw data from */
  drawsFrom?: string[];
}

/** A node ready to render: its live frontmatter + body, placed at a position. */
export interface CanvasNode extends ModuleMeta {
  id: ModuleId;
  /** center of the card, in canvas-space (from canvas-layout.ts) */
  x: number;
  y: number;
  /** the narrative body (frontmatter stripped) */
  body: string;
}

/* ---------------------------------------------------------------------------
 * The library floors — assemblies & signals
 *
 * Each assistant module is filled down into two kinds of "holdings", one doc
 * per entry under `<module>/assemblies/*.md` and `<module>/signals/*.md`. Like
 * a module doc, each is a frontmatter card face (the metas below) plus a long
 * narrative body. Read live by `readLibrary` in lib/modules.ts.
 * ------------------------------------------------------------------------- */

/** The family a signal belongs to (`kind` in its frontmatter). */
export type SignalKind = "opening" | "decay" | "deal-movement" | "risk" | "style";
export const SIGNAL_KINDS: SignalKind[] = [
  "opening",
  "decay",
  "deal-movement",
  "risk",
  "style",
];

/** How much a signal's read can be trusted (`confidence` in its frontmatter).
 *  `graded` = it depends on how much evidence stacks up (explained in the body). */
export type SignalConfidence = "high" | "graded" | "low";
export const SIGNAL_CONFIDENCES: SignalConfidence[] = ["high", "graded", "low"];

/** The categories of work an entry serves — the one vocabulary used everywhere. */
export const MODE_NAMES: string[] = ["plant", "grow", "nurture"];

/**
 * An assembly: a DETERMINISTIC gather (a person, a conversation, a deal). Its
 * `inputs` are the records and sibling assemblies it pulls together, one floor
 * down. No opinion lives here.
 */
export interface AssemblyMeta {
  id: string;
  label: string;
  blurb: string;
  /** what a single instance is keyed on, e.g. "a person" / "a deal". */
  about?: string;
  deterministic: boolean;
  /** record ids (channel/told) and, optionally, sibling assembly ids. */
  inputs: string[];
}

/**
 * A signal: the FIRST OPINION — a named read off an assembly that carries its
 * evidence down to plain facts. Frontmatter holds only the flat facets (the
 * chips); the worked example and threshold live in the body.
 */
export interface SignalMeta {
  id: string;
  label: string;
  blurb: string;
  /** the assembly ids it reads. */
  inputs: string[];
  /** the deterministic Floor-2 counts beneath the read. */
  measures: string[];
  /** which of the sales questions it answers (e.g. Q4, Q14). */
  answers: string[];
  /** which categories of work it serves (plant / grow / nurture). */
  modes: string[];
  kind?: SignalKind;
  confidence?: SignalConfidence;
  /** the sources a read leans on; when one is unconnected, confidence falls (a data gap). */
  needs: string[];
  /** an optional fact it borrows from a supplier module. */
  pull?: string;
}
