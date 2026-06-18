"use client";

import { cn } from "@/lib/utils";
import { CANVAS, NODES } from "@/lib/canvas-layout";
import { usePan } from "@/lib/use-pan";
import { NodeCard } from "./node-card";

/**
 * The home screen: a pannable stage holding the six module nodes. The stage is
 * a little larger than the viewport, so panning is a gentle nudge rather than an
 * open-ended plane. The brain sits at the center with the rest ringed around it.
 */
export function Canvas() {
  const { offset, isDragging, viewportRef, onPointerDown, onKeyDown } =
    usePan(CANVAS);

  return (
    <div
      ref={viewportRef}
      tabIndex={0}
      aria-label="Module map — drag or use arrow keys to pan"
      onPointerDown={onPointerDown}
      onKeyDown={onKeyDown}
      className={cn(
        "relative h-full w-full touch-none overflow-hidden bg-canvas outline-none",
        "focus-visible:ring-2 focus-visible:ring-ring/40 focus-visible:ring-inset",
      )}
      style={{ cursor: isDragging ? "grabbing" : "grab" }}
    >
      <div
        className="canvas-surface absolute top-0 left-0 select-none"
        style={{
          width: CANVAS.width,
          height: CANVAS.height,
          transform: `translate3d(${offset.x}px, ${offset.y}px, 0)`,
          willChange: "transform",
        }}
      >
        {NODES.map((node) => (
          <NodeCard key={node.id} node={node} />
        ))}
      </div>
    </div>
  );
}
