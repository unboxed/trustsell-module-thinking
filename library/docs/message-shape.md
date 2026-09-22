# The shape of a message

Written on 22 September 2026, as Job 2 of `NEXT.md`, after four people had been worked from the
records up. Until this was written, nothing in the library decided what a message the tool
drafts has to contain. The coverage map called Q20, "what should my next message say", answered
because "the draft does it", and the cold account called drafting judgement with nothing under
it. That was the same admission twice. This is the account of what decides a message's shape,
where each part comes from, and where it lives. The rule is built into `build.js` and tested on
the seven cards whose reads are decided. The user's scope on 22 September: the parts of a
message only, not the talking points for a call (Q25, still a named hole).

## What was already there

Four things, none of which decided a message's shape and all of which this rests on:

- **The gift.** Story chapter 8: every message the tool drafts names what the other person gets,
  "something they asked for, something you promised". The card template says a card that sends a
  message must name what the other person gets out of it.
- **The envelope.** [`signals/pushing.md`](../signals/pushing.md) does not judge a draft. It says
  what a thread can honestly carry: the only real dates on it, in the buyer's words; what you owe
  them and what they asked for, which is the gift in hand; what on the shelf fits them, which is
  what you can show rather than say; and how many times you have written since they last did.
  "The draft is then written inside that." That sentence was the nearest thing in the library to
  a shape, and it was written as a fence, not as a structure.
- **The angle.** [`signals/lead-with-this.md`](../signals/lead-with-this.md): for a buyer of this
  kind, the use-case to open with, and, since the twenty-third pass, the first line of a first
  message from how you came by them.
- **The sound.** [`signals/voice.md`](../signals/voice.md) and the Profile module: the brief
  carries the what and why, "who to act on, why, the points to make", and Profile supplies how it
  sounds. The points to make were named there and defined nowhere.

## The four parts, in order

A message the tool drafts has four parts, and each is filled from something the card already
rests on. They come in this order because a reader meets them in this order: what is this, what
can I look at, what do you want from me, and what did you not say.

1. **It opens with the gift.** What you owe them, if anything is owed: a promise of yours
   (`promise-made-undelivered`), a question of theirs you have not answered
   (`their-question-unanswered`), a thing they asked you for (`things-they-asked-you-for`). Where
   nothing is owed, a fresh reason to write: something published (`fresh-reason-to-write`) or a
   date of their own coming closer (`dated-facts-in-their-words`). Where there is neither, the
   angle: the use-case that touches something they have said, or the line that says how you came
   by them (the counts under `lead-with-this`). Where there is none of those, there is no
   message, and the tool says so. That is `pushing`'s refusal, and it is not a gap.
2. **It points only at what exists.** A document on your shelf that fits them (the card's
   `documents`, and `evidence-that-fits-them`, `proof-on-file`), or a date in their own words.
   Nothing the tool cannot show. A claim about what "most councils" do, when one council is on
   record, is not something the message may point at; the Westmoor pass found exactly that in a
   draft.
3. **It asks at most one thing, and sometimes nothing.** What the thread carries decides it. If
   the person is quieter than their usual, or you have written since they last did
   (`chases-since-their-last-reply`), it asks nothing and says so: "no need to reply". If they
   have shown intent or given a date, it asks for the next step. An Ask card asks the seller, not
   the buyer, so this part belongs to Act cards with a person in `to:`. And the ask is always for
   a fact or a step, never for a verdict.
