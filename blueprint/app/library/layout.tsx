import type { ReactNode } from "react";

// The library shares the app surface and tokens with the main page (globals.css):
// a plain background, so it reads as the same room as the node graph.
export default function LibraryLayout({ children }: { children: ReactNode }) {
  return <div className="min-h-dvh w-full bg-background">{children}</div>;
}
