---
id: missing-documents
module: 02-relationships
label: What they still have not sent
blurb: Of the documents you asked this buyer for, which have come, which are still out, and which came for the wrong stretch of time.
kind: deal-movement
confidence: graded
inputs: [document-set, deal]
counts: [documents-still-out, documents-received, answered-for-the-wrong-period]
answers: [V14]
needs: [handover]
assumes: [thread-under-way]
assumes_status: provisional
---

# What they still have not sent

## What it means

A deal is waiting on paperwork from the buyer, and this is the read of where that stands: what you
asked for, what has come, and what is still out.

A document that arrived is not always an answer. Where you asked for a stretch of time (the last
three months, the last financial year) the read checks what came against it, because a statement
from a year ago answers the request in every way except the one that matters. It says which, and by
how much it is out, so the next message asks for the right months rather than for everything
again.

It is a read of a set, not of one item. [`loose-end`](loose-end.md) catches a single question of
yours that never came back. This one holds the whole list a close needs and says "three of five
in", so the next message can ask for exactly the two that are missing and nothing that has already
arrived.

## In practice

You asked a lead for five things on the first call: six months of statements ending this month,
last year's accounts, a signed form, proof of identity and a lease. Three came the next day as
attachments, one in answer to nothing you asked, and the statements are six months ending last
winter. Two are still out after a week. The read: "you have the accounts and the form. The
statements are six months, but they end in February; ask for the six to this month. Still to come:
proof of identity and the lease."

## How it is worked out

Applies the shared reading rules in [`docs/reading-principles.md`](../docs/reading-principles.md).

- Trigger: at least one request of yours has no handed-over document answering it, or one is
  answered by a document for a different stretch of time than it asked for (both counting). The
  read carries the list in three directions: what is still out, what has come, and what has come
  for the wrong stretch. The one judgement is whether an unasked-for document answers a request in
  different words (a "bank download" for "six months of statements"), and it is made by naming the
  match rather than assuming it. Comparing stretches is arithmetic, not judgement: a request that
  named no period is never wrong, and the tool does not decide for itself how far back a sale
  should look.
- Confidence: high when every request is on a captured thread and every document arrived by a door
  the tool can see; softens when a request was made on an uncaptured call, or a document may have
  come by a door it cannot see. On the period, high where both sides say a stretch outright, and
  nothing at all where the document does not say what it covers, in which case it is reported as
  answered and unchecked rather than as right.
- Needs: what the buyer hands over. Where that channel is not connected, nothing distinguishes the
  buyer's accounts from any other attachment, and the read cannot be made at all (a data gap, named
  not faked). It also leans on a told fact nobody has recorded yet: which documents this sale needs.
  Without that, it can say what you asked for and did not get, never what you should have asked for
  and did not (a told gap, named not faked).
- Assumes: a conversation already under way, because a request has to sit on a thread or a call
  before anything can be owed against it. A few messages are enough; no history is needed. Before
  the thread there is nothing asked for (an assumption gap, named not faked).
