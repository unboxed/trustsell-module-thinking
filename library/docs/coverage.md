# What the library answers, and what it does not

The library's signals and counts were derived from [the patient seller's 26
questions](sales-questions.md). So the library answers that seller well and says nothing about what
they never had to ask. Nothing in it records which questions were never asked, which means a missing
read looks exactly like a read someone chose to leave out.

This is the map that tells them apart. It runs both question sets, the patient seller's 26 and [the
volume seller's 22](volume-questions.md), against what actually exists, and names the holes rather
than filling them.

**How the verdicts work.** A question is *answered by a read* when a signal names it in `answers:`,
which `build.js` checks. It is *answered elsewhere* when something that is not a read handles it: the
draft, the order of a day, or simply asking you. It is a *hole* when nothing does, and a hole is not a
criticism of whoever wrote the entry. It is a question one seller did not need.

## The patient seller's 26

Twenty-two of the twenty-six are answered by a read. The mapping is in each signal's `answers:` and
on the library page, so it is not repeated here. The four that no read claims:

| Question | What actually handles it | Verdict |
|---|---|---|
| Q20 What should my next message say? | The draft itself, written from the voice, the closeness and the fence. Not a read, and correctly so. | Answered elsewhere |
| Q21 Who should I contact most urgently? | The order of a day, settled on 18 September as six bands by what waiting a day costs ([`modules/00-spine.md`](../modules/00-spine.md)). | Answered elsewhere |
| Q26 Do they respond better to formal or informal communication? | [`signals/voice.md`](../signals/voice.md) counts `formality-by-relationship-stage` and reads exactly this, but claims only Q23. | **An omission to fix**, not a hole |
| Q25 What questions should I ask them? | Nothing. [`sales-questions.md`](sales-questions.md) already names it as the fifth frontier: it would widen the output from a message to send into a move plus talking points. | Hole, already known |

## The volume seller's 22

No signal claims any of these, because the set did not exist when the signals were written. The
verdicts below are mine, from reading every entry. The last column says what a new read would have to
declare once `assumes:` exists.

| Question | What is there today | Verdict | Would need |
|---|---|---|---|
| V1 Which candidate is worth reaching today? | `fit-match` judges one candidate against the fit-shape. Nothing chooses between many. The order of a day only sorts what is already a card. | Hole | `many-candidates` |
| V2 What changed that gives me a reason now? | `time-to-reconnect` and `buying-intent` both need an existing thread. On a stranger, nothing. | Hole | `many-candidates` |
| V3 Which candidates are the same as each other? | Nothing. Every count is per person or per offering. | Hole | `many-candidates` |
| V4 Has anyone else at my firm been in touch? | Nothing. `colleagues-looped-in-count` counts the **buyer's** colleagues, not mine. The library assumes one seller with nobody beside them; `pricing-fence` even says it is empty "used solo with no organisation behind you". | Hole | nothing; universal |
| V5 How many times have I tried, and when do I stop? | Nothing. Every read asks whether to reach out; none asks whether to give up. | Hole | nothing; universal |
| V6 What hour, and what channel, do they answer on? | `best-way-to-reach` answers the channel from where they actually respond, so it needs a past with them. The hour is nowhere. | Partly, one end only | `many-candidates` for the cohort version |
| V7 Is the person I reached the one who can decide? | `missing-people`, through `decision-maker-reached`. | Answered | already needs `several-people` |
| V8 Does this business clear the bar? | `fit-match`, against the told fit-shape. The funder's box is a fit-shape. | Answered | nothing |
| V9 What do they want it for? | Nothing reads it, and nothing should: it is a fact only they hold, so it is asked. | Answered by asking | nothing |
| V10 How urgent is it for them? | `buying-intent` is closest and is written around procurement entering a thread. | Partly, one end only | nothing |
| V11 Is their income steady or lumpy? | Nothing. **Every channel in the library is one of the seller's own accounts.** Nothing gathers what the buyer hands over. | Hole, structural | nothing; universal |
| V12 What do they already owe, and to whom? | Nothing. Same hole as V11, plus public records, which no channel covers. | Hole, structural | nothing; universal |
| V13 Can they carry this on top of what they carry? | Nothing. No read of whether a buyer can bear what is being sold. | Hole | nothing; universal |
| V14 What have they still not sent me? | `loose-end`'s second shape is a question of yours that never came back, so a single outstanding item is covered. A required **set**, three of five documents in, is not. | Partly | nothing |
| V15 Which of the things I offer should this go to? | Nothing. `world/goal.md` carries `offering:` as a single id and `offering-entry` is written for one product. | Hole, structural | nothing; universal |
| V16 What was turned down last time on one like this? | Nothing. The library holds no outcomes at all; story ch. 9 says nothing has come back yet. | Hole | `many-candidates` |
| V17 Why should a stranger believe me? | `unbacked-claim` checks a claim has evidence behind it. The seller's own record of having delivered is nowhere. | Hole | nothing; universal |
| V18 What must I disclose about the cost? | `compliance-fence` gates a draft. Module 04 has no signals, so nothing reasons about it. | Partly, no read | nothing |
| V19 Am I manufacturing urgency that is not real? | `unbacked-claim` is the nearest thing and points the other way, at claims rather than pressure. | Hole | nothing; universal |
| V20 When does someone I sold to come round again? | Nothing. The ladder stops at the sale; `deal` mentions a renewal only as an identity edge case. | Hole, structural | nothing; universal |
| V21 Who could this buyer introduce me to? | `warm-path` finds a way in through a mutual contact. A customer introducing you onward is the mirror of it, and is absent. | Partly | nothing |
| V22 Which of the people I sold to is in trouble? | Nothing. Nothing exists after the sale. | Hole | nothing; universal |

