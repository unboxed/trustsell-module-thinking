---
id: dropped-recurring-meeting
label: "Regular meeting dropped"
used_by: [cooling-champion]
over: [person-history]
over_status: decided   # decided 21 September, when the counts were written
defined: true
counts: A standing meeting with them that has stopped, or that they have started declining.
needs: [meet#transcript, meet#smart-notes, meet#participant, meet#meeting, calendar#calendar-event]
breaks: A series ending at its natural end is not a drop, and the count checks the series had no end date before reporting one.
---

# Regular meeting dropped
## What it counts

A recurring meeting with this person that has stopped happening: cancelled, declined twice or more
in a row, or simply not recurring any further. One row per series, with when it last happened and
how it ended.

Of all the behavioural numbers in the library this is the loudest, because a standing meeting takes
a deliberate act to end and nobody ends one by accident.

## What it cannot see

A meeting moved rather than dropped, where the new series is a different event. And a series that
ended because the project it belonged to ended, which is not about you at all.
