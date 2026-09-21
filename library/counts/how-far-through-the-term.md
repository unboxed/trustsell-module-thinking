---
id: how-far-through-the-term
label: "How far through the term"
used_by: [coming-round-again]
over: [since-the-sale]
over_status: decided   # 21 September: confirmed when the arithmetic was written, which is what made it answerable
defined: true
counts: How much of an agreed term has run, and how much is left.
needs: [people-told#deal-outcome, crm#deal-decision, crm#deal-record, offering-told#pricing, crm#deal-record]
breaks: It needs a start and a term on record. A deal with neither cannot be placed on its own timeline.
---

# How far through the term
## What it counts

The share of the agreed term that has run, from the day the deal completed to today, against the term as it was told for the offering on that day. Said as a share and as the time left, in the units the term is in. Where no term was told, there is no number, and the entry stays empty rather than defaulting to a year.

It counts within [`since-the-sale`](../assemblies/since-the-sale.md), the deal since it completed. Which records it needs and when the number stops meaning anything are not written in the count's fields yet, like every other count.

## What it cannot see

A term that changed after the day, because what was agreed is kept as it stood and a later change is a told fact nobody has said. An arrangement with no end, such as a thing sold once with nothing running afterwards, where the share is meaningless rather than zero. And a completion date nobody recorded, which without the CRM is whatever your target list says.
