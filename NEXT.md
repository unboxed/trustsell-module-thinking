# The prompt for the next session

Hand this file to the next agent as its prompt. It is written to be read cold, and it is kept true
at every commit: anything not reached is picked up by a later session given the same file.

---

This is the sales-amplifier-thinking design workspace. Read `CLAUDE.md` first; it is accurate.

## Where the work stands

Twenty-nine passes on `library/docs/coverage.md` are done. The library
holds 14 channels written (8 on offer today, and only those are reasoned on in the build), 5 told sources, 25 assemblies, 135 counts (**all written**, 21 September; the 135th on 22 September), 42 signals,
8 docs (all general; the eighth, `purpose-read.md`, is a cold account of the purpose written on 22
September before reading the others, with where it agrees and disagrees underneath). It builds clean with `SCENARIO` set to any of the three scenarios.
**The playbook still ships `bops`.** Since 22 September it holds two decks: `deck.html`, which
shows the tool, and `how-it-builds.html`, which tells how the library was arrived at, walking one
of the seller's questions down to the records and connections it takes to answer it. Both are drawn
from `data.js` by `deck.js`, so a change to a rung changes the slides.

**What the tool needs to be told, 22 September** (`library/docs/what-to-capture.md`): for each
of the five things context can be captured for, which told records the reads' arithmetic uses,
which are only gathered, and which nothing reads, beside what the current tool captures. Read it
before changing any told source or any capture screen.

**Job 2 is done, 22 September**: `library/docs/message-shape.md`, four *The message* rows on each
decided card with a draft, checked by the build (see the thirty-third pass in `coverage.md`).

**Two areas, since 21 September.** `library/` is the blocks and `scenarios/` sits beside it, no
longer inside it: `bops`, a patient sale to councils, with 26 cards; `pmf`, a merchant cash advance
broker, with 12; and `cority`, an enterprise seller with a firm around her, with 7. The user's
words for it: the library is a set of lego blocks, the scenarios always assemble out of it, and
whatever a card says has to trace back through the blocks to a record. **The library names no
example**, and `build.js` now enforces that rather than trusting it: it reads the cast and the
organisations of every scenario and refuses the whole library when one of those names, a scenario
id or a path into `scenarios/` appears in a rung, a widget, a module or a template. Cards and
worlds are exempt, because naming people is their job, and so is `library/docs/`, where the record
of how a block was tested against a world belongs.

All three question sets have been run against the library. Of the patient seller's 26, twenty-two
are answered by a read. Of the volume seller's 22, seventeen are answered by a read, one by asking,
one in part, three are out of scope and none by nothing. Of the firm seller's 21, fourteen are answered
by a read, one by asking, three in part, two elsewhere and one by nothing. The three in part are
F2, F3 and F13, and each names in its read's body the fact nobody holds. The one left is F19,
which the map says is the Brain's.

**The important recent turn.** Passes eight to thirteen added or audited entries against **question
sets**, and no world ever exercised them. The fourteenth pass wrote ten cards for the broker, the
first test of the library from **above**, and it found more in one pass than the three question
sets found between them. Passes fifteen to twenty-three closed every one of its findings but the
last, and closed the third question set's backlog with them. Read `coverage.md` from "Done in the
fourteenth pass" to the end before anything else; the rest of this file assumes it.

The lesson worth carrying: **a hole under a read that already exists is worth more than a read that
does not exist yet.** Card-writing finds the first kind and question sets do not. The
twenty-third pass is the sharpest example: written as planned, its new gather would have had one
reader whose trigger could never fire for the leads it was written for, and writing the card is
what caught it, before the commit rather than two days after.

## The user's standing instruction

They are not a sales expert and do not know how the AI would work. They want the thinking
structured accurately and expect you to make the sales and how-it-reads calls yourself, writing the
reason into the entry marked "(My reason, not yet yours.)". Do not stop to ask about those. Ask
only about scope, voice, the phone, or anything hard to reverse. They cannot easily take in long
text, so when you report, lead with the verdict and keep it short.

## Your task

