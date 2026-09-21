---
id: dated-facts-in-their-words
label: "Dates and deadlines in their own words"
used_by: [deadline-they-gave, pushing]
over: [conversation-history]
over_status: decided   # decided 21 September, when the counts were written
defined: true
counts: Each date, deadline, budget cycle or closing window the buyer stated, with the passage and who said it.
needs: [gmail#email-message, gmail#email-thread, slack#slack-message, sms#text-message, web-form#form-submission, meet#transcript]
breaks: A date they gave and then passed is still a date they gave; it leaves the forward-looking half of the count and stays on record.
---

# Dates and deadlines in their own words
## What it counts

Each date the **buyer** stated, in their own words: the date, the passage it came from, who said
it, and when they said it. One row per date, with whether it is still ahead.

Only theirs. A date you set, a date your quarter wants, or a date the tool worked out never enters
this count, which is what makes it usable by the two reads that need it for opposite purposes:
[`pushing`](../signals/pushing.md) counts them so a draft cannot invent one, and
[`deadline-they-gave`](../signals/deadline-they-gave.md) counts them so nobody misses one.

## What it cannot see

Whether the date is still the date. A committee moves and a financial year does not, and nothing on
the record says which kind this is. Also a date given on an uncaptured call.
