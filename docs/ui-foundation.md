# UI Foundation — the one brief

The single source of truth for the interface. It says *what* the screen is and *what*
it shows — and deliberately leaves *how it looks* (palette, type, shape, motion, layout)
to the design step.

## What this is

An app, not a web page. The screen is one **endless canvas** you drag to pan — no
zoom — with a **recenter** control (a button, or press `0`) to frame the nodes again
from anywhere. It holds the module **nodes**; the canvas of nodes stays the home.

> **Clicking a module node opens its library shelf.** A module card now routes to
> `/library?module=<id>` — the filterable gallery of that module's assemblies and signals
> (see *The library* below). Channel plugs keep their own behaviour (a raw-data panel). How a
> node reveals any *other* detail is still open.

## What it shows — the nodes

The whole point is to show the six modules as nodes. Each node carries a consistent
short **name**, a **title** (the friendly "Your ___" form), and a one-line **blurb** of
what it does. These per-module facts live in **each module's own `module.md`
frontmatter** — that is the single source of truth, so editing a module updates its
card with no other change. The blueprint reads them live per request (`lib/modules.ts`);
`lib/canvas-layout.ts` holds only the hand-placed node **positions**, which the canvas
merges with the live facts.

The frontmatter scheme each module carries (the *keys*, not the values — the values live
in the modules), read by the app today:
- `name` — the card eyebrow (Brain, People, …)
- `title` — the friendly "Your ___" heading
- `blurb` — one-line "what it does"
- `icon` — lucide icon name
- `optional` — shows the "optional" treatment (only `04`)
- `tier` — `brain`, `assistant`, or `connector` (semantic; not drawn yet)
- `modes` — which categories of work it serves: `plant`, `grow`, `nurture` — **Plant** (find & grow) · **Grow** (move deals forward) · **Nurture** (keep relationships alive). Validated against the `MODES` set in `lib/modules.ts`.
- `connects` — two-way links to other modules; the canvas auto-routes one wire per link (see below)
- `draws_from` — the channel ids a module pulls raw data through; the canvas draws a single **inflow arrow** from each named channel plug into the module (see below)

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
converse". The channel plugs are read live from `01-integrations/channels/*.md`; clicking a plug
opens that channel's raw-data records — the one node detail view in place today.

How the nodes and canvas look and lay out is the designer's call.

## The library — the assemblies & signals gallery

A second view, `/library`, mirrors the catalog floors the same way the canvas mirrors the module
cards: a filterable gallery of every **assembly** and **signal** across the modules, read live from
their `*.md` frontmatter (`readLibrary` in `lib/modules.ts`). You filter by **search**, **module**,
**type** (assemblies / signals) and **mode**; clicking a module node on the canvas lands here
pre-filtered to that module. Each card mirrors the frontmatter; the long body and clickable lineage
open in an overlay.

The frontmatter keys the library reads today:

- Both floors — `id`, `label` (display name), `blurb` (the one-line card-face description), `inputs`
  (lineage, one floor down — assembly `inputs` that resolve to a sibling assembly render as a
  **clickable badge** that opens it).
- Assemblies — `about` (what one instance is keyed on, e.g. "a person"), `deterministic`.
- Signals — `modes` (plant / grow / nurture chips), `kind` (the family, shown in the eyebrow),
  `confidence` (`high` / `graded` / `low`, drawn as a quiet weight), `answers` (sales-question
  handles), `measures` (the counts beneath; shown in the overlay).

Same invariant as the canvas: the docs are the single source of truth and the library is a read-only
mirror, so editing a `blurb` or a facet updates its card with no other change.
