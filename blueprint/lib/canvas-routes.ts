import type { ModuleId } from "./blueprint.config";
import { CARD, NODES } from "./canvas-layout";

/**
 * The connecting lines between the module nodes — drawn as *routes*, not edges:
 * they hug the dot-grid axes and turn with rounded corners, like roads following
 * streets (the "GPS line" language). Geometry lives in canvas-space, same as the
 * nodes, so the route layer pans in lockstep with them for free.
 *
 * The look is typed by kind (structure as information): "spoke" — the brain's
 * decision links, the four routes running up from the assistant row to the brain,
 * drawn as the heavier main roads — vs "road" — peer knowledge links between
 * assistants, drawn as lighter side-roads. All solid; no dashes.
 *
 * With the assistants in a row, three of the four knowledge roads are short hops
 * between neighbours; only Offerings ↔ Organisation (the row's two ends) takes a
 * longer bypass beneath the row. Routes carry an explicit list of canvas-space
 * points (edge-to-edge, with any corner waypoints). Hand-placed rather than
 * auto-routed — there are only eight, and this keeps full control of the look.
 * Tune the waypoints here; the route layer reads from this and nothing else.
 */

export interface Point {
  x: number;
  y: number;
}

export type RouteKind = "spoke" | "road";

export interface Edge {
  id: string;
  kind: RouteKind;
  /** canvas-space polyline: [start, ...corners, end] */
  points: Point[];
}

/* Muted accents — one hue, varied by weight/opacity. Kept here (TS) rather than
   in globals.css so colour can be tuned without the Turbopack CSS-cache restart. */
export const ROUTE_ACCENT = "#0066CC"; // Apple link blue (deeper/calmer than systemBlue) — spokes (full), roads (~70%)
export const ROUTE_CASING = "rgba(255, 255, 255, 0.55)"; // thin lift under the spokes

const HALF_W = CARD.width / 2;
const HALF_H = CARD.height / 2;
const STANDOFF = 12; // how far a route starts off the card edge

type Side = "top" | "bottom" | "left" | "right";

function center(id: ModuleId): Point {
  const n = NODES.find((node) => node.id === id);
  if (!n) throw new Error(`canvas-routes: unknown node ${id}`);
  return { x: n.x, y: n.y };
}

/** A point on a card's edge, `along` px from the edge midpoint, pushed `standoff`
 *  px outward so the route starts just clear of the glass. */
function anchor(id: ModuleId, side: Side, along = 0, standoff = STANDOFF): Point {
  const c = center(id);
  switch (side) {
    case "top":
      return { x: c.x + along, y: c.y - HALF_H - standoff };
    case "bottom":
      return { x: c.x + along, y: c.y + HALF_H + standoff };
    case "left":
      return { x: c.x - HALF_W - standoff, y: c.y + along };
    case "right":
      return { x: c.x + HALF_W + standoff, y: c.y + along };
  }
}

const p = (x: number, y: number): Point => ({ x, y });

const B: ModuleId = "00-spine";
const PEOPLE: ModuleId = "02-relationships";
const OFFER: ModuleId = "03-offerings";
const ORG: ModuleId = "04-organization";
const VOICE: ModuleId = "05-persona-you";

export const EDGES: Edge[] = [
  // --- Intent spokes — the assistant row's routes up into the Brain's underside
  //     (main roads). All four dock into the Brain's bottom edge, fanning out
  //     below it: the outer spokes turn closer to the Brain (y388), the inner
  //     two a touch lower (y412), so the four converge without crossing. ---

  // Offerings → Brain — far-left assistant into the left of the underside
  {
    id: "brain-offerings",
    kind: "spoke",
    points: [anchor(OFFER, "top"), p(290, 388), p(700, 388), anchor(B, "bottom", -100)],
  },

  // People → Brain
  {
    id: "brain-people",
    kind: "spoke",
    points: [anchor(PEOPLE, "top"), p(630, 412), p(765, 412), anchor(B, "bottom", -35)],
  },

  // Voice → Brain
  {
    id: "brain-voice",
    kind: "spoke",
    points: [anchor(VOICE, "top"), p(970, 412), p(835, 412), anchor(B, "bottom", 35)],
  },

  // Organisation → Brain — far-right assistant into the right of the underside
  {
    id: "brain-org",
    kind: "spoke",
    points: [anchor(ORG, "top"), p(1310, 388), p(900, 388), anchor(B, "bottom", 100)],
  },

  // --- Knowledge roads — one expert leaning on another (side roads) ---

  // Offerings ↔ People — short hop between neighbours in the row
  { id: "people-offerings", kind: "road", points: [anchor(PEOPLE, "left"), anchor(OFFER, "right")] },

  // People ↔ Voice — short hop between neighbours in the row
  { id: "voice-people", kind: "road", points: [anchor(VOICE, "left"), anchor(PEOPLE, "right")] },

  // Voice ↔ Organisation — short hop between neighbours in the row
  { id: "voice-org", kind: "road", points: [anchor(VOICE, "right"), anchor(ORG, "left")] },

  // Offerings ↔ Organisation — the row's two ends; a bypass beneath the row
  {
    id: "offerings-org",
    kind: "road",
    points: [anchor(OFFER, "bottom"), p(290, 705), p(1310, 705), anchor(ORG, "bottom")],
  },
];

function dist(a: Point, b: Point): number {
  return Math.hypot(b.x - a.x, b.y - a.y);
}

/** A point `d` px from `a` toward `b`. */
function toward(a: Point, b: Point, d: number): Point {
  const len = dist(a, b) || 1;
  return { x: a.x + ((b.x - a.x) / len) * d, y: a.y + ((b.y - a.y) / len) * d };
}

const fmt = (pt: Point) => `${+pt.x.toFixed(2)} ${+pt.y.toFixed(2)}`;

/**
 * Build an SVG path that follows the polyline but rounds each interior corner.
 * At every corner the radius is clamped to half the shorter adjacent segment, so
 * tight steps still round cleanly. Straight 2-point routes are a plain segment.
 */
export function routePath(points: Point[], radius: number): string {
  if (points.length < 2) return "";
  if (points.length === 2) return `M ${fmt(points[0])} L ${fmt(points[1])}`;

  let d = `M ${fmt(points[0])}`;
  for (let i = 1; i < points.length - 1; i++) {
    const prev = points[i - 1];
    const cur = points[i];
    const next = points[i + 1];
    const r = Math.min(radius, dist(prev, cur) / 2, dist(cur, next) / 2);
    const enter = toward(cur, prev, r);
    const exit = toward(cur, next, r);
    d += ` L ${fmt(enter)} Q ${fmt(cur)} ${fmt(exit)}`;
  }
  d += ` L ${fmt(points[points.length - 1])}`;
  return d;
}
