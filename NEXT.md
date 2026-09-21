# The prompt for the next session

Hand this file to the next agent as its prompt. It is written to be read cold, and it is kept true
at every commit: anything not reached is picked up by a later session given the same file.

---

This is the sales-amplifier-thinking design workspace. Read `CLAUDE.md` first; it is accurate.

## Where the work stands

As of commit `341c3ca` on `main`, sixteen passes on `library/docs/coverage.md` are done. The library
holds 13 channels, 5 told sources, 21 assemblies, 120 counts (all `defined: false`), 37 signals,
7 docs (all general) and two scenarios: `bops`, a patient sale to councils, with 25 cards, and
`pmf`, a merchant cash advance broker, with 10. It builds clean with `SCENARIO` set to either.
**The playbook still ships `bops`.**

All three question sets have been run against the library. Of the patient seller's 26, twenty-two
are answered by a read. Of the volume seller's 22, seventeen are answered by a read, one by asking,
one in part, three are out of scope and none by nothing. Of the firm seller's 21, five are answered
by a read, one by asking, eight in part, two elsewhere and five by nothing.

**The important recent turn.** Passes eight to thirteen added or audited entries against **question
sets**, and no world ever exercised them. The fourteenth pass wrote ten cards for the broker, which
was the first test of the library from **above**, and it found more in one pass than the three
question sets found between them. The fifteenth fixed the largest of those findings. Read
`coverage.md`'s "Done in the fourteenth pass" and "Done in the fifteenth pass" before anything
else; the rest of this file assumes them.

The lesson worth carrying: **a hole under a read that already exists is worth more than a read that
does not exist yet.** Card-writing finds the first kind and question sets do not.

## The user's standing instruction

They are not a sales expert and do not know how the AI would work. They want the thinking
structured accurately and expect you to make the sales and how-it-reads calls yourself, writing the
reason into the entry marked "(My reason, not yet yours.)". Do not stop to ask about those. Ask
only about scope, voice, the phone, or anything hard to reverse. They cannot easily take in long
text, so when you report, lead with the verdict and keep it short.

## Your task

Commit and push to `main` after each numbered step, with a message in the style of `git log`.
Steps 1 to 3 are what the broker's cards exposed. Steps 4 to 7 are what the third question set's
audit left. Do them in order.

1. ~~**Let `disclosure-still-owed` reach the pricing.**~~ Done in the sixteenth pass. The read
   takes `price-position` and quotes `your-price` and `cost-to-them-over-the-term`, the two numbers
   `can-they-carry-it` already worked, and `offering-told` went into its `needs`.
   `act-paula-disclosure` states the shape of the cost now. What is left of the hole is step 2:
   the shelf price is not what a funder answered on this deal.

2. **A read for a funder's answer landing.** `crm#deal-decision` (written in the ninth pass) holds
   the offers and declines against a deal, and only `assemblies/deal-outcomes.md` reads it, for
   deals that have **ended**. So "an offer came back and nobody has told the rep", which the trade
   calls the moment to raise alarms, has no read at all.
   `scenarios/pmf/cards/act-tony-offers.md` can only say a promise was made and not kept, and says
   outright it cannot tell the seller what came back. This needs a gather over the decisions on the
   deal in hand, or `deal` widened, plus one signal. It answers no question in any of the three
   sets, which is itself worth a line in `coverage.md`: the sets are a seller's questions to
   herself, and this is one the trade never had to ask because a person always did it.

3. **Two smaller ones from the same pass.** Decide whether a completed sale is **News**: nothing
   turns a completion into a card, and News is the one kind with no card in either scenario.
   Completion is fetched or told and never deduced, which is right, so the question is only whether
   it earns a card. And **make the build notice a trail running into an unconnected channel**: a
   gap row is added for a signal's `needs` and not for a trail running into a channel the scenario
   has not plugged in, so `act-paula-disclosure` rests on a Drive evidence shelf that does not
   exist in its world and nothing complains.

