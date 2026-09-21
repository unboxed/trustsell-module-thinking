---
id: existing-commitments
module: 02-relationships
label: What they already owe
blurb: What already goes out of each period to named others, from what their documents say, what the same payment month after month looks like, and what is secured against them on the register.
kind: risk
confidence: graded
inputs: [figures-on-record, deal]
counts: [existing-commitments-on-record, repeated-outgoings-to-one-payee, charges-on-the-register]
answers: [V12]
needs: [handover, public-records, offering-told]
assumes: []
assumes_status: provisional
---

# What they already owe

## What it means

What this buyer already pays out, and to whom, before anything of yours. It is the list of what
their documents name as owed, what looks like a commitment because the same amount goes to the same
name period after period, and what is secured against them on the public register.

The three parts are kept apart in the read. A commitment the document names is a fact on record. A
run of repeated payments is a pattern, and the read says "looks like" of it, never "is". A charge on
the register is a fact too, but somebody else's record of this buyer rather than the buyer's own, so
it carries the date it was registered and how sure the tool is that the entry is theirs. It
describes, and does not judge the sale: that is [`can-they-carry-it`](can-they-carry-it.md).

## In practice

A lead's accounts list a bank loan, and their statements show the same sum going to a finance
company on the same day each month for all six months. The register carries a charge, registered
last year and still outstanding, in favour of a third party nothing they sent mentions. The read:
"on record they owe the bank loan the accounts name. The monthly payment to the finance company
looks like a second commitment; nothing they sent names it, so ask. And there is a charge on the
register from last year in favour of a third name, which they have not mentioned either."

## How it is worked out

Applies the shared reading rules in [`docs/reading-principles.md`](../docs/reading-principles.md),
and the rules for what is never read into a document in
[`channels/handover.md`](../channels/handover.md).

- Trigger: the documents name at least one commitment (counting), or the same amount goes to the
  same payee in period after period (counting), or the register lists a charge still outstanding
  against them (counting). The read carries the three lists apart, named, apparent and registered,
  each with its party as the source names them. The one judgement is whether a run of repeated
  payments is a commitment rather than a supplier or a rent, and it is made by naming the pattern
  and asking, never by asserting it. A payee it can put a name to because you told it who is in
  this field is said with that name; one it cannot is said as the document writes it.
- Confidence: high for what a document names; "looks like" for what repetition suggests, softening
  as the run gets shorter or the amount varies. A charge is as sure as the identity match behind
  it and as current as its date, and both are said rather than assumed.
- Needs: what the buyer hands over. Without it nothing they showed says what they owe, and the
  read falls back to the register alone (a data gap, named not faked). The register is a lookup
  rather than a connection, so it is always available in principle and patchy in practice: what it
  holds differs by country, unsecured borrowing leaves no charge, and none of it is complete. Who
  the names in this field are is a told fact; without it a payee is only ever as the document
  writes it. A commitment mentioned on an uncaptured call is a told gap until you say so.
- Assumes: nothing about the shape of the sale. It stands on the buyer's own documents and what is
  publicly recorded about them, so it holds on a lead of a fortnight as well as on a customer of
  years.
- This read points neither way. It says what already goes out; whether what you sell fits on top
  is the read above it, and what you do is yours.
