---
id: documents-still-out
label: "Documents asked for and not yet sent"
used_by: [missing-documents]
over: [document-set]
over_status: decided   # decided 21 September, when the counts were written
defined: true
counts: Which documents were asked for and have not come, and how long ago they were asked for.
needs: [handover#document-request, handover#handed-over-document]
breaks: It is the subtraction of the received from the requested, so it is exactly as good as the request being on record.
---

# Documents asked for and not yet sent
## What it counts

For one request, the items with nothing against them: what each is, when it was asked for, how long
ago that is in working days, and whether it was asked for more than once.

Where a document arrived but covers the wrong stretch, it appears here as still out, with the
reason, because that is what it is.

## What it cannot see

Anything asked for verbally and never written down, and anything sent to somebody else at your
firm.
