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

| Key | Meaning |
|---|---|
| `name` | the card eyebrow (Brain, People, …) |
| `title` | the friendly "Your ___" heading |
| `blurb` | one-line "what it does" |
| `icon` | lucide icon name |
| `optional` | shows the "optional" treatment (only `04`) |
| `tier` | `brain` · `assistant` · `connector` (semantic; not drawn yet) |
| `modes` | which categories of work it serves — sustain / advance / expand (semantic; not drawn yet) |
| `connects` | two-way links to other modules — see below; the canvas auto-routes one wire per link |

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