4. **Claim the eight partial `F` ids**, each with a line in the read's body saying which half of
   the question it reaches: F2 and F7 on `missing-people`, F3 on `competitive-standing`, F10 on
   `time-to-reconnect`, F11 on `enough-tries`, F13 on `delivered-before`, F16 on `lead-with-this`,
   F17 on `warm-path`. The thirteenth pass left these unclaimed on purpose, because a read that
   answers half a question should say in its body which half, and that is a pass rather than an
   audit.

5. **Read the buyer's own published words.** A gather over `web#research-report` and
   `web#enrichment` keyed on the **buyer organisation** rather than on the offering, and a read
   over it (F1, and the missing half of F16). Every gather above the raw data today is keyed on
   something that passed between you and the buyer; what the buyer says to the world has no floor.
   It is the ground a first message stands on at the patient end, and `web` is already connected in
   both scenarios.

6. **The shape of their process**, a told record nobody has: what a buy at this kind of
   organisation takes, so a read can say which of those steps the record shows no sign of. It
   closes F8, which the third seller says no system does ("flag where the gaps are between where
   you need to be and what the customer hasn't done"), and F6 with it.

7. **Two lead-shaped holes.** Add the two try counts together (F11), so a cadence a colleague is
   running counts towards "enough tries" as your own messages do: `enough-tries` counts only yours
   and `colleague-already-in-touch` counts only theirs. And **where a lead came from** (F17, F20):
   provenance on a lead, and the event list a marketing team hands over, which is a lead source no
   channel has.

## Still open, and bigger than a step

- **The firm reads have never been exercised.** `firm-contact`, `colleague-already-in-touch` and
  the `own-firm` assumption exist for a seller with a firm around them, and no world has one that
  fills the gather. `scenarios/cority/` holds an interview note and no `world/`. Writing that world
  would do to the firm reads what the fourteenth pass did to the fast-end ones. The old bar ("a
  third earns its place once the two ends have shown what the spectrum is") rested on PMF's world
  not being written, which expired; the scope call is the user's and is left open in
  `scenarios/cority/docs/what-cority-told-us.md`.
- **The day's order is a patient seller's.** Asked to place the broker's ten cards, `build.js` put
  a faltering repayment first and an unseen funder's offer third. At an hours tempo, an offer
  nobody has passed on costs the most by waiting. The six bands are the Brain's
  (`modules/00-spine.md`) and this is not a bug in them, but what waiting a day costs is not the
  same question at both ends of the spectrum.
- **Turn `assumes:` into a checked join.** Now that a second world exists, `world/goal.md` could
  say what its sale has (a thread, a history, several people, a firm) and the build could refuse a
  card whose reads assume more than that.
- **Define the counts.** All 120 are `defined: false`, with the arithmetic said in prose. Some
  should merge or go. Deliberately deferred until the set settles.
- **The broker's tempo is hours and every `when` is a day.** Flagged in
  `scenarios/pmf/world/goal.md` and in story ch. 7, which says "one move per person at a time" and
  "you can take in the whole day". A card and phone question, not a library one.

## Five things that are easy to get wrong here

- The vocabulary for `assumes:` is four words (`thread-under-way`, `own-rhythm`, `several-people`,
  `own-firm`). `assumes: []` is a claim, not an omission. Every new signal declares it and answers
  a real question by id in `answers:`, from any of the three sets.
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
  with the pass that changed it. **Check every change against both scenarios**: switch `SCENARIO`
  at the top of `build.js` to `pmf`, run it, then set it back to `bops` before committing. To look
  at the broker's cards in the playbook, flip it, build, open `playbook/index.html`, flip it back.
- Commit messages end with `Co-Authored-By: Claude Fable 5.1 <noreply@anthropic.com>`. Push each
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

## Keep this file true

Update "Where the work stands" and strike the steps you finish, in the same commit as the work. A
session that stops mid-way leaves this file describing exactly what is left.
