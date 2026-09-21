---
id: decision-language-used
label: "They talk about deciding"
used_by: [buying-intent, disclosure-still-owed]
over: [conversation-history]
over_status: decided   # decided 21 September, when the counts were written
defined: true
counts: Each time their words turn from considering to deciding, with the passage.
needs: [gmail#email-message, gmail#email-thread, slack#slack-message, sms#text-message, web-form#form-submission]
breaks: It counts what was written. A conversation that moved on a call leaves this at zero, which is a data gap and not a quiet buyer.
---

# They talk about deciding
## What it counts

Each passage where their language moves from weighing to deciding: "we want to go ahead", "send
the paperwork", "we've chosen", "what do you need from us". One row per passage, with the words,
who said it and the day.

The words are the whole of it. This is the one count in the library most likely to be wrong,
because the same sentence means different things from different people, so it hands over the
passage and never a verdict.

## What it cannot see

Somebody saying it who cannot decide, which is most of the people who say it. It also cannot see a
decision taken internally and not yet said to you, which is the commonest place for a deal to be
further on than it looks.
