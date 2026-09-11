---
id: price-position
label: Price position
blurb: One offering's price, gathered and laid beside the competitive field.
about: an offering
deterministic: true
inputs:
  - pricing
  - offering-entry
  - web-result
  - research-report
  - page-content
---

# Price position

## What it gathers

Gathers your price for one offering and lays it beside the competitive field. Your told `pricing`
(price and discount room) sits next to what rivals charge, pulled from their public pricing pages
(`page-content`), the search hits that found them (`web-result`), and a synthesised `research-report`
on what similar products lead with.

It stands on the Offering entry. Your number, next to theirs.

The only real work is placing the numbers side by side and working out the plain arithmetic: you sit X
above or below a named rival.

Whether that gap means you are priced to win, or priced to scare a cautious buyer off, is the read
above: [`price-barrier`](../signals/price-barrier.md).

## Lineage

`pricing` resolves to [`told.md`](../told.md), the offering's own told source. `web-result`,
`research-report` and `page-content` resolve to [`channels/web.md`](../../01-integrations/channels/web.md).
`offering-entry` is the sibling assembly this stands on. Where a rival publishes no price, the field
has a hole on the open web, a **data gap** named not faked rather than a guessed number.
