# The prompt for the next session

Hand this file to the next agent as its prompt. It is written to be read cold, and it is kept true
at every commit: anything not reached is picked up by a later session given the same file.

---

This is the sales-amplifier-thinking design workspace. Read `CLAUDE.md` first; it is accurate.

## Where the work stands

As of the tenth pass on `main`, ten passes on `library/docs/coverage.md` are done. The library
holds 12 channels, 5 told sources, 21 assemblies, 118 counts (all `defined: false`), 37 signals,
9 docs and two scenarios (`bops`, with 25 cards; `pmf`, world only). It builds clean, with
`SCENARIO` set to either world.

**Every one of the volume seller's 22 questions now has an answer**: seventeen by a read, one by
asking, one in part (V10), three out of scope, none by nothing. A third question set exists,
`library/docs/firm-questions.md` (`F1` to `F21`, from the Cority interview), and **the coverage map
has not been run against it**.

The five most recent passes:

- **The seventh** wrote the second scenario's world, `library/scenarios/pmf/world/`, a broker
  placing merchant cash advances, with an empty `cards/`. Its ladder runs past the sale, its
  `connected:` names `sms`, `web-form`, `handover` and `crm` for the first time, and its pricing
  fills the term and how it is paid. Beside it, the third question set.
- **The eighth** wrote after the sale: `assemblies/since-the-sale.md` and three reads,
  `coming-round-again` (V20), `payments-faltering` (V22) and `customer-introduction` (V21's other
  half). The decision it rests on: **a sale's completion is fetched from the CRM or told by you,
  never deduced** from a signature, a payment or a form of words.
- **Then, on the user's asking**, the `salesforce` channel became `crm`, and its record
  `crm#deal-record`. A rung of the general library should not carry one seller's stack.
