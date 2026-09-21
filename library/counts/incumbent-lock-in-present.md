---
id: incumbent-lock-in-present
label: "Tied to their current supplier"
used_by: [competitive-standing]
over: [competitor-field]
over_status: decided   # decided 21 September, when the counts were written
defined: true
counts: Whether the buyer already has somebody, and what is said about how tied in they are.
needs: [gmail#email-message, gmail#email-thread, slack#slack-message, sms#text-message, web#web-result, web#page-content, web#research-report, web#enrichment, handover#stated-commitment]
breaks: Lock-in is a judgement about a contract nobody has shown you. The count reports what was said about it and never a term.
---

# Tied to their current supplier
## What it counts

Whether an incumbent has been named on this deal, who, and every line on record about how tied to
them the buyer is: a renewal date, a notice period, a contract length, a migration nobody wants.
One row per mention with the words and who said them.

What the buyer says about their own lock-in is the only evidence there will ever be, so it is kept
as their words.

## What it cannot see

The contract itself, which nobody will send you. And lock-in nobody has mentioned, which is common
early and is why an empty result means nothing this early in a deal.
