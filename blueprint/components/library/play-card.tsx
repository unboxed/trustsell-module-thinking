"use client";

import {
  ArrowLeftRight,
  Boxes,
  Building2,
  DoorOpen,
  Handshake,
  MessagesSquare,
  Package,
  Radar,
  Sparkles,
  TrendingDown,
  TriangleAlert,
  User,
} from "lucide-react";

import type { LibraryEntry } from "./types";
import { ConfidenceMeter, GatherMark, ModeChip, Tab } from "./bits";

/* ---------------------------------------------------------------------------
 * The poster card — a portrait of one play, in the canvas node style.
 *
 * A soft tinted art banner carries a Lucide icon that represents the card
 * (signals by kind, assemblies by what they key on). Below it: the kind/about
 * tab + confidence, the bold name, the blurb, the modes, and a footer.
 * ------------------------------------------------------------------------- */

const KIND_ICON: Record<string, typeof DoorOpen> = {
  opening: DoorOpen,
  decay: TrendingDown,
  "deal-movement": ArrowLeftRight,
  risk: TriangleAlert,
  style: Sparkles,
};

/** A representative icon: signals by kind, assemblies by what they key on. */
function pickIcon(entry: LibraryEntry): typeof DoorOpen {
  if (entry.kind === "signal") return KIND_ICON[entry.doc.meta.kind ?? ""] ?? Radar;
  const about = (entry.doc.meta.about ?? "").toLowerCase();
  if (about.includes("person")) return User;
  if (about.includes("conversation")) return MessagesSquare;
  if (about.includes("organis") || about.includes("organiz")) return Building2;
  if (about.includes("offering")) return Package;
  if (about.includes("deal")) return Handshake;
  return Boxes;
}

export function PlayCard({
  entry,
  moduleLabel,
  onOpen,
}: {
  entry: LibraryEntry;
  moduleLabel: string;
  onOpen: () => void;
}) {
  const meta = entry.doc.meta;
  const signal = entry.kind === "signal" ? entry.doc.meta : null;
  const assembly = entry.kind === "assembly" ? entry.doc.meta : null;

  const tab = signal ? (signal.kind ?? "signal") : (assembly!.about ?? "gather");
  const n = meta.inputs.length;
  const unit = signal
    ? n === 1
      ? "gather"
      : "gathers"
    : n === 1
      ? "record"
      : "records";
  const Icon = pickIcon(entry);

  return (
    <button
      type="button"
      onClick={onOpen}
      className="glass-card group flex h-full cursor-pointer flex-col rounded-[18px] p-5 text-left transition-[opacity,box-shadow,transform] duration-300 hover:-translate-y-0.5 motion-reduce:transition-none motion-reduce:hover:translate-y-0"
    >
      {/* the art banner — a soft tinted panel with the centred icon */}
      <div className="flex aspect-[16/7] w-full items-center justify-center rounded-[12px] border border-border/60 bg-slate-900/[0.04]">
        <Icon
          className="size-9 text-slate-500 transition-transform duration-300 group-hover:scale-110 motion-reduce:transition-none motion-reduce:group-hover:scale-100"
          strokeWidth={1.5}
          aria-hidden
        />
      </div>

      {/* the kind / about tab + the confidence read */}
      <div className="mt-4 flex items-center justify-between gap-3">
        <Tab>{tab}</Tab>
        {signal ? <ConfidenceMeter confidence={signal.confidence} /> : <GatherMark />}
      </div>

      <h3 className="mt-2 text-[19px] leading-tight font-semibold tracking-[-0.01em] text-ink-title">
        {meta.label}
      </h3>

      <p className="mt-1.5 text-[13px] leading-[1.5] text-ink-body">{meta.blurb}</p>

      {signal && signal.modes.length > 0 && (
        <div className="mt-3 flex flex-wrap gap-1.5">
          {signal.modes.map((m) => (
            <ModeChip key={m} mode={m} />
          ))}
        </div>
      )}

      {/* spacer keeps footers aligned across a row; the footer's mt-4 guarantees a
          gap above the divider even when this is the tallest card (no free space) */}
      <div className="mt-auto" />
      <div className="mt-4 flex items-center justify-between gap-2 border-t border-border pt-3 text-[11px] text-muted-foreground">
        <span>{moduleLabel}</span>
        {n > 0 && (
          <span>
            ↳ {n} {unit}
          </span>
        )}
      </div>
    </button>
  );
}
