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

This read is mostly about reach, not warmth. Where the cooling read asks "has their rhythm slipped?",
this asks the sharper question "can I still get to them at all?". It leans Nurture (a relationship you
are losing) but tips into Plant the moment the answer is "they left", because the warm path now has to
be rebuilt to whoever replaced them.

A bounce-back or a "no longer with the company" auto-reply is near-certain: the record either exists on
the thread or it does not, so there is barely a judgement to make. The arguable case is pure silence
with no bounce, and there the rule is the own-rhythm one, never a fixed number of days: the silence has
to dwarf this person's established cadence, and only after the innocent-explanation scan comes back
empty. It is reserved for a once-active contact, because a person who emailed twice a year cannot go
dark; there was never a live channel to break.

It reads reach across calls too, so a recent call counts as a live channel and "went dark" will not
land on someone you spoke to last week. If a departure happens silently, with no bounce and no
departure note, just a mailbox that quietly stops answering, the read thins to "went quiet, possibly
left" rather than "went dark".

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
- Needs: Calendar and Meet (the `needs` field) so a future meeting or a recent call counts as a live
  channel and stops the read landing on someone you just spoke to; without a delivery failure or a
  departure note, a silent leaver cannot be told apart from a contact who is simply ignoring you, so
  the read thins to "went quiet, possibly left" (a data gap, named not faked).
- Counts beneath it: the `measures` in the frontmatter (bounce-back detected, auto-reply no longer
  with, silence vs own rhythm, was once active).
