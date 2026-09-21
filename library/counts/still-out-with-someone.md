---
id: still-out-with-someone
label: "Still out, and with whom"
used_by: [answer-came-back]
over: [decisions-so-far]
over_status: decided   # 21 September: confirmed when the arithmetic was written, which is what made it answerable
defined: true
counts: Whoever the deal was put in front of, minus whoever has answered, by name.
needs: [crm#deal-decision, people-told#answer-received, crm#deal-record]
breaks: Where no record carries who it went to, it cannot subtract, and says so rather than presenting a short list as a full one.
---

# Still out, and with whom
## What it counts

Whoever the deal was put in front of, minus whoever has answered. Plain subtraction, and the names
are the point of it: a buyer asking "where are we" wants the ones still out, not the number of them.
Which records it needs and when the number stops meaning anything are not written in the count's
fields yet, like every other count.

It counts within [`decisions-so-far`](../assemblies/decisions-so-far.md), decided when the count was
written rather than derived.

## What it cannot see

The list it subtracts from. Where the deal record carries who it was submitted to, this is a real
subtraction; where it does not, the tool knows only who has answered and cannot say who is left,
which is a data gap named not faked. The count says which of the two it is, and a short list is
never presented as a full one.
