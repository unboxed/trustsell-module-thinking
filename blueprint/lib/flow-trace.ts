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

/**
 * The travelling artifact — the parcel the trace follows. It changes form only
 * where a mind reasons (`reasoned`); on the dumb legs it is just carried. The
 * colour rule lives in the token: grey for the raw `fact`, blue once a mind has
 * touched it — that one flip is the deterministic→non-deterministic boundary.
 */
export type ArtifactForm =
  | "goal"
  | "routines"
  | "fact"
  | "signal"
  | "pieces"
  | "brief"
  | "draft"
  | "action"
  | "lesson";

export type Artifact = {
  form: ArtifactForm;
  label: string;
  /** The node the parcel rests at (and eases toward) this step. */
  at: ModuleId;
  /** True where a mind transforms it this step (→ think-pulse + emphasised morph). */
  reasoned?: boolean;
  /** Optional precursor it visibly morphs FROM this step — e.g. a raw grey `fact`
   *  that People's reading flips to a blue `signal` (the determinism boundary). */
  from?: ArtifactForm;
};

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
  /** The travelling parcel's state this step — what the trace follows. */
  artifact: Artifact;
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
    artifact: { form: "goal", label: "your goal: BOPS → 30 councils", at: "00-spine", reasoned: true },
    text: "You and Brain shape a goal pinned to an offering — “BOPS → 30 councils by Q1.” Intent forms in the Brain.",
    nodes: ["00-spine"],
    legs: [],
  },
  {
    n: 2,
    phase: "A",
    title: "Brief the modules",
    artifact: { form: "routines", label: "a standing job, one each", at: "00-spine" },
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
    artifact: { form: "signal", label: "a reply, read as a buying question", at: "02-relationships", reasoned: true, from: "fact" },
    text: "Modules run their routines. Connections fetches the raw facts; People does the reading — a reply from Council X asking what BOPS would cost reads as a live buying question, so People pushes “Council X replied asking about pricing” up to wake Brain.",
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
    artifact: { form: "pieces", label: "history · proof · case study", at: "00-spine" },
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
    artifact: { form: "brief", label: "act on P at Council X, because…", at: "00-spine", reasoned: true },
    text: "Brain decides — weighing the pieces into one call: act on Person P at Council X, because [warm path + fits the profile + just asked about pricing], leading with the entry use-case and case study.",
    nodes: ["00-spine"],
    legs: [],
  },
  {
    n: 6,
    phase: "B",
    title: "Render in your voice",
    artifact: { form: "draft", label: "a message in your voice", at: "05-persona-you", reasoned: true },
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
    artifact: { form: "action", label: "ready to approve or send", at: "05-persona-you" },
    text: "The action surfaces to you: “Reach out to Person P at Council X — they just asked about pricing and you’ve a warm intro through Q. Here’s a draft.” You approve, tweak, or send.",
    nodes: ["05-persona-you"],
    legs: [],
  },
  {
    n: 8,
    phase: "B",
    title: "Learn from the outcome",
    artifact: { form: "lesson", label: "what the reply taught us", at: "02-relationships" },
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
