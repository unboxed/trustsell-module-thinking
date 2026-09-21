---
id: money-in-by-period
label: "Money in, by period"
used_by: [uneven-income, payments-faltering]
over: [figures-on-record]
over_status: decided   # 21 September: confirmed when the arithmetic was written, which is what made it answerable
defined: true
counts: What came into the business in each period the documents cover, in the documents' own words.
needs: [handover#handed-over-document, handover#stated-figure, handover#stated-commitment, handover#document-request]
breaks: It reads figures as stated. It does not add, adjust or annualise them.
---

# Money in, by period
## What it counts

Money in, per period the documents cover: each stated figure whose kind is money in, laid out by the month or year it covers. The periods are the documents' own; where none covers a month, that month is a gap, not a zero.

It counts within [`figures-on-record`](../assemblies/figures-on-record.md), what the buyer's documents show. Two reads use it, and at opposite ends of a sale: [`uneven-income`](../signals/uneven-income.md) reads the swing between periods before a sale, and [`payments-faltering`](../signals/payments-faltering.md) reads the periods after one, as context only. Which records it needs and when the number stops meaning anything are not written in the count's fields yet, like every other count.

## What it cannot see

Cash that never reaches a statement, and a period no document covers. Money in is not on any public register either, so the channel added on 21 September does not help here. A figure the buyer said rather than showed is kept apart by the gather and is not summed here.
