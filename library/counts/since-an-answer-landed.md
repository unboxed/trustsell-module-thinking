---
id: since-an-answer-landed
label: "How long since it landed"
used_by: [answer-came-back]
over: [decisions-so-far]
over_status: decided   # 21 September: confirmed when the arithmetic was written, which is what made it answerable
defined: true
counts: The working time between the day the newest answer was recorded and now.
needs: [crm#deal-decision, people-told#answer-received]
breaks: It counts from the day it was recorded, not the day it was made, and says which.
---

# How long since it landed
## What it counts

The working time between the day the newest answer on this deal was recorded and now. Working time,
not calendar time, for the same reason every other gap in the library is counted that way: a weekend
is not a delay. Where several answers landed, this is the newest, because the newest is what the
buyer has not heard. Which records it needs and when the number stops meaning anything are not
written in the count's fields yet, like every other count.

It counts within [`decisions-so-far`](../assemblies/decisions-so-far.md), decided when the count was
written rather than derived.

## What it cannot see

The difference between the day an answer was given and the day somebody typed it in. A decision
recorded on Thursday may have been made on Monday, and this number counts from Thursday. It reads
late rather than early, which is the safer way round for a read whose point is that a buyer is
waiting, and the read says which date it is counting from.

At a tempo measured in hours, a number measured in days is too coarse to be the whole answer. That
is a question about the shape of a day, not about this count, and a world whose tempo is hours says
so in its own goal.
