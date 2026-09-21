---
id: reply-length-vs-own-rhythm
label: "Reply length, against usual"
used_by: [blocker, champion, warming, warmth-fading]
over: [person-history]
over_status: decided   # decided 21 September, when the counts were written
defined: true
counts: How long their replies are now, against how long they used to be.
needs: [gmail#email-message, gmail#email-thread, slack#slack-message, sms#text-message, web-form#form-submission]
breaks: Same as the speed number: five replies before a median means anything.
---

# Reply length, against usual
## What it counts

The median length of their replies over the last month, in words, against the median across the
whole history, with the direction of travel. The companion to `reply-speed-vs-own-rhythm`, and the
two move independently: somebody who answers as fast as ever in half the words has changed
something.

Words rather than characters, and the quoted trail of an earlier message is stripped before
counting, because a reply that quotes the whole thread is not a long reply.

## What it cannot see

A person who has switched to writing from a phone, whose answers get shorter for a reason that has
nothing to do with you. And warmth expressed in one perfect sentence, which this reads as
disengagement.
