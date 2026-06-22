---
id: meeting-history
label: Meeting history
blurb: One call, who was on it, and what was said if it was recorded.
about: a conversation
deterministic: true
inputs:
  - meeting
  - participant
  - transcript
  - smart-notes
  - recording
  - calendar-event
  - person-history
---

# Meeting history

## What it gathers

Gathers one call into a single picture, the spoken-word sibling of
[`conversation-history`](conversation-history.md). It keys on the `Meeting` (the record of a call
that took place) and binds it back to the relationship through the `Calendar event` that scheduled it
(the shared invite, its attendees, the Meet `video link`), so a call lands on the same deal and the
same people as the mail around it. Each `Participant` is resolved to the person behind them via
`person-history`, so a name in the call is the same someone you have a history with, not a fresh
stranger. This is the one thing it does: this call, who was in the room, and what was said.

It gathers in two layers, and the second is not guaranteed:

- Always, when the call used Meet: that it happened, who attended, and their join and leave times
  (`Meeting` plus `Participant`, bound to the `Calendar event`). This layer is present for any call,
  whether or not anyone was taking notes.
- Only when transcription or note-taking was on: what was said, as the `Transcript` (speaker, text,
  time) and the `Smart notes` summary, with the `Recording` (its Drive link) where one was kept. Turn
  note-taking off and this layer is simply absent.

The only real work is the tidy-up, sorting the call onto its deal and naming the speakers. That is
arithmetic, not opinion. This is floor, not reading: any address book or CRM does this much. It does
not decide whether a commitment was made or an objection raised; judgement happens above, in the
signals (see [`docs/reading-principles.md`](../../docs/reading-principles.md)).

Two provenance facts a reading above must respect. Transcript words are retained only about 30 days
by the provider, so older calls keep the meeting and participants but lose their verbatim words; the
`Smart notes` summary is the longer-lived account of what was said (it is saved as a document).
Content is conditional: when no one turned note-taking on, the second layer is empty, and that is a
data gap named not faked, "a call happened on this date, but nothing was captured", not an assumption
that nothing was said.

## Lineage

`meeting`, `participant`, `transcript`, `smart-notes` and `recording` resolve to
[`channels/meet.md`](../../01-integrations/channels/meet.md); `calendar-event` to
[`channels/calendar.md`](../../01-integrations/channels/calendar.md). `person-history` is the sibling
assembly that turns a raw participant into a resolved person.
