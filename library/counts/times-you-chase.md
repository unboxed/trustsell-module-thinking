---
id: times-you-chase
label: "Times you chased"
used_by: [enough-tries, one-sided]
over: [conversation-history]
over_status: decided   # decided 21 September, when the counts were written
defined: true
counts: How many messages you have sent them since their last reply, and how many in total on this thread.
needs: [gmail#email-message, gmail#email-thread, slack#slack-message, sms#text-message, web-form#form-submission]
breaks: A message that is not a chase (an answer they asked for, a thing they are waiting on) is not counted as one, and the read says which it dropped.
---

# Times you chased
## What it counts

Two numbers. How many messages you have sent since the last one they answered, and how many you
have sent on this thread altogether. One row per message, with its day, so the shape of the run is
visible as well as its length: four in a week reads differently from four in four months.

A message only counts as a chase if it is asking rather than giving. An answer they asked for, a
document they are waiting on, or a reply to something of theirs is not a chase, and dropping those
is the difference between a count that measures pestering and one that measures typing.

## What it cannot see

A chase by phone, and a chase made by somebody else at your firm, which `colleague-touches-on-record`
counts separately. It also cannot tell a chase they welcomed from one they resented; nothing on
record can.
