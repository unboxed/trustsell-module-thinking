---
id: published-picture
module: 02-relationships
label: What they say about themselves
blurb: One buyer organisation in its own published words: what it says it is doing, where it said so, and when.
about: an organisation
deterministic: true
inputs:
  - web#research-report
  - web#enrichment
  - web#web-result
  - web#page-content
  - web#site-map
---

# What they say about themselves

## What it gathers

Gathers, for one buyer organisation, what it has published about itself: its strategy, its plan,
its annual report, the pages on its own site, the announcements it has made, and the facts the open
web holds about it.

Every other gather above the raw data in this library is keyed on something that **passed between
you and the buyer**: a thread, a deal, a meeting, a document they handed over, a person you both
know. This is the first that is keyed on nothing of yours. It is what they said to the world before
you arrived, and at the patient end it is the ground a first message stands on.

For each thing it holds:

- **what they say**, in the passage's own words rather than a summary of it;
- **where they said it**, down to the page where a document has pages, because a line you can point
  at is worth more than a claim about a document;
- **when**, so a plan from this year can be told from a page nobody has touched in five;
- **whose words they are**: the organisation's own, or somebody else writing about them.

That last one is the distinction that makes the gather usable. `Research report` is a synthesis
made by the search tool, not the organisation speaking, and a news piece is a journalist's words.
Both are worth having and neither can be quoted back to a buyer as their own. The gather keeps the
two apart rather than flattening them into "what the web says".

**Keep it apart from [`stakeholder-map`](stakeholder-map.md)**, which draws the same channel for a
different thing: who is who at an account, person by person. This one holds the organisation
speaking, not the people in it. And keep it apart from
[`competitor-field`](competitor-field.md) and [`product-claims`](product-claims.md), which are
Offerings' gathers of the web about **your** market. Same channel, three subjects.

It forms no opinion. Whether a published priority is one your offering touches, whether it is still
live, and whether the organisation means it are all reads, one floor up.

## Where it comes from

All five records resolve to [`channels/web.md`](../channels/web.md), which is builtin and always on,
so there is no data gap here of the kind a disconnected channel makes. The gap that does exist is
plainer: an organisation that publishes little says little, and the gather is thin rather than
wrong. A private company with a one-page site has almost nothing here, and the reads above say so
rather than filling the space with what the industry generally does.
