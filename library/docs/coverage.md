# What the library answers, and what it does not

The library's signals and counts were derived from [the patient seller's 26
questions](sales-questions.md). So the library answers that seller well and says nothing about what
they never had to ask. Nothing in it records which questions were never asked, which means a missing
read looks exactly like a read someone chose to leave out.

This is the map that tells them apart. It runs all three question sets against what actually
exists, and names the holes rather than filling them: the patient seller's 26, [the volume seller's
22](volume-questions.md), and, since the twelfth pass on 21 September, [the 21 questions of a
seller with a firm around her](firm-questions.md). The section called *The holes, in seven
families* is still a reading of the first two sets only; what the third set found has its own
section above it, because its holes fall into different families.

**How the verdicts work.** A question is *answered by a read* when a signal names it in `answers:`,
which `build.js` checks. It is *answered elsewhere* when something that is not a read handles it: the
draft, the order of a day, or simply asking you. It is a *hole* when nothing does, and a hole is not a
criticism of whoever wrote the entry. It is a question one seller did not need.

## The patient seller's 26

Twenty-two of the twenty-six are answered by a read. The mapping is in each signal's `answers:` and
on the library page, so it is not repeated here. The four that no read claims:

| Question | What actually handles it | Verdict |
|---|---|---|
| Q20 What should my next message say? | Since 22 September, four rows on every decided card with a draft: what the message opens with, points at, asks and holds back, each traced to a count, a document or a told record and checked by the build ([`message-shape.md`](message-shape.md)). Until then the answer was "the draft does it", which said a draft appears and not what has to be in it. Not a read, and correctly so: a message's shape is a projection of reads that have fired. | Answered, by the message rows |
| Q21 Who should I contact most urgently? | The order of a day, settled on 18 September as six bands by what waiting a day costs ([`modules/00-spine.md`](../modules/00-spine.md)). | Answered elsewhere |
| Q26 Do they respond better to formal or informal communication? | [`signals/voice.md`](../signals/voice.md) counts `formality-by-relationship-stage` and reads exactly this, but claims only Q23. | **An omission to fix**, not a hole |
| Q25 What questions should I ask them? | Nothing. [`sales-questions.md`](sales-questions.md) already names it as the fifth frontier: it would widen the output from a message to send into a move plus talking points. | Hole, already known |

## The volume seller's 22

When this map was first written no signal claimed any of these, because the set did not exist when
the signals were written. Since the tenth pass, on 21 September, every one of them has an answer of
some kind and none is left to nothing.
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
| V4 Has anyone else at my firm been in touch? | [`colleague-already-in-touch`](../signals/colleague-already-in-touch.md), since 21 September, over the new [`firm-contact`](../assemblies/firm-contact.md) gather: who at your firm was in touch with this organisation, when, by which way, from the records a firm shares (the CRM, the first draw from it; the workspace; a thread you were copied on; a shared calendar). A colleague's own mailbox is never visible. It points at a word with the colleague, not at a move. | Answered | `own-firm`, the fourth word in the vocabulary, added for it in the eleventh pass |
| V5 How many times have I tried, and when do I stop? | [`enough-tries`](../signals/enough-tries.md), since 20 September: your tries since they last wrote, the innocent-explanation scan, and the goal's tempo for where "enough" sits. The first read that points away from a move. | Answered | `[]`: it stands on your own sent messages, so it holds on a lead who never replied |
| V6 What hour, and what channel, do they answer on? | `best-way-to-reach` answers the channel from where they actually respond, so it needs a past with them. The hour is nowhere. | Partly | the cohort version is before a lead: out of scope |
| V7 Is the person I reached the one who can decide? | `missing-people`, through `decision-maker-reached`. | Answered | already assumes `several-people`, which a one-owner business does not meet; see the end |
| V8 Does this business clear the bar? | `fit-match`, against the told fit-shape. The funder's box is a fit-shape. | Answered | nothing |
| V9 What do they want it for? | Nothing reads it, and nothing should: it is a fact only they hold, so it is asked. | Answered by asking | nothing |
| V10 How urgent is it for them? | `buying-intent` is closest and is written around procurement entering a thread. Since 20 September the fast end's own words arrive first as `web-form#form-submission`; no read takes them yet. | Partly, one end only | nothing |
| V11 Is their income steady or lumpy? | [`uneven-income`](../signals/uneven-income.md), since 21 September, over the new [`figures-on-record`](../assemblies/figures-on-record.md) gather: money in per period against the buyer's own median, on the periods their documents cover. It can say uneven on six months and seasonal only on twelve, and says which. Where "uneven" begins is not written yet. | Answered | `[]`: it stands on their own documents alone |
| V12 What do they already owe, and to whom? | [`existing-commitments`](../signals/existing-commitments.md), since 21 September: what their documents name as owed, what looks like a commitment because the same payment goes to the same name period after period, said as "looks like", and, since the eleventh pass, what is secured against them on the public register, with the date it was registered and how sure the identity match is. | Answered | `[]` |
| V13 Can they carry this on top of what they carry? | [`can-they-carry-it`](../signals/can-they-carry-it.md), since 20 September: the cost over the term against what they have shown or said they can bear. Since 21 September the inside of a document is written and the term and the way it is paid are told fields on the offering's pricing, so the read can be made wherever those are filled. | Answered | `[]` |
| V14 What have they still not sent me? | [`missing-documents`](../signals/missing-documents.md), since 20 September, over the [`document-set`](../assemblies/document-set.md) gather: what you asked for against what came. Since the eleventh pass a request can ask for a stretch of time and a document can say what it covers, so the read tells "not sent" from "sent, for the wrong months". Which documents a sale needs is still a told gap, so it reads what you asked for, never what you should have. | Answered | `thread-under-way` |
| V15 Which of the things I offer should this go to? | [`where-this-one-goes`](../signals/where-this-one-goes.md), since 21 September, over the new [`catalogue`](../assemblies/catalogue.md) shelf: `fit-match` run across every entry in play instead of once, saying which would take this buyer, which would turn them away and what each would cost them. `offering:` is a list now, and one entry stays valid. It never ranks on what you earn. | Answered | `[]`: it needs a shelf with more than one thing on it, which is a fact about the seller and not about the sale |
| V16 What was turned down last time on one like this? | [`turned-down-before`](../signals/turned-down-before.md), since 21 September, over the new [`deal-outcomes`](../assemblies/deal-outcomes.md) pile: the ended deals that match this one on the told fit-shape, how they ended, the reasons given in the words they were given in, and whether the no came from the buyer or from a third party the sale needed. Not a forecast, and it never says why they really refused. | Answered | `[]`: it stands on your own ended deals, so it holds on a stranger |
| V17 Why should a stranger believe me? | Both halves now. [`pushing`](../signals/pushing.md), second shape, since 20 September, says what the thread cannot honestly carry: asking to be taken on your word, with nothing to show and nothing to give after several unanswered notes. [`delivered-before`](../signals/delivered-before.md), since 21 September, says what it can: deals of this shape you really did sell, and how recently. Sold is not the same as glad, and the read never implies the second. | Answered | `thread-under-way` on the first half, `[]` on the second, which is the point of it |
| V18 What must I disclose about the cost? | [`disclosure-still-owed`](../signals/disclosure-still-owed.md), since 20 September: the buyer is turning to agree and a must-say rule in the fence has no match on the thread. What a jurisdiction requires is not written yet and is the organisation's to tell, never the tool's to invent. Run on the broker's records in the forty-fifth pass: with no rule told the read is silent by its own rule, so the card it produces is an Ask for the rule, on the live case. | Answered once a rule is told; an Ask until then | `thread-under-way` |
| V19 Am I manufacturing urgency that is not real? | [`pushing`](../signals/pushing.md), first shape, since 20 September: the only real dates on a thread are the buyer's own words and a dated change in your told pricing; any other deadline is manufactured. | Answered | `thread-under-way` |
| V20 When does someone I sold to come round again? | [`coming-round-again`](../signals/coming-round-again.md), since 21 September, over the new [`since-the-sale`](../assemblies/since-the-sale.md) gather: how far through the agreed term the deal is, what they took before, and their own interval between purchases. Where no term was told there is no clock, and the read is not made. | Answered | `[]`: it needs a completed deal, which is a rung on the ladder, not an assumption about the sale's shape |
| V21 Who could this buyer introduce me to? | Both halves now. `warm-path` finds a way in through a mutual contact before a sale. [`customer-introduction`](../signals/customer-introduction.md), since 21 September, is the half after one: a name the customer gave you, at an organisation you have never written to, and nothing outstanding either way. Never answered from a document they handed over for something else. | Answered | `[]` |
| V22 Which of the people I sold to is in trouble? | [`payments-faltering`](../signals/payments-faltering.md), since 21 September: an agreed payment their own later documents do not show, a word from them about paying, or a note on the CRM. Never a verdict on the person. Whether the money actually arrived is on no record the library has, and the read names that rather than filling it. | Answered, short of the ledger | `[]` |

## The firm seller's 21

Run for the first time on 21 September, in the twelfth pass. Five of the twenty-one were answered
by a read, one by asking, eight in part, two elsewhere, and five by nothing. Since the twenty-fourth pass it is
**fourteen by a read, one by asking, three in part, two elsewhere and one by nothing**. F1 and F16
moved in the twenty-first, F6 and F8 in the twenty-second, F11, F17 and F20 in the twenty-third,
F7 and F10 in the twenty-fourth. The three still answered in part are F2, F3 and F13, and each
names in its read's body the fact nobody holds. The one left with nothing is F19, which this map
already says is the Brain's. That is a far worse
showing than either other set, and the reason is not that this seller is unusual: it is that her
questions are mostly about **the buyer's own process** and **her own firm's effort**, and the
library has barely touched either. The verdicts are mine, from reading every entry.

| Question | What is there today | Verdict | Would need |
|---|---|---|---|
| F1 What does this organisation say about itself in public? | [`published-picture`](../assemblies/published-picture.md) gathers it and [`stated-priorities`](../signals/stated-priorities.md) reads it, both since the twenty-first pass: the passage, where it is, when it was published, and whether the words are theirs or somebody else's. | Answered | nothing; `web` is builtin |
| F2 Which way in is open, and at what level? | [`missing-people`](../signals/missing-people.md), which **claims F2 in part** since the twentieth pass and says in its body which half it reaches: who has never been reached, and at what level the holes sit. Choosing between two doors into one organisation is a judgement nothing below it holds. | Partly, and claimed | nothing new below; a read over the stakeholder map |
| F3 What do they already run, and what budget sits behind it? | [`competitive-standing`](../signals/competitive-standing.md), which **claims F3 in part** since the twentieth pass: it reads what they already run and whether the lock-in is live. The budget, as a figure somebody was given, is on no record. | Partly, and claimed | a told or handed-over fact nobody has |
| F4 Who will speak for me when I am not in the room? | [`champion`](../signals/champion.md), which claims F4 since this pass. | Answered | already assumes `own-rhythm` and `several-people` |
| F5 Why is that person invested, and what would make them look good? | Nothing reads it, and nothing should: the reason someone is invested is a fact only they or you hold, kept as a told `relationship-note`. `champion` reads the behaviour that follows from it. | Answered by asking | nothing |
| F6 Are they discovering the best fit with me, or running a process on paper? | [`steps-on-their-side`](../signals/steps-on-their-side.md), since the twenty-second pass: steps moving without you is a process being run, no steps moving while the talking goes on is a buyer still deciding. Both off the same arithmetic. | Answered | the told `buying-process`, which the seller fills |
| F7 Have they put me in front of the people I asked to meet? | [`missing-people`](../signals/missing-people.md) for who is still unreached, and [`they-owe-you`](../signals/they-owe-you.md) since the twenty-fourth pass for the promise they made and have not kept. The two halves, in two reads. | Answered | nothing |
| F8 What has the buyer not done yet on their side? | [`steps-on-their-side`](../signals/steps-on-their-side.md) over [`buying-process`](../assemblies/buying-process.md), since the twenty-second pass, and it says **no sign of** rather than **not done**, which is the only honest form the answer has. | Answered | the told `buying-process`, which the seller fills |
| F9 What did I promise, or leave on the back burner? | [`loose-end`](../signals/loose-end.md), which claims F9 since this pass. | Answered | `thread-under-way` |
| F10 How long since anyone spoke, and was there a deadline behind the silence? | [`time-to-reconnect`](../signals/time-to-reconnect.md) watches the silence and [`deadline-they-gave`](../signals/deadline-they-gave.md), since the twenty-fourth pass, watches the clock. A quiet fortnight before a committee sits is not a quiet fortnight in August. | Answered | nothing |
| F11 How many times has anyone from my firm reached out? | [`enough-tries`](../signals/enough-tries.md), in full since the twenty-third pass: it reads `firm-contact` too and adds `colleague-touches-on-record` to `times-you-chase`. A person who has had four approaches has had four. | Answered | nothing |
| F12 What has my firm already done here, and what was said? | [`colleague-already-in-touch`](../signals/colleague-already-in-touch.md), which claims F12 since this pass. | Answered | `own-firm` |
| F13 What did we do the last time we sold into one like this, and what did it save them? | [`delivered-before`](../signals/delivered-before.md), which **claims F13 in part** since the twentieth pass: the deals of this shape you really sold, and how recently. What a sale was worth to the buyer is on no record, and its body refuses to read a case study as a measurement. | Partly, and claimed | a told or fetched fact nobody has |
| F14 What has happened on this deal in the last two weeks, in a paragraph? | The brief, which [`library-format.md`](library-format.md) defers as a floor above the cards. It is the same record the cards are built on, summarised for somebody who is not selling. | Answered elsewhere, deliberately deferred | nothing |
| F15 Which of my fifteen live conversations needs me today? | The order of a day, the six bands by what waiting a day costs ([`modules/00-spine.md`](../modules/00-spine.md)). The same answer as Q21. | Answered elsewhere | nothing |
| F16 Which of their own priorities should my next message speak to? | [`lead-with-this`](../signals/lead-with-this.md), in full since the twenty-first pass: it reads `published-picture` for their side, and `relevance-to-stated-factors` counts over it instead of over your own catalogue. | Answered | nothing |
| F17 How did I come by this person, and can I say so out loud? | [`warm-path`](../signals/warm-path.md), in full since the twenty-third pass, over [`where-it-came-from`](../assemblies/where-it-came-from.md). Every door now, and the permission to say it travels with the provenance. | Answered | nothing |
| F18 Am I pulling this deal into my quarter rather than theirs? | [`pushing`](../signals/pushing.md), first shape, which claims F18 since this pass and now says in its body that your own quarter is the commonest source of a manufactured date. It never needs to know your incentives: a date that is neither theirs nor a told price change is already manufactured however it got there. | Answered | `thread-under-way` |
| F19 Should my firm bid on this at all? | Nothing. `fit-match` judges the lead against the fit-shape, which is whether it is worth selling to, not whether the effort is worth spending. What it costs your firm to chase something is intent, and it belongs where discount room does, with the Brain. | Hole, and it is the Brain's | the goal's own economics, which nothing holds |
| F20 Who did I meet at that event, and what were they there for? | [`lead-list`](../channels/lead-list.md), since the twenty-third pass: the list, and one entry per name with what they were there for in their own words. `where-it-came-from` gathers it and `lead-with-this` reads it for the line a first message opens on. | Answered | nothing |
| F21 Which of the people I spoke to years ago is ready now? | [`time-to-reconnect`](../signals/time-to-reconnect.md), which claims F21 since this pass, with `was-once-active` beside it on `champion-went-dark`. | Answered | `own-rhythm` |

