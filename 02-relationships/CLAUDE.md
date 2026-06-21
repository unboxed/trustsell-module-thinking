---
name: "People"
title: "Your relationships"
blurb: "Keeps every contact, conversation and connection organised — and digs to find who matters."
icon: users
optional: false
tier: assistant
modes: [nurture, plant]
connects:
  - to: "00-spine"
    provides: "reports what the brief flags — 'Jane went quiet', 'found the DM' — and answers follow-ups"
  - to: "03-offerings"
    requests: "which offering a conversation relates to, and the rebuttal to a worry on record"
    provides: "the worry it has on record, for 03 to answer"
  - to: "05-persona-you"
    provides: "relationship history — plain facts and personal colour — read at write time"
draws_from: [gmail, calendar, slack, web]
raw_data:
  - "Email message"
  - "Email thread"
  - "Contact"
  - "Calendar event"
  - "Slack message"
  - "Slack channel"
  - "Slack user"
  - "Web result"
  - "Enrichment"
---

# 02 · People

The expert on everyone you deal with: who they are, your history, and who knows whom.

> **This module is the worked example.** It's the first to be filled all the way down the
> agent-anatomy (Raw data → Principles → System prompt → User input → Reasoning → Output →
> Memory). The other modules copy this shape.

## Raw data

Everything People can pull in from the connected channels, through Connections. These are plain
records, before any reading. Grouped by channel — the `### <channel>` sections below are the
channels it draws from (`gmail`, `calendar`, `slack`, `web`), mirrored in the `draws_from`
frontmatter so the canvas draws an inflow arrow from each plug into this module.

### Gmail
`Email message` — sender · recipients (to/cc) · subject · body · snippet · timestamp · thread id · direction (sent or received) · read/unread · labels · has-attachments
`Email thread` — participants · subject · message count · first and last activity
`Contact` — name · email address *(from message headers)*
`Attachment` — filename · type · size

### Calendar
`Calendar event` — title · description · attendees (with accepted / declined / tentative) · organiser · start and end · all-day flag · recurrence · location · video link · created/updated
`Free / busy` — when a person is booked or open

### Slack
`Slack message` — channel · author · text · timestamp · thread · mentions · reactions · edited flag
`Slack channel` — name · topic · purpose · members · public or private
`Slack user` — name · real name · title · timezone · status
`Slack file` — filename · type · size

### Web / Tavily
`Web result` — source URL · title · snippet · published date
`Page content` — the extracted text of a page
`Enrichment` — company (name · domain · industry · size · location) · person (role · company) · trigger event (a published tender, a leadership change, funding)

### Not connected yet (future channels)
`CRM record` — stage · owner · amount · close date *(Salesforce — not connected)*
`LinkedIn` — role · job change · mutual connections *(not connected)*

## Principles

How People works, in one breath each:

- **Infer, don't tag.** A contact's disposition — champion, cooling, blocker — is *read off
  behaviour*, never a label the user fills in. The inference is the point.
- **Count before you judge.** Every opinion stands on deterministic counts you could redo
  yourself. The seam between the counting and the judging is always visible.
- **Never let a read float.** Every signal carries its evidence down to plain facts — a date in
  the inbox, a dropped meeting. If it can't reach the ground, People says what's missing instead
  of guessing.
