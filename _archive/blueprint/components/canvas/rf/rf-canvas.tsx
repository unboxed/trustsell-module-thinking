"use client";

import "@xyflow/react/dist/base.css";
import "./rf-canvas.css";

import { useCallback, useEffect, useMemo, useRef, useState } from "react";
import { useRouter } from "next/navigation";
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

import { Button } from "@/components/ui/button";
import type { Channel } from "@/lib/blueprint.config";
import { RfNodeCard } from "./rf-node-card";
import { RfConnectionsGroup } from "./rf-integrations-node";
import { RfChannelNode } from "./rf-channel-node";
import { FloatingEdge } from "./floating-edge";
import { ChannelPanel } from "../channel-panel";

/** The wire look. "bezier" is what we shipped; "smoothstep" / "straight" also work. */
const EDGE_VARIANT = "bezier" as const;
const EDGE_ANIMATED = false;

// Module scope (stable identity) so React Flow doesn't warn about re-created maps.
const NODE_TYPES = {
  module: RfNodeCard,
  port: RfConnectionsGroup,
  channel: RfChannelNode,
};
const EDGE_TYPES = { floating: FloatingEdge };

/** Shared look for the floating canvas controls (zoom in / out / fit) — a stock
    outline Button, enlarged to a round 44px and given a gentle hover lift. */
const CONTROL_BTN =
  "size-11 rounded-full transition-transform duration-200 ease-out hover:-translate-y-0.5 motion-reduce:transition-none motion-reduce:hover:translate-y-0";

/** A gentle accelerate-then-settle curve, shared by every animated viewport move
    so zoom steps and framing glide in and out instead of snapping. */
const easeInOutCubic = (t: number) =>
  t < 0.5 ? 4 * t * t * t : 1 - Math.pow(-2 * t + 2, 3) / 2;
/** Button / keyboard zoom step — curved, smooth-arc interpolated, not too long. */
const ZOOM_TWEEN = { duration: 300, ease: easeInOutCubic, interpolate: "smooth" } as const;
/** Trackpad-pinch / ⌘-scroll zoom speed, as a fraction of React Flow's default.
    d3 over-amplifies pinch deltas, so a tiny pinch flew through the whole range;
    0.2 = a fifth as fast. Lower = gentler. Plain two-finger scroll (pan) is untouched. */
const PINCH_SENSITIVITY = 0.2;
/** Framing the whole map (recenter) — same curve, a touch longer. */
const FIT_TWEEN = { padding: 0.22, duration: 420, ease: easeInOutCubic, interpolate: "smooth" } as const;

export type RfNodeInit = {
  id: string;
  type: "module" | "port" | "channel";
  position: { x: number; y: number };
  data: Record<string, unknown>;
  /** channel children declare their group parent + stay clamped within it */
  parentId?: string;
  extent?: "parent";
  style?: Record<string, unknown>;
  selectable?: boolean;
  /** stacking order; cards sit above the (auto-elevated) channel→module wires */
  zIndex?: number;
};
export type RawEdge = {
  id: string;
  source: string;
  target: string;
  /** "peer" = a two-way module↔module wire; "source" = a one-way channel→module
   * inflow arrow (raw data flowing in). Defaults to "peer". */
  kind?: "peer" | "source";
};

