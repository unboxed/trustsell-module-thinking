"use client";

import { Calendar, Cloud, Hash, Mail, Telescope, type LucideIcon } from "lucide-react";

import { cn } from "@/lib/utils";
import { NODES } from "@/lib/canvas-layout";

/**
 * Connections isn't a single card — it's the port, so it shows as a row of
 * individual circular "plugs", one per integration, sitting below the assistant
 * row. The ones wired in are solid (frosted glass, slate mark); the ones still
 * available are ghosted (dashed ring, greyed). Monochrome glyph stand-ins for the
 * real logos for now — connected vs available reads from the shape, not colour.
 *
 * The cluster centres on the 01-integrations node position from canvas-layout,
 * so it moves with the rest of the canvas.
 */

interface Integration {
  label: string;
  /** a lucide glyph, or a short monogram where no clean glyph fits */
  icon: LucideIcon | string;
  connected: boolean;
}

const INTEGRATIONS: Integration[] = [
  { label: "Gmail", icon: Mail, connected: true },
  { label: "Calendar", icon: Calendar, connected: true },
  { label: "Slack", icon: Hash, connected: true },
  { label: "Tavily", icon: Telescope, connected: true },
  { label: "LinkedIn", icon: "in", connected: false },
  { label: "Salesforce", icon: Cloud, connected: false },
];

const DIAMETER = 64; // each plug
const SPACING = 108; // centre-to-centre
const SLOT = 104; // wrapper width (room for the label)

export function IntegrationsCluster() {
  const anchor = NODES.find((node) => node.id === "01-integrations");
  if (!anchor) return null;

  const span = (INTEGRATIONS.length - 1) * SPACING;
  const startX = anchor.x - span / 2;

  return (
    <div className="pointer-events-none absolute top-0 left-0">
      <p
        className="absolute -translate-x-1/2 text-[11px] font-semibold tracking-[0.1em] text-slate-400 uppercase"
        style={{ left: anchor.x, top: anchor.y - 66 }}
      >
        Connections
      </p>
      {INTEGRATIONS.map((integration, i) => (
        <Plug
          key={integration.label}
          integration={integration}
          cx={startX + i * SPACING}
          cy={anchor.y}
        />
      ))}
    </div>
  );
}

function Plug({ integration, cx, cy }: { integration: Integration; cx: number; cy: number }) {
  const { icon, label, connected } = integration;
  const Icon = typeof icon === "string" ? null : icon;

  return (
    <div
      className="absolute flex flex-col items-center"
      style={{ left: cx - SLOT / 2, top: cy - DIAMETER / 2, width: SLOT }}
    >
      <span
        className={cn(
          "pointer-events-auto flex items-center justify-center rounded-full",
          "transition-transform duration-200 ease-out hover:-translate-y-0.5",
          "motion-reduce:transition-none motion-reduce:hover:translate-y-0",
          connected
            ? "glass-card"
            : "border-2 border-dashed border-slate-300/80 bg-white/25 opacity-70",
        )}
        style={{ width: DIAMETER, height: DIAMETER }}
        title={connected ? label : `${label} — not connected`}
      >
        {Icon ? (
          <Icon
            className={cn("size-6", connected ? "text-slate-600" : "text-slate-400")}
            strokeWidth={1.9}
          />
        ) : (
          <span
            className={cn("text-[15px] font-bold", connected ? "text-slate-600" : "text-slate-400")}
          >
            {icon}
          </span>
        )}
      </span>
      <span
        className={cn(
          "mt-2 text-[10px] leading-none font-medium",
          connected ? "text-slate-500" : "text-slate-400",
        )}
      >
        {label}
      </span>
    </div>
  );
}
