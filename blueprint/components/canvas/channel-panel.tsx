"use client";

import { Dialog as DialogPrimitive } from "radix-ui";
import { XIcon } from "lucide-react";

import { ScrollArea } from "@/components/ui/scroll-area";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";
import { recordDescription } from "@/lib/channel-records";
import type { Channel } from "@/lib/blueprint.config";
import { MetaPill } from "./module-panel";

/**
 * The channel detail panel: a modal that reveals one channel's RAW DATA. The node
 * face stays compact; clicking a plug opens this. Each record is a chip (its label,
 * from the frontmatter) beside its one-line field description (paired back from the
 * module body via recordDescription). A section not yet written degrades to a quiet
 * placeholder. Open is controlled by `channel`; null = closed.
 */
export function ChannelPanel({
  channel,
  body,
  onClose,
}: {
  channel: Channel | null;
  body: string;
  onClose: () => void;
}) {
  const eyebrow = channel?.source === "builtin" ? "Tools library" : "Connections";
  const ghost = channel?.source === "account" && !channel.connected;

  return (
    <DialogPrimitive.Root
      open={channel !== null}
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
            "flex h-[min(78vh,640px)] w-[min(640px,92vw)] flex-col overflow-hidden",
            "rounded-2xl border border-border/70 bg-popover text-popover-foreground shadow-2xl",
            "duration-200 data-open:animate-in data-open:fade-in-0 data-open:zoom-in-95",
            "data-closed:animate-out data-closed:fade-out-0 data-closed:zoom-out-95",
          )}
        >
          {channel && (
            <>
              <div className="flex items-start justify-between gap-4 border-b border-border/70 p-6">
                <div className="flex flex-col gap-1">
                  <p className="text-[11px] font-semibold tracking-[0.1em] text-ink-eyebrow uppercase">
                    {eyebrow}
                  </p>
                  <DialogPrimitive.Title className="font-heading text-xl font-semibold tracking-[-0.01em] text-ink-title">
                    {channel.name}
                  </DialogPrimitive.Title>
                  <DialogPrimitive.Description className="text-sm text-ink-body">
                    The raw data this channel can pull in — carried as-is.
                  </DialogPrimitive.Description>
                  <div className="mt-1 flex flex-wrap gap-1.5">
                    <MetaPill>{channel.records.length} records</MetaPill>
                    {ghost && <MetaPill>not connected yet</MetaPill>}
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
                <ul className="flex flex-col divide-y divide-border/60 p-6 pt-2">
                  {channel.records.map((label) => {
                    const desc = recordDescription(body, label);
                    return (
                      <li key={label} className="flex flex-col gap-1.5 py-3.5 sm:flex-row sm:gap-4">
                        <div className="sm:w-40 sm:shrink-0">
                          <MetaPill>{label}</MetaPill>
                        </div>
                        <p
                          className={cn(
                            "text-[13px] leading-[1.5]",
                            desc ? "text-ink-body" : "text-muted-foreground italic",
                          )}
                        >
                          {desc ?? "Field list coming soon."}
                        </p>
                      </li>
                    );
                  })}
                </ul>
              </ScrollArea>
            </>
          )}
        </DialogPrimitive.Content>
      </DialogPrimitive.Portal>
    </DialogPrimitive.Root>
  );
}
