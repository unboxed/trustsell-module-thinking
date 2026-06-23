"use client";

import type { ReactNode } from "react";
import { ArrowLeft, ChevronLeft, ChevronRight } from "lucide-react";
import ReactMarkdown from "react-markdown";
import remarkGfm from "remark-gfm";

import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import type { LibraryEntry, ResolveAssembly } from "./types";
import { entryKey } from "./types";
import { ConfidenceMeter, GatherMark, ModeChip, Tab } from "./bits";
import { Descent } from "./descent";

/* ---------------------------------------------------------------------------
 * The detail — one play, full-screen, like a movie's page.
 *
 * A full-width title band leads with a big name + the verdict. Below it, the
 * prose (What it means / In practice / For the build, or What it gathers /
 * Lineage) reads down the left, while THE DESCENT + the data layer ride along
 * sticky on the right. Flip across the filtered set with the controls or ← / →.
 * No modal — the detail is the page. Styled with the canvas design system.
 * ------------------------------------------------------------------------- */

const EYEBROW = "text-[11px] font-semibold tracking-[0.1em] uppercase text-ink-eyebrow";

export function PlaySpread({
  entry,
  moduleLabel,
  resolveAssembly,
  index,
  total,
  onPrev,
  onNext,
  onIndex,
  onJump,
}: {
  entry: LibraryEntry;
  moduleLabel: string;
  resolveAssembly: ResolveAssembly;
  index: number;
  total: number;
  onPrev: () => void;
  onNext: () => void;
  onIndex: () => void;
  onJump: (moduleId: string, id: string) => void;
}) {
  const meta = entry.doc.meta;
  const signal = entry.kind === "signal" ? entry.doc.meta : null;
  const assembly = entry.kind === "assembly" ? entry.doc.meta : null;

  const tab = signal ? (signal.kind ?? "signal") : (assembly!.about ?? "gather");
  const eyebrow =
    `${moduleLabel} · ${signal ? "signal" : "assembly"}` +
    (assembly?.about ? ` · keyed on ${assembly.about}` : "");

  return (
    <div className="flex flex-col">
      {/* — the page controls — */}
      <div className="flex items-center justify-between gap-4 pb-7">
        <button
          type="button"
          onClick={onIndex}
          className="inline-flex items-center gap-1.5 text-[12px] text-muted-foreground transition-colors hover:text-primary"
        >
          <ArrowLeft className="size-3.5" aria-hidden />
          Gallery
        </button>
        <div className="flex items-center gap-3">
          <Button variant="outline" size="icon" aria-label="Previous play" onClick={onPrev}>
            <ChevronLeft className="size-4" />
          </Button>
          <span className="text-[12px] tabular-nums text-muted-foreground">
            {index + 1} / {total}
          </span>
          <Button variant="outline" size="icon" aria-label="Next play" onClick={onNext}>
            <ChevronRight className="size-4" />
          </Button>
        </div>
      </div>

      {/* — the play — */}
      <div key={entryKey(entry)}>
        {/* the title band */}
        <header className="border-b border-border pb-8">
          <p className="text-[12px] text-muted-foreground">{eyebrow}</p>
          <div className="mt-4 flex items-center gap-4">
            <Tab>{tab}</Tab>
            {signal ? <ConfidenceMeter confidence={signal.confidence} /> : <GatherMark />}
          </div>
          <h1 className="mt-4 text-[clamp(30px,4.5vw,46px)] leading-[1.05] font-semibold tracking-[-0.02em] text-ink-title">
            {meta.label}
          </h1>
          <p className="mt-5 max-w-3xl text-[clamp(15px,1.2vw,19px)] leading-[1.5] text-ink-body">
            {meta.blurb}
          </p>
          {signal && signal.modes.length > 0 && (
            <div className="mt-5 flex flex-wrap gap-1.5">
              {signal.modes.map((m) => (
                <ModeChip key={m} mode={m} />
              ))}
            </div>
          )}
        </header>

        {/* the content: prose down the left, the descent riding sticky on the right */}
        <div className="grid gap-10 pt-9 md:grid-cols-[1.1fr_0.9fr] md:gap-14">
          <article className="module-doc min-w-0 [&>h1:first-child]:hidden">
            <ReactMarkdown
              remarkPlugins={[remarkGfm]}
              components={{
                a: ({ children }) => (
                  <span className="text-primary underline underline-offset-2">
                    {children}
                  </span>
                ),
              }}
            >
              {entry.doc.body}
            </ReactMarkdown>
          </article>

          <aside className="min-w-0">
            <div className="md:sticky md:top-6">
              <p className={`${EYEBROW} mb-4`}>the descent</p>
              <Descent
                entry={entry}
                resolveAssembly={resolveAssembly}
                onJump={onJump}
              />

              {signal && (
                <div className="mt-9 flex flex-col gap-4">
                  {signal.measures.length > 0 && (
                    <DataRow label="measures">
                      {signal.measures.map((m) => (
                        <Badge key={m} variant="secondary">
                          {m}
                        </Badge>
                      ))}
                    </DataRow>
                  )}
                  {signal.answers.length > 0 && (
                    <DataRow label="answers">
                      {signal.answers.map((q) => (
                        <Badge key={q} variant="outline">
                          {q}
                        </Badge>
                      ))}
                    </DataRow>
                  )}
                  {signal.needs.length > 0 && (
                    <DataRow label="needs">
                      {signal.needs.map((nd) => (
                        <Badge key={nd} variant="secondary">
                          {nd}
                        </Badge>
                      ))}
                    </DataRow>
                  )}
                  {signal.pull && (
                    <DataRow label="pull">
                      <span className="text-[13px] leading-[1.5] text-ink-body">
                        {signal.pull}
                      </span>
                    </DataRow>
                  )}
                </div>
              )}
            </div>
          </aside>
        </div>
      </div>
    </div>
  );
}

function DataRow({ label, children }: { label: string; children: ReactNode }) {
  return (
    <div className="flex flex-col gap-2 border-t border-border pt-3">
      <p className={EYEBROW}>{label}</p>
      <div className="flex flex-wrap gap-1.5">{children}</div>
    </div>
  );
}
