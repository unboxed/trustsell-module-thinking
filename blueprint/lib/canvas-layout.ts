import type { Channel, ModuleId } from "./blueprint.config";

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

/** A card side, lowercased to match the `.rf-port-*` classes. */
export type Side = "top" | "right" | "bottom" | "left";

/**
 * The side of a card (half-width `w`, half-height `h`) that faces a point offset
 * `(dx, dy)` from its centre. Ties favour the horizontal ports for tidier
 * near-diagonal links. Shared by the live wire geometry (`getSideAnchor` in
 * floating-edge-utils) and the static port-visibility pass (app/page.tsx), so the
 * dots a card draws always match the sides its wires actually land on.
 */
export function pickSide(dx: number, dy: number, w: number, h: number): Side {
  if (Math.abs(dx) * h >= Math.abs(dy) * w) return dx >= 0 ? "right" : "left";
  return dy >= 0 ? "bottom" : "top";
}

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

/* ── Connections band ─────────────────────────────────────────────────────────
 * The port (`01-integrations`) is a *group* node: a decorative frame that holds one
 * compact child plug per channel. The frame is the wire/trace anchor (it keeps the id
 * "01-integrations"); the children are the clickable plugs. This derives the whole
 * band from the channel list, so editing the doc's `channels:` reflows it with no
 * change here. Child positions are RELATIVE to the group's top-left (React Flow's
 * parent/child convention).
 *
 * Three text tiers, each with a distinct treatment and clear air around it so the
 * hierarchy reads at a glance and nothing crowds the plugs:
 *   1. "Connections" / "Tools library" — the two sources (bold, left-aligned headers)
 *   2. each brand                      — a title at the top of its square, with a clear
 *                                        gap to the plugs below (Google over Gmail/…)
 *   3. each service                    — the plug's own name, snug under its disc
 */
export const CHANNEL = { width: 92, disc: 62, height: 84 } as const;

const BAND = {
  padX: 28,
  padBottom: 16,
  clusterLabelY: 12,
  boxTop: 40,
  boxPadX: 18, // air between the plugs and the box sides
  boxPadTop: 44, // brand title up top, then a clear gap before the plugs
  boxPadBottom: 16,
  brandTagDX: 18,
  brandTagDY: 14,
  brandGap: 18,
  clusterGap: 50,
} as const;

export interface BrandBox {
  brand: string;
  x: number;
  y: number;
  w: number;
  h: number;
  /** where the brand tag sits (top-left, inside the box) */
  tag: { x: number; y: number };
  /** true if any service in the brand is connected (else the box reads as future) */
  connected: boolean;
}

export interface ChannelLayout {
  /** child plug position (top-left), relative to the group's top-left */
  pos: Record<string, { x: number; y: number }>;
  width: number;
  height: number;
  /** source section headers — left-aligned at x, baseline y, relative to the group */
  clusterLabels: { text: string; x: number; y: number }[];
  /** one labelled square per brand */
  brands: BrandBox[];
}

/** Group a channel list into brands, preserving first-appearance order. */
function groupByBrand(list: Channel[]): { brand: string; services: Channel[] }[] {
  const order: string[] = [];
  const map = new Map<string, Channel[]>();
  for (const c of list) {
    const b = c.brand ?? c.name;
    if (!map.has(b)) {
      map.set(b, []);
      order.push(b);
    }
    map.get(b)!.push(c);
  }
  return order.map((b) => ({ brand: b, services: map.get(b)! }));
}

/** Lay the channels into per-brand squares within two source clusters. Pure. */
export function channelLayout(channels: Channel[]): ChannelLayout {
  const { width: W, height: H } = CHANNEL;
  const plugY = BAND.boxTop + BAND.boxPadTop;
  const boxH = BAND.boxPadTop + H + BAND.boxPadBottom;

  const clusters: { text: string; list: Channel[] }[] = [
    { text: "Connections", list: channels.filter((c) => c.source !== "builtin") },
    { text: "Tools library", list: channels.filter((c) => c.source === "builtin") },
  ];

  const pos: Record<string, { x: number; y: number }> = {};
  const brands: BrandBox[] = [];
  const clusterLabels: ChannelLayout["clusterLabels"] = [];

  let cx = BAND.padX;
  for (const { text, list } of clusters) {
    if (!list.length) continue;
    const clusterStart = cx;
    for (const { brand, services } of groupByBrand(list)) {
      const boxX = cx;
      const innerStart = boxX + BAND.boxPadX;
      services.forEach((c, i) => {
        pos[c.id] = { x: innerStart + i * W, y: plugY };
      });
      const boxW = services.length * W + 2 * BAND.boxPadX;
      brands.push({
        brand,
        x: boxX,
        y: BAND.boxTop,
        w: boxW,
        h: boxH,
        tag: { x: boxX + BAND.brandTagDX, y: BAND.boxTop + BAND.brandTagDY },
        connected: services.some((c) => c.connected),
      });
      cx += boxW + BAND.brandGap;
    }
    cx -= BAND.brandGap; // drop the trailing brand gap
    clusterLabels.push({ text, x: clusterStart, y: BAND.clusterLabelY });
    cx += BAND.clusterGap;
  }
  cx -= BAND.clusterGap; // drop the trailing cluster gap

  const width = cx + BAND.padX;
  const height = BAND.boxTop + boxH + BAND.padBottom;

  return { pos, width, height, clusterLabels, brands };
}
