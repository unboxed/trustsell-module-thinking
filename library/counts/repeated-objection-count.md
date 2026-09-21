---
id: repeated-objection-count
label: "Same worry raised again"
used_by: [blocker]
over: [conversation-history]
over_status: decided   # decided 21 September, when the counts were written
defined: true
counts: How many times the same worry has come back on this deal, and how far apart.
needs: [gmail#email-message, gmail#email-thread, slack#slack-message, sms#text-message, web-form#form-submission, meet#transcript, meet#smart-notes, meet#participant, meet#meeting, calendar#calendar-event]
breaks: A stall is read against what was agreed, so where nothing was agreed there is nothing to count and the number is not zero, it is absent.
---

# Same worry raised again
## What it counts

For each worry on this deal, how many times it has been raised and the gap between the raisings. A
worry raised three times over three months is a different fact from one raised three times in a
week, and both are different from one raised once.

Repetition is the signal, not the count: a worry answered and dropped never comes back, so a worry
that comes back was not answered, whatever was said at the time.

## What it cannot see

Whether the same words mean the same worry. Two mentions of price can be two different problems,
one about the number and one about the shape of it.
