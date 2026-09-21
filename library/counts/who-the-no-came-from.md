---
id: who-the-no-came-from
label: "Who the no came from"
used_by: [turned-down-before]
over: [deal-outcomes]
over_status: decided   # 21 September: confirmed when the arithmetic was written, which is what made it answerable
defined: true
counts: Who made the decision on each ended deal, where it was not the buyer.
needs: [people-told#deal-outcome, crm#deal-decision, crm#deal-record]
breaks: Where nobody recorded who decided, it says so rather than assuming the buyer did.
---

# Who the no came from
## What it counts

Of the ended deals in a set that ended against you, how many were ended by the buyer and how many by a third party whose agreement the sale needed, counted by party where the party is named. On a sale with only two sides every no is the buyer's and the count says so in one line. On a brokered or underwritten sale it is the useful half: the same buyer can be refused by one supplier and taken by the next, and which of them said no changes entirely what the refusal means.

It counts within [`deal-outcomes`](../assemblies/deal-outcomes.md), the pile of ended deals. Which records it needs and when the number stops meaning anything are not written in the count's fields yet, like every other count.

## What it cannot see

Who really decided inside the buyer, which is the stakeholder map's question and not this one: a no from an organisation is counted as the organisation's however many people were behind it. And a third party that was never asked, so a deal nobody submitted anywhere looks the same here as one everybody refused.
