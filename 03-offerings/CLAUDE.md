---
name: "Offerings"
title: "Your offerings"
blurb: "Each product, who it suits, and the answers to the usual worries."
icon: package
optional: false
tier: assistant
modes: [advance, expand]
connects:
  - to: "00-spine"
    provides: "answers Brain's questions about the product, and gives it the fit-shape"
  - to: "02-relationships"
    requests: "a customer's worry that People has on record"
    provides: "the answer to that worry"
  - to: "04-organization"
    requests: "the actual proof document"
    provides: "the kind of proof a claim needs"
draws_from: [web, drive]
raw_data:
  - "Competitor pricing"
  - "Market report"
  - "Procurement pattern"
  - "Product comparison"
  - "Customer review"
---

# 03 · Offerings

The expert on the things you sell: what each is, who it suits, how it's priced, and how to
answer the usual objections.

> **Focus right now:** the raw data below. Everything else is TBD.

## Raw data

Offerings pulls from the web and from Drive, through Connections — it holds no contacts, so it
never touches mail, calendar, or Slack. It uses web research to ground its suggestions, and Drive
to find the files already sitting around each offering. The channels it draws from (`web`,
`drive`) are mirrored in the `draws_from` frontmatter, which the canvas draws as an inflow arrow
from each plug into this module.

### Web / Tavily
`Competitor pricing` — a rival's public pricing or packaging page
`Market report` — what similar products lead with
`Procurement pattern` — what a cautious public buyer tends to ask about new software
`Product comparison` — third-party comparisons or roundups
`Customer review` — public reviews of comparable products

### Drive
`File` — a document filed around an offering: a deck, one-pager, spec sheet or pricing doc · name · type · owner · modified
`File content` — the exported text of that Doc, Sheet or Slide, so its claims and numbers can be read

## Principles
_TBD_

## System prompt
_TBD_

## User input
_TBD (pitch, fit-shape, pricing, objections, deck — the "current vs. suggested" question)_

## Reasoning
_TBD_

## Output
_TBD_

## Memory
_TBD_

## Open questions
_TBD_
