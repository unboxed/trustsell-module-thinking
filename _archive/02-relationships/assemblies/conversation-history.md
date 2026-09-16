---
id: conversation-history
label: Conversation history
blurb: Everything said in one conversation, with everyone who was on it.
about: a conversation
deterministic: true
inputs:
  - email-thread
  - email-message
  - slack-channel
  - slack-message
  - slack-user
  - person-history
---

# Conversation history

## What it gathers

Gathers one conversation into a single picture: an email thread or a Slack channel thread, in order,
with everyone who is on it.

It keys on the thread's own identity, an email thread by `threadId`, a Slack thread by `thread_ts`.
Then it hangs every message off that key by timestamp (`internalDate` for mail, `ts` for Slack), so the
back-and-forth reads as one timeline.

Each participant is resolved to the person behind them through `person-history`. So a name in the
`From` line, or a Slack author, becomes someone you already have a history with, not a fresh stranger.

The only real work is the tidy-up: pulling scattered messages back onto their one thread, and matching
each speaker to a known person.

## Lineage

`email-thread` and `email-message` resolve to
[`channels/gmail.md`](../../01-integrations/channels/gmail.md); `slack-channel`, `slack-message` and
`slack-user` resolve to [`channels/slack.md`](../../01-integrations/channels/slack.md).
`person-history` is the sibling assembly that turns a raw participant into a resolved person.