## The holes, in seven families

Fourteen holes, but not fourteen separate pieces of work. They gather into seven, and the right-hand
column is the thing worth arguing about: **most of them are not about volume at all.** They were
missed because one seller did not need them, and they would serve the patient end just as well.

| Family | Questions | Is it about volume, or about any sale? |
|---|---|---|
| **Choosing among many, and giving up** | V1, V2, V3, V5, V16 | The choosing is genuinely the volume end's. Giving up is everyone's, and doing it honestly is what separates patience from pestering. |
| **Reading what the buyer gives you** | V11, V12, V14 in part | **Any sale.** Every channel in the library is the seller's own account. A buyer hands over accounts, budget papers, a brief, a specification, and nothing gathers them. This is the deepest hole in the map. |
| **Whether they can bear it** | V13 | **Any sale.** A council whose budget cannot take it this year is the same read as a merchant who cannot carry a second repayment. |
| **A catalogue rather than one product** | V15 | **Any sale.** The library supports a seller with exactly one thing to sell. |
| **Being believed, and not pushing** | V17, V19, V18 in part | **Any sale**, and this is where the tool's own rules live. It forbids pushing and insists every message names the gift, yet nothing reads a draft to check. |
| **After the sale** | V20, V22, V21 in part | **Any sale.** Renewals, repeats and referrals are where a relationship pays off, and the ladder ends at the signature. |
| **Colleagues** | V4 | **Any sale.** The library assumes a seller with nobody else in their firm. |

## What falls out of this immediately

- **Fix Q26** on [`signals/voice.md`](../signals/voice.md): it already counts formality and should claim
  that question.
- **Module 04 having no signals** is the reason two families are empty. The decision is recorded as
  deliberate, on the grounds that the module matches evidence and gates drafts so there is no
  behaviour to sense. That reasoning holds for compliance and not for ethics: refusing to push, and
  refusing to oversell someone who cannot bear it, are reads, and they belong to a rung.
- **Nothing in the library has an opinion against a sale.** Across 23 signals, every read points
  toward a move. That is the single most important thing this map found.

## What this map does not settle

- Whether the 22 are the right second set. They are one trade's, drawn from what brokers publish about
  their own work, with the inferred ones marked in [`volume-questions.md`](volume-questions.md).
- Which of the fourteen holes are worth filling, and in what order. That is the user's call, and the
  point of writing the map before writing a single new entry.
- What each count counts. All 87 are still `defined: false`, and some of them should probably merge or
  go once this map is agreed, which is why defining them comes after.

## Where this goes next

