---
id: existing-commitments
module: 02-relationships
label: What they already owe
blurb: What already goes out of each period to named others, from what their documents say and what the same payment month after month looks like.
kind: risk
confidence: graded
inputs: [figures-on-record, deal]
counts: [existing-commitments-on-record, repeated-outgoings-to-one-payee]
answers: [V12]
needs: [handover]
assumes: []
assumes_status: provisional
---

# What they already owe

## What it means

What this buyer already pays out, and to whom, before anything of yours. It is the list of what
their documents name as owed, plus what looks like a commitment because the same amount goes to the
same name period after period.

The two parts are kept apart in the read. A commitment the document names is a fact on record. A
run of repeated payments is a pattern, and the read says "looks like" of it, never "is". It
describes, and does not judge the sale: that is [`can-they-carry-it`](can-they-carry-it.md).

## In practice

A lead's accounts list a bank loan, and their statements show the same sum going to a finance
company on the same day each month for all six months. The read: "on record they owe the bank
loan the accounts name. The monthly payment to the finance company looks like a second
commitment; nothing they sent names it, so ask. To whom beyond that, nothing you have can say."

## How it is worked out

Applies the shared reading rules in [`docs/reading-principles.md`](../docs/reading-principles.md),
and the rules for what is never read into a document in
[`channels/handover.md`](../channels/handover.md).

- Trigger: the documents name at least one commitment (counting), or the same amount goes to the
  same payee in period after period (counting). The read carries both lists, named and apparent,
  each with its payee as the document names them. The one judgement is whether a run of repeated
  payments is a commitment rather than a supplier or a rent, and it is made by naming the pattern
  and asking, never by asserting it.
- Confidence: high for what a document names; "looks like" for what repetition suggests, softening
  as the run gets shorter or the amount varies. "To whom" is only ever as the document names them.
- Needs: what the buyer hands over. Without it nothing on record says what they owe, and the read
  cannot be made (a data gap, named not faked). What is on a public register, a charge or a
  filing, is covered by no channel, so the read cannot say it and says so rather than guessing.
  A commitment mentioned on an uncaptured call is a told gap until you say so.
- Assumes: nothing about the shape of the sale. It stands on the buyer's own documents alone, so it
  holds on a lead of a fortnight as well as on a customer of years.
- This read points neither way. It says what already goes out; whether what you sell fits on top
  is the read above it, and what you do is yours.
