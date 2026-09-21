---
id: customer-introduction
module: 02-relationships
label: An introduction a customer could make
blurb: Someone a customer you have already delivered for could put you in front of.
kind: opening
confidence: graded
inputs: [since-the-sale, stakeholder-map]
counts: [names-they-have-given-you, still-owed-either-way, target-cold-to-you]
answers: [V21]
needs: [linkedin]
assumes: []
assumes_status: provisional
---

# An introduction a customer could make

## What it means

A customer you have already delivered for sits next to someone you have never spoken to, and could
put you in front of them.

This is the other half of [`warm-path`](warm-path.md). That read looks for a bridge to a stranger
among everyone you deal with, before the sale. This one looks after it, and it is a different
thing: the favour is easier to ask and harder to earn back, because the person asked has already
paid you and is being asked for something more.

So the read has two halves, and both must hold. There is a name worth reaching, someone the
customer has mentioned, copied in or handed over who is at an organisation you have no thread with.
And there is nothing outstanding between you: no document of theirs you never sent, no question of
theirs you never answered, nothing on record that went wrong. Asking for an introduction over an
unanswered question of your own is the same mistake [`pushing`](pushing.md) reads, one rung later.

It never answers the question from a document the customer handed over for another purpose. Who
they bank with, who they pay and who their customers are came from their statements to qualify a
sale, and rule 3 of *What is never read* on [`channels/handover.md`](../channels/handover.md) puts
that out of reach for good. The names this read uses are the ones they said to you.

## In practice

A customer completed six months ago, and nothing has been owed either way since. Twice on the
deal's threads they mentioned a counterpart at another organisation by name, once copying them in
on a message about scheduling. You have never written to that person. The read: "they have named
someone twice, you have never spoken to them, and there is nothing outstanding to make the asking
awkward."

## How it is worked out

Applies the shared reading rules in [`docs/reading-principles.md`](../docs/reading-principles.md).

- Trigger: a deal stands past the sale, nothing is outstanding either way on it, and at least one
  person the customer has named is someone you have never spoken to. A name said once in passing is
  weaker than one copied in on a thread, and a name at the customer's own organisation is not this
  read at all: that is a new person in the same account, which
  [`new-stakeholder`](new-stakeholder.md) already reads.
- Confidence: graded. High where the name was copied in on a thread of the deal's, so the customer
  put you and them in the same room once already. Soft where the name was mentioned in passing.
  Withheld entirely while anything is outstanding, however good the name is, because the read is as
  much about whether you may ask as about whom.
- Needs: LinkedIn for who the customer is connected to, which would turn a name said once into a
  relationship worth vouching for. It is not connected, so the read sees only the names that reached
  your own threads and under-reports (a data gap, named not faked).
- Assumes: nothing about the shape of the sale, so `assumes: []`. It needs a completed deal, which
  is a rung on the ladder rather than an assumption, and it needs the customer to have said a name,
  which is a fact the read checks rather than a condition it takes for granted.
