---
id: how-recently-one-completed
label: "How recently one completed"
used_by: [delivered-before]
over: [deal-outcomes]
over_status: decided   # 21 September: confirmed when the arithmetic was written, which is what made it answerable
defined: true
counts: How long since the most recent deal of this shape completed.
needs: [people-told#deal-outcome, crm#deal-decision, crm#deal-record]
breaks: It dates from the completion on record, which is told or fetched and never inferred.
---

# How recently one completed
## What it counts

How long ago the most recent deal of this shape was sold, and how many were sold in the stretch before that. Said in the units the sale runs in: days at a fast end, months or years at a patient one. Where none of this shape has ever been sold, there is no number and the entry stays empty rather than reading as a long time ago.

It counts within [`deal-outcomes`](../assemblies/deal-outcomes.md), the pile of ended deals. Which records it needs and when the number stops meaning anything are not written in the count's fields yet, like every other count.

## What it cannot see

A sale that completed before the tool was there, so an old hand starts with an empty record and looks new. And anything about how the delivery went afterwards: this counts that a deal was sold, and whether the customer was glad of it is [`since-the-sale`](../assemblies/since-the-sale.md)'s ground, where it is on record at all.
