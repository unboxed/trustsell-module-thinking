---
id: coming-round-again
module: 02-relationships
label: Coming round again
blurb: A customer is far enough through what they bought that the conversation can start over.
kind: opening
confidence: graded
inputs: [since-the-sale]
counts: [how-far-through-the-term, what-was-bought-before, times-they-have-bought]
answers: [V20]
needs: [crm]
assumes: []
assumes_status: provisional
---

# Coming round again

## What it means

Someone who already bought is near the end of what they bought, and that is the moment to talk
again.

A sale with a term in it has a clock. A twelve-month licence, a six-month advance, a year of
support: each of them runs out on a day that both sides know about, and the weeks before that day
are the only ones in which the question "and then what" is natural rather than pushy. The read
names that stretch.

It is not a renewal reminder. What makes the moment is the customer's own pattern as much as the
calendar: how far through this one is, what they took last time, and whether they have come back
before and how long they left it. A customer who has bought three times at roughly the same
interval is a different read from one who has bought once and never returned.

It says nothing about whether they should buy again, and nothing about what to offer. It says the
door is open and roughly for how long.

## In practice

A customer took a six-month arrangement that completed in March, paid over six months, and is
about five months through it. They took a smaller one the year before and came back about a month
before that one ended. The read: "they are near the end of this one, and last time they came back
at about this point."

## How it is worked out

Applies the shared reading rules in [`docs/reading-principles.md`](../docs/reading-principles.md).

- Trigger: a deal stands on a rung the ladder puts after the sale, and the share of its agreed term
  that has run is near the end of it. Where the customer has bought more than once, "near the end"
  is their own interval, not a fixed number of weeks; with one purchase behind them it is the term
  itself, and the read is softer for it.
- Confidence: graded. High where the term is a told fact, the completion date is on record and
  there is a repeat interval to compare with. Soft where the term is known but the customer has
  bought once, and it is not made at all where no term was ever told, because then there is no
  clock and nothing to be near the end of.
- Needs: the CRM for the stage and the completion date. Without it the read leans on your own
  target list for where the deal stands, which is a line you keep by hand and may not have kept, so
  the read under-reports (a data gap, named not faked). The term and how it is paid come from what
  you told the tool about the offering; where those are empty this read cannot be made at all, and
  it says so (a told gap).
- Assumes: nothing about the shape of the sale, so `assumes: []`. What it does need is a completed
  deal, and that is not an assumption about the sale's shape but a rung on the goal's ladder, which
  the goal already carries. A ladder that stops at the signature has no rung past it, so the read
  never arises; the patient example's does, and for that seller this read is silent rather than
  wrong.
