"use client";

import "@xyflow/react/dist/base.css";
import "./rf-canvas.css";

import { useCallback, useEffect, useMemo, useState } from "react";
import { Crosshair, Minus, Plus } from "lucide-react";
import {
  Background,
  BackgroundVariant,
  MarkerType,
  PanOnScrollMode,
  ReactFlow,
  ReactFlowProvider,
  useNodesState,
  useReactFlow,
  type Edge,
  type Node,
} from "@xyflow/react";

import { cn } from "@/lib/utils";
import type { CanvasNode, ModuleId } from "@/lib/blueprint.config";
import { CARD, NODES } from "@/lib/canvas-layout";
import { FLOW_STEPS, legToEdge } from "@/lib/flow-trace";
import { RfNodeCard } from "./rf-node-card";
import { RfIntegrationsNode } from "./rf-integrations-node";
import { ArtifactToken } from "./artifact-token";
import { FloatingEdge } from "./floating-edge";
import { FlowTimeline } from "./flow-timeline";
import { ModulePanel } from "../module-panel";

/** Arrowheads a touch more solid than the wire so direction reads. */
const MARKER_COLOR = "#64748b"; // slate-500
/** The lit-route colour — --primary / blue-600, the system's interaction blue. */
const ROUTE_BLUE = "#2563eb";
/** The wire look. "bezier" is what we shipped; "smoothstep" / "straight" also work. */
const EDGE_VARIANT = "bezier" as const;
const EDGE_ANIMATED = false;

// Module scope (stable identity) so React Flow doesn't warn about re-created maps.
const NODE_TYPES = { module: RfNodeCard, port: RfIntegrationsNode, artifact: ArtifactToken };
const EDGE_TYPES = { floating: FloatingEdge };

/** Shared look for the floating canvas controls (zoom in / out / fit). */
const CONTROL_BTN = cn(
  "glass-card flex size-11 items-center justify-center rounded-full",
  "text-slate-600 transition-transform duration-200 ease-out hover:-translate-y-0.5",
  "focus-visible:ring-2 focus-visible:ring-ring/50 focus-visible:outline-none",
  "motion-reduce:transition-none motion-reduce:hover:translate-y-0",
);

/** Node centres (canvas-space) — where the travelling artifact rests per step. */
const NODE_CENTER: Record<string, { x: number; y: number }> = Object.fromEntries(
  NODES.map((n) => [n.id, { x: n.x, y: n.y }]),
);

export type RfNodeInit = {
  id: string;
  type: "module" | "port";
  position: { x: number; y: number };
  data: Record<string, unknown>;
};
export type RawEdge = { id: string; source: string; target: string };

