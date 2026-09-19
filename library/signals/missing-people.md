---
id: missing-people
module: 02-relationships
label: Stakeholders you have not reached
blurb: A key person you have never reached, or a deal resting on one contact.
kind: risk
confidence: graded
inputs: [stakeholder-map, deal]
counts: [people-covered-vs-needed, decision-maker-reached, rests-on-one-person, people-reached-count]
answers: [Q4, Q5, Q6]
needs: [linkedin]
---

# Stakeholders you have not reached
## What it means

A read on the shape of who you are talking to, not on any one person.

People gathers everyone at an organisation into one picture and marks the empty spots. This read holds
those spots against the people a decision usually needs, and speaks up when there is a hole. It is the
difference between "we have a lovely relationship with our contact" and "we have a lovely relationship
with our contact and nobody who can sign".

It flags two holes. One is a needed person nobody has reached, above all whoever signs off. The other
is a deal resting on one contact, where almost everything runs through a single person.

The arguable part is which people a given deal needs. The usual cast (someone who decides, someone who
holds the budget, people who sway it, anyone likely to push back) is the default checklist; where a
deal needs a shape only you or Offerings can state, the read names it as a told gap rather than
inventing the buying team. Who reports to whom, and who really decides, rest on email signatures and
what the open web returns, so until LinkedIn connects a person who can say yes might exist that the
picture cannot see to flag.

> **Scope note.** Today this reads the organisation's roster (`stakeholder-map`), so it covers the
> buyer org. Re-pointing it at the deal's buying group (which can span orgs) is deferred with the rest
> of the deal re-scoping; see [`open-questions`](../../_archive/_scratch/open-questions.md).

## In practice

At a prospect organisation, your main contact is on every thread and a service lead is on a couple, but
the row for whoever signs off is empty and nobody on record holds budget approval. About 80% of all
messages are with the one main contact, and you have reached two of an estimated four needed people.
The read: this deal rests on one person and is missing whoever signs off.

## How it is worked out

Applies the shared reading rules in [`docs/reading-principles.md`](../docs/reading-principles.md).

- Trigger: a needed person (above all whoever signs off) is on no record, OR a single contact carries
  almost the whole conversation so the deal has one point of failure. "Resting on one" is judged
  against the organisation's own size (own-rhythm by roster, never a fixed headcount), so a genuinely
  small buyer is not flagged for a team it never had.
- Confidence: graded; the counting is the picture's own deterministic work (who holds which part, who
  has been reached, whose share of the back-and-forth dominates), and the soft edge is which cast a
  given deal needs.
- Needs: LinkedIn, for who reports to whom and who really decides; until it
  connects, those rest on email signatures and the open web and stay under-known, so the read can say
  "nobody who signs off is on record", not "there is definitely someone you are missing" (the data gap
  the organisation picture carries, inherited here and named not faked). Where a deal needs a shape
  only the user or Offerings can state, the read names a told gap ("tell me who signs off here") rather
  than inventing the buying team.