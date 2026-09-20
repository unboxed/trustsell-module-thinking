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
verdicts below are mine, from reading every entry. The last column says what a new read would declare
in `assumes:`, which exists since 20 September (the words changed on the way; see the end). Questions
that come before a lead are outside the tool's scope (the user, 20 September: it covers from a lead
onwards, not mass cold calling and messaging), so they are marked as such rather than counted as
holes.

| Question | What is there today | Verdict | Would need |
|---|---|---|---|
| V1 Which candidate is worth reaching today? | `fit-match` judges one candidate against the fit-shape. Nothing chooses between many. The order of a day only sorts what is already a card. | Before a lead: out of scope | nothing |
| V2 What changed that gives me a reason now? | `time-to-reconnect` and `buying-intent` both need an existing thread. On a stranger, nothing. | Before a lead: out of scope | nothing |
| V3 Which candidates are the same as each other? | Nothing. Every count is per person or per offering. | Before a lead: out of scope | nothing |
| V4 Has anyone else at my firm been in touch? | Nothing. `colleagues-looped-in-count` counts the **buyer's** colleagues, not mine. The library assumes one seller with nobody beside them; `pricing-fence` even says it is empty "used solo with no organisation behind you". | Hole | nothing; universal |
| V5 How many times have I tried, and when do I stop? | Nothing. Every read asks whether to reach out; none asks whether to give up. | Hole | nothing; universal |
| V6 What hour, and what channel, do they answer on? | `best-way-to-reach` answers the channel from where they actually respond, so it needs a past with them. The hour is nowhere. | Partly | the cohort version is before a lead: out of scope |
| V7 Is the person I reached the one who can decide? | `missing-people`, through `decision-maker-reached`. | Answered | already assumes `several-people`, which a one-owner business does not meet; see the end |
| V8 Does this business clear the bar? | `fit-match`, against the told fit-shape. The funder's box is a fit-shape. | Answered | nothing |
| V9 What do they want it for? | Nothing reads it, and nothing should: it is a fact only they hold, so it is asked. | Answered by asking | nothing |
| V10 How urgent is it for them? | `buying-intent` is closest and is written around procurement entering a thread. Since 20 September the fast end's own words arrive first as `web-form#form-submission`; no read takes them yet. | Partly, one end only | nothing |
| V11 Is their income steady or lumpy? | No read. Until 20 September every channel in the library was one of the seller's own accounts and nothing gathered what the buyer hands over. `channels/handover.md` now holds it, as an envelope only: what the tool reads inside a set of accounts is not written yet. | Hole; the channel exists, the read does not | nothing; universal |
| V12 What do they already owe, and to whom? | No read. Same as V11, plus public records, which no channel covers. | Hole; the channel exists, the read does not | nothing; universal |
| V13 Can they carry this on top of what they carry? | Nothing. No read of whether a buyer can bear what is being sold. | Hole | nothing; universal |
| V14 What have they still not sent me? | `loose-end`'s second shape is a question of yours that never came back, so a single outstanding item is covered. A required **set**, three of five documents in, is not. Since 20 September `handover#document-request` and its `answered by` are the records such a read would count. | Partly | nothing |
| V15 Which of the things I offer should this go to? | Nothing. `world/goal.md` carries `offering:` as a single id and `offering-entry` is written for one product. | Hole, structural | nothing; universal |
| V16 What was turned down last time on one like this? | Nothing. The library holds no outcomes at all; story ch. 9 says nothing has come back yet. | Hole | outcomes on record, which no word names |
| V17 Why should a stranger believe me? | `unbacked-claim` checks a claim has evidence behind it. The seller's own record of having delivered is nowhere. | Hole | nothing; universal |
| V18 What must I disclose about the cost? | `compliance-fence` gates a draft. Module 04 has no signals, so nothing reasons about it. | Partly, no read | nothing |
| V19 Am I manufacturing urgency that is not real? | `unbacked-claim` is the nearest thing and points the other way, at claims rather than pressure. | Hole | nothing; universal |
| V20 When does someone I sold to come round again? | Nothing. The ladder stops at the sale; `deal` mentions a renewal only as an identity edge case. | Hole, structural | nothing; universal |
| V21 Who could this buyer introduce me to? | `warm-path` finds a way in through a mutual contact. A customer introducing you onward is the mirror of it, and is absent. | Partly | nothing |
| V22 Which of the people I sold to is in trouble? | Nothing. Nothing exists after the sale. | Hole | nothing; universal |

## The holes, in seven families

