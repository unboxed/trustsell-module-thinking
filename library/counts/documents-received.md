---
id: documents-received
label: "Documents received"
used_by: [missing-documents]
over: [document-set]
over_status: decided   # decided 21 September, when the counts were written
defined: true
counts: Which documents have come in, against which were asked for, and what period each covers.
needs: [handover#document-request, handover#handed-over-document]
breaks: It reads the envelope, never the contents. What a document says is a different floor.
---

# Documents received
## What it counts

For one request, which documents have arrived: what each is, when it came, how it came, and what
stretch of time it covers. One row per document, matched to the item on the request it answers.

The period is the field that makes this worth having. Two documents against a three-month request
is not the same fact as three months of documents, and the match is on both the thing and the
stretch.

## What it cannot see

Whether a document is the right one, whether it is complete, and whether it says what it should.
The envelope only.
