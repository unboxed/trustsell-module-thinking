import type { ModuleId } from "./blueprint.config";

/**
 * The static composition of the canvas: how big the pannable stage is, and where
 * each of the six module nodes sits on it. Coordinates are in canvas-space (not
 * screen-space) and mark the *center* of each card, so the ring reads cleanly
 * regardless of card size.
 *
 * The brain (00-spine) sits up top. Below it, the four assistants it leans on —
 * Offerings, People, Voice, Organisation, left to right — line up in a row, each
 * with a route running up to the brain. Connections (the port) sits below that
 * row. Titles and one-line descriptions are the curated copy from
 * docs/ui-foundation.md — the card face. Each module's live CLAUDE.md still feeds
 * the future detail panel.
 *
 * Tune positions here; the canvas and cards read from this and nothing else.
 */

/** lucide icon name; mapped to a component in node-card.tsx */
export type IconName =
  | "brain"
  | "cable"
  | "users"
  | "package"
  | "building"
  | "pen";

export interface NodeDef {
  id: ModuleId;
  /** short consistent label, shown as the card eyebrow */
  name: string;
  /** friendly "Your ___" heading */
  title: string;
  /** one-line "what it does" (curated, from the UI brief) */
  blurb: string;
  icon: IconName;
  /** center of the card, in canvas-space */
  x: number;
  y: number;
  /** brief marks this module optional */
  optional?: boolean;
}

/**
 * Drawing extent of the static composition — sizes the route SVG and the content
 * plane the nodes sit on. NOT a pan boundary: the canvas pans as an endless plane
 * (see use-pan.ts); this just bounds where the baked-in nodes + routes live.
 */
export const CANVAS = { width: 1600, height: 1080 } as const;

/** Uniform card footprint (all six identical). Ratio ≈ 1.6. */
export const CARD = { width: 300, height: 188 } as const;

export const NODES: NodeDef[] = [
  {
    id: "00-spine",
    name: "Brain",
    title: "Your deal lead",
    blurb: "Holds your goals and decides the one thing worth doing next.",
    icon: "brain",
    x: 800,
    y: 270,
  },
  {
    id: "01-integrations",
    name: "Connections",
    title: "Your connections",
    blurb: "Plug in your accounts once; it carries messages in and out.",
    icon: "cable",
    x: 800,
    y: 850,
  },
  {
    id: "02-relationships",
    name: "People",
    title: "Your relationships",
    blurb:
      "Keeps every contact, conversation and connection organised — and digs to find who matters.",
    icon: "users",
    x: 630,
    y: 560,
  },
  {
    id: "03-offerings",
    name: "Offerings",
    title: "Your offerings",
    blurb: "Each product, who it suits, and the answers to the usual worries.",
    icon: "package",
    x: 290,
    y: 560,
  },
  {
    id: "04-organization",
    name: "Organisation",
    title: "Your organisation",
    blurb: "Your proof, your guardrails, your house voice.",
    icon: "building",
    x: 1310,
    y: 560,
    optional: true,
  },
  {
    id: "05-persona-you",
    name: "Voice",
    title: "Your profile",
    blurb: "How you write, so every message sounds like you.",
    icon: "pen",
    x: 970,
    y: 560,
  },
];

/**
 * Center of the node cluster in canvas-space — derived from the node extents, so
 * it tracks layout changes. Used to frame the map on load and to power the
 * recenter control (use-pan.ts). The plane itself is endless; this is just where
 * "home" is.
 */
const NODE_XS = NODES.map((n) => n.x);
const NODE_YS = NODES.map((n) => n.y);
export const CONTENT_CENTER = {
  x: (Math.min(...NODE_XS) + Math.max(...NODE_XS)) / 2,
  y: (Math.min(...NODE_YS) + Math.max(...NODE_YS)) / 2,
} as const;
