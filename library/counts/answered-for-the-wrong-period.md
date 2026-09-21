---
id: answered-for-the-wrong-period
label: "Answered, but for the wrong stretch"
used_by: [missing-documents]
over: [document-set]
over_status: decided   # 21 September: confirmed when the arithmetic was written, which is what made it answerable
defined: true
counts: Documents that arrived and cover a different stretch of time from the one asked for.
needs: [handover#handed-over-document, handover#stated-figure, handover#stated-commitment, handover#document-request]
breaks: It compares the stretch asked for with the stretch covered, both of which have to be on the envelope.
---

# Answered, but for the wrong stretch
## What it counts

Of the requests that a document has answered, how many are answered for a stretch of time other than the one asked for, and by how much each is out. A request that named no period is not counted here at all: with nothing asked for, nothing can be wrong.

Three cases are kept apart, because they ask for different next messages: a document that covers less than was asked for (two months of three), one that covers the right length but the wrong dates (three months, ending last winter), and one that covers more than was asked for, which is not a problem and is counted only so the number is not read as a fault.

It counts within [`document-set`](../assemblies/document-set.md), what you asked for and what has come. It reads the envelope only: the stretch a request names and the stretch a document says it is for. Which records it needs and when the number stops meaning anything are not written in the count's fields yet, like every other count.

## What it cannot see

A document that does not say what it covers on its face, which is counted as answered and unchecked rather than wrong. A period asked for in words too loose to check ("recent statements"). And whether what is inside the document really covers those dates, which is the other layer and not the envelope's to say.