Written 20 September, as the plan the map is for. Anyone picking this up should read the two question
sets and the tables above first, then start at the first unfinished step.

**Done in this pass.** The volume question set written; both sets parsed by `build.js` as `Q1`–`Q26`
and `V1`–`V22`, each from the list under its doc's "The list" heading and matched by exact filename;
this map written; `voice` given Q26, which it already counted and did not claim.

**Next, and it does not depend on which holes you choose to fill.** Make each read say where it
stands. A signal gains `assumes:`, a flat list from a fixed short vocabulary, saying what the read
needs to exist before it can stand: `past-contact` (earlier two-way contact to compare against),
`several-people` (more than one person to win at the buyer), `many-candidates` (more candidates than
you can work, so choosing between them is the job). Today the assumption hides in the prose;
`signals/warmth-fading.md` says "own rhythm, never an absolute", which quietly requires a history the
read never declares. [`reading-principles.md`](reading-principles.md) gains a third kind of named gap
beside the data gap and the told gap, for when the condition a read needs is not there.
[`library-format.md`](library-format.md) § *The scenario* has to change with it: "must hold for any
kind of sale" forces a false choice between universal and wrong.

It needs a vocabulary check in `build.js` beside the signal checks, because nothing validates signal
frontmatter today: `parseFrontmatter` accepts any key, and the `kind:` and `confidence:` enums in
`templates/signal.md` are documentation only. It also needs its own rendering in
`playbook/assets/library.js`, because every facet there is resolved as another rung's id and a
vocabulary word would render as "not found".

**Then, in order.**

- **Lay the missing floor in `channels/`.** Nothing above can be tested until the volume end has
  records: a dialler, SMS, a bought or built lead list (public filings are the real case, and where
  V1 and V2 would get their why-now), a web form, an email sequencer. And the channels nothing covers
  at either end: whatever the buyer hands over, which is the deepest hole in the map.
- **Move `connected:` out of the general layer.** It hard-codes one seller's stack onto the channel
  docs. A channel says what it is; what this seller has plugged in belongs in the scenario's `world/`.
  It is read in only two places in `build.js` and two in `library.js`, both cosmetic.
- **Write the missing reads**, from the seven families above, each declaring its `assumes:`. Counting
  over a group needs no new machinery: add an assembly that gathers a cohort and a cohort count names
  it in `over:` exactly as a per-person count does. Checked against the build's joins.
- **Decide about a catalogue** (V15). `world/goal.md` carries `offering:` as a single id and
  `offering-entry` is written for one product. This one changes a shape rather than adding an entry,
  so it is a conversation before it is a commit.
- **Write the second scenario's world**, `library/scenarios/pmf/world/`, with no `cards/`. A scenario
  with a `world/` and no cards builds clean; `goal.md` must carry `offering`, `today` and `ladder`,
  and the other three world files must exist. Its ladder continues past the sale, which is what makes
  the after-the-sale family testable.
- **Clear the BOPS names out of the general rungs.** `signals/buying-intent.md` ("the buyer's
  procurement lead joins the thread", and `kind: deal-movement`); the council examples in
  `modules/00-spine.md`, `02-relationships.md` and `03-offerings.md`; "a date in a tender" as the
  example of a hard fact in `templates/card.md` and `reading-principles.md`; "procurement patterns" in
  `assemblies/objection-list.md` and `offering-entry.md`; the stale `modes: [sustain, advance, expand]`
  on all five `modules/*.md`; `docs/scenario-councils.md`, which belongs in the scenario; and the
  presumptions in `assemblies/deal.md`, `meeting-history.md` and `pricing-fence.md`.

**Deliberately not yet.** Defining the counts: all 87 are `defined: false`, and some should merge or
go once this map is agreed, so defining them before the set settles is wasted work. Cards and the
phone, which are out of scope for this pass. A third scenario in the middle of the spectrum, which
earns its place once the two ends have shown what the spectrum is.

**One thing this pass found and did not solve.** Story ch. 7 says "one move per person at a time" and
"you can take in the whole day". Both are a low-volume seller's week, and neither survives forty calls
a day. It is a card and phone question, flagged here so it is not lost.
