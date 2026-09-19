---
id: price-barrier
module: 03-offerings
label: Price barrier
blurb: Where your price sits against the field, and whether it's likely to be a barrier on this deal.
kind: risk
confidence: graded
inputs: [price-position, pricing-fence, deal]
counts: [your-price, competitor-price-band, price-delta-vs-leader]
answers: [Q15]
needs: [web]
---

# Price barrier

## What it means

Where your price sits against the field, and whether that gap is likely to surface as a barrier on
this deal.

It reads one offering's price against the field it competes with, and turns the side-by-side numbers
into a "watch for this" rather than leaving them raw. It is the price half of the competitive picture.
Capability and lock-in are [`competitive-standing`](competitive-standing.md)'s, so the two reads never
double-judge the same thing.

A gap is not a barrier on its own. It bites only when the delta is real, your discount room does not
close it, and the buyer is cost-led.

## In practice

Your told price sits about 18% above the cheapest named rival, drawn from two public pricing pages,
and your told discount room of −10% does not reach them. The read: "you are priced above the field.
You sit 18% over the cheapest named rival and your floor does not reach them, so on a cost-led buyer
price will come up; lead on value or a partial rollout to reframe it."

## How it is worked out

Applies the shared reading rules in [`docs/reading-principles.md`](../docs/reading-principles.md).

- Trigger: there is no fixed "X% above = barrier". The gap is read against the field you actually
  compete with (the named rivals on the board), not a global average, and against your own discount
  room: an 18% gap you can discount away is different from one you cannot. Price reads as a likely
  barrier when the delta is real AND your room does not close it AND the buyer is cost-led, not on the
  raw number alone. The one judgement, whether the gap will actually bite, is graded by the buyer's own
  priorities (cost-led versus continuity-led) rather than asserted.
- Confidence: graded on how complete the field is. High when several rivals publish prices; soft when
  prices are scarce.
- Needs: the open web, for rivals' published prices; without it the field has holes
  and the delta is computed against fewer points (a data gap, named not faked). Whether this buyer is
  cost-led is a fit-shape fact that may be a told gap.