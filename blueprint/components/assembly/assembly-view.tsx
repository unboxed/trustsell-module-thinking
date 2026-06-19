"use client";

import {
  useCallback,
  useEffect,
  useLayoutEffect,
  useRef,
  useState,
} from "react";
import Link from "next/link";
import {
  ArrowLeft,
  Brain,
  Building2,
  Calendar,
  ClipboardList,
  Mail,
  Package,
  PenLine,
  RotateCcw,
  Send,
  Sparkles,
  Users,
  type LucideIcon,
} from "lucide-react";

import { cn } from "@/lib/utils";
import {
  BEATS,
  DETERMINISM,
  EDGES,
  NODES,
  STAGE,
  type AssemblyKind,
  type AssemblyNode,
  type AssemblySource,
} from "@/lib/assembly";

const SOURCE_ICON: Record<AssemblySource, LucideIcon> = {
  mail: Mail,
  calendar: Calendar,
  you: PenLine,
  offerings: Package,
  organisation: Building2,
  people: Users,
  brain: Brain,
  voice: PenLine,
};

function iconFor(n: AssemblyNode): LucideIcon {
  if (n.kind === "action") return Send;
  if (n.kind === "brief") return ClipboardList;
  if (n.kind === "insight") return Sparkles;
  return SOURCE_ICON[n.source ?? "people"];
}

/** Blue (a mind has reasoned) vs grey (raw, given). */
const isRaw = (k: AssemblyKind) => k === "fetched" || k === "told";

const COORD = new Map(NODES.map((n) => [n.id, n] as const));