**If you are reading this cold: start at Job 1, with Felton.** Read `CLAUDE.md`, then one pass
file (`scenarios/bops/docs/westmoor-pass.md` is the fullest), then the six steps under Job 1, and
begin. Jobs 0 and 2 are done; Job 3 comes after `bops` has more people worked, or when the user
says so.

Three jobs, in this order. All of them are worked from both ends: up from the records through the
counting to what can be read off it, and down from the questions the seller actually asks, which
are the outcomes the whole thing exists to produce. The card is where the two meet. The first job
settles the last unfinished rung, on the world the library came from. The second opens the frontier
nobody has touched. The third runs the same test on the two worlds the library was **not** derived
from, which is the only place its generality is actually tested. The user's framing of the whole thing, in their words, is what to measure
against: **how raw data can lead to AI providing suggestions based on evidence and, most
importantly, reasoning.**

**The twenty-ninth pass, 22 September, did Job 0 and Job 1 on one person.** Karen Hughes is worked
end to end: `scenarios/bops/world/records.md` holds what her channels would carry (the first
records any world has held), `scenarios/bops/docs/karen-hughes-pass.md` is the record of the six
steps, her three cards are `decided`, three wrong joins came off them, `cooling-champion` reads
`who-starts-threads` now, and three figures on her main card that the world could not produce
were rewritten to what the counts give. **The user agreed the method on 22 September**, and the
thirty-first pass ran it on Westmoor the same day: Gary Pearson and Rachel Gill, who share a
thread, four cards decided, one count that did not exist (`their-question-unanswered`, a question
the buyer asked you) found because two cards in two worlds had quoted its mirror. The record is
`scenarios/bops/docs/westmoor-pass.md`. **The thirty-second pass did Neil Chapman at Holbrook**
(`holbrook-pass.md`): his reconnect card was a debt card and could not rest on the read it named,
and his window card belongs under the deadline he gave, not under buying intent. **The
thirty-fourth did Lisa Holmes at Burnham** (`burnham-pass.md`): the reconnect read failed on her
the opposite way, and both her cards rest on what Burnham published; the match to a customer is
made by hand because the tool holds no use-case by buyer type. **The tool's own product model was
read the same day** (`scenarios/bops/world/offering.md`): eight fields of prose per offering,
interviewed out of the seller; no use-cases by buyer type, no answers to worries, no evidence tied
to a claim. Two contradictions in the fiction are flagged there: the tool's demo BOPS is a
planning system, and its price list has no partial rollout, which three cards offer. Felton's
pass meets the second first. Eleven cards are decided; twenty-one people in
`bops` have no records section yet. **The figure rule is built**: `build.js` refuses a card that states
a figure its people's records do not carry, for the people who have records, and each written
section of `records.md` ends with a "What the counts give" table.

**The thirtieth pass, the same day, added what the tool can connect at all.** The user's list
(the Google accounts, Slack, the web, a CRM, and everything told) is `can:` on
`library/modules/01-integrations.md`. The built library reasons only over what is on offer: the
records of the six held-back channels (LinkedIn, SMS, the web form, public records, the buyer's
handover, a handed list) leave every gather, count and read, three reads are silent, and the build
refuses a card resting on a silent read or a Connect card for a held-back channel.
`connect-linkedin` is gone and no council card mentions LinkedIn. The broker's world pretends four
held-back channels in `explores:` and Cority's three, for those worlds only, and the build names it.

The three things that were on a list when this file was last rewritten are done or moved: the
counting floor, the third scenario and the `assumes:` join. Two judgement calls are still open and
are in "Still open" below, where the user picks them up when they want to: a dated card sitting in
band 4 whatever the distance, and the two findings from the third scenario. **Three decisions the
user made on 22 September**: the Karen method is agreed, so the other people follow without asking;
the figure rule is built, scoped to people with records; and Job 2 is the parts of a message only,
not talking points for a call (Q25 stays a named hole).

### ~~Job 0: form your own account of the purpose, before reading the accumulated thinking~~

Done on 22 September: `library/docs/purpose-read.md`. Its disagreements are listed at the end of
the twenty-ninth pass in `coverage.md` and are the user's to settle; nothing was changed on their
strength.

