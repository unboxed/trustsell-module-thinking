---
id: answer-gap
module: 03-offerings
label: Worry without an answer
blurb: A worry on record with no grounded answer yet, or an answer whose evidence is missing or thin.
kind: risk
confidence: graded
inputs: [objection-list, proof-library, since-the-sale]   # since-the-sale added 22 September: a customer who has offered to speak is evidence too
counts: [objection-entry-exists, answer-grounded, proof-required-kind, proof-on-file, proofs-per-claim, proof-recency, named-vs-anonymous-reference, third-party-vs-self-asserted, offers-to-vouch]
answers: [Q15, Q17]
needs: [drive, web, gmail]
assumes: []
assumes_status: decided   # 22 September: fired on a worry raised by somebody met a fortnight ago, with a customer's offer on file as the answer; it needed no thread of theirs and no usual
pull: Organisation's evidence library, to supply the document a claim needs
---

# Worry without an answer
## What it means

A worry is on record from People, but there is no grounded answer ready for it. Or the answer leans on
evidence too thin to carry it.

It reads one worry at a time. It does not ask "can we answer this?" in the abstract. It asks whether
there is a grounded answer ready right now, with the evidence that worry needs, and whether that evidence is
actually strong.

The honest, useful edge is naming the gap plainly. It says when there is no good answer yet, or when
the answer rests on evidence that is old, anonymous, or only your own word, rather than improvising one.

Since 22 September the shelf it reads holds people as well as documents. Some worries no page can
carry, because the page is yours and the worry is whether to believe you; the answer to those is a
customer who has done the thing and has said they will speak to buyers. That offer is counted
([`offers-to-vouch`](../counts/offers-to-vouch.md), over the deal since the sale) and graded the
way a case study is: third-party by who speaks, and aged from the day it was made. An offer is not
a booking. The read says a customer *has offered*, never that they will, and a message that rests
on it asks the customer before it promises the buyer. *(My reason, not yet yours.)*

## In practice

A buyer worry such as a compliance attestation has come up on a thread, and there is no entry for it
among your told worries, no answer on file, and nothing in Drive. By contrast a second worry, data
residency, has a told answer backed by one case study, but the case study is four years old, written
by you rather than a third party. The read: "answer gap on the compliance worry, thin evidence on data
residency. The first has nothing on file; the second rests on a single ageing, self-written
reference."

## How it is worked out

Applies the shared reading rules in [`docs/reading-principles.md`](../docs/reading-principles.md).
Borrows the Organisation evidence library for evidence that belongs to the organisation
rather than this offering, such as a general track-record case study.

- Trigger: a worry counts as answered only when it is on the objection list with an answer, backed by
  the kind of evidence its claim needs, and backed by evidence strong enough to carry it. An entry present
  with strong evidence on file reads as covered; an entry missing, or evidence required but absent, is a
  gap; an answer present but evidence thin is a softer, named gap that says "shore this up" rather than
  "we have nothing". Strength is read against the claim, not a fixed bar, since an ageing named case
  study may carry a continuity claim but not a "current best-in-class" one. The one judgement, whether
  a claim needs evidence at all, leans on Offerings' own rule (a track-record claim needs a case study, a
  capability claim a spec line), not invention.
- Confidence: high when the gap is total (a live worry, no answer, no evidence); softer when an answer
  exists but its evidence is thin, where the read names why it is thin (old, anonymous, or self-asserted)
  rather than passing it as covered.
- Needs: Drive, for the "evidence on file" check; without it those checks come back
  empty and the read over-reports gaps, lowering confidence rather than inventing coverage (a data
  gap, named not faked). The open web supplies what research turned up. Where the organisation has
  tagged no evidence for a borrowed claim, that is a told gap across modules, named not faked.
  Mail, since 22 September, for a customer's offer to speak, which arrives as their words on a
  thread and nowhere else; the offer in your own profile's prose is your word about theirs.
- A person as the answer: where the worry is one only a peer can carry and a customer has
  offered, the read points at the person rather than the page, and its confidence is the offer's
  age. Six months unasked is an offer to check, not a call to promise.
- Assumes: nothing about the shape of the sale. A worry on record is enough, whoever raised it and
  however long you have known them.
