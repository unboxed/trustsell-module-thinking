---
id: document-set
module: 02-relationships
label: What you asked for and what has come
blurb: The documents one deal needs from the buyer, what you asked for, and what they have sent.
about: a deal
deterministic: true
inputs:
  - handover#document-request
  - handover#handed-over-document
  - gmail#attachment
  - deal
---

# What you asked for and what has come

## What it gathers

Gathers, for one deal, the documents that pass from the buyer to you on the way to a close: what
you asked them to send, when, and in which message; what they have sent, when, by which door; and
which request each document answers. One deal, and the paperwork it is waiting on.

It keys on the deal. A `document-request` belongs to the deal whose thread or call it was made on.
A `handed-over-document` belongs to the deal of the person who sent it, and is lined up with the
request it answers where the envelope says so (`in answer to`). A mail `attachment` from the buyer
that the handover channel has not yet recorded is a candidate document, kept apart until it is
confirmed as theirs, so a signature image never counts as a set of accounts.

The only real work is identity and matching: deciding which deal a request and a document belong
to, and which request a document answers. Where a document answers no request, it is kept as
unasked-for, not dropped.

It does not say which documents this sale needs. Which set a sale asks for is a fact only you hold,
and there is no told record for it yet: what the gather can show is what you asked for against what
came, never what you never asked for (a told gap, named not faked). And it does not read inside a
document: the envelope is all `handover` carries, and what the tool reads in a set of accounts is
not written yet.

## Where it comes from

`document-request` and `handed-over-document` resolve to
[`channels/handover.md`](../channels/handover.md), what the buyer hands over. `attachment` resolves
to [`channels/gmail.md`](../channels/gmail.md), the commonest door a document arrives by. `deal` is
the sibling assembly that says whose paperwork this is. A document handed over by a door the tool
cannot see (the post, a portal) is on record only if you say so, a told gap; a request made on an
uncaptured call is invisible the same way, a data gap.
