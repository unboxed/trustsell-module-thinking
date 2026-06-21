"use client";

import { Dialog as DialogPrimitive } from "radix-ui";
import { XIcon } from "lucide-react";

import { ScrollArea } from "@/components/ui/scroll-area";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "@/components/ui/tooltip";
import { cn } from "@/lib/utils";
import type { Channel, ChannelRecord, RecordField } from "@/lib/blueprint.config";

/**
 * The channel detail panel: a modal that reveals one channel's RAW DATA, read from
 * that channel's own doc (`01-integrations/channels/<id>.md`). Each record is a pill
 * beside its fields — themselves discrete chips. A field's real provider name (or
 * "derived") shows on hover. A channel with no records yet degrades to a quiet
 * placeholder. Open is controlled by `channel`; null = closed.
 */
export function ChannelPanel({
  channel,
  onClose,
}: {
  channel: Channel | null;
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
                <TooltipProvider>
                  {channel.records.length > 0 ? (
                    <ul className="flex flex-col divide-y divide-border/60 p-6 pt-2">
                      {channel.records.map((record) => (
                        <RecordRow key={record.label} record={record} />
                      ))}
                    </ul>
                  ) : (
                    <p className="p-6 pt-4 text-[13px] leading-[1.5] text-muted-foreground italic">
                      Records coming soon.
                    </p>
                  )}
                </TooltipProvider>
              </ScrollArea>
            </>
          )}
        </DialogPrimitive.Content>
      </DialogPrimitive.Portal>
    </DialogPrimitive.Root>
  );
}

/**
 * One record: its label pill beside its field chips, each chip naming the field with
 * its provider / source on hover.
 */
function RecordRow({ record }: { record: ChannelRecord }) {
  return (
    <li className="py-3.5">
      <div className="flex flex-col gap-1.5 sm:flex-row sm:gap-4">
        <div className="sm:w-40 sm:shrink-0">
          <MetaPill>{record.label}</MetaPill>
        </div>
        <div className="flex min-w-0 flex-col gap-2">
          {record.fields.length > 0 ? (
            <div className="flex flex-wrap gap-1.5">
              {record.fields.map((f) => (
                <FieldChip key={f.label} field={f} />
              ))}
            </div>
          ) : (
            <p className="text-[13px] leading-[1.5] text-muted-foreground italic">
              Field list coming soon.
            </p>
          )}
        </div>
      </div>
    </li>
  );
}

/**
 * One raw-data field as a quiet chip subordinate to the record pill. A field that
 * names its source gets a hover tooltip; a `derived` field reads as a dashed, muted
 * chip so "this isn't a raw field the API hands over" is legible.
 */
function FieldChip({ field }: { field: RecordField }) {
  const derived = field.source?.toLowerCase() === "derived";
  const chip = (
    <Badge
      variant="secondary"
      className={cn(
        "font-normal",
        derived &&
          "border border-dashed border-border bg-transparent text-muted-foreground",
      )}
    >
      {field.label}
    </Badge>
  );

  if (!field.source) return chip;

  return (
    <Tooltip>
      <TooltipTrigger asChild>{chip}</TooltipTrigger>
      <TooltipContent>{derived ? "derived — not a raw field" : field.source}</TooltipContent>
    </Tooltip>
  );
}

/** A small uppercase pill used for record labels and channel counts. */
export function MetaPill({ children }: { children: React.ReactNode }) {
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
