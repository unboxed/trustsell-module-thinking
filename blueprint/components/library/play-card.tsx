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

const ABOUT_ICON: Record<string, typeof DoorOpen> = {
  person: User,
  conversation: MessagesSquare,
  org: Building2,
  offering: Package,
  deal: Handshake,
  default: Boxes,
};

/** Which about-bucket an assembly keys on — a string key into ABOUT_ICON (not a
 *  component), so the icon is picked by a static lookup at the call site. */
function aboutKey(about?: string): keyof typeof ABOUT_ICON {
  const a = (about ?? "").toLowerCase();
  if (a.includes("person")) return "person";
  if (a.includes("conversation")) return "conversation";
  if (a.includes("organis") || a.includes("organiz")) return "org";
  if (a.includes("offering")) return "offering";
  if (a.includes("deal")) return "deal";
  return "default";
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
  // A representative icon, picked by static lookup: signals by kind, assemblies by
  // what they key on (same member-access form rf-node-card uses).
  const Icon =
    entry.kind === "signal"
      ? (KIND_ICON[entry.doc.meta.kind ?? ""] ?? Radar)
      : ABOUT_ICON[aboutKey(entry.doc.meta.about)];

  return (
    <button
      type="button"
      onClick={onOpen}
      className="group flex h-full cursor-pointer flex-col rounded-[18px] border bg-card p-5 text-left transition-[opacity,box-shadow,transform] duration-300 hover:-translate-y-0.5 motion-reduce:transition-none motion-reduce:hover:translate-y-0"
    >
      {/* the art banner — a soft tinted panel with the centred icon */}
      <div className="flex aspect-[16/7] w-full items-center justify-center rounded-[12px] border border-border/60 bg-muted">
        <Icon
          className="size-9 text-muted-foreground transition-transform duration-300 group-hover:scale-110 motion-reduce:transition-none motion-reduce:group-hover:scale-100"
          strokeWidth={1.5}
          aria-hidden
        />
      </div>

      {/* the kind / about tab + the confidence read */}
      <div className="mt-4 flex items-center justify-between gap-3">
        <Tab>{tab}</Tab>
        {signal ? <ConfidenceMeter confidence={signal.confidence} /> : <GatherMark />}
      </div>

      <h3 className="mt-2 text-[19px] leading-tight font-semibold tracking-[-0.01em] text-foreground">
        {meta.label}
      </h3>

      <p className="mt-1.5 text-[13px] leading-[1.5] text-muted-foreground">{meta.blurb}</p>

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
