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

When this map was first written no signal claimed any of these, because the set did not exist when
the signals were written; since later on 20 September five do (V5, V13, V14, V17 in part, V18, V19).
The verdicts below are mine, from reading every entry. The last column says what a new read would declare
in `assumes:`, which exists since 20 September (the words changed on the way; see the end). Questions
that come before a lead are outside the tool's scope (the user, 20 September: it covers from a lead
onwards, not mass cold calling and messaging), so they are marked as such rather than counted as
holes.

| Question | What is there today | Verdict | Would need |
|---|---|---|---|
| V1 Which candidate is worth reaching today? | `fit-match` judges one candidate against the fit-shape. Nothing chooses between many. The order of a day only sorts what is already a card. | Before a lead: out of scope | nothing |
| V2 What changed that gives me a reason now? | `time-to-reconnect` and `buying-intent` both need an existing thread. On a stranger, nothing. | Before a lead: out of scope | nothing |
| V3 Which candidates are the same as each other? | Nothing. Every count is per person or per offering. | Before a lead: out of scope | nothing |
| V4 Has anyone else at my firm been in touch? | [`colleague-already-in-touch`](../signals/colleague-already-in-touch.md), since 21 September, over the new [`firm-contact`](../assemblies/firm-contact.md) gather: who at your firm was in touch with this organisation, when, by which way, from the records a firm shares (the CRM, the first draw from it; the workspace; a thread you were copied on; a shared calendar). A colleague's own mailbox is never visible. It points at a word with the colleague, not at a move. | Answered | `[]`, though it does assume a firm beside you, which the vocabulary has no word for; see the end |
| V5 How many times have I tried, and when do I stop? | [`enough-tries`](../signals/enough-tries.md), since 20 September: your tries since they last wrote, the innocent-explanation scan, and the goal's tempo for where "enough" sits. The first read that points away from a move. | Answered | `[]`: it stands on your own sent messages, so it holds on a lead who never replied |
| V6 What hour, and what channel, do they answer on? | `best-way-to-reach` answers the channel from where they actually respond, so it needs a past with them. The hour is nowhere. | Partly | the cohort version is before a lead: out of scope |
| V7 Is the person I reached the one who can decide? | `missing-people`, through `decision-maker-reached`. | Answered | already assumes `several-people`, which a one-owner business does not meet; see the end |
| V8 Does this business clear the bar? | `fit-match`, against the told fit-shape. The funder's box is a fit-shape. | Answered | nothing |
| V9 What do they want it for? | Nothing reads it, and nothing should: it is a fact only they hold, so it is asked. | Answered by asking | nothing |
| V10 How urgent is it for them? | `buying-intent` is closest and is written around procurement entering a thread. Since 20 September the fast end's own words arrive first as `web-form#form-submission`; no read takes them yet. | Partly, one end only | nothing |
| V11 Is their income steady or lumpy? | [`uneven-income`](../signals/uneven-income.md), since 21 September, over the new [`figures-on-record`](../assemblies/figures-on-record.md) gather: money in per period against the buyer's own median, on the periods their documents cover. It can say uneven on six months and seasonal only on twelve, and says which. Where "uneven" begins is not written yet. | Answered | `[]`: it stands on their own documents alone |
| V12 What do they already owe, and to whom? | [`existing-commitments`](../signals/existing-commitments.md), since 21 September: what their documents name as owed, plus what looks like a commitment because the same payment goes to the same name period after period, said as "looks like". "To whom" is only as the document names them; a public register is covered by no channel, and the read says so. | Answered, short of public records | `[]` |
| V13 Can they carry this on top of what they carry? | [`can-they-carry-it`](../signals/can-they-carry-it.md), since 20 September: the cost over the term against what they have shown or said they can bear. Since 21 September the inside of a document is written and the term and the way it is paid are told fields on the offering's pricing, so the read can be made wherever those are filled. | Answered | `[]` |
| V14 What have they still not sent me? | [`missing-documents`](../signals/missing-documents.md), since 20 September, over the new [`document-set`](../assemblies/document-set.md) gather: what you asked for against what came, from `handover#document-request` and `handover#handed-over-document`. Which documents a sale needs is still a told gap, so it reads what you asked for, never what you should have. | Answered | `thread-under-way` |
| V15 Which of the things I offer should this go to? | Nothing. `world/goal.md` carries `offering:` as a single id and `offering-entry` is written for one product. | Hole, structural | nothing; universal |
| V16 What was turned down last time on one like this? | Nothing. The library holds no outcomes at all; story ch. 9 says nothing has come back yet. | Hole | outcomes on record, which no word names |
| V17 Why should a stranger believe me? | [`pushing`](../signals/pushing.md), second shape, since 20 September: asking to be taken on your word, with nothing to show (the evidence shelf, by buyer type) and nothing to give (what they asked for, what you promised) after several unanswered notes. The seller's own record of having delivered is still nowhere: that is outcomes, V16's family. | Answered in part | `thread-under-way` |
| V18 What must I disclose about the cost? | [`disclosure-still-owed`](../signals/disclosure-still-owed.md), since 20 September: the buyer is turning to agree and a must-say rule in the fence has no match on the thread. What a jurisdiction requires is not written yet and is the organisation's to tell, never the tool's to invent. | Answered | `thread-under-way` |
| V19 Am I manufacturing urgency that is not real? | [`pushing`](../signals/pushing.md), first shape, since 20 September: the only real dates on a thread are the buyer's own words and a dated change in your told pricing; any other deadline is manufactured. | Answered | `thread-under-way` |
| V20 When does someone I sold to come round again? | Nothing. The ladder stops at the sale; `deal` mentions a renewal only as an identity edge case. | Hole, structural | nothing; universal |
| V21 Who could this buyer introduce me to? | `warm-path` finds a way in through a mutual contact. A customer introducing you onward is the mirror of it, and is absent. | Partly | nothing |
| V22 Which of the people I sold to is in trouble? | Nothing. Nothing exists after the sale. | Hole | nothing; universal |

