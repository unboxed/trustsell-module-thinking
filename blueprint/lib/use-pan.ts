"use client";

import { useCallback, useEffect, useRef, useState } from "react";

interface Size {
  width: number;
  height: number;
}

/** Arrow-key nudge, in canvas px. */
const KEY_STEP = 64;

/**
 * Pan-only (no zoom) canvas controller.
 *
 * Moves a stage via `transform: translate3d` — the most performant way to pan a
 * DOM surface. Drag tracking uses window-level pointer listeners (not pointer
 * capture) so any focusable children keep receiving their own clicks. Offset
 * updates are coalesced through requestAnimationFrame for ~60fps, and clamped so
 * the stage can't be dragged past its edges. When the stage is smaller than the
 * viewport on an axis it's centered and fixed there.
 */
export function usePan(stage: Size) {
  const viewportRef = useRef<HTMLDivElement | null>(null);
  const [offset, setOffset] = useState({ x: 0, y: 0 });
  const [isDragging, setIsDragging] = useState(false);

  const offsetRef = useRef(offset);
  const dragging = useRef(false);
  const startPointer = useRef({ x: 0, y: 0 });
  const startOffset = useRef({ x: 0, y: 0 });
  const raf = useRef<number | null>(null);
  const pending = useRef<{ x: number; y: number } | null>(null);

  const commit = useCallback((next: { x: number; y: number }) => {
    offsetRef.current = next;
    setOffset(next);
  }, []);

  const clamp = useCallback(
    (x: number, y: number) => {
      const vp = viewportRef.current;
      const vw = vp?.clientWidth ?? stage.width;
      const vh = vp?.clientHeight ?? stage.height;
      const axis = (v: number, viewport: number, size: number) =>
        size <= viewport
          ? (viewport - size) / 2
          : Math.max(viewport - size, Math.min(0, v));
      return { x: axis(x, vw, stage.width), y: axis(y, vh, stage.height) };
    },
    [stage.width, stage.height],
  );

  const center = useCallback(() => {
    const vp = viewportRef.current;
    if (!vp) return;
    commit(
      clamp(
        (vp.clientWidth - stage.width) / 2,
        (vp.clientHeight - stage.height) / 2,
      ),
    );
  }, [clamp, commit, stage.width, stage.height]);

  // Center the stage on mount and whenever the viewport resizes.
  useEffect(() => {
    center();
    const onResize = () => center();
    window.addEventListener("resize", onResize);
    return () => window.removeEventListener("resize", onResize);
  }, [center]);

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
      pending.current = clamp(
        startOffset.current.x + (e.clientX - startPointer.current.x),
        startOffset.current.y + (e.clientY - startPointer.current.y),
      );
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
  }, [clamp, commit]);

  const onPointerDown = useCallback((e: React.PointerEvent) => {
    if (e.button !== 0) return; // primary button / touch only
    dragging.current = true;
    setIsDragging(true);
    startPointer.current = { x: e.clientX, y: e.clientY };
    startOffset.current = offsetRef.current;
  }, []);

  const onKeyDown = useCallback(
    (e: React.KeyboardEvent) => {
      if (e.target !== e.currentTarget) return; // only when the canvas itself is focused
      const step: Record<string, [number, number]> = {
        ArrowLeft: [KEY_STEP, 0],
        ArrowRight: [-KEY_STEP, 0],
        ArrowUp: [0, KEY_STEP],
        ArrowDown: [0, -KEY_STEP],
      };
      const d = step[e.key];
      if (!d) return;
      e.preventDefault();
      commit(clamp(offsetRef.current.x + d[0], offsetRef.current.y + d[1]));
    },
    [clamp, commit],
  );

  return { offset, isDragging, viewportRef, onPointerDown, onKeyDown };
}
