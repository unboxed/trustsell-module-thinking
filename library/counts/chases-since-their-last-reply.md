---
id: chases-since-their-last-reply
label: "Your messages since they last wrote"
used_by: [enough-tries, pushing]
over: [conversation-history]
over_status: decided   # decided 21 September, when the counts were written
defined: true
counts: How many times you have written since they last wrote back, with the day of each.
needs: [gmail#email-message, gmail#email-thread, slack#slack-message, sms#text-message, web-form#form-submission]
breaks: It resets to zero on any reply, including a one-word one, because a reply is a reply.
---

# Your messages since they last wrote
## What it counts

The messages you have sent since the last message they sent, counted, with the day of each. It
resets to zero the moment anything comes back, including "thanks" and including an out of office
sent by a person rather than a machine, because the question it answers is whether you are talking
into silence and a reply means you are not.

It is the sharper half of `times-you-chase`: that one measures the whole thread, this one measures
the current run.

## What it cannot see

A reply that went to somebody else at your firm, which makes the run look longer than it is. And a
reply on a channel nobody has connected, which does the same.