### What running the third set found

Three things, and the first was a surprise.

**The holes are not about her firm.** The set was written because this seller has a firm around her
and the first two sellers do not, so the expectation was a family of colleague-shaped holes. There
is one, F11, and it is small: two counts exist and nothing adds them. The real cluster is **the
buyer's side**, F1, F6, F8 and F16, and none of those is about firms at all. They are about reading
what the buyer publishes and knowing what their own decision takes, and the patient seller in
`sales-questions.md` would have wanted both. They were missed for the same reason everything else
in this map was missed: nobody asked.

**The library reads the seller's side of a relationship and not the buyer's.** Every gather above
the raw data is keyed on what passed between you: a conversation, a deal, a document they sent you,
a person you both know. What the buyer says to the world, and how the buyer runs a decision, have
no floor. That is one channel's worth of ground already connected (`web`) and one told record that
does not exist (the shape of their process), and it would close four of the five holes.

**Two of the five are not holes to fill here.** F14 is the brief, a floor above the cards that
`library-format.md` already defers, and it is the same record read for a different reader. F19 is
intent: what it costs your own firm to chase something is the Brain's, beside discount room and
"several goals at once". Naming them as such is the point of the map.

**On the partial verdicts.** Eight questions have a read that reaches part of the way. None of those
reads claims the `F` id today, because a read that answers half a question should say in its own
body which half, and writing those lines is a pass rather than an audit. That is the first job in
the list below, the same move the first pass made for Q26 on `voice`.

## The holes, in seven families

Eleven holes when this was written (fourteen until 20 September, when V1 to V3 were put outside the
tool's scope; seven since the fourth pass the same day; five since the fifth, on 21 September, four
since the sixth, two since the eighth, one since the ninth and **none since the tenth**, all four
the same day), but not eleven separate pieces of work. They gather into seven families, and the right-hand column is the thing worth arguing about: **none of
them is about volume.** They were missed because one seller did not need
them, and they would serve the patient end just as well.

| Family | Questions | Is it about volume, or about any sale? |
|---|---|---|
| **Giving up, and what was turned down** | V5 (answered 20 September), V16 (answered 21 September) | **Any sale.** Giving up is everyone's, and doing it honestly is what separates patience from pestering. Since the ninth pass the library holds endings as well as attempts, which is what "turned down before" had to stand on. The choosing among many (V1 to V3) that used to sit here is before a lead, outside the tool's scope. |
| **Reading what the buyer gives you** | V11, V12, V14 (all answered by 21 September) | **Any sale.** Until 20 September every channel in the library was the seller's own account, and what a buyer hands over (accounts, budget papers, a brief, a specification) had nowhere to land. [`channels/handover.md`](../channels/handover.md) gathers it, as an envelope and, since 21 September, as the figures a document states, and no more. [`document-set`](../assemblies/document-set.md) reads the envelope, [`figures-on-record`](../assemblies/figures-on-record.md) the figures. What a document's own labels mean, by kind and by country, is the part still not written. |
| **Whether they can bear it** | V13 (a read since 20 September; makeable since 21 September, when the term became a told field) | **Any sale.** A council whose budget cannot take it this year is the same read as a merchant who cannot carry a second repayment. |
| **A catalogue rather than one product** | V15 (answered 21 September) | **Any sale.** The library supported a seller with exactly one thing to sell, which is most sellers and not all of them. Since the tenth pass `offering:` is a list, an offering is one thing on one set of terms, and the same product from two suppliers is two entries because the terms and the buyers they will take are the supplier's. |
| **Being believed, and not pushing** | V17 (in part 20 September, in full 21 September), V19, V18 | **Any sale**, and this is where the tool's own rules live. It forbids pushing and insists every message names the gift; since 20 September a read says what a thread can honestly carry, and the draft is written inside it. |
| **After the sale** | V20, V22, V21's other half (all three answered 21 September) | **Any sale.** Renewals, repeats and referrals are where a relationship pays off, and until the eighth pass the ladder ended at the signature. It no longer has to: a gather keyed on a deal past the sale rung stands on what already existed, and the three reads are honest about the one record nobody has, whether the money arrived. |
| **Colleagues** | V4 (answered 21 September) | **Any sale**, wherever there is a firm. The library assumed a seller with nobody else in their firm; now a read says who at your firm was in touch before you, from the records a firm shares, and since the eleventh pass the vocabulary has the word for it, `own-firm`. |

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
- ~~What each count counts.~~ Done in the twenty-eighth pass. All 134 are written. The merge pass
  was considered and not done: the three closest pairs are two things each, and each says so.

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
shares. That is the CRM (the first gather to draw from [`channels/crm.md`](../channels/crm.md)),
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

**Done in the seventh pass, 21 September.** The second scenario's world, and a third lens.
[`scenarios/pmf/world/`](../../scenarios/pmf/world/) is a broker placing merchant cash advances: ten
businesses with one owner each, two people on the seller's side (a rep and a processor, and nobody
sure where the line between them falls), and four funders with a box each. Its `cards/` was empty on
purpose until the fourteenth pass, and the build is clean with `SCENARIO` set to either world. Three things in it are the
point. Its **ladder runs past the sale**, eight rungs, the trade's six (interested, applied,
submitted, offers in, accepted, funded) and then repaying and coming round again, because a ladder
that stops at the signature could never show the after-the-sale hole. Its `connected:` names
**sms, web-form, handover and crm for the first time**, so the floors laid in the third and
fifth passes are finally plugged in by a seller; Calendar, Meet, Drive, Contacts and LinkedIn are
not, and `goal.md` says why for each. And its Pricing fills **the term and how it is paid**, the
two told fields added in the sixth pass, which at this end are never empty. The documents are the
ones the trade names: the signed application, three bank statements for the last three months, and
stipulations on request. `documents.md` says the thing worth noticing, that "three statements for
the last three months" is two facts and a handover request carries only one of them. *(The names,
the businesses and the funders are fiction, as a scenario is by design; the shape of the trade is
first-hand, from [`what-pmf-told-us.md`](../../scenarios/pmf/docs/what-pmf-told-us.md).)* Beside it,
the third question set, [`firm-questions.md`](firm-questions.md), `F1` to `F21`, read out of
[`what-cority-told-us.md`](../../scenarios/cority/docs/what-cority-told-us.md); `build.js` parses it
from the same "The list" heading as the other two, so a signal can claim an `F` id today. Seven of
the twenty-one are questions neither other set asks. Running this map against them is the next
thing on the list and has not been done.

