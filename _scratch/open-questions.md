# Open Questions — Parking Lot

Running list of unresolved decisions. We did a full module-by-module pass and settled the big structural questions (each now recorded in its module's `CLAUDE.md`). What remains here is mostly the **how** — deliberately deferred until we work through concrete use cases.

## Resolved (now living in the module docs)
- **Standing strategy** → it's **per-offering goals owned by the spine**; `04` holds no strategy.
- **The learning loop** → **distributed**; the spine keeps only outcome attribution and routes learnings back to the owning module.
- **Module boundaries** → `02` = the outside world + all relationship history + sensing; `03` = product knowledge; `04` = the organisation (optional; a *source* of materials + a *fence* of compliance/brand); `05` = voice only.
- **`01`** → a port/switchboard with no agency; modules reach *through* it. It is not the sensor or the trigger source.
- **Autonomy** → **people as the fulcrum, AI as the lever**: the AI suggests, the human decides.
- **Sensing** → a two-step split: Connections does a **deterministic** fetch of raw facts; `02` does the **non-deterministic** reading into actionable signals, grounded in the *connected* accounts (Gmail, Calendar, Slack, web/Tavily). A signal is only surfaced if it can become an action. Recorded in `01`/`02`.
- **The trigger model** → **both**: a default beat plus events. A routine's shape (trigger · inputs · job · push-condition · output) is recorded in `00`, worked out in full in `02`.
- **Raw material** — two piles: **fetched** (mail, calendar, Slack, web, through Connections) and **told** (the goal, the seed list of who to chase, your voice and preferences). *Characterisation is not told* — a contact's disposition (champion, cooling, blocker) is **inferred from behaviour** by `02`, never tagged by the user. Recorded in `02`; worked in `docs/scenario-councils.md`.
- **The unit of a target** — a **stakeholder map / coalition** (deciders, influencers, champions, blockers, and the gaps), not a lone decision-maker. Recorded in `02`.
- **Goal becomes strategy** — Brain synthesises a human paragraph into an explicit strategy, and needs some things first (a shaped goal, the modules' starting material, a baseline scan). Sketched in `00`, worked in `docs/scenario-councils.md`.

## Still open — the *how* (deferred to a use-case pass)
- `02`: the reading's *thresholds* — how long is "gone quiet," how strong a reply clears the bar, how confident a disposition read must be before it's acted on. (The decision-maker question is resolved into the stakeholder-map above.)
- `00`: the precise representation of a goal, and how the spine prioritises across several goals — and across a big, slow board — into one daily worklist. (The goal-to-strategy step itself is now sketched in `00`.)
- `05`: exactly how voice is captured (samples vs style-spec vs learned from edits).
- Learning: the precise mix of passive observation vs. gently asking the user.

## Personas (still worth tracing)
- Cold / volume seller (lives in Expand) vs relationship / owner (lives in Sustain): one engine, weighted differently. Autonomy comfort differs too — `05` holds that preference.

## Next session idea
- The grounded signal taxonomy (Sustain / Advance / Expand, on the current plumbing) now lives in `02`. An **Advance/Sustain** example (the councils goal, reverse-engineered from outcome to raw data) is now worked in `docs/scenario-councils.md`. A *pure Sustain* example (a single cooling champion, no open deal) is still worth tracing for contrast.
- **The demand-side probe** — a real salesperson's 26 questions through the sales process, mapped against the model (most land cleanly; a few frontiers; one reframe). Worked up as a fresh-agent handoff in `_scratch/handoff-sales-questions.md`. Frontiers to chase: forecasting (read *now*, not *next*), the triage mechanism, timing thresholds; plus the reframe — the question-set as the tool's living information architecture (answers, not fields).
