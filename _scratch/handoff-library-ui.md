# Handoff — the library is mid-flight; pause to design how it *renders*

*A brief for the next session. This is a **brainstorm**, not a build — see the root `CLAUDE.md`:
reason and pressure-test; design *how the library should look and organise* first, and confirm
before writing app code in `blueprint/`. Brainstorm at **"who does what"** altitude, in **plain
English** (the user is non-technical). When something gets decided, write it into the owning doc.*

> This is the **library + UI** track. The parallel **content/design** track (briefing mechanism,
> reading the fuzzy target, the triage keystone) lives in
> [`handoff-post-rollout.md`](handoff-post-rollout.md) and is still open, not superseded.

## Where we are — the library migration

We're converting each module from one prose `CLAUDE.md` into a structured **library** (a slim
`module.md` overview plus catalog floors). The contract is [`docs/library-format.md`](../docs/library-format.md).
The floors: **raw data** (channels + a module's own told source) → **assemblies** (deterministic
gathers) → **signals** (the first opinion), each entry naming its `inputs` one floor down so any
read walks straight back to a plain fact (track-back).

- **`01` Connections** — raw-data floor done: 9 channel docs in
  [`01-integrations/channels/`](../01-integrations/channels/) (gmail, calendar, drive, contacts,
  meet, slack, web; linkedin + salesforce present but `connected: false`, named as data gaps).
- **`02` People** — **fully done**, the worked example: 3 assemblies, 9 signals, each with a
  Facts/Counts/Opinion track-back table.
- **`03` Offerings** — **done this session.** Added a brand-new floor: the **told source**
  ([`03-offerings/told.md`](../03-offerings/told.md)) — the facts the user states outright (pitch,
  fit-shape, use-case, pricing, worry+answer), the most deterministic ground there is. Plus 4
  assemblies and 5 signals. It **closed 02's two open pulls** (`blocker → objection-list`,
  `understanding-gap → product-claims`) and fixed a twin-line `connects` gap (the lead-situation
  `fit-match` needs, added to both `02` and `03`). The told source is **defined once** in
  `library-format.md` for `02`/`05`/`00` to adopt later.
- **`04` Organisation, `05` Profile, `00` Brain** — `module.md` overviews only; reasoning floors
  pending. `04` will have **assemblies only** (no signals — it matches proof and gates drafts);
  `00` has **no channels and no normal assemblies** (its "assemblies" are the scoreboard and
  calendar).
- The old `CLAUDE.md` monoliths stay in place until each module's library is complete, then retire.

## Why pause here

The whole reason to split the catalog out of prose was so it could **grow and be rendered**. Three
modules in (02 richly, 03 with a new floor), the blueprint still shows **none of it**. Better to
see the library displayed on a rich, real example now — and let what we learn reshape the format —
than to mass-produce 04/05/00 first and discover the rendering wants something different.

## The gap — what the blueprint shows today vs. the library

The app is a **read-only mirror** of the docs. Today it reads **only each module's `module.md`/
`CLAUDE.md` frontmatter** (via `coerceMeta` in [`blueprint/lib/modules.ts`](../blueprint/lib/modules.ts))
and renders:

- six **module cards** (name, title, blurb, icon, optional, `modes` chips);
- **peer wires** from `connects` (two-headed: request out, provide back);
- **inflow arrows** from `draws_from` (channel → module);
- the **Connections port** with channel plugs (connected / ghosted);
- detail **panels** (body markdown + records tree);
- two set-pieces: the **Assembly view** (bottom-up facts→reading, with the grey→blue determinism
  line) and the **Trace-the-flow** timeline (an artifact morphing across floors).

It does **not** read `channels/*.md`, `assemblies/*.md`, `signals/*.md`, or `told.md`. So the
actual product of this workspace — the floors and their lineage — is **invisible** in the UI. The
reader would need to learn to load those files and their frontmatter.

