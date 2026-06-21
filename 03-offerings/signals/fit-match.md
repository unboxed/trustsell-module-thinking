---
id: fit-match
floor: signal
label: Fit match
blurb: How well a lead matches the fit-shape, and exactly where it falls short.
inputs: [offering-entry]
measures: [fit-factors-met, fit-factors-missed, fit-shape-completeness]
answers: [Q1, Q2, Q3]
modes: [plant]
kind: opening
confidence: graded
pull: People's lead situation, to judge the match against the fit-shape
---

# Fit match

A Plant read: given a lead's situation, how well does it match this offering's fit-shape, and where
does it fall short. Offerings owns the *shape* and the *match-judgement*; People owns sweeping the
address book and calls this read per candidate. The mirror of People pulling Offerings to name an
objection: here Offerings pulls People to know the lead.

| Floor | What Offerings has |
|---|---|
| **Facts** (1) | the told fit-shape for BOPS (mid-size public buyer · legacy back-office pain · multi-year budget cycle); the lead's situation handed over by People (Council 14: a district council, a legacy planning system, procurement opened this quarter) |
| **Counts** (2) | *fit-factors met:* 3 of your factors (public buyer ✓, legacy-tech pain ✓, mid-size ✓) · *fit-factors missed:* 1 (their budget cycle closed last month, not open) · *fit-shape-completeness:* you have told it all 4 factors, so the shape it matched against is whole |
| **Opinion** (3) | **"Strong fit, one timing caveat"**: Council 14 matches on size, sector and pain; the only gap is budget timing · *confidence: high* |

What surfaces is not "good lead" but *"Council 14 is a strong fit, three of your four factors; the
one gap is budget timing, so chase now but pace to their cycle."* Every clause walks back to a told
fit-factor and a fact People handed over.

**Threshold.** There is no fixed "meets 3 of 4 = fit" line that means the same for every offering.
The yardstick is *your own* fit-shape: how many of the factors you defined this lead meets, and which
it misses, named rather than scored away. A lead that meets every factor but the one you marked
essential reads weaker than one that misses two minor ones. The read also leans on
fit-shape-completeness: if you have told it only two of the factors that matter, a "match" is only as
strong as the thin shape it matched against.

**Why it's trustworthy.** Most of the read is deferred counting: which told factors the lead meets
and misses, all checkable against the told fit-shape and the situation People supplied. The one
judgement, whether a miss is fatal or a caveat, is guarded by naming the miss rather than hiding it
in a single score. The `confidence` is **graded on grounding**: high when the fit-shape is fully told
and the lead's situation is richly known; soft when the shape is thin or People's read of the lead is
sparse.

**Where it can fail to reach ground.** If you have not told it the fit-shape, there is nothing to
match against: a **told gap**, and the honest output is *"tell me what a good-fit council looks like
and I can start matching"* rather than a guess (the same told gap [`tracing-back.md`](../../docs/tracing-back.md)
walks through). And if People's picture of the lead is thin (few threads, no enrichment), the match
is judged on less, a **data gap** that lowers confidence rather than inventing a fit.