Do this first, and before opening `library/docs/coverage.md`, `playbook/story.md` or
`library/docs/tracing-back.md`. The risk in this repo is not that the thinking is thin; it is that
it is thick, and a fresh reader inherits its conclusions instead of testing them.

Write, in your own words, what a system has to be able to do to take raw records and arrive at a
suggestion a person can act on: what it has to hold, what steps it has to take between a record and
a suggestion, what it must be able to show when the person asks "why are you telling me this", and
which of those steps are arithmetic rather than judgement. Say what you think the hard parts are.
Put it in `library/docs/purpose-read.md`, with a first line saying it was written cold and on what
date.

**Then** read `story.md`, `coverage.md` and `tracing-back.md`, and write underneath where your
account and theirs agree and where they do not. Both directions are findings: something you say is
needed that the library has no rung for, and something the library has that your account cannot
justify. Do not quietly adopt theirs. Bring the disagreements to the user before acting on them.

### Job 1: work it from both ends, and let the card be where they meet

**Five people done, 22 September**: Karen Hughes, in `scenarios/bops/docs/karen-hughes-pass.md`,
Gary Pearson and Rachel Gill together, in `westmoor-pass.md`, Neil Chapman, in
`holbrook-pass.md`, and Lisa Holmes, in `burnham-pass.md`. The six steps below were followed as
written and held up on all four runs.
Two things to carry into the next person: the counts say a lot about themselves when run by hand
(the findings are at the end of each pass file), and the figure rule at the end of this job is
built, so a card's figures fail the build the moment its person has a records section, and every
decided card with a draft carries its message rows (Job 2). Next: Felton, three people and two
cards (`act-felton-price` on `blocker` and `price-barrier`, `act-felton-director` on
`missing-people`), the first test of the Offerings reads and of a price objection from the
records up; then North Ridley (`understanding-gap`, `lead-with-this`, a demo on Thursday).

The cards' joins upward are the last `provisional` thing in the library: 44 of the 45 cards name
their read, and thirty-four were read off the card rather than decided. Thirty-nine of the 42
signals carry `assumes_status: provisional` too.

**It goes both ways, and that is the point** (the user, 22 September). This is the workspace's
original thesis, in `library/docs/sales-questions.md`: the seller's questions are the **demand
side**, what the tool must be able to answer, and the reads are the **supply side**, what it can
produce. Where supply meets demand the model holds; where it does not is the real work. A card is
the meeting point, and a card is right when both ends reach it.

So climb from the records and walk down from the questions, and compare in the middle. What you may
**not** do is start at the card, because the card is the thing under test. There is a structural
reason as well: a world holds one line per person. `scenarios/bops/world/cast.md` says of the
seller's main contact only that she used to reply within a day and has slowed. The figures the
reads stand on, the twenty-eight days, the fifteen messages, the nine of twelve threads, exist
**only inside the card bodies**, written alongside the card to justify it. Until the world carries
them, the bottom end has nothing to climb from and the card can only be checked against itself.

Work in this order, on one person at a time.

1. **Give the world its records.** For the person in hand, write what the connected channels would
   actually hold: each thread with its date and who opened it, reply lengths, meetings held,
   declined or dropped, documents asked for and sent, out-of-office and status events, and anything
   the seller told the tool. It goes in the scenario's `world/`, not in a card and not in the
   library. A scenario is fiction and may be invented; the general rungs may not. Prefer the facts
   the existing cards already imply, so the world absorbs what the cards were carrying rather than
   contradicting them, and note every place where two cards implied facts that cannot both be true.
2. **Run the counts.** Every count says what it counts, which records it needs and when it breaks.
   Compute each one the records now support, write the number down, and where `breaks` applies say
   so instead of reporting a figure. A count with nothing under it is a finding about the world,
   not about the count.
3. **See which reads fire.** Take each signal's `## How it is worked out` trigger and test it
   against the numbers. Three outcomes, all worth recording: it fires, it does not fire, or it
   cannot apply at all because the sale lacks what `assumes:` needs or a channel in `needs:` is not
   connected. Confidence grades with how many counts lean the same way, per
   `library/docs/reading-principles.md`.