## The holes, in seven families

Eleven holes when this was written (fourteen until 20 September, when V1 to V3 were put outside the
tool's scope; seven since the fourth pass the same day; five since the fifth, on 21 September, and
four since the sixth the same day), but not eleven separate pieces of work. They
gather into seven families, and the right-hand column is the thing worth arguing about: **none of
them is about volume.** They were missed because one seller did not need
them, and they would serve the patient end just as well.

| Family | Questions | Is it about volume, or about any sale? |
|---|---|---|
| **Giving up, and what was turned down** | V5 (answered 20 September), V16 | **Any sale.** Giving up is everyone's, and doing it honestly is what separates patience from pestering. The choosing among many (V1 to V3) that used to sit here is before a lead, outside the tool's scope. |
| **Reading what the buyer gives you** | V11, V12, V14 (all answered by 21 September) | **Any sale.** Until 20 September every channel in the library was the seller's own account, and what a buyer hands over (accounts, budget papers, a brief, a specification) had nowhere to land. [`channels/handover.md`](../channels/handover.md) gathers it, as an envelope and, since 21 September, as the figures a document states, and no more. [`document-set`](../assemblies/document-set.md) reads the envelope, [`figures-on-record`](../assemblies/figures-on-record.md) the figures. What a document's own labels mean, by kind and by country, is the part still not written. |
| **Whether they can bear it** | V13 (a read since 20 September; makeable since 21 September, when the term became a told field) | **Any sale.** A council whose budget cannot take it this year is the same read as a merchant who cannot carry a second repayment. |
| **A catalogue rather than one product** | V15 | **Any sale.** The library supports a seller with exactly one thing to sell. |
| **Being believed, and not pushing** | V17 in part, V19, V18 (all reads since 20 September) | **Any sale**, and this is where the tool's own rules live. It forbids pushing and insists every message names the gift; since 20 September a read says what a thread can honestly carry, and the draft is written inside it. |
| **After the sale** | V20, V22, V21 in part | **Any sale.** Renewals, repeats and referrals are where a relationship pays off, and the ladder ends at the signature. |
| **Colleagues** | V4 (answered 21 September) | **Any sale**, wherever there is a firm. The library assumed a seller with nobody else in their firm; now a read says who at your firm was in touch before you, from the records a firm shares, and the vocabulary still has no word for "a firm beside you". |

## What falls out of this immediately

- **Fix Q26** on [`signals/voice.md`](../signals/voice.md): it already counts formality and should claim
  that question.
- **Module 04 having no signals** was the reason two families were empty. The decision is recorded as
  deliberate, on the grounds that the module matches evidence and gates drafts so there is no
  behaviour to sense. That reasoning holds for compliance and not for ethics: refusing to push, and
  refusing to oversell someone who cannot bear it, are reads, and they belong to a rung. Since 20
  September they do, and not in module 04: it is optional, and the tool's own rules must hold for a
  solo seller with nobody behind them. They live in People and Offerings and borrow 04's floors.
