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
# descriptions live once in the body, under the matching `### <channel>` section, in the
# record-line format documented under `## Raw data` (gloss : field [provider] · … *(note)*).
channels:
  - id: gmail
    name: Gmail
    icon: mail
    source: account
    brand: Google
    connected: true
    records:
      - label: Email thread
        children:
          - label: Email message
            children: [Attachment]
      - Label
      - Draft
  - id: calendar
    name: Calendar
    icon: calendar
    source: account
    brand: Google
    connected: true
    records:
      - Calendar list
      - label: Calendar event
        children: [Status event]
      - Free / busy
  - id: drive
    name: Drive
    icon: hard-drive
    source: account
    brand: Google
    connected: true
    records:
      - label: File
        children: [File content, Comment]
      - Folder
      - Shared drive
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
    records:
      - label: Meeting
        children: [Participant, Recording, Transcript, Smart notes]
  - id: slack
    name: Slack
    icon: hash
    source: account
    brand: Slack
    connected: true
    records:
      - label: Slack channel
        children: [Slack message, Canvas, List]
      - Slack user
      - Slack file
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

## Raw data

The full catalogue, grouped by channel. These are plain records, carried as-is — the field
list after each label is what that record holds. Researched against the current provider APIs
as of June 2026.

**Record-line format.** After the `` `Label` — `` dash a line reads as: an optional plain-English
**gloss**, then a `·`-separated **field list**, then an optional trailing `*(…)*` **provenance
note**. A **colon** separates the gloss from the fields when both are present (e.g. `Draft` — "an
unsent message in progress: to · subject · body"); a pure field list has no colon, a pure gloss has
no `·`. Each field may carry an inline **`[provider]`** annotation — the real API name (`timestamp
[internalDate]`), `[derived]` for something the tool computes rather than fetches (`direction
[derived]`), or a short sourcing note (`read/unread [UNREAD label]`). Split a label into separate
fields wherever the provider exposes the parts separately (`to`/`cc`/`bcc`, `start`/`end`). The
blueprint's channel panel renders the fields as chips and shows each `[provider]` on hover; a field's
`·` inside parentheses is kept whole (`company (name · domain · …)` stays one chip).

### Connections — the accounts you connect

#### Gmail
`Email thread` — a conversation that groups related messages: participants [derived] · subject [first message Subject] · message count [derived] · first and last activity [derived]
`Email message` — a single email in a mailbox, sent or received: sender [From] · to [To] · cc [Cc] · bcc [Bcc] · subject [Subject] · body [payload parts] · snippet [snippet] · timestamp [internalDate] · thread id [threadId] · in-reply-to [In-Reply-To] · direction (sent or received) [derived] · read/unread [UNREAD label] · labels [labelIds] · starred [STARRED label] · importance [IMPORTANT label] · has-attachments [derived]
`Attachment` — a file carried on a message: filename [filename] · type [mimeType] · size [body.size] · content [attachmentId]
`Label` — a tag Gmail puts on messages and threads to file them: name [name] · type (system or user) [type] · message count [messagesTotal]
`Draft` — an unsent message in progress: to [To] · subject [Subject] · body [payload parts]

#### Calendar
`Calendar list` — the set of calendars a person owns or subscribes to: name [summary] · colour [colorId] · access role [accessRole]
`Calendar event` — a scheduled entry on a calendar, with its guests and timing: title [summary] · description [description] · attendees (with accepted / declined / tentative) [attendees] · organiser [organizer] · start [start] · end [end] · all-day flag [derived] · recurrence [recurrence] · location [location] · video link (Meet) [hangoutLink] · visibility [visibility] · reminders [reminders] · created [created] · updated [updated]
`Status event` — a calendar event flagged as focus-time, out-of-office or working-location: type [eventType] · time range [start / end] · auto-decline [autoDeclineMode] *(now first-class event types in the Calendar API)*
`Free / busy` — a query (not a stored record) for when a person is booked or open across their calendars: busy periods [busy] · time range [timeMin / timeMax]

#### Drive
`File` — a single item stored in Drive, such as a doc, sheet, PDF or image: name [name] · type (mime) [mimeType] · size [size] · owner [owners] · created [createdTime] · modified [modifiedTime] · starred [starred] · shared-with [permissions] · web link [webViewLink] · parent folder [parents]
`File content` — the exported text of a Doc, Sheet or Slide; a single content payload, not a set of fields
`Comment` — a note left on a file, with its reply thread: author [author] · text [content] · anchor [anchor] · resolved flag [resolved] · replies [replies]
`Folder` — a file that contains other files: name [name] · contents [derived] · sharing [permissions]
`Shared drive` — a team-owned space holding folders and files, separate from a person's My Drive: name [name] · members [permissions] · org unit [orgUnitId]

#### Contacts
`Contact` — a person saved in the address book: name [names] · emails [emailAddresses] · phones [phoneNumbers] · organisation [organizations] · job title [organizations.title] · photo [photos] *(Google People API)*
`Other contact` — an address you've corresponded with but never saved: name [names] · email [emailAddresses]
`Contact group` — a tag that groups saved contacts together: name [name] · members [memberResourceNames]

#### Meet
`Meeting` — a record of a video conference that took place: the meeting space [space] · start [startTime] · end [endTime] · organiser [derived]
`Participant` — a person who attended the meeting: who joined [signedinUser] · their join/leave sessions [participantSessions] · full or companion mode [derived]
`Recording` — the recorded video of a meeting, saved to Drive: Drive link [driveDestination] · duration [derived]
`Transcript` — the spoken transcript of a meeting, as timestamped entries: speaker [participant] · text [text] · time [startTime] *(retained ~30 days)*
`Smart notes` — AI-generated notes summarising a meeting; a single generated document, not a set of fields

#### Slack
`Slack channel` — a conversation space people post messages in: name [name] · topic [topic] · purpose [purpose] · members [members] · public or private [is_private]
`Slack message` — a single post in a channel: channel [channel] · author [user] · text [text] · timestamp [ts] · thread [thread_ts] · mentions [derived] · reactions [reactions] · edited flag [edited] · permalink [permalink]
`Canvas` — a rich document attached to a channel or shared on its own: title [title] · content [derived] · linked channel [channel_id]
`List` — a structured table of items tracked inside Slack: its rows/fields [derived] · linked channel [channel_id]
`Slack user` — a person in the workspace: name [name] · real name [real_name] · title [profile.title] · timezone [tz] · status [profile.status_text] · presence [presence]
`Slack file` — a file shared in a channel or message: filename [name] · type [mimetype] · size [size] · content [url_private]
*(Huddle audio is not reachable through Slack's official API.)*

#### LinkedIn *(not connected yet)*
`Profile` — a person's professional profile: headline · role · company · location · experience
`Job change` — a signal that a person moved to a new role or company: previous role · new role · date
`Mutual connections` — people you and a prospect both know, who can warm an intro: the people · count
*(LinkedIn's API access for this is restricted — treat as aspirational.)*

#### Salesforce *(not connected yet)*
`CRM record` — a deal or account record kept in the CRM: stage · owner · amount · close date · account · contact · activity

### Tools library — built in, always on

#### Web / Tavily
`Web result` — one hit from a web search: source URL [url] · title [title] · snippet [content] · relevance score [score] · published date [published_date] *(/search)*
`Page content` — the cleaned text, tables and images extracted from a page; a single content payload, not a set of fields *(/extract)*
`Site map` — the link graph of a site's pages: pages [results] · base URL [base_url] *(/map · /crawl)*
`Research report` — a synthesised answer to a question, drawn from many searches: answer [answer] · sources [results] *(the research endpoint)*
`Enrichment` — looked-up facts about a company or person, pulled from the open web: company (name · domain · industry · size · location) · person (role · company) · trigger event (a published tender, a leadership change, funding)

## Principles

How Connections works, in one breath each:

- **Carry, don't read.** It moves records in and out untouched — it never counts, never judges,
  never forms an opinion. All the meaning is made downstream, in the modules.
- **No agency, no goals.** It starts nothing and wants nothing; it only answers a reach-through.
  Every routine and signal lives in a module — never here.
- **Modules reach *through*, not into.** A module asks Connections for records and gets them; it
  never reaches into another module. The doorway is the one shared place, so the wiring stays in
  one spot.
- **Connect once, then it's wiring.** You authorise an account a single time; from then on it's
  plumbing — no re-asking, no decisions.
- **Honest about what's not plugged in.** A channel that isn't connected (LinkedIn, Salesforce
  today) says so plainly — a **data gap**, surfaced, never faked.
- **One catalogue, many subsets.** Connections owns the master list of every raw record; each
  module pulls only the slice it needs (its `draws_from`).

## System prompt

*(The operating stance, in prose — brainstorm-level, not deployable wording.)*

You are Connections, the single doorway between the tool and the outside world. You hold no
opinions, you sense nothing, you decide nothing — you carry records faithfully in and out, in the
shape the provider hands them over. You start no work of your own; you answer when a module
reaches through you, and otherwise you wait. When an account isn't connected, you say so plainly
rather than improvise. You are plumbing, and your whole worth is being *trustworthy* plumbing:
what passes through you is the ground every reading upstream stands on, so you never bend it.

## User input

The only thing Connections needs from you is **consent** — you authorise each account once (your
Google services, your Slack; later LinkedIn and Salesforce), and from then on it carries messages
without asking again. That one-time hookup is the whole *told* pile here; there's nothing else it
could learn only from you, because it doesn't learn — it carries.

Two kinds of channel sit behind that consent: the **Connections** you authorise (Gmail, Calendar,
Drive, Contacts, Meet, Slack) and the **Tools library** that ships always-on and needs no hookup
(web search, enrichment). What you *don't* connect is itself information — a channel left unplugged
(LinkedIn, Salesforce today) is a **data gap** the rest of the tool will name honestly rather than
paper over.

## Reasoning

**None — and that's the point.** Connections does no counting and no judging; it sits *below* the
first floor of `docs/tracing-back.md`, handing over the plain facts (Floor 1) that the modules
then count (Floor 2) and read (Floor 3). The opinion line lives inside the modules — People,
Offerings, Profile — never in the doorway. Pushing any reasoning down here would blur the one seam
the whole design depends on: that what arrives through Connections is untouched, checkable ground.
So this section stays empty by design.

## Output

The raw records themselves, handed to whichever module reaches through — no interpretation, no
ranking, no summary. A module asks for a slice (the threads on a contact, this week's events, a
web search) and gets exactly those records, in the **Record-line format** above. Out the other
way, it carries what the user sends — a drafted reply, an invite — but only once a human has
pulled the trigger. Nothing leaves on its own.

## Memory

Connections remembers **which accounts are hooked up** and the scopes you granted — the live
wiring, nothing more. It keeps **no memory of content**: it doesn't retain the messages, events or
files that pass through it. Ask it the same thing twice and it fetches fresh both times; the
records that get *kept* are kept upstream, in each module's own memory (People's relationships,
Profile's voice) on their own tiers. The doorway holds the connection, not the conversation.

## Open questions

- **The restricted channels.** LinkedIn and Salesforce are mapped but not connected — LinkedIn's
  API access for warm-path data (mutual connections, job changes) is restricted and treated as
  aspirational. What's reachable, and when, gates whole signal families upstream (warm paths stay
  thin without it).
- **Provider gaps inside connected channels.** Some records exist in principle but aren't reachable
  through the official API — Slack huddle audio, Meet transcripts retained only ~30 days. Worth
  tracking as the providers change.
- **New providers.** Which channels join next (a CRM beyond Salesforce, a second mail provider),
  and how the catalogue grows without the master list drifting from what modules actually pull.