4. **Now come down from the other end.** For this person, which of the seller's questions are live
   right now? Use the three sets by id (`Q`, `V`, `F`) and each signal's `answers:`. Write down
   what would count as answering each one for this person, in the seller's terms, before looking at
   any card.
5. **Meet in the middle, and open the card last.** Four outcomes, all worth recording:
   - **Both ends reach it.** A read fires and it answers a question the seller is actually asking.
     That is a card, and the card should exist.
   - **Demand with no supply.** A live question that nothing fires for. Say which of the three kinds
     of gap it is, in `library/docs/tracing-back.md`'s words: a data gap (a source is not
     connected), a told gap (the seller has not said something), or an assumption gap (this sale is
     not the shape the read needs). A fourth possibility is that the read simply does not exist yet,
     and that is the most valuable thing this pass can find.
   - **Supply with no demand.** A read fires and no question wants it. Sometimes right, because
     story ch. 7 says if the seller has to ask "who's going cold?" the tool should already have
     told them. But it has to be argued, not assumed.
   - **Both ends reach it through the wrong join.** The Karen case: `act-karen-slowing` lists
     `one-sided` ("You are doing all the work") although the same card says *she* opened 9 of the
     12 threads, the opposite lean from the one that read needs. The card is right and the
     reasoning under it is not, which is the hardest kind to see and the whole reason for this pass.
6. **Then decide the join**, from what fired and what it answers, rather than from the card's
   prose, and flip `signal_status` and `supporting_status` to `decided` on the ones you have
   argued. Leave the rest marked and say why in `coverage.md`.

Two things this will keep turning up, and both are worth more than the status flips.

- **A count doing two jobs with only one of them wired.** `who-starts-threads` explicitly counts
  who has always opened the threads **and** whether they used to write first and have stopped. Only
  the first half is read by anything. The second half is a cooling-champion fact and
  `cooling-champion` does not count it, so a card that wants to say it has to borrow a read that
  does not hold.
- **A number in a card the world cannot produce.** Every one of those is a claim the tool could not
  actually make. ~~Propose the rule as you go.~~ The rule is built (22 September, the user's
  word): `build.js` refuses a card whose figures its people's records do not carry, for the people
  who have a records section. So the moment you write a person's section, their cards are checked;
  put the figures the counts compute in that section's "What the counts give" table, and fix the
  card rather than the table when they disagree.

~~Start with one person in `bops`, end to end, and bring that to the user before doing the other
twenty-five.~~ The method was agreed on 22 September and five people are done. Take the next
organisation without asking (Felton, then North Ridley), one pass and one commit each, and keep
the pass files in the same shape as the four that exist.

### ~~Job 2: the shape of the message, which nothing in the library reaches~~

Done on 22 September, thirty-third pass, to the scope the user set (the parts of a message, not
talking points): `library/docs/message-shape.md` is the argument, every decided card with a draft
carries four *The message* rows checked by `build.js`, and the phone does not show them. Twenty-six
drafts on provisional cards have no rows and get them as their people are worked. Job 3 tests the
rows at the fast end. The section below is kept as it was written.

The part the user says has never been tackled, and the natural next thing after reasoning: once the
tool has reasoned its way to a suggestion, and the suggestion is to get in touch with someone,
**how is the message structured so that it actually meets the suggestion?**

What exists, so you do not rebuild it: four reply modules told apart by shape (`buttons`,
`choices`, `several choices`, `a field`) and a draft sheet, all in `library/widgets/`; a card's
`draft:` block; the guardrail in story ch. 8 that every message the tool drafts names what the
other person gets; and the rule that an Ask asks for facts, never for verdicts.

What does not exist: anything that derives the **structure** of a message from the read that caused
it. `coverage.md` records Q20, "what should my next message say", as answered because "the draft
does it", which is hand-waving: it says a draft appears, not what has to be in it. Q25, "what
questions should I ask them", is named there as the fifth frontier and is the same family.

The questions, in this repo's usual discipline:

