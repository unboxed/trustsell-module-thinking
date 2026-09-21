---
id: steps-with-a-sign
label: "Steps with a sign on the record"
used_by: [steps-on-their-side]
over: [buying-process]
over_status: decided   # 21 September: confirmed when the arithmetic was written, which is what made it answerable
defined: true
counts: The steps whose sign the told list names and whose sign is actually on the record.
needs: [people-told#buying-process, handover#handed-over-document, meet#meeting, calendar#calendar-event, gmail#email-message, gmail#email-thread, slack#slack-message, sms#text-message]
breaks: Everything done quietly counts as no sign. It is what has been seen, never what has happened.
---

# Steps with a sign on the record
## What it counts

The steps whose sign the told list names and whose sign is actually there: a document that came across, a meeting with the person the step needs, a date somebody named. One per step, matched to the sign you said to look for and to nothing else. Which records it needs and when the number stops meaning anything are not written in the count's fields yet, like every other count.

It counts within [`buying-process`](../assemblies/buying-process.md).

## What it cannot see

Everything done quietly. A case written, circulated and approved inside the buyer's organisation leaves nothing on your record, so it counts as no sign. The number is what has been seen, never what has happened.
