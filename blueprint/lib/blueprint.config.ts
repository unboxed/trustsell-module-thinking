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
 * The facts a module declares in its CLAUDE.md frontmatter — the card face plus
 * a few semantic fields. `name`/`title`/`blurb`/`icon`/`optional` are rendered
 * today; `tier`/`modes`/`connects` are documented now and drawn later.
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