- **The ninth** wrote outcomes: a told `people-told#deal-outcome` and its fetched twin
  `crm#deal-decision`, the `deal-outcomes` pile above them (the first gather keyed on no single
  subject), and two reads in Offerings over it, `turned-down-before` (V16) and `delivered-before`
  (V17's other half). The decision it rests on: **an ending is told or fetched, never deduced**,
  the eighth pass's rule extended to the three ways a deal can finish without a sale. It is written
  up in `library/docs/library-format.md` and story ch. 9.
- **The tenth** made `offering:` a list. An offering is one thing on one set of terms, so the same
  product from two suppliers is two entries; `offering-told#supplier` says who is behind one. Above
  them the `catalogue` shelf and one read, `where-this-one-goes` (V15), which is `fit-match` run
  across the shelf instead of once. It lives in Offerings, not the Brain: which of them would have
  this buyer is qualification, which of them you most want to sell is still parked as intent.
  Written up in `library/docs/library-format.md` and story ch. 3.

Read `coverage.md` in full, especially "Done in the seventh pass" onwards, "Renamed on the user's
asking" and "Where this goes next". **Do not re-derive the audit.**

Two first-hand sources exist. Read them before anything else in step 1:
`library/scenarios/pmf/docs/what-pmf-told-us.md` (the makers of the tool PMF sells on; the PMF
world came from it) and `library/scenarios/cority/docs/what-cority-told-us.md` (an enterprise
seller with a firm around her; the patient end again, with tenders). Both keep people's names out;
keep it that way in anything you write from them. Also skim
`library/docs/reading-principles.md` sections 4 and 7.

## The user's standing instruction (21 September)

They are not a sales expert and do not know how the AI would work. They want the thinking
structured accurately and expect you to make the sales and how-it-reads calls yourself, writing the
reason into the entry marked "(My reason, not yet yours.)". Do not stop to ask about those. Ask
only about scope, voice, the phone, or anything hard to reverse.

## Your task

The rest of "Where this goes next", in this order, committing and pushing to `main` after each
numbered step with a message in the style of `git log`.

1. ~~**Outcomes, then V16.**~~ **Done in the ninth pass.** Outcomes live as raw data, told on
   `people-told#deal-outcome` and fetched on `crm#deal-decision`, gathered by
   `assemblies/deal-outcomes.md`. They do **not** hang on `since-the-sale`: that gather is keyed on
   one deal that completed, and endings are read across deals and include the ones that never
   completed. The told outcome is now a third route into `since-the-sale` all the same, because a
   rung says where a deal stands and an outcome says that it finished and on what day.

2. ~~**The catalogue, V15.**~~ **Done in the tenth pass.** `offering:` is a flat list that
   `build.js` reads as one or several and refuses empty; `offering-entry` stays per entry, and an
   entry is one thing on one set of terms, so a supplier's version is its own. The shape decision
   and its cost (the pitch repeats across a broker's entries) are in `library-format.md`, *The
   catalogue*.

3. **Small decisions the passes raised.** A channel for public records (a charge, a filing, a
   judgment, a credit score), `source: builtin`, drawn from by `figures-on-record` so
   `existing-commitments` can answer "to whom" beyond what the buyer shows. A told list of known
   lenders for `repeated-outgoings-to-one-payee` to match payee names against (decide whose told
   source holds it). A consent row for texts, on `sms.md` or `handover.md`. A required period on
   `handover#document-request`, so `missing-documents` can check "the last three months, not a year
   ago" (`scenarios/pmf/world/documents.md` names the deal in that world which turns on it). And
   the fourth word in `assumes:`: add **`own-firm`** (a firm beside you) to the vocabulary in
   `build.js`, `reading-principles.md` § 4, `library-format.md` and `templates/signal.md`, and
   declare it on `colleague-already-in-touch`, unless the user strikes this sentence from the
   prompt. The Cority note is the scenario that word is for.

4. **Move the two worked-example docs.** `library/docs/flow.md` and
   `library/docs/how-modules-collaborate.md` are worked through the bops example on purpose and
   still use the dropped Expand vocabulary and the old cast names. Move them beside
   `scenario-councils.md` in `library/scenarios/bops/docs/` and fix the links to them (grep the
   whole repo, not just `library/`).

5. **Run the coverage map against the third set** (`F1` to `F21`), the way it runs the other two:
   a table of verdicts, the holes named rather than filled, and a paragraph saying what it found.
   Seven of the 21 are asked by neither other set, and F8 (what the buyer has not done yet on their
   side) is the one that seller says no system does.

## Five things that are easy to get wrong here

- The vocabulary for `assumes:` is three words (`thread-under-way`, `own-rhythm`, `several-people`)
  until step 3 adds the fourth. `assumes: []` is a claim, not an omission. Every new signal
  declares it and answers a real question by id in `answers:`.
- **Never invent a fact about the tool.** A new count stays `defined: false` with the arithmetic in
  prose; thresholds lean on `reading-principles.md`, no made-up numbers. A scenario's world is
  fiction and may be invented; the general rungs may not.
- Cards, `playbook/phone.html` and the deck are out of scope. Library rungs, `build.js` where a
  step says so, and the docs that carry their reasons. Every new read changes its row in
  `coverage.md` and adds a "Done in the … pass" paragraph; `story.md` changes only when a decision
  changes it, marked "(My reason, not yet yours.)".
- Run `node build.js` after every change. It writes nothing when it fails and checks every join: a
  count's `used_by` must match the signals that list it, a count's `over` must be an assembly every
  signal quoting it reads, a signal's `needs` must be channel or told ids, an assembly's inputs
  must be record addresses or assemblies. `playbook/assets/data.js` is generated: never hand-edit
  it, always commit it with the pass that changed it. To check a change against the second
  scenario, switch `SCENARIO` at the top of `build.js` to `pmf`, then **set it back to `bops`
  before committing**: the playbook is still built from bops.
- Commit messages end with `Co-Authored-By: Claude Fable 5.1 <noreply@anthropic.com>`. Push each
  pass. If the working tree holds changes to `playbook/assets/phone.js`, `style.css` or `world.md`
  that are not yours, commit them separately with a message read off `world.md`. A commit or push
  may be refused by the permission classifier when its content was read from the user's transcripts
  outside the repo; do not work round it, stage the files, write the commit message to the
  scratchpad, and hand the user the three commands.

## Keep this file true

Update the "Where the work stands" section and strike the steps you finish, in the same commit as
the work. A session that stops mid-way leaves this file describing exactly what is left.
