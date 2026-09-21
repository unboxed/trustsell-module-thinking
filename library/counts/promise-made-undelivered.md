---
id: promise-made-undelivered
label: "Promise not kept yet"
used_by: [loose-end, pushing]
over: [conversation-history]
over_status: decided   # decided 21 September, when the counts were written
defined: true
counts: Each concrete thing you said you would do, on a thread or a captured call, that nothing later closed.
needs: [gmail#email-message, slack#slack-message, sms#text-message, meet#transcript]
breaks: A promise with no object ("I will be in touch") cannot be checked as kept, so it is not counted at all.
---

# Promise not kept yet
## What it counts

Each concrete commitment **you** made, one row per promise: the words, the day you said them, and
how long ago that is in working days. Concrete means it names a thing that could arrive: a
document, a number, an introduction, a date. "I'll send the pricing sheet" counts. "I'll be in
touch" does not, because nothing could ever close it, and a number that can never fall is not a
number.

A promise leaves the count the moment `fulfilment-scan` finds what closed it, so this is always
promises **outstanding** rather than promises made.

## What it cannot see

A promise kept by voice, or on a channel the seller has not connected. It also cannot see a
promise made in words a parser does not catch, which is a told gap the user closes by correcting
the read.
