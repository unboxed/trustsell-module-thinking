import type { ModuleId } from "./blueprint.config";

/**
 * The static *geometry* of the canvas: how big the pannable stage is, and where
 * each of the six module nodes sits on it. Coordinates are in canvas-space (not
 * screen-space) and mark the *center* of each card, so the ring reads cleanly
 * regardless of card size.
 *
 * This file holds positions ONLY. A node's card face — name, title, blurb, icon,
 * optional — lives in that module's CLAUDE.md frontmatter and is read live by
 * lib/modules.ts; app/page.tsx merges the two. So editing a module updates its
 * card with no change here.
 *
 * The brain (00-spine) sits up top. Below it, the four assistants it leans on —
 * Offerings, Organisation, Voice, People, left to right. The two outer ones sit
 * higher and the two inner ones (Organisation, Voice) drop lower — a shallow dip — so
 * the long outer wires pass *above* the inner cards instead of behind their glass.
 * Connections (the port) sits below. Tune positions here; the canvas and cards read
 * from this and nothing else.
 */

export interface NodePosition {
  id: ModuleId;
  /** center of the card, in canvas-space */
  x: number;
  y: number;
}

/**
 * Drawing extent of the static composition — sizes the route SVG and the content
 * plane the nodes sit on. NOT a pan boundary: the canvas pans as an endless plane
 * (see use-pan.ts); this just bounds where the baked-in nodes + routes live.
 */
export const CANVAS = { width: 1600, height: 1080 } as const;

/** Uniform card footprint (all six identical). Ratio ≈ 1.6. */
export const CARD = { width: 300, height: 188 } as const;

export const NODES: NodePosition[] = [
  { id: "00-spine", x: 800, y: 200 },
  { id: "01-integrations", x: 800, y: 940 },
  { id: "02-relationships", x: 1445, y: 480 },
  { id: "03-offerings", x: 155, y: 480 },
  { id: "04-organization", x: 590, y: 615 },
  { id: "05-persona-you", x: 1010, y: 615 },
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
