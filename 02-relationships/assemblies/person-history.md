---
id: person-history
floor: assembly
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

Gathers every record that touches one person (your mail and threads with them, the calendar events
you share, the calls you sat in together, their Slack messages and profile, and any open-web
enrichment), resolved by identity (email, name) into a single timeline. *Tom, and your whole history
with him.* A call counts as a touch on that timeline the same way an email does: the `Meeting` and its
`Participant` list say you and Tom were on a call on a date, so a recent call is not silence. The
calendar `Status event` (out-of-office, focus time) and a `Free / busy` query are gathered too, so a
reading above can tell an innocent gap (he was on holiday) from a real one.

This is **floor, not reading**: nothing here is judged or guessed. It is the deterministic tidy-up
any address book or CRM does, the one picture the signals then count and read. The only real work is
resolving "these scattered records are the same person", and that is still arithmetic, not opinion.

> Lineage note: `email-message` and `email-thread` resolve to
> [`channels/gmail.md`](../../01-integrations/channels/gmail.md); `calendar-event`, `status-event` and
> `free-busy` to [`channels/calendar.md`](../../01-integrations/channels/calendar.md); `slack-message`
> and `slack-user` to [`channels/slack.md`](../../01-integrations/channels/slack.md); `meeting` and
> `participant` to [`channels/meet.md`](../../01-integrations/channels/meet.md); `enrichment` to
> [`channels/web.md`](../../01-integrations/channels/web.md). `relationship-note`, `offline-touch`,
> `contact-preference` and `correction` are People's own told records, resolving to
> [`told.md`](../told.md): the human-known facts (a hidden role, a conference meeting, a stated channel
> preference, a correction to a read) folded onto the same timeline. Person history takes only the
> *fact* of a call from Meet (that it happened, who was on it); what was *said* on the call lives in the
> [`meeting-history`](meeting-history.md) gather, so the content reads have one clean home.
