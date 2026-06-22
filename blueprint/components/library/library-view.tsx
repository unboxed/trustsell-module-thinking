"use client";

import { useCallback, useMemo, useState, type ReactNode } from "react";
import Link from "next/link";
import { ArrowLeft, Search } from "lucide-react";

import { cn } from "@/lib/utils";
import { ToggleGroup, ToggleGroupItem } from "@/components/ui/toggle-group";
import type { AssemblyDoc, SignalDoc } from "@/lib/modules";
import { MODE_NAMES, type IconName, type ModuleId } from "@/lib/blueprint.config";
import {
  EntryCard,
  type LibraryEntry,
  type ResolveAssembly,
} from "./entry-card";
import { EntryOverlay } from "./entry-overlay";

/** A module shelf — its id and display name, for the filter rail + card tags. */
export interface LibraryModule {
  id: ModuleId;
  name: string;
  title: string;
  icon: IconName;
}

type TypeFilter = "all" | "assembly" | "signal";

/**
 * The library reading-room: a filter rail (search · module · type · mode) beside a
 * gallery of catalog cards, plus the detail overlay. All filters combine client-side
 * over the full set; counts update as they narrow. A signal's assembly badges are
 * clickable — they open that assembly's overlay, walking you down a floor.
 */
export function LibraryView({
  assemblies,
  signals,
  modules,
  initialModule,
}: {
  assemblies: AssemblyDoc[];
  signals: SignalDoc[];
  modules: LibraryModule[];
  initialModule: string | null;
}) {
  const validModule = initialModule && modules.some((m) => m.id === initialModule);

  const [query, setQuery] = useState("");
  const [moduleFilter, setModuleFilter] = useState<string>(validModule ? initialModule! : "all");
  const [typeFilter, setTypeFilter] = useState<TypeFilter>("all");
  const [modeFilter, setModeFilter] = useState<string>("");
  const [selected, setSelected] = useState<LibraryEntry | null>(null);

  const allEntries = useMemo<LibraryEntry[]>(
    () => [
      ...signals.map((doc) => ({ kind: "signal", doc }) as LibraryEntry),
      ...assemblies.map((doc) => ({ kind: "assembly", doc }) as LibraryEntry),
    ],
    [assemblies, signals],
  );

  // Resolve a sibling assembly by module + id — for lineage labels and cross-walks.
  const assemblyByKey = useMemo(() => {
    const m = new Map<string, AssemblyDoc>();
    for (const a of assemblies) m.set(`${a.moduleId}/${a.meta.id}`, a);
    return m;
  }, [assemblies]);
  const resolveAssembly = useCallback<ResolveAssembly>(
    (moduleId, id) => assemblyByKey.get(`${moduleId}/${id}`),
    [assemblyByKey],
  );

  const moduleTitle = useMemo(
    () => new Map(modules.map((m) => [m.id, m.title || m.name || m.id])),
    [modules],
  );
  const labelFor = useCallback(
    (id: string) => moduleTitle.get(id as ModuleId) ?? id,
    [moduleTitle],
  );

  const onOpenAssembly = useCallback(
    (moduleId: string, id: string) => {
      const a = assemblyByKey.get(`${moduleId}/${id}`);
      if (a) setSelected({ kind: "assembly", doc: a });
    },
    [assemblyByKey],
  );

  // The absolute entry count per module (drives which shelves are enabled — a shelf
  // stays reachable even when current filters happen to hide all of its entries).
  const totalByModule = useMemo(() => {
    const m = new Map<string, number>();
    for (const e of allEntries) m.set(e.doc.moduleId, (m.get(e.doc.moduleId) ?? 0) + 1);
    return m;
  }, [allEntries]);

  // One pass: visible entries (all filters) + per-module counts (every filter except
  // the module selection, so the rail shows what each shelf would yield).
  const view = useMemo(() => {
    const q = query.trim().toLowerCase();
    const counts = new Map<string, number>();
    let total = 0;
    const visSignals: LibraryEntry[] = [];
    const visAssemblies: LibraryEntry[] = [];

    for (const e of allEntries) {
      const meta = e.doc.meta;
      if (q && !meta.label.toLowerCase().includes(q) && !meta.blurb.toLowerCase().includes(q))
        continue;
      if (e.kind === "assembly") {
        if (typeFilter === "signal") continue;
        if (modeFilter) continue; // assemblies carry no mode
      } else {
        if (typeFilter === "assembly") continue;
        if (modeFilter && !e.doc.meta.modes.includes(modeFilter)) continue;
      }
      total++;
      counts.set(e.doc.moduleId, (counts.get(e.doc.moduleId) ?? 0) + 1);
      if (moduleFilter !== "all" && e.doc.moduleId !== moduleFilter) continue;
      if (e.kind === "signal") visSignals.push(e);
      else visAssemblies.push(e);
    }
    return { counts, total, visSignals, visAssemblies };
  }, [allEntries, query, typeFilter, modeFilter, moduleFilter]);

  const showSignals = typeFilter !== "assembly";
  const showAssemblies = typeFilter !== "signal";

  return (
    <div className="canvas-atmosphere min-h-dvh w-full">
      <div className="flex w-full flex-col gap-5 p-4 sm:p-6 md:flex-row md:items-start md:gap-8 md:p-8">
        {/* — floating filter sidebar — */}
        <aside className="md:sticky md:top-8 md:w-72 md:shrink-0">
          <div className="glass-card flex max-h-[calc(100dvh-4rem)] flex-col gap-5 overflow-y-auto rounded-2xl p-5">
            <div>
              <Link
                href="/"
                className="inline-flex items-center gap-1.5 text-[13px] text-ink-body transition-colors hover:text-primary focus-visible:ring-2 focus-visible:ring-ring/50 focus-visible:outline-none rounded"
              >
                <ArrowLeft className="size-3.5" aria-hidden />
                Canvas
              </Link>
              <h1 className="mt-3 font-heading text-2xl font-semibold tracking-[-0.01em] text-ink-title">
                Library
              </h1>
              <p className="mt-1 text-[13px] leading-snug text-ink-body">
                Every gather and read, across the modules. Filter to a shelf.
              </p>
            </div>

            <div className="relative">
              <Search
                className="pointer-events-none absolute top-1/2 left-2.5 size-4 -translate-y-1/2 text-ink-eyebrow"
                aria-hidden
              />
              <input
                type="search"
                value={query}
                onChange={(e) => setQuery(e.target.value)}
                placeholder="Search the library…"
                aria-label="Search the library"
                className="w-full rounded-lg border border-border bg-card/70 py-1.5 pr-3 pl-8 text-[13px] text-ink-title placeholder:text-ink-eyebrow focus-visible:border-ring focus-visible:ring-2 focus-visible:ring-ring/50 focus-visible:outline-none"
              />
            </div>

            <FilterGroup label="Module">
              <ModuleRow
                label="All"
                count={view.total}
                active={moduleFilter === "all"}
                onClick={() => setModuleFilter("all")}
              />
              {modules.map((m) => {
                const has = (totalByModule.get(m.id) ?? 0) > 0;
                return (
                  <ModuleRow
                    key={m.id}
                    label={m.title || m.name}
                    count={view.counts.get(m.id) ?? 0}
                    active={moduleFilter === m.id}
                    disabled={!has}
                    onClick={() => setModuleFilter(m.id)}
                  />
                );
              })}
            </FilterGroup>

            <FilterGroup label="Type">
              <ToggleGroup
                type="single"
                variant="outline"
                size="sm"
                spacing={0}
                value={typeFilter}
                onValueChange={(v) => v && setTypeFilter(v as TypeFilter)}
                className="w-full"
              >
                <ToggleGroupItem value="all" className="flex-1">
                  All
                </ToggleGroupItem>
                <ToggleGroupItem value="assembly" className="flex-1">
                  Assemblies
                </ToggleGroupItem>
                <ToggleGroupItem value="signal" className="flex-1">
                  Signals
                </ToggleGroupItem>
              </ToggleGroup>
            </FilterGroup>

            <FilterGroup label="Mode">
              <ToggleGroup
                type="single"
                variant="outline"
                size="sm"
                spacing={0}
                value={modeFilter}
                onValueChange={(v) => setModeFilter(v)}
                className="w-full"
              >
                {MODE_NAMES.map((m) => (
                  <ToggleGroupItem key={m} value={m} className="flex-1 capitalize">
                    {m}
                  </ToggleGroupItem>
                ))}
              </ToggleGroup>
            </FilterGroup>
          </div>
        </aside>

        {/* — gallery — */}
        <main className="min-w-0 flex-1">
          <div className="mx-auto w-full max-w-[80rem]">
          {view.total === 0 ? (
            <div className="flex min-h-[40vh] flex-col items-center justify-center text-center">
              <p className="text-[15px] font-medium text-ink-title">Nothing on this shelf</p>
              <p className="mt-1 max-w-sm text-[13px] text-ink-body">
                No assemblies or signals match these filters. Clear the search or pick another module.
              </p>
            </div>
          ) : (
            <div className="flex flex-col gap-8">
              {showSignals && view.visSignals.length > 0 && (
                <Section title="Signals" tagline="the first opinion" count={view.visSignals.length}>
                  {view.visSignals.map((e) => (
                    <EntryCard
                      key={`${e.doc.moduleId}/${e.doc.meta.id}`}
                      entry={e}
                      moduleLabel={labelFor(e.doc.moduleId)}
                      resolveAssembly={resolveAssembly}
                      onOpen={() => setSelected(e)}
                      onOpenAssembly={onOpenAssembly}
                    />
                  ))}
                </Section>
              )}
              {showAssemblies && view.visAssemblies.length > 0 && (
                <Section title="Assemblies" tagline="the floor" count={view.visAssemblies.length}>
                  {view.visAssemblies.map((e) => (
                    <EntryCard
                      key={`${e.doc.moduleId}/${e.doc.meta.id}`}
                      entry={e}
                      moduleLabel={labelFor(e.doc.moduleId)}
                      resolveAssembly={resolveAssembly}
                      onOpen={() => setSelected(e)}
                      onOpenAssembly={onOpenAssembly}
                    />
                  ))}
                </Section>
              )}
            </div>
          )}
          </div>
        </main>
      </div>

      <EntryOverlay
        entry={selected}
        moduleLabel={selected ? labelFor(selected.doc.moduleId) : ""}
        resolveAssembly={resolveAssembly}
        onOpenAssembly={onOpenAssembly}
        onClose={() => setSelected(null)}
      />
    </div>
  );
}

