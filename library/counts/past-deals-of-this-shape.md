---
id: past-deals-of-this-shape
label: "Past deals of this shape"
used_by: [delivered-before, turned-down-before]
over: [deal-outcomes]
over_status: decided   # 21 September: confirmed when the arithmetic was written, which is what made it answerable
defined: true
counts: Of the ended deals, how many were with buyers matching this one's told fit-shape.
needs: [people-told#deal-outcome, crm#deal-decision, crm#deal-record, offering-told#fit-shape]
breaks: Where the fit-shape is empty, "one like this" means nothing and the count is absent.
---

# Past deals of this shape
## What it counts

How many ended deals match the one in hand, and which they are. Matching is on the told fit-shape only: the same offering, and a buyer that answers the fit-shape the same way on each of its facets (size, situation, the problem it solves). A deal that matches on some facets and not others is counted at the level it matches, so the number is really a series, from "the same offering to any buyer" down to "the same offering to a buyer like this one", and the reads above use the tightest level that still has deals in it.

It counts within [`deal-outcomes`](../assemblies/deal-outcomes.md), the pile of ended deals. Which records it needs and when the number stops meaning anything are not written in the count's fields yet, like every other count.

## What it cannot see

Deals that ended before the tool was there, which is most of a long career. An ending nobody recorded, because an ending is told or fetched and never deduced, so a deal that simply stopped being worked is still open as far as this count knows. And any likeness the fit-shape does not name: where the fit-shape is empty there is no such thing as a deal of this shape, and the count is not made at all.
