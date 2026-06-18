import { Canvas } from "@/components/canvas/canvas";

// The canvas is a static map of curated nodes for now. The live per-request read
// of each module's CLAUDE.md (lib/modules.ts → readModuleBodies) returns when the
// detail panels land, where it has something to render.
export default function Home() {
  return (
    <main className="h-dvh w-dvw overflow-hidden">
      <Canvas />
    </main>
  );
}
