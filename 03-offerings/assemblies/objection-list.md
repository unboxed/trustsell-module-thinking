---
id: objection-list
label: Objection list
blurb: One offering's worries, gathered into a named catalog with each answer and the proof it needs.
about: an offering
deterministic: true
inputs:
  - worry-answer
  - offering-entry
  - web-result
  - research-report
---

# Objection list

## What it gathers

Gathers one offering's worries into a single catalog: each a named objection (data residency,
incumbent lock-in, price) with the answer you give it and the kind of proof that answer needs. It
stands on the Offering entry and is spined by the told `worry-answer` records; web research can add
worries you did not list yourself, the procurement patterns a cautious buyer-type raises and the
worries that recur in public reviews of comparable products. Every worry this product meets, and how
you meet it.

The only real work is listing and de-duplicating the worries and matching a buyer's loose phrasing to
a named entry ("is this GDPR-safe?" lands on **data residency**). That is arithmetic, not opinion.

This is floor, not reading: nothing here is judged. It does not decide whether a particular buyer is
actually *blocking* on one. Judgement happens above, in the signals (see
[`docs/reading-principles.md`](../../docs/reading-principles.md)): People's
[`blocker`](../../02-relationships/signals/blocker.md) signal **pulls this list** to name the
objection rather than inventing a label.

## Lineage

`worry-answer` resolves to [`told.md`](../told.md), the offering's own told source. `web-result` and
`research-report` resolve to [`channels/web.md`](../../01-integrations/channels/web.md).
`offering-entry` is the sibling assembly this stands on. A worry phrased loosely enough that it
matches nothing on the list is a **told gap** on Offerings' side (the entry is missing), named not
faked.
