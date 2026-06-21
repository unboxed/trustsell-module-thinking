---
id: recurring-objection
floor: signal
label: Recurring objection
blurb: The worry that comes up most across your deals, so you can answer it before it's asked.
inputs: [objection-list]
measures: [worry-occurrences-across-deals, distinct-worries-count]
answers: [Q15]
modes: [grow]
kind: risk
confidence: graded
pull: People's worries-on-record, in aggregate across deals
---

# Recurring objection

A Grow read that lifts above a single deal: across all the worries People has put on record, which
one comes up most. The point is to answer it before it is asked, to lead the deck with the rebuttal
to your most common objection rather than meeting it cold each time.

| Floor | What Offerings has |
|---|---|
| **Facts** (1) | the worries People put on record across your council deals; the named entries on the objection list they match to |
| **Counts** (2) | *worry occurrences across deals:* data residency raised in 7 of 12 council threads, incumbent lock-in in 4, price in 3 · *distinct worries:* 6 named objections in play |
| **Opinion** (3) | **"Data residency is your dominant objection"**: raised in well over half your council deals, more than any other · *confidence: high* |

What surfaces is not "buyers have worries" but *"data residency tops your council objections, 7 of 12
deals, so put its rebuttal up front."* Every clause walks back to a dated worry on a real thread and a
named entry on the objection list.

**Threshold.** There is no fixed "raised 3 times = dominant" count. The yardstick is the *spread
across your own deals*: a worry leads when it recurs in a clear majority of the deals where any worry
was raised, not on raw volume. One vocal buyer raising the same worry ten times is not a dominant
objection; the same worry appearing once each across most deals is. The read needs enough deals on
record to be more than noise.

**Why it's trustworthy.** The whole read is deferred counting: how many distinct deals raised each
worry, against how many deals are in play. Anyone could redo the tally over the same threads. The only
soft edge is the cut-off for "dominant", which is graded, not binary: a worry in 7 of 12 is clearly
dominant; one in 4 of 12 reads as "common, watch it" rather than "lead with it". The `confidence` is
**graded** on the spread and on how many deals are on record.

**Where it can fail to reach ground.** Early on, with few deals on record, the tally is thin and the
read says so rather than crowning a dominant worry off two data points, a **told/data gap** (not
enough history yet), named not faked. And a worry raised only off-channel, on a call People never saw,
never reaches the count.
