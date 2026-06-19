"use client";

import { Crosshair } from "lucide-react";

import { cn } from "@/lib/utils";
import { CANVAS, CONTENT_CENTER, NODES } from "@/lib/canvas-layout";
import { usePan } from "@/lib/use-pan";
import { NodeCard } from "./node-card";
import { RouteLayer } from "./route-layer";
import { IntegrationsCluster } from "./integrations-cluster";

/**
 * The home screen: an endless, pannable plane holding the six module nodes. The
 * dot grid tiles forever and scrolls under the content, so there are no edges; a
 * fixed "lighting" wash sits behind the glass cards for tonal refraction. Pan by
 * dragging or with the arrow keys; the recenter control (button, or press 0)
 * frames the cluster again from anywhere.
 */
export function Canvas() {
  const { offset, isDragging, viewportRef, onPointerDown, onKeyDown, recenter } =
    usePan(CONTENT_CENTER);

  return (
    <div
      ref={viewportRef}
      tabIndex={0}
      aria-label="Module map — drag or use arrow keys to pan; press 0 to recenter"
      onPointerDown={onPointerDown}
      onKeyDown={onKeyDown}
      className={cn(
        "relative h-full w-full touch-none overflow-hidden bg-canvas outline-none",
        "focus-visible:ring-2 focus-visible:ring-ring/40 focus-visible:ring-inset",
      )}
      style={{ cursor: isDragging ? "grabbing" : "grab" }}
    >
      {/* Fixed lighting — anchored to the viewport, never pans. Gives the frosted
          cards tonal variation to refract without being a sheet with edges. */}
      <div className="canvas-atmosphere pointer-events-none absolute inset-0" />
      {/* The endless dot grid — tiles forever; its position tracks the pan offset
          so it scrolls under the content and never shows an edge. */}
      <div
        className="canvas-grid pointer-events-none absolute inset-0"
        style={{ backgroundPosition: `${offset.x}px ${offset.y}px` }}
      />
      {/* The pannable content plane. */}
      <div
        className="absolute top-0 left-0 select-none"
        style={{
          width: CANVAS.width,
          height: CANVAS.height,
          transform: `translate3d(${offset.x}px, ${offset.y}px, 0)`,
          willChange: "transform",
        }}
      >
        {/* Routes first, so they paint beneath the cards and read through the glass. */}
        <RouteLayer />
        {/* Connections renders as the integration cluster, not a card. */}
        {NODES.filter((node) => node.id !== "01-integrations").map((node) => (
          <NodeCard key={node.id} node={node} />
        ))}
        <IntegrationsCluster />
      </div>

      {/* Recenter — frame the cluster again from anywhere on the plane. Its own
          pointer-down is stopped so pressing it doesn't start a canvas drag. */}
      <button
        type="button"
        onClick={recenter}
        onPointerDown={(e) => e.stopPropagation()}
        aria-label="Recenter the map"
        title="Recenter (press 0)"
        className={cn(
          "glass-card absolute right-5 bottom-5 flex size-11 items-center justify-center rounded-full",
          "text-slate-600 transition-transform duration-200 ease-out hover:-translate-y-0.5",
          "focus-visible:ring-2 focus-visible:ring-ring/50 focus-visible:outline-none",
          "motion-reduce:transition-none motion-reduce:hover:translate-y-0",
        )}
      >
        <Crosshair className="size-5" strokeWidth={1.75} />
      </button>
    </div>
  );
}
