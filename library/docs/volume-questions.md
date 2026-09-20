# The volume seller's 22 questions: the other end of the spectrum

The 26 questions in [`sales-questions.md`](sales-questions.md) are one seller's: Martyn, reaching out
to councils. Few buyers, several people to win in each, years of patient contact. The library's
signals and counts were derived from them, so the library is a faithful answer to **that** seller's
questions and silent about anything they never had to ask.

This is the second set, from the opposite end: a broker selling merchant cash advances. Many
candidates, one owner per business, days rather than years. It exists to make the library's holes
visible. A question here that nothing in the library answers is a hole, not a quirk of one trade.

**These are the seller's questions to themselves**, the same as the 26, never the questions they ask
the merchant out loud.

## The list

1. Which of the candidates on my list is worth reaching today?
2. What changed about this business that gives me a reason to make contact now?
3. Which of my candidates are the same as each other, and which is unlike the rest?
4. Has anyone else at my firm already been in touch with this business?
5. How many times have I tried this one, and when do I stop?
6. What hour, and what channel, does this kind of person actually answer on?
7. Is the person I have reached the one who can decide?
8. Does this business clear the bar for what I am offering?
9. What do they actually want it for?
10. How urgent is it for them, in their words rather than mine?
11. Is their income steady, or lumpy and seasonal?
12. What do they already owe, and to whom?
13. Can they carry this on top of what they already carry?
14. What have they still not sent me?
15. Which of the things I can offer should this one go to?
16. What was turned down last time on one like this, and why?
17. Why should a stranger believe me rather than the others who called this week?
18. What am I obliged to tell them about the cost before they agree?
19. Is anything I am about to say manufacturing urgency that is not real?
20. When does someone I have already sold to come round again?
21. Who could this buyer introduce me to?
22. Which of the people I have sold to is in trouble?

## Where each question comes from

Published, meaning a broker's own trade writing says this is part of the job. Inferred, meaning it
follows from the trade but I have not found it stated, so it is mine until you agree with it.

| Questions | Where from |
|---|---|
| 1, 2, 20 | **Published.** Brokers buy UCC filing lists and call merchants whose existing advance is maturing, because the intent is proven rather than assumed. The maturing advance is both the reason to call a stranger and the reason to call a past customer back, which is why these three are one family. |
| 7, 9, 10, 11, 12, 14 | **Published.** The trade's own qualifying list is decision-making authority, funding purpose, urgency, revenue quality, existing obligations and document readiness, in those words. |
| 8, 15 | **Published.** Qualification is against the funder's box: time in business, monthly income, credit, and the amount asked for. A broker places one buyer with one of several funders and products. |
| 13 | **Published.** Stacking, funding a second advance onto a merchant who cannot carry two repayments, is named in the trade's own writing as its worst practice. |
| 17, 19 | **Published.** The industry's own published red flags are repeated cold calls and "this offer expires today". So both the credibility problem and the not-pushing rule are the trade's own, not imported. |
| 18 | **Published that the duty exists**, not written yet what it covers. Commercial financing disclosure is law in some places and not others. What exactly must be said, and where, is not written yet. |
| 3, 4, 5, 6, 16, 21, 22 | **Inferred.** They follow from working a list rather than a shortlist, but I have not found them stated. *(My reading, not yet yours.)* |

Sources: [MCA broker and ISO guide](https://mcaleadspro.com/merchant-cash-advance/),
[how to sell merchant cash advances](https://mcaleadspro.com/how-to-sell-merchant-cash-advances),
[MCA 101](https://grantphillipslaw.com/merchant-cash-advance-101-explained/),
[how to become an MCA broker](https://sendstrike.ai/blog/how-to-become-mca-broker),
[Premium Merchant Funding](https://www.pmfus.com/about-pmf/).

## What this set is not

It is not a second filing system. The 26 are used as a lens, not the backbone, and so is this set: a
handle for showing how an answer traces down to plain facts, and where it cannot. A signal names the
questions it answers in `answers:`, from either set, and `build.js` checks the id resolves. The ids
are `V1` to `V22` here and `Q1` to `Q26` there.

Nor is it the volume seller's whole job. It stops where the library stops: at what the tool could
prepare. How a call is opened, and what is said on it, is the seller's. And it starts later than the
job does: the tool covers from a lead onwards, not the cold list worked at scale (the user, 20
September), so questions 1 to 3 and the cohort half of 6 are before its scope. [`coverage.md`](coverage.md)
marks them so.

## What it exposes

The coverage map is in [`coverage.md`](coverage.md), question by question. The short version, and the
reason this document was written: three of these twenty-two are answered today, five are answered in
part, and **fourteen are answered by nothing at all**. They gather into seven families, and only one
of the seven is really about volume. The rest are questions any seller asks, which one seller happened
not to.
