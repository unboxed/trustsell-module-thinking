---
id: gmail
name: Gmail
brand: Google
source: account
connected: true
icon: mail
---

# Gmail

The mail history, the spine of most relationship reading. Threads group related messages. A
message carries the who, when and what, plus the flags (read, starred, labelled, importance) that
the counting floor leans on for rhythm and engagement. Attachments ride on messages. `Draft` is the
outgoing side: a reply prepared but not yet sent, surfaced for a human to send.

Owned by Connections, fetched fresh each time and carried untouched. No opinion is formed here and
no content is kept. Each record below is a lineage anchor. Its id is the kebab-slug of its label
(`Email message` becomes `email-message`), and that is what People's assemblies reference.

## Records

| Record | Field | Source |
|---|---|---|
| Email thread | participants | derived |
| Email thread | subject | first message Subject |
| Email thread | message count | derived |
| Email thread | first and last activity | derived |
| Email message | sender | From |
| Email message | to | To |
| Email message | cc | Cc |
| Email message | bcc | Bcc |
| Email message | subject | Subject |
| Email message | body | payload parts |
| Email message | snippet | snippet |
| Email message | timestamp | internalDate |
| Email message | thread id | threadId |
| Email message | in reply to | In-Reply-To |
| Email message | direction | derived (sent or received) |
| Email message | read/unread | UNREAD label |
| Email message | labels | labelIds |
| Email message | starred | STARRED label |
| Email message | importance | IMPORTANT label |
| Email message | has attachments | derived |
| Attachment | filename | filename |
| Attachment | type | mimeType |
| Attachment | size | body.size |
| Attachment | content | attachmentId |
| Label | name | name |
| Label | type | type (system or user) |
| Label | message count | messagesTotal |
| Draft | to | To |
| Draft | subject | Subject |
| Draft | body | payload parts |

## In plain words

What a person reads, where it differs from the record's label. The label, and the id made from
it, do not change.

| Record | Plain name |
|---|---|
| Label | Gmail label |
