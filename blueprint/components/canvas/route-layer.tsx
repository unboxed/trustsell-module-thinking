"use client";

import { CANVAS } from "@/lib/canvas-layout";
import { EDGES, ROUTE_ACCENT, ROUTE_CASING, routePath, type Edge } from "@/lib/canvas-routes";

/** Corner radius for the rounded turns; clamped per-corner in routePath(). */
const CORNER = 18;

/**
 * The connecting lines, drawn as one SVG in canvas-space *inside* the pannable
 * surface — so it inherits the same pan transform as the nodes — and behind the
 * cards, so the routes read softly through the frosted glass. Decorative, and
 * never intercepts pointer events (panning still works through it).
 *
 * The look is typed by edge: spokes are the heavier main roads (a thin light
 * casing under a solid accent core); knowledge roads are lighter, thinner
 * side-roads. All solid — no glow, no motion, by design.
 */
export function RouteLayer() {
  return (
    <svg
      className="pointer-events-none absolute top-0 left-0"
      width={CANVAS.width}
      height={CANVAS.height}
      viewBox={`0 0 ${CANVAS.width} ${CANVAS.height}`}
      fill="none"
      aria-hidden
    >
      {EDGES.map((edge) => (
        <Route key={edge.id} edge={edge} />
      ))}
    </svg>
  );
}

function Route({ edge }: { edge: Edge }) {
  const d = routePath(edge.points, CORNER);
  const common = { strokeLinecap: "round", strokeLinejoin: "round" } as const;

  // Spoke — a main road: a thin light casing seats the solid accent core above the grid.
  if (edge.kind === "spoke") {
    return (
      <g>
        <path d={d} stroke={ROUTE_CASING} strokeWidth={6.5} {...common} />
        <path d={d} stroke={ROUTE_ACCENT} strokeWidth={4} {...common} />
      </g>
    );
  }

  // Knowledge road — a lighter, thinner side-road.
  return <path d={d} stroke={ROUTE_ACCENT} strokeOpacity={0.72} strokeWidth={2.5} {...common} />;
}
