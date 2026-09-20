---
id: missing-documents
module: 02-relationships
label: What they still have not sent
blurb: Of the documents you asked this buyer for, which have come and which are still out.
kind: deal-movement
confidence: graded
inputs: [document-set, deal]
counts: [documents-still-out, documents-received]
answers: [V14]
needs: [handover]
assumes: [thread-under-way]
assumes_status: provisional
---

# What they still have not sent

## What it means

A deal is waiting on paperwork from the buyer, and this is the read of where that stands: what you
asked for, what has come, and what is still out.

It is a read of a set, not of one item. [`loose-end`](loose-end.md) catches a single question of
yours that never came back. This one holds the whole list a close needs and says "three of five
in", so the next message can ask for exactly the two that are missing and nothing that has already
arrived.

## In practice

You asked a lead for five things on the first call: six months of statements, last year's accounts,
a signed form, proof of identity and a lease. Three came the next day as attachments, one in answer
to nothing you asked. Two are still out after a week. The read: "you have the statements, the
accounts and the form. Still to come: proof of identity and the lease. Ask for those two."

## How it is worked out

Applies the shared reading rules in [`docs/reading-principles.md`](../docs/reading-principles.md).

- Trigger: at least one request of yours has no handed-over document answering it (counting). The
  read carries the list, in both directions: what is still out, and what has come. The one judgement
  is whether an unasked-for document answers a request in different words (a "bank download" for
  "six months of statements"), and it is made by naming the match rather than assuming it.
- Confidence: high when every request is on a captured thread and every document arrived by a door
  the tool can see; softens when a request was made on an uncaptured call, or a document may have
  come by a door it cannot see.
- Needs: what the buyer hands over. Where that channel is not connected, nothing distinguishes the
  buyer's accounts from any other attachment, and the read cannot be made at all (a data gap, named
  not faked). It also leans on a told fact nobody has recorded yet: which documents this sale needs.
  Without that, it can say what you asked for and did not get, never what you should have asked for
  and did not (a told gap, named not faked).
- Assumes: a conversation already under way, because a request has to sit on a thread or a call
  before anything can be owed against it. A few messages are enough; no history is needed. Before
  the thread there is nothing asked for (an assumption gap, named not faked).
