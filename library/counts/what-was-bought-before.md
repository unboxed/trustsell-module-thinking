---
id: what-was-bought-before
label: "What they bought before"
used_by: [coming-round-again]
over: [since-the-sale]
over_status: decided   # 21 September: confirmed when the arithmetic was written, which is what made it answerable
defined: true
counts: What each of those earlier purchases was: the offering, the amount, the term.
needs: [people-told#deal-outcome, crm#deal-decision, crm#deal-record, crm#deal-record, offering-told#pricing]
breaks: It carries what the record holds, which for an old deal is usually a name and a number and nothing about how it went.
---

# What they bought before
## What it counts

Each completed deal with this customer: the offering, the amount, the term, how it was paid and the day it completed. A plain list, most recent first. It is what was agreed as it stood then, not as the offering stands today.

It counts within [`since-the-sale`](../assemblies/since-the-sale.md), the deal since it completed. Which records it needs and when the number stops meaning anything are not written in the count's fields yet, like every other count.

## What it cannot see

Anything bought before the tool was there, unless you said so. Anything bought from somebody else, which is theirs and not on your record at all. And a deal whose ladder has no rung past the sale, where nothing ever counts as completed.
