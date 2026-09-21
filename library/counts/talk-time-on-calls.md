---
id: talk-time-on-calls
label: "Who does the talking on calls"
used_by: [warmth-fading]
over: [meeting-history]
over_status: decided   # decided 21 September, when the counts were written
defined: true
counts: How much of a captured call each side spoke for, and how that has moved across calls.
needs: [meet#transcript, meet#smart-notes, meet#participant, meet#meeting, calendar#calendar-event]
breaks: It needs three or more captured calls before a trend means anything.
---

# Who does the talking on calls
## What it counts

The share of speaking time on each captured call, by side, and the trend across calls in order. A
buyer who used to talk for two thirds of a call and now talks for a fifth has changed something,
and it is usually the first sign in the whole library that shows before the words do.

Time, not turns: ten short interjections is not the same as ten minutes.

## What it cannot see

Every uncaptured call. It also cannot see who is in the room but silent, and it reads a call where
you were presenting as a call where they disengaged. The reads above it are told to discount a
demo.
