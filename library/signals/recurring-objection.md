---
id: recurring-objection
module: 03-offerings
label: A worry that keeps coming up
blurb: The worry that comes up most across your deals, so you can answer it before it's asked.
modes: [advance]
kind: risk
confidence: graded
inputs: [objection-list, deal]
counts: [worry-occurrences-across-deals, distinct-worries-count]
answers: [Q15]
needs: []
pull: People's worries-on-record, in aggregate across deals
---

# A worry that keeps coming up
## What it means

Across all the worries People has put on record, which one comes up most, so you can answer it before
it is asked.

It lifts above a single deal and reads the spread of worries across all of them. The point is to lead
the deck with the rebuttal to your most common objection, rather than meeting it cold each time.

What counts is how many deals a worry shows up in, not raw volume. One vocal buyer raising the same
worry ten times is not a dominant objection. The same worry appearing once each across most deals is.

## In practice

Across twelve deals where a worry was raised, data residency comes up in seven, incumbent lock-in in
four, price in three, with six distinct named objections in play. The read: "data residency is your
dominant objection. It is raised in well over half your deals, more than any other, so put its
rebuttal up front."

## How it is worked out

Applies the shared reading rules in [`docs/reading-principles.md`](../docs/reading-principles.md).
Borrows People's worries-on-record in aggregate across deals.

- Trigger: there is no fixed "raised 3 times = dominant" count. The yardstick is the spread across your
  own deals: a worry leads when it recurs in a clear majority of the deals where any worry was raised,
  counting distinct deals rather than raw volume (one vocal buyer raising it ten times is not
  dominant). The read needs enough deals on record to be more than noise. The one soft edge is the
  cut-off for "dominant", which is graded: a worry in seven of twelve is clearly dominant; one in four
  of twelve reads as "common, watch it" rather than "lead with it".
- Confidence: graded on the spread and on how many deals are on record.
- Needs: no source dependency beyond the worries People puts on record. Early on, with few deals, the
  tally is thin and the read says so rather than crowning a worry off two data points (a told/data gap,
  not enough history yet). A worry raised only off-channel never reaches the count.