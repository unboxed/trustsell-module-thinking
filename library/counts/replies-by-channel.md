---
id: replies-by-channel
label: "Replies by channel"
used_by: [best-way-to-reach]
over: [person-history]
over_status: decided   # 21 September: it counts within your history with one person, which is the only gather every read using it shares
defined: true
counts: How often they answer on each channel you have tried, as a rate.
needs: [gmail#email-message, gmail#email-thread, slack#slack-message, sms#text-message, web-form#form-submission]
breaks: Under about four messages on a channel there is no rate, only a result, and the count says which it has.
---

# Replies by channel
## What it counts

For each channel you have used with this person, how many messages you sent and how many were
answered, as a count and a rate. One row per channel.

It is half the answer to where to write to somebody. The other half is speed, counted beside it.

## What it cannot see

A channel you have never tried, which looks identical to one that never works. The read is told
that a rate of zero over two messages is not evidence.
