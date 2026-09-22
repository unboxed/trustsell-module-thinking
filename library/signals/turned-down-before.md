---
id: turned-down-before
module: 03-offerings
label: Turned down before, on one like this
blurb: A deal of this shape has been refused before, and the reason they gave is on record.
kind: risk
confidence: graded
inputs: [deal-outcomes]
counts: [past-deals-of-this-shape, how-they-ended, reasons-given-for-a-no, who-the-no-came-from]
answers: [V16]
needs: [crm]
assumes: []
assumes_status: decided   # 22 September: tested at the fast end on people never contacted or refused before; each stood on told shapes and records alone and needed nothing of the sale
pull: People's pile of ended deals, gathered from what you told it and what the deal record holds
---

# Turned down before, on one like this

## What it means

You have put a deal like this one forward before and been refused, and the reason is on record.

The read is not a forecast. It does not say this one will go the same way, and it must not: a
buyer is not the last buyer, and a refusal is one party's answer on one day. What it says is that
there is a known answer waiting at a known point, and that you have met it before. That is worth
knowing before the work goes in, not after.

The reason is the whole of the value. A deal refused three times for the price is a different
piece of news from one refused three times because a capability was missing, and different again
from one refused by a third party the sale needed rather than by the buyer. The first is a
conversation to have early, the second is an answer you may not have, and the third may not be
about the buyer at all.

It never says why the buyer really refused. It says what they said.

## In practice

Four deals for the same offering have ended with a buyer of this size and this situation. Three
were refused, one was sold. Two of the three refusals gave the same reason, in almost the same
words: the cost of moving off what they already had. The read: "three of the last four like this
were refused, and two of them for the cost of switching. That answer will be wanted early."

## How it is worked out

Applies the shared reading rules in [`docs/reading-principles.md`](../docs/reading-principles.md).
Borrows People's pile of ended deals, which is where a deal's ending is recorded.

- Trigger: the ended deals matching this one on the told fit-shape include refusals, and the read
  is made at the tightest level of matching that still has enough deals in it to be worth saying.
  The counting is which deals match, how they ended, what reasons were given and who gave them.
  The one judgement is whether two differently worded reasons are the same reason.
- Confidence: high where several deals of a close match were refused and the same reason is on
  record for more than one of them. It softens to a hunch where the match is loose (the same
  offering, any buyer), where only one deal has ended that way, or where the endings are on record
  but the reasons are not. It is not made at all where nothing of this shape has ended, and
  the honest output is that you have no record to go on rather than a clean sheet.
- Needs: the CRM, for the endings and reasons a deal system holds. Without it the read stands on
  what you have told the tool alone, which is as complete as you have been about your own losses
  (a told gap sitting inside a data gap, both named not faked). The told fit-shape is the other
  ground: where it is empty there is no such thing as a deal of this shape and the read cannot be
  made.
- Assumes: nothing about the shape of the sale, so `assumes: []`. It needs no thread, no history
  with this buyer and nobody else to win. What it does need is a record of endings, which is not
  an assumption about a sale but a pile that fills up as you use the tool. A seller in their
  first month has none and the read is silent, which is the honest answer and not a finding that
  nothing was ever refused.
- This read points against a move, or at least at the cost of one. It sits in Offerings because
  what a buyer refused is a fact about the thing you sell; the endings themselves are People's,
  and module 03 asks for them through its `connects`. *(My reason, not yet yours.)*
