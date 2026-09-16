"use client";

import { Handle, Position, type NodeProps } from "@xyflow/react";

import { cn } from "@/lib/utils";
import type { ChannelLayout } from "@/lib/canvas-layout";

/**
 * The Connections port as a React Flow *group* node — a decorative frame that holds
 * one compact channel child per plug (see rf-channel-node.tsx). It owns no plugs of
 * its own; it draws the band's chrome and carries the hidden handles the module→port
 * wires attach to. It keeps the node id "01-integrations", so the peer and inflow
 * wires resolve to it unchanged.
 *
 * The chrome is two spaced label tiers so the hierarchy reads at a glance:
 *   • "Connections" / "Tools library" — the two sources (left-aligned section headers):
 *     the accounts you connect, and the tools shipped with the product.
 *   • a labelled square per brand — Google holding its services, Slack holding Slack…
 *
 * The frame is `pointer-events-none` so dragging across the band still pans the canvas
 * and only the plugs (children) are clickable. Geometry comes from lib/canvas-layout.ts.
 */
export type RfConnectionsData = Pick<
  ChannelLayout,
  "width" | "height" | "clusterLabels" | "brands"
> & {
  /** Set while tracing the flow: the whole band fades back when off-route. */
  trace?: "active" | "dim";
};

export function RfConnectionsGroup({ data }: NodeProps) {
  const d = data as RfConnectionsData;

  return (
    <div
      style={{ width: d.width, height: d.height }}
      className={cn(
        "pointer-events-none relative",
        "transition-opacity duration-300 motion-reduce:transition-none",
        d.trace === "dim" && "opacity-35 saturate-50",
      )}
    >
      <Handle type="target" position={Position.Top} className="rf-hidden-handle" />
      <Handle type="source" position={Position.Bottom} className="rf-hidden-handle" />

      {/* Tier 2 — a labelled square per brand (drawn under the section headers) */}
      {d.brands.map((b) => (
        <div key={b.brand}>
          <div
            aria-hidden
            className={cn(
              "absolute rounded-2xl border",
              b.connected
                ? "border-border bg-card"
                : "border-dashed border-border",
            )}
            style={{ left: b.x, top: b.y, width: b.w, height: b.h }}
          />
          <p
            className={cn(
              "absolute text-[10px] font-semibold tracking-[0.1em] uppercase",
              b.connected ? "text-muted-foreground" : "text-muted-foreground/70",
            )}
            style={{ left: b.tag.x, top: b.tag.y }}
          >
            {b.brand}
          </p>
        </div>
      ))}

      {/* Tier 1 — source section headers */}
      {d.clusterLabels.map((l) => (
        <p
          key={l.text}
          className="absolute text-[11px] font-semibold tracking-[0.1em] text-muted-foreground uppercase"
          style={{ left: l.x, top: l.y }}
        >
          {l.text}
        </p>
      ))}
    </div>
  );
}
