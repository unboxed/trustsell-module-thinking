---
id: offering-entry
module: 03-offerings
label: What you sell
blurb: Everything about one product, gathered into a single card.
about: an offering
deterministic: true
inputs:
  - offering-told#pitch
  - offering-told#fit-shape
  - offering-told#use-case
  - offering-told#pricing
  - offering-told#supplier
  - offering-told#worry-answer
  - drive#file
  - drive#file-content
  - web#research-report
  - web#enrichment
  - web#web-result
---

# What you sell
## What it gathers

Gathers everything about one product into a single card, from three places:

- the told spine: your `pitch`, the `fit-shape` it suits, its `use-case`s, its `pricing`, the
  `worry-answer` pairs you keep on hand, and the `supplier` behind it where it is not yours
- the Drive files filed around it: a deck, a one-pager, a spec sheet, a pricing doc, a product case
  study
- the web research that grounds it: a rival's pricing page, what similar products lead with, public
  reviews

This product, and everything you know about how to sell it.

The only real work is identity and grouping: deciding which told facts, which Drive files and which web
findings all belong to *this* product rather than another.

It does not decide whether a lead is a good fit, or which answer will land. It only gathers the facts
of one offering into one place. The signals that read this card do the deciding: does this lead fit, is
there an answer gap, where do we sit on price.

## Where it comes from

`pitch`, `fit-shape`, `use-case`, `pricing`, `worry-answer` and `supplier` resolve to
[`offering-told.md`](../told/offering-told.md), the offering's own told source. One entry is one
thing on one set of terms, so the same product from two suppliers is gathered twice, once per
entry; [`catalogue`](catalogue.md) is the pile of them. `file` and `file-content` resolve to
[`channels/drive.md`](../channels/drive.md). `research-report`, `enrichment` and
`web-result` resolve to [`channels/web.md`](../channels/web.md). The five web
framings once written up in Offerings' prose (competitor pricing, market report, buying pattern,
product comparison, customer review) are *search framings* over `web-result` and `research-report`, not
separate records.
