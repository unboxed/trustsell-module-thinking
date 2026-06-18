# 00 · Spine (The Brain)

**Role:** The spine is the only part of the system that *reasons to decide*. Everything else is an expert it consults; the spine is the one that holds intent, picks who to act on, and assembles the recommendation. If the rest of the tool is a team of specialists, the spine is the lead who sets the agenda.

## What the spine holds: strategy as goals

Strategy here isn't an abstract "who we target" statement living off to the side — it's a short list of concrete **goals, each attached to an offering**. The user declares them: *"For BOPS, my goal is 30 councils as early adopters by Q1."* Each goal quietly carries two things the spine uses: a **default mode** (that BOPS example is an *Expand* goal) and a **target shape** (councils that fit the early-adopter profile).

A note on where things live versus where they're typed: when the user adds a product they'll often enter the product details *and* the goal in one sitting. Behind the scenes those go to different homes — the product facts settle into `03-offerings`, while the *goal* is owned here in the brain. Where you type something is not the same as which module owns it.

## How the spine works with the assistants

The spine doesn't just fire one-off questions. It works with each assistant (`02`–`05`) three ways:

1. **It briefs them.** From a goal, the spine hands an assistant standing instructions — *"watch these council accounts, find the decision-makers, tell me if a champion goes quiet."*
2. **It receives their reports.** The assistants work their beat and volunteer what the brief flags — *"Jane's gone quiet," "I found the likely decision-maker at Council X."* Those reports are themselves triggers that can wake the spine.
3. **It asks them follow-ups.** *"Tell me more about Jane." "Who else is in that account?"*

## Routing: a recipe per mode

When the spine needs to act, it works through a **default recipe** for the chosen mode — an ordered checklist of which assistant to ask. Independent questions run together; a question that depends on an earlier answer waits for it.

Worked example — an *Expand* goal for BOPS:
1. A goal fires, or a trigger arrives (e.g. `02` reports "Council X viewed the BOPS pricing page").
2. The spine sets the mode to **Expand**.
3. It asks `02`: warm paths into councils that fit the early-adopter profile? Any council contact gone quiet?
4. It asks `02` again — waiting on step 3 — for our history with the top target and any open loop.
5. In parallel it asks `03` (the BOPS entry use-case and the proof point that lands for a council) and `04` (the matching case study and the brand/compliance guardrails).
6. It assembles the **what + why**: act on Person P at Council X, because [warm path + fits profile + viewed pricing], leading with [use-case + case study].
7. It emits a **brief**, which the render step turns into a draft — `05` for the voice, `04` for the fence. The draft is surfaced for approval, never auto-sent.

The three modes are the same recipe machine with different weightings: *Sustain* mutes `03` and leans on decay and open loops from `02`; *Advance* leans hard on `03` (stage + objection → rebuttal + proof); *Expand* leans on the `02` relationship web.

## The spine emits a brief, not prose

The spine decides; it does not write the message. It hands down a **brief** — the intent, the target, the what+why, the key points, and any guardrails — and a separate render step composes the actual words (`05` personal voice, inside `04`'s brand/compliance fence). This keeps the spine a decider rather than a copywriter.

## Learning

Learning is **distributed** — each assistant tunes itself in its own domain (`05` from the edits the user makes to drafts, `03` from which rebuttals precede a deal advancing, `02` from a contact's real rhythm). The spine keeps only one learning job: **outcome attribution.** It stamps each recommendation with what it leaned on, and when an outcome comes back in, it routes the credit (or blame) to the assistant that should learn from it.

The rhythm of learning follows a curve: **active at cold-start** (ask more while onboarding), **passive once warm**, and **reactive on drift** — an assistant only starts asking again when it notices it needs re-tuning (for example, the user suddenly editing `05`'s drafts heavily again).

## Still open (the *how*, deferred)
- How a goal is represented, and how the spine prioritises across several goals into one daily worklist.
- The trigger model: cadence-based, event-based, or both.
