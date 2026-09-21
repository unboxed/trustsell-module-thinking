---
id: repeated-outgoings-to-one-payee
label: "The same payment to the same name, period after period"
used_by: [existing-commitments]
over: [figures-on-record]
over_status: decided   # 21 September: confirmed when the arithmetic was written, which is what made it answerable
defined: true
counts: Regular payments out to the same payee, as they appear on the documents.
needs: [handover#handed-over-document, handover#stated-figure, handover#stated-commitment, handover#document-request]
breaks: A payee name is a name. It cannot tell a lender from a landlord unless the name says so.
---

# The same payment to the same name, period after period
## What it counts

The stated figures whose kind is money out, grouped by payee as the document names them, where the same amount goes to the same name in period after period. Each run is also matched against the names you have told the tool belong to this field, so a run going to a name you said is a lender is counted apart from a run going to a name nobody recognises. That matching is the gather's, and a name it is unsure of stays unmatched. It is arithmetic only: whether such a run is a commitment is the read's judgement, not this count's.

It counts within [`figures-on-record`](../assemblies/figures-on-record.md), what the buyer's documents show. Which records it needs and when the number stops meaning anything are not written in the count's fields yet, like every other count.

## What it cannot see

Cash that never reaches a statement, and a period no document covers. A name that is not on your told list of the field, which reads the same as a name that is not a lender. And a figure the buyer said rather than showed, which is kept apart by the gather and is not summed here. What is secured against them is a different count, [`charges-on-the-register`](charges-on-the-register.md).
