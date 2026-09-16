# Handoff — the agent-anatomy rollout is complete; now work the Brain's frontiers

> **This is the content/design track**, written during the agent-anatomy phase. Since then the docs
> have **fully migrated** to the structured **library** format: each module is now a slim `module.md`
> plus its libraries (`channels/`, `told.md`, `assemblies/`, `signals/`), and the old per-module
> `CLAUDE.md` files have been **retired** (the source of truth is `module.md` + the libraries; see
> [`../docs/library-format.md`](../docs/library-format.md)). Read the per-module references below as
> `module.md`, not `CLAUDE.md`. The threads below (briefing · fuzzy target · triage) remain open.

*A brief for the next agent. This is a **brainstorm**, not a build — see the root `CLAUDE.md`:
reason and pressure-test, don't write app code / schemas / UI unless explicitly asked. Brainstorm
at **"who does what"** altitude, in **plain English** (the user is non-technical), and write module
docs as **narrative**, not shorthand. When something gets decided, write it into the owning
module's `module.md` (or its library files).*

## Where we are
The **agent-anatomy fill is COMPLETE** — all six modules are now filled all the way down
(Raw data → Principles → System prompt → User input → Reasoning → Output → Memory → Open questions).
`02-relationships` was the worked template; `00` / `01` / `03` / `04` / `05` were filled this session.

## What got built this session (don't re-litigate)
- **`01` Connections** — the port. No reasoning, by design; it carries records and remembers *which
  accounts are connected*, never the content.
- **`05` Profile** — more than voice. Holds **operator dials** (sales fluency · time/cadence · style ·
  autonomy) and the **two voices**: the tool writes *as you* (to prospects) and speaks *to you*
  (plain vs sales-fluent, set by the fluency dial). "Told" is a **seed, not a form** — refined as
  memory.
- **`03` Offerings** — **shared when an org exists** (products belong to the org, so it learns across
  the team; personal only when solo). Proof split by what it's about: **product-specific proof →
  Offerings; company-general proof → `04`** — both read the same Drive, so it's about *ownership, not
  access*.
- **`04` Organisation** — now **reads proof from Drive** (it gained a `drive` inflow; the old
  "uploaded, no channels" note is gone). The fence/rules stay *told*. Its reasoning is lighter —
  *match* (find proof) + *gate* (check a draft against the fence), not sensing. The one **shared** tier.
- **`00` Brain** — reframed in a BOPS role-play into two faces no other module had:
  - a **scoreboard** — every target on the goal's ladder (cold → engaged → coalition → partial →
    full), with gaps + a tally. **Brain-owned; People feeds goal-blind readings**, the Brain places
    them on *this* goal's ladder and counts (only the Brain holds the goal).
  - a **calendar** — a living, paced agenda of prepared **nouns**: today / tomorrow / later, paced to
    the user's time, **quiet days allowed** (no manufactured busywork), items **ripen** (shown
    *forming* → crafted to *ready*).
  - **Nouns/verbs is now the headline principle**: the tool works the nouns so the user works the verbs.
- Root `CLAUDE.md` "Output of the tool" widened to the calendar + scoreboard; `00`'s card `blurb`
  reworded off "the one thing worth doing next."
- **Terminology** — adopted **Plant / Grow / Nurture** as the single vocabulary *everywhere* (renamed
  from the old Sustain / Advance / Expand — docs, the `modes` frontmatter enum, and the app's `MODES`
  list in `blueprint/lib/modules.ts` all updated). Plant = find new relationships · Grow = move deals forward ·
  Nurture = keep alive. (Settled the old *Expand* double-duty: **Plant** = establishing a new
  relationship — a new org *or* a new person inside one; **Grow** = moving an existing deal forward.
  So widening a coalition is Plant, not Grow.)

## What to focus on next (my recommendation)
Two foundational threads first, then the main event:

1. **The briefing mechanism** (goal → routines) — **now written into `00`'s Reasoning job-1**
   (agnostically: goals vary; the Brain turns *any* goal into per-module **briefs (a job, not a
   goal)** that the experts run as **routines**; the sub-aims stay in the Brain; it's a **handshake**,
   the briefs are **living**, the decomposition follows **Plant / Grow / Nurture**). *Remaining:
   optionally sharpen `docs/flow.md` Phase A to match — but flow.md's traced steps are mirrored in
   `blueprint/lib/flow-trace.ts`, so edit only with the sync in mind.* Next: work the actual **shape
   of a brief** (what each module's brief contains) on a couple of different goal types.
2. **Reading the fuzzy target** — turning a goal's *mindset* ("feels the legacy-tech pain") into
   something People can actually watch for. Pairs naturally with #1 (it's the hardest brief to
   write). A Brain ↔ People ↔ Offerings bridge.
3. **THE KEYSTONE — triage / pick-and-schedule.** The deepest open question: *how* the Brain ranks
   one move over a hundred quiet ones, and lays it on the right day. We now know what it **reads**
   (the scoreboard), what it **produces** (the calendar), and the **criteria** (something changed ·
   fits the goal's shape · time-sensitive · low-risk — scenario Layer 2). The **mechanism** is still
   deferred — this is the main event when ready.
4. **Learning from your behaviour** — the new loop: what you act on / ignore / always rewrite tunes
   Profile's dials (you clear nothing at 9am → your cadence is evenings). Ties the Brain back to
   Profile; not yet drawn.
5. **Smaller / supporting:** tempo-vs-cadence (the goal's patience and the user's capacity push the
   same dial — which wins?); several goals at once (splitting board + calendar); Offerings' team-share
   mechanics; house-voice vs your-voice at render time (flagged from both `04` and `05`); voice-capture
   method (`05`); `02` threshold numbers.
- **Forecasting stays parked** — the tool reads the present board, it doesn't predict which blockers
  will lift. (Read *next*, not *now*.)

## Read these first
- root `CLAUDE.md` — the model (note the widened "Output of the tool")
- `00-spine/module.md` — the Brain (scoreboard + calendar)
- `02-relationships/module.md` (+ `assemblies/`, `signals/`) — the worked template every module copies
- `docs/flow.md` + `docs/scenario-councils.md` — the canonical play forward, and the BOPS goal the
  role-play started from (the goal-in-the-user's-words is scenario lines 13–19)
- `docs/how-modules-collaborate.md` — told / fetched / supplied; supplier chains vs Brain plays
- `docs/tracing-back.md` — the three floors / track-back · `docs/sales-questions.md` — the 26
  questions + the five frontiers
- `_scratch/open-questions.md` — the backbone parking lot (settled vs still open)

## Guardrails
- Brainstorm at **"who does what"** altitude, plain English, module docs as **narrative**.
- **Flag contradictions** between modules rather than smoothing them over — boundary disputes are
  the most useful catch.
- Module docs are the **source of truth**; write decisions into the owning module's `module.md` (or its library files).
- **Frontmatter** (name / title / blurb / icon / tier / modes / connects / draws_from / raw_data)
  is read by the blueprint app — keep it intact; the body is where the brainstorm lives.
- Keep the **parked frontiers flagged, not faked**.
