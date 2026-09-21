---
id: budget-or-procurement-entered
label: "Budget or buying team joins"
used_by: [buying-intent]
over: [conversation-history]
over_status: decided   # decided 21 September, when the counts were written
defined: true
counts: Whether money or procurement has entered the conversation, and when.
needs: [gmail#email-message, gmail#email-thread, slack#slack-message, sms#text-message, web-form#form-submission]
breaks: It counts what was written. A conversation that moved on a call leaves this at zero, which is a data gap and not a quiet buyer.
---

# Budget or buying team joins
## What it counts

The first time, and every time since, that the conversation turns to money or to a process: a
budget named, a procurement or purchasing person on a thread, a purchase order, a framework, a
tender. One row per occurrence, with the words and the day.

It is the plainest sign in the library that a conversation has become a purchase, because nobody
involves procurement out of curiosity.

## What it cannot see

A budget discussed on a call nobody captured, and a procurement process that starts inside their
organisation and reaches you weeks later. It also cannot tell a procurement person brought in to
buy from one brought in to say no.
