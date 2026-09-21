---
id: cost-of-each-to-them
label: "What each would cost them"
used_by: [where-this-one-goes]
over: [catalogue]
over_status: decided   # 21 September: confirmed when the arithmetic was written, which is what made it answerable
defined: true
counts: For each offering on the shelf that this buyer could take, what it would cost them over its own term.
needs: [offering-told#pricing, offering-told#fit-shape]
breaks: It is the shelf price per offering, not what any of them was quoted at.
---

# What each would cost them
## What it counts

For each offering on the shelf that could take this lead, what it would cost the buyer: the told price, over the told term, paid the told way. Said side by side and in the same units, so two entries priced differently can be compared at all. Where an entry's price, term or way of paying is not told, it has no figure here and is listed as unpriced rather than assumed cheap.

It is the shelf-wide version of [`cost-to-them-over-the-term`](cost-to-them-over-the-term.md), which does the same arithmetic for one deal in hand over [`price-position`](../assemblies/price-position.md). This one is over the shelf, before there is a deal to price.

It counts within [`catalogue`](../assemblies/catalogue.md), everything you sell. Which records it needs and when the number stops meaning anything are not written in the count's fields yet, like every other count.

## What it cannot see

What the supplier would actually quote this buyer, which on a brokered or underwritten sale is the only figure that matters and does not exist until they have been asked. A told price is a band, and a band is not an offer. It also cannot see what you earn on each, and that is deliberate: the read above does not rank on your own commission, and a count it never uses should not be there to tempt it.