- Given a read, what must the message contain, in what order, and what must it not do? A note that
  follows `cooling-champion` is not shaped like one that follows `price-barrier` or `they-owe-you`.
- Where does the shape come from: the read, the kind of card, what is owed, the person's profile,
  or the goal's tempo? Probably more than one. Say which decides what.
- Which part of it is arithmetic and which is judgement, the same split the ladder already makes.
- Where does it live: a new rung above signals, a family of widgets, a facet on the signal, or
  something in the Brain (`library/modules/00-spine.md`)? Argue it before writing it.

**Do not start by writing drafts.** A good-sounding message proves nothing. Whatever decides a
message's shape has to rest on something on record or something the seller told the tool, and trace
down the same way every other claim here does. If it cannot, the honest output is a written account
of why, not an invented rung.

Do this after Job 1 has been through at least one person, and build it the same way, from the
records up. What is on record decides what the message can point at. What is owed decides what it
has to open with. What the seller told the tool decides how it sounds. A message whose shape cannot
be traced to those is a message the tool made up.

### Job 3: the same, on the two worlds the library did not come from

Do this after Jobs 1 and 2, and treat it as the real test rather than a repeat. The library's
signals and counts were derived from one seller's twenty-six questions, the patient end, so `bops`
is home ground: the library answers it well and is silent about whatever that seller never had to
ask. `library/docs/sales-questions.md` says so in its own second paragraph. The other two worlds
are where that silence shows.

`pmf` is a merchant cash advance broker, the fast end, 12 cards, measured against the volume
seller's 22 questions (`V`). `cority` is an enterprise seller with a firm around her, 7 cards,
against the firm seller's 21 (`F`). Against `bops`'s 26 cards that thinness is itself a finding:
run the six steps of Job 1 per person in each world and most verdicts will land on **demand with no
supply** and on reads that fire with no card carrying them.

Switch `SCENARIO` at the top of `build.js`, run it, and set it back to `bops` before committing.

What is different in each, so you do not mistake a design for a defect:

- **`pmf`.** V1 to V3 are out of scope, before a lead. The tempo is hours while every `when` in the
  library is a day, already flagged in `scenarios/pmf/world/goal.md` and in story ch. 7. Its ladder
  runs past the sale. Expect `assumes:` to rule reads out wholesale: on a three-day deal there is no
  `own-rhythm` and often no `thread-under-way`, and an assumption gap is a **refusal**, not a gap
  row, so the build will simply not let a card rest on such a read. A read that carries a V question
  in theory but can never apply in this world is the sharpest finding available here.
- **`cority`.** A business development rep does the outreach, so `firm-contact` is full and the
  colleague reads fire there and nowhere else. The buyer's side runs a formal process. Eleven of
  the fourteen channels are connected, so there are no data-gap rows at all, which means anything
  missing there is missing for a reason other than a connection. F19, "should my firm bid at all",
  is already declared the Brain's.

The question to hold throughout: when a read that fires in `bops` cannot apply here, **does the
question it answered there have any other answer in this world?** If not, the library is silent
exactly where nobody asked it anything, and that is the thing worth writing down.

Then produce the suggestions. For each world, say which cards should exist and do not, and write
two or three of them. Writing the card is how this repo finds out whether a read can reach what it
claims, and the build refuses it when it cannot. Job 2's message shapes get their real test here
too: whatever decides the shape of a patient note to a council officer should not produce the same
shape for a broker's text at hour three, and if it does, the shape is not being decided by anything
real.

Record it as a pass per world in `coverage.md`, in the existing style.

### How to work

Take the user's standing instruction above seriously: make the sales and how-it-reads calls
yourself, and write the reason into the entry marked "(My reason, not yet yours.)". Ask about
scope, voice, the phone, and anything hard to reverse. Report short, verdict first.

Follow the habit at the end of this file: when you have changed two or three entries, stop and
write or rewrite a card against them in a world. That is how this repo finds out whether a read can
reach what it claims.

## Still open, and bigger than a step

