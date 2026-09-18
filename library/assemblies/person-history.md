---
id: person-history
module: 02-relationships
label: Person history
blurb: Everything about one person, gathered into a single picture.
about: a person
deterministic: true
inputs:
  - gmail#email-message
  - gmail#email-thread
  - calendar#calendar-event
  - calendar#status-event
  - calendar#free-busy
  - slack#slack-message
  - slack#slack-user
  - meet#meeting
  - meet#participant
  - web#enrichment
  - linkedin#profile
  - linkedin#job-change
  - linkedin#mutual-connections
  - people-told#relationship-note
  - people-told#offline-touch
  - people-told#contact-preference
  - people-told#correction
---

# Person history

## What it gathers

Gathers everything that touches one person into a single timeline. One person, and your whole history
with them.

It pulls in:

- your emails and threads with them
- the calendar events you share
- the calls you sat in together
- their Slack messages and profile
- anything found about them on the open web
- their LinkedIn profile, job changes and the people you both know, once LinkedIn is connected
- anything you have told us yourself: a note, an offline meeting, a preference

A call counts as a touch, the same as an email. The calendar's out-of-office and free/busy events come
in too, so a read above can tell a holiday from a real silence.

The one real piece of work is deciding which scattered records are the same person.

## Where it comes from

`email-message` and `email-thread` resolve to
[`channels/gmail.md`](../channels/gmail.md); `calendar-event`, `status-event` and
`free-busy` to [`channels/calendar.md`](../channels/calendar.md); `slack-message`
and `slack-user` to [`channels/slack.md`](../channels/slack.md); `meeting` and
`participant` to [`channels/meet.md`](../channels/meet.md); `enrichment` to
[`channels/web.md`](../channels/web.md); `profile`, `job-change` and `mutual-connections` to [`channels/linkedin.md`](../channels/linkedin.md), which is not connected, so they are mapped but not flowing. `relationship-note`, `offline-touch`,
`contact-preference` and `correction` are People's own told records, resolving to
[`people-told.md`](../told/people-told.md): the human-known facts (a hidden role, a conference meeting, a stated channel
preference, a correction to a read) folded onto the same timeline. Person history takes only the
*fact* of a call from Meet (that it happened, who was on it); what was *said* on the call lives in the
[`meeting-history`](meeting-history.md) gather, so the content reads have one clean home.
