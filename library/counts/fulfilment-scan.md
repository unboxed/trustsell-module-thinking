---
id: fulfilment-scan
label: "Anything that kept the promise"
used_by: [loose-end, they-owe-you]
over: [conversation-history]
over_status: decided   # decided 21 September, when the counts were written
defined: true
counts: For each open promise, whether anything later on record could have closed it: an attachment, a meeting, a file, a document, or a message naming the thing.
needs: [gmail#email-message, gmail#attachment, calendar#calendar-event, meet#meeting, slack#slack-file, handover#handed-over-document]
breaks: It is a scan, not a judgement: it reports what it found, and matching a thing to a promise is the read s call where the match is not exact.
---

# Anything that kept the promise
## What it counts

For each row in `promise-made-undelivered` or `their-promise-undelivered`, everything later on
record that could have closed it: an attachment sent after the promise, a calendar event or meeting
with the person the promise named, a file shared, a document handed over, or a message that names
the promised thing.

It returns what it found and where, not a yes or no. An exact match (the named document, attached)
is a close. Anything less is handed up to the read, because deciding that a meeting on Tuesday was
the promised walkthrough is a judgement and judgements do not live on this floor.

## What it cannot see

A promise kept outside the connected channels: a document posted, a phone call, a conversation in a
corridor. Those leave the promise looking open, which is the safer error for a count whose purpose
is to stop the tool saying a thing was never done.
