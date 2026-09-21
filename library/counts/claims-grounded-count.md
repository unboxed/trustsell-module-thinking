---
id: claims-grounded-count
label: "Claims with evidence"
used_by: [unbacked-claim]
over: [product-claims]
over_status: decided   # decided 21 September, when the counts were written
defined: true
counts: How many of those claims have something on file behind them.
needs: [drive#file, drive#file-content, offering-told#pitch, offering-told#use-case, offering-told#fit-shape, offering-told#worry-answer, offering-told#names-in-the-field, organisation-told#proof-tag]
breaks: Grounded means a document exists that supports it, not that the document is good. Strength is the next three counts.
---

# Claims with evidence
## What it counts

Of the claims counted, how many have at least one piece of evidence on file that supports them,
and how many have none. One row per claim with what backs it.

It is deliberately a binary, and the three counts after it grade what was found. Separating
existence from quality is what lets a read say "there is nothing at all" differently from "there is
something thin".

## What it cannot see

Evidence that exists and is not filed anywhere the tool can see, which at most firms is a great
deal of it.
