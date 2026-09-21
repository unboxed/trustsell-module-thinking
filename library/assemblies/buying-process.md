---
id: buying-process
module: 02-relationships
label: What a buy takes on their side
blurb: The steps this kind of buyer's own process needs, laid against one deal's record to see which of them have shown a sign.
about: a deal
deterministic: true
inputs:
  - people-told#buying-process
  - offering-told#fit-shape
  - deal
  - document-set
  - meeting-history
  - stakeholder-map
---

# What a buy takes on their side

## What it gathers

Gathers the steps a buy takes at a buyer of this shape, and lays each one against what this deal's
record actually holds.

Everything else in the library reads **your** side of a sale: what you sent, what you promised,
what you have on file. The buyer's own process, the work that has to happen inside their
organisation before anybody can sign, has never been anywhere. A seller knows it well and has
nowhere to put it.

Two halves meet here:

- **The steps**, from the told `buying-process` for this buyer's fit-shape: a business case
  somebody has to write, an assessment their own rules require, a committee that has to sit, a
  signature at the end, roughly where in the buy each falls, and whether you said you can help
  with it.
- **What has shown a sign**, from the deal's own record: a document that came across, a meeting
  with the person a step needs, a date somebody named, a new name on a thread. Each step is matched
  to the sign the told record says to look for, and nothing else.

The matching is the only real work, and it is deliberately dumb. A step is matched when the thing
the seller said to look for is there. It is not matched by a step "probably having happened by
now", by the deal being far along, or by the buyer sounding organised.

**A step with no sign is not a step not taken.** It is a step the record is silent about, and those
are different things. Work done inside a buyer's organisation is mostly invisible from outside: a
business case can be written, circulated and approved without one line of it ever reaching you. The
gather holds "no sign" and nothing stronger, and the read above it is built to ask rather than to
assert. *(My reason, not yet yours.)*

Where the seller has told it no process for this shape, the gather has steps for nothing and says
so: a told gap, named not faked. It does not supply a generic buying process of its own, because a
process the tool invented would be indistinguishable to the seller from one they described, and the
whole value of this rung is that it is theirs.

## Where it comes from

`buying-process` is People's own told record, resolving to
[`people-told.md`](../told/people-told.md), where you say what a buy at this kind of buyer takes.
`fit-shape` resolves to [`told/offering-told.md`](../told/offering-told.md), the told vocabulary
for what makes two buyers alike, which is the key the steps hang on and the same key
[`deal-outcomes`](deal-outcomes.md) groups by. `deal`, [`document-set`](document-set.md),
[`meeting-history`](meeting-history.md) and [`stakeholder-map`](stakeholder-map.md) are sibling
assemblies, and between them they carry the signs: what came across, who was met, who is on the
threads.
