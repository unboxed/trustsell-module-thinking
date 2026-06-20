---
name: "People"
title: "Your relationships"
blurb: "Keeps every contact, conversation and connection organised — and digs to find who matters."
icon: users
optional: false
tier: assistant
modes: [sustain, expand]
connects:
  - to: "00-spine"
    provides: "reports what the brief flags — 'Jane went quiet', 'found the DM' — and answers follow-ups"
  - to: "03-offerings"
    requests: "which offering a conversation relates to, and the rebuttal to a worry on record"
    provides: "the worry it has on record, for 03 to answer"
  - to: "05-persona-you"
    provides: "relationship history — plain facts and personal colour — read at write time"
raw_data:
  - "Email message"
  - "Email thread"
  - "Contact"
  - "Calendar event"
  - "Slack message"
  - "Slack channel"
  - "Slack user"
  - "Web result"
  - "Enrichment"
---

# 02 · People

The expert on everyone you deal with: who they are, your history, and who knows whom.

> **Focus right now:** the raw data below. Everything else is TBD.

## Raw data

Everything People can pull in from the connected channels, through Connections. These are plain
records, before any reading. Grouped by channel.

### Gmail
`Email message` — sender · recipients (to/cc) · subject · body · snippet · timestamp · thread id · direction (sent or received) · read/unread · labels · has-attachments
`Email thread` — participants · subject · message count · first and last activity
`Contact` — name · email address *(from message headers)*
`Attachment` — filename · type · size

### Calendar
`Calendar event` — title · description · attendees (with accepted / declined / tentative) · organiser · start and end · all-day flag · recurrence · location · video link · created/updated
`Free / busy` — when a person is booked or open

### Slack
`Slack message` — channel · author · text · timestamp · thread · mentions · reactions · edited flag
`Slack channel` — name · topic · purpose · members · public or private
`Slack user` — name · real name · title · timezone · status
`Slack file` — filename · type · size

### Web / Tavily
`Web result` — source URL · title · snippet · published date
`Page content` — the extracted text of a page
`Enrichment` — company (name · domain · industry · size · location) · person (role · company) · trigger event (a published tender, a leadership change, funding)

### Not connected yet (future channels)
`CRM record` — stage · owner · amount · close date *(Salesforce — not connected)*
`LinkedIn` — role · job change · mutual connections *(not connected)*

## Principles
_TBD_

## System prompt
_TBD_

## User input
_TBD_

## Reasoning
_TBD_

## Output
_TBD_

## Memory
_TBD_

## Open questions
_TBD_
