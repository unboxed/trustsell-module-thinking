---
id: competitor-field
module: 03-offerings
label: Competitors and what they offer
blurb: 'The named rivals around one offering, gathered whole: who they are, what they claim, and the lock-in they bank on.'
about: an offering
deterministic: true
inputs:
  - offering-entry
  - web#web-result
  - web#research-report
  - web#page-content
  - web#enrichment
---

# Competitors and what they offer
## What it gathers

Gathers the rivals that sit around one offering into a single picture. For each named competitor and
the incumbent, it pulls together:

- what they claim to do, read off their own pages
- how they position themselves
- the lock-in they bank on: a long contract, a proprietary format, a switching hassle
- the worries about them that recur in public reviews

It stands on the Offering entry and reads the open web fresh for the rest. Your offering, and the field
it is sold into.

The only real work is identity and grouping: deciding which pages, claims and reviews belong to *which*
rival, and which rivals are genuinely in this offering's field rather than a neighbouring market.

It lists who the rivals are and what they say. It does not decide where you win, or whether their
lock-in will actually hold a buyer. That read is
[`competitive-standing`](../signals/competitive-standing.md).

## Lineage

`offering-entry` is the sibling assembly this stands on. `web-result`, `research-report`,
`page-content` and `enrichment` resolve to [`channels/web.md`](../channels/web.md).

This shares its web inputs with [`price-position`](price-position.md) on purpose, and the two carve
the field differently: `price-position` lays out the rivals' *numbers only* (your price next to
theirs), while `competitor-field` gathers the *fuller rival profile* (claims, lock-in, reviews) that
those numbers sit inside. The rival-review worries are read here from `web-result` and
`research-report` directly, not borrowed from `objection-list`, so the same review is not counted
twice across siblings. Where a rival has no public footprint, or publishes neither claims nor pricing,
the field has a hole on the open web, a **data gap** named not faked rather than a guessed competitor.
