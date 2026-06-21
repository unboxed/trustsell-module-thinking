# Handoff — the sensing layer is built on 02; now roll the template out

*A brief for the next agent. This is a **brainstorm**, not a build — see the root `CLAUDE.md`:
reason and pressure-test, don't write app code, schemas or UI unless explicitly asked. The
visual is paused. When something gets decided, write it into the owning module's `CLAUDE.md`.*

## Where we are
We moved up from **Ingredients** (raw data — `01`'s and each module's `Raw data` section) to the
next layer, **sensing**, and made **`02-relationships` the worked example** — the first module
filled all the way down the agent-anatomy. The other modules now copy 02's shape.

### The model that got locked (don't re-litigate)
- **Two moves above raw data.** *Assembling* (deterministic: tidy scattered records into one
  contact's picture) then *sensing* (agentic). Assembling is plumbing; sensing is the value.
- **Sensing = count → judge → a *signal*.** It rides the three floors from `docs/tracing-back.md`
  (facts → counting → opinion). The **signal** is the unit of this layer — a named, reusable read
  ("cooling champion", "gone quiet"). Four properties: it **carries its evidence** (it's the top
  of a track-back stack), it's **reusable**, it's **goal-relative**, it's **threshold-bound**.
- **"recipe" is retired.** It collided with *play* and was a method-word for a thing-layer. Use
  **signal** (the thing) / **sensing** (the method) / **play** (the cross-module Brain
  choreography) / **routine** (a module's standing job). A **signal ≠ a routine**.
- **Signals are reverse-engineered from the 26 sales questions** (`docs/sales-questions.md`), not
  invented in the abstract — a signal earns its place only if it answers a real question. The
  catalog (in 02's Reasoning) covers the People-subset; **forecasting (Q16) and triage (Q21) are
  parked frontiers**, explicitly not v1 People signals.
- **Thresholds: measure against the relationship's *own rhythm*,** not absolute days; run an
  **innocent-explanation scan** (out-of-office, "back next month", a booked meeting) before crying
  wolf; carry **confidence**. The approach is set; the live numbers are deferred to a use-case pass.
- **The Brain tunes sensing** by handing People a standing brief (scope · signal types ·
  sensitivity). Intent stays centralized in the Brain.
- **Cross-module boundary:** core sensing is **single-module**; People may **pull a supplier
  ingredient** (e.g. Offerings' objection list) with no decision in the middle — still its signal.
  The full **fusion with a decision** (signal + fit + proof → recommendation) is a Brain **play**,
  the layer *above* sensing — **deferred**.
- **User input = the *told* layer.** Defined on the 02 pilot; the foundational case — **who you
  are** (name, role, "About you") — lives in `05` and is **supplied outward** (owned once, lent to
  all). Each module owns its own slice of "told".

### What this session changed (so you don't redo it)
- `02-relationships/CLAUDE.md` — filled completely (the template to copy).
- `05-persona-you/CLAUDE.md` — `User input` section filled with identity (rest of 05 still light).
- `docs/sales-questions.md` — **new**; the verbatim 26 questions + the five frontiers + pipeline map.
- Retired "recipe" in root `CLAUDE.md`, `README.md`, `docs/flow.md`.
- **Format spec reconciled to reality:** root `CLAUDE.md`'s "Module doc format" and
  `docs/ui-foundation.md` now describe the **agent-anatomy** body (Raw data → Principles → System
  prompt → User input → Reasoning → Output → Memory → Open questions) and point at **02** as the
  worked example. The old "badge-facet card" format (Values/Routines/Plays chips, with `03` as the
  example) was sketched but never adopted — noted as a possible future frontmatter extension.
- Deleted three spent handoffs (`handoff-sales-questions`, `handoff-workflow-brainstorm`,
  `handoff-clarity-pass`); their durable bits were lifted; all references repointed.
- The blueprint app was **not touched** — frontmatter keys it reads are unchanged.

## What's next — the job
**Roll the agent-anatomy fill out to the remaining modules, using `02` as the template.** Each
needs its `Principles`, `System prompt`, `User input`, `Reasoning`, `Output`, `Memory` worked
(they currently read `_TBD_`; only `Raw data` is filled). Suggested order and the heart of each:
- **`00-spine` (Brain)** — the richest. Its `User input` is the **goal/strategy** (the heavyweight
  told input); its `Reasoning` is goal→strategy synthesis + **triage/prioritisation across a big,
  slow board** (still an open question) + conducting **plays**. Tie to `docs/flow.md`.
- **`03-offerings`** — the most-referenced supplier. `User input` = pitch, fit-shape, pricing,
  objections (the "current vs suggested" question). Its reads ground in web + Drive.
- **`04-organization`** — proof library + the brand/compliance **fence**; the **shared** memory tier.
- **`05-persona-you`** — finish it (voice capture, the render, autonomy); identity input already done.
- **`01-integrations`** — minimal: it's a **port**, no reasoning; `User input` = connect your
  accounts once. Mostly confirm the empty-by-design sections read cleanly.

Keep each module honest to the locked model above; **flag any contradiction** you find with 02 or
the docs.

## Still genuinely open (parked in `_scratch/open-questions.md`)
- Threshold **numbers** (`02`); triage/prioritisation mechanism (`00`); **forecasting** frontier
  (read *next*, not *now*); voice-capture method (`05`); the learning feedback mix; and the
  "**move + talking points**" output-widening decision (Q25 frontier).

## Read these first
- root `CLAUDE.md` — the model + the corrected **Module doc format** (agent-anatomy; 02 is the example)
- `02-relationships/CLAUDE.md` — the worked template to copy
- `docs/sales-questions.md` — the demand-side 26 questions + frontiers
- `docs/tracing-back.md` — the three floors / track-back
- `docs/how-modules-collaborate.md` — told / fetched / supplied; supplier chains vs Brain plays
- `docs/flow.md` + `docs/scenario-councils.md` — the canonical play and the assembly view
- `_scratch/open-questions.md` — the backbone: what's settled vs what's still open

## Guardrails
- Brainstorm at **"who does what" altitude**, plain English (non-technical), module docs as
  **narrative**, not shorthand. No arrow/symbol shorthand in prose.
- Don't let conclusions float — show the facts under any read (track-back).
- Module docs are the source of truth; write decisions into the owning module's `CLAUDE.md`.
- Frontmatter (name/title/blurb/icon/tier/modes/connects/draws_from/raw_data) is read by the
  blueprint app — keep it intact; the body is where the brainstorm lives.
