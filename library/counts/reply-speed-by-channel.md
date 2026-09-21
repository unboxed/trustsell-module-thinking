---
id: reply-speed-by-channel
label: "Reply speed by channel"
used_by: [best-way-to-reach]
over: [person-history]
over_status: decided   # 21 September: it counts within your history with one person, which is the only gather every read using it shares
defined: true
counts: How fast they answer on each channel, as a median.
needs: [gmail#email-message, gmail#email-thread, slack#slack-message, sms#text-message, web-form#form-submission]
breaks: Same threshold as the rate: four replies on a channel before a median means anything.
---

# Reply speed by channel
## What it counts

For each channel, the median working time between your message and their reply, with how many
replies it is built from. One row per channel.

Rate and speed together are the whole of "where do they actually answer": somebody who replies to
every text within the hour and to a third of your emails within a week is telling you where to
write.

## What it cannot see

The reason. Somebody may answer fast on a channel because their phone buzzes, not because they
prefer it.
