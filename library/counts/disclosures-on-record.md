---
id: disclosures-on-record
label: "Which of them you have already said"
used_by: [disclosure-still-owed]
over: [conversation-history]
over_status: decided   # decided 21 September, when the counts were written
defined: true
counts: Which of the required disclosures appear in what you have already sent on this deal.
needs: [gmail#email-message, gmail#email-thread, slack#slack-message, sms#text-message, web-form#form-submission, gmail#attachment, handover#handed-over-document]
breaks: A disclosure made on an uncaptured call is invisible until the seller says so.
---

# Which of them you have already said
## What it counts

For each required rule, whether anything you have sent on this deal meets it: the message or
document, the passage, and the day. One row per rule, met or not met.

The one judgement in it, whether a message meets a rule in different words, is made by naming the
passage rather than by deciding quietly. A rule marked met with a passage beside it can be
overruled in a second; one marked met with nothing beside it cannot.

## What it cannot see

Anything said aloud, and anything sent by a colleague. It also cannot see a disclosure made
correctly in a document you attached but never read, which it will mark met on the strength of the
document's presence.
