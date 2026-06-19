"use client";

import { useCallback, useEffect, useRef, useState } from "react";

interface Point {
  x: number;
  y: number;
}

/** Arrow-key nudge, in canvas px. */
const KEY_STEP = 64;
/** Recenter tween duration, ms. */
const RECENTER_MS = 380;

/**
 * Pan-only (no zoom) infinite-canvas controller.
 *
 * Moves a stage via `transform: translate3d` — the most performant way to pan a
 * DOM surface. The plane is endless: panning is unbounded, so there are no edges
 * to clamp to. Drag tracking uses window-level pointer listeners (not pointer
 * capture) so any focusable children keep receiving their own clicks; offset
 * updates are coalesced through requestAnimationFrame for ~60fps.
 *
 * `home` is the content's center in canvas-space. The viewport is framed on it at
 * mount, and `recenter()` animates back to it — the way home from anywhere on the
 * endless plane.
 */
export function usePan(home: Point) {
  const viewportRef = useRef<HTMLDivElement | null>(null);
  const [offset, setOffset] = useState({ x: 0, y: 0 });
  const [isDragging, setIsDragging] = useState(false);

  const offsetRef = useRef(offset);
  const dragging = useRef(false);
  const startPointer = useRef({ x: 0, y: 0 });
  const startOffset = useRef({ x: 0, y: 0 });
  const raf = useRef<number | null>(null);
  const pending = useRef<Point | null>(null);
  const anim = useRef<number | null>(null);

  const commit = useCallback((next: Point) => {
    offsetRef.current = next;
    setOffset(next);
  }, []);

  const stopAnim = useCallback(() => {
    if (anim.current != null) {
      cancelAnimationFrame(anim.current);
      anim.current = null;
    }
  }, []);

  /** Offset that frames `home` at the center of the viewport. */
  const homeOffset = useCallback((): Point => {
    const vp = viewportRef.current;
    return {
      x: (vp?.clientWidth ?? 0) / 2 - home.x,
      y: (vp?.clientHeight ?? 0) / 2 - home.y,
    };
  }, [home.x, home.y]);

  /** Animate the way home — eased, and instant under reduced-motion. */
  const recenter = useCallback(() => {
    stopAnim();
    const to = homeOffset();
    const from = offsetRef.current;
    const reduce =
      typeof window !== "undefined" &&
      window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    if (reduce) {
      commit(to);
      return;
    }
    let start: number | null = null;
    const ease = (t: number) => 1 - Math.pow(1 - t, 3); // easeOutCubic
    const tick = (ts: number) => {
      if (start == null) start = ts;
      const t = Math.min(1, (ts - start) / RECENTER_MS);
      const k = ease(t);
      commit({
        x: from.x + (to.x - from.x) * k,
        y: from.y + (to.y - from.y) * k,
      });
      anim.current = t < 1 ? requestAnimationFrame(tick) : null;
    };
    anim.current = requestAnimationFrame(tick);
  }, [commit, homeOffset, stopAnim]);

  // Frame the map on `home` once the viewport has real dimensions. Mount-only:
  // panning away and resizing afterwards leaves the user where they are.
  useEffect(() => {
    commit(homeOffset());
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  // Global drag listeners — active for the whole life of the canvas, gated by the
  // `dragging` ref so they're cheap when idle.
  useEffect(() => {
    const flush = () => {
      raf.current = null;
      if (pending.current) {
        commit(pending.current);
        pending.current = null;
      }
    };
    const onMove = (e: PointerEvent) => {
      if (!dragging.current) return;
      // No clamp — the plane is endless; pan wherever the pointer goes.
      pending.current = {
        x: startOffset.current.x + (e.clientX - startPointer.current.x),
        y: startOffset.current.y + (e.clientY - startPointer.current.y),
      };
      if (raf.current == null) raf.current = requestAnimationFrame(flush);
    };
    const onUp = () => {
      if (!dragging.current) return;
      dragging.current = false;
      setIsDragging(false);
    };
    window.addEventListener("pointermove", onMove, { passive: true });
    window.addEventListener("pointerup", onUp);
    window.addEventListener("pointercancel", onUp);
    return () => {
      window.removeEventListener("pointermove", onMove);
      window.removeEventListener("pointerup", onUp);
      window.removeEventListener("pointercancel", onUp);
      if (raf.current != null) cancelAnimationFrame(raf.current);
    };
  }, [commit]);

  const onPointerDown = useCallback(
    (e: React.PointerEvent) => {
      if (e.button !== 0) return; // primary button / touch only
      stopAnim(); // a drag interrupts any recenter tween
      dragging.current = true;
      setIsDragging(true);
      startPointer.current = { x: e.clientX, y: e.clientY };
      startOffset.current = offsetRef.current;
    },
    [stopAnim],
  );

  const onKeyDown = useCallback(
    (e: React.KeyboardEvent) => {
      if (e.target !== e.currentTarget) return; // only when the canvas itself is focused
      if (e.key === "0" || e.key === "Home") {
        e.preventDefault();
        recenter();
        return;
      }
      const step: Record<string, [number, number]> = {
        ArrowLeft: [KEY_STEP, 0],
        ArrowRight: [-KEY_STEP, 0],
        ArrowUp: [0, KEY_STEP],
        ArrowDown: [0, -KEY_STEP],
      };
      const d = step[e.key];
      if (!d) return;
      e.preventDefault();
      stopAnim();
      commit({
        x: offsetRef.current.x + d[0],
        y: offsetRef.current.y + d[1],
      });
    },
    [commit, recenter, stopAnim],
  );

  return { offset, isDragging, viewportRef, onPointerDown, onKeyDown, recenter };
}
