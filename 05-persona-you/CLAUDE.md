---
name: "Profile"
title: "Your profile"
blurb: "Everything personal to you — your voice and your preferences — so every message sounds like you."
icon: pen
optional: false
tier: assistant
modes: [sustain, advance, expand]
connects:
  - to: "00-spine"
    provides: "the brief rendered into words in the user's voice"
  - to: "02-relationships"
    requests: "relationship history, to pitch the right closeness and register"
  - to: "04-organization"
    requests: "the organisation's hard limits, to write inside them"
raw_data:
  - "Sent email"
  - "Draft edit"
  - "Sent Slack message"
---

# 05 · Profile

The personal layer: your voice and your preferences, so every message sounds like you.

> **Focus right now:** the raw data below. Everything else is TBD.

## Raw data

What Profile can pull in from the connected channels to learn your voice. It reads what *you*
write, not what others send you.

### Gmail (your sent mail)
`Sent email` — recipient · subject · body · timestamp · greeting · sign-off · length · formality cues
`Reply vs. new` — whether you opened the thread or only responded

### Drafts (watched as you work)
`Draft edit` — the draft the tool wrote · your final version · what you changed

### Slack (your messages)
`Sent Slack message` — channel · text · timestamp · how you write in chat versus email

## Principles
_TBD_

## System prompt
_TBD_

## User input
_TBD (your trust level, optional writing samples)_

## Reasoning
_TBD_

## Output
_TBD_

## Memory
_TBD_

## Open questions
_TBD_
