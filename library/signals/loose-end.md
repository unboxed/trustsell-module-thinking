---
id: loose-end
module: 02-relationships
label: Loose end
blurb: Something left hanging, like a promise you never followed through on.
modes: [advance, sustain]
kind: risk
confidence: graded
inputs: [conversation-history, person-history, meeting-history]
counts: [promise-made-undelivered, ask-made-unanswered, days-open-vs-own-rhythm, fulfilment-scan, commitment-made-on-call]
answers: [Q22]
needs: [calendar, meet]
---

# Loose end

## What it means

Something left hanging on a thread, where only finishing it makes the thread safe.

A loose end comes in two shapes. One is your promise that never went out ("I'll send you the pricing
sheet"). The other is your question that never came back ("can you confirm the budget?"). Either way a
thread is waiting on someone, and the read carries which.

It lands only once it has checked that nothing already closed it. A sheet that did go out as an
attachment, or got handed over in a meeting, never counts as still open.

## In practice

On a thread where the two of you usually close a turn within about two days, your line "I'll get you
the security questionnaire by Friday" sits eleven days back with no later message carrying an
attachment or a "here it is", and your earlier question "who signs off on this?" is nine days back with
no answer. Nothing on record, no attachment, follow-up note or calendar event, closed either. The
read: you owe them the questionnaire and they still owe you the sign-off, both well past the pace this
thread keeps.

## How it is worked out

Applies the shared reading rules in [`docs/reading-principles.md`](../docs/reading-principles.md).

- Trigger: a concrete promise or unanswered ask sits past this thread's own normal turn time
  (own-rhythm, never a fixed number of days) AND the fulfilment scan comes back empty (no later
  attachment, follow-up note or calendar event closed it). Past pace alone is "maybe overdue"; past
  pace and nothing closed it is the read.
- Confidence: high when the promise is concrete and well past the thread's pace with nothing to close
  it; softens when the language was loose ("I'll look into it") or the gap has only just crossed the
  line.
- Needs: Calendar and Meet, so a promise handed over in a meeting closes the loose
  end and a commitment made on a captured call counts as a promise; without them, a promise made on an
  uncaptured call shows only "you spoke", not what was said, so it still looks undelivered (the
  conditional-content data gap [`meeting-history`](../assemblies/meeting-history.md) names). A promise
  kept outside the connected channels is invisible the same way (a data gap), and a promise in words
  the parser does not catch may be missed entirely (a told gap the user can close by correcting the
  read).