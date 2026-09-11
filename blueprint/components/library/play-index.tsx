"use client";

import type { ReactNode } from "react";

import type { LibraryEntry } from "./types";
import { entryKey } from "./types";
import { PlayCard } from "./play-card";

/* ---------------------------------------------------------------------------
 * The gallery — browse the plays like posters.
 *
 * A bold header band states the thesis and the tally; below it the deck is a
 * pure poster grid, grouped into Signals (the first opinion) and Assemblies (the
 * floor). Big bold cards, scroll straight down. Picking one opens its detail.
 * ------------------------------------------------------------------------- */

export function PlayIndex({
  signals,
  assemblies,
  totals,
  moduleLabel,
  onOpen,
}: {
  signals: LibraryEntry[];
  assemblies: LibraryEntry[];
  totals: { signals: number; assemblies: number; shelves: number };
  moduleLabel: (id: string) => string;
  onOpen: (e: LibraryEntry) => void;
}) {
  const empty = signals.length === 0 && assemblies.length === 0;

  return (
    <div>
      <header className="border-b border-border pb-9">
        <h1 className="text-[clamp(34px,5vw,52px)] font-semibold tracking-[-0.02em] text-foreground">
          The Playbook
        </h1>
        <p className="mt-4 max-w-2xl text-[clamp(15px,1.2vw,19px)] leading-[1.5] text-muted-foreground">
          Every read the assistants make, and every gather it stands on. Browse the
          deck; open a play to read it and trace it down.
        </p>
        <p className="mt-5 text-[12.5px] tracking-[0.02em] text-muted-foreground">
          {totals.signals} reads &middot; {totals.assemblies} gathers &middot; across{" "}
          {totals.shelves} shelves
        </p>
      </header>

      {empty ? (
        <div className="flex min-h-[40vh] flex-col items-center justify-center text-center">
          <p className="text-xl font-semibold text-foreground">Nothing on this shelf</p>
          <p className="mt-3 max-w-sm text-[14px] text-muted-foreground">
            No plays match these filters. Clear the search or pick another shelf.
          </p>
        </div>
      ) : (
        <div className="flex flex-col gap-14 pt-10">
          {signals.length > 0 && (
            <Section title="Signals" tagline="the first opinion" count={signals.length}>
              {signals.map((e) => (
                <PlayCard
                  key={entryKey(e)}
                  entry={e}
                  moduleLabel={moduleLabel(e.doc.moduleId)}
                  onOpen={() => onOpen(e)}
                />
              ))}
            </Section>
          )}
          {assemblies.length > 0 && (
            <Section title="Assemblies" tagline="the floor" count={assemblies.length}>
              {assemblies.map((e) => (
                <PlayCard
                  key={entryKey(e)}
                  entry={e}
                  moduleLabel={moduleLabel(e.doc.moduleId)}
                  onOpen={() => onOpen(e)}
                />
              ))}
            </Section>
          )}
        </div>
      )}
    </div>
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
      <div className="mb-5 flex items-baseline gap-3 border-b border-border pb-3">
        <h2 className="text-[13px] font-semibold tracking-[0.08em] text-muted-foreground uppercase">
          {title}
        </h2>
        <span className="text-[12.5px] text-muted-foreground italic">{tagline}</span>
        <span className="ml-auto text-[12px] text-muted-foreground">{count}</span>
      </div>
      <div className="grid gap-5 grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
        {children}
      </div>
    </section>
  );
}
