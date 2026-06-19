/**
 * The "Assembly" view — the canvas's complement.
 *
 * Where flow-trace.ts walks the system forward in time as a route across the map,
 * this lays the same machine out as a *build-up*: many raw facts at the wide base
 * converging upward, through the tool's reading, into a single action at the apex.
 * It's the picture from docs/scenario-councils.md ("not a route you travel — an
 * assembly you build"), worked on the councils goal. The *words here are mirrored
 * from that doc — keep them in sync.
 *
 * Coordinates are hand-placed on a fixed 1180×940 design stage (x→right, y→down),
 * the same "hand-placed geometry" approach as canvas-layout.ts. The renderer scales
 * the whole stage to fit. `phase` drives the bottom-up reveal: facts first, then the
 * determinism line, then readings, the insight, the gathered pieces, the action.
 */

export const STAGE = { w: 1180, h: 940 } as const;

/** Grey below the line (given, unread); blue above it (a mind has reasoned). */
export type AssemblyKind =
  | "fetched" // a raw fact pulled in through Connections — grey
  | "told" //    something you set once — grey, but yours, not fetched
  | "reading" // a single inference off the facts — blue
  | "insight" // the readings compounded — blue, the hero
  | "piece" //   another module's contribution, joining higher up — blue
  | "brief" //   Brain's decision, assembled — blue
  | "action"; //  the draft, surfaced — blue, the apex

export type AssemblySource =
  | "mail"
  | "calendar"
  | "you"
  | "offerings"
  | "organisation"
  | "people"
  | "brain"
  | "voice";

export type AssemblyNode = {
  id: string;
  kind: AssemblyKind;
  x: number;
  y: number;
  /** small uppercase label over the card */
  eyebrow: string;
  /** the content line */
  label: string;
  source?: AssemblySource;
  /** which reveal beat it belongs to (1 = base facts … 6 = action) */
  phase: number;
  hero?: boolean;
};

export type AssemblyEdge = {
  from: string;
  to: string;
  /** told→insight links are drawn dashed: context, not fact */
  told?: boolean;
  phase: number;
};

/** y of the determinism line, and the beat it draws on. */
export const DETERMINISM = { y: 566, phase: 2 } as const;

export const NODES: AssemblyNode[] = [
  // ── the apex: one action ────────────────────────────────────────────────
  {
    id: "action",
    kind: "action",
    x: 590,
    y: 74,
    eyebrow: "the action",
    label: "A draft in your voice — ready for you to approve",
    source: "brain",
    phase: 6,
    hero: true,
  },

  // ── Brain's brief ───────────────────────────────────────────────────────
  {
    id: "brief",
    kind: "brief",
    x: 590,
    y: 200,
    eyebrow: "Brain's brief",
    label: "Act on Tom — lead with the records answer and the Borsetshire case study; offer the partial rollout",
    source: "brain",
    phase: 5,
  },

  // ── the pieces Brain gathered (People's insight, flanked by two modules) ──
  {
    id: "piece-off",
    kind: "piece",
    x: 250,
    y: 326,
    eyebrow: "Offerings",
    label: "The records-import answer and the easy partial-rollout first step",
    source: "offerings",
    phase: 5,
  },
  {
    id: "insight",
    kind: "insight",
    x: 590,
    y: 332,
    eyebrow: "the insight",
    label: "Tom is a warming champion with a live question",
    source: "people",
    phase: 4,
    hero: true,
  },
  {
    id: "piece-org",
    kind: "piece",
    x: 930,
    y: 326,
    eyebrow: "Organisation",
    label: "The Borsetshire County case study, and the compliance fence",
    source: "organisation",
    phase: 5,
  },

  // ── the three readings ──────────────────────────────────────────────────
  {
    id: "r-champion",
    kind: "reading",
    x: 230,
    y: 484,
    eyebrow: "reading",
    label: "Tom is a champion",
    source: "people",
    phase: 3,
  },
  {
    id: "r-warming",
    kind: "reading",
    x: 560,
    y: 484,
    eyebrow: "reading",
    label: "He's warming",
    source: "people",
    phase: 3,
  },
  {
    id: "r-question",
    kind: "reading",
    x: 842,
    y: 484,
    eyebrow: "reading",
    label: "There's a live question",
    source: "people",
    phase: 3,
  },

  // ── the raw facts (fetched), stacked under their reading ─────────────────
  {
    id: "f1",
    kind: "fetched",
    x: 230,
    y: 644,
    eyebrow: "mail",
    label: "Started four of the last six threads himself",
    source: "mail",
    phase: 1,
  },
  {
    id: "f2",
    kind: "fetched",
    x: 230,
    y: 720,
    eyebrow: "mail",
    label: "Replies within a day, several paragraphs long",
    source: "mail",
    phase: 1,
  },
  {
    id: "f3",
    kind: "fetched",
    x: 230,
    y: 796,
    eyebrow: "mail",
    label: "Ownership language: “once we've rolled this out”",
    source: "mail",
    phase: 1,
  },
  {
    id: "f4",
    kind: "fetched",
    x: 230,
    y: 872,
    eyebrow: "mail · calendar",
    label: "Copied colleagues in; ran two internal demos",
    source: "calendar",
    phase: 1,
  },
  {
    id: "f5",
    kind: "fetched",
    x: 560,
    y: 644,
    eyebrow: "mail",
    label: "Replies getting faster these past weeks",
    source: "mail",
    phase: 1,
  },
  {
    id: "f6",
    kind: "fetched",
    x: 560,
    y: 720,
    eyebrow: "mail",
    label: "Added his head of IT — a name on no earlier thread",
    source: "mail",
    phase: 1,
  },
  {
    id: "f7",
    kind: "fetched",
    x: 842,
    y: 644,
    eyebrow: "mail",
    label: "Asks if it can import their case records — unanswered",
    source: "mail",
    phase: 1,
  },

  // ── the told inputs (set once, by you) ──────────────────────────────────
  {
    id: "t1",
    kind: "told",
    x: 1058,
    y: 660,
    eyebrow: "told",
    label: "Council 14 is one of your 30 targets",
    source: "you",
    phase: 1,
  },
  {
    id: "t2",
    kind: "told",
    x: 1058,
    y: 762,
    eyebrow: "told",
    label: "Goal: land a partial adoption, then grow it",
    source: "you",
    phase: 1,
  },
];

export const EDGES: AssemblyEdge[] = [
  // facts → readings
  { from: "f1", to: "r-champion", phase: 3 },
  { from: "f2", to: "r-champion", phase: 3 },
  { from: "f3", to: "r-champion", phase: 3 },
  { from: "f4", to: "r-champion", phase: 3 },
  { from: "f5", to: "r-warming", phase: 3 },
  { from: "f6", to: "r-warming", phase: 3 },
  { from: "f7", to: "r-question", phase: 3 },
  // readings → insight
  { from: "r-champion", to: "insight", phase: 4 },
  { from: "r-warming", to: "insight", phase: 4 },
  { from: "r-question", to: "insight", phase: 4 },
  // told → insight (what makes it worth raising), dashed
  { from: "t1", to: "insight", told: true, phase: 4 },
  { from: "t2", to: "insight", told: true, phase: 4 },
  // pieces → brief
  { from: "insight", to: "brief", phase: 5 },
  { from: "piece-off", to: "brief", phase: 5 },
  { from: "piece-org", to: "brief", phase: 5 },
  // brief → action
  { from: "brief", to: "action", phase: 6 },
];

/** Beat timings (ms from mount) for phases 1..6. */
export const BEATS = [0, 0, 620, 1040, 1500, 2040, 2560] as const;
