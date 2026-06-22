"use client";

import { Dialog as DialogPrimitive } from "radix-ui";
import { XIcon } from "lucide-react";
import ReactMarkdown from "react-markdown";
import remarkGfm from "remark-gfm";

import { cn } from "@/lib/utils";
import { ScrollArea } from "@/components/ui/scroll-area";
import { Button } from "@/components/ui/button";
import {
  HandleChip,
  LineageBadge,
  ModeChip,
  type LibraryEntry,
  type ResolveAssembly,
} from "./entry-card";

/**
 * The entry detail overlay: a modal that reveals one assembly's / signal's full
 * body — the worked example, threshold rule and lineage notes — read from its own
 * doc. Mirrors the channel panel's Dialog so the app keeps one "click → panel" model.
 * The lineage chips here are clickable too: they swap the overlay to the assembly a
 * signal reads, so you can walk down a floor without leaving. Open is controlled by
 * `entry`; null = closed.
 */
export function EntryOverlay({
  entry,
  moduleLabel,
  resolveAssembly,
  onOpenAssembly,
  onClose,
}: {
  entry: LibraryEntry | null;
  moduleLabel: string;
  resolveAssembly: ResolveAssembly;
  onOpenAssembly: (moduleId: string, id: string) => void;
  onClose: () => void;
}) {
  // Narrow by floor up front so each meta keeps its own shape.
  const signal = entry?.kind === "signal" ? entry.doc : null;
  const assembly = entry?.kind === "assembly" ? entry.doc : null;
  const meta = entry?.doc.meta; // common fields: label, blurb, inputs
  const moduleId = entry?.doc.moduleId ?? "";

  // Lineage: resolve each input so a clickable badge shows the real label; the rest
  // (record ids) stay quiet handles.
  const inputs = meta?.inputs ?? [];
  const assemblyInputs = inputs.filter((id) => resolveAssembly(moduleId, id));
  const recordInputs = inputs.filter((id) => !resolveAssembly(moduleId, id));

  const eyebrow =
    `${moduleLabel} · ${signal ? "Signal" : "Assembly"}` +
    (assembly?.meta.about ? ` · keyed on ${assembly.meta.about}` : "");

  return (
    <DialogPrimitive.Root
      open={entry !== null}
      onOpenChange={(open) => {
        if (!open) onClose();
      }}
    >
      <DialogPrimitive.Portal>
        <DialogPrimitive.Overlay
          className={cn(
            "fixed inset-0 z-50 bg-slate-900/20 supports-backdrop-filter:backdrop-blur-xs",
            "data-open:animate-in data-open:fade-in-0 data-closed:animate-out data-closed:fade-out-0",
          )}
        />
        <DialogPrimitive.Content
          className={cn(
            "fixed top-1/2 left-1/2 z-50 -translate-x-1/2 -translate-y-1/2",
            "flex h-[min(84vh,720px)] w-[min(760px,94vw)] flex-col overflow-hidden",
            "rounded-2xl border border-border/70 bg-popover text-popover-foreground shadow-2xl",
            "duration-200 data-open:animate-in data-open:fade-in-0 data-open:zoom-in-95",
            "data-closed:animate-out data-closed:fade-out-0 data-closed:zoom-out-95",
          )}
        >
          {entry && meta && (
            <>
              <div className="flex items-start justify-between gap-4 border-b border-border/70 p-6 pb-5">
                <div className="flex min-w-0 flex-col gap-1">
                  <p className="text-[11px] font-semibold tracking-[0.1em] text-ink-eyebrow uppercase">
                    {eyebrow}
                  </p>
                  <DialogPrimitive.Title className="font-heading text-xl font-semibold tracking-[-0.01em] text-ink-title">
                    {meta.label}
                  </DialogPrimitive.Title>
                  <DialogPrimitive.Description className="text-sm text-ink-body">
                    {meta.blurb}
                  </DialogPrimitive.Description>

                  {/* facets + lineage */}
                  <div className="mt-2.5 flex flex-col gap-2">
                    {signal && (signal.meta.modes.length > 0 || signal.meta.confidence) && (
                      <div className="flex flex-wrap items-center gap-1.5">
                        {signal.meta.modes.map((m) => (
                          <ModeChip key={m} mode={m} />
                        ))}
                        {signal.meta.confidence && (
                          <span className="text-[12px] tracking-wide text-ink-eyebrow lowercase">
                            confidence: {signal.meta.confidence}
                          </span>
                        )}
                      </div>
                    )}
                    {(assemblyInputs.length > 0 || recordInputs.length > 0) && (
                      <div className="flex flex-wrap items-center gap-1.5">
                        <span className="text-[10.5px] tracking-wide text-ink-eyebrow uppercase">
                          reads
                        </span>
                        {assemblyInputs.map((id) => (
                          <LineageBadge
                            key={id}
                            label={resolveAssembly(moduleId, id)!.meta.label}
                            onClick={() => onOpenAssembly(moduleId, id)}
                          />
                        ))}
                        {recordInputs.map((id) => (
                          <HandleChip key={id} dashed>
                            {id}
                          </HandleChip>
                        ))}
                      </div>
                    )}
                    {signal && signal.meta.answers.length > 0 && (
                      <div className="flex flex-wrap items-center gap-1.5">
                        <span className="text-[10.5px] tracking-wide text-ink-eyebrow uppercase">
                          answers
                        </span>
                        {signal.meta.answers.map((q) => (
                          <HandleChip key={q}>{q}</HandleChip>
                        ))}
                      </div>
                    )}
                  </div>
                </div>
                <DialogPrimitive.Close asChild>
                  <Button variant="ghost" size="icon-sm" className="-mt-1 -mr-1 shrink-0">
                    <XIcon />
                    <span className="sr-only">Close</span>
                  </Button>
                </DialogPrimitive.Close>
              </div>

              <ScrollArea className="min-h-0 flex-1">
                <div className="module-doc p-6 pt-4">
                  <ReactMarkdown
                    remarkPlugins={[remarkGfm]}
                    components={{
                      // The bodies link to sibling repo files (../told.md, channels/*),
                      // which don't resolve in the viewer — keep the text, drop the nav.
                      a: ({ children }) => (
                        <span className="text-primary/80 underline underline-offset-2">
                          {children}
                        </span>
                      ),
                    }}
                  >
                    {entry.doc.body}
                  </ReactMarkdown>
                </div>
              </ScrollArea>
            </>
          )}
        </DialogPrimitive.Content>
      </DialogPrimitive.Portal>
    </DialogPrimitive.Root>
  );
}
