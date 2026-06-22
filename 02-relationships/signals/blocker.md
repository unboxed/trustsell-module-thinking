---
id: blocker
label: Blocker
blurb: Someone who keeps raising the same objection and stalls the deal.
modes: [grow]
kind: risk
confidence: graded
inputs: [conversation-history, person-history, meeting-history]
measures: [repeated-objection-count, reply-length-vs-own-rhythm, stall-after-ask-count, objection-name-match, objection-raised-on-call]
answers: [Q13, Q15]
needs: [meet]
pull: Offerings' objection list, to name the objection
---

# Blocker

## What it means

One stakeholder on a live deal who keeps pushing back. Not gone quiet (they still reply) and not
warming (the replies are flat and short, and the same worry keeps coming back).

The tool makes this read when the same worry repeats across replies without resolving, the replies
have gone short against this person's own earlier rhythm in the thread, and each ask for a next step
stalls instead of moving. A single push-back is healthy interest, not a block; the same worry restated
and unresolved, with every ask stalled, is the read. It names the worry rather than just calling the
person difficult, which is what makes it useful, and it leans on Offerings to put a name to the
objection rather than inventing a label.

The reply-length count is measured against this person's own normal, never an absolute word count: a
person who is always terse is not suddenly a blocker for being terse. It is most confident when the
worry is identical across replies, the replies have clearly shortened, and every ask has stalled; it
softens to "pushing back" when the worries differ each time or the deal is still inching forward.

It reads across email, Slack and captured calls as one. If a worry is phrased loosely and matches
nothing on Offerings' list, it can still see the pattern but cannot name the objection. Push-back on an
uncaptured call shows the stall without the worry behind it.

## In practice

Over a thread, a contact raises the same data-residency worry in three separate replies, their replies
shrink from a sixty-word norm to about twelve words, and three times you ask for a next step the reply
pivots straight back to the same concern with no movement. Offerings matches the worry to its objection
list. The read: this contact is blocking on data residency.

## For the build

Applies the shared reading rules in [`docs/reading-principles.md`](../../docs/reading-principles.md).
Borrows Offerings (the `pull` field) to name the objection.

- Trigger: the same worry recurs across replies without resolving, AND the replies have gone short
  against this person's own earlier rhythm in the thread (own-rhythm, never a fixed word count), AND
  each ask for a next step stalls instead of moving. All three must line up; a single push-back is
  diligence, not a block.
- Confidence: high when the worry is identical across replies, the replies have clearly shortened, and
  every ask stalled; softens to "pushing back" when the worries differ each time or the deal is still
  inching forward.
- Needs: Meet (the `needs` field) so push-back voiced aloud on a captured call counts toward the
  pattern and is still matched to Offerings to be named; without it, an uncaptured call shows the stall
  without the worry behind it (the conditional-content data gap
  [`meeting-history`](../assemblies/meeting-history.md) names). If the worry matches nothing on
  Offerings' list, the pattern still shows but the objection cannot be named (a supplier-told gap), and
  confidence falls.
- Counts beneath it: the `measures` in the frontmatter (repeated objection count, reply length vs own
  rhythm, stall after ask count, objection-name match, objection raised on call).
