---
id: champion-went-dark
module: 02-relationships
label: Champion went dark
blurb: An active contact you suddenly cannot reach at all.
kind: risk
confidence: high
inputs: [person-history]
counts: [bounce-back-detected, auto-reply-no-longer-with, was-once-active]
answers: [Q6, Q18]
needs: [calendar, meet]
---

# Champion went dark

## What it means

The channel to a contact you relied on has broken.

This read is about reach, not warmth. The cooling read asks "has their rhythm slipped?". This one asks
the sharper question: "can I still get to them at all?"

It is mostly about keeping a relationship you are losing. But it becomes about a new one the
moment the answer is "they left", because the warm path now has to be rebuilt to whoever replaced them.

It is only ever for a once-active contact. Someone who emailed twice a year cannot go dark; there was
never a live channel to break.

## In practice

A contact who used to reply within a day and started most of your threads now sends nothing back. Your
last note bounced with a mailer-daemon message, or their auto-reply says they are no longer with the
organisation, and there is no out-of-office window, no "back next month" note and no future meeting
booked. The read: this contact has gone dark, and on the evidence has likely left.

## How it is worked out

Applies the shared reading rules in [`docs/reading-principles.md`](../docs/reading-principles.md).

- Trigger: a bounce-back or a "no longer with" auto-reply on the thread. Both are near-binary and make
  the read directly. Only ever for a contact the was-once-active check confirms. Silence without either
  is not this read: it belongs to [`cooling-champion`](cooling-champion.md), which holds the own-rhythm
  test and the innocent-explanation scan (settled 18 September, so the two reads no longer overlap).
- Confidence: high, because a bounce and a departure auto-reply are facts on record, parsed not
  inferred.
- Needs: Calendar and Meet, so a future meeting or a recent call counts as a live
  channel and stops the read landing on someone you just spoke to; without a delivery failure or a
  departure note, a silent leaver cannot be told apart from a contact who is simply ignoring you, so
  the read thins to "went quiet, possibly left" (a data gap, named not faked).