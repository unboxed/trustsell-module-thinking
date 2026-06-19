import type { Metadata } from "next";
import { AssemblyView } from "@/components/assembly/assembly-view";

// The assembly view — the canvas's complement. Where the map (app/page.tsx) shows
// the modules and the flow as a route, this lays one recommendation out as a
// build-up: raw facts at the base converging into a single action. It's the
// picture from docs/scenario-councils.md, a self-contained client view.
export const metadata: Metadata = {
  title: "Assembly · Sales Amplifier",
  description: "How one recommendation is built, from raw facts up to the action.",
};

export default function AssemblyPage() {
  return <AssemblyView />;
}
