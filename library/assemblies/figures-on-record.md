---
id: figures-on-record
module: 02-relationships
label: What their documents show
blurb: The figures one buyer has shown or stated, lined up by the period each covers, and what their documents say they owe.
about: a deal
deterministic: true
inputs:
  - handover#stated-figure
  - handover#stated-commitment
  - handover#handed-over-document
  - web-form#form-submission
  - document-set
  - deal
---

# What their documents show

## What it gathers

Gathers, for one deal, every figure the buyer's documents state and every commitment they name,
and lines them up by the period each covers. Beside them it keeps the figures the buyer stated
themselves: an amount or a monthly takings answered on your enquiry form, or a figure said on the
thread. Shown and said are kept apart, because a read grades them differently.

It keys on the deal, through the document set: a stated figure belongs to the document it was read
from, and the document to the deal of the person who sent it. The work is identity:

- which period a figure covers, so that twelve monthly figures line up as a year and a yearly
  figure is not mistaken for a month;
- the same payee across periods, so that one name spelt two ways is one name;
- the same commitment named in two documents (a loan on the accounts and its repayment on the
  statements), counted once;
- a figure the buyer said against one they showed, kept as a pair rather than merged.

Where a document states a figure under a label the tool cannot place, the figure is kept as
unplaced. Where a period has no document covering it, the gap stays a gap. It does not average
across one, and it does not fill it.

It reads what is stated and nothing more. [`channels/handover.md`](../channels/handover.md), under
*What is never read*, says what no read above this gather may do with the figures: no verdict on
the person, nothing beyond the purpose the documents were handed over for, nothing about their
kind of business, and no view on whether a document is genuine.

It sits beside [`document-set`](document-set.md), not inside it. That gather is the envelope, what
you asked for against what came, and the read that stands on it should not change when the inside
is read. *(My reason, not yet yours.)*

## Where it comes from

`stated-figure`, `stated-commitment` and `handed-over-document` resolve to
[`channels/handover.md`](../channels/handover.md), what the buyer hands over. `form-submission`
resolves to [`channels/web-form.md`](../channels/web-form.md): where your form asks for a figure
(takings, the amount wanted), the answer is a figure the buyer said, the earliest one the tool
has, and this is the first gather to draw from that channel. `document-set` and `deal` are the
sibling assemblies that say which documents, and whose. What the buyer said on the thread comes
through the deal's conversations. A figure on a public register is covered by no channel, and a
figure the buyer said on an uncaptured call is a told gap until you say so.
