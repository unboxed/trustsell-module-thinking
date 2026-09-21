---
id: fit-shape-completeness
label: "How complete the good-fit picture is"
used_by: [fit-match]
over: [offering-entry]
over_status: decided   # decided 21 September, when the counts were written
defined: true
counts: How much of the told fit-shape is actually filled in.
needs: [offering-told#fit-shape]
breaks: A fit-shape with two factors is not a shape, and the count says so rather than reporting a match against it.
---

# How complete the good-fit picture is
## What it counts

How many factors the told fit-shape names, how many of them are specific enough to check against a
real organisation, and which are empty. One row per factor.

It is the gate on every read about fit. Judging a lead against a shape made of three vague words
produces a confident answer to a question nobody asked, and this is the number that stops it.

## What it cannot see

Whether the factors are the right ones. Completeness is not correctness, and a fully filled shape
describing the wrong buyer will pass this and fail everywhere else.