**Done in the eighth pass, 21 September.** After the sale, the family the ladder itself was in the
way of. One new gather, [`since-the-sale`](../assemblies/since-the-sale.md), keyed on a deal
standing on a rung the ladder puts after the sale, drawing on what already existed: the deal, the
deal record for the stage and the close date, your target list for where a deal stands when there is
no CRM, the offering's told pricing for the term and how it is paid, the figures the buyer's
documents show, and what they have handed over since. **Where the sale's completion comes from was
the decision**, and the answer is that it is fetched from the CRM or told by you, the same two
places every other rung comes from, and **never deduced**: not from a signature in an attachment,
not from a payment, not from the words "we're going ahead". A contract that arrives through the
handover is a document, and rule 5 of *What is never read* says a document is proof of nothing.
*(My reason, not yet yours.)* Three reads stand on it, all in People, all `assumes: []`, because
what they need is a rung on a ladder rather than a shape of sale.
[`coming-round-again`](../signals/coming-round-again.md) (V20) reads how far through the term a
deal is against the customer's own interval between purchases, and is not made at all where no term
was told. [`payments-faltering`](../signals/payments-faltering.md) (V22) reads an agreed payment
missing from the periods their later documents cover, what they have said about paying, and what
the CRM was told; money in per period is context for a word they said and never a finding on its
own, because a quiet month read as a missed payment would be a verdict on the person.
[`customer-introduction`](../signals/customer-introduction.md) (V21's other half) is `warm-path`
one rung later, and withholds itself entirely while anything is outstanding either way, however
good the name. **The honest rule underneath all three**: nothing after the sale is on record for
the patient example, whose ladder ends at full adoption, so for that seller the gather is empty and
the reads are silent rather than invented. And no channel in the library carries your own bank,
your firm's ledger or a funder's, so whether an agreed payment arrived is on no record at all. That
is a missing channel, named not faked, and a different hole from the public register. Seven new
counts, all `defined: false`; two existing ones gained a second reader
(`money-in-by-period`, `target-cold-to-you`), which narrowed the second one's undecided `over` to
one candidate without settling it. Fourteen of the 22 are now answered by a read, one by asking,
two in part, two by nothing, and three are out of scope. The assumptions count: 16 reads assume
nothing, 8 `thread-under-way`, 9 `own-rhythm`, 2 `several-people`; so 24 of the 34 can be made on a
live thread with no history, and 10 cannot.

**Done in the ninth pass, 21 September.** Outcomes, the floor the library had never laid. Nothing
in it held what came of anything: every rung read a sale in progress, and a deal that finished
looked exactly like a deal that had gone quiet. **Where an ending lives was the decision**, and the
answer is that it is raw data on the same floor as a fetched email, arriving by the two routes that
floor already has. Told: a new record on [`told/people-told.md`](../told/people-told.md),
`deal-outcome`, where you say which deal ended, how (you sold it, they went elsewhere, they did
nothing, you withdrew), when, who decided and the reason they gave. Fetched: a new record on
[`channels/crm.md`](../channels/crm.md), `deal-decision`, the same fact where a deal system holds
it, and it is a record of its own rather than two more fields on the deal for two reasons: a
decision is not always the buyer's, and one deal can carry several of them, which is how a broker's
tool holds every funder's offer and decline against one application. **An ending is told or
fetched, never deduced**, the rule the eighth pass set for the completion of a sale, extended to
the other three ways a deal can finish: not a loss out of silence, not a win out of a warm word,
not an ending out of a card nobody acted on. The told outcome is also a third, plainer route into
[`since-the-sale`](../assemblies/since-the-sale.md), which had only a CRM stage and a rung on your
target list; a rung says where a deal stands and an outcome says that it finished and on what day.
Where the outcome does **not** hang is `since-the-sale` itself: that gather is keyed on one deal
that completed, and endings are read across deals and include the ones that never completed, so
they are their own pile. That pile is
[`deal-outcomes`](../assemblies/deal-outcomes.md), the first gather in the library keyed on no
single subject, which needs no new machinery: a count names it in `over:` exactly as a per-person
count names `person-history`. What makes two deals alike is the told fit-shape and nothing else,
because it is the only place a seller has said what kind of buyer this offering is for; where it is
empty, "one like this" means nothing and the reads say so. Two reads stand on it, both in
Offerings, both `assumes: []`, because what they need is a record that fills up rather than a shape
of sale. [`turned-down-before`](../signals/turned-down-before.md) (V16) reads the refusals among
deals of this shape and the reasons in the words they were given in; it is not a forecast, a buyer
is not the last buyer, and it never corrects a stated reason with a truer one nobody recorded.
[`delivered-before`](../signals/delivered-before.md) (V17's other half) is the plain fact that you
have sold this before and how recently, which is the third honest answer to a stranger beside
giving them what they asked for and showing them the shelf; it says nothing about how the delivery
went, because sold is not the same as glad. The endings are **not** feedback on a card, which story
ch. 9 covers and the told `correction` already carries in part: a card's outcome is about the
tool's own bets, a deal's is about the sale, and only the second is written. Five new counts, all
`defined: false`. Sixteen of the 22 are now answered by a read, one by asking, one in part, one by
nothing (V15, the catalogue), and three are out of scope. The assumptions count: 18 reads assume
nothing, 8 `thread-under-way`, 9 `own-rhythm`, 2 `several-people`; so 26 of the 36 can be made on a
live thread with no history, and 10 cannot. *(My reasons, not yet yours.)*

**Done in the tenth pass, 21 September.** The catalogue, and the last hole in the second set.
`world/goal.md` carried `offering:` as one id and [`offering-entry`](../assemblies/offering-entry.md)
was written for one product, so the library supported a seller with exactly one thing to sell.
`offering:` is a **flat list** now, read by `build.js` as one or several, refused empty, and one
entry stays valid: the patient example has `[bops]` and reads exactly as it did.
**Which shape the catalogue is was the decision**, because two shapes exist in real selling:
several products, and one product from several suppliers on different terms. They are modelled the
same way, one entry each, because what a read compares is the fit-shape and the price, and on a
brokered sale both of those are the supplier's rather than the product's. A lender who will not
take this trade and a lender who will are two different answers to the same buyer, and a second
rung to hold the product behind them would buy nothing any read consults. The cost is named rather
than hidden: the pitch, the use-cases and the worries repeat across such entries, and nothing
shares them yet. [`offering-told.md`](../told/offering-told.md) gains a `Supplier` record, who is
behind an entry and what you have to do to put a buyer to them; empty means it is yours. The
broker's world now lists four offerings, one per funder, each funder's box being that entry's
fit-shape, which is the scenario the seventh pass wrote it for. Above the entries, one gather,
[`catalogue`](../assemblies/catalogue.md), the second in the library keyed on no single subject.
One read on it, [`where-this-one-goes`](../signals/where-this-one-goes.md) (V15): `fit-match` run
across the shelf instead of once, with two new counts and the two fit counts gaining a second
reader. **Where it lives is the part worth arguing with.**
[`modules/03-offerings.md`](../modules/03-offerings.md) had parked ranking across offerings with
the Brain as intent, and that holds for half of it: which of them you most want to sell depends on
the goal and on how hard you will push, and it stays parked beside the Brain's own question about
several goals at once. It does not hold for which of them would have this buyer at all, which is
the told box against the lead's facts, done before anybody is asked what they would like to sell.
So the qualifying half is a read in Offerings and the wanting half is still the Brain's; module 03's
open question says so now. The read never ranks on what you earn, and
[`cost-of-each-to-them`](../counts/cost-of-each-to-them.md) says why a count for it is deliberately
absent. With one entry there is nothing to choose between and the read is not made, rather than
declaring the only thing you sell a winner. **Every one of the volume seller's 22 now has an
answer**: seventeen by a read, one by asking, one in part (V10), three out of scope, and none by
nothing. The assumptions count: 19 reads assume nothing, 8 `thread-under-way`, 9 `own-rhythm`, 2
`several-people`; so 27 of the 37 can be made on a live thread with no history, and 10 cannot.
*(My reasons, not yet yours.)*

**Done in the eleventh pass, 21 September.** The five small decisions the earlier passes raised and
left open, none of which is a new question and all of which were blocking a read from standing
straight.

- **A channel for public records**, [`public-records.md`](../channels/public-records.md): a charge
  registered against a business, a judgment, a filing, and where they stand on a credit scale.
  `source: builtin`, because nobody plugs in a companies register: the tool asks it a question
  about one organisation and carries the answer back, the same shape as the open web. No provider
  is named, as with the CRM, SMS and the web form. It carries its own *What is never read*: never
  a verdict on the person, never certain the entry is them, never assumed current, never a read
  about their trade. [`figures-on-record`](../assemblies/figures-on-record.md) draws the charges,
  one new count counts them, and [`existing-commitments`](../signals/existing-commitments.md) is
  no longer short of public records: "to whom" now reaches past what the buyer chose to show you,
  with the date and the identity match said out loud rather than assumed.
- **A told list of the names in the field**, on
  [`offering-told.md`](../told/offering-told.md). It is Offerings' rather than People's or the
  Organisation's for two reasons: it is knowledge about the market an offering sells into, which
  Offerings already owns through the competitor field, and it must hold for a seller with nobody
  behind them, so it cannot live in the optional module. It is what turns a payee on a statement
  into a name that means something, and
  [`repeated-outgoings-to-one-payee`](../counts/repeated-outgoings-to-one-payee.md) now counts a
  run to a name you said is a lender apart from a run to a name nobody recognises.
- **Consent to text**, on [`sms.md`](../channels/sms.md) and not on the handover: whether you may
  text a number at all is a state of that channel, not something the buyer hands over, and the
  opt-out arrives as a text like any other. It carries how the consent was given, because it comes
  either from the provider's own list or from a tick on your form. **No read uses it yet**, and
  the doc says so: `disclosure-still-owed` reads what must be said on a thread, not what must be
  held before one starts, and which words a trade forbids in a text is the organisation's fence to
  state.
- **A stretch of time on both sides of a handover.** "Three statements for the last three months,
  not from a year ago" was always two facts and the envelope carried one. `handover#document-request`
  can now ask for a period and `handover#handed-over-document` can say what it covers. Both are
  **envelope** facts, which is the point: which months a statement is for is written on its face,
  so [`missing-documents`](../signals/missing-documents.md) tells "not sent" from "sent, for the
  wrong months" without the inside layer being read, and the fifth pass's separation holds. Where
  you asked for no period, nothing is checked: the tool does not decide for itself how far back a
  sale should look.
- **`own-firm`, the fourth word in `assumes:`**, in `build.js`, `reading-principles.md` § 4,
  `library-format.md`, `templates/signal.md` and `CLAUDE.md`, declared on
  [`colleague-already-in-touch`](../signals/colleague-already-in-touch.md), which the sixth pass
  wrote and could not label. `several-people` is about the buyer's side and nothing said anything
  about yours. Used solo, the honest output is that there is nobody here to have been in touch, not
  that nobody has.

Two new counts, both `defined: false`. No new read and no question's verdict changed, except that
V12 is no longer "short of public records". The assumptions count: 18 reads assume nothing, 8
`thread-under-way`, 9 `own-rhythm`, 2 `several-people`, 1 `own-firm`; so 26 of the 37 can be made
on a live thread with no history, and 11 cannot. *(My reasons, not yet yours.)*

**Done in the twelfth pass, 21 September.** The two worked-example docs moved.
[`flow.md`](../../scenarios/bops/docs/flow.md) and
[`how-modules-collaborate.md`](../../scenarios/bops/docs/how-modules-collaborate.md) now live at
`scenarios/bops/docs/`, beside [`scenario-councils.md`](../../scenarios/bops/docs/scenario-councils.md),
which went there in the sixth pass. All three are worked through the BOPS goal from end to end, so
they were the last of the example sitting in the general layer. Moving them was the choice over
rewriting them: prose written as a walkthrough of one goal does not become general by having the
names taken out, and a walkthrough with no example left is not worth reading. Each now carries a
line at the top saying it moved and that its paths are read from `library/`. `library/docs/` holds
seven docs now, all of them general. Nothing else changed: the two still use the dropped Expand
vocabulary and the old cast names, and both already said so in their own first lines. One broken
link fixed on the way, `scenario-councils.md`'s pointer at `assemblies/deal.md`, which the sixth
pass's move had left one folder short. *(My reason, not yet yours.)*

**Done in the thirteenth pass, 21 September.** The map run against the third set, `F1` to `F21`,
which the seventh pass wrote and left unaudited. The table is above, in *The firm seller's 21*,
with a paragraph on what it found. The short version: five answered by a read, one by asking,
eight in part, two elsewhere, five by nothing, which is much the worst of the three sets. **The
surprise is that the holes are not about her firm.** The set exists because this seller has a firm
around her and the other two do not, so a family of colleague-shaped holes was the thing to expect;
there is one, F11, and it is two counts that do not meet. The real cluster is the buyer's side, F1,
F6, F8 and F16: what the buyer publishes about itself, and what a buy at that kind of organisation
actually takes. The library reads the seller's side of a relationship and not the buyer's, because
every gather above the raw data is keyed on something that passed between you. Closing four of the
five would take one channel that is already connected (`web`, read about the buyer rather than
about the offering) and one told record that does not exist (the shape of their process). Two of
the five are not holes to fill here: F14 is the brief, a floor above the cards that
[`library-format.md`](library-format.md) already defers, and F19, whether your firm should bid at
all, is intent and belongs with the Brain beside discount room. Five reads claimed an `F` id they
plainly answered and did not hold: `champion` (F4), `loose-end` (F9),
`colleague-already-in-touch` (F12), `time-to-reconnect` (F21) and `pushing` (F18), the same
"omission to fix" the first pass made for Q26 on `voice`. `pushing` also gained the line the Cority
note asked for, that your own quarter is the commonest source of a manufactured date, and why the
read never needs to know about your incentives to catch it. The eight partial verdicts claimed
nothing: a read that answers half a question should say in its body which half, and that is a pass
rather than an audit. **The count of holes in this library is a count against three sets now.**
*(My reasons, not yet yours.)*

**Done in the fourteenth pass, 21 September.** Ten cards for the second scenario, and the first
test of the library from above rather than from the side. Every pass from the eighth to the
thirteenth added or audited entries against **question sets**, and no world had exercised any of
them: `where-this-one-goes` needs a seller with several offerings and only PMF has one;
`colleague-already-in-touch` needs a firm; the register, the period check and the after-the-sale
reads had never produced a card. [`scenarios/pmf/cards/`](../../scenarios/pmf/cards/) now holds ten,
nine Acts and an Ask, one per business on the ladder, chosen so that between them they stand on
`missing-documents` (with the period check), `where-this-one-goes` with `turned-down-before` and
`delivered-before` supporting, `disclosure-still-owed`, `payments-faltering`,
`coming-round-again`, `customer-introduction`, `can-they-carry-it` with `uneven-income`,
`buying-intent`, `loose-end` and `existing-commitments`. They build clean.

**What writing them exposed**, which is the point of the pass and is worth more than the cards:

- **Nothing gathers a text conversation.** [`conversation-history`](../assemblies/conversation-history.md)
  and [`person-history`](../assemblies/person-history.md) draw from `gmail` and `slack`, and
  [`sms`](../channels/sms.md) is still drawn from by nothing, which the third pass said and nobody
  has felt until now. At this end **text is the conversation**, and Slack is not connected. So every
  read standing on those two gathers is blind here: `loose-end`, `buying-intent`,
  `disclosure-still-owed`, `pushing`, `blocker`, `warming`, `one-sided` and the rest.
  [`act-errol-application`](../../scenarios/pmf/cards/act-errol-application.md) is the proof: a
  merchant said yes by text on Friday, and the card can only be **a hunch** resting on a line the
  seller typed, because the conversation itself is unreadable. This is the largest single hole the
  library has, and no question set found it. A card did.
- **`disclosure-still-owed` cannot reach the price it is about.** The build refused the card until
  the claim came out: the read gathers the fence, the conversation and the deal, and none of them
  reaches `offering-told#pricing`. So the one read whose job is to say "they are about to agree and
  the cost is not on record" cannot state the cost. The card names it in *Still unclear* rather than
  pretending.
- **No read reaches a live deal's funder answers.** `crm#deal-decision`, written in the ninth pass,
  holds the offers and declines against a deal, and only [`deal-outcomes`](../assemblies/deal-outcomes.md)
  reads it, for deals that have **ended**. So "an offer came back and nobody has told the rep",
  which the trade calls the moment to raise alarms, has no read at all.
  [`act-tony-offers`](../../scenarios/pmf/cards/act-tony-offers.md) can only say that a promise was
  made and not kept, and says outright that it cannot tell you what came back.
- **No read says a deal has just completed.** Completion is fetched or told and never deduced,
  which is right, but nothing turns it into news. The `funded` rung in this world got no card for
  that reason, and News remains the one kind with no card in either scenario.
- **A card that names what to send rests on the evidence shelf**, `proof-library`, which lives in
  Drive. At this end Drive is not connected and almost every document is the buyer's, so
  [`act-paula-disclosure`](../../scenarios/pmf/cards/act-paula-disclosure.md) rests on a shelf that
  does not exist in its own world, and the build does not notice, because a gap row is added for a
  signal's `needs` and not for a trail that runs into an unconnected channel.
- **The order of the day is a patient seller's.** Asked to place these ten, `build.js` put a
  faltering repayment first and an unseen funder's offer third. At an hours tempo, an offer nobody
  has passed on is the thing that costs most by waiting. The bands are the Brain's and this is not
  a bug in them, but it is the first evidence that what waiting a day costs is not the same
  question at both ends of the spectrum.

Nothing was fixed in this pass on purpose: the cards were written to find out, and changing the
rungs in the same breath would have hidden what they found. Every item above is work, and the order
is mine. *(My reasons, not yet yours.)*

**Done in the fifteenth pass, 21 September.** The first thing the cards found, fixed, and the loop
closed to prove it. [`conversation-history`](../assemblies/conversation-history.md) now draws on
`sms#text-conversation`, `sms#text-message` and `web-form#form-submission` beside mail and Slack,
and [`person-history`](../assemblies/person-history.md) on the two text records. That is all it
took. `sms.md` had said since the third pass that "a conversation by SMS is `thread-under-way` in
every sense a mail thread is", and for two days nothing drew on it, because until a card was
written at the fast end nobody could feel the absence.

**Two decisions inside it**, both mine. A **text conversation is the same kind of thing as a mail
thread**, keyed on the other number and hung on the same timeline, rather than a parallel gather of
its own: a seller does not hold two histories with one person, and every read above would have had
to remember to consult both. And **a form submission is the first turn of the conversation**, not a
record off to one side: it is the earliest thing a lead said in their own words, so it belongs at
the head of the timeline where a read will find it without being told to look. Neither channel went
into any signal's `needs`, on the same grounds that `gmail` is not in one: these are the ordinary
ways people talk, not extra sources a read leans on, and listing them would have put a data-gap
line on every patient-sale card for a channel that sale has no use for. *(My reasons, not yet
yours.)*

**What it bought, measured rather than asserted.** Rebuilding the broker's ten cards:
[`act-errol-application`](../../scenarios/pmf/cards/act-errol-application.md) went from **a hunch** to
**sure**, because the yes it rests on stopped being a line the seller typed and became the
merchant's own words on record, and it moved up the day from seventh to sixth.
[`act-tony-offers`](../../scenarios/pmf/cards/act-tony-offers.md) now cites the text in which the
promise was actually made rather than a mail that never existed.
[`act-curtis-funder`](../../scenarios/pmf/cards/act-curtis-funder.md) can cite the enquiry he came
back through. The patient scenario is untouched, as it should be: it connects neither channel, the
gathers simply find nothing there, and its cards' confidence is exactly what it was.

Four of the fourteenth pass's six findings remained after the fifteenth, three after the sixteenth, two after the seventeenth and one after the eighteenth. The one left is the order of the day, which is not a hole in a rung.

**Done in the sixteenth pass, 21 September.** The second thing the cards found, fixed.
[`disclosure-still-owed`](../signals/disclosure-still-owed.md) reads
[`price-position`](../assemblies/price-position.md) now, and quotes the two numbers
[`can-they-carry-it`](../signals/can-they-carry-it.md) already worked: `your-price` and
`cost-to-them-over-the-term`. The read that holds a close can state the cost instead of only
saying it is unsaid.

**The decision inside it**, mine. The read needed your told price and there were two ways to
reach it: `offering-entry`, the whole product card, or `price-position`, which gathers that one
price and lays it beside the field. `price-position` won, for the reason a precedent is worth
more than taste here: `can-they-carry-it` already reaches the price that way, and it is the
assembly both price counts say they count within, so the join holds without moving a count's
`over`. The rivals' half of that gather is simply unread by this signal, which costs nothing.
`offering-told` went into the read's `needs`, beside `handover` on `can-they-carry-it` and
`offering-told` on `existing-commitments`: a price you have not told it is a told gap, and the
read should say so rather than go quiet. *(My reasons, not yet yours.)*

**What it bought, measured rather than asserted.**
[`act-paula-disclosure`](../../scenarios/pmf/cards/act-paula-disclosure.md) stops saying it cannot
reach the price. It now states the shape of what an advance costs, a factor rate over a term taken
as a daily debit, and the draft carries it. What is left in *Still unclear* is a different thing
and a smaller one: not the shelf price, but **what Kestrel actually answered on this deal**. That
is the next item on this list, and the card now points straight at it. Confidence is unchanged at
**likely**, because what the firm requires to be said is still nobody's written rule.

**What it did not fix.** A price band is not a figure. Where a supplier answers a live deal with
terms of their own, those are the numbers owed and the shelf price is not them; the read says the
shape and marks the rest as the seller's to fill. That is honest and it is not finished, and it
finishes with the funder's-answer read below rather than here.

**Done in the seventeenth pass, 21 September.** The third thing the cards found, fixed, and the
first entry in the library written against a **job** rather than a question.
[`decisions-so-far`](../assemblies/decisions-so-far.md) gathers every answer recorded against a
deal that is still running, and [`answer-came-back`](../signals/answer-came-back.md) reads the gap
between an answer landing and the buyer hearing it. Four counts under it: `answers-back`,
`since-an-answer-landed`, `still-out-with-someone` and `told-them-since`.

**Three decisions inside it**, all mine. A **new gather rather than a wider `deal`**: `deal` is the
membrane a conversation makes, and an answer from a party who is not on the conversation does not
belong inside it. The new one is the live twin of [`deal-outcomes`](../assemblies/deal-outcomes.md),
keyed on one deal where that is keyed on none, and an answer that ends a deal is in both. A **told
twin**, `people-told#answer-received`, because without one the read works only for a seller with a
deal system connected, and the patient scenario has none; it is per answer, like the CRM's record,
and deliberately not a widening of `deal-outcome`, which is about endings. And **`answers: []`**,
which no other signal in the library carries. It answers no question in any of the three sets, and
that is the finding rather than a defect: the sets are sellers' questions to themselves, and nobody
asks "has something come back that I have not passed on" because at every desk a person is already
doing it. A question set records what a seller notices they do. It cannot record what they do
without noticing. *(My reasons, not yet yours.)*

**What it bought, measured rather than asserted.**
[`act-tony-offers`](../../scenarios/pmf/cards/act-tony-offers.md) was a card about a promise you made
and had not kept, which could not say what the promise was about. It now rests on
`answer-came-back` with `loose-end` **supporting**, and it says what came back, from whom, when,
and that nothing is still out. Its confidence went from **sure** about your own words to **sure**
about four answers on the deal record: the same word, a better card under it. The world had the
fact all along, in one line of
[`scenarios/pmf/world/organisations.md`](../../scenarios/pmf/world/organisations.md); for two days the
library could not reach a fact the fiction had already written down.

**What it did not move, which is the useful part.** The card is still **third** in the broker's
day, behind a faltering repayment and a disclosure. It is not sureness and it is not the band: all
three are in band 2, and the tie-break that puts it third is "the organisation further up the
ladder first" ([`modules/00-spine.md`](../modules/00-spine.md)). So the day is ordered by how far
along a deal is, and an answer that landed this morning loses to a deal that is simply further on.
That is the sharpest evidence yet for the open item below: every band weighs how long something has
been **ageing**, and this is the one read in the library whose trigger is something **arriving**.
Fixing it is a change to the order of the day, not to this read, and the order of the day is the
user's.

**Done in the eighteenth pass, 21 September.** The last two things the cards found, and the News
kind's first card in either scenario.

**A completed sale is News, and News rests on a record.** Every other kind of card names the read
it stands on, and that join is what stops a card floating. News has no read to name: an outcome
with nothing to do carries no opinion, and a read invented to wrap one would decide nothing. So a
News card names `rests` instead, the records that say the outcome happened, resolved by `build.js`
and used as the card's reach when its *Sources* are checked. It rests on the record floor, lower
than any other card, which is what it is.
[`news-fenwick-funded`](../../scenarios/pmf/cards/news-fenwick-funded.md) is the card, and what earns
it one is not that the news is good: it is that the tool's watching on that deal **stops**, and the
seller is owed the list of what it will no longer raise. It lands in band 6, costs nothing to wait,
second from last in the broker's day, which is where a fact with nothing to do belongs.
*(My reasons, not yet yours.)*

**A card that names what to send must be able to fetch it.** The other half of the same finding.
A card with `documents:` rests on the evidence shelf, whose files come from a channel; where the
scenario has connected none of them, the build now writes the gap row itself. It fires on exactly
one card today, [`act-paula-disclosure`](../../scenarios/pmf/cards/act-paula-disclosure.md), whose
draft was promising an attachment it could not produce and no longer does.

**The blanket version was tried and rejected, with the measurement.** The fourteenth pass asked
for a gap row on any trail running into an unconnected channel. Measured against the library as it
stands, that rule would have put a row on **twenty-two of the patient scenario's twenty-five
cards**: almost every one of them reaches `sms` and `web-form` through
[`conversation-history`](../assemblies/conversation-history.md), which is a hole the fifteenth pass
dug on purpose and whose reasoning explicitly refused this ("listing them would have put a
data-gap line on every patient-sale card for a channel that sale has no use for"). A gather that
touches an unconnected channel finds nothing there, which is fine. A **promise** to attach
something is different in kind, because the card has claimed it. That is the line the check is
drawn on. *(My reason, not yet yours.)*

All six of the fourteenth pass's findings are now closed except the last, the order of the day,
which is not a hole in a rung and is listed below as bigger than a step.

**Done in the nineteenth pass, 21 September.** The join the sixteenth and seventeenth passes made
possible between them, and neither could make alone.
[`disclosure-still-owed`](../signals/disclosure-still-owed.md) now reads
[`decisions-so-far`](../assemblies/decisions-so-far.md) as well, and quotes `answers-back`. So the
read fills the disclosure from **the terms actually answered on this deal** where a party who had
to agree has come back with them, and falls back to the shelf price where none has.

The order is the decision, and it is not a preference. A buyer is owed the cost of the thing they
are agreeing to. Where a supplier has set terms for them, the shelf price is a description of the
product and not the cost of their deal, so quoting it as though it were would be a confident wrong
answer in a message whose whole purpose is to be exact. Where nothing has been answered, the band
is honest and the read says that is what it is quoting. `crm` went into the read's `needs` with
`offering-told`. *(My reason, not yet yours.)*

**What it bought.** [`act-paula-disclosure`](../../scenarios/pmf/cards/act-paula-disclosure.md) went
from a card that could name the shape of a cost to one that states it: $80,000 advanced, $102,400
back over twelve months, $400 every working day, off Kestrel's own recorded offer, in the draft
that goes to her. Its *Still unclear* is down to two lines and both are real: what the firm
requires to be said, which nobody has written down, and whether anything moved between the offer
and the contract, which the tool would not see. Its confidence stays **likely**, correctly, because
sureness is earned from the weakest thing a card stands on and the firm's rules are still unwritten.

**It is also the argument for the habit.** Neither pass could have done this on its own: the
sixteenth gave the read a price and the seventeenth gave the library a live deal's answers, and the
join between them only became visible because a card was sitting there saying what it still could
not do. Six passes of adding entries against question sets produced nothing like it.

**Done in the twentieth pass, 21 September.** The eight partial `F` ids claimed. The thirteenth
pass left them unclaimed on purpose, on the grounds that a read answering half a question should
say in its body **which half**, and that writing those lines is a pass rather than an audit. Seven
reads now carry them: `F2` and `F7` on [`missing-people`](../signals/missing-people.md), `F3` on
[`competitive-standing`](../signals/competitive-standing.md), `F10` on
[`time-to-reconnect`](../signals/time-to-reconnect.md), `F11` on
[`enough-tries`](../signals/enough-tries.md), `F13` on
[`delivered-before`](../signals/delivered-before.md), `F16` on
[`lead-with-this`](../signals/lead-with-this.md), `F17` on [`warm-path`](../signals/warm-path.md).

The verdicts in the table above do not change: eight are still answered in part, and the count of
the third set stands at five by a read, one by asking, eight in part, two elsewhere and five by
nothing. What changes is that the partial half is now **claimed and described** rather than sitting
in this document only. The library page shows a read's questions, so a seller browsing
`enough-tries` now finds, under it, that it counts their own tries and not their firm's.

**Two of the eight sharpened into something worth doing** while the lines were being written, and
both are in the list below rather than done here. `F7` cannot be finished by widening
`missing-people`: reading whether they put you in front of the people you asked for means reading a
promise **they** made to **you**, and no read in the library does that; `loose-end` runs the other
way. That is a read of its own and the table now says so. And `F10`'s missing half is not a count
that does not exist, it is a read that does not: a buyer's own date, running down while nobody
writes. The count it would stand on, `dated-facts-in-their-words`, exists already and is pointed
the other way, at stopping a date being invented. *(My readings, not yet yours.)*

**Done in the twenty-first pass, 21 September.** What the buyer says about itself, which is the
first gather in the library keyed on nothing of yours.
[`published-picture`](../assemblies/published-picture.md) holds one organisation's own published
words: the passage, where it is, when it was published, and whose words they are.
[`stated-priorities`](../signals/stated-priorities.md) reads it, over three counts:
`priorities-they-state`, `how-fresh-their-words-are` and `said-by-them-or-about-them`. F1 goes from
a hole to answered.

**The split is the decision.** The buyer's words live in the module that owns the buyer, and the
matching against what you sell stays in Offerings. So `stated-priorities` names the passages and
stops, and [`lead-with-this`](../signals/lead-with-this.md) reads the same gather for the buyer's
half and its own told use-cases for yours. That closes F16 in full, one pass after the twentieth
claimed half of it. *(My reason, not yet yours.)*

**The sharpest thing it found was already in the library.** `relevance-to-stated-factors`, the
count under `lead-with-this` labelled "fits what they said matters to them", had `over: []` with
two candidates: `offering-entry` and `objection-list`. Both are yours. A count about what the
**buyer** said, counting over your own catalogue, is not a count that could ever have meant
anything, and it sat there for days as the plainest evidence that what a buyer publishes had
nowhere to live. It now counts over `published-picture`, and its `over` is marked `decided` rather
than `provisional`, the second count in the library to reach that state honestly.

**The distinction that makes it usable** is whose words a passage is. A search tool's synthesised
answer is the tool's sentence, not the organisation's, however well it reads, and a trade piece is
a journalist's. Both are worth having and neither can be quoted back to a buyer as their own. The
sorting is by who **published**, not by who wrote, because who published is a fact and who wrote
usually is not; that under-claims what can be quoted rather than over-claiming it, which is the
safer error. And where an organisation has published nothing the read is silent rather than falling
back on what the sector generally wants, because a sector's priorities in a buyer's mouth is
exactly the manufactured relevance [`pushing`](../signals/pushing.md) exists to stop.
*(My reasons, not yet yours.)*

**What it bought, measured rather than asserted.**
[`act-lisa-strategy`](../../scenarios/bops/cards/act-lisa-strategy.md) has been quoting page 12 of a
council's strategy since it was written, with nothing under it: it rested on `time-to-reconnect`
and `one-sided`, neither of which reaches a published document, and the `web` row in its *Sources*
passed the build only because `time-to-reconnect` happens to need the web for a fresh reason to
write. It now names `stated-priorities` as a supporting read and quotes two of its counts, so the
line it is built on has a floor. This is the first pass whose card test landed on the **patient**
scenario, and it found the same shape the broker's cards did: a card saying something the library
could not reach.

**Done in the twenty-second pass, 21 September.** The buyer's own process, which is the question
the third seller says no system answers. `people-told#buying-process` is the told record: what a
buy at **this kind of buyer** takes on their side, keyed on the fit-shape.
[`buying-process`](../assemblies/buying-process.md) lays those steps against one deal's record and
[`steps-on-their-side`](../signals/steps-on-their-side.md) reads which of them nothing has been
seen of, over four counts. F8 and F6 both close.

**The form of the answer is the decision, and it is the whole pass.** The read says "I have seen no
sign of these three", never "they have not done these three". Work inside a buyer's organisation is
mostly invisible from outside: a case can be written, circulated and approved without one line of
it reaching you. So a step with no sign and a step not taken look identical from here, and a read
that announced the second off evidence that can only support the first would be wrong often and
insulting when it was. It always suggests asking, and the answer is a told fact it keeps. Its
confidence is never high, and for once that is a property of the question rather than of the
evidence: the read grades on how **visible a step is by nature**, so a committee date somebody has
to tell you is close to a fact and a business case nobody would ever send you is close to a guess,
and it says which kind each one is instead of averaging them. *(My reasons, not yet yours.)*

**Two smaller decisions.** The steps hang on the told `fit-shape`, because that is the library's
only vocabulary for "buyers like this" and `deal-outcomes` already groups by it; the size of a buy
shapes a process as much as the buyer does and a fit-shape does not carry size, so the record names
the offering where the same buyer buys differently by size. And the tool supplies **no** buying
process of its own, not even a sensible generic one, because a process it invented would be
indistinguishable to the seller from one they described, and the whole worth of this rung is that
it is theirs.

**The card it produced is an Ask, and that is the point.** A told record nobody has filled cannot
produce an Act. [`ask-buying-process`](../../scenarios/bops/cards/ask-buying-process.md) is the tool
asking for the list, and writing it made the read sharper than writing the read did: the card has
to say what it has already caught the shadow of (a procurement window at one council, a committee
somebody mentioned at another), admit it does not know whether that is two of four or two of nine,
and promise in its own words never to say a council has not done something. Story ch. 1's "early on
the tool mostly asks" is not a stage the tool passes through. It is what a new told rung looks like
on its first day.

**Done in the twenty-third pass, 21 September.** The two lead-shaped holes, and a fourth place the
tool learns from.

**The two try counts meet.** [`enough-tries`](../signals/enough-tries.md) reads
[`firm-contact`](../assemblies/firm-contact.md) now and adds `colleague-touches-on-record` to
`times-you-chase`. A person who has had four approaches has had four, and it makes no difference
to them which desk each one came from. It still assumes nothing and still needs no new source:
where there is no firm the second number is zero and the read is exactly what it was. A `needs`
entry means a check drops out when the source is missing, and here nothing drops out, so `crm` and
`slack` stayed off it. F11 closes.

**A list handed to you is the fourth home.** [`lead-list`](../channels/lead-list.md), `source:
firm`, the way [`handover`](../channels/handover.md) is `source: buyer`: names somebody at your
firm hands you, from a stand, a campaign, a territory, a bought list. Two records, the list and the
entries on it, and no opinion about whether a name is worth anything, because choosing among many
candidates is outside the tool's scope and a list is a set of leads that have arrived rather than a
pool to rank. Beside it `people-told#lead-source` for every other door, and
[`where-it-came-from`](../assemblies/where-it-came-from.md) gathers them into one answer per
person. F17 and F20 both close.

**The permission is a field, never an assumption.** Knowing where a lead came from is not
permission to say it. A person who handed over their badge at a stand expects to hear from you; a
bought list is usually the opposite. The record carries it, the gather keeps the two together, and
no read will put a provenance into a draft the list has not cleared. A first line that says where
you got somebody, wrongly, is the most expensive sentence in a cold approach. *(My reason, not yet
yours.)*

**The card test found the hole in the pass itself.** Written as planned, `where-it-came-from` had
exactly one reader, [`warm-path`](../signals/warm-path.md), whose trigger needs a bridge. So for
every lead that did **not** arrive by introduction, the provenance would have been gathered and
never read: the same shape as `sms.md` sitting undrawn-from for two days, caught this time before
the commit rather than after. [`lead-with-this`](../signals/lead-with-this.md) takes the gather
too, for the line a first message opens on, which is the read whose job that actually is.
[`act-marisol-list`](../../scenarios/pmf/cards/act-marisol-list.md) is the card: a name off a trade
show list in August that nobody has written to, opening on what she said at the stand, with the
list's own clearance to say where it came from. The broker's world said a lead can come "from a
list somebody else worked" from the day it was written, and until now nothing could hold one.

**Done in the twenty-fourth pass, 21 September.** The two reads the twentieth pass turned up while
writing its "which half" lines, which is the whole argument for having written them.

**[`they-owe-you`](../signals/they-owe-you.md)**, the mirror of
[`loose-end`](../signals/loose-end.md). Every promise read in the library ran one way, what you owe
them, and a promise the **buyer** made to you had nowhere to live: "I'll get you in front of our
head of service", "I'll take it to the board this month". It reuses three of the loose end's four
counts unchanged, because it is the same arithmetic with the speaker swapped, and adds
`their-promise-undelivered`. F7 closes.

**Two things about it are not the mirror.** What closes a promise is usually not a message: a
promised introduction closes when a new name appears on a thread, so the scan looks for the thing
promised rather than for an acknowledgement. And the softening is much harder than the loose end's,
because a buyer has no reason to be precise about their own side. "I'll see what I can do" is
politeness and "I'll send it Friday" is a promise, and most of what a buyer says sits between them.
The read also never suggests a chase on its own: a buyer who has not done a thing they said they
would do is usually busy, occasionally stuck, and sometimes has been told no inside their own
organisation, and none of those is improved by being reminded that they promised. *(My reasons, not
yet yours.)*

**[`deadline-they-gave`](../signals/deadline-they-gave.md)**, which watches a date the buyer stated
come closer. It quotes `dated-facts-in-their-words`, the count that already existed on
[`pushing`](../signals/pushing.md) pointed the other way, and adds `time-to-their-date`. The two
reads use one count for opposite purposes, which is the plainest evidence the count is the right
shape: `pushing` counts the buyer's own dates so you cannot invent one, and this counts them so you
cannot miss one. What counts as "short" is the goal's tempo and never a number: at an hours tempo a
week is a long way off, and on a multi-year sale six months is the last moment to start. F10
closes.

**What it bought, measured rather than asserted.** Both cards that needed these reads were already
written and standing on nothing.
[`act-holbrook-window`](../../scenarios/bops/cards/act-holbrook-window.md) has been saying "Holbrook
told you in July that anything for this year has to be in by 16 October" with no read beneath it
that could reach a date the buyer gave; it names `deadline-they-gave` now and says how many working
days are left and how much of the run-up has gone.
[`act-felton-director`](../../scenarios/bops/cards/act-felton-director.md) rests on `they-owe-you` and
its own line, "this is a hunch more than a read", turns out to be exactly what the new read
predicts: her words were loose, so it grades down hard. That is the third card in four passes that
was saying something the library could not reach, and all three were found the same way.

**Done in the twenty-fifth pass, 21 September.** `assumes:` became a checked join.
`world/goal.md` carries `has:` now, what this sale has, from the same four words a read declares in
`assumes`, and `build.js` refuses a card that rests on a read the sale cannot make. `bops` has all
four; `pmf` has three, because one owner per business means there is nobody else to win over.

**A refusal, not a gap row**, and that is the decision. The distinction is one
[`reading-principles.md`](reading-principles.md) § 4 already draws and nothing had enforced: a
missing **source** leaves a read standing with less to go on, so the card names it and carries on,
which is what the data-gap rows do. A missing **condition** leaves the read not applying at all, so
there is nothing for the card to rest on and the card should not exist. Two kinds of gap, two
different consequences. *(My reason, not yet yours.)*

**It refuses nothing today, and that was worth measuring before building it.** Run against the
library as it stands, every card in both scenarios passes: the broker's cards only ever assume
`thread-under-way`, and the patient scenario has all four words. So this is a guard for the next
scenario rather than a fix for a present bug, and the honest way to report it is that it caught
nothing. What it does change today is that each world now **declares** what its sale has, in one
line, where before that fact lived only in the prose of a goal and in the heads of whoever wrote
the cards. The third scenario is where it earns its keep: a seller with a firm around her and no
coalition at the buyer is a different `has:` again, and the build will say so on the first card
that forgets.

**Done in the twenty-sixth pass, 21 September.** The last of the fourteenth pass's six findings:
the order of the day was a patient seller's.

**What was actually wrong was not the bands.** Asked to place the broker's cards, `build.js` put a
faltering repayment first and an offer nobody had passed on third, and the easy reading is that the
six bands are tuned for a patient sale. They are not: all three cards were in **band 2**. The fault
was one line below, in the first tie-break inside a band, which is "the organisation further up the
ladder first". A band asks **what waiting a day costs**. The ladder asks **what a deal is worth**.
Both are worth asking and only the first is this list's question, so asking the second before the
first had finished was the one place the order stopped answering its own question. *(My reading,
not yet yours.)*

**The fix is a principle, not a knob.** Inside a band, what somebody is **waiting on you for** now
comes before the ladder: the same question the band asks, one level down. The test for it is what
the card already carries, the `OWED` counts, which gained `told-them-since` in the same breath,
because an answer that has landed and not been passed on is the same shape as a promise you have
not kept. `their-promise-undelivered` was deliberately left out of that list: that is them owing
you, and waiting a day on it costs a day of somebody else's lateness rather than of yours.

**Measured both ways.** The broker's offer moved from third to **first**. The patient seller's day
came out **identical, card for card, all twenty-six**. That is the result a rule should give and a
tuning would not, and it is the reason to prefer the tie-break fix over widening the bands or
making them read the goal's tempo, which were the other two candidates and would both have moved
days nobody complained about.

**Done in the twenty-seventh pass, 21 September.** The third scenario, and the first real test of
the reads written for a seller with a firm around them.
[`scenarios/cority/`](../../scenarios/cority/) now holds a world and seven cards, built on the
interview note that has sat in its `docs/` since the seventh pass. It is the patient end again,
eighteen to twenty-four months and several people to win, with the two things `bops` does not have:
**a firm around the seller** and **a formal process on the other side**.

**What it exercises that nothing had.** `firm-contact` is full here rather than nearly empty,
because every contact by anyone is in the CRM, so
[`colleague-already-in-touch`](../signals/colleague-already-in-touch.md) produces a card at last:
your business development rep ran six touches at an account in June and nobody told you, and the
move is to say so before the buyer does.
[`enough-tries`](../signals/enough-tries.md) produces the card the twenty-third pass made possible
and no world could show: nine touches at one account, seven of them your rep's and two yours,
counted together, and the move is to ask him to stop. That card could not have existed three passes
ago. `people-told#buying-process` is filled for the first time, so
[`steps-on-their-side`](../signals/steps-on-their-side.md) makes a card rather than an Ask. And
`lead-list` carries a real list: a name off a conference spreadsheet with his own words against it
and the clearance to say where you got him.

**It is also the first world with no data-gap rows at all.** Eleven of the fourteen channels are
connected, including LinkedIn, which the patient scenario names as a gap on four cards. Every read
that has been half blind in `bops` is whole here, and the cards show what the library looks like
when nothing is missing. The three it does not connect are SMS, what the buyer hands over and
public records, each for a stated reason: nobody texts at this end, and what a buyer sends you here
is a tender, which is out of scope and which the trade already has tools for.

**The build refused a card, as it should.** The tender card cited the CRM in its *Sources* and
nothing it rested on reached one: `deadline-they-gave` reads the thread and the deal,
`stated-priorities` reads what the buyer publishes, and neither goes near a deal system. The row
became the bid channel in the workspace, which is where the fact actually lives. That is the check
the whole library is built around, catching a plausible sentence written by somebody who knew the
world and not the trail.

**What writing it found, and nothing was fixed in the same breath.**

- **A dated card is band 4 whatever the distance.** A clarification window closing in eight working
  days and a date six months off are the same band, because `ownBand` asks only whether a date
  exists and whether it is tomorrow. Nothing between "tomorrow" and "weeks away" is graded. The
  twenty-sixth pass said the bands were sound and the tie-break was the fault, and that was true of
  the complaint it answered; this is a different one, from the other end of the spectrum, and it is
  about the bands. Unlike the tie-break there is no principle that says which card should win, so
  it is named here rather than decided. *(My reading, not yet yours.)*
- **A shared list has nowhere to record who has worked which name.**
  [`lead-list`](../channels/lead-list.md) holds the list and the entries; when marketing sends the
  same spreadsheet to six people, nothing says who has written to whom, which the card
  `act-ian-vanbrugh` names in its own *Still unclear* because it cannot do better.
- **The brief is asked for a third time.** The manager sees a stage and a one-line next step for
  fifty reps and messages on a Friday asking where a deal is. That is F14, deferred as a floor
  above the cards, and this world makes it concrete rather than theoretical.

**Done in the twenty-eighth pass, 21 September.** The counting floor, which had been deliberately
empty since 18 September. All **134** counts are written: `defined: true`, with `counts` (the
arithmetic in one line), `needs` (the records the sum is done over, which the build walks) and
`breaks` (when the number stops meaning anything). Every `over: []` is resolved and every
`over_status: provisional` is now `decided`, because writing what a count counts is what made the
question "which gather does it count within" answerable at all.

**Three rules did most of the work**, and they are worth more than the 134 entries.

- **Unknown is its own column.** A fit factor with no evidence either way is not a factor missed.
  Folding unknown into missed is how every scoring tool ever built turns "we have not looked" into
  "they are wrong for us", and `fit-factors-met` and `fit-factors-missed` hold three columns each
  for that reason.
- **Where a number could be read two ways, the count hands over the evidence and the read grades
  it.** The passage from a call, the words of a promise, the kind of proof behind a claim of
  authority. A count that returned a verdict would be a signal wearing a number's clothes.
- **Existence and quality are different questions, so they are different counts.**
  `claims-grounded-count` says whether anything backs a claim; `proofs-per-claim`, `proof-recency`,
  `named-vs-anonymous-reference` and `third-party-vs-self-asserted` say what it is worth. A read
  can then say "there is nothing at all" differently from "there is something thin", which are
  different cards.

**The build made six counts move.** A count must count within an assembly **every** signal quoting
it reads, and six had been given the obvious gather rather than the true one. The four channel
counts (`accepts-meetings`, `replies-by-channel`, `reply-speed-by-channel`, `where-they-start`)
moved onto your history with a **person**, because the question they answer is about the person and
not about a thread. `new-attendee-on-event` and `prior-history-scan` moved onto the account's
standing map, and `shared-contact-on-thread` onto your history with the bridge, which is where what
makes a bridge worth anything actually lives.

**The merge pass was considered and not done.** The deferral note said some counts should probably
merge or go. Written out, the three closest pairs turned out to be genuinely two things each, and
each now says so in its own body: `times-you-chase` is the whole thread and
`chases-since-their-last-reply` is the current run; `reply-gap-vs-own-rhythm` is a reply
outstanding and `how-long-quiet-vs-own-rhythm` is a relationship gone quiet;
`grounding-kind-required` is about a claim you make and `proof-required-kind` about a worry they
raise. No count is quoted by nothing. *(My readings, not yet yours.)*

**One thing it closed that nobody had counted on.** The `open-items` widget carried
`waits_on: counts`, because none of the three counts under it could say which assembly it counted
within, so it reached no record and its rows were read off each card's prose. All three can now, so
it reaches twenty-two records, and the build refused the whole library until the `waits_on` line
came out. That is the ladder working in the direction it was built for.

**Renamed on the user's asking, 21 September.** The `salesforce` channel is now `crm`, and its
record is `crm#deal-record`. The reason is the user's and is the same one that moved `connected:`
out of the channel docs on 20 September: a rung of the general library should not carry one
seller's stack. Salesforce, HubSpot, Pipedrive and the opportunity tool a broker's own firm runs
differ in what they call a field and agree on what a deal record holds, and the library needs the
second. So the `Source` column is a plain note now rather than an API name, the way
[`sms.md`](../channels/sms.md) and [`web-form.md`](../channels/web-form.md) were already written,
and 01-integrations no longer lists "a CRM beyond Salesforce" as a provider that might join next.
The same question stands unasked about Gmail, Calendar, Drive, Contacts and Meet, which are
vendor-named for a seller who might be on Outlook; that is a bigger rename and nobody has asked
for it.

**Then, in order.** The order of the reads is mine, from the scope decision above. *(My reason, not
yet yours.)*

- ~~**Write the remaining reads**, each declaring its `assumes:`.~~ Done. After the sale, in the
  eighth pass (V20 to V22); outcomes and the two reads over them, in the ninth (V16, and V17's
  other half). Counting over a group turned out to need no new machinery, as expected: an assembly
  gathers the group and a count names it in `over:` exactly as a per-person count does. The two
  things left open here, the public records channel and the fourth word in `assumes:`, were both
  done in the eleventh pass.
- ~~**Decide about a catalogue** (V15).~~ Done in the tenth pass. `offering:` is a list, an
  offering is one thing on one set of terms, and the read that places a lead across the shelf is
  Offerings'. It changed a shape rather than adding an entry, so it is the pass most worth the
  user's disagreement.
- **What the fourteenth pass found, in order.** These come before the list below, because they are
  holes under reads that already exist rather than reads that do not. *(My order, not yet yours.)*
  - ~~**Gather a text conversation.**~~ Done in the fifteenth pass, and it moved a card from a
    hunch to sure.
  - ~~**Let `disclosure-still-owed` reach the pricing**, so the read that holds a close can say what
    the cost is rather than only that it is unsaid.~~ Done in the sixteenth pass, and finished in
    the nineteenth, when the read took the terms actually answered on the deal in front of the
    shelf's band.
  - ~~**A read for a funder's answer landing**, over `crm#deal-decision` on the deal in hand rather
    than on ended deals. It is the trade's own alarm and nothing rings it.~~ Done in the
    seventeenth pass, and it answers no question in any of the three sets.
  - ~~**Decide whether a completed sale is News**, which would give the News kind its first card in
    either scenario.~~ Done in the eighteenth pass. It is, and News rests on a record rather than
    on a read.
  - ~~**Make the build notice a trail that runs into an unconnected channel**, not only a signal's
    `needs`.~~ Done in the eighteenth pass, narrowed to what a card promises to send. The blanket
    version was measured and rejected: it would have put a row on 22 of the 25 patient cards.

- ~~**Run this map against the third set** (`F1` to `F21`).~~ Done in the thirteenth pass. What it
  left behind, after the above:
  - ~~**Claim the eight partial `F` ids**, each with a line in the read's body saying which half it
    reaches.~~ Done in the twentieth pass. Two of them sharpened while being written: F7 needs a
    read of the promises **they** made to you, which nothing does, and F10 needs a read that
    watches a buyer's own date come closer, on a count that already exists.
  - ~~**Read the buyer's own published words.**~~ Done in the twenty-first pass. `published-picture`
    gathers them, `stated-priorities` reads them, and `lead-with-this` takes the gather for the
    buyer's half of F16. F1 and F16 are both answered.
  - ~~**The shape of their process**, a told record nobody has.~~ Done in the twenty-second pass.
    `people-told#buying-process`, the `buying-process` gather and `steps-on-their-side`, which says
    "no sign of" and never "not done". F8 and F6 both close.
  - ~~**Add the two try counts together** (F11).~~ Done in the twenty-third pass.
  - ~~**Where a lead came from** (F17, F20).~~ Done in the twenty-third pass. `lead-list` is the
    channel, `people-told#lead-source` the told twin for every other door, `where-it-came-from` the
    gather, and both `warm-path` and `lead-with-this` read it.
- ~~**Turn `assumes:` into a checked join.**~~ Done in the twenty-fifth pass. `world/goal.md` carries
  `has:` now, from the same four words a read declares in `assumes`, and `build.js` refuses a card
  that rests on a read the sale cannot make. It refuses nothing today, which is the honest way to
  report it: `bops` and `cority` have all four words and `pmf` has three, so it is a guard for the
  next world rather than a fix for a present bug.
- ~~**Clear the BOPS names out of the general rungs.**~~ Done 21 September, as far as the list went:
  `buying-intent` no longer turns on a procurement lead (the person who holds the budget, and who
  signs off); the council examples in `modules/00-spine.md`, `02-relationships.md` and
  `03-offerings.md` are generic; "a date in a tender" is "a date they put in writing" in
  `templates/card.md` and `reading-principles.md`; "procurement pattern" is "buying pattern" in
  `objection-list.md` and `offering-entry.md`; the stale `modes:` lines are gone from the five
  modules; and `scenario-councils.md` lives beside its scenario, at
  `scenarios/bops/docs/`, with its two companions pointing there. `docs/flow.md` and
  `how-modules-collaborate.md` moved beside their scenario in the twelfth pass, at
  [`scenarios/bops/docs/`](../../scenarios/bops/docs/), which was the choice between moving them and
  rewriting them: they are worked through the example on purpose, so the honest fix is to put them
  where the example lives rather than to generalise prose that was never meant to be general.
  `kind: deal-movement` stays: it is a family of read, not a council word. What it left behind is in
  the open list below, where a crossed-out line cannot hide it.

**Done in the twenty-ninth pass, 22 September.** The first person worked from both ends, and the
first time a world held records rather than one line of prose. `scenarios/bops/world/records.md`
holds what the seven connected channels would carry about Karen Hughes: forty-seven messages on
twelve threads with dates, senders, lengths and reply delays, two calendar events, one Meet
record, three Drive files, four contacts, one web find, and what the seller has and has not told
the tool. Every count under the reads her cards rest on was then run by hand, every read's trigger
tested against the numbers, the seller's live questions written down in his terms, and only then
were the three cards opened. The record is `scenarios/bops/docs/karen-hughes-pass.md`.

**What the two ends found at the card.** Three of the six reads the cards named do not fire on her
records and came off: `one-sided` (she opened nine of twelve threads and you have never chased
her), `warmth-fading` (reply length down on two replies, friendly words flat, no call to hear) and
`new-stakeholder` (no new name at Bramley since April). Two reads the cards never named do fire
and one is now on: `champion`, on her history through August, which is the ground "cooling
champion" presupposes and never checks. Three figures on the main card were numbers the world could
not produce: fifteen messages, copied from the template's worked example and impossible beside nine
of twelve threads; twenty-eight days, which landed the day before the meeting she is said to have
gone quiet after; and "about a day" as her usual, which is reply speed, a count under `champion`,
where the read she rests on lists the reply gap, a different number with a different answer
(fifteen working days against a usual of four or five). All three cards now say what the counts
give, and their `signal_status`, `supporting_status` and `counts_status` are `decided`.

**The count doing two jobs is wired.** `who-starts-threads` counts who opens the threads and
whether that has changed, and only the balance reads used it. `cooling-champion` lists it now, for
the second half. What running it showed is that its summary window, three months, dilutes a change
of four weeks to three of five against nine of twelve, while its rows carry the fact plainly: the
only thread since the meeting is yours. *(My reason, not yet yours.)*

**Six things the counts said about themselves**, recorded and not fixed: `reply-gap-vs-own-rhythm`
says "gap between their replies" where a card will always want the reply delay too, and the two
are different counts under different reads; `innocent-explanation-scan` names calendar status
events and free/busy, which are not visible for a contact outside your organisation, and an
auto-reply only comes back if you have written; `promise-made-undelivered` has no rule for a
promise re-made, so one promise is two rows; `days-open-vs-own-rhythm` measures a thread's pace
and a three-message thread has none, when the person's pace, one working day, was in a different
count; `cooling-champion` never establishes the champion; and `reply-length-vs-own-rhythm`'s last
month can rest on two replies, which its own `breaks` line says is nothing.

**Proposed and not built.** A card may not state a figure the world does not carry, checked by
`build.js` the way Sources rows are. It would have caught three figures on one card. It needs a
records section per person and only one person has one, so building it today would fail
twenty-five cards for a reason that is not theirs. The user's call.

**The cold account.** Before any of this, `purpose-read.md` was written without reading this
map, the story or `tracing-back.md`, and then compared. Three things it needs that the library has
no rung for: who is who (every count stands on it, nothing holds how sure a match is), the tool's
own history (what it suggested and what you did with it, which "not the same reason twice" needs),
and the step from a read firing to a card existing, which the design log gives to the Brain and
nothing writes down. On Karen every read that fires makes a card, so that step cost nothing here.
Two things the library has that the account cannot justify: Connect as a kind of card, and rule 5
of the reading principles as the gate on whether a read may exist. Those are for the user.

**Done in the thirtieth pass, 22 September.** What the tool can connect at all, which the library
had never held. Every fact about connections was the seller's (`connected:` in a world's
`goal.md`); the user's list of what the tool can actually offer today is a different fact with
different consequences, and it now lives on the Connections module as `can:`: the Google accounts
(Gmail, Calendar, Drive, Contacts, Meet), Slack, the open web and a CRM, beside everything told.
LinkedIn, SMS, the web form, public records, what the buyer hands over and a handed list stay in
the library as channels, because a read has to be able to name the gap, and none is on offer.

**Three consequences, measured before building.** With everything told always available, three
reads are silent today, because every count under them needs what a buyer hands over:
`uneven-income`, `existing-commitments` and `missing-documents`, all written for the fast end and
never used in the patient world. Two run thinner: `can-they-carry-it` and `payments-faltering`.
Thirty-seven are whole. The build now marks each read's standing and prints the three numbers.
The council world's `connect-linkedin` card went, because a card must not ask a seller for what
the tool cannot do, and the build refuses any Connect card that does; the Connect kind has no card
in any world now, which is the cold account's doubt about it made concrete. The broker's world
connects four channels beyond the list and Cority's three; neither is refused, because a scenario
is an exploration, and the build names them when it runs.

**Then silence, the same day, on the user's word** ("the library for now shouldn't reason based on
those"). Naming a held-back channel as a gap was not enough: it still sat in every gather, count
and read, and the pyramid still drew it. So the built library now reasons only over what is on
offer. The records of a held-back channel leave every gather, every count and every read; a count
with nothing left to count is silent, a read whose counts are all silent is silent, and the build
refuses a card that rests on either or quotes the count. Six channels are held back today:
LinkedIn, SMS, the web form, public records, what the buyer hands over and a handed list. The
four council cards that named LinkedIn as a gap no longer mention it. The broker's and Cority's
worlds say in `explores:` which held-back channels they pretend, for that world only, and the
build names the pretence; a `connected:` beyond `can:` without it is refused. The channel docs
stay in the folder for the day they can be offered. Story ch. 3 carries the list in the user's
words.

**Done in the thirty-first pass, 22 September.** The second and third people worked from both ends,
Gary Pearson and Rachel Gill, who share one thread at the council furthest along. The record is
`scenarios/bops/docs/westmoor-pass.md`. The world now holds thirty-two messages on eight threads
for Gary, one call and three messages for Rachel, and one more name in the cast, because a read
that needs colleagues brought in cannot fire on a world that shows one. Their four cards are
`decided`, which makes seven of forty-five.

**What the two ends found at the card.** Three reads came off: `warming` on Gary (one count
moves, and the read needs more than one) and `understanding-gap` on both of Rachel's cards (her
question was never answered, so it cannot have been misunderstood). Two reads the cards never
named do fire and are on: `loose-end` under Gary's card, which is what the move actually is, and
under Rachel's peer-call card, where her question five working days old and asked twice is the
why-now. Champion moved from main read to supporting on Gary's card: it says why the answer
matters, not what the move is. Every day count on the four cards was calendar days where the
library counts working days, and one of Rachel's dates was a Saturday. And a draft claimed that
"most councils" do something one council did.

**A count that did not exist, found twice.** Gary's card quoted `ask-made-unanswered`, which
counts questions **you** put to **them**, for a question he put to you, and the enterprise world's
price card had done the same for a buyer's question about price. Nothing counted a question the
buyer asked that you have not answered, and the day's order rested on the wrong count because it
was on the owed list. `their-question-unanswered` now exists under `loose-end`, which has a third
shape; it is on the owed list; `ask-made-unanswered` is off it, because a question of yours they
have not answered is them owing you, the same shape as their promise. *(My reason, not yet
yours.)* This is the "read does not exist yet" outcome `NEXT.md` said would be the most valuable
thing the pass could find, and it was found by a card, not by a question set: the question it
answers, F9, was already claimed.

**Built: a card may not state a figure the world does not carry.** Proposed in the twenty-ninth
pass, agreed by the user and built here. `build.js` checks every card whose people have a section
in `world/records.md`: each number and each day-of-month in the card's prose, front matter lines
included, must appear in those sections, in the organisations, the documents or the goal. A date
is matched as a date and a number only against numbers that are not dates, so a fifteen cannot
hide behind the fifteenth. Each written section ends with a "What the counts give" table, where
the figures the counts compute are written beside the count, so that a computed figure is on
record as well as a raw one. Spans of seconds, minutes and hours are left alone: they are the
tool's estimate of your effort or a proposal, not a claim. Seven cards are checked today and
eighteen skipped, and a planted figure fails the build. The check is weak on small numbers and
says so in its comment.

**Five things the counts said about themselves**, recorded and not fixed: a customer's standing
offer to be a reference (on record since March) is on no count, because `customer-introduction`
counts names a customer gave you and needs LinkedIn; `objection-entry-exists` cannot tell "no
entry for this worry" from "nobody has told me any worries", and no Ask asks for them;
`who-starts-threads` lost the fact in its three-month summary window for the second person
running; `internal-advocacy-mentions` was being read off future intent, and held only because
three real claims were on the records; and a read can fire nine days before its card arrives,
because a card's `arrives` is the world's week and nothing says how the two relate.

**Done in the thirty-second pass, 22 September.** The fourth person worked from both ends, Neil
Chapman at Holbrook, whose two cards arrived on the same day. The record is
`scenarios/bops/docs/holbrook-pass.md`. The world now holds eleven messages on five threads and
four calls for him, and nine of forty-five cards are `decided`.

**What the two ends found at the card.** `time-to-reconnect` came off both cards, and it failed
both halves of its own trigger at once: he is inside his usual quiet (four weeks, against a
stretch that runs from two to six), and the fresh reason the card named was a file in your own
Drive, where the count that finds a reason looks only at what is published. The card was right
about the move anyway, because the move was a debt: he asked on 19 August how a customer did it
in stages, you promised a write-up the next day, and the note has been finished since the 11th.
The reconnect card is now a loose-end card, `sure` rather than `likely`, arriving on the 16th
rather than the 18th, and asking nothing. The window card moved from `buying-intent`, which only
softens to "showing interest" on one money cue and one timing question, to `deadline-they-gave`,
which is what its `sure` was always about: his date, in his words, with his reason. The two cards
stay two, the note on the 16th and the invite on the 18th, which is the spacing the card's own
prose asked for and its front matter could not express; the reasoning is in the pass file, and
the one-message alternative is recorded for Job 3.

**Three things the counts said about themselves**, recorded and not fixed: `time-to-reconnect`
needs the web and in the council world the web has nothing to say, so the two remaining cards on
it (Lisa Holmes's) are the next test; `time-to-their-date` is a figure true on a day, and a card
shows on a day that is not the world's today, which the figure table now carries and the build
does not know; and a promise concrete in its object and loose in its date ("let me write it up")
is counted and softened consistently by the count and the read, which is right and worth
saying.

**Done in the thirty-third pass, 22 September.** The shape of a message, which nothing in the
library reached. The account is [`message-shape.md`](message-shape.md). A message the tool drafts
has four parts in a fixed order, and each is filled from something the card already rests on: it
opens with the gift (what is owed; failing that a fresh reason or their own date; failing that the
angle; failing that there is no message, which is `pushing`'s refusal), it points only at what
exists, it asks at most one thing and often nothing, and it holds back what the rules forbid and
what nobody has said. The read that made the card decides what it points at; what is owed decides
the opening; the chase count, the kind of read and the goal's tempo decide whether it asks; the
told rules decide what it must and must not say; the voice decides only how it sounds. Which
count fills which part is arithmetic; the words are judgement.

**Where it lives.** On the card, as four rows under *The message*, in the Sources form: the part,
the words, and what it rests on. `build.js` checks each row's ground like a Sources row, with the
counts under `pushing` allowed on every draft as the envelope, and refuses a decided card with a
draft and no rows; a provisional card is counted and named. Not a rung (nothing is read off a
message), not a widget (the draft widget shows the draft), not a facet on every signal yet (the
account carries a table of what each writing read contributes, and a facet can follow once cards
have proved it). The phone does not show the rows: they are the draft's trail, the card's back.

**Tested on seven cards**, the ones decided from the records up. All pass. Writing the rows changed
three drafts: Gary's stopped claiming what "most councils" do; Neil's says the write-up was
promised and took too long, and asks nothing; Rachel's peer-call note says you have not answered
her. Twenty-six drafts on provisional cards have no rows yet. Q20's row above changed from
"answered elsewhere" to answered by the rows. Q25 stays a hole on the user's word.

**Done in the thirty-fourth pass, 22 September.** The fifth person worked from both ends, Lisa
Holmes at Burnham, chosen because both her cards rested on `time-to-reconnect` and her world, unlike
Neil Chapman's, holds a real published reason. The record is `scenarios/bops/docs/burnham-pass.md`.
Eleven of forty-five cards are `decided`, and every decided card with a draft carries its message
rows.

**What the two ends found at the card.** `time-to-reconnect` came off both cards, and it failed
on her the opposite way from Neil: he had the quiet and no reason, she has the reason and no
quiet (four weeks, against a usual stretch of six to ten). The read needs both and is right to;
it is written for a relationship that drifted for months, and nobody in the shipped world has.
After this pass it is on no council card. The reason to write on a live contact is
`stated-priorities`, which fires high on a dated intention in Burnham's own words on Burnham's
own site, and both cards now rest on it. `one-sided` came off too: three threads is no pattern,
and a quiet senior who answers everything within three days is not one-sided by any count.

**The match nobody makes.** The second card shows her what page 12 looks like in practice, a
customer fourteen months into doing it. The read that should make that match is `lead-with-this`,
whose count `relevance-to-stated-factors` matches your use-cases against their published words,
and this seller has no use-case tied to a kind of council. Q10 and Q12 are live and the read is
silent on your side. Read against the tool's own design later the same day, that is a gap in what
the tool can hold, not only in what one seller typed: the tool interviews the seller into an
eight-field profile of the offering (what it is, who it is for, the value, the price, the
competition, where it stands, the goal, other), all prose, and has no place for a use-case by
buyer type or an answer to a worry. `scenarios/bops/world/offering.md` holds that profile for
BOPS, drawn from the tool's own demo documents, and says which told records it fills. The card
makes the match by hand and says so. The build and
`message-shape.md` now let a message open on a priority the buyer published, beside a reason
published about them.

**Done in the thirty-fifth pass, 22 September.** What the tool needs to be told, for each of
the five things context can be captured for: the offering, the seller, the seller's organisation,
people and organisations, and deals. The user's point was that the current tool captures
something for each and could be wrong about what; the library can answer with what the reads
actually stand on. [`what-to-capture.md`](what-to-capture.md) walks every count's `needs` and
every read's gathers and sorts each told record into three degrees: in the arithmetic, in the
gather only, or read by nothing. For the offering the fit-shape carries ten reads and the
pricing seven, and three things the tool does not hold at all carry six, five and three: a
use-case by kind of buyer, a worry with its answer and the evidence it needs, and a proof tag.
For people, the four notes a seller most naturally types (relationship note, offline touch,
contact preference, correction) are gathered by thirty-five reads and summed by none, which is
either three counts to wire or three fields to stop asking for. The tempo, named in two reads'
prose, is now pulled by both. The document ends with what this says about what to capture.

**Done in the thirty-sixth pass, 22 September.** The sixth, seventh and eighth people worked
from both ends, Stephen Walsh, Shabana Akhtar and David Marshall at Felton, the first price
objection and the first test of the Offerings reads from the records up. The record is
`scenarios/bops/docs/felton-pass.md`. Thirteen of forty-five cards are `decided`.

**What the two ends found at the card.** `price-barrier` came off the price card: it reads your
price against named rivals' published prices and your discount room, and this world has none of
the three, because the profile says the competition is "do nothing for another year". Stephen
never compared you with anybody; he compared you with this year's budget. The read that says so
is [`can-they-carry-it`](../signals/can-they-carry-it.md), written for the volume seller's V13,
and it fires softly at a council on two sentences of his and the told price: the first read from
the second set to fire in the world the library came from. `blocker` fires on all three of its
parts and cannot name the worry, because no worry has ever been told, the same told gap Westmoor
found under `answer-gap`. `new-stakeholder` came off the director card, because nobody has
arrived and the director is the opposite of an arrival; `they-owe-you` fires there on a promise
the card had never mentioned, a call Shabana said in July she would set up, and the card now
says it once and holds it back from the draft. **The message shape grew by one opener**: a
message that answers a worry had no sanctioned opening, since nothing was owed, nothing was
published and the angle was not the point, so a worry in their own words, the two counts that
keep the passages, is now the fifth thing a message may open on, in `build.js` and
[`message-shape.md`](message-shape.md).

**What the counts said about themselves.** [`people-covered-vs-needed`](../counts/people-covered-vs-needed.md)
says the roles a decision needs are told and gathers no told record that holds them: in this
world they are in the profile's Customer field, `offering-told#fit-shape`, and the build refused
the card's source row that said so. The same map has no slot for a role off the told list, and
at Felton that is finance, the person the deal is stuck on.
[`repeated-objection-count`](../counts/repeated-objection-count.md) cannot tell one worry from
two, and Stephen's is two: the size of the number, then this year's budget. And the Pricing told
record has no place for a smaller first step's price: the partial rollout sheet is settled as a
quote the profile was never told about (`scenarios/bops/world/offering.md`), so `your-price`
gives the band and nothing smaller, and whether the partial rollout is a second entry on the
offering list, which "one entry is one thing on one set of terms" would say, is undecided.

**Done in the thirty-sixth pass, 22 September.** A sixth told source, the tool's own history:
[`told/history-told.md`](../told/history-told.md). Every card raised with the reason it gave, what
the seller did with it, the reason they gave when they said no, the edit between a draft and what
went out, and which Asks were answered. It is told in the one sense that matters, it comes from
the seller's side and no channel fetches it, and nobody types it. The cold account had named it
as the second thing the library had no rung for. Four things stand on it: "not the same reason
twice", asking once, the voice read, and the refining of the seller's settings from behaviour.
One count reads it today, the draft-to-sent edit distance under `voice`; the other three joins
are named in the file and left for a card to need them, per the habit at the end of `NEXT.md`.
The current tool holds half of it, the rejection with a reason. *(My reason, not yet yours: the
user asked whether it was a good addition and said to add it if I believed so.)*

**Done in the thirty-seventh pass, 22 September.** The ninth person worked from both ends,
Michelle Turner at North Ridley, the first run of the understanding reads from the records up and
the first cards whose day is fixed by an event in the calendar. The record is
`scenarios/bops/docs/north-ridley-pass.md`. Sixteen of forty-five cards are `decided`.

**What the two ends found at the card.** `understanding-gap` fires on both halves once the world
holds what the card had left out: Michelle asked in July how BOPS sits with the case system they
already have, was told, and the answer never reached the case-system team, who arrived on the
demo invite in September saying "migrating off". The repeat crossed two threads, and
[`re-asked-questions`](../counts/re-asked-questions.md) counted over one, so it now counts over
the person and the read reads the person's history for it. `lead-with-this` came off both cards
it was on: no use-case by kind of council has been told, so it has nothing to rank, and neither
of its counts could produce the brief's figures; the angle rests on `stated-priorities`, which
fires high on the council's own plan, and the opening slide on the misunderstanding. The
post-demo Ask rests on `new-stakeholder` and the data gap, as Rachel Gill's did, with
`missing-people` supporting because the two things to leave with are the map's two holes. The
message rows fit a brief as well as a note.

**What the counts said about themselves.** Nothing reads a meeting ahead: both Act cards take
their when from the invite, a record, and their what from a read, the first time the two have
come from different floors. A colleague's message naming who is coming and what they do placed
four of eight people and is read by no count; [`head-of-signature-scan`](../counts/head-of-signature-scan.md)
reads signatures, contacts and the web. What a thread keeps asking about, five of fourteen
messages on officer time, is counted only by [`things-they-asked-you-for`](../counts/things-they-asked-you-for.md)
under `pushing`, so no opening read can quote it. How your own demos went is read by nothing.
And a role off the told list again, the case-system lead, as finance was at Felton.

**Done in the thirty-eighth pass, 22 September.** Job 4 of `NEXT.md`, one card, two sellers,
taken to the sheet and no further: the phone is unchanged until the user has looked. The argument
is in `playbook/world.md`, "One card, two sellers" and "The week, cut two ways"; the sheet is
https://claude.ai/artifact/FmGVacehhSfDTJqxhLEsPM. Three things were written. First, what the
Profile's settings change on a card: coaching changes how much is said before you act (the lines
under the title, *What happened*, whether *The message* rows show on the phone, the lines said
back), fluency changes the words and never the content, and cadence changes the clock; the kind,
the title, the how-sure word, the reads, counts, records, Sources, the draft and its four parts,
the buttons and the order within a day are the same for everyone. A setting about how the tool
talks to you never touches what goes to the buyer. Second, Karen Hughes's main card, and then Michelle Turner's note before the demo, said straight,
as a marked section of the same file, `## Said straight`, with sub-heads naming the part each line
replaces; `build.js` lifts it off the card's sections and checks its figures against her records
like the rest of the body, so one card is checked once. Third, the week cut two ways by one
proposed rule, not built: **the unit the tool spreads over is the seller's sitting**, an hour, a
day or an afternoon; a card comes at the first sitting it is ready for, and only what would be
gone before the next sitting interrupts an off day. Run over the real cards for a seller who sits
down on Monday and Thursday afternoons, Wednesday brings two interruptions and Thursday thirteen
cards, which is where "a day can be too full for the time you have" (story chapter 10) bites.

**What running the rule found.** A card's `arrives` mixes two things: the day it became true and
the day the tool chose to show it, and only the first survives a change of cadence. The pass
read a fresh or dated card's day as real and a "this week" or whenever card's as the tool's own
spreading, redone across sittings; nothing in the frontmatter says which, and a `from` beside
`until` would. And the demo Ask is free the moment the brief is sent, which on a phone that works
in hours is before the demo: an Ask about a meeting should arrive when the meeting ends, by the
calendar, and no rule says so yet.

**Done in the thirty-ninth pass, 22 September.** The tenth and eleventh people worked from both
ends, Julie Barker and Sanjay Mistry at Moreton, the first run of `champion-went-dark` from the
records up and the first card written to somebody with no record at all. The record is
`scenarios/bops/docs/moreton-pass.md`. Seventeen of forty-five cards are `decided`.

**What the two ends found at the card.** The card leaned on a bounce and an automatic reply from
one address, which cannot both happen: a bounce is the server refusing, an automatic reply is the
mailbox answering, and the two counts under the read keep them apart on purpose. Settled as the
automatic reply, so `bounce-back-detected` came off, and the cast, the design log and the story
say auto-reply. `missing-people` was reached through no read the card named: "your only door
there just changed hands" is `rests-on-one-person` at nine of nine. The message had no
sanctioned opening: `message-shape.md` says a note after this read opens on the name the
auto-reply gave, and the build's list did not hold the count that keeps it, so
[`auto-reply-no-longer-with`](../counts/auto-reply-no-longer-with.md) is now a sixth kind of
opening, the name a departure notice handed you. The read's `assumes:` is decided: it fired
because `was-once-active` held on nine messages and a call.

**What the counts said about themselves.** A buyer's promise does not die with the buyer:
[`their-promise-undelivered`](../counts/their-promise-undelivered.md) keeps "I'll come back
once it has met" open past the notice that says she has left. The name a departure notice hands
on reaches no placing count: `prior-history-scan` and `head-of-signature-scan` sit under
`new-stakeholder`, which needs the name on a thread or an event, and a name inside the text of
an automatic reply is on neither, so the card reaches them through gmail and the web directly.
The origin gather does not read that door either, so `warm-path` has nothing to weigh and F17
is answered by hand. And a month in their words, "pushed to September", is kept by
`dated-facts-in-their-words` and counted down to by nothing, though it was the reason for the
note that came back.

**Done in the fortieth pass, 22 September.** The twelfth person worked from both ends, Darren
Cole at Tarlton, the first in this world you have never exchanged anything with and the first
run of `fit-match` and `stated-priorities` from the records up. The record is
`scenarios/bops/docs/tarlton-pass.md`. Nineteen of forty-five cards are `decided`.

**What the two ends found at the card.** Everything on record about Tarlton is a notice and a
PDF on its own portal, and both reads that fire read exactly that: the fit, two of three factors
met in their own words and one unknown, and the passages, dated and theirs. `buying-intent` came
off: the card was right that a tender is a buying signal and wrong about the count, because
`budget-or-procurement-entered` reads a conversation and there is none. `warm-path` came off with
it, a read that does not fire kept for its gate count, the Karen case again, so "cold" rests on
the told list now. `stated-priorities` was reached through no read the card named and is
supporting. The Ask about bidding is demand with no supply, and correctly so: F19 is the Brain's
and nothing holds the goal's economics, so the fit is what the card knows and a deal seed is what
the answer becomes, which the card now says. Both reads' `assumes: []` is decided, on an
organisation nobody has contacted.

**What the counts said about themselves.** A date the buyer published is counted by nothing:
[`dated-facts-in-their-words`](../counts/dated-facts-in-their-words.md) reads threads only, so
the two most consequential dates in this world, the clarification close and the tender close,
reach `deadline-they-gave` through no count, and the card's *when* rests on the web record
directly, as North Ridley's rested on the invite. The firm world's tender card did not meet this
because there the buyer said the date on a thread. The fit's unknown column is what the
clarification questions ask, and nothing in the library says a clarification is an unknown asked
as a fact. And the notice's rule of contact, portal only, answers Q9 and is read by no count.

**Done in the forty-first pass, 22 September.** The thirteenth and fourteenth people worked
from both ends, Nicola Shaw and Simon Ward at Ashworth, the first run of `enough-tries`,
`warm-path` and `colleague-already-in-touch` from the records up, the first card whose person
has never written a word, and the first note to a colleague. The record is
`scenarios/bops/docs/ashworth-pass.md`. Twenty-one of forty-five cards are `decided`.

**What the two ends found at the card.** The rest card rested on `one-sided`, "you are doing all
the work", which is true and cannot apply: that read needs a history to read balance across, and
Nicola Shaw has never replied once. The card was never about balance; it was about stopping,
which is `enough-tries`' whole job, and that read fired on four notes over fifteen weeks with an
empty scan at a patient tempo. `champion-went-dark` came off as a read kept for two zero counts,
and `warm-path` moved to the card it belongs to. That card's "one step" came off because
`intro-chain-length` cannot see a link stated in the workspace, `colleague-already-in-touch` was
reached through no read the card named, and the sure word dropped from "likely" to "a hunch",
because one line of Simon's is a reading of someone's words. The rest card's last-note draft
came off: it opened on the silence itself, which no opener sanctions, which `pushing` describes
and `enough-tries` says not to send, so the card is the one tap the design log called it. A note
to a colleague had no sanctioned opening either, so
[`colleague-touches-on-record`](../counts/colleague-touches-on-record.md) is a seventh kind of
opening: the contact a colleague has on record, in their own words. Four reads' `assumes:` are
decided.

**What the counts said about themselves.** Two counts under one read disagree about what a
link is: `mutual-contact-count` reads Slack and `intro-chain-length` reads Contacts and
LinkedIn, so a bridge can exist with no chain length. A colleague's offline contact reaches no
told record and is on record only if they happen to mention it somewhere shared, and then
without a date. The innocent-explanation scan is blind in two places on anyone outside your
organisation, their calendar and their job moves, which are the two commonest innocent
explanations, and the card says where it could not look.

**Done in the forty-second pass, 22 September.** The fifteenth person worked from both ends, and
the first who is not a buyer: Andrew Doyle, Head of IT at East Marston, the customer. The record is
`scenarios/bops/docs/east-marston-pass.md`. No card is about him or to him, which is the thing the
pass tested, and one card quotes him: the offer of a call to Rachel Gill rests on his words of 4
March.

**What the records said.** His offer to take reference calls has sat on a thread for six months,
never taken up and never asked after, while five people at four councils asked, in five wordings,
what a live council's experience is, and every answer they got was yours: the case study four
times, your own words twice, two promises not kept. That offer reached no count, which the
thirty-first pass had named and not fixed; run from the customer's end it is the whole of what his
records say, so [`offers-to-vouch`](../counts/offers-to-vouch.md) exists now, over
`since-the-sale`, and [`answer-gap`](../signals/answer-gap.md) reads it beside `proof-on-file`: a
worry only a peer can carry has an answer on file when a customer has offered, graded like a case
study, third-party by who speaks and aged from the day it was made. An offer is not a booking, and
that sentence is the count's `breaks`: the peer-call card was promising the call ("I'll set it
up") on an offer six months unasked, and its draft says "I'll ask him" now, with the promise
named in what it holds back and the note to Andrew as the watch's next step. Three reads' `assumes:`
are decided. The world names the rung at which its sale completes, which `since-the-sale` says the
seller must and no world had.

**What the counts said about themselves.** The shelf has no proof tags, seen now from the
evidence's side: three documents about one customer and every match to a worry made by hand.
`third-party-vs-self-asserted` cannot hold a customer's sign-off on your own document, because it
sorts by who wrote it. How recently the one deal completed stands on the goal's prose, because no
ending is told and the CRM is not connected. And the same request for a customer's word from five
people at four councils is counted by nothing across deals: `their-question-unanswered` is per
person, and whether "does it work at a real council" is a worry for `worry-occurrences-across-deals`
or a request for proof is a reading nobody has made. `delivered-before` fires softly on every cold
council here and no card carries it, argued right: with one customer, the case study says the same
thing with a figure in it.

**What no read says.** The tool never writes to a customer. Nothing fires on a person past the
sale in a patient world and no question in the three sets asks about one beyond whom they could
introduce you to, so the customer whose name carries eight cards is somebody the tool would never
suggest a word to. The first card to a customer is the one the peer-call watch turns up, if Rachel
says yes. Named, not built.

**Done in the forty-third pass, 22 September.** The sixteenth to nineteenth people worked from
both ends, the four around Karen Hughes at Bramley: Martin Hodgson, who holds the budget and is on
no record of yours but a committee paper, and Louise Kemp, Ravi Chandran and Jonathan Reid, whom
Karen brought to her threads. The record is `scenarios/bops/docs/bramley-pass.md`. One card touches
them, the Ask to Karen about who signs, and it is the first card re-tested from a second end with
no change to its reads: `missing-people` fires harder from the budget holder's side, the card holds
his name back and `decision-maker-reached` agrees, because its evidence is a web page and never a
person on a record of yours. Neither end reaches a card to him, and the read that fires says ask
the person you have.

**What the counts said about themselves.** The told roles list cannot say a role is split:
"a head of service with the budget" is two people at Bramley, one reached and one not, and
`people-covered-vs-needed` has to call the row covered or missing when it is both. With Felton's
finance, that is twice the profile's cast has failed to describe a council. A buyer's document
sent as a mail attachment is gathered by `document-set`, which takes `gmail#attachment`, and
counted by nothing, because `documents-received` and `documents-still-out` need the handover
only; `missing-documents` is silent in this world and the one document a buyer has ever sent,
Bramley's case volumes, is invisible to it, as are the figures inside it. Named, not fixed,
because no card here would quote the count: nothing at Bramley is still out. And a title can come
from a colleague's introduction, which `head-of-signature-scan` reads as a message; the fiction
had Ravi Chandran's in a signature he never wrote, and the count was right.

**Done in the forty-fourth pass, 22 September.** The last four provisional cards in the shipped
world, the Asks about no person: who you know at the twelve councils with no name, what a good
fit looks like, whether to drop the greetings, and what a buy at a council takes. The record is
`scenarios/bops/docs/no-person-pass.md`. Every one rests on something the seller has not told the
tool, so the records to write were the seller's own: `world/records.md` has a section for `you`,
the tool's fifteen drafts and what you did to each, the twelve councils on the web, and the shadows
of a buying step in six councils' threads. The build matches it to the cast like any person, so
all twenty-five cards in `bops` are figure-checked and every one is `decided`. Job 1 is done on
the world the library came from.

**What the two ends found at the cards.** One Ask asked for a verdict: "which three councils
should I start with" is a priority call the tool could make from two facts it lacks, and the one
with no card of its own, who you know, is what the card asks now; the order is the tool's again
once it is answered, and the limit of three went by the phone's own rule. `missing-people` came
off it, met by absence at councils nobody has contacted, and `warm-path` is its read, as an Ask,
with `fit-match` and `stated-priorities` tracing the tool's own pick. The buying-process Ask had
two shadows of a step where the records hold six councils' worth, one of them a committee that
does not exist and none of them the budget meeting the seller sat in; rewritten to the records.
The drafts card's figures survive with one word changed, because the records hold fifteen notes
and eleven with an opening line, not eleven drafts. Nothing else came off.

**What the counts said about themselves.** `draft-to-sent-edit-distance` has a floor of about
thirty sent messages and a new seller's first month is under it; the honest card under the floor
is an Ask, and nothing in the library says a read below its count's floor should ask rather than
stay silent. A new person in post at a cold council is counted by nothing, because
`fresh-reason-to-write` sits under `time-to-reconnect`, which assumes a rhythm. A published tender
at a cold council enters no count, found for the second time, and the tool's own ranking of where
to start rests on it anyway. And the fit-shape is told and thin at once: the profile's Customer
field gives `fit-shape-completeness` three factors in a sentence, none marked, and the things the
thirty visibly share are not among them.

**Done in the forty-fifth pass, 22 September.** Job 3 begins: the same six steps on the world the
library was not derived from, the broker's, starting at the top of its ladder with Tony Prieto,
Paula Larkin, Alma Vega and Renee Sackville, and Marcus Bell and Hannah Beck beside them. The
record is `scenarios/pmf/docs/pmf-pass.md`, which grows a section per group. The world has its
first records, `scenarios/pmf/world/records.md`, with a clock on every row because the tempo is
hours; four cards are checked against them and three are `decided` with their message rows. The
fourth, the disclosure to Paula Larkin, rested on a read that is silent by its own rule:
`required-disclosures` is zero because nobody has told the tool a rule, so nothing is missing and
`disclosure-still-owed` cannot fire. The card admitted the rules were unwritten and rested on the
read anyway. It is an Ask now, [`ask-disclosure-rules`](../../scenarios/pmf/cards/ask-disclosure-rules.md),
asked on the live case with her numbers drafted and waiting, which is the twenty-second pass's
lesson arriving at the fast end. Alma Vega's card swapped its reads: the carrying read cannot be
summed before an offer and says a shape, and what fires high is `uneven-income` on twelve months of
her own statements, which the fiction gave her because three summer months cannot show a winter.
Tony Prieto's timeline had three of four answers on the wrong day. Three reads' `assumes:` are
decided.

**The message rows at the fast end.** Three cards carry them and they say something different
from what they say to a council officer, decided by the counts: at hours the *asks* row asks in the
same text that gives (June and July came, send August; the offers are in, Marcus today), where at
a patient tempo it says "no need to reply". Renee Sackville's note had no sanctioned opening,
nothing owed, nothing published, no angle, and opens on the two statements that came, so what they
sent, by name, is an eighth kind of opening (`documents-received`, in `build.js` and
[`message-shape.md`](message-shape.md)), and the table there has three rows from this end.

**What the counts said about themselves.** `since-an-answer-landed` speaks in days and the newest
answer was forty minutes old. A season cannot be read off the three statements the trade asks for:
`money-in-swing-vs-own-periods` wants about six periods, so `uneven-income` at this end depends on
the merchant sending more than was asked or on a bank connection nobody offers. `where-this-one-goes`
fired on Vega Landscaping after Marcus had already submitted to a funder it misses, and nothing
says a read should arrive before the step it would have changed. And the question `NEXT.md` set,
whether a read that cannot apply here leaves its question answered by anything else: V7, who
decides, is answered at the patient end by `missing-people`, which assumes several people; here the
owner signs the application and nothing reads that signature as the answer. V10, how urgent in their
words, is on every form ("this month if possible", "not desperate") and no read takes it. Both are
holes the volume set already named and this pass met on the records.

**Done in the forty-sixth pass, 22 September.** The front of the broker's ladder: Errol Danning,
a text that finally got an answer; Curtis Naylor, back on the form after three funders refused him
in May; Marisol Delgado, a name off the list a colleague handed over. The record is the second
section of `scenarios/pmf/docs/pmf-pass.md`. Three cards `decided`, two with message rows. Errol's
swapped its reads: at this end `buying-intent` is the ladder's first rung and not a finding, and
what is owed on his conversation is his question, "how fast", one working day open on a
conversation that turned in a minute, so `loose-end` is the read and the form is the answer.
Curtis's lost `delivered-before`, a read kept for nothing. Marisol's gained
`colleague-already-in-touch`, and the gather under it had to change to see why:
[`firm-contact`](../assemblies/firm-contact.md) reads the CRM, the workspace, threads and events,
and the one approach a list lead had had was on the list itself, in the origin gather two floors
away; it takes `lead-list` now and both counts under it read it. Three reads' `assumes:` are
decided.

**What the counts said about themselves.** `sms#consent` has been on the channel since 21
September because the trade said a text without written consent is the thing it gets fined for,
and nothing reads it: the card that texted a stranger off a list passed the build. It goes by mail
now, and the finding is that the check was never built. What a merchant wants the money for, V9, is
said unasked on the text, the form and the list by all three, and read by nothing as an answer.
`missing-documents` fires on Curtis two working days after the application was sent and no card
carries it, argued right for today: the funder card is the move before the file.

**Still open.** *(Gathered on 21 September, after the twenty-eighth pass, from the prose the later
passes left above this list. Nobody has done any of it, and the first line is the user's before it
is anybody's.)*

- **The bands do not grade distance.** A clarification window closing in eight working days and a
  date six months off are the same band, because `ownBand` asks only whether a date exists and
  whether it is tomorrow. The twenty-sixth pass found the tie-break at fault and the bands sound,
  and that was true of the complaint it answered; this is a different one, from the other end of the
  spectrum, and it is about the bands. Unlike the tie-break, no principle says which of the two
  cards should win, so it is named rather than decided. Found in the twenty-seventh pass.
- **A shared list has nowhere to record who has worked which name.**
  [`lead-list`](../channels/lead-list.md) holds the list and the entries; when marketing sends the
  same spreadsheet to six people, nothing says who has written to whom.
  [`act-ian-vanbrugh`](../../scenarios/cority/cards/act-ian-vanbrugh.md) names it in its own *Still
  unclear* because it cannot do better. Found in the twenty-seventh pass.
- **The brief**, F14: a stage and a one-line next step for fifty reps, for a manager who is not
  selling. [`library-format.md`](library-format.md) defers it as a floor above the cards, which
  comes once the cards prove out. The twenty-seventh pass records it as asked for a third time, and
  what that world adds is a concrete reader rather than a theoretical one.
- **The names left in the general rungs**, what the BOPS clean-out above did not reach.
  `assemblies/deal.md`, `meeting-history.md` and `pricing-fence.md` were left as they were because
  they carry no scenario name I could find, and whatever presumption was meant is not recorded.
  `scenarios/bops/docs/flow.md` and `how-modules-collaborate.md` still use the dropped Expand
  vocabulary and the old cast names, and each says at the top that it does. And the rename nobody
  has asked for: `gmail`, `calendar`, `drive`, `contacts` and `meet` are vendor names in a general
  rung, which is the same objection that turned `salesforce` into `crm` on the user's asking.
- **The cards' joins upward are still provisional on eleven of forty-four cards, four in the
  broker's world and seven in the firm's.** Three
  were decided in the twenty-ninth pass, four in the thirty-first, two in the thirty-second, two
  in the thirty-fourth, two in the thirty-sixth, three in the thirty-seventh, one in the
  thirty-ninth, two in the fortieth and two in the forty-first, from the records
  up, one re-tested from the customer's end in the forty-second, one from the budget
  holder's in the forty-third, the four about no person in the forty-fourth, which finished
  the shipped world, four at the top of the broker's ladder in the forty-fifth and three at its
  front in the forty-sixth; the method is in
  `scenarios/bops/docs/karen-hughes-pass.md`, `westmoor-pass.md`,
  `holbrook-pass.md`, `burnham-pass.md`, `felton-pass.md`, `north-ridley-pass.md`,
  `moreton-pass.md`, `tarlton-pass.md`, `ashworth-pass.md`, `east-marston-pass.md`,
  `bramley-pass.md` and `no-person-pass.md`, and for the broker's world in
  `scenarios/pmf/docs/pmf-pass.md`. The rest
  were read off the card rather than decided; the forty-fifth is the News card, which rests on
  records and names no read. Nineteen signals still carry `assumes_status: provisional`;
  `cooling-champion`, `loose-end`, `missing-people`, `blocker`, `can-they-carry-it`,
  `understanding-gap`, `champion-went-dark`, `fit-match`, `stated-priorities`, `enough-tries`,
  `warm-path`, `colleague-already-in-touch`, `one-sided`, `answer-gap`, `customer-introduction`,
  `delivered-before`, `voice`, `answer-came-back`, `missing-documents`, `uneven-income`,
  `lead-with-this`, `turned-down-before` and `where-this-one-goes` were tested
  against the word they claim and are `decided`. Every other person needs a records section first, because until a world carries
  what its channels would hold, a card can only be checked against itself.
- **Three of the six findings about counts in the twenty-ninth pass are worth fixing**, and none
  was fixed in the same breath: the reply-gap count's words, the scan's list of records it cannot
  see for a buyer, and a rule for a promise re-made. Named here rather than done. The thirty-first
  pass added two of the same weight: `who-starts-threads` needs its summary to carry the change
  its rows show, and a customer's offer to vouch for you needs a count (done in the forty-second:
  `offers-to-vouch`). The thirty-fourth added
  one: the tool holds the offering as eight fields of prose and no use-case by buyer type, so
  `lead-with-this` is silent on your side, and no answer to a worry, so `answer-gap` over-reports.
  Both are gaps in what the tool can hold (`library/told/offering-told.md`, the note at the end).
- **Three reads are silent today and two thinner**, under what the tool can connect (thirtieth
  pass). Nothing to fix in the library: they wait on the buyer's handover becoming a capability.
  The broker's world rests on four connections the tool does not offer, so its twelve cards are an
  exploration rather than a demo until it does.
- **Three told records a count should sum and none does** (thirty-fifth pass): an offline touch
  belongs in `innocent-explanation-scan`, a contact preference in `best-way-to-reach`'s counts,
  and a correction needs a rule for what a corrected read does next. Named in
  `what-to-capture.md`, not wired.
- **The holes that are holes on purpose.** Q25, what questions to ask them, which
  [`sales-questions.md`](sales-questions.md) names as the fifth frontier and which would widen the
  output from a message into a move plus talking points. V6's hour and V10's words on a form, both
  answered in part. V22 short of the ledger, because no channel carries your bank, your firm's or a
  funder's, so whether an agreed payment arrived is on no record at all. F2, F3 and F13 in part,
  each naming in its read's body the fact nobody holds. And F19, which this map says is the Brain's.
- **One move per person, and a day you can take in.** The first pass found it and the last paragraph
  of this section carries it, unsolved since 20 September. The twenty-seventh pass's manager with
  fifty reps is a third shape of the same question.
- **A buyer's promise does not die with the buyer.** `their-promise-undelivered` keeps a
  promise open past the automatic reply that says its maker has left, because nothing tells it
  a person's word goes with them. Harmless on a two-turn thread; on a longer one it would chase
  a successor for a predecessor's promise. Found in the thirty-ninth pass.
- **The name a departure notice hands on reaches no placing count.** The two counts that place a
  new person sit under `new-stakeholder`, which needs the name on a thread or an event; a name
  in the text of an automatic reply is on neither, and the origin gather does not read it, so
  `warm-path` has no bridge and F17 is answered by hand. Found in the thirty-ninth pass.
- **A month in their words is a date nothing counts down to.** "Pushed to September" is kept by
  `dated-facts-in-their-words` and `time-to-their-date` has no day to reach; it was the reason
  for the note that came back from Julie Barker's mailbox. Found in the thirty-ninth pass.

**Deliberately not yet.** *(Written in the eleventh pass. All three were done on 21 September:
the counts in the twenty-eighth pass, the third scenario in the twenty-seventh. Kept as written,
because what a pass thought was deferred is part of its record.)* Defining the counts: every one is
`defined: false`, and some should merge or go once this map is agreed, so defining them before the
set settles is wasted work. Cards and the phone, which are out of scope for this pass. A third
scenario in the middle of the spectrum, which earns its place once the two ends have shown what the
spectrum is.

**One thing the first pass found and did not solve.** Story ch. 7 says "one move per person at a
time" and "you can take in the whole day". Both are a low-volume seller's week, and neither survives
forty calls a day. With the scope now at a lead onwards, a broker's day is fifteen live deals rather
than forty cold calls, so the question may not arise; it is still a card and phone question, flagged
here so it is not lost.
