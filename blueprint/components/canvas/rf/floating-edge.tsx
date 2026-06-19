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

/**
 * One wire per connection, floating between two cards. The path shape (bezier /
 * smoothstep / straight) and whether it animates come from `data` (set by
 * EDGE_VARIANT / EDGE_ANIMATED in rf-canvas). Two-way arrows (markerStart +
 * markerEnd) read as request-out / provide-back.
 */
export type FloatingEdgeData = {
  variant?: "bezier" | "smoothstep" | "straight";
  animated?: boolean;
};

export function FloatingEdge({ source, target, markerStart, markerEnd, data }: EdgeProps) {
  const sourceNode = useInternalNode(source);
  const targetNode = useInternalNode(target);

  // Wait until both nodes are measured, else the geometry is undefined on first paint.
  if (!sourceNode?.measured?.width || !targetNode?.measured?.width) return null;

  const { sx, sy, tx, ty, sourcePos, targetPos } = getEdgeParams(sourceNode, targetNode);
  const variant = (data as FloatingEdgeData)?.variant ?? "bezier";
  const animated = (data as FloatingEdgeData)?.animated ?? false;

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

  return (
    <BaseEdge
      path={path}
      markerStart={markerStart}
      markerEnd={markerEnd}
      className={animated ? "rf-flow" : undefined}
      style={{ stroke: ROUTE_INK, strokeWidth: 1.6 }}
    />
  );
}
