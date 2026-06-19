import { Position, type InternalNode, type Node } from "@xyflow/react";

/**
 * Floating-edge geometry (the standard React Flow recipe). Instead of pinning a
 * wire to a fixed handle, we compute where the straight line between two node
 * centres crosses each node's rectangle, so wires attach to the nearest edge of
 * the card no matter how the graph is laid out. This is what gives node-graph
 * "wiring" its clean look with free-floating node positions. Standard React Flow
 * floating-edge recipe.
 */

function getNodeCenter(node: InternalNode<Node>) {
  return {
    x: node.internals.positionAbsolute.x + (node.measured.width ?? 0) / 2,
    y: node.internals.positionAbsolute.y + (node.measured.height ?? 0) / 2,
  };
}

/** Point where the line from `node` centre toward `other` centre exits `node`'s rect. */
function getNodeIntersection(node: InternalNode<Node>, other: InternalNode<Node>) {
  const w = (node.measured.width ?? 0) / 2;
  const h = (node.measured.height ?? 0) / 2;
  const c = getNodeCenter(node);
  const o = getNodeCenter(other);

  const xx1 = (o.x - c.x) / (2 * w) - (o.y - c.y) / (2 * h);
  const yy1 = (o.x - c.x) / (2 * w) + (o.y - c.y) / (2 * h);
  const a = 1 / (Math.abs(xx1) + Math.abs(yy1) || 1);
  const xx3 = a * xx1;
  const yy3 = a * yy1;
  return { x: w * (xx3 + yy3) + c.x, y: h * (-xx3 + yy3) + c.y };
}

/** Which side of `node` the intersection point sits on — for sane curve direction. */
function getEdgePosition(node: InternalNode<Node>, point: { x: number; y: number }): Position {
  const nx = node.internals.positionAbsolute.x;
  const ny = node.internals.positionAbsolute.y;
  const w = node.measured.width ?? 0;
  const px = Math.round(point.x);
  const py = Math.round(point.y);
  if (px <= Math.round(nx) + 1) return Position.Left;
  if (px >= Math.round(nx + w) - 1) return Position.Right;
  if (py <= Math.round(ny) + 1) return Position.Top;
  return Position.Bottom;
}

export function getEdgeParams(source: InternalNode<Node>, target: InternalNode<Node>) {
  const sp = getNodeIntersection(source, target);
  const tp = getNodeIntersection(target, source);
  return {
    sx: sp.x,
    sy: sp.y,
    tx: tp.x,
    ty: tp.y,
    sourcePos: getEdgePosition(source, sp),
    targetPos: getEdgePosition(target, tp),
  };
}
