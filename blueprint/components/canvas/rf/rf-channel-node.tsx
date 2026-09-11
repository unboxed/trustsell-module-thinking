"use client";

import {
  Calendar,
  Cloud,
  ContactRound,
  Globe,
  HardDrive,
  Hash,
  Mail,
  Telescope,
  Video,
  type LucideIcon,
} from "lucide-react";
import { Handle, Position, type NodeProps } from "@xyflow/react";

import { cn } from "@/lib/utils";
import { CHANNEL } from "@/lib/canvas-layout";
import type { Channel, ChannelIcon } from "@/lib/blueprint.config";

/**
 * One channel as a compact React Flow child node — a frosted plug (icon + name)
 * that lives inside the Connections group (see rf-integrations-node.tsx). The face
 * stays quiet: the raw-data records reveal in a panel on click (see channel-panel.tsx).
 * `source` is orthogonal to `connected` — a built-in tool is always on, so only an
 * account can wear the ghosted "not connected yet" treatment.
 */
const CHANNEL_ICONS: Record<ChannelIcon, LucideIcon> = {
  mail: Mail,
  calendar: Calendar,
  "hard-drive": HardDrive,
  "contact-round": ContactRound,
  video: Video,
  hash: Hash,
  telescope: Telescope,
  globe: Globe,
  cloud: Cloud,
};

export type RfChannelData = {
  channel: Channel;
  /** Set while tracing the flow: this plug is on the lit route, or faded back. */
  trace?: "active" | "dim";
};

export function RfChannelNode({ data, selected }: NodeProps) {
  const { channel: ch, trace } = data as RfChannelData;
  // ch.icon is an allow-listed name OR a raw glyph string (e.g. "in"); the lookup
  // is genuinely nullable for glyphs, so widen the index type rather than cast.
  const Icon = (CHANNEL_ICONS as Record<string, LucideIcon | undefined>)[ch.icon];
  const glyph = Icon ? null : ch.icon;
  const ghost = ch.source === "account" && !ch.connected;

  return (
    <div
      style={{ width: CHANNEL.width }}
      className={cn(
        "group/plug flex cursor-pointer flex-col items-center",
        "transition-opacity duration-300 motion-reduce:transition-none",
        trace === "active" && "drop-shadow-lg",
        trace === "dim" && "opacity-35 saturate-50",
      )}
      title={ghost ? `${ch.name} — not connected yet` : ch.name}
    >
      {/* Hidden handles so the channel→module inflow wires can anchor; the floating
          edge computes geometry from the plug's rect, so Position is cosmetic. */}
      <Handle type="source" position={Position.Top} className="rf-hidden-handle" />
      <Handle type="target" position={Position.Bottom} className="rf-hidden-handle" />

      <span
        style={{ width: CHANNEL.disc, height: CHANNEL.disc }}
        className={cn(
          "flex items-center justify-center rounded-full transition-shadow duration-200",
          ghost ? "border-2 border-dashed border-border bg-card" : "border bg-card",
          selected && "ring-1 ring-primary",
          !selected && !ghost && "group-hover/plug:ring-1 group-hover/plug:ring-border",
        )}
      >
        {Icon ? (
          <Icon
            className={cn("size-6", ghost ? "text-muted-foreground" : "text-foreground")}
            strokeWidth={1.85}
          />
        ) : (
          <span className={cn("text-[17px] font-bold", ghost ? "text-muted-foreground" : "text-foreground")}>
            {glyph}
          </span>
        )}
      </span>
      <span
        className={cn(
          "mt-2 text-[11px] leading-none font-medium whitespace-nowrap",
          ghost ? "text-muted-foreground" : "text-muted-foreground",
        )}
      >
        {ch.name}
      </span>
    </div>
  );
}
