---
id: how-they-ended
label: "How they ended"
used_by: [delivered-before, turned-down-before]
over: [deal-outcomes]
over_status: decided   # 21 September: confirmed when the arithmetic was written, which is what made it answerable
defined: true
counts: For each ended deal, which of the four ways it ended, and when.
needs: [people-told#deal-outcome, crm#deal-decision, crm#deal-record]
breaks: An ending is told or fetched, never deduced. A quiet deal is quiet, not lost.
---

# How they ended
## What it counts

The split of a set of ended deals across the four states an ending can have: you sold it, they went elsewhere, they did nothing, you withdrew. Said as a number in each state and as a share of the set, over whichever set of deals the read hands it, which is usually the deals of this shape.

"They did nothing" is kept apart from "they went elsewhere" on purpose, because they are different endings: one is a decision against you, the other is a decision nobody made. Collapsing them into "lost" would be the count doing the read's job.

It counts within [`deal-outcomes`](../assemblies/deal-outcomes.md), the pile of ended deals. Which records it needs and when the number stops meaning anything are not written in the count's fields yet, like every other count.

## What it cannot see

Whether an ending was recorded honestly, which is the seller's own account of their own losses. A deal recorded as "they did nothing" when they quietly bought elsewhere counts as the former. And a set too small to have a share worth saying: three deals give a share of a third, which reads as a rate and is not one.
