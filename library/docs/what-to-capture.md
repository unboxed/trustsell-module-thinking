# What the tool needs to be told

Written on 22 September 2026, on the user's point that context can be captured for five things,
the offering, the seller, the seller's organisation, people and organisations, and deals, and that
what the tool captures today for each could be wrong. The library can say what is needed rather
than what is captured, because every count names the records its arithmetic runs over and every
read names the gathers it reads. This document is that map, derived by walking those joins on 22
September, and beside it what the current tool captures, from reading its design. The
question for each thing is the same: **which told records does the arithmetic actually use, which
are only gathered, and which are typed and then read by nothing?**

Three degrees, and they matter:

- **In the arithmetic.** A count names the record in `needs:`. Without it the number is absent
  and the read says so. This is the strongest claim the library can make that a thing must be
  captured.
- **In the gather only.** A read's gather carries the record, so a read can see it, but no count
  does a sum over it. The record is context, and nothing in the library today turns it into a
  number. Either a count should, or it is captured for a reason the library has not written.
- **Used to adjust to you, not to read a prospect.** Typed and used by no read, because it changes
  how the tool speaks to you, how much it brings you, and how far ahead it works, or how a message
  sounds when it writes as you. This is a need of a different kind, not a lesser one: the whole
  point of the tool is to fit the seller rather than the seller fit the tool (the user, 22
  September). What is captured here is worth as much as what a count sums, and the doc says for
  each record what it adjusts.
- **Read by nothing and used by nothing.** Typed and unused. The doc names these plainly.

## The offering

What the reads' arithmetic needs, most-leaned-on first:

| Record | Reads whose sums use it | The questions they answer |
|---|---|---|
| Fit-shape (size, situation, the problem it solves) | 10: fit-match, answer-gap, lead-with-this, competitive-standing, recurring-objection, unbacked-claim, steps-on-their-side, delivered-before, turned-down-before, where-this-one-goes | Q1 to Q3, Q10 to Q13, Q15 to Q17, Q24, F3, F6, F8, F13, F16, V15 to V17 |
| Pricing (price, discount room, term, how it is paid) | 7: price-barrier, can-they-carry-it, disclosure-still-owed, coming-round-again, lead-with-this, recurring-objection, where-this-one-goes | Q15, V13, V18, V20, V15 |
| Use-case (the situation it is best for, the angle, for which buyer) | 6: lead-with-this, answer-gap, competitive-standing, recurring-objection, unbacked-claim, where-this-one-goes | Q10 to Q12, Q24, F16, Q15, Q17, Q11 |
| Pitch (what it is, why it is worth buying) | 5 | Q15, Q17, Q10 to Q12 |
| Worry and answer (the worry, your answer, the evidence it needs) | 5: answer-gap, competitive-standing, lead-with-this, recurring-objection, unbacked-claim | Q15, Q17, Q11, F3 |
| Names in the field (a rival, the incumbent, a lender) | 3: answer-gap, competitive-standing, unbacked-claim | Q15, F3, Q11 |
| Supplier (where it is not you) | 1: where-this-one-goes | V15 |

**Today the tool captures** one profile per offering in eight prose fields: product, customer,
value proposition, pricing, competition, current situation, goal, other; interviewed out of the
seller or built from a pasted document, editable by hand. Read against the table: the fit-shape
and the pitch are held as prose (customer, product, value proposition); pricing is held as prose
without the term, how it is paid or the discount room as things a count could read, and three
reads sum over the term (`cost-to-them-over-the-term`); the competition is held as a kind, not as
names. **Not held at all: a use-case tied to a kind of buyer (six reads), a worry with its answer
and the evidence it needs (five reads), and evidence tied to a claim (the organisation's proof
tag, three reads).** Two of the eight fields, current situation and goal, are not offering records
in the library at all: the goal is the Brain's, and where an offering stands is what the deal
gathers compute. *(My reading of the tool's design, not yet yours: the eight fields were chosen
to describe an offering; the reads need an offering described by what a buyer will ask about it.)*

## You, the seller

The seller is the thing the reads need least to be told about, and the thing the tool has to
adjust to most. Those are two different needs and the second is the larger.

**What the reads need**, the observation side:

| Record | Reads whose sums use it | The questions |
|---|---|---|
| Voice sample (a piece of your writing, and its context) | 1: voice | Q23, Q26 |
| About you (name, email, how you want to come across) | 2: colleague-already-in-touch, enough-tries, to tell your touches from a colleague's | V4, F12, V5, F11 |

**What the adjustment needs**, which is most of it. The Profile module
([`modules/05-persona-you.md`](../modules/05-persona-you.md)) holds it and every other module
reaches for it rather than keeping its own copy:

