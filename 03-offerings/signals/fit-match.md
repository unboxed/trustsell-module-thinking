---
id: fit-match
label: Fit match
blurb: How well a lead matches the fit-shape, and exactly where it falls short.
modes: [plant]
kind: opening
confidence: graded
inputs: [offering-entry]
measures: [fit-factors-met, fit-factors-missed, fit-shape-completeness]
answers: [Q1, Q2, Q3]
needs: []
pull: People's lead situation, to judge the match against the fit-shape
---

# Fit match

## What it means

Given a lead's situation, how well it matches this offering's fit-shape, and exactly where it falls
short.

The tool makes this Plant read per candidate. Offerings owns the shape and the match-judgement;
People owns sweeping the address book and calls this read on each lead. It is the mirror of People
pulling Offerings to name an objection: here Offerings pulls People to know the lead.

It is most confident when the fit-shape is fully told and the lead's situation is richly known, and it
softens when the shape is thin or People's read of the lead is sparse. A miss is named rather than
scored away: a lead that meets every factor but the one you marked essential reads weaker than one
that misses two minor ones.

It cannot reach the ground at all if you have not told it the fit-shape; then the honest output is
"tell me what a good-fit lead looks like and I can start matching" rather than a guess. If People's
picture of the lead is thin, the match is judged on less.

## In practice

You have told it all four factors of a fit-shape (a mid-size buyer of this type, a legacy back-office
pain, the right budget cycle, the right sector). A lead handed over by People meets three of them but
its budget cycle closed last month. The read: "strong fit, one timing caveat. The lead matches on
size, sector and pain; the only gap is budget timing, so chase now but pace to their cycle."

## For the build

Applies the shared reading rules in [`docs/reading-principles.md`](../../docs/reading-principles.md).
Borrows People's lead situation (the `pull` field) to judge the match against the fit-shape.

- Trigger: there is no fixed "meets 3 of 4 = fit" line that means the same for every offering. The
  yardstick is your own fit-shape: how many of the factors you defined this lead meets, and which it
  misses, named rather than scored away. The read also leans on fit-shape-completeness: if you have
  told it only some of the factors that matter, a match is only as strong as the thin shape it matched
  against. The one judgement, whether a miss is fatal or a caveat, is guarded by naming the miss
  rather than hiding it in a single score.
- Confidence: graded on grounding. High when the fit-shape is fully told and the lead's situation is
  richly known; soft when the shape is thin or People's read of the lead is sparse.
- Needs: no source dependency beyond the told fit-shape and the lead situation People supplies. If you
  have not told it the fit-shape there is nothing to match against (a told gap); if People's picture of
  the lead is thin the match is judged on less (a data gap that lowers confidence rather than inventing
  a fit).
- Counts beneath it: the `measures` in the frontmatter (fit-factors met, fit-factors missed,
  fit-shape completeness).
