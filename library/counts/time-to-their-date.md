---
id: time-to-their-date
label: "How long until their date"
used_by: [deadline-they-gave]
over: [conversation-history]
over_status: decided   # 21 September: confirmed when the arithmetic was written, which is what made it answerable
defined: true
counts: The working time between today and each date the buyer stated that is still ahead, nearest first, with how much of the run-up has gone.
needs: [gmail#email-message, gmail#email-thread, slack#slack-message, sms#text-message, meet#transcript]
breaks: A date that has already passed drops out of the forward half, which it probably should not, and that is a read nobody has written.
---

# How long until their date
## What it counts

The working time between today and each date the buyer stated that is still ahead, nearest first.
Working time, the way every other gap in the library is counted. Against it, the time between today
and the day they said it, which is how much of the run-up has already gone. Two numbers rather than
one, because "six months left" means something different when they told you last week and when they
told you in July. Which records it needs and when the number stops meaning anything are not written
in the count's fields yet, like every other count.

It counts within [`conversation-history`](../assemblies/conversation-history.md), decided when the
count was written rather than derived, because a date the buyer gave you is said on a thread and
nowhere else.

## What it cannot see

Whether the date is still the date. A committee moves, a budget year does not, and nothing on the
record says which kind this one is; the read grades on that and the count does not know. It also
cannot see a date that has already passed quietly, which drops out of the count the day it does and
should probably not: a deadline the buyer gave and you both sailed past is worth knowing about, and
that is a read nobody has written.
