"use client";

import {
  BaseEdge,
  getBezierPath,
  getSmoothStepPath,
  getStraightPath,
  Position,
  useInternalNode,
  type EdgeProps,
} from "@xyflow/react";

import { getEdgeParams } from "./floating-edge-utils";

/** Neutral wire ink — slate-600 @ ~55% (the resting / receded wire). */
const ROUTE_INK = "rgba(71, 85, 105, 0.55)";
/** The lit-route blue — --primary / blue-600. The loud one: + glow + marching, trace only. */
const ROUTE_BLUE = "#2563eb";
/** The calm hover blue — blue-500, one notch lighter. Static, no glow: trace stays the hero. */
const ROUTE_BLUE_SOFT = "#3b82f6";

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
  /** a channel→module inflow arrow: drawn lighter + dashed, apart from peer wires. */
  source?: boolean;
  /** hovering a node this wire touches: surfaced to full, focused ink. */
  highlight?: boolean;
  /** hovering some *other* node: this wire recedes to the background. */
  faded?: boolean;
};

export function FloatingEdge({ source, target, markerStart, markerEnd, data }: EdgeProps) {
  const sourceNode = useInternalNode(source);
  const targetNode = useInternalNode(target);

  // Wait until both nodes are measured, else the geometry is undefined on first paint.
  if (!sourceNode?.measured?.width || !targetNode?.measured?.width) return null;

  const d = (data as FloatingEdgeData) ?? {};
  // Channel wires leave the plug's top and always land on the card's Bottom dot, so
  // they sit below the cards. Peer wires snap to whichever side faces the other card.
  const { sx, sy, tx, ty, sourcePos, targetPos } = d.source
    ? getEdgeParams(sourceNode, targetNode, { sourceSide: Position.Top, targetSide: Position.Bottom })
    : getEdgeParams(sourceNode, targetNode);
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

  // Source (channel → module) wires read apart from peer wires: a touch thinner
  // and dashed. These base traits carry across every resting sub-state below.
  const dash = d.source ? "4 4" : undefined;
  const transition = "opacity 0.3s ease, stroke 0.3s ease, stroke-width 0.3s ease";

  let style: React.CSSProperties;
  if (d.active) {
    // Lit leg of a trace: luminous blue, a touch softer so the parcel stays the hero.
    style = {
      stroke: ROUTE_BLUE,
      strokeWidth: 2.1,
      filter: "drop-shadow(0 0 3px rgba(37, 99, 235, 0.4))",
      transition,
    };
  } else if (d.highlight) {
    // Hovered neighbourhood: surface in the calm hover blue, a hair thicker. No glow,
    // no marching — the loud blue-600 + animation stays the trace's signature.
    style = {
      stroke: ROUTE_BLUE_SOFT,
      strokeWidth: d.source ? 1.8 : 2.0,
      strokeDasharray: dash,
      opacity: 1,
      transition,
    };
  } else if (d.faded) {
    // Hovering elsewhere: recede to the background so the focus reads.
    style = {
      stroke: ROUTE_INK,
      strokeWidth: d.source ? 1.4 : 1.6,
      strokeDasharray: dash,
      opacity: 0.12,
      transition,
    };
  } else {
    // Resting: neutral ink, faint. Every wire — channel substrate and peer alike —
    // recedes so the cards lead and only a hovered neighbourhood asserts (in blue).
    // `dim` is the deeper off-route fade during a trace.
    style = {
      stroke: ROUTE_INK,
      strokeWidth: d.source ? 1.4 : 1.6,
      strokeDasharray: dash,
      opacity: d.dim ? 0.15 : 0.45,
      transition,
    };
  }

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