function Flow({
  initialNodes,
  rawEdges,
  docs,
}: {
  initialNodes: RfNodeInit[];
  rawEdges: RawEdge[];
  docs: CanvasNode[];
}) {
  const [nodes, setNodes, onNodesChange] = useNodesState(initialNodes as Node[]);
  const [openId, setOpenId] = useState<ModuleId | null>(null);
  // null = the static blueprint; 1..N = "flow mode" parked on that step.
  const [traceStep, setTraceStep] = useState<number | null>(null);
  const rf = useReactFlow();

  // Edges carry trace flags per step: the lit legs become a single directional,
  // blue, marching wire and everything else dims back. Off-trace it's the
  // neutral two-arrow route, exactly as before.
  const edges: Edge[] = useMemo(() => {
    const step = traceStep ? FLOW_STEPS[traceStep - 1] : null;
    const legDir = new Map<string, "fwd" | "rev">();
    if (step) {
      for (const leg of step.legs) {
        const { id, direction } = legToEdge(leg);
        legDir.set(id, direction);
      }
    }
    return rawEdges.map((e) => {
      const base = { id: e.id, source: e.source, target: e.target, type: "floating" as const };
      if (!step) {
        const arrow = { type: MarkerType.ArrowClosed, color: MARKER_COLOR, width: 16, height: 16 };
        return { ...base, markerStart: arrow, markerEnd: arrow, data: { variant: EDGE_VARIANT, animated: EDGE_ANIMATED } };
      }
      const direction = legDir.get(e.id);
      if (direction) {
        const arrow = { type: MarkerType.ArrowClosed, color: ROUTE_BLUE, width: 18, height: 18 };
        return {
          ...base,
          markerStart: direction === "rev" ? arrow : undefined,
          markerEnd: direction === "fwd" ? arrow : undefined,
          data: { variant: EDGE_VARIANT, active: true, direction },
        };
      }
      return { ...base, data: { variant: EDGE_VARIANT, dim: true } };
    });
  }, [rawEdges, traceStep]);

  // Paint the trace flag onto each node, and float the travelling artifact at the
  // step's resting node. Spreading the module nodes keeps React Flow's measured
  // dims (the floating edges read them); the artifact is a separate, static node
  // whose position React Flow eases via CSS (see .react-flow__node-artifact).
  useEffect(() => {
    const step = traceStep ? FLOW_STEPS[traceStep - 1] : null;
    const lit = new Set<string>(step ? step.nodes : []);
    const art = step?.artifact ?? null;
    setNodes((nds) => {
      const base = nds
        .filter((n) => n.id !== "artifact")
        .map((n) => ({
          ...n,
          data: {
            ...n.data,
            trace: step ? (lit.has(n.id) ? "active" : "dim") : undefined,
            reasoning: art?.reasoned && art.at === n.id ? true : undefined,
          },
        }));
      if (!art) return base;
      const c = NODE_CENTER[art.at] ?? { x: 0, y: 0 };
      const artifactNode: Node = {
        id: "artifact",
        type: "artifact",
        // Anchor just above the card's top edge; the pill floats up from here.
        position: { x: c.x, y: c.y - CARD.height / 2 - 18 },
        data: { form: art.form, label: art.label, reasoned: art.reasoned, from: art.from },
        draggable: false,
        selectable: false,
        focusable: false,
        zIndex: 1000,
      };
      return [...base, artifactNode];
    });
  }, [traceStep, setNodes]);

  const openNode = docs.find((d) => d.id === openId) ?? null;
  const recenter = useCallback(() => rf.fitView({ padding: 0.22, duration: 400 }), [rf]);
  // Entering flow mode opens on step 1 and frames the whole route.
  const startTrace = useCallback(() => {
    setTraceStep(1);
    rf.fitView({ padding: 0.22, duration: 400 });
  }, [rf]);

  // Keyboard: 0 recenters always; in flow mode, arrows/space step and Esc exits.
  // No text inputs on the canvas, so a window listener is safe.
  useEffect(() => {
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "0") {
        recenter();
        return;
      }
      if (e.key === "+" || e.key === "=") {
        rf.zoomIn({ duration: 200 });
        return;
      }
      if (e.key === "-" || e.key === "_") {
        rf.zoomOut({ duration: 200 });
        return;
      }
      if (traceStep == null) return;
      if (e.key === "ArrowRight" || e.key === " ") {
        e.preventDefault();
        setTraceStep((s) => Math.min((s ?? 1) + 1, FLOW_STEPS.length));
      } else if (e.key === "ArrowLeft") {
        setTraceStep((s) => Math.max((s ?? 1) - 1, 1));
      } else if (e.key === "Escape") {
        setTraceStep(null);
      }
    };
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, [recenter, traceStep, rf]);

  return (
    <div className="canvas-atmosphere relative h-full w-full">
      <ReactFlow
        nodes={nodes}
        edges={edges}
        onNodesChange={onNodesChange}
        onNodeClick={(_, n) => {
          if (n.id === "artifact") return;
          setOpenId(n.id as ModuleId);
        }}
        nodeTypes={NODE_TYPES}
        edgeTypes={EDGE_TYPES}
        fitView
        fitViewOptions={{ padding: 0.22 }}
        minZoom={0.35}
        maxZoom={1}
        zoomOnScroll={false}
        zoomOnPinch
        zoomOnDoubleClick={false}
        zoomActivationKeyCode={["Meta", "Control"]}
        panOnScroll
        panOnScrollMode={PanOnScrollMode.Free}
        panOnDrag
        nodesDraggable={false}
        nodesConnectable={false}
        proOptions={{ hideAttribution: false }}
        style={{ background: "transparent" }}
      >
        <Background variant={BackgroundVariant.Dots} gap={24} size={1.5} color="rgba(15,23,42,0.1)" />
      </ReactFlow>

      {/* Zoom + fit — Figma-style controls. Also: scroll/two-finger to pan,
          pinch or ⌘/Ctrl-scroll to zoom, and +/−/0 on the keyboard. */}
      <div className="absolute right-5 bottom-5 flex flex-col gap-2">
        <button
          type="button"
          onClick={() => rf.zoomIn({ duration: 200 })}
          onPointerDown={(e) => e.stopPropagation()}
          aria-label="Zoom in"
          title="Zoom in (+)"
          className={CONTROL_BTN}
        >
          <Plus className="size-5" strokeWidth={1.75} />
        </button>
        <button
          type="button"
          onClick={() => rf.zoomOut({ duration: 200 })}
          onPointerDown={(e) => e.stopPropagation()}
          aria-label="Zoom out"
          title="Zoom out (−)"
          className={CONTROL_BTN}
        >
          <Minus className="size-5" strokeWidth={1.75} />
        </button>
        <button
          type="button"
          onClick={recenter}
          onPointerDown={(e) => e.stopPropagation()}
          aria-label="Fit the map to view"
          title="Fit to view (press 0)"
          className={CONTROL_BTN}
        >
          <Crosshair className="size-5" strokeWidth={1.75} />
        </button>
      </div>

      {/* Trace the flow — the turn-by-turn route bar (or its idle entry pill). */}
      <FlowTimeline
        step={traceStep}
        steps={FLOW_STEPS}
        onStart={startTrace}
        onStep={setTraceStep}
        onExit={() => setTraceStep(null)}
      />

      <ModulePanel node={openNode} onClose={() => setOpenId(null)} />
    </div>
  );
}

export function RfCanvas(props: {
  initialNodes: RfNodeInit[];
  rawEdges: RawEdge[];
  docs: CanvasNode[];
}) {
  return (
    <ReactFlowProvider>
      <Flow {...props} />
    </ReactFlowProvider>
  );
}
