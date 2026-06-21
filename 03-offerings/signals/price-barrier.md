---
id: price-barrier
floor: signal
label: Price barrier
blurb: Where your price sits against the field, and whether it's likely to be a barrier on this deal.
inputs: [price-position]
measures: [your-price, competitor-price-band, price-delta-vs-leader]
answers: [Q15]
modes: [grow]
kind: risk
confidence: graded
---

# Price barrier

A Grow read on one offering: where your price sits against the field, and whether that gap is likely
to surface as a barrier (Q15). It reads the [`price-position`](../assemblies/price-position.md) gather
and turns the side-by-side numbers into a "watch for this" rather than leaving them as raw figures.

| Floor | What Offerings has |
|---|---|
| **Facts** (1) | your told price and discount room for BOPS; rivals' public pricing pages the price-position assembly gathered |
| **Counts** (2) | *your price:* £X per seat per year · *competitor price band:* £Y–£Z from two public pages · *price delta vs leader:* +18% above the cheapest named rival · *discount room:* down to −10% (told), which does not close the gap |
| **Opinion** (3) | **"You're priced above the field"**: 18% over the cheapest rival, and your discount room doesn't reach them, so expect price to come up on a cost-led council · *confidence: graded* |

What surfaces is not "you're expensive" but *"you sit 18% above the cheapest named rival and your
−10% floor doesn't reach them, so on a cost-led council price will be raised; lead on value or
partial-rollout to reframe it."* Every clause walks back to your told price and a rival's published
page.

**Threshold.** There is no fixed "X% above = barrier". The gap is read against the field you actually
compete with (the named rivals on the board), not a global average, and against your own discount
room: an 18% gap you can discount away is different from one you cannot. Price reads as a likely
barrier when the delta is real **and** your room does not close it **and** the buyer is cost-led (a
fit-shape factor), not on the raw number alone.

**Why it's trustworthy.** The arithmetic is all deferred counting: your price, the rivals' published
prices, the delta, your discount floor. Anyone could redo it over the same pages. The one judgement,
whether the gap will actually *bite*, is graded by the buyer's own priorities (a cost-led buyer
versus a continuity-led one) rather than asserted. The `confidence` is **graded** on how complete the
field is.

**Where it can fail to reach ground.** Where rivals publish no price (much enterprise pricing is
"contact us"), the field has holes and the delta is computed against fewer points, a **data gap** on
the open web, named not faked. And whether *this* buyer is cost-led is a fit-shape fact that may be a
**told gap**.
