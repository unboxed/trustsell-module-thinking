---
name: "Brain"
title: "Your deal lead"
blurb: "Holds your goals and decides the one thing worth doing next."
icon: brain
optional: false
tier: brain
modes: [sustain, advance, expand]
connects:
  - to: "02-relationships"
    requests: "watch these accounts, find the decision-makers, flag when a champion goes quiet"
    provides: "the standing brief drawn from the goal, plus follow-up questions"
  - to: "03-offerings"
    requests: "the product playbook, proof strategy and pricing levers for a deal"
  - to: "04-organization"
    requests: "the matching case study and the compliance fence"
  - to: "05-persona-you"
    requests: "render the brief into the user's voice"
    provides: "the brief — who to act on and why — to render at message time"
---

# 00 · Brain

**Purpose:** Brain holds your goals and decides the single most useful thing to do next — and *why* — then hands it down for the experts to flesh out and you to approve. It's the only part that *decides*; everything else is an expert it consults.

## What it owns
- **The strategy** — a short list of goals, each pinned to an offering ("BOPS → 30 councils by Q1"). Brain doesn't just store these; it **helps you shape them**, back and forth, offering by offering. It's a thinking partner, not a form you fill in.
- **The routines** — it turns the strategy into standing jobs and hands one to each module to focus on (see below).
- **Prioritising** — it weighs everything the modules surface into what *you* should focus on next.
- **The brief** — for any action it assembles the what + why and hands it to the render step. It decides; it doesn't write the words.
- **Outcome attribution** — the one bit of learning it keeps: it stamps each recommendation with what it leaned on, and when a result comes back, routes the credit (or blame) to the module that should learn from it. (Everything else learns in its own domain.)

## What it doesn't
Hold facts — people, products, proof — or write the final message. Those live in the experts.

## Turning a goal into a strategy
A goal arrives as a human sentence or two — *"sell this to councils; it's a tough, multi-year sell; find the early adopters who feel the legacy-tech pain; land a partial adoption now and grow it."* Brain's first real act is to make that explicit enough to act on: the offering and the finish line, the tempo (here, patient — never push), the shape of a good target (often a *mindset*, not a tidy category), whether you're winning one person or a whole coalition, and the board you're starting from.

It can't do this cold. Before Brain can synthesise, it needs the goal shaped well enough — it may come back with a few questions to fill gaps (*"what counts as engaged?", "what's the easy first yes?"*) — the modules' starting material in place (the pitch in Offerings, the accounts connected, your seed list of who to chase), and a **first baseline scan** so it knows where every relationship currently stands. Only then can it turn the strategy into the standing routines below. The whole chain is worked through, outcome-first, in `docs/scenario-councils.md`.

## Its routines
Routines are standing jobs drawn from the strategy. Brain is the source of every *other* module's routines, and it works with each module three ways:
- **Briefs** them — hands each a strategy-driven job ("watch these councils, find the decision-makers").
- **Receives** what they push up — *"Jane's gone quiet," "Council X replied asking about pricing."* These can wake Brain.
- **Asks** them follow-ups on demand — *"who else is in that account?"*

So it's push *and* pull. A routine always has **one owner** — the module that does the work. It may *pull* ingredients from another module (People's fit-scan pulls the "good-customer shape" from Offerings), but that other module is a **supplier**, never a co-owner.

**In agent terms, a routine is a small spec:** a *trigger* (a default beat, events, or both), the *inputs* it pulls from suppliers, the *job* it does, a *push-condition* (when it's worth waking Brain), and the *output* it pushes up. The trigger model is **both** — a default beat keeps the standing jobs ticking, and events fire in between. People's routine is worked out in full in `02` (it's the heaviest); Offerings and Organisation run lighter ones — mostly keeping their material current and answering on request — and Connections has none, since it holds no initiative.

## Plays
Some work spans several modules around a **decision Brain has to make in the middle** — that's a **play**, not any single module's routine. The litmus is simple: *is there a decision in the middle?* No → it's one module's routine. Yes → it's a Brain play. Plays live here, with Brain, because Brain is the only conductor — modules can't direct each other, they only request and provide.

The canonical play is the recommendation itself: a goal fires (or a module pushes a trigger up); Brain leans toward that goal's kind of work and runs the play — asks People for warm paths and history, Offerings for the entry use-case and fit-shape, Organisation for the matching case study and the fence; assembles *act on Person P at Council X, because […], leading with […]*; and hands a brief to Profile to render. The draft is surfaced for approval, never auto-sent.

**Another way to read this play — as a question whose answer just changed.** A recommendation can be seen as the moment one of a salesperson's standing questions — *"who should I chase first?", "what's the next move with Tom?"* — gets an answer that is both fresh and points to a move. This is only a *lens* for understanding the work, not how the tool stores anything (the memory of a person stays in `02`). The same lens surfaces Brain's other honest output: a **gap** — *"I can't tell you yet, and here's what I'd need"* — either a source to connect or something only you can tell it. A gap is worth raising as plainly as an answer; it's the difference between the tool guessing and the tool being straight with you. Both — the answered question and the gap — are worked through, traced down to the plain facts, in `docs/tracing-back.md`.

## The three kinds of work
Sustain (keep relationships alive), Advance (move open deals), and Expand (find and grow) aren't modes you switch into — they're the three **categories** every routine and action falls into. All three run at once; your strategy just tilts where the emphasis goes. A goal like "30 councils on BOPS" is *expand-flavoured*, so the work leans that way — while you still sustain existing relationships and advance any open deals underneath. And the tilt can be subtle: when the target list is fixed — a set shortlist of organisations — *expand* turns inward, and stops meaning "find new logos" and starts meaning "widen the coalition inside an org you already have."

## Still open (the *how*, deferred)
- How a goal is represented in detail, and how Brain prioritises — across several goals, and across a big, slow board of many contacts — into one daily worklist. (The goal-to-strategy step is now sketched above and worked in `docs/scenario-councils.md`; what stays open is the precise representation and the triage itself.)