4. **It holds back what the rules forbid, and says what must be said.** Your organisation's rules
   about claims and wording (the organisation's told `Rule` and `House voice`), anything you are
   obliged to disclose before they agree (`disclosure-still-owed`), any date that is not theirs
   or a told price change (`dated-facts-in-their-words`, read the way `pushing` reads it), and
   anything the card does not know, such as what a meeting decided when nobody has said.

## What decides what

- **The read that made the card** decides what the message points at and why now. A cooling
  read points at the thing you owe; a deadline read points at their date; a worry-without-answer
  read points at the evidence, or at the person who can carry it.
- **What is owed** decides the opening. If anything is owed, the message opens on it and nothing
  else, because a debt paid late and mentioned second reads as an afterthought.
- **The chase count, the kind of read and the goal's tempo** decide whether it asks. A patient
  sale gives and does not ask; a fast one asks in the same breath. The council world's note to
  Neil Chapman asks nothing and the invite two days behind it asks once, on his own date; the
  broker's text at hour three would do both in one message, and Job 3 will test whether the rows
  say so.
- **The told rules** decide what it must and must not say.
- **Your voice** decides only how it sounds. It never decides what is in the message. That is
  the seam the Profile module already drew: the brief carries the what and why, Profile the how.

## Arithmetic and judgement

The same split the ladder makes. Which count fills which part, and the order of the parts, are
rules written down here and applied the same way every time: anyone with the counts gets the
same four rows. The words are judgement, and so is the one question the counts cannot settle:
whether what is owed is really a gift, which leans on the story's own rule, something they asked
for or something you promised.

## Where it lives, and why not elsewhere

On the card, as four rows under `## The message`, in the same form as the Sources rows: the
part, the words, and what it rests on. `build.js` checks each row's ground the way it checks a
Sources row: a count the card quotes, a count of the envelope (the counts under `pushing`, which
hold for every draft whether or not the card names that read), a document the card sends, a told
source, or a channel the card's trail reaches. The opening row must rest on what is owed, a
fresh reason, their date or the angle, or, on a card a watch turns up, on what came back.

- **Not a new rung.** A message's shape is not a read. Nothing is read off it; it is a projection
  of reads that have already fired, the way the day's order is a projection of the cards. A rung
  above signals would have nothing to count.
- **Not a widget.** Widgets present what a card holds. The rows are what the draft is made of,
  and the draft widget already shows the draft.
- **Not the Brain alone.** The design log gives the Brain the message play. It can keep it; but
  a play nobody can trace is a message the tool made up, and the rows are how the play is traced.
- **Not a facet on every signal.** The table below says what each writing read contributes. A
  facet on the signal files can follow once more cards have proved the table; it was not written
  today because a rung nobody stands on is the failure mode this workspace keeps rediscovering.

## What each writing read contributes

The reads that make Act cards to a person, and the part of the message each one fills. A read
not listed makes no card that writes to anyone.

| Read | Opens with | Points at | Asks | Holds back |
|---|---|---|---|---|
| loose-end | the thing owed, with the admission | the thing itself, attached | nothing | anything the thing does not answer |
| cooling-champion | the gift in hand (it presupposes loose-end or things-they-asked-you-for) | the gift | nothing: "no need to reply" | the quiet itself, and any guess at its cause |
| deadline-they-gave | their date, in their words | what the step before the date is | the next step, once | any date but theirs |
| buying-intent | what they asked about | the answer, and what fits them | the next step | a price or a promise not on record |
| answer-gap | their worry, and that you have not answered it | the evidence that carries it, or the person who can | an offer they can decline | your own word on the thing they doubt |
| missing-people | what came back, when a watch turned the card up | nothing: the question is the message | one fact: who | a name the record gives and they have not |
| new-stakeholder | the thing owed to the new person, or the angle | what fits their role | nothing on a first note | anything said to their colleague as if to them |
| time-to-reconnect | the published reason, dated | the reason itself | nothing, or a call | anything that pretends the quiet did not happen |
| warm-path | how you came by them | the person who can introduce | the introduction | the introduction's words: those are the introducer's |
| champion-went-dark | the name the auto-reply gave | what their predecessor had | nothing on a first note | the predecessor's promises as if they carried |
| fit-match | what of theirs the fit rests on | the two or three things that fit | one clarification | the parts that do not fit |
| understanding-gap | the thing they have misread, said plainly | the claim, from your own catalogue | nothing | the correction dressed as their fault |
| price-barrier | the reframe: value, or a partial step | the partial rollout and its sheet | one question about scope | a discount not in the told authority |
| lead-with-this | the use-case that touches what they said | the evidence for it | one question | what usually works, when they have said otherwise |

*(The table is mine, not yet yours. Each row is a claim that a card will test.)*

## Tested on seven cards

The rows were written on the seven cards whose reads were decided from the records up on 22
September, and only those, because a message cannot be traced before its reads are. Every one
passed the build, and writing them changed three drafts: Gary's stopped claiming what "most
councils" do; Neil's admits the write-up was promised and took too long, and asks nothing; and
Rachel's peer-call note now says you have not answered her, because the row that opens it rests
on the count that says so. Thirty-three cards carry a draft across the three worlds; the twenty-six still
provisional have no rows and the build names them without refusing them.

## What this does not do

- It does not write drafts. A draft that passes the rows can still be badly written.
- It does not decide talking points for a call (Q25). The user kept that out of scope.
- It does not derive a message from the rows. The rows are the trail of a draft, checked; the
  draft is still written by hand in the cards, and by the tool in the product. Whether the rows
  could become the input rather than the check is the next question, and it is not asked here.
- It has not met the fast end. On a three-day deal the gift and the ask share one text, and the
  rows have to say so or they are not deciding anything. That is Job 3.
