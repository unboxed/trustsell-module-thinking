---
id: recurring-objection
label: Recurring objection
blurb: The worry that comes up most across your deals, so you can answer it before it's asked.
modes: [grow]
kind: risk
confidence: graded
inputs: [objection-list]
measures: [worry-occurrences-across-deals, distinct-worries-count]
answers: [Q15]
needs: []
pull: People's worries-on-record, in aggregate across deals
---

# Recurring objection

## What it means

Across all the worries People has put on record, which one comes up most, so you can answer it before
it is asked.

The tool lifts above a single deal and reads the spread of worries across your deals. The point is to
lead the deck with the rebuttal to your most common objection rather than meeting it cold each time.
The yardstick is the spread across your own deals: a worry leads when it recurs in a clear majority of
the deals where any worry was raised, not on raw volume.

It is most confident when many deals are on record and one worry clearly dominates the spread, and it
softens when few deals exist or the lead is narrow. One vocal buyer raising the same worry ten times
is not a dominant objection; the same worry appearing once each across most deals is.

Early on, with few deals on record, the tally is thin, and the read says so rather than crowning a
dominant worry off two data points. A worry raised only off-channel, on a call People never saw, never
reaches the count.

## In practice

Across twelve deals where a worry was raised, data residency comes up in seven, incumbent lock-in in
four, price in three, with six distinct named objections in play. The read: "data residency is your
dominant objection. It is raised in well over half your deals, more than any other, so put its
rebuttal up front."

## For the build

Applies the shared reading rules in [`docs/reading-principles.md`](../../docs/reading-principles.md).
Borrows People's worries-on-record (the `pull` field) in aggregate across deals.

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
- Counts beneath it: the `measures` in the frontmatter (worry occurrences across deals, distinct
  worries count).
