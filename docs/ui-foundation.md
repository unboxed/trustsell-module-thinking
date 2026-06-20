# UI Foundation — the one brief

The single source of truth for the interface. It says *what* the screen is and *what*
it shows — and deliberately leaves *how it looks* (palette, type, shape, motion, layout)
to the design step.

## What this is

An app, not a web page. The screen is one **endless canvas** you drag to pan — no
zoom — with a **recenter** control (a button, or press `0`) to frame the nodes
again from anywhere. It starts by holding a single thing: the module **nodes**. As the tool grows, detail
arrives in **panels**, and only when a piece earns its place. The canvas of nodes stays
the home.

## What it shows — the nodes

The whole point is to show the six modules as nodes. Each node carries a consistent
short **name**, a **title** (the friendly "Your ___" form), and a one-line **blurb** of
what it does. These per-module facts now live in **each module's own `CLAUDE.md`
frontmatter** — that is the single source of truth, so editing a module updates its
card with no other change. The blueprint reads them live per request
(`lib/modules.ts`); `lib/canvas-layout.ts` now holds only the hand-placed node
**positions**, which the canvas merges with the live facts. Each module's narrative
**body** feeds its detail panel, so the detail layer reflects the current thinking too.

The frontmatter scheme each module carries (the *keys*, not the values — the values
live in the modules):

The card and wires (read by the app today):
- `name` — the card eyebrow (Brain, People, …)
- `title` — the friendly "Your ___" heading
- `blurb` — one-line "what it does"
- `icon` — lucide icon name
- `optional` — shows the "optional" treatment (only `04`)
- `tier` — `brain`, `assistant`, or `connector` (semantic; not drawn yet)
- `modes` — which categories of work it serves: sustain, advance, expand (semantic; not drawn yet)
- `connects` — two-way links to other modules; the canvas auto-routes one wire per link (see below)
- `draws_from` — the channels (sub-items of `01`) a module pulls raw data through; the canvas draws a single **inflow arrow** from each named channel plug into the module (see below)

The badge facets (short labels now, drawn as chips later):
- `values` — the principles the module holds
- `inputs` — what the user supplies: `inputs.current` (today's tool) and `inputs.suggested` (the model's ask)
- `routines` — the module's standing single-owner jobs; sits *on* its node when drawn
- `plays` — the Brain-conducted choreographies across modules (on `00-spine` only)
- `open_questions` — the module's still-unsettled design questions

A connection is **not one undirected road**. Every link carries two flows, and the
frontmatter names them from the **owning module's point of view**:

```yaml
connects:
  - to: "<module-id>"
    requests: "<what this module asks the other to do / hand over>"   # the out-flow
    provides: "<what this module hands to the other>"                 # the give-back
```

Either side may be omitted when a module only pulls or only answers (e.g. `02` asks
nothing of the brain, so its `00-spine` edge carries only `provides`). The connector
`01` declares no `connects` of its own — it has no initiative, so the modules that
reach *through* it declare the link (e.g. `02 → 01` requests a person's mail +
calendar). The canvas (React Flow) **auto-routes one wire per link** from these
declarations — no hand-placed geometry — with an arrow at each end: request out,
provide back.

A **`draws_from`** link is the other half of how `01` is wired. Where `connects` joins two
*reasoning* peers (two-way), `draws_from` joins a module to a **channel plug** it pulls raw data
through — and a channel has no initiative, so it only *provides*. The canvas draws these as a
**single inflow arrow** (channel → module), styled apart from the two-headed peer wires (a
lighter, dashed line) so "a data source feeds this module" reads differently from "two peers
converse". A module lists the channel ids it draws from (`draws_from: [gmail, slack, …]`),
mirroring the `### <channel>` sections in its body.

**Every facet is two layers, and values show as badges.** `connects` set the pattern: the
actual values as a short list in frontmatter, and a narrative in the body that explains them.
The rest of the badge facets (`values`, `inputs`, `routines`, `plays`) follow it. So the
**detail panel** does not render one undifferentiated blob of prose. It renders the module's
body as a set of named **facets** (purpose, values, system prompt, inputs, routines, memory,
open questions), and for the badge facets it shows each value as a **badge** (a chip you can
add, change, or remove) beside its one-line description. The reader (`lib/modules.ts`) surfaces
only the keys it already knows; the badge keys are **defined now, drawn later**, the same way
`connects` predated the wires. The writing and badge rules live in
`_scratch/handoff-clarity-pass.md`.

## Routines & plays

The model has two things beyond the static wiring: **routines** (a module's standing
jobs) and **plays** (a brain-conducted choreography across several modules — see
`00-spine`).

A **play is now drawn** — as the "Trace the flow" timeline, which **follows the artifact**.
The canonical end-to-end play (`flow.md`) plays back as a single **parcel riding the lit route**
— Brain → the experts it calls → Profile — that **changes form only where a mind reasons**
(fact → signal → brief → draft → action). It stays **grey while it's a raw fetched record and
turns blue once a mind has read it**, so the deterministic→non-deterministic boundary shows on
the canvas itself. A scrubber steps through the eight stages; the choreography lives in
`blueprint/lib/flow-trace.ts` (words mirrored from `flow.md`).

Still **not drawn: routines.** Likely shape when they earn their place: a routine sits *on*
its owning node (in the node's panel, or as a small count), since it has one owner.

How the nodes and canvas look and lay out — and what each panel becomes — is the
designer's call.
