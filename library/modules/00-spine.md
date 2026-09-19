---
id: 00-spine
name: "Brain"
title: "Your deal lead"
blurb: "Holds your goals and keeps your week: what to focus on next, paced to you."
icon: brain
optional: false
tier: brain
modes: [sustain, advance, expand]
connects:
  - to: "02-relationships"
    requests: "watch these accounts, find the decision-makers, flag when a champion goes quiet, and hand over the deal picture (a selling effort's people and conversations)"
    provides: "the standing brief drawn from the goal, plus follow-up questions"
  - to: "03-offerings"
    requests: "the product playbook, evidence strategy and pricing levers for a deal"
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
  the *things* (the target, the evidence, the draft) and you do the *acts* (decide, approve, send).
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
prepare the target, the evidence and the draft; the user decides, approves, sends. You never push for
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

These live as records in [`told/goal-told.md`](../told/goal-told.md).

**Told once, or asked when it matters** (decided 18 September). There is no settings screen. What
changes from seller to seller fills the goal and profile records from the seller's own answers, by
one rule. A fact that does not shift (the goal, the tempo, how much time you have) is told once and
kept. Your judgement, anything that shifts, or anything the tool would otherwise guess (which
councils matter most this month, your tone, what a good fit looks like, what is new about the
product) comes as an **Ask**, raised only when the answer would change something, and written into
the right record so it is never asked twice. An Ask is the general way the tool learns what it
cannot observe.

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

## What first: the order of a day

Decided 18 September, answering Q21 ("who should I contact most urgently?"). The Brain asks one
question of every card: **what would waiting a day cost?** The answer is already on the card, in
its `when`, what it owes and what waits on it, so `build.js` works out the place rather than anyone
typing it. Six bands, in order:

1. **Gone tomorrow.** Its last day (`until`) is today or tomorrow.
2. **Worse every day.** Something owed (a promise, an unanswered question), or a fresh moment going
   stale.
3. **Holding something up.** A card another card waits on. Asks land here often: ten seconds that
   free a card.
4. **A date further off.** Set by the world, weeks away.
5. **Due by its rhythm.** Right this week, no worse next week.
6. **Costs nothing to wait.**

Within a band, the organisation further up the ladder comes first, then the surer card. One guard
runs across every band: **one move per person at a time**. A second Act to the same person (its
`to`) waits for the first and sits right under it. The Brain decides which goes first, not the
seller (19 September): what is owed first, then what gives before what asks, then what waiting a
day costs. (My reason, not yet yours.) Two that nothing tells apart should be one card. A card also
waits when an Ask's answer changes it, or when its own words give a sequence. The rules are in
`docs/library-format.md`, "A card's day".

The pace is not a band: how many cards a day comes from your
time and cadence (Profile), ties between keeping what you have and starting something new from your style (Profile), and how
early a rhythm card shows from the goal's tempo.

## Output

What the Brain produces, two faces of the same thinking:

- **The scoreboard** (the *picture*). Where the goal stands: each **target (a deal)** on its rung, the
  gaps, the tally. A target is a *deal*: the selling effort People gathers (its people and
  conversations, which can span more than one organisation), which the Brain places on the goal's
  ladder. The organisation is the *account* behind a deal, not the unit. A *status* the tool never used
  to offer; you can glance at how the whole goal is going, not just the next move.
- **The calendar** (the *plan*). A living, paced agenda of prepared **nouns**: today, tomorrow,
  later, re-shuffled as the world moves, quiet days allowed, items ripening from *forming* to
  *ready*. Each item is a **person inside a deal**. "The one thing worth doing next" is just today's
  headline on it.

Underneath those, two more outputs aimed at the modules, not you:
- **The standing briefs.** Each expert's job, drawn from the goal.
- **The lesson.** After an outcome, the attribution routed back to whichever module should learn
  from it.

Everything it surfaces is a suggestion; the human acts.

## Memory

The Brain holds the **intent** layer: your **strategy** (the goals, each pinned to an offering), the
**scoreboard** (where every target sits on the ladder, and the tally, a target being a **deal** that
People gathers and the Brain stages), the **calendar** (the paced plan), and **outcome attribution**
(what it leaned on, so the right lesson can go to the right module).

It deliberately holds **none of the domain knowledge**. The relationships live in People, the
product in Offerings, the evidence in Organisation, the voice in Profile. The Brain keeps only what it
needs to *decide*: the goal, the score, the plan, and what worked. It reads the experts' memory by
**asking**, never by holding a copy.

## Open questions

- **The pick-and-schedule mechanism.** How a day is ordered is now settled (the six bands above).
  Still open: how many cards a given cadence allows, and what a later day on the calendar shows.
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
