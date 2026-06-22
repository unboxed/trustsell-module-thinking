"use client";

import type { ReactNode } from "react";
import { CornerDownRight } from "lucide-react";

import { cn } from "@/lib/utils";
import type { AssemblyDoc, SignalDoc } from "@/lib/modules";

/* ---------------------------------------------------------------------------
 * Catalog cards for the library — one face per assembly / signal entry.
 *
 * The card mirrors the frontmatter: a plain `blurb` as the short description,
 * the metadata as chips, and the lineage (what an entry reads, one floor down)
 * as call-number-style mono badges. Assembly badges are clickable — they walk
 * you to that assembly. The long body opens in the overlay on click.
 * ------------------------------------------------------------------------- */

/** A library entry, tagged by floor. */
export type LibraryEntry =
  | { kind: "assembly"; doc: AssemblyDoc }
  | { kind: "signal"; doc: SignalDoc };

/** Look up a sibling assembly by module + id (for lineage labels + clickability). */
export type ResolveAssembly = (moduleId: string, id: string) => AssemblyDoc | undefined;

// — small shared chips, also used by the overlay —

/** A clickable lineage chip — a shelf-mark that resolves to a floor below. */
export function LineageBadge({
  label,
  onClick,
}: {
  label: string;
  onClick: () => void;
}) {
  return (
    <button
      type="button"
      onClick={(e) => {
        e.stopPropagation();
        onClick();
      }}
      className={cn(
        "inline-flex items-center gap-1.5 rounded-full border border-border bg-card/60 px-2.5 py-1",
        "font-mono text-[13px] text-ink-body transition-colors",
        "hover:border-primary/40 hover:text-primary",
        "focus-visible:ring-2 focus-visible:ring-ring/50 focus-visible:outline-none",
      )}
    >
      <CornerDownRight className="size-3.5 opacity-60" aria-hidden />
      {label}
    </button>
  );
}

/** A quiet, non-interactive mono handle (a record id, a sales-question handle). */
export function HandleChip({
  children,
  dashed,
}: {
  children: ReactNode;
  dashed?: boolean;
}) {
  return (
    <span
      className={cn(
        "rounded-md bg-muted px-2 py-0.5 font-mono text-[12px] text-muted-foreground",
        dashed && "border border-dashed border-border bg-transparent",
      )}
    >
      {children}
    </span>
  );
}

/** A category-of-work chip (plant / grow / nurture). */
export function ModeChip({ mode }: { mode: string }) {
  return (
    <span className="rounded-full border border-border px-2.5 py-0.5 text-[12px] font-medium tracking-wide text-ink-body lowercase">
      {mode}
    </span>
  );
}

function Eyebrow({ children }: { children: ReactNode }) {
  return (
    <p className="text-[12px] font-semibold tracking-[0.1em] text-ink-eyebrow uppercase">
      {children}
    </p>
  );
}

function ModulePill({ children }: { children: ReactNode }) {
  return (
    <span className="shrink-0 rounded-full border border-slate-300/70 px-2 py-0.5 text-[11px] font-medium tracking-wider text-slate-400 uppercase">
      {children}
    </span>
  );
}

function CardShell({
  children,
  onOpen,
}: {
  children: ReactNode;
  onOpen: () => void;
}) {
  return (
    <div
      onClick={onOpen}
      className={cn(
        "glass-card group relative flex h-full cursor-pointer flex-col gap-2.5 rounded-2xl p-6",
        "transition-[box-shadow,transform] duration-200 ease-out",
        "hover:-translate-y-0.5 hover:shadow-[0_12px_32px_-12px_rgba(2,6,23,0.28)]",
        "motion-reduce:transition-none motion-reduce:hover:translate-y-0",
      )}
    >
      {children}
    </div>
  );
}

function Title({ label, onOpen }: { label: string; onOpen: () => void }) {
  return (
    <button
      type="button"
      onClick={(e) => {
        e.stopPropagation();
        onOpen();
      }}
      className="rounded text-left focus-visible:ring-2 focus-visible:ring-ring/50 focus-visible:outline-none"
    >
      <h3 className="font-heading text-[19px] leading-tight font-semibold tracking-[-0.01em] text-ink-title group-hover:text-ink-title">
        {label}
      </h3>
    </button>
  );
}

export function EntryCard({
  entry,
  moduleLabel,
  resolveAssembly,
  onOpen,
  onOpenAssembly,
}: {
  entry: LibraryEntry;
  moduleLabel: string;
  resolveAssembly: ResolveAssembly;
  onOpen: () => void;
  onOpenAssembly: (moduleId: string, id: string) => void;
}) {
  if (entry.kind === "assembly") {
    const { moduleId, meta } = entry.doc;
    // Split inputs: the ones that resolve to a sibling assembly are clickable
    // lineage; the rest are record ids (channel / told) — quiet, counted.
    const assemblyInputs = meta.inputs.filter((id) => resolveAssembly(moduleId, id));
    const recordInputs = meta.inputs.filter((id) => !resolveAssembly(moduleId, id));
    return (
      <CardShell onOpen={onOpen}>
        <div className="flex items-start justify-between gap-3">
          <Eyebrow>Assembly{meta.about ? ` · keyed on ${meta.about}` : ""}</Eyebrow>
          <ModulePill>{moduleLabel}</ModulePill>
        </div>
        <Title label={meta.label} onOpen={onOpen} />
        <p className="line-clamp-2 text-[14px] leading-[1.5] text-ink-body">{meta.blurb}</p>
        {(assemblyInputs.length > 0 || recordInputs.length > 0) && (
          <div className="mt-auto flex flex-wrap items-center gap-2 pt-2">
            {assemblyInputs.map((id) => (
              <LineageBadge
                key={id}
                label={resolveAssembly(moduleId, id)!.meta.label}
                onClick={() => onOpenAssembly(moduleId, id)}
              />
            ))}
            {recordInputs.length > 0 && (
              <HandleChip>
                {recordInputs.length} record{recordInputs.length === 1 ? "" : "s"}
              </HandleChip>
            )}
          </div>
        )}
      </CardShell>
    );
  }

  const { moduleId, meta } = entry.doc;
  return (
    <CardShell onOpen={onOpen}>
      <div className="flex items-start justify-between gap-3">
        <Eyebrow>Signal</Eyebrow>
        <ModulePill>{moduleLabel}</ModulePill>
      </div>
      <Title label={meta.label} onOpen={onOpen} />
      <p className="line-clamp-2 text-[14px] leading-[1.5] text-ink-body">{meta.blurb}</p>
      {meta.modes.length > 0 && (
        <div className="flex flex-wrap gap-1.5">
          {meta.modes.map((m) => (
            <ModeChip key={m} mode={m} />
          ))}
        </div>
      )}
      {meta.inputs.length > 0 && (
        <div className="mt-auto flex flex-wrap items-center gap-2 pt-2">
          {meta.inputs.map((id) => {
            const found = resolveAssembly(moduleId, id);
            return found ? (
              <LineageBadge
                key={id}
                label={found.meta.label}
                onClick={() => onOpenAssembly(moduleId, id)}
              />
            ) : (
              <HandleChip key={id} dashed>
                {id}
              </HandleChip>
            );
          })}
        </div>
      )}
    </CardShell>
  );
}
