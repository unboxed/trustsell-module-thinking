---
id: since-the-sale
module: 02-relationships
label: The deal since the sale
blurb: One deal that completed, and everything on record since: what was agreed, how far through it is, what they have paid, sent and said.
about: a deal
deterministic: true
inputs:
  - deal
  - salesforce#crm-record
  - goal-told#target-list
  - offering-told#pricing
  - figures-on-record
  - handover#handed-over-document
---

# The deal since the sale

## What it gathers

Gathers, for one deal that has completed, everything on record from the completion onwards: what
was agreed, how much of it has run, what the customer has paid where their own later documents
show it, what they have sent since, what has been said, and whom they have named.

Until now every gather in the library stopped at the signature. The ladder ended at the sale, so a
customer was a deal that had gone quiet, indistinguishable from one that had gone away. This is the
gather the three reads after the sale stand on.

**Where the sale's completion comes from.** It is a rung on the goal's ladder, and which rung
counts as the sale is the seller's to name, not the tool's to work out. Two places say where a deal
stands, and they are the two that already say it for every other rung. Where the CRM is connected,
the stage on the deal's own record, mapped onto the ladder. Where it is not, the line in your
target list that says where each one stands, which is where the ladder's rungs come from today
anyway. **Completion is fetched or told, never deduced.** The tool does not read a signature out of
an attachment, a payment out of a mail, or a sale out of the words "thanks, we're going ahead":
a contract in the handover is a document, and rule 5 of *What is never read* says a document is not
proof of anything. A deal whose ladder has no rung past the sale simply never reaches this gather,
and that is the honest answer rather than a guess. *(My reason, not yet yours.)*

It keys on the deal. The work is identity:

- **which rung the deal stands on**, and whether the ladder puts that rung after the sale;
- **one customer's later deal against their first**: a second advance, a renewal or a repeat order
  is a new deal on the same account, not a change to the old one, which is the rule
  [`deal`](deal.md) already uses to tell two deals apart;
- **before and after**: a figure handed over to qualify the sale is not evidence about what has
  happened since, so the periods are kept on their own sides of the completion date;
- **what was agreed**, which is the offering's price, term and way of paying as they stood on the
  day, not as they stand today;
- **a name said since**: someone the customer mentions, copies in or hands over who is not in the
  deal already.

What it cannot reach is the money itself. No channel in the library carries your own bank, your
firm's ledger or a funder's, so whether an agreed payment actually arrived is not on record
anywhere. What the gather has instead is what the customer's own later documents state, what the
CRM was told, and what was said out loud. That is a missing channel, named not faked, and it is a
different hole from the public register that [`existing-commitments`](../signals/existing-commitments.md)
names.

## Where it comes from

`deal` and `figures-on-record` are sibling assemblies: the selling effort with its conversations
and people, and the figures the buyer's documents state. `crm-record` resolves to
[`channels/salesforce.md`](../channels/salesforce.md), for the stage, the close date and the amount.
`target-list` resolves to [`told/goal-told.md`](../told/goal-told.md), where you say where each
organisation stands on the ladder, which is the answer when the CRM is not connected.
`pricing` resolves to [`told/offering-told.md`](../told/offering-told.md), for the price, the term
and how it is paid, the two fields added on 21 September; without a term nothing here can say how
far through anything is, and that is a told gap. `handed-over-document` resolves to
[`channels/handover.md`](../channels/handover.md), for what they have sent since. Whether the
ladder has a rung past the sale at all is the scenario's, in its `world/goal.md`: the patient
example's ladder ends at full adoption, so for that seller this gather is empty, and the reads
above it say so rather than inventing a customer life nobody recorded.
