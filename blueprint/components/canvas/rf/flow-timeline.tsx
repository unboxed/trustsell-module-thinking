"use client";

import { Fragment } from "react";
import { ChevronLeft, ChevronRight, Waypoints, X } from "lucide-react";

import { cn } from "@/lib/utils";
import { PHASE_NAMES, type FlowStep } from "@/lib/flow-trace";

/**
 * The "Trace the flow" instrument. Two states living in one overlay:
 *  - idle (step == null): a quiet entry pill;
 *  - tracing: a turn-by-turn route bar — phase eyebrow, the maneuver, the detail
 *    line from flow.md, and a phase-segmented rail that echoes the canvas wires
 *    (a "you are here" node travels Brain → experts → You).
 * The canvas owns the boldness (the lit route); this chrome stays disciplined.
 */
export function FlowTimeline({
  step,
  steps,
  onStart,
  onStep,
  onExit,
}: {
  step: number | null;
  steps: FlowStep[];
  onStart: () => void;
  onStep: (n: number) => void;
  onExit: () => void;
}) {
  // Keep clicks on the panel from being read as a canvas pan.
  const swallow = (e: React.PointerEvent) => e.stopPropagation();

  if (step == null) {
    return (
      <button
        type="button"
        onClick={onStart}
        onPointerDown={swallow}
        aria-label="Trace the flow"
        className={cn(
          "glass-card absolute bottom-5 left-1/2 flex -translate-x-1/2 items-center gap-2 rounded-full px-4 py-2.5",
          "text-[13px] font-medium text-slate-600",
          "transition-transform duration-200 ease-out hover:-translate-y-0.5 hover:-translate-x-1/2",
          "focus-visible:ring-2 focus-visible:ring-ring/50 focus-visible:outline-none",
          "motion-reduce:transition-none",
        )}
      >
        <Waypoints className="size-4 text-blue-600" strokeWidth={1.9} />
        Trace the flow
      </button>
    );
  }

  const current = steps[step - 1];
  const total = steps.length;
  const phases: FlowStep["phase"][] = ["A", "B"];

  return (
    <div
      role="group"
      aria-label="Flow trace"
      onPointerDown={swallow}
      className={cn(
        "glass-card absolute bottom-5 left-1/2 -translate-x-1/2 rounded-2xl px-5 py-4",
        "w-[min(34rem,calc(100vw-2rem))]",
      )}
    >
      {/* Eyebrow — which act of the flow we're in. */}
      <p className="text-[11px] font-semibold tracking-[0.1em] text-slate-400 uppercase">
        Phase {current.phase} · {PHASE_NAMES[current.phase]}
      </p>

      {/* The maneuver + prev/next. */}
      <div className="mt-1 flex items-baseline justify-between gap-3">
        <h2 className="text-[17px] leading-tight font-semibold tracking-[-0.01em] text-ink-title">
          <span className="text-slate-400 tabular-nums">
            {String(current.n).padStart(2, "0")}
          </span>{" "}
          · {current.title}
        </h2>
        <div className="flex shrink-0 items-center gap-1">
          <StepButton
            label="Previous step"
            disabled={step <= 1}
            onClick={() => onStep(step - 1)}
          >
            <ChevronLeft className="size-4" strokeWidth={2} />
          </StepButton>
          <span className="px-0.5 text-[11px] font-medium text-slate-400 tabular-nums">
            {step}/{total}
          </span>
          <StepButton
            label="Next step"
            disabled={step >= total}
            onClick={() => onStep(step + 1)}
          >
            <ChevronRight className="size-4" strokeWidth={2} />
          </StepButton>
        </div>
      </div>

      {/* Detail — distilled from flow.md. */}
      <p className="mt-2 text-[13px] leading-[1.5] text-ink-body">{current.text}</p>

      {/* The route rail — phase-segmented, echoing the canvas wires. */}
      <div className="mt-4 flex items-center justify-between gap-3">
        <div className="flex items-center gap-4">
          {phases.map((phase) => (
            <div key={phase} className="flex items-center gap-2">
              <span className="text-[10px] font-semibold tracking-[0.12em] text-slate-400">
                {phase}
              </span>
              <div className="flex items-center">
                {steps
                  .filter((s) => s.phase === phase)
                  .map((s, i) => (
                    <Fragment key={s.n}>
                      {i > 0 && (
                        <span
                          className={cn(
                            "h-px w-4 transition-colors duration-300 motion-reduce:transition-none",
                            s.n <= step ? "bg-blue-600/70" : "bg-slate-300/70",
                          )}
                        />
                      )}
                      <button
                        type="button"
                        onClick={() => onStep(s.n)}
                        aria-label={`Step ${s.n}: ${s.title}`}
                        aria-current={s.n === step ? "step" : undefined}
                        title={s.title}
                        className={cn(
                          "rounded-full transition-all duration-300 motion-reduce:transition-none",
                          "focus-visible:ring-2 focus-visible:ring-ring/50 focus-visible:outline-none",
                          s.n === step
                            ? "size-3 bg-blue-600 shadow-[0_0_10px_2px_rgba(37,99,235,0.6)]"
                            : s.n < step
                              ? "size-2 bg-blue-600/80"
                              : "size-2 border border-slate-300 bg-transparent hover:border-slate-400",
                        )}
                      />
                    </Fragment>
                  ))}
              </div>
            </div>
          ))}
        </div>

        <StepButton label="Exit the flow trace" onClick={onExit}>
          <X className="size-4" strokeWidth={2} />
        </StepButton>
      </div>
    </div>
  );
}

function StepButton({
  label,
  onClick,
  disabled,
  children,
}: {
  label: string;
  onClick: () => void;
  disabled?: boolean;
  children: React.ReactNode;
}) {
  return (
    <button
      type="button"
      onClick={onClick}
      disabled={disabled}
      aria-label={label}
      title={label}
      className={cn(
        "flex size-7 items-center justify-center rounded-full text-slate-500 transition-colors",
        "hover:bg-slate-900/[0.05] hover:text-slate-700",
        "focus-visible:ring-2 focus-visible:ring-ring/50 focus-visible:outline-none",
        "disabled:pointer-events-none disabled:opacity-30",
      )}
    >
      {children}
    </button>
  );
}
