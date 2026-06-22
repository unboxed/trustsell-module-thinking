---
id: understanding-gap
label: Understanding gap
blurb: They keep asking the same things, so the product has not landed.
modes: [grow]
kind: risk
confidence: graded
inputs: [conversation-history, meeting-history]
measures: [confused-questions, re-asked-questions, terms-used-wrongly, claims-restated-back, confusion-voiced-on-call]
answers: [Q13]
needs: [meet]
pull: Offerings' product claims, to judge the confusion
---

# Understanding gap

## What it means

A Grow read on one conversation: the deal is not stalling on price or a blocker, it is stalling because
the product has not landed.

The tool reads off the thread it has already gathered, scored against what Offerings says the product
actually claims. There is no fixed "asks twice" line. The yardstick is this conversation's own normal:
a re-ask only counts when the same point was already answered earlier in this thread (so a first
clarifying question is just diligence, not a gap), and a wrong term only counts when it contradicts a
claim Offerings confirms. Questions repeat, maybe; the same answered question repeats and their words
for the product drift from what it does, understanding gap.

It leans on Offerings to judge the confusion: People does not decide what is true about the product, it
borrows Offerings' product claims and flags only the drift against them.

The muddle often surfaces on a call before it shows in mail, so a question asked again on a captured
call, or the product described wrongly out loud, counts toward the read the same way. A buyer who
understands fine but writes in shorthand can trip the term check, which is why the read leans on
repetition, not a single loose word. An uncaptured call hides any confusion voiced in it.

## In practice

A buyer keeps asking "so does it sync both ways?" across three separate replies (a re-ask), opens two
replies with a question the deck already answered (confused questions), and calls the audit log "the
export" twice (a term used wrongly). Offerings' product claims confirm one-way sync and a separate
audit log, so the restatements do not match. The read: "they haven't got it, three replies in."

## For the build

Applies the shared reading rules in [`docs/reading-principles.md`](../../docs/reading-principles.md).
Borrows Offerings (the `pull` field) to judge whether wording contradicts the product.

- Trigger: an already-answered question repeats in this thread AND their words for the product drift
  from a claim Offerings confirms, measured against this conversation's own normal (not a fixed count).
- Confidence: graded. High when several answered questions repeat and a term plainly clashes with a
  claim; softens to "may not have fully landed" near the line or on one stray phrase.
- Needs: Meet (captured-call content) so confusion voiced aloud counts; an uncaptured call hides it
  (a data gap, named not faked). If Offerings cannot supply the relevant claim, the wrong-term check
  has nothing to score against and only the re-ask count survives, so confidence falls (a
  supplier-told gap).
- Counts beneath it: the `measures` in the frontmatter (confused questions, re-asked questions, terms
  used wrongly, claims restated back, confusion voiced on call).
