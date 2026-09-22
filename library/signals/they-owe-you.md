---
id: they-owe-you
module: 02-relationships
label: Something they said they would do
blurb: The buyer promised you something and it has not come, past the pace this thread keeps.
kind: risk
confidence: graded
inputs: [conversation-history, person-history, meeting-history]
counts: [their-promise-undelivered, fulfilment-scan, days-open-vs-own-rhythm, commitment-made-on-call]
answers: [F7]
needs: [calendar, meet]
assumes: [thread-under-way]
assumes_status: decided   # 22 September: tested in the firm's world on threads of months; each read a date, a promise or a step off a conversation under way and needed exactly that
---

# Something they said they would do

## What it means

The buyer said they would do something, and it has not happened.

Every other promise read in this library runs one way. [`loose-end`](loose-end.md) is what **you**
owe **them**, and [`pushing`](pushing.md) counts your own undelivered promises as a reason to give
before you ask again. A promise the buyer made to you had nowhere to live, and it is one of the
commonest ways a patient sale stalls: "I'll get you in front of our head of service", "I'll take it
to the board this month", "I'll send the spec over". A seller remembers those for about a fortnight
and then stops.

The read is the mirror of the loose end and works the same way: a concrete thing they said, past
this thread's own pace, with nothing on record that closed it.

## In practice

On a thread where a turn usually closes within a couple of days, their line "I'll introduce you to
our head of service next week" sits three weeks back. No new name has appeared on the thread, no
meeting has been booked with anybody new, and nothing they have sent since refers to it. The read:
"they said they would introduce you to the head of service three weeks ago. Nobody new has appeared
and nothing closed it."

## How it is worked out

Applies the shared reading rules in [`docs/reading-principles.md`](../docs/reading-principles.md).

- Trigger: a concrete commitment in **their** words sits past this thread's own normal turn time
  (own-rhythm, never a fixed number of days) AND the fulfilment scan comes back empty. It is the
  same arithmetic as the loose end with the speaker swapped, which is why it reuses the same three
  counts and adds only one of its own.
- What closes it is not always a message. A promised introduction closes when the new name appears
  on a thread or on a meeting, a promised document closes when it is handed over, a promised board
  date closes when they name the date. The scan looks for the thing promised, not for an
  acknowledgement of it.
- Confidence: high when the commitment was concrete, in their own words, and well past pace with
  nothing to close it. Softens hard when the words were loose ("I'll see what I can do", "let me
  ask around"), which is far more common from a buyer than from a seller, because a buyer has no
  reason to be precise about their own side. That softening is the difference between this read and
  the loose end, and it is the one thing to get right here.
- **It never suggests a chase on its own.** What it produces is a fact for the seller and, at most,
  a note that gives before it asks. A buyer who has not done a thing they said they would do is
  usually busy, occasionally stuck, and sometimes has been told no inside their own organisation,
  and none of those is improved by being reminded that they promised. [`pushing`](pushing.md)
  guards the draft either way. *(My reason, not yet yours.)*
- Needs: Calendar and Meet, for the same reason the loose end needs them: a commitment made on a
  captured call counts, and an introduction that happened in a meeting closes one. Without them a
  promise made or kept off the connected channels is invisible (a data gap, named not faked).
- Assumes: a conversation already under way, because a promise sits on a thread and is read against
  that thread's own pace (an assumption gap, named not faked).
- It answers the half of F7 ("have they put me in front of the people I asked to meet") that
  [`missing-people`](missing-people.md) says in its body is a read of its own. That read says who
  is still unreached; this one says they told you they would fix it and have not. Together they are
  the whole question.
