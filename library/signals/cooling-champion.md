---
id: cooling-champion
module: 02-relationships
label: Cooling champion
blurb: A champion who is starting to go quiet.
kind: decay
confidence: graded
inputs: [person-history, deal]
counts: [reply-gap-vs-own-rhythm, dropped-recurring-meeting, innocent-explanation-scan]
answers: [Q18, Q19]
needs: [calendar]
---

# Cooling champion

## What it means

A champion has gone quiet, and no open deal explains it. They are slower than usual, and nothing on
record says why.

A long silence on its own means little. A long silence with no reason behind it is the read.

## In practice

A contact who normally replies within a day has gone quiet for about three weeks across every channel,
left your last note unanswered, and quietly dropped your monthly check-in, with nothing on record to
explain it. The read: "they're cooling."

## How it is worked out

Applies the shared reading rules in [`docs/reading-principles.md`](../docs/reading-principles.md).

- Trigger: the reply gap is large against the person's own median reply time (never a fixed number of
  days), AND the innocent-explanation scan returns empty.
- Confidence: high when a large own-rhythm departure, a dropped recurring meeting, an unanswered note
  and an empty scan all stack; grades down towards "maybe cooling" as fewer hold.
- Needs: Calendar, for the dropped-meeting and out-of-office checks; without it
  those checks drop out and confidence falls (a data gap, named not faked).