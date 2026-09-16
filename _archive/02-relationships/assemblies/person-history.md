---
id: person-history
label: Person history
blurb: Everything about one person, gathered into a single picture.
about: a person
deterministic: true
inputs:
  - email-message
  - email-thread
  - calendar-event
  - status-event
  - free-busy
  - slack-message
  - slack-user
  - meeting
  - participant
  - enrichment
  - relationship-note
  - offline-touch
  - contact-preference
  - correction
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
- anything you have told us yourself: a note, an offline meeting, a preference

A call counts as a touch, the same as an email. The calendar's out-of-office and free/busy events come
in too, so a read above can tell a holiday from a real silence.

The one real piece of work is deciding which scattered records are the same person.

## Lineage

`email-message` and `email-thread` resolve to
[`channels/gmail.md`](../../01-integrations/channels/gmail.md); `calendar-event`, `status-event` and
`free-busy` to [`channels/calendar.md`](../../01-integrations/channels/calendar.md); `slack-message`
and `slack-user` to [`channels/slack.md`](../../01-integrations/channels/slack.md); `meeting` and
`participant` to [`channels/meet.md`](../../01-integrations/channels/meet.md); `enrichment` to
[`channels/web.md`](../../01-integrations/channels/web.md). `relationship-note`, `offline-touch`,
`contact-preference` and `correction` are People's own told records, resolving to
[`told.md`](../told.md): the human-known facts (a hidden role, a conference meeting, a stated channel
preference, a correction to a read) folded onto the same timeline. Person history takes only the
*fact* of a call from Meet (that it happened, who was on it); what was *said* on the call lives in the
[`meeting-history`](meeting-history.md) gather, so the content reads have one clean home.
