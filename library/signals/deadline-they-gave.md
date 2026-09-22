---
id: deadline-they-gave
module: 02-relationships
label: A deadline they gave you
blurb: A date the buyer stated is coming up, and nothing has moved towards it.
kind: risk
confidence: graded
inputs: [conversation-history, deal]
counts: [dated-facts-in-their-words, time-to-their-date]
answers: [F10]
needs: []
assumes: [thread-under-way]
pull: The Brain's tempo from the goal, for what counts as short. Named in the body since 21 September and joined here on 22 September
assumes_status: provisional
---

# A deadline they gave you

## What it means

The buyer named a date, and it is getting closer while nothing happens.

A budget year that ends in March. A committee that sits on the ninth. A contract that runs out in
June. A window that closes on a Friday. Buyers say these things once, in passing, and then expect
you to have heard them. The date sits on a thread from two months ago and nobody looks at it again
until it has gone.

The read watches those dates. It says which one is nearest, how long is left, and whether anything
has moved towards it since they said it.

## In practice

In July they wrote "our budget year ends in March, so it would need to be agreed by then". It is
now September, nothing has gone between you since the middle of August, and the case that would
have to be written on their side shows no sign. The read: "their own date is the end of March, six
months off, and the thing they said had to happen first has not started. This is the point where
six months stops being a long time."

## How it is worked out

Applies the shared reading rules in [`docs/reading-principles.md`](../docs/reading-principles.md).

- Trigger: a date the buyer stated in their own words is still ahead (counting), and the time left
  has crossed from comfortable into short for a sale of this shape. What counts as short is the
  goal's tempo, not a fixed number: at an hours tempo a week is a long way off, and on a
  multi-year sale six months is the last moment to start.
- It reads only dates **they** gave. A date you set, a date your quarter wants, or a date the tool
  worked out is not this read and never becomes one. That is the same line
  [`pushing`](pushing.md) holds from the other side: that read counts the buyer's own dates to stop
  you manufacturing urgency, and this one counts them to stop you missing it. One count serves both
  because it is the same fact, and the two reads are the two things worth doing with it. *(My
  reason, not yet yours.)*
- Confidence: high when they put the date in writing with a reason attached ("our budget year
  ends"). Softens when the date was vague ("some time in the spring"), when it was said a long time
  ago and never repeated, and when it is the kind of date that routinely slips. A committee date
  moves; a financial year does not.
- Needs: no source beyond the thread. The gap here is a date given on a call nobody captured, which
  is invisible until you say so, and a date that has quietly changed inside their organisation,
  which looks exactly like the old one still standing.
- Assumes: a conversation already under way, because the date has to have been said to you (an
  assumption gap, named not faked).
- It answers the half of F10 ("how long has it been since anyone spoke, and was there a deadline
  behind the silence") that [`time-to-reconnect`](time-to-reconnect.md) says in its body it cannot
  reach. That read watches the silence; this one watches the clock. A quiet fortnight before a
  committee sits is a different thing from a quiet fortnight in August, and until now the library
  could not tell them apart.
