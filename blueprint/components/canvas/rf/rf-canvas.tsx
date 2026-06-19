"use client";

import "@xyflow/react/dist/base.css";
import "./rf-canvas.css";

import { useCallback, useEffect, useMemo, useState } from "react";
import { Crosshair } from "lucide-react";
import {
  Background,
  BackgroundVariant,
  MarkerType,
  ReactFlow,
  ReactFlowProvider,
  useNodesState,
  useReactFlow,
  type Edge,
  type Node,
} from "@xyflow/react";

import { cn } from "@/lib/utils";
import type { CanvasNode, ModuleId } from "@/lib/blueprint.config";
import { RfNodeCard } from "./rf-node-card";
import { RfIntegrationsNode } from "./rf-integrations-node";
import { FloatingEdge } from "./floating-edge";
import { ModulePanel } from "../module-panel";

/** Arrowheads a touch more solid than the wire so direction reads. */
const MARKER_COLOR = "#64748b"; // slate-500
/** The wire look. "bezier" is what we shipped; "smoothstep" / "straight" also work. */
const EDGE_VARIANT = "bezier" as const;
const EDGE_ANIMATED = false;

// Module scope (stable identity) so React Flow doesn't warn about re-created maps.
const NODE_TYPES = { module: RfNodeCard, port: RfIntegrationsNode };
const EDGE_TYPES = { floating: FloatingEdge };

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
  const [nodes, , onNodesChange] = useNodesState(initialNodes as Node[]);
  const [openId, setOpenId] = useState<ModuleId | null>(null);
  const rf = useReactFlow();

  const edges: Edge[] = useMemo(
    () =>
      rawEdges.map((e) => ({
        id: e.id,
        source: e.source,
        target: e.target,
        type: "floating",
        markerStart: { type: MarkerType.ArrowClosed, color: MARKER_COLOR, width: 16, height: 16 },
        markerEnd: { type: MarkerType.ArrowClosed, color: MARKER_COLOR, width: 16, height: 16 },
        data: { variant: EDGE_VARIANT, animated: EDGE_ANIMATED },
      })),
    [rawEdges],
  );

  const openNode = docs.find((d) => d.id === openId) ?? null;
  const recenter = useCallback(() => rf.fitView({ padding: 0.22, duration: 400 }), [rf]);

  // "Press 0 to recenter" — matches the original canvas. No text inputs on the
  // canvas, so a window listener is safe.
  useEffect(() => {
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "0") recenter();
    };
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, [recenter]);

  return (
    <div className="canvas-atmosphere relative h-full w-full">
      <ReactFlow
        nodes={nodes}
        edges={edges}
        onNodesChange={onNodesChange}
        onNodeClick={(_, n) => setOpenId(n.id as ModuleId)}
        nodeTypes={NODE_TYPES}
        edgeTypes={EDGE_TYPES}
        fitView
        fitViewOptions={{ padding: 0.22 }}
        minZoom={1}
        maxZoom={1}
        zoomOnScroll={false}
        zoomOnPinch={false}
        zoomOnDoubleClick={false}
        panOnScroll={false}
        panOnDrag
        nodesDraggable={false}
        nodesConnectable={false}
        proOptions={{ hideAttribution: false }}
        style={{ background: "transparent" }}
      >
        <Background variant={BackgroundVariant.Dots} gap={24} size={1.5} color="rgba(15,23,42,0.1)" />
      </ReactFlow>

      {/* Recenter — frame the map again from anywhere (button, or press 0). */}
      <button
        type="button"
        onClick={recenter}
        onPointerDown={(e) => e.stopPropagation()}
        aria-label="Recenter the map"
        title="Recenter (press 0)"
        className={cn(
          "glass-card absolute right-5 bottom-5 flex size-11 items-center justify-center rounded-full",
          "text-slate-600 transition-transform duration-200 ease-out hover:-translate-y-0.5",
          "focus-visible:ring-2 focus-visible:ring-ring/50 focus-visible:outline-none",
          "motion-reduce:transition-none motion-reduce:hover:translate-y-0",
        )}
      >
        <Crosshair className="size-5" strokeWidth={1.75} />
      </button>

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
