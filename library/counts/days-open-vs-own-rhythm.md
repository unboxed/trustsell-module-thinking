---
id: days-open-vs-own-rhythm
label: "Time left hanging, against usual"
used_by: [loose-end, they-owe-you]
over: [conversation-history]
over_status: decided   # decided 21 September, when the counts were written
defined: true
counts: How long a thing has been open in working days, against how long a turn on this thread usually takes.
needs: [gmail#email-message, gmail#email-thread, slack#slack-message, sms#text-message]
breaks: A thread with fewer than about five turns has no usual, so the number is an age and not a comparison, and it says which it is.
---

# Time left hanging, against usual
## What it counts

Two numbers per open item. How long it has been open, in working days. And this thread's own usual
turn time: the median working time between one side writing and the other answering, across the
turns on record.

The second is the point of it. Eleven days is nothing on a thread that turns over a fortnight and a
long time on one that turns over a day, and every read in the library that asks "is this late" asks
it against their pace rather than against a number somebody chose.

Where the thread has too few turns to have a usual, it says so and returns the age alone. A
comparison against a median of two is not a comparison.

## What it cannot see

A pace that has changed for a reason nothing records: a holiday, a reorganisation, a death. The
median treats a quiet August as the new normal if August is most of what it has.
