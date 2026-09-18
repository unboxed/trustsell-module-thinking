---
id: product-claims
module: 03-offerings
label: What you say the product does
blurb: The factual claims one product makes, gathered with the grounding under each.
about: an offering
deterministic: true
inputs:
  - offering-told#pitch
  - offering-entry
  - drive#file-content
  - web#web-result
---

# What you say the product does
## What it gathers

Gathers the factual claims a product makes ("syncs both ways", "exports an audit log", "deploys in a
day") into a single list. Each claim is carried with its grounding: the told `pitch` it came from, a
line in a spec sheet or deck read out of `file-content`, or a third-party comparison from the web.

It stands on the Offering entry. What this product says it does, and where each claim is backed.

The only real work is listing the claims and noting where each is grounded.

It does not decide whether a buyer has *misunderstood* one. That is People's
[`understanding-gap`](../signals/understanding-gap.md) signal, which pulls this
list to judge a buyer's confusion (a buyer using "export" where the product says "audit log").

## Where it comes from

`pitch` resolves to [`offering-told.md`](../told/offering-told.md), the offering's own told source. `file-content` resolves to
[`channels/drive.md`](../channels/drive.md). `web-result` resolves to
[`channels/web.md`](../channels/web.md). `offering-entry` is the sibling assembly
this stands on. A claim that lives only in a deck not uploaded to Drive is a **data gap**, named not
faked: the claim cannot be grounded until the file is connected.
