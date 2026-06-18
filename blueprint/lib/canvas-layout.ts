import type { ModuleId } from "./blueprint.config";

/**
 * The static composition of the canvas: how big the pannable stage is, and where
 * each of the six module nodes sits on it. Coordinates are in canvas-space (not
 * screen-space) and mark the *center* of each card, so the ring reads cleanly
 * regardless of card size.
 *
 * The brain (00-spine) sits at the center; the other five form a balanced ring
 * around it (the brain gathers from them). Titles and one-line descriptions are
 * the curated copy from docs/ui-foundation.md — the card face. Each module's
 * live CLAUDE.md still feeds the future detail panel.
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
  /** card title (curated, from the UI brief) */
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

/** Stage size in canvas-space — only modestly larger than a viewport, so the
 *  pan stays gentle. */
export const CANVAS = { width: 1600, height: 1080 } as const;

/** Uniform card footprint (all six identical). Ratio ≈ 1.6. */
export const CARD = { width: 300, height: 188 } as const;

export const NODES: NodeDef[] = [
  {
    id: "00-spine",
    title: "The brain",
    blurb: "Holds your goals and decides the one thing worth doing next.",
    icon: "brain",
    x: 800,
    y: 540,
  },
  {
    id: "01-integrations",
    title: "Connections",
    blurb: "Plug in your accounts once; it carries messages in and out.",
    icon: "cable",
    x: 800,
    y: 285,
  },
  {
    id: "02-relationships",
    title: "People",
    blurb:
      "Keeps every contact, conversation and connection organised — and digs to find who matters.",
    icon: "users",
    x: 1175,
    y: 540,
  },
  {
    id: "03-offerings",
    title: "What you offer",
    blurb: "Each product, who it suits, and the answers to the usual worries.",
    icon: "package",
    x: 425,
    y: 540,
  },
  {
    id: "04-organization",
    title: "Your organisation",
    blurb: "Your proof, your guardrails, your house voice.",
    icon: "building",
    x: 960,
    y: 790,
    optional: true,
  },
  {
    id: "05-persona-you",
    title: "You",
    blurb: "How you write, so every message sounds like you.",
    icon: "pen",
    x: 640,
    y: 790,
  },
];
