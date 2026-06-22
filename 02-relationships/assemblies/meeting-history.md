---
id: meeting-history
floor: assembly
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

Gathers one call into a single picture, the spoken-word sibling of [`conversation-history`](conversation-history.md).
It keys on the `Meeting` (the record of a call that took place) and binds it back to the relationship
through the `Calendar event` that scheduled it (the shared invite, its attendees, the Meet `video
link`), so a call lands on the same deal and the same people as the mail around it. Each `Participant`
is resolved to the person behind them via `person-history`, so a name in the call is the same someone
you have a history with, not a fresh stranger. *This call, who was in the room, and what was said.*

It gathers in **two layers**, and the second is not guaranteed:

- **Always, when the call used Meet:** that it happened, who attended, and their join/leave times
  (`Meeting` + `Participant`, bound to the `Calendar event`). This layer is present for any call,
  whether or not anyone was taking notes.
- **Only when transcription or note-taking was on:** what was said, as the `Transcript` (speaker,
  text, time) and the `Smart notes` summary, with the `Recording` (its Drive link) where one was kept.
  Turn note-taking off and this layer is simply absent.

This is **floor, not reading**: nothing here is judged. It does not decide whether a commitment was
made or an objection raised; it only sorts the call onto its deal and names the speakers. The
judgement happens above, in the signals that read this picture (a promise made aloud, a worry voiced
on the call, advocacy in the room).

> Lineage note: `meeting`, `participant`, `transcript`, `smart-notes` and `recording` resolve to
> [`channels/meet.md`](../../01-integrations/channels/meet.md); `calendar-event` to
> [`channels/calendar.md`](../../01-integrations/channels/calendar.md); `person-history` is the sibling
> assembly that turns a raw participant into a resolved person.
>
> Two provenance facts a reading above must respect. **Transcript words are retained only ~30 days**
> by the provider, so older calls keep the meeting and participants but lose their verbatim words; the
> `Smart notes` summary is the longer-lived account of what was said (it is saved as a document).
> **Content is conditional**: when no one turned note-taking on, the second layer is empty, and that is
> a **data gap** named not faked, *"a call happened on this date, but nothing was captured"*, not an
> assumption that nothing was said.