- ~~**The firm reads have never been exercised.**~~ Done in the twenty-seventh pass.
  `scenarios/cority/` has a world and seven cards. `firm-contact` is full there, so
  `colleague-already-in-touch` and the firm half of `enough-tries` both produce cards that could
  not have existed in either other world. It is also the first scenario with no data-gap rows at
  all, because eleven of the fourteen channels are connected.
- **A dated card is band 4 whatever the distance** (found in the twenty-seventh pass). A window closing in eight
  working days and a date six months off land in the same band, because `ownBand` asks only whether
  a date exists and whether it is tomorrow. The twenty-sixth pass said the bands were sound, and
  that was true of the complaint it answered; this is a different one and it is about the bands.
  There is no principle that says which card should win, so it is named rather than decided.
- **A shared list cannot record who has worked which name** (found in the twenty-seventh pass). `lead-list` holds the list and
  the entries; when marketing sends the same spreadsheet to six people, nothing says who wrote to
  whom.
- ~~**The day's order is a patient seller's.**~~ Done in the twenty-sixth pass, and it was not the
  bands: all three cards were in band 2. The fault was the first tie-break inside a band, the
  ladder, which asks what a deal is **worth** where the band asks what waiting a day **costs**.
  What somebody is waiting on you for now comes first. The broker's offer moved third to first and
  the patient day came out identical, card for card.
- ~~**Turn `assumes:` into a checked join.**~~ Done in the twenty-fifth pass. `world/goal.md`
  carries `has:` and the build refuses a card resting on a read the sale cannot make. A refusal
  rather than a gap row: a missing source leaves a read standing with less to go on, a missing
  condition leaves it not applying at all. It refuses nothing today, which was measured before it
  was built; it is the guard the third scenario will need.
- ~~**Define the counts.**~~ Done in the twenty-eighth pass. All 134 carry `counts`, `needs` and
  `breaks`, every `over` is resolved and every `over_status` is `decided`. The build made six move
  to a different gather. The merge pass was considered and not done: the three closest pairs are
  genuinely two things each and each now says so in its body.
- **One card, two sellers** (the user, 22 September). The tool adjusts to who you are: more
  explanation for a seller by circumstance, more directness and more of the clock for a seller by
  trade, and a different day: one sells on the afternoons he can spare and the other every day,
  so for the first the tool holds what can wait until he next sits down and brings only what
  would be gone by then. The Profile module holds the settings (coaching, fluency, cadence) and
  the story now says why; nothing shows it, and the day's order in `build.js` knows one cadence.
  The test is one decided card written two ways, the front and the tool's own lines, and one week
  cut two ways; it touches the phone and the voice, so it is the user's to ask for. Not started.
- **The brief, asked for by all three sellers.** What happened on this deal in the last two weeks,
  in a paragraph, for somebody who is not selling. F14, deferred in `docs/library-format.md` as a
  floor above the cards, and the Cority world makes it concrete: a manager who sees a stage and a
  one-line next step for fifty reps, and messages on a Friday asking where a deal is.
- **A world holds records for five people** (found 22 September; five done the same day).
  `scenarios/bops/world/records.md` holds Karen Hughes, Gary Pearson, Rachel Gill, Neil Chapman
  and Lisa Holmes. Every other
  person in every world still has a line of prose, and the figures their cards quote live only in
  the cards. Until a person has a records section, their cards can only be checked against
  themselves, and the figure rule skips them.
- ~~**A card may not state a figure the world does not carry** (proposed 22 September, not built).~~
  Built the same day, on the user's word, for people with a records section. Seven cards checked,
  eighteen skipped, a planted figure fails.
- **The cards' joins are provisional on thirty-four of forty-five cards.** Eleven were decided on
  22 September from the records up, and the wrong joins they hid were the kind predicted: a
  supporting read that does not fire, kept so the card could quote one of its counts, and once a
  card resting on the mirror of the count it needed, and once a read that failed both halves of
  its own trigger while the card was right about the move, and twice a read joined for a reason to
  write when the reason was what the buyer published. Job 1 of the task above, for the other
  twenty-one people in `bops` first.
