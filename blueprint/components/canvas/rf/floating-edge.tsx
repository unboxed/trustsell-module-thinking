"use client";

import {
  BaseEdge,
  getBezierPath,
  getSmoothStepPath,
  getStraightPath,
  useInternalNode,
  type EdgeProps,
} from "@xyflow/react";

import { getEdgeParams } from "./floating-edge-utils";

/** Neutral wire ink — slate-600 @ ~55% (no blue; the palette reserves blue for interaction). */
const ROUTE_INK = "rgba(71, 85, 105, 0.55)";
/** The lit-route blue — --primary / blue-600. Used only while tracing the flow. */
const ROUTE_BLUE = "#2563eb";

/**
 * One wire per connection, floating between two cards. The path shape (bezier /
 * smoothstep / straight) and whether it animates come from `data` (set by
 * EDGE_VARIANT / EDGE_ANIMATED in rf-canvas). Two-way arrows (markerStart +
 * markerEnd) read as request-out / provide-back.
 *
 * While the flow is being traced, `active` lights the leg (luminous blue,
 * marching in `direction`) and `dim` fades the rest back.
 */
export type FloatingEdgeData = {
  variant?: "bezier" | "smoothstep" | "straight";
  animated?: boolean;
  active?: boolean;
  dim?: boolean;
  direction?: "fwd" | "rev";
};

export function FloatingEdge({ source, target, markerStart, markerEnd, data }: EdgeProps) {
  const sourceNode = useInternalNode(source);
  const targetNode = useInternalNode(target);

  // Wait until both nodes are measured, else the geometry is undefined on first paint.
  if (!sourceNode?.measured?.width || !targetNode?.measured?.width) return null;

  const { sx, sy, tx, ty, sourcePos, targetPos } = getEdgeParams(sourceNode, targetNode);
  const d = (data as FloatingEdgeData) ?? {};
  const variant = d.variant ?? "bezier";

  const [path] =
    variant === "smoothstep"
      ? getSmoothStepPath({
          sourceX: sx,
          sourceY: sy,
          targetX: tx,
          targetY: ty,
          sourcePosition: sourcePos,
          targetPosition: targetPos,
          borderRadius: 16,
        })
      : variant === "straight"
        ? getStraightPath({ sourceX: sx, sourceY: sy, targetX: tx, targetY: ty })
        : getBezierPath({
            sourceX: sx,
            sourceY: sy,
            targetX: tx,
            targetY: ty,
            sourcePosition: sourcePos,
            targetPosition: targetPos,
          });

  // Lit leg: luminous blue, marching in the flow direction. Dimmed: fade back.
  // Otherwise the neutral wire (optionally the legacy "animated" look).
  const flowClass = d.direction === "rev" ? "rf-flow-rev" : "rf-flow";
  const className = d.active ? flowClass : d.animated ? "rf-flow" : undefined;
  const style: React.CSSProperties = d.active
    ? {
        // A touch softer than before, so the travelling parcel stays the hero.
        stroke: ROUTE_BLUE,
        strokeWidth: 2.1,
        filter: "drop-shadow(0 0 3px rgba(37, 99, 235, 0.4))",
        transition: "stroke 0.3s ease, stroke-width 0.3s ease",
      }
    : {
        stroke: ROUTE_INK,
        strokeWidth: 1.6,
        opacity: d.dim ? 0.15 : 1,
        transition: "opacity 0.3s ease, stroke 0.3s ease",
      };

  return (
    <BaseEdge
      path={path}
      markerStart={markerStart}
      markerEnd={markerEnd}
      className={className}
      style={style}
    />
  );
}
