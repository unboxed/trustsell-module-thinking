---
id: cooling-champion
module: 02-relationships
label: Cooling champion
blurb: A champion who is starting to go quiet.
kind: decay
confidence: graded
inputs: [person-history, deal]
counts: [reply-gap-vs-own-rhythm, dropped-recurring-meeting, innocent-explanation-scan, who-starts-threads]
answers: [Q18, Q19]
needs: [calendar]
assumes: [own-rhythm]
assumes_status: decided   # 22 September: tested on a person with a history, and needed it
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
- Who writes first, added 22 September: `who-starts-threads` counts who has opened the threads and
  whether that has changed, and until now only the balance reads used it. A champion who used to
  write first and has stopped is the same fact as a champion gone quiet, seen from the other side,
  so this read quotes it. It does not fire the read on its own: the count summarises over three
  months, which dilutes a change of a few weeks, and its rows carry the fact its summary loses.
  *(My reason, not yet yours.)*
- Assumes: enough history with this person to know their usual, because the gap is read against
  their own median. On a first contact there is no usual to compare against, so the read does not
  apply (an assumption gap, named not faked).
