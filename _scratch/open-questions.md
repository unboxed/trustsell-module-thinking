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

## Still open — the *how* (deferred to a use-case pass)
- `02`: how it identifies the real decision-maker, and the reading's *thresholds* — how long is "gone quiet," how strong a reply clears the bar.
- `00`: how a goal is represented, and how the spine prioritises across several goals into one daily worklist.
- `05`: exactly how voice is captured (samples vs style-spec vs learned from edits).
- Learning: the precise mix of passive observation vs. gently asking the user.

## Personas (still worth tracing)
- Cold / volume seller (lives in Expand) vs relationship / owner (lives in Sustain): one engine, weighted differently. Autonomy comfort differs too — `05` holds that preference.

## Next session idea
- The grounded signal taxonomy (Sustain / Advance / Expand, on the current plumbing) now lives in `02`. Still worth tracing one **Sustain** and one **Advance** example end to end, the way `flow.md` does the BOPS Expand goal.
