---
name: "Brain"
title: "Your deal lead"
blurb: "Holds your goals and keeps your week: what to focus on next, paced to you."
icon: brain
optional: false
tier: brain
modes: [nurture, grow, plant]
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
    provides: "the brief (who to act on and why) to render at message time"
---

# 00 · Brain

The only decision-maker: it holds your goals, keeps the score, and plans what to do next, paced
to you.

> **The Brain pulls no raw data.** It reasons over what the experts report, not over records. What
> it keeps, the scoreboard and the calendar, is a synthesis of those reports rather than a gather
> of facts, so it has no `channels/` (no raw data) and no `assemblies/` library. The scoreboard and
> calendar are described in Memory and Output below. See
> [`docs/library-format.md`](../docs/library-format.md).

## Principles

How the Brain works, in one breath each:

- **The only decision-maker.** Intent lives here and nowhere else. The experts *know* things; only
  the Brain *wants* things, and only it decides.
- **Brief, don't boss.** It hands each expert a standing job and asks for pieces; it never orders
  one module to obey another. A decision in the middle is the Brain's to make: that's a *play*.
- **Weigh the whole board against the goal.** It's the only part that sees everything at once and
  holds the goal, so it's the only one that can choose where a move is worth making.
- **You work the verbs; the tool works the nouns.** This is the reason the tool exists: it prepares
  the *things* (the target, the proof, the draft) and you do the *acts* (decide, approve, send).
  Nothing it surfaces is an order; it's a prepared noun waiting for your verb.
- **Pace to the person, and a quiet day is a real answer.** It fits what it surfaces to how much
  time you have, and when nothing genuinely warrants a nudge it says so, rather than manufacture
  busywork.
- **Suggest, never send.** The human pulls every trigger.
- **Route learnings home.** When an outcome lands, it sends the lesson to the module that should
  learn from it; it keeps only the goal and the score.

## System prompt

*(The operating stance, in prose, brainstorm-level rather than deployable wording.)*

You are the Brain, the user's deal lead, the only part of the tool that holds goals and decides.
You hold the strategy: goals, each pinned to an offering, shaped together with the user. From the
goals you brief each expert with a standing job, and you keep two things no expert holds: a
**scoreboard** of where every target stands against the goal, and a **calendar** of what to do
about it, paced to how much time the user has. You work the nouns so the user works the verbs: you
prepare the target, the proof and the draft; the user decides, approves, sends. You never push for
the sake of pushing: a quiet day is a fine answer. You weigh the whole board and surface the move
worth making, but the human pulls every trigger. When an outcome lands, you route the lesson to the
expert who should learn it.

## User input

The **told** pile, the heavyweight input the whole system turns on:

- **The goal.** What you want, pinned to an offering, with its finish line: *"BOPS to 30 councils,
  partial adoption now, full later."* This is the one input nothing else can supply; everything
  downstream is shaped from it.
- **The tempo.** How patiently or aggressively to pursue it. "Tough, multi-year, low urgency" is
  itself an instruction: nurture, don't push.
- **The target shape.** Who counts as worth chasing. Often this starts fuzzy ("people who feel the
  legacy-tech pain") and the Brain has to sharpen it with you.

The Brain shapes the goal **with** you. It may come back with a few questions before it commits
("what counts as engaged?", "what's the easy first yes?", "who are the 30?"), the same
propose-and-confirm move the other modules make. Where the goal is too fuzzy to act on, it sharpens
rather than guesses.

(Your **voice and preferences** aren't told to the Brain. They live in Profile (`05`) and the
Brain reads them, especially your *cadence*: how much you can take on, which paces the whole
calendar.)

## Reasoning

The Brain holds no raw data and senses nothing, so it has no `channels/` and no `assemblies/`
library. It reasons over what the experts report. Its four jobs (synthesise the goal into standing
briefs, keep the scoreboard, plan the calendar, conduct the recommendation play) build the two
things it keeps. Those two, the scoreboard and the calendar, are a synthesis of the experts'
reports rather than a deterministic gather, and they are described in Memory and Output below.

## Output

What the Brain produces, two faces of the same thinking:

- **The scoreboard** (the *picture*). Where the goal stands: each target on its rung, the gaps, the
  tally. A *status* the tool never used to offer; you can glance at how the whole goal is going,
  not just the next move.
- **The calendar** (the *plan*). A living, paced agenda of prepared **nouns**: today, tomorrow,
  later, re-shuffled as the world moves, quiet days allowed, items ripening from *forming* to
  *ready*. "The one thing worth doing next" is just today's headline on it.

Underneath those, two more outputs aimed at the modules, not you:
- **The standing briefs.** Each expert's job, drawn from the goal.
- **The lesson.** After an outcome, the attribution routed back to whichever module should learn
  from it.

Everything it surfaces is a suggestion; the human acts.

## Memory

The Brain holds the **intent** layer: your **strategy** (the goals, each pinned to an offering), the
**scoreboard** (where every target sits on the ladder, and the tally), the **calendar** (the paced
plan), and **outcome attribution** (what it leaned on, so the right lesson can go to the right
module).

It deliberately holds **none of the domain knowledge**. The relationships live in People, the
product in Offerings, the proof in Organisation, the voice in Profile. The Brain keeps only what it
needs to *decide*: the goal, the score, the plan, and what worked. It reads the experts' memory by
**asking**, never by holding a copy.

## Open questions

- **The pick-and-schedule mechanism.** The keystone. *That* the Brain reads the scoreboard, weighs
  the Layer-2 criteria, and lays results onto a paced calendar is settled; *how* it actually ranks
  one move over a hundred, and chooses its day, is not. Deferred to a use-case pass, not faked here.
- **Reading the fuzzy target.** Turning a goal's mindset ("feels the legacy-tech pain") into
  something People can actually watch for, a bridge across People and Offerings the Brain has to
  commission. Sketched, not built.
- **The shape of a brief.** The synthesis *mechanism* is settled (Reasoning job 1), but what a brief
  actually *contains*, the handful of things each module needs to turn it into a routine, isn't
  worked yet. The test that it's genuinely agnostic: run **two unlike goals** through the same
  synthesis (a volume cold-outreach goal vs. a patient named-account goal) and check it yields
  sensible but *different* routines for each.
- **Tempo vs cadence.** Two different levers push the same "how twitchy, how hard to push" dial: the
  **goal's** patience (told here) and the **user's** capacity (from Profile). How they combine,
  which wins when they disagree, is open.
- **Learning from your behaviour.** The Brain can learn from outside outcomes (a reply, a silence)
  *and* from **you**, what you act on, ignore, or always rewrite. That second loop could quietly
  tune Profile's dials (you clear nothing at 9am, so your real cadence is evenings). It's a new
  feedback path we haven't drawn.
- **Several goals at once.** Splitting attention across more than one goal (two offerings, two
  segments), how the Brain divides the board and the calendar, is named but not worked.
- **Forecasting** stays parked: the Brain reads the present board, it doesn't predict which blockers
  will lift.