export function AssemblyView() {
  const sizeRef = useRef<HTMLDivElement>(null);
  const [scale, setScale] = useState(1);
  const [phase, setPhase] = useState(0);
  const [run, setRun] = useState(0);

  // Scale the fixed design stage to the available width (never up past 1:1).
  useLayoutEffect(() => {
    const el = sizeRef.current;
    if (!el) return;
    const measure = () => setScale(Math.min(1, el.clientWidth / STAGE.w));
    measure();
    const ro = new ResizeObserver(measure);
    ro.observe(el);
    return () => ro.disconnect();
  }, []);

  // The bottom-up reveal: facts, then the line, then readings, the insight,
  // the gathered pieces, the action. Respects reduced motion (show it all).
  useEffect(() => {
    const reduce =
      typeof window !== "undefined" &&
      window.matchMedia?.("(prefers-reduced-motion: reduce)").matches;
    if (reduce) {
      setPhase(6);
      return;
    }
    setPhase(0);
    const timers = [1, 2, 3, 4, 5, 6].map((p) =>
      setTimeout(() => setPhase(p), BEATS[p]),
    );
    return () => timers.forEach(clearTimeout);
  }, [run]);

  const replay = useCallback(() => setRun((r) => r + 1), []);

  const stageH = STAGE.h * scale;

  return (
    <div className="canvas-atmosphere min-h-dvh w-full overflow-x-hidden pb-16">
      <header className="mx-auto flex max-w-[1180px] flex-wrap items-end justify-between gap-4 px-6 pt-9 pb-6">
        <div className="max-w-[40rem]">
          <p className="text-[11px] font-semibold tracking-[0.16em] text-slate-400 uppercase">
            Sales Amplifier · Assembly
          </p>
          <h1 className="mt-2 text-[26px] leading-[1.12] font-semibold tracking-[-0.02em] text-ink-title">
            How one recommendation gets built
          </h1>
          <p className="mt-2.5 text-[13.5px] leading-[1.55] text-ink-body">
            Read it bottom to top. Many raw facts converge, through the tool&apos;s
            reading, into a single action — and the grey turns blue the moment a
            mind reads it. The map next door shows the same machine moving in time;
            this shows it standing still, taken apart.
          </p>
        </div>
        <div className="flex items-center gap-2">
          <button
            type="button"
            onClick={replay}
            className={cn(
              "glass-card inline-flex items-center gap-2 rounded-full px-3.5 py-2 text-[12.5px] font-medium text-slate-600",
              "transition-transform duration-200 ease-out hover:-translate-y-0.5",
              "focus-visible:ring-2 focus-visible:ring-ring/50 focus-visible:outline-none motion-reduce:transition-none",
            )}
          >
            <RotateCcw className="size-3.5 text-blue-600" strokeWidth={2} />
            Replay the build
          </button>
          <Link
            href="/"
            className={cn(
              "glass-card inline-flex items-center gap-2 rounded-full px-3.5 py-2 text-[12.5px] font-medium text-slate-600",
              "transition-transform duration-200 ease-out hover:-translate-y-0.5",
              "focus-visible:ring-2 focus-visible:ring-ring/50 focus-visible:outline-none motion-reduce:transition-none",
            )}
          >
            <ArrowLeft className="size-3.5" strokeWidth={2} />
            Blueprint
          </Link>
        </div>
      </header>

      {/* Sizing element: full content width; the stage scales to it. */}
      <div ref={sizeRef} className="mx-auto max-w-[1180px] px-6">
        <div className="relative" style={{ height: stageH }}>
          <div
            className="absolute top-0 left-0"
            style={{
              width: STAGE.w,
              height: STAGE.h,
              transform: `scale(${scale})`,
              transformOrigin: "top left",
            }}
          >
            {/* Edges — quiet hairlines under the cards. */}
            <svg
              className="pointer-events-none absolute inset-0"
              width={STAGE.w}
              height={STAGE.h}
              viewBox={`0 0 ${STAGE.w} ${STAGE.h}`}
              fill="none"
            >
              {EDGES.map((e) => {
                const a = COORD.get(e.from)!;
                const b = COORD.get(e.to)!;
                const sy = a.y - 26;
                const ey = b.y + 26;
                const mid = (sy + ey) / 2;
                const on = phase >= e.phase;
                return (
                  <path
                    key={`${e.from}-${e.to}`}
                    d={`M ${a.x} ${sy} C ${a.x} ${mid} ${b.x} ${mid} ${b.x} ${ey}`}
                    stroke={e.told ? "rgba(100,116,139,0.45)" : "rgba(71,85,105,0.32)"}
                    strokeWidth={1.5}
                    strokeDasharray={e.told ? "4 5" : undefined}
                    style={{
                      opacity: on ? 1 : 0,
                      transition: "opacity 600ms ease-out",
                    }}
                  />
                );
              })}
            </svg>

            {/* The determinism line — the one signature. Grey below, blue above. */}
            <DeterminismLine on={phase >= DETERMINISM.phase} />

            {/* Zone captions. */}
            <Caption x={300} y={916} on={phase >= 1}>
              fetched through Connections — raw, no meaning yet
            </Caption>
            <Caption x={1058} y={832} on={phase >= 1}>
              told by you, once
            </Caption>

            {/* Nodes. */}
            {NODES.map((n) => (
              <NodeCard key={n.id} n={n} on={phase >= n.phase} />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}

function DeterminismLine({ on }: { on: boolean }) {
  return (
    <div
      className="absolute left-0 transition-opacity duration-700 ease-out motion-reduce:transition-none"
      style={{ top: DETERMINISM.y, width: STAGE.w, opacity: on ? 1 : 0 }}
    >
      <div className="relative h-px w-full bg-gradient-to-r from-transparent via-blue-500/55 to-transparent shadow-[0_0_18px_1px_rgba(37,99,235,0.28)]" />
      <span
        className="absolute -top-3 left-1/2 -translate-x-1/2 rounded-full bg-blue-600/10 px-3 py-1 text-[10.5px] font-semibold tracking-[0.04em] text-blue-700 ring-1 ring-blue-600/25 backdrop-blur-sm"
      >
        the reading — where facts become meaning
      </span>
      <span className="absolute top-2 left-1 text-[9.5px] font-semibold tracking-[0.14em] text-slate-400 uppercase">
        raw · given
      </span>
      <span className="absolute -top-[1.15rem] left-1 text-[9.5px] font-semibold tracking-[0.14em] text-blue-600/70 uppercase">
        reasoned by the tool
      </span>
    </div>
  );
}

function Caption({
  x,
  y,
  on,
  children,
}: {
  x: number;
  y: number;
  on: boolean;
  children: React.ReactNode;
}) {
  return (
    <span
      className="absolute -translate-x-1/2 text-center text-[10.5px] font-medium tracking-[0.02em] text-slate-400 transition-opacity duration-500 motion-reduce:transition-none"
      style={{ left: x, top: y, opacity: on ? 1 : 0 }}
    >
      {children}
    </span>
  );
}

const WIDTH: Record<AssemblyKind, number> = {
  fetched: 212,
  told: 212,
  reading: 196,
  insight: 304,
  piece: 216,
  brief: 336,
  action: 340,
};

function NodeCard({ n, on }: { n: AssemblyNode; on: boolean }) {
  const Icon = iconFor(n);
  const raw = isRaw(n.kind);
  const hero = !!n.hero;

  return (
    <div
      className="absolute -translate-x-1/2 -translate-y-1/2"
      style={{ left: n.x, top: n.y, width: WIDTH[n.kind] }}
    >
      <div
        className={cn(
          "transition-all duration-500 ease-out motion-reduce:transition-none",
          on ? "translate-y-0 opacity-100" : "translate-y-3.5 opacity-0",
        )}
      >
        <div
          className={cn(
            "glass-card flex items-start gap-2.5 rounded-2xl px-3 py-2.5",
            raw
              ? n.kind === "told"
                ? "ring-1 ring-slate-400/70 [border-style:dashed]"
                : "ring-1 ring-slate-300/70"
              : "ring-1 ring-blue-600/35",
            hero && "ring-blue-600/55 shadow-[0_0_34px_-6px_rgba(37,99,235,0.5)]",
            n.kind === "action" &&
              "ring-blue-600/60 shadow-[0_0_44px_-4px_rgba(37,99,235,0.62)]",
          )}
        >
          <span
            className={cn(
              "mt-0.5 flex shrink-0 items-center justify-center rounded-full",
              hero ? "size-8" : "size-7",
              raw ? "bg-slate-900/[0.06] text-slate-500" : "bg-blue-600/12 text-blue-600",
            )}
          >
            <Icon className={hero ? "size-[18px]" : "size-4"} strokeWidth={1.9} />
          </span>
        <span className="flex min-w-0 flex-col leading-tight">
          <span
            className={cn(
              "text-[9px] font-semibold tracking-[0.13em] uppercase",
              raw ? "text-slate-400" : "text-blue-600/80",
            )}
          >
            {n.eyebrow}
          </span>
          <span
            className={cn(
              "mt-0.5 font-medium text-ink-title",
              hero ? "text-[14px] leading-snug font-semibold" : "text-[12px] leading-snug",
            )}
          >
            {n.label}
          </span>
        </span>
        </div>
      </div>
    </div>
  );
}
