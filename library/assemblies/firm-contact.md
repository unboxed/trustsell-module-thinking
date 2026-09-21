---
id: firm-contact
module: 02-relationships
label: Who at your firm has been in touch
blurb: Every contact between someone at your firm other than you and one buyer organisation, from the records your firm shares.
about: an organisation
deterministic: true
inputs:
  - crm#deal-record
  - slack#slack-message
  - slack#slack-user
  - gmail#email-thread
  - gmail#email-message
  - calendar#calendar-event
  - profile-told#about-you
  - stakeholder-map
---

# Who at your firm has been in touch

## What it gathers

Gathers, for one buyer organisation, every contact on record between someone at your firm who is
not you and anyone at that organisation: who at your firm, whom at theirs, when, by which way, and
what the record says came of it. One organisation, and your firm's history with it before you.

It keys on the organisation, through the map of who is who there. The work is identity:

- who counts as a colleague: anyone on your own email domain who is not you, and anyone in your
  Slack workspace, with you read from your profile;
- which organisation a record concerns: the buyer's domain on a thread or an event, the account on
  the deal record, a name in a Slack message matched to the map;
- which contact was theirs and not yours: a thread you were copied on, an event you did not
  organise, a CRM activity logged by another owner.

It sees only what reaches a shared place. A colleague's own mailbox is never visible. What is on
record is what reached yours (a thread you were copied on or forwarded), what your firm logged in
its CRM (the owner and the activity on the account), what was said in the workspace, and an event
on a calendar shared with you. Everything else a colleague did is invisible, and the gather says
so rather than reporting an empty record as nobody.

Used solo, with no firm behind you, every input is empty and there is nothing to gather. That is
not a gap; it is the fact of the matter, and the read above it does not arise.

## Where it comes from

`deal-record` resolves to [`channels/crm.md`](../channels/crm.md), the one place a
firm's contact with an account is on record across everyone in it, and this is the first gather to
draw from it. `slack-message` and `slack-user` resolve to
[`channels/slack.md`](../channels/slack.md); `email-thread` and `email-message` to
[`channels/gmail.md`](../channels/gmail.md); `calendar-event` to
[`channels/calendar.md`](../channels/calendar.md). `about-you` resolves to
[`profile-told.md`](../told/profile-told.md), for your own name and email, which is how a colleague
is told from you. `stakeholder-map` is the sibling assembly that says who is at the buyer. Where
the CRM is not connected, the only trace of a colleague's contact is what happened to reach your
mailbox or the workspace, a data gap named not faked. A colleague's contact on a call from their
own phone is a told gap until someone says so.