## What a UI session needs to make visible (the design brief)

1. **The floors, browsable.** Raw data (shared channels **and** the module's own told source) →
   assemblies → signals. The told source should read as *"you said this"*, distinct from a fetched
   channel (`source: told` vs `account`/`builtin`).
2. **Lineage / track-back.** Each entry's `inputs` chain, walked down to a plain fact. The shape to
   reach for is the **radial track-back tree** already described (parked) in
   [`docs/tracing-back.md`](../docs/tracing-back.md) ("The picture this makes"): the signal/question
   at the centre, **readings inner, counts middle, facts on the rim**, and **gaps drawn as branches
   that stop mid-air** (labelled data-gap or told-gap).
3. **The counting floor, made visible.** `tracing-back.md` flags that the current views jump from
   facts to readings and skip the counts. Signals carry their counts as `measures:` — surfacing
   them is the missing middle floor.
4. **Per-entry chips from frontmatter.** Assemblies: `floor`, `about`, `deterministic`. Signals:
   `modes`, `kind`, `confidence`, `answers`, `measures`, `pull`. Raw data: `source`, `connected`.
5. **Gaps as first-class.** Data gap (a source not connected) and told gap (you haven't said it
   yet) shown honestly, never hidden — the same "name it, don't fake it" rule the docs hold to.
6. **Reuse the determinism boundary.** Grey (raw: fetched + told) → blue (reasoned) is already the
   visual grammar in the Assembly and Trace views. The **assembly → signal seam is exactly that
   boundary**; lean on it rather than inventing a new code.

## Open UI questions for the session to decide

- **Where the library lives:** a drill-down from a module card into its floors? a dedicated
  "Library" view? an expandable floor-strip under each card? (ui-foundation's rule: the canvas of
  nodes stays the home; detail arrives in panels as it earns its place.)
- **One signal's track-back at a time** (a radial tree you open per signal) **vs. a whole module's
  floors as layered columns** (raw → assemblies → signals).
- **Do measures become a visible counting floor**, or stay chips on a signal?
- **How much on the canvas vs. in panels** — the canvas is deliberately spare; the floors may be a
  panel/drill-down rather than more nodes.

## Invariants the UI must respect

- **Read-only mirror.** The docs are the single source of truth; the UI never stores. Edit a `.md`,
  the view updates. (`coerceMeta` reads only the keys it knows — extending the UI means teaching the
  reader the new floors and their frontmatter.)
- **Every id resolves; name the gap, don't fake it.** A dangling `inputs`/`measures` id is a bug.
- **Frontmatter is flat chips; the body holds the nested stuff** (records tables, threshold prose,
  the worked-example table). Don't push trees into frontmatter.

## Read these first

- [`docs/library-format.md`](../docs/library-format.md) — the contract, now including the told source.
- [`02-relationships/`](../02-relationships/) and [`03-offerings/`](../03-offerings/) — the two
  worked libraries (the gold standard the UI must render).
- [`docs/ui-foundation.md`](../docs/ui-foundation.md) — what the screen *is*, and the frontmatter
  keys read today.
- [`docs/tracing-back.md`](../docs/tracing-back.md) — the three floors and the radial-tree picture.
- [`blueprint/lib/modules.ts`](../blueprint/lib/modules.ts) — `coerceMeta`: exactly what the app
  reads now.

## After the UI pass — resume the buildout

Continue the module libraries: **`04` next** (assemblies-only, the quick one: match proof + gate a
draft, no signals), then **`05`** (the told dials + voice signals), then **`00`** (scoreboard +
calendar, bespoke). The format may have grown by then from what the UI work teaches.

## Guardrails

- Brainstorm at **"who does what"** altitude, plain English; design first, build only when asked.
- **Flag contradictions** between modules rather than smoothing them — boundary disputes are the
  most useful catch.
- Keep **parked frontiers flagged, not faked** (forecasting, the learning loop, triage).
