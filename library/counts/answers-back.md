---
id: answers-back
label: "What has come back"
used_by: [answer-came-back, disclosure-still-owed]
over: [decisions-so-far]
over_status: decided   # 21 September: confirmed when the arithmetic was written, which is what made it answerable
defined: true
counts: One row per answer recorded against this deal, sorted by what each was: an offer with its terms, a refusal, a request for more, or nothing decided yet.
needs: [crm#deal-decision, people-told#answer-received]
breaks: An answer that reached you and nowhere else has not come back until you say so.
---

# What has come back
## What it counts

The answers recorded against one deal that is still running, counted by what each one was: an offer
with its terms, a refusal, a request for more, or nothing decided yet. One row per answer, because a
deal can collect several from several parties. Which records it needs and when the number stops
meaning anything are not written in the count's fields yet, like every other count.

Two signals quote it. [`answer-came-back`](../signals/answer-came-back.md) counts them to say the
buyer has not heard. [`disclosure-still-owed`](../signals/disclosure-still-owed.md), since later on
21 September, reads the accepted one for its terms, because the numbers a buyer is owed before they
agree are the terms of the answer they took, not the shelf's band.

It counts within [`decisions-so-far`](../assemblies/decisions-so-far.md), decided when the count was
written rather than derived, because that is the only gather that holds a live deal's answers.

## What it cannot see

An answer that reached you and nowhere else: a funder who phoned, a chair who said yes in a corridor.
Until you say so it has not come back. It also cannot see an answer that is really two, the offer
that arrives with a condition attached; it counts the row as recorded and the condition is in the
reason, where a person reads it.