- **Nothing in the library had an opinion against a sale.** Across the first 23 signals, every read
  pointed toward a move. That was the single most important thing this map found, and it is why the
  fourth pass wrote the reads that point the other way first: `enough-tries` (stop), `pushing`
  (not like this), `disclosure-still-owed` (not yet) and `can-they-carry-it` (not this sale).

## What this map does not settle

- Whether the 22 are the right second set. They are one trade's, drawn from what brokers publish about
  their own work, with the inferred ones marked in [`volume-questions.md`](volume-questions.md).
- Which of the remaining holes are worth filling, and in what order. That is the user's call, and the
  point of writing the map before writing a single new entry. An order is proposed at the end, marked
  as mine.
- What each count counts. All 102 are still `defined: false`, and some of them should probably merge or
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

**Done in the fourth pass, 20 September.** The reads that move a deal forward or hold it back, in
the order proposed below (which was mine, and is not yet confirmed). Five signals, one assembly and
eleven counts, every count `defined: false` like the rest. [`enough-tries`](../signals/enough-tries.md)
(V5) stands on your own sent messages and the innocent-explanation scan, so it declares `assumes: []`:
it is the one decay read that needs no rhythm, which is what lets it hold on a lead who never
replied. [`missing-documents`](../signals/missing-documents.md) (V14) reads the new
[`document-set`](../assemblies/document-set.md) gather, the first assembly to draw from what the
buyer hands over; People's `draws_from` names `handover` now. [`can-they-carry-it`](../signals/can-they-carry-it.md)
(V13) is written so two decisions have a place to land, and says it cannot be made until they are:
the term is not a told field, and what is inside a set of accounts is not written.
[`disclosure-still-owed`](../signals/disclosure-still-owed.md) (V18) reads the thread against the
fence's must-say rules and holds a close until they are on record; what a jurisdiction requires
stays "not written yet", the organisation's to tell. [`pushing`](../signals/pushing.md) (V19, V17
in part) is the tool's own rule turned into a read, in two shapes: urgency the record does not back,
and asking to be taken on trust with nothing to show or give. It does not judge a draft; it says what
the thread can honestly carry, and the draft is written inside that, the way it is written inside
the fence. **Where they live** is the decision worth arguing with: not in Organisation, which is
optional, because the tool's rules must hold for a solo seller. People holds three and Offerings
one, and both borrow Organisation's floors (the fence, the evidence shelf) through a new
`connects`. *(My reason, not yet yours.)* What the pass did not do: define a count, add a field to a
told source, gather `sms` or `web-form` (so a try by text is not counted yet, and the reads say so),
or touch a card. Eight of the 22 are now answered by a read, one by asking, three in part, seven by
nothing, and three are out of scope. The assumptions count: 10 reads assume nothing, 8
`thread-under-way`, 9 `own-rhythm`, 2 `several-people`; so 18 of the 28 can be made on a
live thread with no history, and 10 cannot.

**Done in the fifth pass, 21 September.** Reading what the buyer hands over. The decision was what
the tool reads inside a document and what it must never read into one, and the answer is one line:
it reads the figures a document states, in the document's own words, and nothing else.
[`channels/handover.md`](../channels/handover.md) gains two records below the envelope, a stated
figure (label, amount, period, where, and one derived kind with "unplaced" as the honest fallback)
and a stated commitment (to whom, what it is called, how much and how often, until when, all as
the document names them), and a section, *What is never read*, with five rules: no figure the
document does not state, no verdict on the person, nothing beyond the purpose it was handed over
for (so V21 is never answered from a bank statement), nothing about their kind of business, and no
view on whether it is genuine. [`reading-principles.md`](reading-principles.md) carries it as
principle 7. A new gather, [`figures-on-record`](../assemblies/figures-on-record.md), lines the
figures up by period and keeps what the buyer said (on your form, the first draw from `web-form`;
on the thread) apart from what they showed; it stands beside `document-set` rather than inside it,
so the envelope read does not change when the inside is read. Two reads in People, both
`assumes: []` because they stand on the buyer's own documents alone:
[`uneven-income`](../signals/uneven-income.md) (V11) and
[`existing-commitments`](../signals/existing-commitments.md) (V12). Neither points against a
sale: they describe, and `can-they-carry-it` judges. That read now reads the new gather and waits
on one decision instead of two. Four new counts, and the two that were waiting re-pointed to the
new gather; all still `defined: false`, with the arithmetic said in prose. A commitment only
repetition suggests is a count, not a record, and the read says "looks like" of it. Where the
reads live, the derived `kind` on the channel floor, and drawing from the form were decided by me
on 21 September, with the user's leave: they asked for the thinking to be structured accurately
and said they could not judge it themselves. *(My reasons, not yet yours.)* Ten of the 22 are now
answered by a read, one by asking, three in part, five by nothing, and three are out of scope. The
assumptions count: 12 reads assume nothing, 8 `thread-under-way`, 9 `own-rhythm`, 2
`several-people`; so 20 of the 30 can be made on a live thread with no history, and 10 cannot.

