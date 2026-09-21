---
id: objection-name-match
label: "Matches a known worry"
used_by: [blocker]
over: [conversation-history]
over_status: decided   # decided 21 September, when the counts were written
defined: true
counts: Whether a worry raised on the thread matches one you have already written an answer for.
needs: [gmail#email-message, gmail#email-thread, slack#slack-message, sms#text-message, web-form#form-submission, meet#transcript, meet#smart-notes, meet#participant, meet#meeting, calendar#calendar-event]
breaks: A stall is read against what was agreed, so where nothing was agreed there is nothing to count and the number is not zero, it is absent.
---

# Matches a known worry
## What it counts

For each worry on record in this conversation, whether it matches an entry in your told objection
list, and which. Matching is on meaning rather than on wording, and where the match is not exact
the count reports both the worry and the candidate entry rather than deciding.

It is what lets the read above say "this is the pricing objection again" rather than "they said
something about money".

## What it cannot see

A worry expressed so obliquely that no entry looks like it, which is how the most serious ones
usually arrive. It also cannot see a worry somebody has and does not say.
