---
name: "Connections"
title: "Your connections"
blurb: "Plug in your accounts once; it carries messages in and out."
icon: cable
optional: false
tier: connector
# No modes or connects: 01 has no initiative and no reasoning — every module
# reaches *through* it, so its links are drawn from the others, not declared here.
#
# Channels are the sub-items of this module. Two kinds sit here:
#   source: account  — a tool the user connects (authorises once)
#   source: builtin  — a tool shipped with the product (always on, never connected)
# Each channel names a `brand` — the labelled square it sits in on the canvas. A brand
# may hold several services (Google → Gmail, Calendar, …) or just one (Slack → Slack).
# Each channel owns its own raw_data. The record LABELS live here; the field-level
# descriptions live once in the body, under the matching `### <channel>` section.
channels:
  - id: gmail
    name: Gmail
    icon: mail
    source: account
    brand: Google
    connected: true
    records: ["Email message", "Email thread", "Draft", "Label", "Attachment"]
  - id: calendar
    name: Calendar
    icon: calendar
    source: account
    brand: Google
    connected: true
    records: ["Calendar event", "Free / busy", "Calendar list", "Status event"]
  - id: drive
    name: Drive
    icon: hard-drive
    source: account
    brand: Google
    connected: true
    records: ["File", "Folder", "File content", "Comment", "Shared drive"]
  - id: contacts
    name: Contacts
    icon: contact-round
    source: account
    brand: Google
    connected: true
    records: ["Contact", "Other contact", "Contact group"]
  - id: meet
    name: Meet
    icon: video
    source: account
    brand: Google
    connected: true
    records: ["Meeting", "Participant", "Recording", "Transcript", "Smart notes"]
  - id: slack
    name: Slack
    icon: hash
    source: account
    brand: Slack
    connected: true
    records: ["Slack message", "Slack channel", "Slack user", "Slack file", "Canvas", "List"]
  - id: web
    name: Web / Tavily
    icon: telescope
    source: builtin
    brand: Tavily
    connected: true
    records: ["Web result", "Page content", "Site map", "Research report", "Enrichment"]
  - id: linkedin
    name: LinkedIn
    icon: in
    source: account
    brand: LinkedIn
    connected: false
    records: ["Profile", "Job change", "Mutual connections"]
  - id: salesforce
    name: Salesforce
    icon: cloud
    source: account
    brand: Salesforce
    connected: false
    records: ["CRM record"]
---

# 01 · Connections

The single doorway to everything outside the tool. It owns the **channels**, so this is the
master list of every raw record they can produce. Other modules pull a subset of it.

Two kinds of channel sit here. The **Connections** are the accounts you authorise once — your
Google services, your Slack, and (later) LinkedIn and Salesforce. The **Tools library** holds
the tools that ship with the product and are always on; you never connect them — today that's
web search and enrichment.

> **Focus right now:** the raw data below, per channel. Everything else is TBD.

## Raw data

The full catalogue, grouped by channel. These are plain records, carried as-is — the field
list after each label is what that record holds. Researched against the current provider APIs
as of June 2026.

### Connections — the accounts you connect

#### Gmail
`Email message` — sender [From] · to [To] · cc [Cc] · bcc [Bcc] · subject [Subject] · body [payload parts] · snippet [snippet] · timestamp [internalDate] · thread id [threadId] · in-reply-to [In-Reply-To] · direction (sent or received) [derived] · read/unread [UNREAD label] · labels [labelIds] · starred [STARRED label] · importance [IMPORTANT label] · has-attachments [derived]
`Email thread` — participants [derived] · subject [first message Subject] · message count [derived] · first and last activity [derived]
`Draft` — an unsent message in progress: to [To] · subject [Subject] · body [payload parts]
`Label` — a Gmail label/folder a message is filed under: name [name] · type (system or user) [type] · message count [messagesTotal]
`Attachment` — filename [filename] · type [mimeType] · size [body.size] · content [attachmentId]

#### Calendar
`Calendar event` — title · description · attendees (with accepted / declined / tentative) · organiser · start and end · all-day flag · recurrence · location · video link (Meet) · visibility · reminders · created/updated
`Free / busy` — booked or open windows for a person, across their calendars
`Calendar list` — the calendars a person owns or subscribes to · name · colour · access role
`Status event` — focus-time, out-of-office or working-location blocks · type · time range · auto-decline *(now first-class event types in the Calendar API)*

#### Drive
`File` — name · type (mime) · size · owner · created/modified · starred · shared-with · web link · parent folder
`Folder` — name · contents · sharing
`File content` — the exported text of a Doc, Sheet or Slide
`Comment` — author · text · anchor · resolved flag · replies (on a file)
`Shared drive` — a team/shared drive · name · members · org unit

#### Contacts
`Contact` — name · emails · phones · organisation · job title · photo *(Google People API)*
`Other contact` — an address you've corresponded with but never saved · name · email
`Contact group` — a label grouping contacts · name · members

#### Meet
`Meeting` — a conference record · the meeting space · start and end · organiser
`Participant` — who joined · their join/leave sessions · full or companion mode
`Recording` — the recorded video of a meeting · Drive link · duration
`Transcript` — the spoken transcript as timestamped entries · speaker · text · time *(retained ~30 days)*
`Smart notes` — AI-generated meeting notes, where the workspace enables them

#### Slack
`Slack message` — channel · author · text · timestamp · thread · mentions · reactions · edited flag · permalink
`Slack channel` — name · topic · purpose · members · public or private
`Slack user` — name · real name · title · timezone · status · presence
`Slack file` — filename · type · size · content
`Canvas` — a Slack canvas doc · title · content · linked channel
`List` — a Slack list · its rows/fields · linked channel
*(Huddle audio is not reachable through Slack's official API.)*

#### LinkedIn *(not connected yet)*
`Profile` — headline · role · company · location · experience
`Job change` — a move to a new role or company
`Mutual connections` — shared connections that warm a path
*(LinkedIn's API access for this is restricted — treat as aspirational.)*

#### Salesforce *(not connected yet)*
`CRM record` — stage · owner · amount · close date · account · contact · activity

### Tools library — built in, always on

#### Web / Tavily
`Web result` — source URL · title · snippet · relevance score · published date *(/search)*
`Page content` — the cleaned text, tables and images extracted from a page *(/extract)*
`Site map` — a structured graph of the URLs on a site *(/map · /crawl)*
`Research report` — a synthesised, multi-search answer with its sources *(the research endpoint)*
`Enrichment` — company (name · domain · industry · size · location) · person (role · company) · trigger event (a published tender, a leadership change, funding)

## Principles
_TBD_

## System prompt
_TBD_

## User input
_TBD (which accounts you connect)_

## Reasoning
_TBD (none — Connections does no reasoning)_

## Output
_TBD_

## Memory
_TBD_

## Open questions
_TBD_
