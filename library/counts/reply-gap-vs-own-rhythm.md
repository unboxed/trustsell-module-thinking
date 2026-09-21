---
id: reply-gap-vs-own-rhythm
label: "Wait for a reply, against usual"
used_by: [cooling-champion]
over: [person-history]
over_status: decided   # decided 21 September, when the counts were written
defined: true
counts: How long they have been quiet, against how long they usually leave it.
needs: [gmail#email-message, gmail#email-thread, slack#slack-message, sms#text-message, web-form#form-submission]
breaks: Under about five replies there is no usual, and the number is an age rather than a comparison.
---

# Wait for a reply, against usual
## What it counts

How long it has been since this person last replied, in working days, against the median gap
between their replies across your whole history. Reported as both numbers, never as a ratio alone,
because "nine days against a usual of two" says something a multiplier does not.

Their own rhythm, never a fixed number of days, is the rule the whole library follows: eleven days
is nothing from somebody who answers monthly and a klaxon from somebody who answers daily.

## What it cannot see

A rhythm that has changed for a reason nothing records. And a person whose median is built mostly
from one busy period, which makes every quiet month afterwards look like a slide.
