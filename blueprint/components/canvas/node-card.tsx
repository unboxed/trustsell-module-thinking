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

import { cn } from "@/lib/utils";
import { CARD, type IconName, type NodeDef } from "@/lib/canvas-layout";

const ICONS: Record<IconName, LucideIcon> = {
  brain: Brain,
  cable: Cable,
  users: Users,
  package: Package,
  building: Building2,
  pen: PenLine,
};

/**
 * One module node: a uniform frosted card floating over the canvas. Same size
 * and treatment for all six — only its position on the stage and its content
 * differ. Icon on top, then title, then what it does.
 */
export function NodeCard({ node }: { node: NodeDef }) {
  const Icon = ICONS[node.icon];

  return (
    <article
      style={{
        left: node.x - CARD.width / 2,
        top: node.y - CARD.height / 2,
        width: CARD.width,
        height: CARD.height,
      }}
      className={cn(
        "glass-card absolute flex flex-col rounded-[18px] p-5",
        "transition-[transform,box-shadow] duration-200 ease-out",
        "hover:-translate-y-0.5 hover:shadow-[0_12px_28px_-12px_rgba(2,6,23,0.2)]",
        "motion-reduce:transition-none motion-reduce:hover:translate-y-0",
      )}
    >
      <div className="flex items-center justify-between">
        <span className="flex size-10 items-center justify-center rounded-xl bg-slate-900/[0.05]">
          <Icon className="size-5 text-slate-600" strokeWidth={1.75} />
        </span>
        {node.optional && (
          <span className="rounded-full border border-slate-300/70 px-2 py-0.5 text-[10px] font-medium tracking-wider text-slate-400 uppercase">
            Optional
          </span>
        )}
      </div>

      <h2 className="mt-4 text-[19px] leading-tight font-semibold tracking-[-0.01em] text-ink-title">
        {node.title}
      </h2>
      <p className="mt-1.5 line-clamp-3 text-[13.5px] leading-[1.45] text-ink-body">
        {node.blurb}
      </p>
    </article>
  );
}
