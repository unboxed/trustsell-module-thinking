"use client";

import { Calendar, Cloud, Hash, Mail, Telescope, type LucideIcon } from "lucide-react";
import { Handle, Position, type NodeProps } from "@xyflow/react";

import { cn } from "@/lib/utils";

/**
 * The Connections port as a React Flow custom node — the plug cluster laid out as a
 * flex row (RF owns placement). The wired-in plugs are solid (frosted glass), the
 * available ones ghosted (dashed ring). Hidden handles let the module→port wires attach.
 */
type Integration = { label: string; icon: LucideIcon | string; connected: boolean };

const INTEGRATIONS: Integration[] = [
  { label: "Gmail", icon: Mail, connected: true },
  { label: "Calendar", icon: Calendar, connected: true },
  { label: "Slack", icon: Hash, connected: true },
  { label: "Tavily", icon: Telescope, connected: true },
  { label: "LinkedIn", icon: "in", connected: false },
  { label: "Salesforce", icon: Cloud, connected: false },
];

export function RfIntegrationsNode({ data }: NodeProps) {
  const trace = (data as { trace?: "active" | "dim" })?.trace;
  return (
    <div
      className={cn(
        "relative flex flex-col items-center",
        "transition-opacity duration-300 motion-reduce:transition-none",
        trace === "active" && "drop-shadow-[0_0_18px_rgba(37,99,235,0.5)]",
        trace === "dim" && "opacity-35 saturate-50",
      )}
    >
      <Handle type="target" position={Position.Top} className="rf-hidden-handle" />
      <Handle type="source" position={Position.Bottom} className="rf-hidden-handle" />

      <p className="mb-3 text-[11px] font-semibold tracking-[0.1em] text-slate-400 uppercase">
        Connections
      </p>
      <div className="flex items-start gap-[44px]">
        {INTEGRATIONS.map((it) => (
          <Plug key={it.label} integration={it} />
        ))}
      </div>
    </div>
  );
}

function Plug({ integration }: { integration: Integration }) {
  const { icon, label, connected } = integration;
  const Icon = typeof icon === "string" ? null : icon;

  return (
    <div className="flex w-[64px] flex-col items-center">
      <span
        className={cn(
          "flex size-16 items-center justify-center rounded-full",
          connected
            ? "glass-card"
            : "border-2 border-dashed border-slate-300/80 bg-white/25 opacity-70",
        )}
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
            {typeof icon === "string" ? icon : null}
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
