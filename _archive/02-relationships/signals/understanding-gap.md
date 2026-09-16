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

A Grow read on one conversation. The deal is not stalling on price or a blocker. It is stalling because
the product has not landed.

The read holds two things together: the same question asked again after it was already answered in this
thread, and their words for the product drifting from what it actually does. A first clarifying question
is just diligence. The same answered question coming back, with the wording slipping, is the gap.

It leans on Offerings to judge the confusion. People does not decide what is true about the product. It
borrows Offerings' claims and flags only the drift against them.

## In practice

A buyer keeps asking "so does it sync both ways?" across three separate replies (a re-ask), opens two
replies with a question the deck already answered (confused questions), and calls the audit log "the
export" twice (a term used wrongly). Offerings' product claims confirm one-way sync and a separate
audit log, so the restatements do not match. The read: "they haven't got it, three replies in."

## For the build

Applies the shared reading rules in [`docs/reading-principles.md`](../../docs/reading-principles.md).
Borrows Offerings' product claims to judge whether wording contradicts the product.

- Trigger: an already-answered question repeats in this thread AND their words for the product drift
  from a claim Offerings confirms, measured against this conversation's own normal (not a fixed count).
- Confidence: graded. High when several answered questions repeat and a term plainly clashes with a
  claim; softens to "may not have fully landed" near the line or on one stray phrase.
- Needs: Meet (captured-call content) so confusion voiced aloud counts; an uncaptured call hides it
  (a data gap, named not faked). If Offerings cannot supply the relevant claim, the wrong-term check
  has nothing to score against and only the re-ask count survives, so confidence falls (a
  supplier-told gap).