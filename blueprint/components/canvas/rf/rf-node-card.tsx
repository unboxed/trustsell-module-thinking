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
 * A module card as a React Flow custom node: a bordered card face inside RF's
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
        "relative flex flex-col rounded-[18px] border bg-card p-5",
        // Clickable: the card opens its library shelf (see rf-canvas onNodeClick).
        "cursor-pointer transition-[opacity,box-shadow,transform] duration-300 hover:-translate-y-0.5",
        "motion-reduce:transition-none motion-reduce:hover:translate-y-0",
        // Dialed back a notch from the original bloom so the travelling parcel reads as the hero.
        d.trace === "active" && "ring-1 ring-primary shadow-lg",
        d.trace === "dim" && "opacity-35 saturate-50",
      )}
    >
      {d.reasoning && <span aria-hidden className="rf-think-halo" />}
      <Handle type="target" position={Position.Top} className="rf-hidden-handle" />
      <Handle type="source" position={Position.Bottom} className="rf-hidden-handle" />

      <div className="flex items-center justify-between">
        <span className="flex size-10 items-center justify-center rounded-full bg-muted">
          <Icon className="size-5 text-muted-foreground" strokeWidth={1.75} />
        </span>
        {d.optional && (
          <span className="rounded-full border border-border px-2 py-0.5 text-[10px] font-medium tracking-wider text-muted-foreground uppercase">
            Optional
          </span>
        )}
      </div>

      <p className="mt-3.5 text-[11px] font-semibold tracking-[0.1em] text-muted-foreground uppercase">
        {d.name}
      </p>
      <h2 className="mt-0.5 text-[19px] leading-tight font-semibold tracking-[-0.01em] text-foreground">
        {d.title}
      </h2>
      <p className="mt-1.5 line-clamp-2 text-[13px] leading-[1.45] text-muted-foreground">{d.blurb}</p>
    </div>
  );
}
