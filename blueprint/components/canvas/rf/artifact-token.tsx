"use client";

import { useEffect, useState } from "react";
import {
  ClipboardList,
  Layers,
  ListChecks,
  Mail,
  PenLine,
  Send,
  Sparkles,
  Target,
  Zap,
  type LucideIcon,
} from "lucide-react";
import type { NodeProps } from "@xyflow/react";

import { cn } from "@/lib/utils";
import type { ArtifactForm } from "@/lib/flow-trace";

/**
 * The travelling parcel — the trace's protagonist, rendered as a non-interactive
 * React Flow node that the canvas repositions per step (the eased "travel" lives
 * in CSS on .react-flow__node-artifact). It carries a form and a contextual label
 * and **changes form only where a mind reasons**. Colour is the thesis: the raw
 * `fact` is grey; everything a mind has touched is blue — so the one grey→blue
 * flip (a reply becoming a signal at People) *is* the determinism boundary.
 */
export const FORM_META: Record<ArtifactForm, { icon: LucideIcon; word: string }> = {
  goal: { icon: Target, word: "goal" },
  routines: { icon: ListChecks, word: "routines" },
  fact: { icon: Mail, word: "a raw reply" },
  signal: { icon: Zap, word: "signal" },
  pieces: { icon: Layers, word: "pieces" },
  brief: { icon: ClipboardList, word: "brief" },
  draft: { icon: PenLine, word: "draft" },
  action: { icon: Send, word: "action" },
  lesson: { icon: Sparkles, word: "lesson" },
};

/** The one grey form — a raw, mechanically-fetched record no mind has read yet. */
export const isRawForm = (form: ArtifactForm) => form === "fact";

type ArtifactData = {
  form: ArtifactForm;
  label: string;
  reasoned?: boolean;
  from?: ArtifactForm;
};

function prefersReducedMotion() {
  return (
    typeof window !== "undefined" &&
    window.matchMedia?.("(prefers-reduced-motion: reduce)").matches
  );
}

export function ArtifactToken({ data }: NodeProps) {
  const d = data as unknown as ArtifactData;
  // Key by form so each step remounts the pill — the precursor morph then runs from
  // a clean mount (its starting form set by useState, advanced by an async timer).
  return <ArtifactPill key={d.form} form={d.form} from={d.from} label={d.label} />;
}

function ArtifactPill({
  form,
  from,
  label,
}: {
  form: ArtifactForm;
  from?: ArtifactForm;
  label: string;
}) {
  // Start on the precursor (the grey fact) when there is one; settle to the final
  // form after a beat — that beat is People's reading turning fact → signal.
  const [shown, setShown] = useState<ArtifactForm>(from ?? form);
  useEffect(() => {
    if (from && !prefersReducedMotion()) {
      const t = setTimeout(() => setShown(form), 650);
      return () => clearTimeout(t);
    }
  }, [form, from]);

  const isPrecursor = shown !== form;
  const meta = FORM_META[shown];
  const Icon = meta.icon;
  const raw = isRawForm(shown);
  const text = isPrecursor ? meta.word : label;

  return (
    // Anchored just above the card; centre horizontally and sit the pill on that point.
    <div className="pointer-events-none -translate-x-1/2 -translate-y-full">
      <div
        key={shown}
        className={cn(
          "artifact-pop glass-card flex items-center gap-2 rounded-full py-1.5 pr-3.5 pl-1.5",
          "whitespace-nowrap shadow-[0_6px_20px_-8px_rgba(2,6,23,0.35)]",
          raw
            ? "ring-1 ring-slate-300/80"
            : "ring-1 ring-blue-600/45 shadow-[0_0_26px_-4px_rgba(37,99,235,0.5)]",
        )}
      >
        <span
          className={cn(
            "flex size-7 items-center justify-center rounded-full",
            raw ? "bg-slate-900/[0.06] text-slate-500" : "bg-blue-600/12 text-blue-600",
          )}
        >
          <Icon className="size-4" strokeWidth={1.9} />
        </span>
        <span className="flex flex-col leading-tight">
          <span
            className={cn(
              "text-[9px] font-semibold tracking-[0.12em] uppercase",
              raw ? "text-slate-400" : "text-blue-600/80",
            )}
          >
            {raw ? "raw" : meta.word}
          </span>
          <span className="text-[12.5px] font-medium text-ink-title">{text}</span>
        </span>
      </div>
    </div>
  );
}
