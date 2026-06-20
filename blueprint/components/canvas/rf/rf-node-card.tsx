"use client";

import {
  Brain,
  Building2,
  Cable,
  Package,
  PenLine,
  Users,
  type LucideIcon,
} from "lucide-react";
import { Handle, Position, type NodeProps } from "@xyflow/react";

import { cn } from "@/lib/utils";
import { CARD } from "@/lib/canvas-layout";
import type { IconName } from "@/lib/blueprint.config";

// Icon map for the card badge (lucide names → components).
const ICONS: Record<IconName, LucideIcon> = {
  brain: Brain,
  cable: Cable,
  users: Users,
  package: Package,
  building: Building2,
  pen: PenLine,
};

export type RfCardData = {
  name: string;
  title: string;
  blurb: string;
  icon: IconName;
  optional: boolean;
  /** Set while tracing the flow: this card is on the lit route, or faded back. */
  trace?: "active" | "dim";
  /** True on the step where this node's mind transforms the parcel (think-pulse). */
  reasoning?: boolean;
};

/**
 * A module card as a React Flow custom node: the frosted glass-card face inside RF's
 * positioned container (RF owns placement + pan, so there's no absolute-position /
 * drag wrapper). Hidden handles let wires attach; the floating edge computes geometry
 * from the card rect, so their Position is cosmetic.
 */
export function RfNodeCard({ data }: NodeProps) {
  const d = data as RfCardData;
  const Icon = ICONS[d.icon] ?? Brain;

  return (
    <div
      style={{ width: CARD.width, height: CARD.height }}
      className={cn(
        "glass-card relative flex flex-col rounded-[18px] p-5",
        "transition-[opacity,box-shadow] duration-300 motion-reduce:transition-none",
        // Dialed back a notch from the original bloom so the travelling parcel reads as the hero.
        d.trace === "active" && "ring-1 ring-blue-600/40 shadow-[0_0_16px_-4px_rgba(37,99,235,0.4)]",
        d.trace === "dim" && "opacity-35 saturate-50",
      )}
    >
      {d.reasoning && <span aria-hidden className="rf-think-halo" />}
      <Handle type="target" position={Position.Top} className="rf-hidden-handle" />
      <Handle type="source" position={Position.Bottom} className="rf-hidden-handle" />

      <div className="flex items-center justify-between">
        <span className="flex size-10 items-center justify-center rounded-full bg-slate-900/[0.05]">
          <Icon className="size-5 text-slate-600" strokeWidth={1.75} />
        </span>
        {d.optional && (
          <span className="rounded-full border border-slate-300/70 px-2 py-0.5 text-[10px] font-medium tracking-wider text-slate-400 uppercase">
            Optional
          </span>
        )}
      </div>

      <p className="mt-3.5 text-[11px] font-semibold tracking-[0.1em] text-slate-400 uppercase">
        {d.name}
      </p>
      <h2 className="mt-0.5 text-[19px] leading-tight font-semibold tracking-[-0.01em] text-ink-title">
        {d.title}
      </h2>
      <p className="mt-1.5 line-clamp-2 text-[13px] leading-[1.45] text-ink-body">{d.blurb}</p>
    </div>
  );
}
