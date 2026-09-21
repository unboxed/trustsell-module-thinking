---
id: times-they-have-bought
label: "How often they come back"
used_by: [coming-round-again]
over: [since-the-sale]
over_status: provisional   # decided when the count was written, 21 September; not yet confirmed.
defined: false   # the arithmetic is said in prose below; the fields the shape needs are not settled.
---

# How often they come back
## What it counts

How many deals with this customer have completed, and the gap between each completion and the next one starting. Two purchases give one gap, three give two, and one gives none. This is the customer's own interval, the after-the-sale twin of the rhythm the reading principles use for replies.

It counts within [`since-the-sale`](../assemblies/since-the-sale.md), the deal since it completed. Which records it needs and when the number stops meaning anything are not written in the count's fields yet, like every other count.

## What it cannot see

A first customer, who has no interval and never will have one until they come back. A repeat that was recorded as a change to the old deal rather than a new one, which the gather tries to tell apart and can get wrong. And the reason for a gap, which is never arithmetic.
