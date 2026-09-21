---
id: existing-commitments-on-record
label: "What they already owe, on record"
used_by: [can-they-carry-it, existing-commitments]
over: [figures-on-record]
over_status: decided   # 21 September: confirmed when the arithmetic was written, which is what made it answerable
defined: true
counts: What this buyer already owes, and to whom, from what they handed over and what is publicly filed.
needs: [handover#handed-over-document, handover#stated-figure, handover#stated-commitment, handover#document-request, public-records#registered-charge, public-records#public-filing, public-records#credit-standing, public-records#court-judgment]
breaks: It sees what is filed and what was handed over. A commitment that is neither is invisible, and most are.
---

# What they already owe, on record
## What it counts

What the buyer's documents name as owed, and to whom: each stated commitment, with its payee as
the document names it, what it is called, how much and how often, and until when where the
document says. Plain listing. It does not add a commitment the documents do not name; the run of
repeated payments that suggests one is [`repeated-outgoings-to-one-payee`](repeated-outgoings-to-one-payee.md),
and joining the two is the read's judgement.

It counts within [`figures-on-record`](../assemblies/figures-on-record.md), what the buyer's
documents show. Until 21 September it counted within `document-set` and said "not written yet";
the shape of what the tool reads inside a document is now written in
[`channels/handover.md`](../channels/handover.md). Which records it needs and when the number
stops meaning anything are not written in the count's fields yet, like every other count.

## What it cannot see

Anything on a public register: a charge, a filing, a judgment. No channel covers those, and the
reads that use this count say so rather than guessing. A commitment the buyer mentioned on an
uncaptured call is a told gap until you say so.
