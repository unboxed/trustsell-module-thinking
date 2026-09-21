---
id: decisions-so-far
module: 02-relationships
label: What has been answered so far
blurb: Every answer recorded against a deal that is still running: who answered, what they said, when, and what is still out.
about: a deal
deterministic: true
inputs:
  - crm#deal-decision
  - people-told#answer-received
  - deal
---

# What has been answered so far

## What it gathers

Gathers, for one deal still running, every answer that has come back on it, and from whom.

Most sales need somebody to say yes who is not the person you are talking to. A lender, a credit
committee, a procurement board, a head office approving a discount, a partner who has to agree
before the buyer can. Those answers arrive somewhere other than the conversation, usually in the
deal record, and they arrive without ceremony. This is the gather that holds them.

For each answer it holds:

- **who answered**, which is often not the buyer;
- **what they answered**: an offer with its terms, a refusal, a request for more, or nothing
  decided yet;
- **when** it was recorded;
- **the reason as it was given**, in their words or as it was written down, never a reason the tool
  worked out.

And, across them, **what is still out**: whoever the deal was put in front of and has not answered.
That is the plain subtraction of the answers from the list of those asked, and it is the half of
this gather a seller usually wants first.

**An answer is recorded or told, never deduced.** A message that reads like good news is not an
answer. A stage that has moved is not an answer. The gather carries what the deal record holds or
what you said came back, and where neither has anything it is empty, which is an honest empty.
That is the same rule [`deal-outcomes`](deal-outcomes.md) follows for endings and
[`since-the-sale`](since-the-sale.md) for completions, and it holds here for the same reason: the
records that say a deal moved are the least reliable thing to infer from. *(My reason, not yet
yours.)*

**It is the live twin of [`deal-outcomes`](deal-outcomes.md).** That one is keyed on nothing and
gathers the pile of endings, for comparing this deal with the ones like it. This one is keyed on
**one deal**, still running, and gathers what has come back on it so far. Two gathers rather than
one because they answer different shapes of question, and because an answer that does not end a
deal has nowhere to live in a pile of endings. Where an answer does end the deal, it is in both:
here as what came back, there as how it finished.

No opinion is formed here. Whether an answer is good, whether the wait has gone on too long, and
whether the buyer has been told are all reads, one floor up.

## Where it comes from

`deal-decision` resolves to [`channels/crm.md`](../channels/crm.md), one row per decision, which is
what lets a single deal carry several answers from several parties. `answer-received` is People's
own told record, resolving to [`people-told.md`](../told/people-told.md), the told twin for a
seller whose deal system is not connected or who heard it on the phone. Where the CRM is not
connected the told record is the whole of it, and the gather is as complete as you have been (a
data gap and a told gap at once, named not faked). `deal` is the sibling assembly this is keyed
on, for what the deal actually is and who is on it.

Who the deal was put in front of is the weakest part of this gather today. Where the deal record
carries a submission, it is a fact; where it does not, the tool knows only who has answered, and
cannot subtract. It says which of the two it is rather than presenting a short list as a full one.
