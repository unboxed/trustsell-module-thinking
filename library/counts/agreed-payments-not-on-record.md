---
id: agreed-payments-not-on-record
label: "Agreed payments their records do not show"
used_by: [payments-faltering]
over: [since-the-sale]
over_status: decided   # 21 September: confirmed when the arithmetic was written, which is what made it answerable
defined: true
counts: What was agreed they would pay, against what the record shows arriving.
needs: [people-told#deal-outcome, crm#deal-decision, crm#deal-record, handover#handed-over-document, handover#stated-figure, handover#stated-commitment, handover#document-request, gmail#email-message, gmail#email-thread, slack#slack-message, sms#text-message, meet#transcript]
breaks: Whether money actually arrived is on no record the tool holds, which is the gap the reads above it name rather than fill.
---

# Agreed payments their records do not show
## What it counts

The payments the agreement says fall in the periods the customer's later documents cover, against the ones those documents actually state. The difference is the number: how many are missing, in which periods, and against how many periods there was anything to check in at all. A period no document covers is not a miss and is counted separately as not checked.

It counts within [`since-the-sale`](../assemblies/since-the-sale.md), the deal since it completed. Which records it needs and when the number stops meaning anything are not written in the count's fields yet, like every other count.

## What it cannot see

Whether the money arrived. No channel carries your own bank, your firm's ledger or a funder's, so this count is a comparison against what the customer chose to hand over, not against the record of payment. A customer who hands over nothing has no missing payments here and may have missed every one. That is the hole the read names rather than fills.
