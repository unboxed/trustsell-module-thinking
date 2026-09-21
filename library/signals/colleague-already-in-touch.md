---
id: colleague-already-in-touch
module: 02-relationships
label: A colleague already in touch
blurb: Someone at your firm has been in touch with this organisation before you, and the record says who, when and how it went.
kind: risk
confidence: graded
inputs: [firm-contact, stakeholder-map]
counts: [colleague-touches-on-record, since-last-colleague-touch]
answers: [V4]
needs: [crm, slack]
assumes: [own-firm]
assumes_status: provisional
---

# A colleague already in touch

## What it means

Someone at your firm has already been in touch with this organisation. Before you write, the read
says who, when, by which way, and what the record says came of it, so you go in knowing rather
than blind.

It is a read of your own side, not the buyer's. [`warm-path`](warm-path.md) finds a way in through
someone you both know; this finds the history your firm already has. It can be a way in, when a
colleague's thread is warm and they can hand you over. It can be a stop, when their thread is live
and yours would cross it. The read carries both and does not choose: a word with the colleague is
the move it points to.

## In practice

You are about to write to an organisation for the first time. Your firm's CRM shows the account
owned by a colleague, with a call logged in the spring, and a thread in your own mailbox copied you
on their follow-up, which got no reply. Nothing since. The read: "a colleague was in touch six
months ago and it went quiet. Ask them before you write, and whether they would rather hand it to
you or pick it up."

## How it is worked out

Applies the shared reading rules in [`docs/reading-principles.md`](../docs/reading-principles.md).

- Trigger: at least one contact between someone at your firm other than you and this organisation
  is on record (counting). The read carries the list, and how long since the latest (counting).
  The one judgement is whether that contact still counts, whether a thread of theirs is live or
  long dead, and it is made by naming the date and asking, never by deciding for the colleague.
- Confidence: high when the CRM names the owner and the activity, or a thread in your own mailbox
  shows the colleague and the buyer together; softens to "may have been in touch" when the only
  trace is a mention in the workspace, or the contact is old.
- Needs: the CRM, for the one record of contact that covers everyone at your firm; without it the
  read sees only what happened to reach your mailbox, your shared calendar or the workspace, and
  under-reports (a data gap, named not faked). The workspace, for a colleague's mention of the
  organisation; without it that trace drops out. A colleague's own mailbox is never visible, and
  a contact they made on a call from their own phone is a told gap until someone says so.
- Assumes: a firm beside you, whose records you share. It is the first read to declare `own-firm`,
  the fourth word in the vocabulary, added 21 September for exactly this: `several-people` is about
  the buyer's side and nothing said anything about yours. Used solo, every record it reads is
  empty, and the honest output is that there is nobody else here to have been in touch, not that
  nobody has (an assumption gap, named not faked). It assumes nothing about the shape of the sale
  itself: a firm of two selling in a day meets it as squarely as a firm of fifty selling over two
  years.
- This read points at a word with a colleague before a move, or at handing the organisation over.
  It sits in People because it is a read about who has been in touch with the buyer, whichever side
  of your firm they are on. *(My reason, not yet yours.)*
