---
id: where-they-start
label: "Which channel they write first on"
used_by: [best-way-to-reach]
over: [person-history]
over_status: decided   # 21 September: it counts within your history with one person, which is the only gather every read using it shares
defined: true
counts: Which channel they choose when they start something themselves.
needs: [gmail#email-message, gmail#email-thread, slack#slack-message, sms#text-message, web-form#form-submission]
breaks: It needs them to have started something. Where they never have, the count is absent rather than zero.
---

# Which channel they write first on
## What it counts

Of the conversations this person began, which channel each started on, tallied. One row per
channel.

It is the strongest of the three channel numbers and the least used, because it is the only one
that shows a choice. Answering where you wrote is a courtesy; opening somewhere is a preference.

All three count within your history with one person rather than within a conversation, because the
question they answer is about the person and not about a thread.

## What it cannot see

A person who starts everywhere because their organisation does, and a person who starts on the
channel their last message from you happened to arrive on.