function Flow({
  initialNodes,
  rawEdges,
}: {
  initialNodes: RfNodeInit[];
  rawEdges: RawEdge[];
}) {
  const [nodes, , onNodesChange] = useNodesState(initialNodes as Node[]);
  // A channel plug is selected: its raw-data records open in their own panel. Clicking
  // a module card does nothing today — its detail view was removed, to be redesigned.
  const [openChannel, setOpenChannel] = useState<Channel | null>(null);
  // The node the pointer rests on (a module id, or a "01-integrations:<channel>" plug
  // id). Its wires surface and everything else recedes — focus + context.
  const [hoveredId, setHoveredId] = useState<string | null>(null);
  const wrapperRef = useRef<HTMLDivElement>(null);
  const rf = useReactFlow();
  const router = useRouter();

  // React Flow paints arrowheads + the dot grid as SVG <marker>/<rect> fills, where a
  // raw `var(--token)` doesn't resolve. So read the global-css tokens once on mount and
  // hand React Flow the concrete colours — still sourced from the design tokens.
  const [paint, setPaint] = useState({ marker: "", markerSoft: "", dot: "" });
  useEffect(() => {
    // One-shot read of a platform API (getComputedStyle) to mirror the global-css
    // tokens into React Flow's SVG fills. Empty initial state keeps SSR/hydration in
    // step; this resolves them right after mount. A legitimate effect, not a cascade.
    const cs = getComputedStyle(document.documentElement);
    // eslint-disable-next-line react-hooks/set-state-in-effect
    setPaint({
      marker: cs.getPropertyValue("--muted-foreground").trim(),
      markerSoft: cs.getPropertyValue("--primary").trim(),
      dot: cs.getPropertyValue("--border").trim(),
    });
  }, []);

  // Hover focus: a wire touching the hovered node surfaces (calm blue arrowhead) and
  // everything else recedes. Off-hover it's the neutral two-arrow route.
  const edges: Edge[] = useMemo(() => {
    return rawEdges.map((e) => {
      const isSource = e.kind === "source";
      // Source edges touch a channel *child* node, which React Flow auto-elevates
      // to z=1 — above the root-level cards. We don't fight that here; the cards are
      // lifted above it instead (see CARD_Z in app/page.tsx), so every wire sits
      // *behind* the cards while the plugs they start from still read on top.
      const base = { id: e.id, source: e.source, target: e.target, type: "floating" as const };
      // The same test covers both directions — for a module it catches its peer
      // wires and its channel inflow; for a plug it catches the wires it originates.
      const related = hoveredId ? e.source === hoveredId || e.target === hoveredId : null;
      // Arrowhead follows the line: the accent on a surfaced wire, muted otherwise.
      const arrow = {
        type: MarkerType.ArrowClosed,
        color: related ? paint.markerSoft : paint.marker,
        width: 16,
        height: 16,
      };
      // Source edges read as a single inflow arrow (channel → module): one arrowhead
      // at the module, dashed + lighter (styled in FloatingEdge). Peer edges keep both
      // arrowheads — request out, provide back.
      return {
        ...base,
        markerStart: isSource ? undefined : arrow,
        markerEnd: arrow,
        data: {
          variant: EDGE_VARIANT,
          animated: EDGE_ANIMATED,
          source: isSource,
          highlight: related === true,
          faded: related === false,
        },
      };
    });
  }, [rawEdges, hoveredId, paint]);

  // Crisp text at any *resting* zoom. React Flow zooms with one CSS transform on the
  // viewport, so the browser stretches a snapshot rasterized at a single scale — text
  // softens at any zoom ≠ 1. Fix: keep the layer promoted (will-change) *during* a move
  // for smoothness, then drop it on settle, which tears the cached layer down and
  // repaints at the resting scale → text re-rasterizes sharp at whatever zoom you land
  // on. (A brief softness remains *while* the motion plays; only WebGL removes that.)
  const viewportEl = useCallback(
    () => wrapperRef.current?.querySelector<HTMLElement>(".react-flow__viewport") ?? null,
    [],
  );

  // Round the pan offset to whole device pixels so the resting transform lands on the
  // pixel grid. The differ-guard keeps setViewport from looping back through onMoveEnd.
  const snapViewport = useCallback(() => {
    const { x, y, zoom } = rf.getViewport();
    const dpr = window.devicePixelRatio || 1;
    const rx = Math.round(x * dpr) / dpr;
    const ry = Math.round(y * dpr) / dpr;
    if (rx !== x || ry !== y) rf.setViewport({ x: rx, y: ry, zoom });
  }, [rf]);

  // Promote the viewport before a move (smooth); on settle drop the promotion to force a
  // crisp repaint at the resting scale, then snap to the pixel grid.
  const lift = useCallback(() => {
    const el = viewportEl();
    if (el) el.style.willChange = "transform";
  }, [viewportEl]);
  const settle = useCallback(() => {
    const el = viewportEl();
    if (el) el.style.willChange = "auto";
    snapViewport();
  }, [viewportEl, snapViewport]);
  // Run a programmatic viewport move through the same lift→settle path as a gesture.
  const animate = useCallback(
    (run: () => Promise<unknown>) => {
      lift();
      return run().then(settle);
    },
    [lift, settle],
  );

  const recenter = useCallback(() => animate(() => rf.fitView(FIT_TWEEN)), [animate, rf]);

  // Keyboard: 0 recenters; +/− zoom. No text inputs on the canvas, so a window
  // listener is safe.
  useEffect(() => {
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "0") {
        recenter();
        return;
      }
      if (e.key === "+" || e.key === "=") {
        animate(() => rf.zoomIn(ZOOM_TWEEN));
        return;
      }
      if (e.key === "-" || e.key === "_") {
        animate(() => rf.zoomOut(ZOOM_TWEEN));
        return;
      }
    };
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, [recenter, rf, animate]);

  // Tame pinch / ⌘-scroll zoom sensitivity. React Flow zooms via d3, which
  // over-amplifies trackpad-pinch deltas (they arrive as ctrl+wheel), so a tiny
  // pinch blows through the whole range. We catch the zoom wheel events early,
  // shrink the delta, and re-emit a softened copy — React Flow still does the real
  // zoom-to-cursor, just slower. Plain (non-ctrl/meta) scroll falls through to pan.
  useEffect(() => {
    const el = wrapperRef.current;
    if (!el) return;
    const tamed = new WeakSet<WheelEvent>();
    const onWheel = (e: WheelEvent) => {
      if (!(e.ctrlKey || e.metaKey)) return; // plain scroll keeps panning
      if (tamed.has(e)) return; // our own softened echo — let it reach React Flow
      e.preventDefault();
      e.stopPropagation();
      const softer = new WheelEvent("wheel", {
        deltaX: e.deltaX,
        deltaY: e.deltaY * PINCH_SENSITIVITY,
        deltaMode: e.deltaMode,
        clientX: e.clientX,
        clientY: e.clientY,
        ctrlKey: true, // route through React Flow's zoom-to-cursor path
        bubbles: true,
        cancelable: true,
        view: window,
      });
      tamed.add(softer);
      e.target?.dispatchEvent(softer);
    };
    el.addEventListener("wheel", onWheel, { capture: true, passive: false });
    return () => el.removeEventListener("wheel", onWheel, { capture: true });
  }, []);

  return (
    <div ref={wrapperRef} className="relative h-full w-full bg-background">
      <ReactFlow
        nodes={nodes}
        edges={edges}
        onNodesChange={onNodesChange}
        onNodeClick={(_, n) => {
          // A channel plug opens its raw-data panel (unchanged).
          if (n.id.startsWith("01-integrations:")) {
            const ch = (n.data as { channel?: Channel }).channel;
            if (ch) setOpenChannel(ch);
            return;
          }
          // The Connections group frame itself has no detail.
          if (n.id === "01-integrations") return;
          // Any other module card opens its library shelf, pre-filtered to it.
          router.push(`/library?module=${n.id}`);
        }}
        onNodeMouseEnter={(_, n) => {
          if (n.id === "01-integrations") return; // skip the Connections group frame
          setHoveredId(n.id);
        }}
        onNodeMouseLeave={() => setHoveredId(null)}
        onMoveStart={lift}
        onMoveEnd={settle}
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
        <Background variant={BackgroundVariant.Dots} gap={24} size={1.5} color={paint.dot || undefined} />
      </ReactFlow>

      {/* Zoom + fit — Figma-style controls. Also: scroll/two-finger to pan,
          pinch or ⌘/Ctrl-scroll to zoom, and +/−/0 on the keyboard. */}
      <div className="absolute right-5 bottom-5 flex flex-col gap-2">
        <Button
          variant="outline"
          size="icon"
          onClick={() => animate(() => rf.zoomIn(ZOOM_TWEEN))}
          onPointerDown={(e) => e.stopPropagation()}
          aria-label="Zoom in"
          title="Zoom in (+)"
          className={CONTROL_BTN}
        >
          <Plus className="size-5" strokeWidth={1.75} />
        </Button>
        <Button
          variant="outline"
          size="icon"
          onClick={() => animate(() => rf.zoomOut(ZOOM_TWEEN))}
          onPointerDown={(e) => e.stopPropagation()}
          aria-label="Zoom out"
          title="Zoom out (−)"
          className={CONTROL_BTN}
        >
          <Minus className="size-5" strokeWidth={1.75} />
        </Button>
        <Button
          variant="outline"
          size="icon"
          onClick={recenter}
          onPointerDown={(e) => e.stopPropagation()}
          aria-label="Fit the map to view"
          title="Fit to view (press 0)"
          className={CONTROL_BTN}
        >
          <Crosshair className="size-5" strokeWidth={1.75} />
        </Button>
      </div>

      <ChannelPanel channel={openChannel} onClose={() => setOpenChannel(null)} />
    </div>
  );
}

export function RfCanvas(props: {
  initialNodes: RfNodeInit[];
  rawEdges: RawEdge[];
}) {
  return (
    <ReactFlowProvider>
      <Flow {...props} />
    </ReactFlowProvider>
  );
}
