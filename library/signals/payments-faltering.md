---
id: payments-faltering
module: 02-relationships
label: What they agreed is not being paid
blurb: A customer who bought is not paying what they agreed, as far as their own later records show.
kind: risk
confidence: graded
inputs: [since-the-sale, figures-on-record]
counts: [agreed-payments-not-on-record, words-about-paying, money-in-by-period]
answers: [V22]
needs: [salesforce, handover]
assumes: []
assumes_status: provisional
---

# What they agreed is not being paid

## What it means

A customer who bought is showing, on the record, that the arrangement is not holding.

Three things can show it, and none of them is the payment itself. Their own later documents can
fail to show a payment the agreement says should be in them. They can say so, on the thread or in
a text: asking to pause, asking to move a date, apologising for one that bounced. The CRM can carry
it, where somebody at your firm wrote it down.

The read is about the arrangement, never about the person. It does not say they are in difficulty,
badly run or a bad risk. It says what is agreed and what the record shows, and leaves the rest to
you, which is rule 2 of *What is never read* on
[`channels/handover.md`](../channels/handover.md) applied to a customer instead of a lead.

It points away from a sale, not toward one. The move it supports is a conversation, and often a
decision not to sell them anything else this month.

## In practice

A customer agreed a fixed payment every week over six months. They hand over three fresh months of
statements for something else, and two of those months show the payment and the third does not.
Separately they asked, three weeks ago, whether a payment could be moved. The read: "one agreed
payment is not in the records they gave me, and they raised the timing themselves."

## How it is worked out

Applies the shared reading rules in [`docs/reading-principles.md`](../docs/reading-principles.md).

- Trigger: a deal stands past the sale, and at least one of the three shows: an agreed payment
  missing from a period their own later documents cover, a word from them about paying, or a note
  on the CRM. Two of the three together make it firm; one alone is raised as a question, not a
  finding.
- Confidence: graded. High where they have handed over documents covering the period and the
  payment is simply not in them. Soft where the only ground is a single remark, which may be
  ordinary housekeeping. Money in per period since the sale is read only as context for a word they
  said, never on its own: a quiet month is not a missed payment, and reading one as the other would
  be a verdict on the person.
- Needs: what the buyer hands over, for any later document at all, and the CRM for what your firm
  wrote down. Without the handover the read has only words, and with neither it has nothing and
  says so.
- Assumes: nothing about the shape of the sale, so `assumes: []`. It needs a completed deal, which
  is a rung on the ladder rather than an assumption.
- What it cannot see, and this is the largest hole in the read: **whether the money arrived.** No
  channel carries your own bank, your firm's ledger or a funder's, so the one record that would
  settle it is not in the library. Every check above is a shadow of that record. A customer paying
  perfectly who hands over nothing and says nothing is invisible here, and so is one who has
  stopped paying and gone quiet. Naming that is the honest output; guessing from silence is not.