**Done in the sixth pass, 21 September.** Colleagues, and the term. [`colleague-already-in-touch`](../signals/colleague-already-in-touch.md)
(V4) reads a new gather, [`firm-contact`](../assemblies/firm-contact.md): every contact on record
between someone at your firm other than you and one buyer organisation, from the records a firm
shares. That is the CRM (the first gather to draw from [`channels/salesforce.md`](../channels/salesforce.md)),
the workspace, a thread you were copied on and a shared calendar; a colleague's own mailbox is
never visible, and the gather says so. Who counts as a colleague is read from your own profile:
anyone on your domain who is not you. The read points at a word with the colleague, never at a
move over their thread, and it lives in People because it is about who has been in touch with the
buyer, whichever side of your firm they are on. It declares `assumes: []` because it stands on
shared records alone, and used solo those records are empty and the read does not arise. **It does
assume a firm beside you**, and the vocabulary has no word for that. The word was not added,
because the three words were fixed with the user and a fourth is theirs to add; the read's body
names the gap and says it would be the one to declare it. And the term: `Pricing` on
[`offering-told.md`](../told/offering-told.md) gains two told fields, how long it runs for and how
it is paid, which is all `can-they-carry-it` was waiting on; where they are empty for an offering
that is a told gap for that offering, not a hole in the shape. `deal.md` no longer says the CRM is
`connected: false`, which moved to the scenario on 20 September. *(My reasons, not yet yours.)*
Eleven of the 22 are now answered by a read, one by asking, three in part, four by nothing, and
three are out of scope. The assumptions count: 13 reads assume nothing, 8 `thread-under-way`, 9
`own-rhythm`, 2 `several-people`; so 21 of the 31 can be made on a live thread with no history,
and 10 cannot.

**Then, in order.** The order of the reads is mine, from the scope decision above. *(My reason, not
yet yours.)*

- **Write the remaining reads**, each declaring its `assumes:`. After the sale (V20 to V22, once
  the second scenario's ladder continues past it); and what was turned down last time (V16, once
  outcomes exist, which is also what V17's other half needs: the seller's own record of having
  delivered). Counting over a group needs no new machinery: add an assembly that gathers the group
  and a count names it in `over:` exactly as a per-person count does. Checked against the build's
  joins. Still open: a channel for public records, which is what "to whom" needs beyond what the
  buyer shows; and whether "a firm beside you" becomes the fourth word in `assumes:`, the user's
  call.
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
- **Clear the BOPS names out of the general rungs.** Done 21 September, as far as the list went:
  `buying-intent` no longer turns on a procurement lead (the person who holds the budget, and who
  signs off); the council examples in `modules/00-spine.md`, `02-relationships.md` and
  `03-offerings.md` are generic; "a date in a tender" is "a date they put in writing" in
  `templates/card.md` and `reading-principles.md`; "procurement pattern" is "buying pattern" in
  `objection-list.md` and `offering-entry.md`; the stale `modes:` lines are gone from the five
  modules; and `scenario-councils.md` lives beside its scenario, at
  `scenarios/bops/docs/`, with its two companions pointing there. Left as they were:
  `assemblies/deal.md`, `meeting-history.md` and `pricing-fence.md`, which carry no scenario name I
  could find, and whatever presumption was meant is not recorded; and `docs/flow.md` and
  `how-modules-collaborate.md`, which are worked through the example on purpose and still use the
  dropped Expand vocabulary and the old cast names, the user's call whether they move or are
  rewritten. `kind: deal-movement` stays: it is a family of read, not a council word.

**Deliberately not yet.** Defining the counts: all 102 are `defined: false`, and some should merge or
go once this map is agreed, so defining them before the set settles is wasted work. Cards and the
phone, which are out of scope for this pass. A third scenario in the middle of the spectrum, which
earns its place once the two ends have shown what the spectrum is.

**One thing the first pass found and did not solve.** Story ch. 7 says "one move per person at a
time" and "you can take in the whole day". Both are a low-volume seller's week, and neither survives
forty calls a day. With the scope now at a lead onwards, a broker's day is fifteen live deals rather
than forty cold calls, so the question may not arise; it is still a card and phone question, flagged
here so it is not lost.