- ~~**The shape of a message is reached by nothing** (found 22 September).~~ Done the same day,
  thirty-third pass: four traced rows on every decided card with a draft, an argued account in
  `library/docs/message-shape.md`, and a build check. What is not done: the rows are a check on a
  draft written by hand, not the input a draft is written from; the table of what each writing read
  contributes is mine and untested beyond seven cards; and the fast end has not been met.
- **The broker's world pretends connections the tool does not offer** (22 September). SMS, the
  web form, the buyer's handover and a handed list are in its `explores:`, and outside that
  pretence three of its reads are silent. Job 3 should say which of its twelve cards the tool as it stands could actually
  make.
- **The broker's tempo is hours and every `when` is a day.** Flagged in
  `scenarios/pmf/world/goal.md` and in story ch. 7, which says "one move per person at a time" and
  "you can take in the whole day". A card and phone question, not a library one.

## Five things that are easy to get wrong here

- The vocabulary for `assumes:` is four words (`thread-under-way`, `own-rhythm`, `several-people`,
  `own-firm`). `assumes: []` is a claim, not an omission. Every new signal declares it, and a
  world's `has:` in `world/goal.md` says which of the four its sale carries; a card resting on a
  read the sale cannot make is refused. Most new signals also answer a real question by id in
  `answers:`, from any of the three sets, but `answers: []` is allowed and `answer-came-back`
  carries it: no set asks whether something came back that nobody passed on, because at every desk
  a person is already doing it.
- **The library names no example, and the build says so.** Write the condition, never the case:
  "at a tempo measured in hours" belongs in a block, "the broker's world" does not. A leak is
  usually a first name in a sentence that was easier to write with one. The check lives beside the
  other joins in `build.js` and, like them, writes nothing when it fires.
- **Never invent a fact about the tool.** A new count stays `defined: false` with the arithmetic in
  prose; thresholds lean on `reading-principles.md`, no made-up numbers. A scenario's world is
  fiction and may be invented; the general rungs may not.
- Every new read changes its row in `coverage.md` and adds a "Done in the … pass" paragraph;
  `story.md` changes only when a decision changes it, marked "(My reason, not yet yours.)".
  `playbook/world.md` carries the card model and the design log.
- Run `node build.js` after every change. It writes nothing when it fails and checks every join: a
  count's `used_by` must match the signals that list it, a count's `over` must be an assembly every
  signal quoting it reads, a signal's `needs` must be channel or told ids, an assembly's inputs
  must be record addresses or assemblies, and a card's `about`, `to`, `documents` and Sources rows
  must all resolve. `playbook/assets/data.js` is generated: never hand-edit it, always commit it
  with the pass that changed it. **Check every change against all three scenarios**: switch
  `SCENARIO` at the top of `build.js` to `pmf` and then `cority`, run it each time, then set it
  back to `bops` before committing. To look
  at the broker's cards in the playbook, flip it, build, open `playbook/index.html`, flip it back.
- Commit messages end with a `Co-Authored-By:` line naming the model that wrote them, which the
  harness gives you; do not copy an earlier session's. Push each
  pass. If the working tree holds changes to `playbook/assets/phone.js`, `style.css` or `world.md`
  that are not yours, commit them separately with a message read off `world.md`. A commit or push
  may be refused by the permission classifier when its content was read from the user's transcripts
  outside the repo; do not work round it, stage the files, write the commit message to the
  scratchpad, and hand the user the three commands.

## One habit worth keeping

The fourteenth pass is the model. When you have added two or three entries, **stop and write cards
against them in a world**, rather than adding a fourth. Writing cards is how you find out whether a
read can actually reach what it claims, and the build refuses the card when it cannot. Adding rungs
nobody stands on is the failure mode this workspace keeps rediscovering.

Three passes since have paid for it. The twenty-first found a card that had been quoting page 12 of
a council's strategy with nothing under it. The twenty-second found that a told record nobody has
filled produces an **Ask**, not an Act, and the card sharpened the read more than writing the read
did. The twenty-third found, before committing, that a new gather had exactly one reader whose
trigger could never fire for the leads it was written for.

## Keep this file true

Update "Where the work stands" and strike the steps you finish, in the same commit as the work. A
session that stops mid-way leaves this file describing exactly what is left.
