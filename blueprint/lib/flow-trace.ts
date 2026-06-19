import type { ModuleId } from "./blueprint.config";

/**
 * The choreography for the "Trace the flow" route — the canvas sibling of
 * canvas-layout.ts (which holds hand-placed geometry separately from the
 * auto-parsed frontmatter). The *words* here are mirrored from docs/flow.md:
 * keep them in sync. Every `leg` must name a connection that already exists in
 * the modules' `connects` frontmatter — i.e. a wire the canvas already draws —
 * so the trace lights up real route lines, never invented ones.
 */

/** A lit directed wire for a step: the flow moves from → to along an existing edge. */
export type FlowLeg = { from: ModuleId; to: ModuleId };

export type FlowStep = {
  /** 1-based step number, used as the "0n" marker. */
  n: number;
  /** Which act of flow.md this belongs to. */
  phase: "A" | "B";
  /** The maneuver — what happens at this turn (active voice). */
  title: string;
  /** The detail line, distilled from docs/flow.md. */
  text: string;
  /** Nodes lit this step. */
  nodes: ModuleId[];
  /** Directed wires lit this step (each must map to an existing edge). */
  legs: FlowLeg[];
};

/** flow.md's two section titles, shown as the route-bar eyebrow. */
export const PHASE_NAMES: Record<FlowStep["phase"], string> = {
  A: "Strategy becomes standing work",
  B: "Standing work becomes a surfaced action",
};

export const FLOW_STEPS: FlowStep[] = [
  {
    n: 1,
    phase: "A",
    title: "Shape the strategy",
    text: "You and Brain shape a goal pinned to an offering — “BOPS → 30 councils by Q1.” Intent forms in the Brain.",
    nodes: ["00-spine"],
    legs: [],
  },
  {
    n: 2,
    phase: "A",
    title: "Brief the modules",
    text: "Brain turns the strategy into routines and briefs each module with a standing job — People, Offerings, Organisation and You.",
    nodes: ["00-spine", "02-relationships", "03-offerings", "04-organization", "05-persona-you"],
    legs: [
      { from: "00-spine", to: "02-relationships" },
      { from: "00-spine", to: "03-offerings" },
      { from: "00-spine", to: "04-organization" },
      { from: "00-spine", to: "05-persona-you" },
    ],
  },
  {
    n: 3,
    phase: "B",
    title: "Catch a signal",
    text: "Modules run their routines. People catches a signal through the Connections port — “Council X viewed the BOPS pricing page” — and pushes it up to wake Brain.",
    nodes: ["01-integrations", "02-relationships", "00-spine"],
    legs: [
      { from: "01-integrations", to: "02-relationships" },
      { from: "02-relationships", to: "00-spine" },
    ],
  },
  {
    n: 4,
    phase: "B",
    title: "Gather the pieces",
    text: "Brain runs the recommendation play — pulling People’s history and warm path, Offerings’ entry use-case and proof, Organisation’s case study and fence into one view.",
    nodes: ["00-spine", "02-relationships", "03-offerings", "04-organization"],
    legs: [
      { from: "02-relationships", to: "00-spine" },
      { from: "03-offerings", to: "00-spine" },
      { from: "04-organization", to: "00-spine" },
    ],
  },
  {
    n: 5,
    phase: "B",
    title: "Decide",
    text: "Brain decides — weighing the pieces into one call: act on Person P at Council X, because [warm path + fits the profile + viewed pricing], leading with the entry use-case and case study.",
    nodes: ["00-spine"],
    legs: [],
  },
  {
    n: 6,
    phase: "B",
    title: "Render in your voice",
    text: "Brain hands a brief to You, who renders it in your voice — reading your closeness to Person P from People, inside Organisation’s compliance fence.",
    nodes: ["00-spine", "05-persona-you", "02-relationships", "04-organization"],
    legs: [
      { from: "00-spine", to: "05-persona-you" },
      { from: "02-relationships", to: "05-persona-you" },
      { from: "04-organization", to: "05-persona-you" },
    ],
  },
  {
    n: 7,
    phase: "B",
    title: "Surface the action",
    text: "The action surfaces to you: “Reach out to Person P at Council X — they viewed pricing and you’ve a warm intro through Q. Here’s a draft.” You approve, tweak, or send.",
    nodes: ["05-persona-you"],
    legs: [],
  },
  {
    n: 8,
    phase: "B",
    title: "Learn from the outcome",
    text: "The outcome loops back. Brain routes the lesson to the module that should learn — People — and You learns from any edits you made to the draft.",
    nodes: ["00-spine", "02-relationships", "05-persona-you"],
    legs: [{ from: "00-spine", to: "02-relationships" }],
  },
];

/**
 * Map a leg to the canvas edge it lights, and which way the flow runs along it.
 * Edge ids are the sorted `a--b` pair (see app/page.tsx); an edge's source is
 * the first id, so "fwd" means the flow runs source→target.
 */
export function legToEdge(leg: FlowLeg): { id: string; direction: "fwd" | "rev" } {
  const [a, b] = [leg.from, leg.to].sort();
  return { id: `${a}--${b}`, direction: leg.from === a ? "fwd" : "rev" };
}
