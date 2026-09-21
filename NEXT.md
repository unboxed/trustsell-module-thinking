# The prompt for the next session

Hand this file to the next agent as its prompt. It is written to be read cold, and it is kept true
at every commit: anything not reached is picked up by a later session given the same file.

---

This is the sales-amplifier-thinking design workspace. Read `CLAUDE.md` first; it is accurate.

## Where the work stands

As of commit `00399ff` on `main`, twenty-two passes on `library/docs/coverage.md` are done. The library
holds 13 channels, 5 told sources, 24 assemblies, 131 counts (all `defined: false`), 40 signals,
7 docs (all general) and two scenarios: `bops`, a patient sale to councils, with 26 cards, and
`pmf`, a merchant cash advance broker, with 11. It builds clean with `SCENARIO` set to either.
**The playbook still ships `bops`.**

All three question sets have been run against the library. Of the patient seller's 26, twenty-two
are answered by a read. Of the volume seller's 22, seventeen are answered by a read, one by asking,
one in part, three are out of scope and none by nothing. Of the firm seller's 21, nine are answered
by a read, one by asking, six in part, two elsewhere and three by nothing.

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
   Finished in the nineteenth pass, once step 2 existed: the read takes `decisions-so-far` too, so
   it quotes the terms actually answered on the deal and falls back to the shelf price only where
   none has been. `act-paula-disclosure` states Kestrel's own four numbers in its draft.

2. ~~**A read for a funder's answer landing.**~~ Done in the seventeenth pass.
   `assemblies/decisions-so-far.md` gathers a live deal's answers, `signals/answer-came-back.md`
   reads the gap between one landing and the buyer hearing it, four counts sit under it, and
   `people-told#answer-received` is its told twin. `act-tony-offers` now says what came back.
   It carries `answers: []`, the only signal that does, and `coverage.md` says why.

3. ~~**Two smaller ones from the same pass.**~~ Done in the eighteenth pass. A completed sale is
   News, and News rests on a record rather than a read: `rests:` holds the records that say it
   happened, `build.js` allows the swap for `kind: news` only, and `news-fenwick-funded` is the
   first card of that kind in either scenario. The unconnected-channel check was narrowed to what
   a card promises to send; the blanket version was measured and rejected, because it would have
   put a row on 22 of the 25 patient cards. `coverage.md` carries the measurement.

4. ~~**Claim the eight partial `F` ids.**~~ Done in the twentieth pass. All seven reads carry the
   id and a body line saying which half they reach. Two sharpened while being written and are now
   in `coverage.md`'s list: F7 needs a read of the promises **they** made to you, which nothing in
   the library does, and F10 needs a read that watches a buyer's own date come closer, standing on
   `dated-facts-in-their-words`, which already exists pointed the other way.

5. ~~**Read the buyer's own published words.**~~ Done in the twenty-first pass.
   `assemblies/published-picture.md` gathers one organisation's own published words,
   `signals/stated-priorities.md` reads them over three counts, and `lead-with-this` takes the same
   gather for the buyer's half of F16. Both questions are answered. It also gave
   `relevance-to-stated-factors` an `over` that means something: it had been counting "what they
   said matters to them" over your own catalogue.

6. ~~**The shape of their process.**~~ Done in the twenty-second pass. `people-told#buying-process`
   is the told record, `assemblies/buying-process.md` lays it against a deal, and
   `signals/steps-on-their-side.md` reads it over four counts. F8 and F6 both close. The form is
   the decision: it says "I have seen no sign of these three", never "they have not done them".
   `ask-buying-process` is the card, an Ask, because a told record nobody has filled cannot make
   an Act.

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
- **Define the counts.** All 131 are `defined: false`, with the arithmetic said in prose. Some
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
