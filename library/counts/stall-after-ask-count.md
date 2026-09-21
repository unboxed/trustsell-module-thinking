---
id: stall-after-ask-count
label: "Next steps that stall"
used_by: [blocker]
over: [conversation-history]
over_status: decided   # decided 21 September, when the counts were written
defined: true
counts: How many times a next step was agreed and then nothing happened.
needs: [gmail#email-message, gmail#email-thread, slack#slack-message, sms#text-message, web-form#form-submission, meet#transcript, meet#smart-notes, meet#participant, meet#meeting, calendar#calendar-event]
breaks: A stall is read against what was agreed, so where nothing was agreed there is nothing to count and the number is not zero, it is absent.
---

# Next steps that stall
## What it counts

Each time something was agreed as the next step, and what happened after: the step, the day it was
agreed, and whether anything on record shows it taken within the time it was meant to take. A tally
of the ones that stalled.

It is the behavioural half of a blocker. A worry nobody voices shows up here as a pattern of things
agreed and not done.

## What it cannot see

A step taken and never mentioned, and a step that stalled for a reason nothing to do with the deal.
It also cannot see a next step agreed aloud and never written down, which is most of them.
