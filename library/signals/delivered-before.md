---
id: delivered-before
module: 03-offerings
label: You have done this before
blurb: Deals of this shape that you actually sold, which is what you can point at instead of asking to be taken on your word.
kind: opening
confidence: graded
inputs: [deal-outcomes]
counts: [past-deals-of-this-shape, how-they-ended, how-recently-one-completed]
answers: [V17]
needs: [crm]
assumes: []
assumes_status: provisional
pull: People's pile of ended deals, gathered from what you told it and what the deal record holds
---

# You have done this before

## What it means

You have sold this to a buyer like this one, and that is a fact rather than a claim.

A stranger has no reason to believe you. The library already knows the two honest ways round
that: give them something they asked for, and show them something on the shelf. This is the
third, and it is the one a seller usually reaches for first in conversation and has nowhere to
keep. It is your own record of having done the thing: how many of this shape you have sold, and
how recently.

It is not the evidence shelf. A case study is a document somebody wrote up and may name a customer
you can point at; this is the plain fact that the work was done, which exists whether or not anyone
wrote it up. The two answer the same question from different sides, and a seller with neither is
asking to be taken on trust.

It says nothing about how the delivery went. Sold is not the same as glad, and this read never
implies the second.

## In practice

Eleven deals of the same offering have ended with a buyer of this size and this situation. Seven
were sold, the most recent of them four months ago. The read: "you have sold seven like this one,
the last four months ago. That is the ground the message stands on, and it does not have to be
said as a boast."

## How it is worked out

Applies the shared reading rules in [`docs/reading-principles.md`](../docs/reading-principles.md).
Borrows People's pile of ended deals, which is where a deal's ending is recorded.

- Trigger: the ended deals matching this one on the told fit-shape include sales, at the tightest
  level of matching that still has deals in it. The counting is which deals match, how they ended
  and how long ago the last sale of this shape was. The one judgement is how tight a match still
  counts as one like this.
- Confidence: high where several close matches were sold and one of them recently, in the units
  this sale runs in. It softens where the match is loose, where there is one sale to point at, or
  where the last one is old enough that the seller would have to say so. It is not made where none
  of this shape has been sold, and an empty record is reported as an empty record, never as a
  reason to say nothing about your record and never as a reason to overstate it.
- Needs: the CRM, for the endings a deal system holds; without it the read stands on what you have
  told the tool, so an old hand who has told it nothing looks new (a data gap and a told gap,
  named not faked). The told fit-shape is the other ground: where it is empty, "one like this"
  means nothing and the read is not made.
- Assumes: nothing about the shape of the sale, so `assumes: []`. It needs no thread and no
  history with this buyer, which is the point of it: it is what there is to say to somebody you
  have never spoken to. What it needs is a record of endings, which fills up as you use the tool.
- It sits in Offerings, beside [`turned-down-before`](turned-down-before.md), because both are
  facts about the thing you sell rather than about this buyer; the endings themselves are People's.
  It is the half of "why should a stranger believe me" that [`pushing`](pushing.md) named as
  missing and could not reach: that read says what the thread cannot honestly carry, and this one
  says what it can. *(My reason, not yet yours.)*
