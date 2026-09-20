---
id: slack
name: Slack
brand: Slack
source: account
icon: hash
---

# Slack

The workspace chatter, a second stream of conversation history beside the mail. Channels are the
spaces people post in; messages carry the who, when and what, plus the threading, mentions and
reactions the counting floor leans on for rhythm and engagement. Canvases and lists are the richer
documents that hang off a channel. People (users) and shared files round it out. Huddle audio is a
provenance caveat: it is not reachable through Slack's official API, so that part of the
conversation is a data gap.

Owned by Connections, fetched fresh each time and carried untouched. No opinion is formed here and
no content is kept. Each record below is a lineage anchor. Its id is the kebab-slug of its label
(`Slack message` becomes `slack-message`), and that is what People's assemblies reference.

## Records

| Record | Field | Source |
|---|---|---|
| Slack channel | name | name |
| Slack channel | topic | topic |
| Slack channel | purpose | purpose |
| Slack channel | members | members |
| Slack channel | public or private | is_private |
| Slack message | channel | channel |
| Slack message | author | user |
| Slack message | text | text |
| Slack message | timestamp | ts |
| Slack message | thread | thread_ts |
| Slack message | mentions | derived |
| Slack message | reactions | reactions |
| Slack message | edited flag | edited |
| Slack message | permalink | permalink |
| Canvas | title | title |
| Canvas | content | derived |
| Canvas | linked channel | channel_id |
| List | rows/fields | derived |
| List | linked channel | channel_id |
| Slack user | name | name |
| Slack user | real name | real_name |
| Slack user | title | profile.title |
| Slack user | timezone | tz |
| Slack user | status | profile.status_text |
| Slack user | presence | presence |
| Slack file | filename | name |
| Slack file | type | mimetype |
| Slack file | size | size |
| Slack file | content | url_private |

## In plain words

What a person reads, where it differs from the record's label. The label, and the id made from
it, do not change.

| Record | Plain name |
|---|---|
| Slack user | Slack profile |
| Canvas | Slack canvas |
| List | Slack list |
