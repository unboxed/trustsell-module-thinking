"use client";

import ReactMarkdown from "react-markdown";
import remarkGfm from "remark-gfm";
import { Dialog as DialogPrimitive } from "radix-ui";
import { XIcon } from "lucide-react";

import { ScrollArea } from "@/components/ui/scroll-area";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";
import type { CanvasNode } from "@/lib/blueprint.config";

/**
 * The detail panel: a centered overlay window (a modal dialog) that shows a
 * module's live thinking. It opens at a fixed, comfortably large size and the
 * body scrolls inside — the canvas behind dims but stays put. The header is the
 * same card face (name, title, blurb); the body is the module's CLAUDE.md
 * narrative rendered straight from disk, so editing a doc and reloading updates
 * it. Open is controlled by `node`; null = closed. Esc or the backdrop closes.
 */
export function ModulePanel({
  node,
  onClose,
}: {
  node: CanvasNode | null;
  onClose: () => void;
}) {
  return (
    <DialogPrimitive.Root
      open={node !== null}
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
            "flex h-[min(80vh,720px)] w-[min(880px,92vw)] flex-col overflow-hidden",
            "rounded-2xl border border-border/70 bg-popover text-popover-foreground shadow-2xl",
            "duration-200 data-open:animate-in data-open:fade-in-0 data-open:zoom-in-95",
            "data-closed:animate-out data-closed:fade-out-0 data-closed:zoom-out-95",
          )}
        >
          {node && (
            <>
              <div className="flex items-start justify-between gap-4 border-b border-border/70 p-6">
                <div className="flex flex-col gap-1">
                  <p className="text-[11px] font-semibold tracking-[0.1em] text-ink-eyebrow uppercase">
                    {node.name}
                  </p>
                  <DialogPrimitive.Title className="font-heading text-xl font-semibold tracking-[-0.01em] text-ink-title">
                    {node.title}
                  </DialogPrimitive.Title>
                  <DialogPrimitive.Description className="text-sm text-ink-body">
                    {node.blurb}
                  </DialogPrimitive.Description>
                  {(node.tier || node.modes?.length || node.optional) && (
                    <div className="mt-1 flex flex-wrap gap-1.5">
                      {node.tier && <MetaPill>{node.tier}</MetaPill>}
                      {node.modes?.map((m) => (
                        <MetaPill key={m}>{m}</MetaPill>
                      ))}
                      {node.optional && <MetaPill>optional</MetaPill>}
                    </div>
                  )}
                </div>
                <DialogPrimitive.Close asChild>
                  <Button variant="ghost" size="icon-sm" className="-mt-1 -mr-1 shrink-0">
                    <XIcon />
                    <span className="sr-only">Close</span>
                  </Button>
                </DialogPrimitive.Close>
              </div>

              <ScrollArea className="min-h-0 flex-1">
                <div className="module-doc p-6">
                  {node.body ? (
                    <ReactMarkdown remarkPlugins={[remarkGfm]}>
                      {node.body}
                    </ReactMarkdown>
                  ) : (
                    <p className="text-sm text-muted-foreground">
                      No notes yet for this module.
                    </p>
                  )}
                </div>
              </ScrollArea>
            </>
          )}
        </DialogPrimitive.Content>
      </DialogPrimitive.Portal>
    </DialogPrimitive.Root>
  );
}

function MetaPill({ children }: { children: React.ReactNode }) {
  return (
    <span
      className={cn(
        "rounded-full border border-slate-300/70 px-2 py-0.5",
        "text-[10px] font-medium tracking-wider text-slate-400 uppercase",
      )}
    >
      {children}
    </span>
  );
}