| Record | What it adjusts | How it is learned |
|---|---|---|
| How you write: a voice sample, then every edit you make to a draft before sending | how a message sounds when the tool writes as you: greeting, length, formality, sign-off | seeded by a sample if you give one, else read off sent mail; your edits are the strongest teacher, and the voice read counts them (`draft-to-sent-edit-distance`) |
| Fluency (sales shorthand or plain English with coaching) | the words the tool uses when it speaks to you | told as a starting stance, refined from what you ask it to explain |
| Cadence (all day, or a few minutes now and then) | how many cards a day, how hard to push | told, refined from how often you act and what you leave |
| Style (sustain a few, or work many) | the tilt between keeping relationships and opening new ones | told, refined from behaviour |
| Autonomy (how far it drafts or acts before you step in) | how far ahead it works; it always suggests | told, refined from what you send unchanged |
| Coaching (just hand me the noun, or tell me why and what to say) | how much a card explains; the lever that most separates a seller by trade from one by circumstance | told, refined from what you read and what you skip |
| A starting stance (sell for a living, or sell as part of my role) | the seed for all five dials, so setup asks one question rather than five | told once |

The library keeps these as configuration rather than reads on purpose: a read, when it changes,
points at a move on a prospect, and a dial changes how the tool works with you. But the loop
that refines a dial from behaviour is named in the module and not written anywhere, and it
stands on the same record the cold account asked for: what the tool suggested and what you did
with it. That record is the missing thing on this side too.