- **Sense single-owner.** People reads off its *own* picture. It may pull an ingredient from a
  supplier (Offerings' objection list, say), but the read stays People's — no decision in the
  middle.
- **Goal-relative, no goals of its own.** *What's* worth sensing is set by the Brain's strategy;
  People supplies the reading, never the intent.
- **Suggest, never send.** People surfaces who and why; the human decides. People works the
  nouns, you work the verbs.

## System prompt

*(The operating stance, in prose — brainstorm-level, not deployable wording.)*

You are People, the expert on everyone the user deals with — who they are, the history between
them, and who knows whom. You hold no goals of your own: you answer questions, and you
proactively report whatever your standing brief tells you to watch for. You read meaning off
behaviour — you never accept "champion" or "blocker" as an input, you infer disposition from
what people actually do. You count before you judge, and you never state a read you can't walk
back down to a dated fact. When the ground isn't there — a source isn't connected, or the user
hasn't told you something only they know — you name the gap rather than guess. You suggest; the
user decides.

## User input

The **told** pile — what only the user can supply, that no amount of fetched mail will reveal:

- **The seed list** — who to chase, who matters. At the start the tool can't know your book from
  your inbox alone; you name the targets.
- **Context it can't fetch** — "she's my ex-colleague," "we met at the conference," "he's the
  real decision-maker even though he's quiet." Facts that live only in your head.
- **Corrections** — overriding a read: "they're not cooling, they're on holiday." A correction
  is itself a fact People remembers.

When People needs something only you can give, it doesn't stall — it **researches a start,
proposes a draft to confirm, or flags it** (the same graceful-degradation move the supply
modules make at setup). A *told* gap it usually can only flag; it can't fill it itself.

Note: **who *you* are** — your name, your "About you" — is not told to People. It's *supplied*
from Profile (`05`), which owns your identity; People leans on it but doesn't hold it.

## Reasoning

People doesn't just hold facts — it *reads* them. There are two moves above the raw data, and
they are different in kind. Keeping them apart is what keeps the reading trustworthy.

**First, assembling — organising the facts so they can be seen.** The raw records arrive
scattered: a hundred separate emails, a handful of calendar events, a few Slack mentions.
Assembling gathers everything about one person (or one thread) into a single picture — *Tom, and
your whole history with him*. This is deterministic: nothing is judged, nothing is guessed; the
facts are simply tidied into one place. Any address book or CRM does this much. It's the floor
the reading stands on, not the reading itself.

**Then sensing — reading meaning off that picture.** This is the part only an agent does, and it
sits on the three floors from `docs/tracing-back.md`:
- **Counting** (still deterministic): plain arithmetic over the picture — *"Tom last replied 26
  days ago," "he normally replies within a day," "he's skipped the monthly check-in."* Anyone
  counting the same emails gets the same numbers.
- **Judging** (the first opinion): turning those counts into a read — *"Tom is cooling."* This is
  the first place People says something you could argue with.

**The thing sensing produces is a signal** — a named, reusable read like *cooling champion, gone
quiet, warming, champion went dark*. A signal is the unit of this layer. (We deliberately don't
call it a "recipe": that word names a cross-module *play* in the Brain, and a signal is a
*thing*, not a method.) Four things make a signal trustworthy:

1. **It carries its evidence.** A signal is never just a label; it's the label *plus the counts
   and facts underneath it*. "Tom's cooling" arrives with "normally replies in a day, now silent
   26 days, skipped the check-in, nothing on record to explain it." The signal is the top of a
   track-back stack — you can always walk it down to a date in the inbox.
2. **It's reusable.** The same signal fires across many people. That's what makes it a layer of
   its own and not a one-off remark.
3. **It's goal-relative.** What's worth sensing is set by the Brain's strategy, not by People on
   its own — momentum matters only because the goal cares about momentum.
4. **It's threshold-bound** — see *The threshold* below.

**A signal is not a routine.** A routine is the standing job that goes *looking* — its trigger,
inputs, the job it runs, when it pushes, what it outputs. A signal is one of the things that job
can turn up. One routine can raise several signals.

### The signal catalog

We don't invent signals in the abstract — that space is bottomless. We **reverse-engineer them
from the salesperson's real questions** (`docs/sales-questions.md`): a signal earns its place
only if it answers one. The People-relevant subset is the *inferred-reading* questions; each
signal below names the counts beneath it, and flags where it must **pull** a fact from a
supplier module.

| Signal | Answers | The counts beneath it | Pull? |
|---|---|---|---|
| **Gone quiet / cooling** | Q18, Q19 | gap since they last engaged vs *their own rhythm*; your last note unanswered N days; a recurring meeting dropped | — |
| **Warming** | Q14, Q19 | reply times shortening; they're starting more threads; more of their people joining in | — |
| **Champion** | Q4–6, Q14 | advocates internally; loops colleagues in; replies fast and at length | — |
| **Blocker / skeptic** | Q13, Q15 | repeated objections; flat, short replies; stalls after each ask | pull Offerings' objection list to *name* the objection |
| **Understanding gap** | Q13 | confused questions; re-asks; terms used wrongly in replies | pull Offerings' product claims to judge the confusion |
| **New stakeholder appeared** | Q5–6 | a new name joins the thread or calendar this period; a "Head of …" signature shows up | — |
| **Champion went dark / left** | Q6, Q18 | a bounce-back; an auto-reply "no longer with"; sudden total silence from a once-active contact | — |
| **Warm path available** | Q7–8 | a target shows up in your mail/Slack via a shared contact; an intro chain is visible | thin until LinkedIn — a **data gap**, name it |
| **Open loop / promised** | Q22 | an ask of yours left unanswered; an "I'll send you X" from you, undelivered | — |

**Parked frontiers — not v1 People signals:**
- **Will the barrier lift?** (Q16) — *forecasting*. It reads *next*, not *now*; People reads the
  present. Deferred.
- **Who's most urgent?** (Q21) — *triage*. That's the Brain weighing across People's signals, not
  a signal People raises.

A handful of these (blocker, understanding gap) lean **Grow**, but they feed Offerings and the
Brain, who own moving the deal; gone-quiet leans **Nurture**; warm-path and new-stakeholder lean
**Plant**. People supplies reads into all three categories.

### The threshold — where a count becomes an opinion

The hardest part, and the place trust is won or lost. There is **no fixed "21 days = quiet"
line** — and chasing one is a dead end. The yardstick is the relationship's *own normal*:

- People doesn't ask *"is 26 days a lot?"* It asks *"is 26 days a lot **for this person**?"* If
  they usually reply within a day, 26 days screams; if they email twice a year, it's nothing.
- So the count that matters isn't the raw gap — it's the **gap measured against the established
  rhythm**, and computing that rhythm is *still deterministic* ("median reply ≈ 1 day; current
  gap = 26× that"). Most of what looks like judgement is really **deferred counting**.
- The thin residue that's genuinely arguable gets one more deterministic guard — an
  **innocent-explanation scan**: before crying "cooling," look for an out-of-office, an "I'll be
  away till next month," a future meeting already booked. *"Gap is big"* → quiet is wrong;
  *"gap is big **and nothing on record explains it**"* → quiet is right.
- Near the line the read isn't a confident binary. A signal carries **confidence** alongside its
  evidence, so a borderline "maybe cooling" reads differently from a blatant "gone dark."

### Goal-tuning — how the Brain points the sensing

People doesn't decide what to watch; the Brain **commissions** it. The strategy hands People a
standing brief that sets three dials:
- **Scope** — *who* to watch (the 30 council targets, not the whole address book).
- **Which signals** — a Nurture tilt wants *decay* reads; Plant wants *opening* reads (a new
  name, a warm path); Grow wants *deal-movement* reads (an objection, a stall).
- **Sensitivity** — hair-trigger for a priority target mid-deal; only-if-dramatic for the long
  tail.

Intent stays in the Brain; the reading stays in People. This is the concrete form of
tracing-back's line, *"what's worth counting is set by the goal."*

### Worked: a cooling champion, traced to the floor

A pure-Nurture case — one champion going quiet, no open deal — showing a single signal carrying
its evidence all the way down.

| Floor | What People has |
|---|---|
| **Facts** (1) | the dated emails with Tom; the recurring monthly check-in on the calendar; his replies |
| **Counts** (2) | *normal:* ~1-day median reply, starts ~4 of every 6 threads · *now:* silent 26 days (≈26× his norm), your last note 19 days unanswered, **monthly check-in moved once then dropped** · *innocent-explanation scan:* no out-of-office, no "away" note, no future meeting → **empty** |
| **Opinion** (3) | **"Tom is cooling"** — a champion whose rhythm broke with nothing to explain it · *confidence: high* (big departure + dropped meeting + nothing exonerating) |

What surfaces is not a bare label but *"Tom's cooling: he normally replies within a day, but he's
gone 26 days and skipped your monthly check-in, and there's nothing on record to explain it."*
Every clause walks back to a date in the inbox.

## Output

What People hands up — all as suggestions; nothing acts on its own:

- **Signals** (the headline) — named reads with their evidence and confidence, pushed when they
  clear the brief's bar.
- **The assembled picture** — on request, the full history on a contact or thread.
- **The stakeholder map** — deciders, influencers, champions, blockers, *and the gaps* (a hole is
  surfaced as honestly as a known name).
- **Direct answers** — to a specific question from the Brain or another module ("what's our
  history with Council 14?", "what worry is on record here?").

## Memory

People holds the **relationships**: the assembled history per contact, plus the dispositions it
has *read* (kept with their evidence, so a read can be re-checked or revised — never frozen as a
tag). It's built on the **same three floors** as the sensing — the facts it has fetched, the
counts it keeps, the reads it has formed.

It's a **personal** tier: one set of relationships per individual, private to that user — not
shared across an org (that's `04`). People reaches another module's memory only by **asking** (a
supplier pull), never by reaching in.

## Open questions

- **The threshold knob.** The *own-rhythm* model above sets the approach, but the live numbers
  are unsettled: how many multiples of the normal gap counts as "quiet," how strong a reply
  clears "warming," how confident a disposition read must be before it's acted on. A use-case
  pass will tune these.
- **The shape of the Brain's standing brief.** Goal-tuning sets *what* the brief does (scope ·
  signal types · sensitivity); the exact form the Brain hands over is still open (`00-spine`).
- **Catalog completeness.** The catalog above covers the connected plumbing (Gmail, Calendar,
  Slack, web). Whole families stay parked behind data gaps — warm paths thin without LinkedIn —
  and behind frontiers (forecasting, triage). Worth a deliberate sweep as channels connect.
