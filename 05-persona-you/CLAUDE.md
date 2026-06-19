---
name: "You"
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
---

# 05 · You

**Purpose:** Makes every message sound like you. You is the personal layer — one per individual — applied at the moment a message is written: it takes Brain's brief and turns it into words in your voice.

## What it owns
- **Your voice:** tone, rhythm, the words you'd actually use, how formal you are.
- **Your preferences:** how much you trust the tool to act versus show you a draft first.

That's it, on purpose — it stays narrow. Your role or selling angle ride *inside* your voice; they aren't separate furniture here.

This is the **moat and the landmine**: voice is what makes the output unmistakably yours, and almost-but-not-quite is worse than not trying — 80% you is worse than 0% you.

## What it doesn't
Store any relationship history — that all lives in People; You only *reads* it at write-time to judge closeness. And it never overrides the company's hard limits — it writes inside Organisation's fence (and for a solo, where there's no fence, it writes free).

## Its routines
One, and it's a default: **it learns from your edits** — keen at the start, quiet once it's confident, attentive again only if your edits show it has drifted. No strategy-driven routines — You is about who you are, not what the strategy is chasing.

## Who it works with (the render flow)
Brain hands down a brief → You reads the relationship from People → stays inside Organisation's guardrails → and writes the message in your voice.

## The guiding principle: people as the fulcrum, AI as the lever
You work the *verbs* — decide, approve, send. The AI works the *nouns* — the target, the draft, the proof. The AI always **suggests**; you make the final call. That's why You biases hard to **draft, don't auto-send** — nothing goes out without you pulling the trigger, at least for now.

## Still open (the *how*, deferred)
Exactly how your voice is captured — from writing samples, a style spec, or learned from what you send and edit. The leaning so far: mostly learned from your edits.
