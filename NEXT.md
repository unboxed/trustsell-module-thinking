# The prompt for the next session

Hand this file to the next agent as its prompt. It is written to be read cold, and it is kept true
at every commit: anything not reached is picked up by a later session given the same file.

---

This is the sales-amplifier-thinking design workspace. Read `CLAUDE.md` first; it is accurate.

## Where the work stands

Forty-nine passes on `library/docs/coverage.md` are done. The library
holds 14 channels written (8 on offer today, and only those are reasoned on in the build), 6 told sources (the sixth, the tool's own history, added 22 September), 25 assemblies, 136 counts (**all written**, 21 September; the 135th and 136th on 22 September), 42 signals,
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

**If you are reading this cold: Jobs 0 to 3 are done. Every card in all three worlds is decided and figure-checked. What is left is Job 4, which the user parked to iterate on with them, and the list under "Still open".** Job 4 is parked and
comes last, after Jobs 1 and 3 (the user, late on 22 September). Read `CLAUDE.md`, then one pass file
(`scenarios/bops/docs/westmoor-pass.md` is the fullest, `scenarios/pmf/docs/pmf-pass.md` the latest
and the one Job 3 grows), then Job 1's six steps, which Job 3 runs per person in the other two
worlds, and begin. Jobs 0 and 2 are done; Job 3 comes after Job 1; Job 4 was
taken to a sheet on 22 September (https://claude.ai/artifact/FmGVacehhSfDTJqxhLEsPM) and is left
for last, to iterate on with the user.

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
planning system, and its price list has no partial rollout, which three cards offer. **The thirty-sixth pass did Felton** (`felton-pass.md`): Stephen Walsh, Shabana
Akhtar and David Marshall, the first price objection from the records up. `price-barrier` came
off the price card, because the profile names no rival and Stephen compared the figure with this
year's budget, not with anybody; the read that says so is `can-they-carry-it`, from the volume
seller's set, firing softly at a council. The price sheet against the price list is settled as a
quote the profile was never told about. A worry in the buyer's own words is now a fifth thing a
message may open on. **The thirty-seventh pass did North Ridley** (`north-ridley-pass.md`), the
first run of the understanding reads from the records up; what it found is under Job 1 below.
**The thirty-ninth pass did Moreton** (`moreton-pass.md`): Julie Barker, who has left, and
Sanjay Mistry, whom her mailbox named. The card leaned on a bounce and an auto-reply from one
address, which cannot both happen, and is settled as the auto-reply; `missing-people` was the
unnamed read under "your only door"; and a note to a successor now has a sanctioned opening,
the name the departure notice handed you. **The fortieth pass did Tarlton** (`tarlton-pass.md`):
Darren Cole, the first person nobody has ever exchanged anything with, and the first run of
`fit-match` and `stated-priorities` from the records up. `buying-intent` came off the tender
card because its procurement count reads a conversation and there is none; `warm-path` came
off as a read kept for its gate count; the bid Ask's answer is a deal seed, which the card now
says; and a date the buyer published is counted by nothing, so the card's when rests on the
web record directly. **The forty-first pass did Ashworth** (`ashworth-pass.md`): Nicola Shaw,
who has never replied, and Simon Ward, who says he knows her. The rest card was on `one-sided`,
which cannot apply to somebody with no history, and rests on `enough-tries` now; its last-note
draft came off, because a note that opens on the silence itself has no sanctioned ground, so
the card is the one tap the design log called it. The introduction card's sure word is "a
hunch", and a note to a colleague opens on what the colleague said, a seventh sanctioned
opening. **The forty-second pass did East Marston** (`east-marston-pass.md`): Andrew Doyle, the
customer, the first person worked who is not a buyer and the first with no card. His offer to take
reference calls had sat six months on a thread, never used, while five people at four councils
asked for exactly what it supplies; it reached no count, so `offers-to-vouch` exists now under
`answer-gap`, and the peer-call card asks him rather than promising him. **The forty-third did
Bramley's other four** (`bramley-pass.md`): the budget holder nobody has reached and the three
people Karen brought in; the Ask about who signs is the first card re-tested from a second end
with no change to its reads. **The forty-fourth did the four Asks about no person**
(`no-person-pass.md`): the seller has a records section of their own, one Ask that asked for a
verdict now asks for the fact it lacked, and with them **every card in `bops` is decided and every
card is figure-checked**. Job 1 is done on the world the library came from. **The forty-fifth
began Job 3 in `pmf`** (`scenarios/pmf/docs/pmf-pass.md`): the four people at the top of the
broker's ladder have records with a clock on every row, three cards are decided with message rows
that ask in the same text that gives, and the disclosure Act became an Ask because its read is
silent until a rule is told. **The forty-sixth did the front of that ladder**: three more decided,
`firm-contact` reads a handed list so a colleague's stand contact counts, and a text to a stranger
with no consent on record went by mail because nothing reads consent. **The forty-seventh
finished that world**: every card decided, one retired (a favour asked of a customer, whose read
never fired), two openers for a note after the sale, and a ledger of what the world says
(`pmf-pass.md`, last section). **The forty-eighth began `cority`**: the bid and the two
champions, four cards decided, and two notes that had nothing sanctioned to open on until the
buyer's own published plan and the step their side has shown were let in (`cority-pass.md`). **The
forty-ninth finished it, and Job 3 with it**: three more decided, two cards written (an Ask about who
has worked the conference list, and the held question to Marta about who signs), and a ledger for
the firm's world. **Every card in every world is decided.** **The figure rule is built**: `build.js` refuses a card that states
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

**Job 1 is done in `bops`, 22 September.** Nineteen people and the seller: Karen Hughes, in `scenarios/bops/docs/karen-hughes-pass.md`,
Gary Pearson and Rachel Gill together, in `westmoor-pass.md`, Neil Chapman, in
`holbrook-pass.md`, Lisa Holmes, in `burnham-pass.md`, and Stephen Walsh, Shabana Akhtar and
David Marshall together, in `felton-pass.md`, Michelle Turner, in `north-ridley-pass.md`, and Julie
Barker and Sanjay Mistry together, in `moreton-pass.md`, Darren Cole, in `tarlton-pass.md`, and
Nicola Shaw and Simon Ward together, in `ashworth-pass.md`, Andrew Doyle, the customer, in
`east-marston-pass.md`, and Martin Hodgson, Louise Kemp, Ravi Chandran and Jonathan Reid together,
in `bramley-pass.md`, and the four cards about no person, worked from the seller's own records, in
`no-person-pass.md`. The six steps below were followed as written and held up on all twelve runs,
including the one on a person with no card and the one on cards with no person.
Two things to carry into the next person: the counts say a lot about themselves when run by hand
(the findings are at the end of each pass file), and the figure rule at the end of this job is
built, so a card's figures fail the build the moment its person has a records section, and every
decided card with a draft carries its message rows (Job 2). **The thirty-seventh pass did North
Ridley** (`north-ridley-pass.md`): Michelle Turner and three cards. `understanding-gap` fired on
both halves once the world held the July answer the September words reversed, and the repeat
crossed two threads, so `re-asked-questions` now counts over the person. `lead-with-this` came off
both cards it was on, for the third time in this world: no use-case by kind of council is told, so
it has nothing to rank. Nothing reads a meeting ahead: the two Act cards take their when from the
invite and their what from a read. **The thirty-ninth pass did Moreton** (`moreton-pass.md`):
`champion-went-dark` fired from the records up on Julie Barker's automatic reply, once the fiction
stopped claiming a bounce as well; the card to Sanjay Mistry is the first written to somebody with
no record, and its figures are all Julie's, so she is among its `about` and the figure rule reads
her section. **The fortieth pass did Tarlton** (`tarlton-pass.md`): Darren Cole and two cards,
the clarification questions and the bid Ask. Both reads that fire read only what Tarlton
published, and both declare `assumes: []`, now decided on an organisation nobody has contacted.
**The forty-first pass did Ashworth** (`ashworth-pass.md`): Nicola Shaw and Simon Ward, two
cards, the first run of `enough-tries`, `warm-path` and `colleague-already-in-touch` from the
records up. One draft came off a decided card for the first time, because nothing sanctioned
its opening. **The forty-second pass did East Marston** (`east-marston-pass.md`): Andrew Doyle,
the customer, with no card of his own. Nothing fires on him and no question asks about him, so
the honest result is that the tool never writes to a customer; what his records did produce was
a count, `offers-to-vouch`, and a re-test of `act-rachel-peer-call`, whose draft was promising a
call on an offer six months unasked. **The forty-third pass did Bramley's other four**
(`bramley-pass.md`): Martin Hodgson, who holds the budget and is one web page, and Louise Kemp,
Ravi Chandran and Jonathan Reid. `missing-people` fires harder from the budget holder's end and
the Ask to Karen stands unchanged; the told roles list cannot say a role is split, and the one
document a buyer has ever sent, Bramley's case volumes, is gathered and counted by nothing.
**The forty-fourth pass did the four cards about no person** (`no-person-pass.md`): step 1
wrote the seller's own records, the tool's fifteen drafts and what you did to each, the twelve
councils on the web and the shadows of a buying step at six councils; `ask-twelve-councils` asked
for a verdict and asks for the fact now, who you know, with `warm-path` as its read; the
buying-process Ask had two shadows where the records hold six. Job 1 in `bops` is done. Next is
Job 3, below.

The cards' joins upward are the last `provisional` thing in the library: 43 of the 44 cards name
their read, and none is read off the card rather than decided: all forty-five are decided from
the records up, 22 and 23 September. Twelve of the 42 signals carry `assumes_status: provisional` still; each was left because no
card in any world has run it from the records up.

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
twenty-five.~~ The method was agreed on 22 September and the world is done: nineteen people, the
seller, and every card decided. Job 3 runs the same six steps in the other two worlds, one pass and
one commit per person or organisation, in the same shape as the twelve pass files that exist.

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

**Begun on 22 September, forty-fifth pass.** `scenarios/pmf/world/records.md` holds Tony Prieto,
Paula Larkin, Alma Vega, Renee Sackville, Marcus Bell and Hannah Beck; `scenarios/pmf/docs/pmf-pass.md`
is the record and grows a section per group. Done there: three cards decided with message rows,
the disclosure Act turned into `ask-disclosure-rules` (its read is silent with no rule told), Alma
Vega's reads swapped, `documents-received` an eighth opener. Found: V7 has no answer at this end
because the owner's signature is read by nothing; V10's form words are read by nothing; a season
cannot be read off three statements. **The forty-sixth did the front of the ladder** (Errol
Danning, Curtis Naylor, Marisol Delgado): `buying-intent` is the first rung here and not a read,
so Errol's card rests on `loose-end` (his question, one working day open); `delivered-before` came
off Curtis's; Marisol's gained `colleague-already-in-touch` once `firm-contact` could see a handed
list, and goes by mail because `sms#consent` is read by nothing. **The forty-seventh finished
`pmf`**: Dee Whitlock's introduction card is retired (its read never fired: she named nobody, and a
favour asked with nothing owed opens on nothing), Wes Halloran's and Joyce Amadi's stand with rows,
two openers were added for a note after the sale, and the pass file ends with the world's ledger.
**The forty-eighth began `cority`** (`scenarios/cority/docs/cority-pass.md`): Gordon Ellery,
Marta Olsen and Yvonne Pryce, four cards decided, `steps-with-a-sign` an opener, `stated-priorities`
supporting the champion note because `they-owe-you` forbids opening on the promise. **The forty-ninth finished it**: Dorothy Nwosu, Ian Faulds and Owen Clark at Thornley decided,
`time-to-reconnect` off Ian's card and decided (it has fired in no world), `ask-conference-list`
and `act-marta-who-signs` written, and the ledger at the end of `cority-pass.md`. **Job 3 is done.**

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

### Job 4: one card, two sellers (the user, 22 September; on a sheet since the thirty-eighth pass, parked, and last in the order)

**Done to the sheet, 22 September, thirty-eighth pass.** Steps 1 to 4 below were done in order:
the card model in `playbook/world.md` ("One card, two sellers") says what coaching, fluency and
cadence change and what stays; Karen's main card and Michelle Turner's note before the demo carry `## Said straight`, the same
card for a seller who sells for a living, lifted off the card's sections by `build.js` and
figure-checked (Michelle's is the one on the sheets: the user is tired of Karen as the example);
the week is cut two ways by a proposed rule ("The week, cut two ways", the unit the tool spreads
over is the seller's sitting), run over the real cards and not built; and both fronts, both backs
and both weeks are on one sheet, https://claude.ai/artifact/FmGVacehhSfDTJqxhLEsPM, with the
slide that would carry it four ways on a second, https://claude.ai/artifact/Aptjg96sfTZnTadXV8vPYZ
(the dialler-like one is my pick). The user also asked, the same evening, for a more typical sale
than councils for the demo; a fourth world was proposed and not started. **Parked by the user
late on 22 September ("just leave it there, but I would like to iterate on this later"): do not
carry Job 4 further without them.** What to bring when they come back: the two sheets; the
straight version's voice, which was rewritten twice that evening (shorthand and read names are
out; whole sentences a seller would say, fewer of them, nothing explained); the slide direction;
and the fourth world. The example is Michelle Turner's note before the demo, not Karen. **What waits
on the user:** whether the straight card reads right, whether the coached phone should show the
four message rows as *What the note does*, and whether the sitting rule is the right shape. Only
then: the phone draws the straight version (a setting, or a switch on the sheet's model), and
`build.js` takes the sittings from the told cadence. Two findings for the library are in
`coverage.md` under the thirty-eighth pass: `arrives` mixes when a card became true with when
the tool chose to show it, and an Ask about a meeting has no rule saying it arrives when the
meeting ends.

The tool adjusts to who is selling. Some people sell because it landed on them and do it on the
afternoons they can spare; some sell for a living, every day. The first wants the why and what to
say, and a tool that holds things until they next sit down; the second wants the next move, said
straight, with the clock on it, and a tool that works in hours. Story ch. 5 now says so in the
user's words. The Profile module holds the settings (coaching, fluency, cadence, seeded by one
question about who you are). Nothing shows the difference: every card and the whole week are
written for one seller, and the day's order in `build.js` knows one cadence.

Felton and North Ridley were the two people; do it now, in this order:

1. **Say what each setting changes on a card.** In `playbook/world.md`, the card model: which
   parts of the front and the back the coaching and fluency settings change, and which stay the
   same for everyone (the reasoning underneath, the sources, the draft's four parts). Argue it
   before writing a card.
2. **Write one decided card two ways.** Gary's, or Karen's main card. The same reads, counts and
   records; two fronts and two sets of the tool's own lines. Keep the card's markdown as one file
   with the second version as a marked section, so the build still checks one card. Say which
   lines changed and why.
3. **Cut one week two ways.** The seller who sells on two afternoons: what the tool holds until
   Thursday, and what it brings on Wednesday because it would be gone. The seller who sells all
   day: the same cards by the hour. Propose the rule for `build.js` (what "gone by then" means
   against the cadence), do not build it until the user has seen the two weeks.
4. **Show, do not tell.** Render the two fronts and the two weeks on a sheet before asking; the
   user decides by looking. It touches the phone and the voice, so the sheet comes first and the
   phone changes only after.

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
- ~~**One card, two sellers**~~ Job 4 of the task above; on a sheet since 22 September, awaiting the
  user's verdict.
- **The brief, asked for by all three sellers.** What happened on this deal in the last two weeks,
  in a paragraph, for somebody who is not selling. F14, deferred in `docs/library-format.md` as a
  floor above the cards, and the Cority world makes it concrete: a manager who sees a stage and a
  one-line next step for fifty reps, and messages on a Friday asking where a deal is.
- **A world holds records for nineteen people and the seller** (found 22 September; done the same day).
  `scenarios/bops/world/records.md` holds Karen Hughes, Gary Pearson, Rachel Gill, Neil Chapman,
  Lisa Holmes, Stephen Walsh, Shabana Akhtar, David Marshall, Michelle Turner, whose section
  also carries the seven others on North Ridley's invite, Julie Barker, Sanjay Mistry, Darren
  Cole, Nicola Shaw, Simon Ward, Andrew Doyle, Martin Hodgson, Louise Kemp, Ravi Chandran and
  Jonathan Reid, and a section for `you`, the seller, which the four Asks about no person are
  checked against. Every person in the other two worlds still has a line of prose, and the
  figures their cards quote live only in the cards. Until a person has a records section, their
  cards can only be checked against themselves, and the figure rule skips them.
- ~~**A card may not state a figure the world does not carry** (proposed 22 September, not built).~~
  Built the same day, on the user's word, for people with a records section. Seven cards checked,
  eighteen skipped, a planted figure fails.
- **The cards' joins are provisional on twenty of forty-five cards, all in `pmf` and `cority`.**
  Twenty-five, the whole of `bops`, were decided on 22 September from the records up, and the wrong joins they hid were the kind predicted: a
  supporting read that does not fire, kept so the card could quote one of its counts, and once a
  card resting on the mirror of the count it needed, and once a read that failed both halves of
  its own trigger while the card was right about the move, twice a read joined for a reason to
  write when the reason was what the buyer published, once a price read with nothing to
  compare against, on a card about affordability, twice an angle read with nothing told to
  lead with, once a card quoting a bounce and an auto-reply from one address, which cannot
  both happen, once a buying read whose procurement count reads a conversation on a
  card about a tender with no conversation, and once a balance read on a person with no history
  to read balance across, on a card that was about stopping. Job 1 of the task above, for the
  rest of `bops` first.
- **The told cast of roles reaches no told record** (found in the thirty-sixth pass).
  `people-covered-vs-needed` says the roles a decision needs are told, and the map it is done
  over gathers nothing from the offering, where this world holds them. The same map has no slot
  for a role off the list, and at Felton that is finance, the person the deal is stuck on.
- **Nothing reads a meeting ahead** (found in the thirty-seventh pass). A card whose day is
  fixed by an invite takes its when from the calendar record and its what from a read. That is
  how `when: dated` was defined, the world sets it, and it is the first time a card's two halves
  have come from different floors. Whether a demo tomorrow deserves a read of its own, or stays
  a record the cards quote, is undecided.
- **A colleague naming who is coming is read by no count** (found in the thirty-seventh pass).
  Michelle's message of 1 September placed four of eight invitees; `head-of-signature-scan` reads
  signatures, contacts and the web, and the card rests those four on gmail directly.
- **What a thread keeps asking about is counted only under `pushing`** (found in the
  thirty-seventh pass). `things-they-asked-you-for` is the envelope. No opening read has a count
  of the thread's subject, so a brief's angle can rest on what they published and not on what
  they asked, five times in fourteen messages.
- **How your own demos went is read by nothing** (found in the thirty-seventh pass). The brief
  holds compliance back because one recorded demo's compliance section drew no question, and
  that rests on the transcript directly.
- **A smaller first step has no told price** (found in the thirty-sixth pass). The Pricing
  record is price, discount room, term and how it is paid; the partial rollout is none of those,
  and whether it is a second entry on the offering list is undecided. Three cards offer it.
- ~~**The shape of a message is reached by nothing** (found 22 September).~~ Done the same day,
  thirty-third pass: four traced rows on every decided card with a draft, an argued account in
  `library/docs/message-shape.md`, and a build check. What is not done: the rows are a check on a
  draft written by hand, not the input a draft is written from; the table of what each writing read
  contributes is mine and untested beyond seven cards; and the fast end has not been met.
- **A buyer's promise does not die with the buyer** (found in the thirty-ninth pass).
  `their-promise-undelivered` keeps Julie Barker's "I'll come back once it has met" open past the
  automatic reply that says she has left. Harmless on a two-turn thread; on a longer one it
  would chase a successor for a predecessor's word.
- **The name a departure notice hands on reaches no placing count** (found in the thirty-ninth
  pass). `prior-history-scan` and `head-of-signature-scan` sit under `new-stakeholder`, which
  needs the name on a thread or an event; a name in the text of an auto-reply is on neither, the
  origin gather does not read it, so `warm-path` has no bridge and F17 is answered by hand.
- **A month in their words is a date nothing counts down to** (found in the thirty-ninth pass).
  "Pushed to September" is kept by `dated-facts-in-their-words`; `time-to-their-date` has no day.
- **A date the buyer published is counted by nothing** (found in the fortieth pass).
  `dated-facts-in-their-words` reads threads only, so a tender's clarification close and its
  close, in the buyer's own published words, reach `deadline-they-gave` through no count, and
  the card's when rests on the web record directly. The same goes for a published rule of
  contact, which answers Q9 and is read by nothing.
- **A tender at a cold organisation reaches `buying-intent` through none of its counts** (found
  in the fortieth pass). `budget-or-procurement-entered` reads a conversation; a procurement on
  the open web is the plainest buying signal there is and it enters nothing.
- **The fit's unknown column is what a clarification question asks** (found in the fortieth
  pass). `fit-factors-met` keeps unknown apart from missed, and the two questions on the tender
  card are its unknowns asked as facts; nothing in the library says so.
- **Two counts under `warm-path` disagree about what a link is** (found in the forty-first
  pass). `mutual-contact-count` reads the workspace and `intro-chain-length` reads Contacts and
  LinkedIn, so a bridge a colleague named in Slack has no chain length.
- **A colleague's offline contact reaches no told record** (found in the forty-first pass). The
  offline-touch record is the seller's own; what a colleague did at an event is on record only
  if they mention it somewhere shared, and then without a date.
- **The innocent-explanation scan is blind in two places on anyone outside your organisation**
  (found in the forty-first pass): their calendar and their job moves, which are the two
  commonest innocent explanations. `enough-tries` reports an empty scan and the card says where
  it could not look.
- **The "one more try" after resting somebody is a card a watch turns up, not a draft** (found
  in the forty-first pass). A note that opens on the silence itself has no sanctioned opening,
  and the library is right to refuse it; the rest card lost its draft and its second button.
- **The tool never writes to a customer** (found in the forty-second pass). Nothing fires on a
  person past the sale in a patient world, and no question in the three sets asks about one
  beyond whom they could introduce you to, so the customer whose name carries eight cards is
  somebody the tool would never suggest a word to. The first card to a customer is the one the
  peer-call watch turns up.
- **The same request from five people at four councils is counted by nothing across deals**
  (found in the forty-second pass). `their-question-unanswered` is per person; whether "does it
  work at a real council" is a worry for `worry-occurrences-across-deals` or a request for proof
  is a reading nobody has made.
- **A customer's sign-off on your own document is invisible** (found in the forty-second pass).
  `third-party-vs-self-asserted` sorts by who wrote it; a case study the named customer read and
  corrected in draft is "yours" and nothing more.
- **The told roles list cannot say a role is split** (found in the forty-third pass). "A head
  of service with the budget" is two people at Bramley, one reached and one not, and
  `people-covered-vs-needed` calls the row covered or missing when it is both. With Felton's
  finance, twice the profile's cast has failed to describe a council.
- **A buyer's document on a mail attachment is gathered and counted by nothing** (found in the
  forty-third pass). `document-set` takes `gmail#attachment`; `documents-received` and
  `documents-still-out` need the handover only, so `missing-documents` is silent in the shipped
  world and Bramley's case volumes, the one document a buyer has sent, are invisible to it, as
  are the figures inside them. Not fixed, because no card here would quote the count.
- **A new person in post at a cold council is counted by nothing** (found in the forty-fourth
  pass). `fresh-reason-to-write` sits under `time-to-reconnect`, which assumes a rhythm with the
  person; two of the twelve councils with no name have a new digital lead, and the tool's own pick
  of where to start leans on it with no count under it. The same pick leans on Ashby's tender,
  which is the fortieth pass's hole again.
- **A read under its count's floor has no rule** (found in the forty-fourth pass).
  `draft-to-sent-edit-distance` wants about thirty sent messages and a new seller's first month
  has fifteen; the honest card under the floor is an Ask, and nothing in the library says a read
  below its floor should ask rather than stay silent.
- **At the fast end, who decides is answered by nothing** (found in the forty-fifth pass).
  `missing-people` assumes several people and cannot be made on a one-owner business; the owner's
  signature on the application answers V7 and no read reads it as an answer. The form's own words
  about urgency answer V10 the same way, and no read takes them.
- **A season cannot be read off three statements** (found in the forty-fifth pass). The trade
  asks for three months and `money-in-swing-vs-own-periods` wants about six periods, so
  `uneven-income` at this end depends on a merchant sending more than was asked, or on a bank
  connection nobody offers.
- **Nothing says a read should arrive before the step it would have changed** (found in the
  forty-fifth pass). `where-this-one-goes` fired on a landscaping firm after the processor had
  submitted to a funder it misses on industry.
- **Consent to text is a record nothing reads** (found in the forty-sixth pass). `sms#consent`
  has been on the channel since 21 September; no count, gather or read looks at it, and a first
  text to a name off a list passed the build with none on record. The check the trade gets fined
  for is not built.
- **What they want the money for is said unasked and read by nothing** (found in the forty-sixth
  pass). All three leads at the front of the broker's ladder said it, on a text, a form and a
  list; V9 is "answered by asking" on the map and the answer is already on the records.
- **`customer-introduction` has no card in any world** (found in the forty-seventh pass). No
  customer in the broker's world has named anyone, and the one card written for the read had to
  ask for the name the read needs. Soliciting a referral is a different move from introducing to
  a name given; it has no read, and a note that does it opens on nothing the envelope sanctions.
- **What a customer took from somebody else is on no count** (found in the forty-seventh pass).
  A lender's name in their own words on a thread is read by nothing; the lenders Ask is the only
  place it could go.
- **A read that forbids its own count as an opening writes no note alone** (found in the
  forty-eighth pass). `they-owe-you` says never chase on what they owe, so a card on it needs a
  second read to open the note, and the pairing is made by hand on the card.
- **Why a champion is invested is a told note nobody has typed** (found in the forty-eighth
  pass). F5 is answered by a relationship note, and neither champion in the firm's world has one.
- **A handed list attributes the seller's own conversation to the colleague who typed it** (found
  in the forty-ninth pass). `firm-contact` reads the list since the forty-sixth pass, and the list
  carries what was said and not who heard it; at Vanbrugh the person at the stand was the seller.
- **The brief is on the record and answered by nothing** (found in the forty-ninth pass). The
  manager's Friday question, "where are we with Calderbank", one working day old, which
  `loose-end` sees; F14 is asked for a fourth time and this time it is a record.
- **`time-to-reconnect` has fired in no world** (found across the thirty-second, thirty-fourth
  and forty-ninth passes). It needs a rhythm and a published reason together; nobody in three
  worlds has had both. Whether the read is right to want both, or F21 needs a different read, is
  named rather than decided.
- **The rung at which a sale completes is in prose** (found in the forty-second pass).
  `since-the-sale` says the seller names it and no world had; `scenarios/bops/world/goal.md` says
  it now, in a paragraph the build does not read.
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
