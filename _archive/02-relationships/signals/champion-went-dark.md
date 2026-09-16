---
id: champion-went-dark
label: Champion went dark
blurb: An active contact you suddenly cannot reach at all.
modes: [nurture, plant]
kind: risk
confidence: high
inputs: [person-history]
measures: [bounce-back-detected, auto-reply-no-longer-with, silence-vs-own-rhythm, was-once-active]
answers: [Q6, Q18]
needs: [calendar, meet]
---

# Champion went dark

## What it means

The channel to a contact you relied on has broken.

This read is about reach, not warmth. The cooling read asks "has their rhythm slipped?". This one asks
the sharper question: "can I still get to them at all?"

It leans Nurture, a relationship you are losing. But it tips into Plant the moment the answer is "they
left", because the warm path now has to be rebuilt to whoever replaced them.

It is only ever for a once-active contact. Someone who emailed twice a year cannot go dark; there was
never a live channel to break.

## In practice

A contact who used to reply within a day and started most of your threads now sends nothing back. Your
last note bounced with a mailer-daemon message, or their auto-reply says they are no longer with the
organisation, and there is no out-of-office window, no "back next month" note and no future meeting
booked. The read: this contact has gone dark, and on the evidence has likely left.

## For the build

Applies the shared reading rules in [`docs/reading-principles.md`](../../docs/reading-principles.md).

- Trigger: a bounce-back or a "no longer with" auto-reply on the thread is near-binary and fires
  directly; otherwise silence must dwarf this person's own established cadence (own-rhythm, never a
  fixed number of days) AND the innocent-explanation scan must come back empty. Only ever for a contact
  the was-once-active check confirms.
- Confidence: high, because a bounce and a departure auto-reply are facts on record, parsed not
  inferred; the silence-without-a-bounce branch is held to the guarded own-rhythm test and graded down
  so it never reads as certain as a bounce.
- Needs: Calendar and Meet, so a future meeting or a recent call counts as a live
  channel and stops the read landing on someone you just spoke to; without a delivery failure or a
  departure note, a silent leaver cannot be told apart from a contact who is simply ignoring you, so
  the read thins to "went quiet, possibly left" (a data gap, named not faked).