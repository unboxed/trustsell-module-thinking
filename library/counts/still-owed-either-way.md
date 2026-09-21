---
id: still-owed-either-way
label: "Still owed, either way"
used_by: [customer-introduction]
over: [since-the-sale]
over_status: decided   # 21 September: confirmed when the arithmetic was written, which is what made it answerable
defined: true
counts: On a completed deal, what either side still owes the other.
needs: [people-told#deal-outcome, crm#deal-decision, crm#deal-record, handover#handed-over-document, handover#stated-figure, handover#stated-commitment, handover#document-request, gmail#email-message, gmail#email-thread, slack#slack-message, sms#text-message, meet#transcript]
breaks: It reads what was promised and what arrived. A thing delivered without a trace looks owed.
---

# Still owed, either way
## What it counts

What is outstanding on a completed deal, on both sides and in one number: a document you promised and never sent, a question of theirs you never answered, a document you asked them for that never came, and anything the CRM records as unresolved. Yours and theirs are counted apart, because they mean opposite things.

It counts within [`since-the-sale`](../assemblies/since-the-sale.md), the deal since it completed. Which records it needs and when the number stops meaning anything are not written in the count's fields yet, like every other count. What it counts on your side is the same arithmetic as the promises and asks the open items already track, read on a deal that has finished rather than one running.

## What it cannot see

Something that went wrong and was settled on a call, which leaves the record looking worse than the relationship is. And the opposite: a customer who is quietly unhappy and has said nothing, where the count is zero and the answer is still no.
