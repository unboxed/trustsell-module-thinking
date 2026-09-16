"use client";

import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";
import { ScrollArea } from "@/components/ui/scroll-area";
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
    <Dialog
      open={channel !== null}
      onOpenChange={(open) => {
        if (!open) onClose();
      }}
    >
      <DialogContent className="flex h-[min(78vh,640px)] w-[min(640px,92vw)] max-w-[min(640px,92vw)] flex-col gap-0 overflow-hidden p-0">
        {channel && (
          <>
            <DialogHeader className="gap-1 border-b border-border p-6 pr-12 text-left">
              <p className="text-[11px] font-semibold tracking-[0.1em] text-muted-foreground uppercase">
                {eyebrow}
              </p>
              <DialogTitle className="font-heading text-xl font-semibold tracking-[-0.01em] text-foreground">
                {channel.name}
              </DialogTitle>
              <DialogDescription className="text-sm text-muted-foreground">
                The raw data this channel can pull in — carried as-is.
              </DialogDescription>
              <div className="mt-1 flex flex-wrap gap-1.5">
                <MetaPill>{channel.records.length} records</MetaPill>
                {ghost && <MetaPill>not connected yet</MetaPill>}
              </div>
            </DialogHeader>

            <ScrollArea className="min-h-0 flex-1">
              <TooltipProvider>
                {channel.records.length > 0 ? (
                  <ul className="flex flex-col divide-y divide-border p-6 pt-2">
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
      </DialogContent>
    </Dialog>
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
    <Badge
      variant="outline"
      className="rounded-full text-[10px] font-medium tracking-wider text-muted-foreground uppercase"
    >
      {children}
    </Badge>
  );
}
