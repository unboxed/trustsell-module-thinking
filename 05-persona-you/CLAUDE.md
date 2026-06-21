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
draws_from: [gmail, slack]
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
write, not what others send you. The channels it draws from (`gmail` — your sent mail and watched
drafts — and `slack`) are mirrored in the `draws_from` frontmatter, which the canvas draws as an
inflow arrow from each plug into this module.

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

Profile holds the **told** layer about *you* — the things no inbox reveals and every other
module leans on. This is where the foundational identity lives:

- **Who you are** — your **name**, your **role/title**, and a short **"About you"** (what you
  sell, how you see your job, anything that frames how you'd want to come across). "Who you are"
  is the most basic input the whole tool needs — a message can't sound like you, or even address
  people as you, without it.
- **Your voice** — optional **writing samples**, or it learns from your sent mail and your edits
  to its drafts (the raw-data above). Samples are a head start, not a requirement.
- **Your autonomy preference** — how much you want the tool to do before you step in (it always
  suggests; this sets how far it drafts ahead). The cold/volume seller and the relationship owner
  sit at different points here.

These are **supplied outward**: every module that writes or reasons about you reaches Profile for
them, rather than each holding its own copy. Identity is owned once, here, and lent to the rest.

When something's missing, Profile degrades gracefully like the other modules — it can propose a
draft "About you" from your sent mail for you to confirm, rather than stall.

## Reasoning
_TBD_

## Output
_TBD_

## Memory
_TBD_

## Open questions
_TBD_
