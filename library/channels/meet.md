---
id: meet
name: Meet
brand: Google
source: account
connected: true
icon: video
---

# Meet

The video-conference history: what a meeting was, who showed up, and what was said. A meeting is the record of a call that took place; participants are who attended; the recording is the saved video and the transcript is the spoken words as timestamped entries. Smart notes are an AI-written summary of the call. One provenance caveat: transcripts are retained only about 30 days by the provider, so older meetings keep the meeting record and participants but lose their words.

Owned by Connections, fetched fresh each time and carried untouched. No opinion is formed here and no content is kept. Each record below is a lineage anchor. Its id is the kebab-slug of its label (`Smart notes` becomes `smart-notes`), and that is what People's assemblies reference.

## Records

| Record | Field | Source |
|---|---|---|
| Meeting | the meeting space | space |
| Meeting | start | startTime |
| Meeting | end | endTime |
| Meeting | organiser | derived |
| Participant | who joined | signedinUser |
| Participant | their join/leave sessions | participantSessions |
| Participant | full or companion mode | derived |
| Recording | Drive link | driveDestination |
| Recording | duration | derived |
| Transcript | speaker | participant |
| Transcript | text | text |
| Transcript | time | startTime (retained ~30 days) |
| Smart notes | (content) | AI-generated, a single generated document |

## In plain words

What a person reads, where it differs from the record's label. The label, and the id made from
it, do not change.

| Record | Plain name |
|---|---|
| Participant | Who was on the call |
| Smart notes | Meeting notes |
