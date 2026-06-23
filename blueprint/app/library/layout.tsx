import type { ReactNode } from "react";

// The library shares the canvas design system — same surface, tokens and type as
// the main page (globals.css): the canvas base colour plus the faint dot grid, so
// it reads as the same room as the node graph.
export default function LibraryLayout({ children }: { children: ReactNode }) {
  return <div className="min-h-dvh w-full bg-canvas canvas-grid">{children}</div>;
}
