---
id: enough-tries
module: 02-relationships
label: Enough tries
blurb: You have reached out enough times with nothing back, and the next try costs more than it could win.
kind: decay
confidence: graded
inputs: [person-history, conversation-history, firm-contact]
counts: [times-you-chase, chases-since-their-last-reply, innocent-explanation-scan, colleague-touches-on-record]
answers: [V5, F11]
needs: [calendar]
assumes: []
assumes_status: decided   # 22 September: fired on a person who never replied once, four tries over fifteen weeks with an empty scan; it needed no usual
pull: The Brain's tempo from the goal, for how hard this sale is meant to be pursued
---

# Enough tries

## What it means

You have tried this person enough. Nothing has come back, nothing on record explains the silence,
and one more message would cost you more than it could win.

Every other read on quiet asks whether to reach out. This one asks whether to stop. It is the
read that separates patience from pestering, and it points away from a move: leave them, or leave
them for now, and take them off the day.

Stopping is not forgetting. The person stays on record, and a fresh reason to write can bring them
back through [`time-to-reconnect`](time-to-reconnect.md).

## In practice

A lead who enquired through your site, was answered the same day, and has had four notes from you
since, across a fortnight, with no reply, no bounce and no out-of-office. Your goal says to pursue
hard, so four is within its tempo, but the fifth would be the sort of chase the trade itself names
as its red flag. The read: "four tries, nothing back, nothing to explain it. Stop here unless
something changes."

## How it is worked out

Applies the shared reading rules in [`docs/reading-principles.md`](../docs/reading-principles.md).
Borrows the Brain's tempo from the goal, so the same count reads as patience on one sale and as
pestering on another.

- Trigger: your messages since they last wrote have stacked up (counting, across every gathered
  channel) AND the innocent-explanation scan comes back empty: no bounce, no out-of-office, no
  holiday on the shared calendar. The one judgement is where "enough" sits, and it is never a fixed
  number: it is set by the tempo you told the goal (patient or hard) and by what one more try would
  cost against what it could win. A relationship built over years costs more to lose than a lead of
  a fortnight. No rhythm is needed for it: on someone who has never replied there is no usual to
  read against, and this read does not pretend there is.
- Confidence: high when the tries are many, spread over a fair stretch, and the scan is empty; softens
  when a try was slight (a forwarded article rather than a question), when the stretch is short, or
  when the scan found something that could explain the quiet.
- Needs: Calendar, for the out-of-office and holiday checks; without it the scan cannot clear an
  innocent silence and the read over-reports (a data gap, named not faked). A try by text is not
  gathered by any assembly yet, so it is not counted, which under-reports at the fast end until
  `sms` is gathered. A chase you made off-channel (a call from your own phone) is a told gap until
  you say so.
- Assumes: nothing about the shape of the sale. It stands on your own sent messages and the scan
  alone, so it holds on a lead who never replied as well as on a contact of years. It does not read
  against their usual, which is what lets it stand where [`cooling-champion`](cooling-champion.md)
  cannot.
- This read points away from a move. What the tool does with it, taking the person off the day
  and keeping them on record, is the Brain's, and what you do is yours.
- **All of F11, since 21 September** (how many times has anyone from my firm reached out). It
  counts yours and your firm's together: `times-you-chase` from your own sent messages, and
  `colleague-touches-on-record` from [`firm-contact`](../assemblies/firm-contact.md), the same
  number [`colleague-already-in-touch`](colleague-already-in-touch.md) reads. A person who has had
  four approaches has had four, and it makes no difference to them which desk each one came from.
  Before this the read counted only yours, so a cadence a business development rep was running
  beside you was invisible to the one read whose whole job is to say when it has gone too far,
  which was the worst possible place for that blindness to sit. *(My reason, not yet yours.)*
- **It still assumes nothing.** Reading a firm's records does not make this a read that needs a
  firm. Where there is none, `firm-contact` is empty, the second number is zero, and the read is
  exactly what it was: your own tries, counted well. That is why `own-firm` is not in `assumes` and
  why `crm` and `slack` are not in `needs`. A `needs` entry means a check drops out when the source
  is missing, and here nothing drops out; the sum simply has one term instead of two.
  *(My reason, not yet yours.)*
