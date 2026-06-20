import { Position, type InternalNode, type Node } from "@xyflow/react";

/**
 * Edge geometry that snaps each wire to a **fixed connector port** — the midpoint
 * of whichever side of the card faces the other node — rather than a free-floating
 * point that slides along the card edge. So every wire lands on one of the four
 * per-side dots (see the `.rf-port` markers on the card), and arrows arrive square
 * to the card instead of at random angles. The side is chosen by comparing the
 * direction to the other node against the card's aspect ratio.
 */

function getNodeCenter(node: InternalNode<Node>) {
  return {
    x: node.internals.positionAbsolute.x + (node.measured.width ?? 0) / 2,
    y: node.internals.positionAbsolute.y + (node.measured.height ?? 0) / 2,
  };
}

/** The midpoint of a *named* side of `node` — used to force a wire onto a specific
 *  port (e.g. channel wires always enter the card's Bottom dot). */
function getSideMidpoint(node: InternalNode<Node>, side: Position) {
  const c = getNodeCenter(node);
  const w = (node.measured.width ?? 0) / 2;
  const h = (node.measured.height ?? 0) / 2;
  switch (side) {
    case Position.Top:
      return { x: c.x, y: c.y - h, pos: Position.Top };
    case Position.Bottom:
      return { x: c.x, y: c.y + h, pos: Position.Bottom };
    case Position.Left:
      return { x: c.x - w, y: c.y, pos: Position.Left };
    default:
      return { x: c.x + w, y: c.y, pos: Position.Right };
  }
}

/** The port `node` presents to `other`: the midpoint of the facing side + its Position. */
function getSideAnchor(node: InternalNode<Node>, other: InternalNode<Node>) {
  const c = getNodeCenter(node);
  const o = getNodeCenter(other);
  const w = (node.measured.width ?? 0) / 2;
  const h = (node.measured.height ?? 0) / 2;
  const dx = o.x - c.x;
  const dy = o.y - c.y;

  // Whichever axis reaches the card edge first wins the side; ties favour the
  // horizontal (left/right) ports for a tidier look on near-diagonal links.
  if (Math.abs(dx) * h >= Math.abs(dy) * w) {
    return dx >= 0
      ? { x: c.x + w, y: c.y, pos: Position.Right }
      : { x: c.x - w, y: c.y, pos: Position.Left };
  }
  return dy >= 0
    ? { x: c.x, y: c.y + h, pos: Position.Bottom }
    : { x: c.x, y: c.y - h, pos: Position.Top };
}

/**
 * Wire endpoints. By default each end snaps to the facing-side port. Pass
 * `sourceSide` / `targetSide` to pin an end to a fixed side instead — channel
 * wires use this to leave the plug from its Top and always enter the card's Bottom
 * dot, so they tuck in below the cards rather than crossing over them.
 */
export function getEdgeParams(
  source: InternalNode<Node>,
  target: InternalNode<Node>,
  opts: { sourceSide?: Position; targetSide?: Position } = {},
) {
  const s = opts.sourceSide ? getSideMidpoint(source, opts.sourceSide) : getSideAnchor(source, target);
  const t = opts.targetSide ? getSideMidpoint(target, opts.targetSide) : getSideAnchor(target, source);
  return {
    sx: s.x,
    sy: s.y,
    tx: t.x,
    ty: t.y,
    sourcePos: s.pos,
    targetPos: t.pos,
  };
}
