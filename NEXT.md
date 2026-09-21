# The prompt for the next session

Hand this file to the next agent as its prompt. It is written to be read cold, and it is kept true
at every commit: anything not reached is picked up by a later session given the same file.

---

This is the sales-amplifier-thinking design workspace. Read `CLAUDE.md` first; it is accurate.

## Where the work stands

Twenty-eight passes on `library/docs/coverage.md` are done. The library
holds 14 channels, 5 told sources, 25 assemblies, 134 counts (**all written**, 21 September), 42 signals,
7 docs (all general). It builds clean with `SCENARIO` set to any of the three scenarios.
**The playbook still ships `bops`.**

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

**Everything that was on a list is done.** Twenty-eight passes, the last eight of them in one
session: the three findings the broker's cards left, the third question set's backlog, the
`assumes:` join, the order of a day, a third scenario, and the counting floor that had been
deliberately empty since 18 September. The three question sets are as answered as they get without
new thinking, and every rung of the ladder is written.

So there is no next step to take off a list. What is below is what writing all that turned up, and
none of it is a defect: it is the shape of the next argument. Read it, then **ask the user which
one**, because each is a judgement about how the tool should behave rather than a hole in the
library. The order is mine. *(My order, not yet yours.)*

1. **A dated card is band 4 whatever the distance**, and the first two items below sit under it.
   This is the one I would raise first, because it is the last thing in the library that answers a
   question other than the one it was asked.
2. **Two findings from the third scenario**, both small and both real: a shared list cannot record
   who has worked which name, and the two-week paragraph a manager actually wants is the brief,
   asked for now by three of the three sellers interviewed.
3. **The cards' own joins are still provisional.** Every card's `signal:` and `supporting:` were
   read off the card rather than decided. It is now the only `provisional` left in the library, and
   it is the last rung of the ladder to be settled the way the counts were in the twenty-eighth
   pass. It is a large, dull pass and it is the honest next one.

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
- **The brief, asked for by all three sellers.** What happened on this deal in the last two weeks,
  in a paragraph, for somebody who is not selling. F14, deferred in `docs/library-format.md` as a
  floor above the cards, and the Cority world makes it concrete: a manager who sees a stage and a
  one-line next step for fifty reps, and messages on a Friday asking where a deal is.
- **The cards' joins are the last provisional thing in the library.** Every card's `signal:` and
  `supporting:` carry `_status: provisional`, because they were read off the card. Settling them is
  the same shape of pass as the twenty-eighth: go read, decide, and let the build refuse what does
  not hold.
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
