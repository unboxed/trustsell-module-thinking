---
id: proof-recency
label: "How recent the evidence is"
used_by: [answer-gap]
over: [proof-library]
over_status: decided   # decided 21 September, when the counts were written
defined: true
counts: How old each piece of evidence is.
needs: [drive#file, drive#file-content, organisation-told#proof-tag]
breaks: What counts as old differs by kind: a certificate expires, a case study ages, a measurement dates.
---

# How recent the evidence is
## What it counts

The age of each piece of evidence in months, from the date on the document rather than the date it
was filed, with the kind of document beside it so age can be read properly.

A four-year-old case study is a different problem from a four-year-old certificate. One is stale
and one may be void.

## What it cannot see

A document quietly kept up to date with no new date on it, which reads as old, and an undated one,
which reads as unknown rather than as new.