Eleven holes (fourteen until 20 September, when V1 to V3 were put outside the tool's scope), but not
eleven separate pieces of work. They gather into seven, and the right-hand column is the thing worth
arguing about: **none of them is about volume.** They were missed because one seller did not need
them, and they would serve the patient end just as well.

| Family | Questions | Is it about volume, or about any sale? |
|---|---|---|
| **Giving up, and what was turned down** | V5, V16 | **Any sale.** Giving up is everyone's, and doing it honestly is what separates patience from pestering. The choosing among many (V1 to V3) that used to sit here is before a lead, outside the tool's scope. |
| **Reading what the buyer gives you** | V11, V12, V14 in part | **Any sale.** Until 20 September every channel in the library was the seller's own account, and what a buyer hands over (accounts, budget papers, a brief, a specification) had nowhere to land. [`channels/handover.md`](../channels/handover.md) now gathers it, as an envelope. What the tool reads inside is still the deepest hole in the map. |
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
- Which of the eleven holes are worth filling, and in what order. That is the user's call, and the
  point of writing the map before writing a single new entry. An order is proposed at the end, marked
  as mine.
- What each count counts. All 87 are still `defined: false`, and some of them should probably merge or
  go once this map is agreed, which is why defining them comes after.

## Where this goes next

Written 20 September, as the plan the map is for. Anyone picking this up should read the two question
sets and the tables above first, then start at the first unfinished step.

**Done in the first pass.** The volume question set written; both sets parsed by `build.js` as
`Q1`–`Q26` and `V1`–`V22`, each from the list under its doc's "The list" heading and matched by exact
filename; this map written; `voice` given Q26, which it already counted and did not claim.

**Done in the second pass, 20 September.** Each read says where it stands. Every signal carries
`assumes:`, a flat list from a fixed vocabulary that `build.js` checks (the key is required, so a new
read cannot skip the question), with `assumes_status: provisional` because each was read off the
prose rather than decided. The words are not the three first proposed here. `past-contact` was doing
two jobs, so it split: `thread-under-way` (a conversation already under way; a promise on a thread
needs only the thread) and `own-rhythm` (enough history to know their usual; a gap against their
median needs a history). `many-candidates` was dropped: the tool covers from a lead onwards, so no
read will ever assume a list to choose from, and a word nothing can use is a false door.
`several-people` stayed. The count today: 9 reads assume `own-rhythm`, 5 `thread-under-way`, 2
`several-people`, 8 nothing. **What that makes visible:** a broker with live deals and one owner per
business meets `thread-under-way` and nothing else, so 13 of the 23 reads can be made at that end
today and 10 cannot. That is the second scenario's starting position, and it says the PMF end lives
in moving a deal forward (promises, missing documents, the close), which matches the trade's own
qualifying list (V7, V9 to V14), not in choosing from a list. [`reading-principles.md`](reading-principles.md)
carries the third kind of gap, the assumption gap; `library-format.md` § *The scenario* no longer says
"must hold for any kind of sale"; the library page shows each read's assumptions in words and counts
them on the signals step.

**Done in the third pass, 20 September.** The missing floor is laid in `channels/`, three docs.
[`sms.md`](../channels/sms.md) and [`web-form.md`](../channels/web-form.md) are the fast end's
records: a conversation by text is a thread like any other, and an enquiry on your own site is the
moment a stranger becomes a lead, the earliest record the tool covers and the only one where the
buyer speaks first. Neither names a provider, because none is chosen; their Source columns are plain
notes, as LinkedIn's are. Not a dialler, a bought list or a sequencer: those work the list before
there is a lead. [`handover.md`](../channels/handover.md) is the channel nothing covered at either
end, what the buyer hands over on the way to a close. It is a third kind of source, `buyer`, beside
`account`, `builtin` and `told`: nothing fetches it and you cannot say it. It holds the envelope only
(what, from whom, when, by which door, in answer to which request of yours) and says in so many words
that what the tool reads inside a document is not written yet. No module draws from the three and no
read needs them: the floor is there for the reads to stand on. And `connected:` has left the general
layer: `world/goal.md` lists what the seller has plugged in, `build.js` checks the list and refuses a
channel or told doc that still says it, and the library page reads the same list. The BOPS world
plugs in Gmail, Calendar, Drive, Contacts, Meet, Slack and the web, as its channel docs said.

**Then, in order.** The order of the reads is mine, from the scope decision above. *(My reason, not
yet yours.)*

- **Write the missing reads**, from the seven families above, each declaring its `assumes:`. First
  the ones that move a deal forward or hold it back, because that is where the fast end lives and
  none needs a new channel: when to stop (V5), the required document set (V14, which can now count
  `handover#document-request`), whether they can carry it (V13), what must be disclosed (V18), and
  the opinion against a sale (V17, V19). Then reading what the buyer hands over (V11, V12): its
  channel exists, and what is inside a document is the decision still to make before a read can
  stand on it. Then colleagues (V4), after
  the sale (V20 to V22, once the second scenario's ladder continues past it), and what was turned
  down last time (V16, once outcomes exist). Counting over a group needs no new machinery: add an
  assembly that gathers the group and a count names it in `over:` exactly as a per-person count
  does. Checked against the build's joins.
- **Decide about a catalogue** (V15). `world/goal.md` carries `offering:` as a single id and
  `offering-entry` is written for one product. This one changes a shape rather than adding an entry,
  so it is a conversation before it is a commit.
- **Write the second scenario's world**, `library/scenarios/pmf/world/`, with no `cards/`. A scenario
  with a `world/` and no cards builds clean; `goal.md` must carry `offering`, `today`, `ladder` and
  `connected` (which will name `sms`, `web-form` and `handover` for the first time), and the other
  three world files must exist. It is built around live deals moving to a close, not a
  list being worked. Its ladder continues past the sale, which is what makes the after-the-sale
  family testable. Once it exists, `goal.md` could say what the sale has (a thread, a history,
  several people) and the build could check that a card's reads assume no more than that, which
  would turn `assumes:` from a label into a checked join.
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

**One thing the first pass found and did not solve.** Story ch. 7 says "one move per person at a
time" and "you can take in the whole day". Both are a low-volume seller's week, and neither survives
forty calls a day. With the scope now at a lead onwards, a broker's day is fifteen live deals rather
than forty cold calls, so the question may not arise; it is still a card and phone question, flagged
here so it is not lost.
