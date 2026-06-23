"use client";

import { useCallback, useEffect, useMemo, useState } from "react";
import Link from "next/link";
import { ArrowLeft, Search } from "lucide-react";

import { cn } from "@/lib/utils";
import type { AssemblyDoc, SignalDoc } from "@/lib/modules";
import { MODE_NAMES, type IconName, type ModuleId } from "@/lib/blueprint.config";
import type { LibraryEntry, ResolveAssembly } from "./types";
import { entryKey } from "./types";
import { PlayIndex } from "./play-index";
import { PlaySpread } from "./play-spread";

/** A module shelf — id + display name, for the spine and the card tags. */
export interface LibraryModule {
  id: ModuleId;
  name: string;
  title: string;
  icon: IconName;
}

type TypeFilter = "all" | "assembly" | "signal";

/**
 * The Playbook — the binder shell. A slim shelf spine, a control bar (search ·
 * type · mode), and a stage that shows either the index (the table of contents)
 * or one play's spread. Filters narrow the deck you flip through; opening a play
 * enters the spread, where ← / → turn the pages. Changing a shelf returns you to
 * the index — flipping is a reading concern, filtering a browsing one.
 */
export function Playbook({
  assemblies,
  signals,
  modules,
  initialModule,
  initialPlay,
}: {
  assemblies: AssemblyDoc[];
  signals: SignalDoc[];
  modules: LibraryModule[];
  initialModule: string | null;
  initialPlay: string | null;
}) {
  // Canonical order: signals (module order) then assemblies — the index reads
  // top to bottom in this order, and flipping follows it.
  const allEntries = useMemo<LibraryEntry[]>(
    () => [
      ...signals.map((doc) => ({ kind: "signal", doc }) as LibraryEntry),
      ...assemblies.map((doc) => ({ kind: "assembly", doc }) as LibraryEntry),
    ],
    [assemblies, signals],
  );

  const validModule = initialModule && modules.some((m) => m.id === initialModule);

  const [query, setQuery] = useState("");
  const [moduleFilter, setModuleFilter] = useState<string>(
    validModule ? initialModule! : "all",
  );
  const [typeFilter, setTypeFilter] = useState<TypeFilter>("all");
  const [modeFilter, setModeFilter] = useState<string>("");
  const [selectedKey, setSelectedKey] = useState<string | null>(() =>
    initialPlay && allEntries.some((e) => entryKey(e) === initialPlay)
      ? initialPlay
      : null,
  );

  // Resolve a sibling assembly by module + id — for the descent's lineage nodes.
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

  // The shelves that actually hold plays (skip 00/01 and any empty module).
  const totalByModule = useMemo(() => {
    const m = new Map<string, number>();
    for (const e of allEntries)
      m.set(e.doc.moduleId, (m.get(e.doc.moduleId) ?? 0) + 1);
    return m;
  }, [allEntries]);
  const shelves = useMemo(
    () => modules.filter((m) => (totalByModule.get(m.id) ?? 0) > 0),
    [modules, totalByModule],
  );

  // Does an entry pass the search / type / mode filters (everything but shelf)?
  const passesBase = useCallback(
    (e: LibraryEntry, q: string) => {
      const meta = e.doc.meta;
      if (
        q &&
        !meta.label.toLowerCase().includes(q) &&
        !meta.blurb.toLowerCase().includes(q)
      )
        return false;
      if (e.kind === "assembly") {
        if (typeFilter === "signal") return false;
        if (modeFilter) return false; // assemblies carry no mode
      } else {
        if (typeFilter === "assembly") return false;
        if (modeFilter && !e.doc.meta.modes.includes(modeFilter)) return false;
      }
      return true;
    },
    [typeFilter, modeFilter],
  );

  // The flip set: every filter applied, in canonical order.
  const filtered = useMemo(() => {
    const q = query.trim().toLowerCase();
    return allEntries.filter(
      (e) =>
        passesBase(e, q) &&
        (moduleFilter === "all" || e.doc.moduleId === moduleFilter),
    );
  }, [allEntries, query, moduleFilter, passesBase]);

  // Per-shelf counts: every filter except the shelf, so the spine shows what each
  // shelf would yield under the current search / type / mode.
  const shelfCounts = useMemo(() => {
    const q = query.trim().toLowerCase();
    const counts = new Map<string, number>();
    let all = 0;
    for (const e of allEntries) {
      if (!passesBase(e, q)) continue;
      all++;
      counts.set(e.doc.moduleId, (counts.get(e.doc.moduleId) ?? 0) + 1);
    }
    return { counts, all };
  }, [allEntries, query, passesBase]);

  const visSignals = useMemo(
    () => filtered.filter((e) => e.kind === "signal"),
    [filtered],
  );
  const visAssemblies = useMemo(
    () => filtered.filter((e) => e.kind === "assembly"),
    [filtered],
  );

  const selectedIndex = selectedKey
    ? filtered.findIndex((e) => entryKey(e) === selectedKey)
    : -1;
  const selectedEntry = selectedIndex >= 0 ? filtered[selectedIndex] : null;
  const inSpread = selectedEntry !== null;

  const openEntry = useCallback((e: LibraryEntry) => setSelectedKey(entryKey(e)), []);
  const toIndex = useCallback(() => setSelectedKey(null), []);

  const flip = useCallback(
    (dir: 1 | -1) => {
      setSelectedKey((cur) => {
        if (!cur || filtered.length === 0) return cur;
        const i = filtered.findIndex((e) => entryKey(e) === cur);
        if (i < 0) return cur;
        const next = (i + dir + filtered.length) % filtered.length;
        return entryKey(filtered[next]);
      });
    },
    [filtered],
  );

  // A lineage node always points at a sibling assembly in the same module; clear
  // type/mode so the target can't be hidden, then open it.
  const jumpTo = useCallback(
    (moduleId: string, id: string) => {
      const key = `${moduleId}/${id}`;
      if (!allEntries.some((e) => entryKey(e) === key)) return;
      setTypeFilter("all");
      setModeFilter("");
      setSelectedKey(key);
    },
    [allEntries],
  );

  // Picking a shelf is a browsing move — return to the index, filtered.
  const setShelf = useCallback((id: string) => {
    setModuleFilter(id);
    setSelectedKey(null);
  }, []);

  const toggleMode = useCallback(
    (m: string) => setModeFilter((cur) => (cur === m ? "" : m)),
    [],
  );

  // Turn pages with the arrow keys while reading; Esc returns to the index.
  useEffect(() => {
    if (!inSpread) return;
    const onKey = (ev: KeyboardEvent) => {
      const t = ev.target as HTMLElement | null;
      if (t && (t.tagName === "INPUT" || t.tagName === "TEXTAREA")) return;
      if (ev.key === "ArrowRight") {
        ev.preventDefault();
        flip(1);
      } else if (ev.key === "ArrowLeft") {
        ev.preventDefault();
        flip(-1);
      } else if (ev.key === "Escape") {
        toIndex();
      }
    };
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, [inSpread, flip, toIndex]);

  // The detail is its own immersive reading view (it carries its own back + flip
  // controls); the gallery gets the sticky top bar of filters.
  if (inSpread) {
    return (
      <main className="mx-auto w-full max-w-[80rem] px-5 py-7 sm:px-8 sm:py-9">
        <PlaySpread
          entry={selectedEntry}
          moduleLabel={labelFor(selectedEntry.doc.moduleId)}
          resolveAssembly={resolveAssembly}
          index={selectedIndex}
          total={filtered.length}
          onPrev={() => flip(-1)}
          onNext={() => flip(1)}
          onIndex={toIndex}
          onJump={jumpTo}
        />
      </main>
    );
  }

  return (
    <div className="flex min-h-dvh w-full flex-col">
      {/* — sticky gallery top bar: nav + filters, content scrolls under it — */}
      <header className="sticky top-0 z-20 border-b border-border bg-canvas/80 backdrop-blur">
        <div className="mx-auto flex w-full max-w-[88rem] flex-wrap items-center gap-x-5 gap-y-3 px-5 py-3 sm:px-8">
          <Link
            href="/"
            className="inline-flex items-center gap-1.5 text-[12px] tracking-[0.02em] text-muted-foreground transition-colors hover:text-primary"
          >
            <ArrowLeft className="size-3.5" aria-hidden />
            Canvas
          </Link>
          <div className="ml-auto flex flex-wrap items-center gap-2.5">
            <div className="relative">
              <Search
                className="pointer-events-none absolute top-1/2 left-2.5 size-4 -translate-y-1/2 text-muted-foreground"
                aria-hidden
              />
              <input
                type="search"
                value={query}
                onChange={(e) => setQuery(e.target.value)}
                placeholder="Search the playbook…"
                aria-label="Search the playbook"
                className="w-[13rem] rounded-lg border border-border bg-card py-1.5 pr-3 pl-8 text-[13px] text-foreground placeholder:text-muted-foreground focus-visible:ring-2 focus-visible:ring-ring focus-visible:outline-none"
              />
            </div>
            <Segmented
              ariaLabel="Filter by type"
              value={typeFilter}
              onChange={(v) => setTypeFilter(v as TypeFilter)}
              options={[
                { value: "all", label: "All" },
                { value: "signal", label: "Signals" },
                { value: "assembly", label: "Assemblies" },
              ]}
            />
            <Segmented
              ariaLabel="Filter by mode"
              value={modeFilter}
              onChange={toggleMode}
              options={MODE_NAMES.map((m) => ({ value: m, label: m }))}
              capitalize
            />
          </div>
        </div>
        <div className="mx-auto flex w-full max-w-[88rem] flex-wrap items-center gap-2 px-5 pb-3 sm:px-8">
          <ShelfPill
            label="All shelves"
            count={shelfCounts.all}
            active={moduleFilter === "all"}
            onClick={() => setShelf("all")}
          />
          {shelves.map((m) => (
            <ShelfPill
              key={m.id}
              label={m.title || m.name}
              count={shelfCounts.counts.get(m.id) ?? 0}
              active={moduleFilter === m.id}
              onClick={() => setShelf(m.id)}
            />
          ))}
        </div>
      </header>

      {/* — the gallery — */}
      <main className="mx-auto w-full max-w-[88rem] flex-1 px-5 pt-8 pb-20 sm:px-8 sm:pt-10">
        <PlayIndex
          signals={visSignals}
          assemblies={visAssemblies}
          totals={{
            signals: signals.length,
            assemblies: assemblies.length,
            shelves: shelves.length,
          }}
          moduleLabel={labelFor}
          onOpen={openEntry}
        />
      </main>
    </div>
  );
}

function ShelfPill({
  label,
  count,
  active,
  onClick,
}: {
  label: string;
  count: number;
  active: boolean;
  onClick: () => void;
}) {
  return (
    <button
      type="button"
      onClick={onClick}
      data-active={active}
      className="inline-flex items-center gap-1.5 rounded-full border border-border px-3 py-1 text-[11px] text-muted-foreground transition-colors hover:text-foreground data-[active=true]:border-primary/40 data-[active=true]:bg-secondary data-[active=true]:text-foreground"
    >
      <span>{label}</span>
      <span className="opacity-60">{count}</span>
    </button>
  );
}

/** A segmented control in the canvas style — active segment filled with the secondary tint. */
function Segmented({
  options,
  value,
  onChange,
  ariaLabel,
  capitalize,
}: {
  options: { value: string; label: string }[];
  value: string;
  onChange: (v: string) => void;
  ariaLabel: string;
  capitalize?: boolean;
}) {
  return (
    <div
      role="group"
      aria-label={ariaLabel}
      className="inline-flex overflow-hidden rounded-lg border border-border"
    >
      {options.map((o, i) => {
        const on = value === o.value;
        return (
          <button
            key={o.value}
            type="button"
            aria-pressed={on}
            onClick={() => onChange(o.value)}
            className={cn(
              "px-3 py-1.5 text-[12.5px] transition-colors",
              capitalize && "capitalize",
              i > 0 && "border-l border-border",
              on
                ? "bg-secondary text-foreground"
                : "bg-card text-muted-foreground hover:text-foreground",
            )}
          >
            {o.label}
          </button>
        );
      })}
    </div>
  );
}
