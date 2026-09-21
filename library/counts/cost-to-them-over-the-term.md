---
id: cost-to-them-over-the-term
label: "What it costs them over the term"
used_by: [can-they-carry-it, disclosure-still-owed]
over: [price-position]
over_status: decided   # 21 September: confirmed when the arithmetic was written, which is what made it answerable
defined: true
counts: Your told price, spread over the told term and the told payment shape: what it costs them in each period, and in all.
needs: [offering-told#pricing]
breaks: A thing sold once has no term, and the cost is the price. Where the term or the payment shape is empty the sum cannot be done.
---

# What it costs them over the term
## What it counts

Your told price, spread over the term the offering runs for and the way it is paid, both told fields on `Pricing` since 21 September (`offering-told.md`). What it costs them in each period, and in all. Where the term or the payment shape is empty for this offering, the sum cannot be done, a told gap named not faked; a thing sold once has no term, and the cost is the price. Which records it needs and when the number stops meaning anything are not written in the count's fields yet, like every other count.

Two signals quote it, and for opposite purposes. [`can-they-carry-it`](../signals/can-they-carry-it.md) weighs the sum against what the buyer can bear. [`disclosure-still-owed`](../signals/disclosure-still-owed.md), since 21 September, only states it: a buyer about to agree is owed the total, whether or not it is one they can carry.

It counts within [`price-position`](../assemblies/price-position.md).

## What it cannot see

An offering whose term or payment shape you have not told it, and any cost to them that is not in your price: a fee on their side, or what a change costs them to make. Over six months it cannot see a season on their side; that is the reads on what they showed.