function FilterGroup({ label, children }: { label: string; children: ReactNode }) {
  return (
    <div className="flex flex-col gap-2">
      <p className="text-[11px] font-semibold tracking-[0.1em] text-ink-eyebrow uppercase">
        {label}
      </p>
      {children}
    </div>
  );
}

function ModuleRow({
  label,
  count,
  active,
  disabled,
  onClick,
}: {
  label: string;
  count: number;
  active: boolean;
  disabled?: boolean;
  onClick: () => void;
}) {
  return (
    <button
      type="button"
      disabled={disabled}
      onClick={onClick}
      className={cn(
        "flex w-full items-center justify-between rounded-lg px-2.5 py-1.5 text-[13px] transition-colors",
        "focus-visible:ring-2 focus-visible:ring-ring/50 focus-visible:outline-none",
        active ? "bg-secondary font-medium text-ink-title" : "text-ink-body hover:bg-muted",
        disabled && "cursor-not-allowed opacity-40 hover:bg-transparent",
      )}
    >
      <span className="truncate">{label}</span>
      <span className="ml-2 font-mono text-[11px] text-ink-eyebrow">{count}</span>
    </button>
  );
}

function Section({
  title,
  tagline,
  count,
  children,
}: {
  title: string;
  tagline: string;
  count: number;
  children: ReactNode;
}) {
  return (
    <section>
      <div className="mb-3 flex items-baseline gap-2">
        <h2 className="font-heading text-[15px] font-semibold tracking-[-0.01em] text-ink-title">
          {title}
        </h2>
        <span className="text-[12px] text-ink-eyebrow">{tagline}</span>
        <span className="ml-auto font-mono text-[12px] text-ink-eyebrow">{count}</span>
      </div>
      <div className="grid gap-5 [grid-template-columns:repeat(auto-fill,minmax(min(100%,21rem),1fr))]">
        {children}
      </div>
    </section>
  );
}
