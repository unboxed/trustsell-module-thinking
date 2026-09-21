---
id: pricing-question-asked
label: "Asked about price"
used_by: [buying-intent]
over: [conversation-history]
over_status: decided   # decided 21 September, when the counts were written
defined: true
counts: Each time they ask what it costs, with the words and the day.
needs: [gmail#email-message, gmail#email-thread, slack#slack-message, sms#text-message, web-form#form-submission]
breaks: It counts what was written. A conversation that moved on a call leaves this at zero, which is a data gap and not a quiet buyer.
---

# Asked about price
## What it counts

Each question from them about price, in their own words: what it costs, how it is priced, what a
group their size pays, whether there is a discount. One row per question, with the day and whether
anything since answered it.

The last part is what makes it more than a tally: an unanswered pricing question is the same fact
as an open ask, and two reads want it for opposite reasons.

## What it cannot see

A price discussed aloud, and a price asked for by somebody else at their organisation who never
wrote to you.
