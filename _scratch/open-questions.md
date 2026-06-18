# Open Questions — Parking Lot

Running list of unresolved decisions. We did a full module-by-module pass and settled the big structural questions (each now recorded in its module's `CLAUDE.md`). What remains here is mostly the **how** — deliberately deferred until we work through concrete use cases.

## Resolved (now living in the module docs)
- **Standing strategy** → it's **per-offering goals owned by the spine**; `04` holds no strategy.
- **The learning loop** → **distributed**; the spine keeps only outcome attribution and routes learnings back to the owning module.
- **Module boundaries** → `02` = the outside world + all relationship history + sensing; `03` = product knowledge; `04` = the organisation (optional; a *source* of materials + a *fence* of compliance/brand); `05` = voice only.
- **`01`** → a port/switchboard with no agency; modules reach *through* it. It is not the sensor or the trigger source.
- **Autonomy** → **people as the fulcrum, AI as the lever**: the AI suggests, the human decides.

## Still open — the *how* (deferred to a use-case pass)
- `02`: how it identifies the real decision-maker, and how it decides someone has "gone quiet."
- `00`: how a goal is represented, and how the spine prioritises across several goals into one daily worklist.
- `00`: the trigger model — cadence, events, or both.
- `05`: exactly how voice is captured (samples vs style-spec vs learned from edits).
- Learning: the precise mix of passive observation vs. gently asking the user.

## Personas (still worth tracing)
- Cold / volume seller (lives in Expand) vs relationship / owner (lives in Sustain): one engine, weighted differently. Autonomy comfort differs too — `05` holds that preference.

## Next session idea
- Trace the spine's routing for one concrete **Sustain** and one **Advance** example end to end, the way we did for the BOPS Expand goal.
