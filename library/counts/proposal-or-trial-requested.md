---
id: proposal-or-trial-requested
label: "Asked for a proposal or trial"
used_by: [buying-intent]
over: [conversation-history]
over_status: decided   # decided 21 September, when the counts were written
defined: true
counts: Each time they ask for a proposal, a pilot, a trial or the paperwork.
needs: [gmail#email-message, gmail#email-thread, slack#slack-message, sms#text-message, web-form#form-submission]
breaks: It counts what was written. A conversation that moved on a call leaves this at zero, which is a data gap and not a quiet buyer.
---

# Asked for a proposal or trial
## What it counts

Each request from them for something formal: a proposal, a quote, a pilot, a trial, a
security review, the paperwork. One row per request, with the words, the day, and whether it has
been met.

These are the requests that cost them something internally to make, which is why they carry more
than enthusiasm does.

## What it cannot see

A request made on a call, and a request made to somebody else at your firm. It also cannot tell a
proposal wanted in order to buy from one wanted in order to compare you with an incumbent.
