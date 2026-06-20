/**
 * The six modules of the system, in order. Each id maps to a folder whose
 * CLAUDE.md holds that module's current notes — read live by lib/modules.ts.
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
 * A channel is a sub-item of `01-integrations` — one source of raw data. Two kinds:
 * `account` (a tool the user connects, e.g. Gmail, Slack) and `builtin` (a tool
 * shipped with the product, always on, e.g. web search). Each owns a list of
 * raw-data record LABELS; the field-level descriptions live once in the module body
 * (paired back by `recordDescription` in lib/modules.ts).
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
 * A raw-data record type, nested into the provider's real parent/child tree
 * (e.g. Gmail's Thread → Message → Attachment). The label keys back to the
 * record's body line (gloss + fields) via parseRecord; children are containment.
 */
export interface RecordNode {
  label: string;
  children: RecordNode[];
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
  /** raw-data record types as a tree; descriptions are paired from the body. */
  records: RecordNode[];
}

/**
 * The facts a module declares in its CLAUDE.md frontmatter — the card face plus
 * a few semantic fields. `name`/`title`/`blurb`/`icon`/`optional` are rendered
 * today; `tier`/`modes`/`connects` are documented now and drawn later. `channels`
 * is `01-integrations`-only — its per-channel raw data, drawn as the plug cluster.
 * `drawsFrom` lists the channel ids a module pulls raw data through, drawn as a
 * single inflow arrow from each channel plug into the module.
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
  channels?: Channel[];
  /** channel ids (sub-items of `01-integrations`) this module pulls raw data from */
  drawsFrom?: string[];
}

/** A node ready to render: its live frontmatter + body, placed at a position. */
export interface CanvasNode extends ModuleMeta {
  id: ModuleId;
  /** center of the card, in canvas-space (from canvas-layout.ts) */
  x: number;
  y: number;
  /** the narrative body (frontmatter stripped) — feeds the detail panel */
  body: string;
}