**Today the tool captures**: a name, your email addresses, one free-text bio ("a bit about you
and what you sell"), and one free-text block of standing instructions, which you type and which
the tool also adds to when you say "from now on" or "please don't" in chat. Every agent is given
both blocks on every call. There is no interview of the seller, no starting stance, no sample,
no dials. Read against the tables: the "about you" the two firm reads need is there; the voice
read has no sample and learns from sent mail alone, which the library allows, and it cannot learn
from your edits because there is no drafting yet; and the instructions block is the five dials
collapsed into prose, learned the right way (from what you say in passing) and held the wrong
way, because the tool cannot tell a line you typed from one it appended, and no dial can be read
off it as a setting the Brain paces by. *(My reading, not yet yours: the instructions block is
the right instinct and the wrong shape. The tool adjusts to you through five named things, and a
count over your behaviour can refine each of them; a blob of sentences can only be re-read.)*

## Your organisation

| Record | Reads whose sums use it | The questions |
|---|---|---|
| Proof tag (which claim a document backs, for which kind of buyer, named or anonymous, whose word) | 3: answer-gap, unbacked-claim, pushing | Q15, Q17, Q11, V17, V19, F18 |
| Rule (what can never be claimed, what must always be said, hard or soft) | 1: disclosure-still-owed | V18 |
| Pricing authority (discount ceiling, who signs beyond it, floor) | gathered by price-barrier; summed by nothing | Q15 |
| House voice (tone, required and forbidden phrasings, the band) | none | the render blends toward it; no read |

The proof tag is the single most useful thing an organisation can type, because it is what turns
a file in Drive into evidence a read can weigh: the same three reads that need it are the ones
that stop a seller asking to be believed on their word.

**Today the tool captures**: nothing the seller types. The organisation exists as a workspace,
named after the seller, with a membership list and which CRM backs it, and the seller cannot
create one, invite to one or set anything on one. Every table is scoped to one seller, so a
"company" snippet in the knowledge base is one seller's, not the firm's. Read against the table:
no proof tag, no rule, no pricing authority, no house voice. The three reads that stop a seller
asking to be believed on their word have nothing of the organisation's to stand on, and the read
that says a disclosure is still owed has no rule to read. This is the largest gap in the five,
and the library's own docs already say the organisation module is optional; what is not optional
is that a claim can be tied to a document, and today nowhere holds that.

## People and organisations

| Record | Reads whose sums use it | The questions |
|---|---|---|
| Deal outcome (how a deal ended, why, who said no) | 5: turned-down-before, delivered-before, coming-round-again, customer-introduction, payments-faltering | V16, V17, F13, V20, V21, V22 |
| Answer received (what came back from someone at your firm or a supplier) | 2: answer-came-back, disclosure-still-owed | V18 |
| Lead source (how you came by them, and whether you may say so) | 2: lead-with-this, warm-path | Q7, Q8, F17, Q10 to Q12, F16 |
| Buying process (the steps a buy needs on their side) | 1: steps-on-their-side | F6, F8 |
| Relationship note ("she decides even though she is quiet") | gathered by 35 reads; summed by none | |
| Offline touch (met at a conference, a call on a personal line) | gathered by 35; summed by none | |
| Contact preference (the best way or time to reach them) | gathered by 35; summed by none | |
| Correction (the read it overrides, and the truth) | gathered by 35; summed by none | |
| Seed contact (who they are, why they matter) | gathered by 7; summed by none | |

The four notes in the middle are what a seller most naturally types about a person, and the
library carries them into every read's gather and does arithmetic on none of them. Three of
them plainly should be counted: an offline touch is the innocent explanation the quiet reads
look for and `innocent-explanation-scan` does not list it; a contact preference is the answer
`best-way-to-reach` is trying to compute and its counts never read it; a correction is the
feedback loop and nothing says what a corrected read does next. The relationship note is
different: it is the seller's judgement in words, which is exactly what the reads are meant to
reach without being told, so a note that says "champion" should sit beside the read that
computes it, not replace it. *(My reasons, not yet yours.)*

**Today the tool captures**: the hard fields of a person (name, email, role, company, social
links) and of an organisation (name, domain, industry, size), a free-text title per person and
organisation, and a free-text role per person and deal ("champion", "procurement", typed, no
list). The seller can state a change in chat ("she moved to Acme") and the tool asks before
writing it. There is storage for a note and readers for it, and no way to write one. Read
against the table: no relationship note, no offline touch, no contact preference, no correction,
no deal outcome beyond won or lost, no lead source, no buying process. The tool's summaries of a
person and a deal are written by the tool and cannot be edited or marked wrong. So the four
notes the library gathers and never sums are not captured either, which makes the question above
sharper: if they are captured, a count must read them; if they are not, the seller's judgement
enters nowhere but chat.

## The goal, and deals

| Record | Reads whose sums use it | The questions |
|---|---|---|
| Deal seed (a name, which offering, the people or threads it starts from, the buyer) | gathered by 20 reads; summed by none | it is the key every deal gather hangs on |
| Target list (the organisations in scope) | gathered by 3; summed by none | |
| Goal (what you want, pinned to an offering, with its finish line) | gathered by 1; summed by none | the Brain weighs every card against it |
| Tempo (patient or hard) | pulled by 2 reads, enough-tries and deadline-they-gave, as the line between patience and pestering and between comfortable and short | V5, F11, F10 |
| Target shape (who counts as worth chasing) | none | the fit-shape on the offering does this job; the two overlap and the library has not said which wins |

The deal seed is the one told record that is a key rather than a fact: twenty reads gather
through it and none sums it, which is right. The tempo is the one fact about a goal a read
actually uses, and until today it was named in two reads' prose and joined in one.

**Today the tool captures**: a deal's name, amount, close date, stage (from a list of stages the
seller writes, each with a typed description), an outcome of won or lost, and its links to
people, organisations and an offering. On each suggested action the seller can accept, reject
with a reason in their own words, and speak updates that the tool writes down. Read against the
table: the deal seed is there, and richer than the library's; the outcome is a flag with nowhere
to say why, which the five reads over how deals ended all need; there is no goal on a deal (the
tool's own line is "the deal is the goal"), no tempo, no target list or shape, and the goal per
offering that once existed is written to by nothing. The rejection with a reason is the one
first-class correction in the product, and the library has no told record for it: it is the
feedback the cold account asked for, and it exists on the tool's side and not on the library's.

## The tool's own history, the sixth thing

Added on 22 September as a told source of its own, [`told/history-told.md`](../told/history-told.md),
because four things stood on it and nothing held it: every card the tool raised and the reason it
gave, what you did with it (sent as it was, sent changed, not now, not relevant and why, an Ask
answered), and the edit between a draft and what went out. Nobody types it; the tool writes half
and your taps and edits write the rest. It is what "not the same reason twice", asking once, the
voice read and the refining of your settings all need. One count reads it today
(`draft-to-sent-edit-distance`); the other three joins are named in the file and not made.

**Today the tool captures** half of it: a suggestion rejected with a reason in your own words,
kept and turned into memory, and reversible if you restore the suggestion. Accepting stores no
reason, un-ticking a proposed change stores nothing, and there is no draft yet to edit.

## What this says about what to capture

- **Capture what the tool adjusts to you by, and keep it as settings, not sentences.** How you
  write (a sample, then your edits) and how you work (the five dials, seeded by one question about
  who you are). The tool exists to fit the seller; this is the context that does it, and a count
  over your behaviour can refine a setting where it cannot refine a paragraph.
- **Capture what a count sums, next.** For the offering that is the fit-shape, the pricing with
  its term and how it is paid, and the use-case by kind of buyer; then a worry with its answer and
  the evidence it needs. For the organisation it is the proof tag. For people it is how a deal
  ended and how you came by them. Each of these is a field a number runs over, and a read goes
  silent without it.
- **A note the seller types about a person is only worth capturing if a count reads it**, and
  today none does. Either wire the three that should be (offline touch, contact preference,
  correction) or stop asking.
- **Prose fields are not wrong, they are just not enough.** The tool's eight prose fields describe
  an offering well enough for a person to read. A read needs the same facts as things it can count:
  a price with a term, a use-case with a buyer type, a worry with an answer and a kind of evidence.
- **Two things nobody captures and two reads need**: the tool's own history (what it suggested,
  what you did), and the buying process on the buyer's side, which today an Ask has to raise.
  The first is half there on the tool's side: a rejected action with the seller's reason, kept
  and turned into memory, which is the one correction the product has. The library should carry
  it as a told record, because "not the same reason twice" and the rule against re-asking both
  stand on it.
- **The organisation is where the tool holds least and the reads need most that cannot come
  from anywhere else.** A proof tag, a rule and a pricing authority are facts nobody but the
  firm can supply, and today there is no firm in the tool to supply them.
