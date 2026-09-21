---
id: price-delta-vs-leader
label: "Your price against the market leader"
used_by: [price-barrier]
over: [price-position]
over_status: decided   # decided 21 September, when the counts were written
defined: true
counts: Where your price sits against the named rival the field treats as the leader.
needs: [web#web-result, web#page-content, web#research-report, web#enrichment, offering-told#pricing]
breaks: It needs a leader somebody has named. The tool does not decide who leads a market.
---

# Your price against the market leader
## What it counts

Your told price against the price of the rival named as the field's leader, as a difference and as
a percentage, with both figures and their sources.

Against the leader specifically, not against the average, because a buyer comparing you is
comparing you with one name they already have in mind.

## What it cannot see

Who the leader is, at this buyer. It is often not the one the market would name, and where nobody
has said, the count reports that it used the field's and is unsure.
