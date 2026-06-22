---
id: missing-people
floor: signal
label: Missing people
blurb: A key person you have never reached, or a deal resting on one contact.
inputs: [stakeholder-map]
measures: [people-covered-vs-needed, decision-maker-reached, rests-on-one-person, people-reached-count]
answers: [Q4, Q5, Q6]
modes: [grow, plant]
kind: risk
confidence: graded
---

# Missing people

A read on the *shape* of who you are talking to, not on any one person. People already gathers everyone
at an organisation into one picture and marks the empty spots; this signal reads those empty spots
against the people a decision usually needs, and speaks up when there is a hole: someone who can
actually say yes that you have never reached, or a deal where everything rests on one contact. It is
the difference between "we have a lovely relationship with Sam" and "we have a lovely relationship with
Sam and nobody who can sign".

> **Scope note.** Today this reads the organisation's roster (`stakeholder-map`), so it covers the
> buyer org. Re-pointing it at the *deal's* buying group (which can span orgs) is deferred with the
> rest of the deal re-scoping; see [`open-questions`](../../_scratch/open-questions.md).

| Floor | What People has |
|---|---|
| **Facts** (1) | the picture of everyone at Council 14: Sam (your main contact, on every thread), Dana (a service lead, two threads), and a row for whoever signs off, marked empty |
| **Counts** (2) | *people covered vs needed:* main contact ✓, someone who sways it ✓, **whoever signs off ✗**, the wider buying team ✗ · *decision-maker reached:* nobody on record holds budget sign-off · *rests on one person:* 80% of all messages are with Sam alone · *people reached:* 2 of an estimated 4 |
| **Opinion** (3) | **"This deal rests on one person and is missing whoever signs off"**: strong with Sam, but nobody who can actually approve it is in the conversation · *confidence: graded* |

What surfaces is not a bare label but *"Everything at Council 14 is riding on Sam: he's a great
contact, but nobody who holds the budget is in the conversation and the wider buying team hasn't been
reached, so the deal can't close on who you know today."* Every clause walks back to a row (or an empty
row) in the picture of the organisation. That is the track-back.

**Threshold.** There is no fixed "talk to five people = covered" line. The read speaks up on two
distinct holes: a *needed person nobody has reached* (above all, whoever signs off), and *everything
resting on one contact*, where a single person carries almost the whole conversation, so the deal has
one point of failure. "Resting on one" is judged against the organisation's own size, so a genuinely
small buyer with one decision-maker is not flagged for lacking a team it never had.

**Why it's trustworthy.** The counting is the picture's own work: who holds which part, who has been
reached, whose share of the back-and-forth dominates, all of it deterministic. The arguable part is
*which* people a given deal needs, and that is handled honestly: the usual cast (someone who decides,
someone who holds the budget, people who sway it, anyone likely to push back) is the default checklist,
and where a particular deal needs a shape only you or Offerings can state, the read names it as a
**told gap** ("tell me who signs off here") rather than inventing the buying team.

**Where it can fail to reach ground.** Who reports to whom, and who really decides, rest on email
signatures and what the open web returns; until LinkedIn connects, those are under-known, so a person
who can say yes might exist that the picture cannot see to flag. That is the same **data gap** the
organisation picture carries, inherited here and named not faked: the read can say "nobody who signs
off is on record", not "there is definitely someone you are missing".
