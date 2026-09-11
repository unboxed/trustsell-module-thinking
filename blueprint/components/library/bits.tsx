import type { ReactNode } from "react";

import { cn } from "@/lib/utils";
import { Badge } from "@/components/ui/badge";
import { confidenceFill } from "./types";

/* ---------------------------------------------------------------------------
 * Small presentational pieces shared by the play card and the spread — styled
 * with the canvas design system (ink tokens + shadcn Badge), no bespoke CSS.
 * ------------------------------------------------------------------------- */

/** A kind / about tab: an uppercase eyebrow label (RISK, A PERSON, …). */
export function Tab({ children }: { children: ReactNode }) {
  return (
    <span className="text-[11px] font-semibold tracking-[0.1em] text-muted-foreground uppercase">
      {children}
    </span>
  );
}

/** Confidence as three dots (high = 3, graded = 2, low = 1). */
export function ConfidenceMeter({ confidence }: { confidence?: string }) {
  const fill = confidenceFill(confidence);
  return (
    <span className="flex items-center gap-2">
      <span className="flex items-center gap-1" aria-hidden>
        {[0, 1, 2].map((i) => (
          <span
            key={i}
            className={cn(
              "size-1.5 rounded-full",
              i < fill ? "bg-foreground" : "bg-border",
            )}
          />
        ))}
      </span>
      {confidence && (
        <span className="text-[11px] tracking-[0.02em] text-muted-foreground">
          {confidence}
        </span>
      )}
    </span>
  );
}

/** An assembly's quiet stand-in for the meter: no opinion to grade, just floor. */
export function GatherMark() {
  return (
    <span className="text-[11px] tracking-[0.02em] text-muted-foreground">
      gather · floor
    </span>
  );
}

/** A category-of-work chip (plant / grow / nurture). */
export function ModeChip({ mode }: { mode: string }) {
  return (
    <Badge variant="outline" className="capitalize">
      {mode}
    </Badge>
  );
}
