---
name: "People"
title: "Your relationships"
blurb: "Keeps every contact, conversation and connection organised — and digs to find who matters."
icon: users
optional: false
tier: assistant
modes: [sustain, expand]
connects:
  - to: "00-spine"
    provides: "reports what the brief flags — 'Jane went quiet', 'found the DM' — and answers follow-ups"
  - to: "03-offerings"
    requests: "which offering a conversation relates to, and the rebuttal to a worry on record"
    provides: "the worry it has on record, for 03 to answer"
  - to: "05-persona-you"
    provides: "relationship history — plain facts and personal colour — read at write time"
  - to: "01-integrations"
    requests: "a person's email, calendar and Slack history; web / Tavily research on a target"
---

# 02 · People

**Purpose:** The expert on everyone you deal with — who they are, your history with them, who-knows-whom — that digs to find who actually matters and notices when something changes. (Part librarian, part investigator.)

## What it owns
- **People and organisations** you sell to: who they are, their role, and who knows whom — the relationship web.
- **Conversation memory:** what was discussed, what you promised (open loops), where a deal stands.
- **All relationship history** — the plain facts *and* the personal colour ("you and Jane go way back, she trusts you"). Profile only borrows this at write-time; it lives here.
- **Investigation:** mapping the buying group inside a target — who the players are, what part each plays (decider, influencer, champion, blocker) and who sways whom — and finding a warm path in. The unit of work isn't a lone decision-maker but a small **coalition**: some people decide, others only influence, and the holes (a budget-holder you haven't met yet) are flagged as honestly as the knowns.
- **A browseable record** — it serves you directly, not just Brain: look up any contact and find the whole picture, a timeline, the web, and conversations filed by offering.

## What it doesn't
Hold the goals (Brain), what you sell (Offerings), your own company's proof (Organisation), or your writing voice (Profile).

## How it senses — facts, then counting, then reading

Sensing is three steps, not two, and the split matters because only the last one is "intelligent" — it's the one place a judgement enters:

1. **The facts (fetched, deterministic).** Connections fetches raw records from your connected accounts — a new Gmail message or thread, a calendar event, a Slack message, a web/Tavily result. These are just *facts*: "a reply landed on the Jane thread at 9:03," "the recurring sync dropped off the calendar," "a tender appeared on Council X's site." No judgement, and Connections never reads them on its own (see `01`).
2. **The counting (still deterministic).** People does plain arithmetic over those facts: "the last reply from Jane was three weeks ago," "she started four of the last six threads," "her replies used to take a day and now take an hour." There is still no opinion here — anyone counting the same records gets the same numbers. People does this, not Connections, because *what's worth counting* is set by the goal ("days since last reply" only matters because the strategy cares about momentum). This is the **checkable** floor: you can see the dates and redo the sum yourself.
3. **The reading (non-deterministic).** People reads those counts *against the brief* and decides what they mean: "this reply is a live buying question," "Jane has gone quiet, not just gone on holiday," "this tender fits BOPS," "a colleague just revealed a warm path." This is the judgement call — the same count means different things under different goals.

**Where the opinion starts.** The deterministic-to-non-deterministic line isn't the handoff from Connections to People — it sits one notch higher, *inside* People, between the counting and the reading. People does both; only the reading is arguable. Connections stays dumb throughout. (Worked end to end, with several of a salesperson's questions traced down to this floor and the gaps named, in `docs/tracing-back.md`.)

**Disposition is read, not tagged.** *Who a person is to you* — a champion, an enthusiast, someone going cold, a blocker — is itself one of these readings, inferred from a pattern of behaviour, never a label you apply by hand. A champion *looks like* a pattern: they reply fast and at length, write first instead of only responding, use ownership language ("once we've rolled this out"), pull colleagues into threads, and do work for you when you're not in the room. People reads that pattern and draws the conclusion; you only confirm or correct it. That inference is the heart of what makes this module intelligent rather than a filing cabinet.

**The surfacing rule.** People pushes a reading up to Brain only when it both clears the strategy's bar *and* points at a plausible next action — because the tool's whole output is *who to act on, why, and a draft to approve*. A fact that leads nowhere stays filed; it isn't a signal.

What People can actually see today comes from the **connected** accounts — Gmail, Calendar, Slack, and web/Tavily research — so the signals are the ones those sources can yield:

| Kind | What's fetched and counted (the checkable floors) | People's reading (the opinion) | The action it sets up |
|---|---|---|---|
| Advance | Gmail: a reply asking "what would this cost us?" | a live buying question | draft: the entry use-case + the proof that lands |
| Sustain | Gmail + Calendar: no reply in three weeks, and the recurring sync fell off | a champion going cold | draft: a light re-engage |
| Expand | Web/Tavily: Council X published a digital-services tender | a relevant trigger event | draft: outreach that references it |
| Expand | Slack: a colleague in #deals mentions they know Council X's CTO | a warm path to the decision-maker | draft: an ask-for-intro |

(A connected CRM or LinkedIn would add more — a stage change, a job move — but neither is connected yet, so People doesn't lean on them today. They're on the board for later.)

## Its routine, in agent terms

People is the routine-heaviest module. Concretely, its standing job is:

- **Trigger** — a default **beat** (a regular sweep of watched accounts' new mail, calendar and Slack, plus a periodic web/Tavily check on live targets) *and* **events** (a reply lands, a thread goes quiet, a meeting is booked or just happened, a target is named in Slack, a trigger turns up on the web). Both, not one — see the trigger note in `00`.
- **Inputs it pulls** — the "good-customer shape" from Offerings (its supplier here), so a fit-scan has something to match against.
- **The job** — turn raw facts into readings (above), filed by person and offering, and judge which are worth Brain's attention.
- **Push-condition** — clears the strategy bar *and* maps to an action (the surfacing rule).
- **Output** — a short, specific push: *"Jane's gone quiet," "Council X replied asking about pricing," "found a warm path to the DM via Slack"* — each already carrying the action it implies.

Under an *expand* goal the beat tilts toward hunting new prospects and warm intros; in fit-matching People owns **the scan** (Offerings defines the shape; People matches it against real contacts and digs up new ones). *How* it investigates is its own call — Brain sets the goal, People decides where to look.

## Who it works with
- Reports to **Brain** what the brief flags, and answers its follow-ups.
- Hands **Offerings** the worry it has on record, and takes back the rebuttal.
- Lets **Profile** read relationship history at write-time.
- Reaches the world — mail, calendar, Slack and research — *through* **Connections**.

## Still open (the *how*, deferred)
The reading's *thresholds* — how long is "gone quiet," how strong a reply must be to clear the bar, and how confident a disposition read (champion, cooling) must be before it's acted on. Building the buying-group map is settled in shape above; what's deferred is these knobs. (It's the heaviest module — worth watching it stays a focused people-expert.)
