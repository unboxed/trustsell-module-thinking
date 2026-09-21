---
id: catalogue
module: 03-offerings
label: Everything you sell
blurb: Every offering side by side: what each is, who it suits, what it costs and who supplies it.
about: what you sell
deterministic: true
inputs:
  - offering-entry
  - goal-told#goal
---

# Everything you sell

## What it gathers

Gathers every offering entry into one pile, so they can be compared instead of read one at a time.

[`offering-entry`](offering-entry.md) is one thing on one set of terms, and until 21 September that
was the whole of what the library could hold: a seller with one product. This is the shelf the
entries sit on. It is the second gather keyed on no single subject, after
[`deal-outcomes`](deal-outcomes.md), and it needs no new machinery for the same reason: a count
over a pile is counted exactly as a count over one person is.

It holds, for each entry:

- **what it is and who it suits**, the told pitch and fit-shape, which is what a lead is matched
  against;
- **what it costs**, and over what term, and how it is paid;
- **who supplies it**, where it is not you, and what you have to do to put a buyer to them;
- **whether it is in play for this goal**, which the goal itself names.

**A supplier's version is its own entry.** Where you broker, resell or place the same product with
several suppliers, the shelf holds one entry per supplier rather than one product with a list of
suppliers under it. The reason is that the things a read compares, the fit-shape and the price, are
the supplier's and not the product's: a lender that will not take this trade and a lender that will
are two different answers to the same buyer. A second rung to model the product behind them would
buy nothing any read consults. The cost is real and worth saying: the pitch, the use-cases and the
worries repeat across those entries, and today nothing shares them. *(My reason, not yet yours.)*

It forms no opinion. It does not rank, does not say which is best, and does not know the lead.
Which one a lead should go to is [`where-this-one-goes`](../signals/where-this-one-goes.md), one
floor up.

A shelf with one thing on it is a shelf, not an error. Most sellers have exactly that, and the
reads above say plainly that there is nothing to choose between rather than declaring a winner.

## Where it comes from

`offering-entry` is a sibling assembly, gathered once per entry. `goal` resolves to
[`told/goal-told.md`](../told/goal-told.md), where you name what the goal is pinned to, which is
what tells the shelf apart from the part of it in play right now. The scenario's own
`world/goal.md` carries the same list as `offering:`, the ids a card can be about.
