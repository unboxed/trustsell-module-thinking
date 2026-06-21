---
id: offering-entry
floor: assembly
label: Offering entry
blurb: Everything about one product, gathered into a single card.
about: an offering
deterministic: true
inputs:
  - pitch
  - fit-shape
  - use-case
  - pricing
  - worry-answer
  - file
  - file-content
  - research-report
  - enrichment
  - web-result
---

# Offering entry

Gathers everything about one product into a single card: the told spine (your `pitch`, the
`fit-shape` it suits, its `use-case`s, its `pricing`, and the `worry-answer` pairs you keep on hand)
tidied together with the Drive files filed around it (a deck, a one-pager, a spec sheet, a pricing
doc, a product case study) and the web research that grounds it (a rival's pricing page, what similar
products lead with, public reviews). *This product, and everything you know about how to sell it.*

This is **floor, not reading**: nothing here is judged. It does not decide whether a lead is a good
fit or which answer will land; it only gathers the facts of one offering into one place. The only
real work is identity and grouping, deciding which told facts, which Drive files and which web
findings all belong to *this* product rather than another. That is arithmetic, not opinion. The
judgement happens above, in the signals that read this card (does this lead fit, is there an answer
gap, where do we sit on price).

> Lineage note: `pitch`, `fit-shape`, `use-case`, `pricing` and `worry-answer` resolve to
> [`../told.md`](../told.md), the offering's own told source. `file` and `file-content` resolve to
> [`channels/drive.md`](../../01-integrations/channels/drive.md); `research-report`, `enrichment` and
> `web-result` resolve to [`channels/web.md`](../../01-integrations/channels/web.md). The five web
> framings once written up in 03's prose (competitor pricing, market report, procurement pattern,
> product comparison, customer review) are *search framings* over `web-result` and
> `research-report`, not separate records.
