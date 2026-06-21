---
name: "Profile"
title: "Your profile"
blurb: "Everything personal to you — your voice and your preferences — so every message sounds like you."
icon: pen
optional: false
tier: assistant
modes: [nurture, grow, plant]
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

How Profile works, in one breath each:

- **Learn voice, don't ask for it.** Your voice is *read off what you actually write* — sent mail,
  the edits you make to drafts — never filled in on a form. (People's "infer, don't tag," pointed
  at you.)
- **Three floors for voice.** The same ladder as People: the facts of your sent text, the patterns
  counted off them, the voice read on top — and every read walks back to something you really wrote.
- **Own identity once, lend it outward.** Who you are lives here and only here; every module that
  writes or reasons as you reaches Profile rather than keeping its own copy.
- **Write inside the fence.** A draft must sit inside Organisation's hard limits — your voice never
  overrides compliance or brand.
- **Suggest, never auto-send.** Profile drafts; you decide. How far it drafts ahead is your
  autonomy dial — but the trigger is always yours.
- **Degrade gracefully.** Missing a sample or an "About you"? It proposes a draft from your sent
  mail to confirm, rather than stall.

## System prompt

*(The operating stance, in prose — brainstorm-level, not deployable wording.)*

You are Profile, the keeper of how the user sounds and what they prefer. You learn their voice from
what they write — their sent mail, the edits they make to your drafts — never from a form they fill
in. You own their identity: their name, their role, how they see their job; every module that
writes or reasons about them comes to you for it. When you render a message you pitch it to the
relationship — leaning on People for closeness and register — and you keep it inside the
organisation's hard limits — leaning on Organisation for the fence. You draft; the user decides:
how far you draft ahead is their preference to set, but nothing sends without them. When you don't
yet know their voice, you propose from what they've written and ask them to confirm, rather than
guess.

## User input

Profile holds the **told** layer about *you* — but "told" here means a **seed, not a form**. You
give it a starting handful; from there it lives as memory, refined as the tool watches you work
(see Reasoning and Memory). Nothing about you is frozen as a settings field.

- **Who you are** — your **name**, your **email**, and a short **bio / "About you"** (what you
  sell, how you see your job, anything that frames how you'd want to come across). This is the most
  basic thing the whole tool needs — a message can't sound like you, or even address people as you,
  without it. (Email also lets it bootstrap before any account is connected; the connected Google
  account later confirms it.)
- **How the tool should work with you** — broader than a single setting. This is a set of
  **operator dials** that describe *what kind of seller you are*, and they tune the whole tool, not
  just the wording:
  - **Sales fluency** — an expert salesperson, or someone who simply has a product to sell and for
    whom this isn't really the job. This sets the **register the tool speaks to *you*** in — plain
    English with a little coaching at one end, sales shorthand at the other.
  - **Time and cadence** — selling all day, or a few minutes now and then. This tells the **Brain**
    how to pace — how much to surface, how hard to push.
  - **Style** — a relationship owner nurturing a few, or a volume seller working many (the
    Nurture/Plant tilt) — and **how much autonomy** you're comfortable with (it always suggests;
    this sets how far it drafts or acts before you step in).
- **Your voice** — optional **writing samples**, or it learns from your sent mail and your edits to
  its drafts (the raw data above). Samples are a head start, not a requirement.

**Two different voices live here, and they shouldn't be confused:** the voice the tool writes *as
you* (to your prospects — *your* voice), and the voice the tool speaks *to you* (plain or
sales-fluent — set by your fluency dial). Profile holds both.

These are **supplied outward**: every module that writes, reasons, or speaks to you reaches Profile
for them, rather than each holding its own copy — your identity and your operator dials are owned
once, here, and lent to the rest. The Brain reads your cadence to pace; every module reads your
fluency to pick plain words over sales jargon.

When something's missing, Profile degrades gracefully — it can propose a draft "About you" from
your sent mail, or infer a dial from how you actually work, for you to confirm, rather than stall.

## Reasoning

Profile does two things: it **learns your voice**, and it **renders** a brief into a message that
sounds like you. Both stand on the same ground — what you actually write.

**Learning the voice — the same three floors as People** (`docs/tracing-back.md`), pointed at your
own writing instead of your contacts:
- **Facts** (Floor 1): your sent emails, your Slack messages, and — the sharpest source — the
  **edits you make to its drafts** (what it wrote, what you changed it to).
- **Counting** (Floor 2, still deterministic): the patterns over those facts — your usual greeting
  and sign-off, sentence length, formality cues, how often you use a first name, whether you open
  threads or only reply, how chat differs from email.
- **Voice** (Floor 3, the first opinion): the read on top — *"warm but brisk," "formal with new
  contacts, looser once a relationship's established," "never uses exclamation marks."* Like any
  Floor-3 read it carries its evidence, so it can be re-checked and revised — never frozen as a tag.

Your **edits are the strongest teacher**: every time you rewrite a draft, the gap between what it
wrote and what you sent is a fact that sharpens the read. The voice gets truer the more you correct.

**Learning the dials, the same way.** The operator dials are seeded by what you tell it, then kept
honest by what you do: if you engage once a week, the cadence dial reads *occasional*; if you keep
stripping the sales jargon out of its drafts, the fluency dial slides toward *plain English*; if you
act on dozens of light touches rather than nurturing a few, style reads *volume*. Told first,
inferred ever after — the whole point of the memory is to learn these so you stop having to set them.

**Rendering — turning a brief into your words.** When the Brain hands down a brief (who to act on,
why, the points to make), Profile is the final step that makes it a message. It:
- pitches the **closeness and register** to the relationship — *pulling* the history from People (a
  years-long peer reads differently from a cold first touch);
- stays inside the **fence** — *pulling* the hard limits from Organisation (compliance, legal,
  brand), which it must not cross;
- writes the points in **your** voice, off the read above.

The brief carries the *what and why*; Profile supplies the *how it sounds*. It renders, it doesn't
decide — the message is a suggestion, drafted as far ahead as your autonomy preference allows,
waiting for you to send, tweak, or bin.

## Output

What Profile hands up — all as suggestions, like every module:

- **The rendered message** (the headline) — the brief turned into words in your voice, pitched to
  the relationship and sitting inside the organisation's fence, drafted as far ahead as your
  autonomy allows.
- **Your voice, on request** — the read itself (how you sound, with its evidence), for any module
  that needs to write or reason as you.
- **Your identity and operator dials** — name, email, bio, plus the fluency / cadence / style /
  autonomy dials — supplied outward to whoever needs them: the Brain reads your cadence to pace,
  every module reads your fluency to choose plain words over sales jargon.

## Memory

Profile holds the **personal layer** — everything the tool needs to be *you-shaped*: your identity
(name, email, bio), your **operator dials** (fluency, cadence, style, autonomy), your **voice**
(built on the same three floors — the writing it's seen, the patterns it's counted, the read it's
formed), and the standing **preferences and corrections** you've given. All of it is **seeded then
kept alive** — told once, then refined from what you do, and held with its evidence so it can be
revised, never frozen as a form field.

It's a **personal** tier — one Profile per individual, private to that user; the shared,
company-wide material lives in Organisation (`04`). Profile reaches another module's memory only by
**asking** — People for relationship history, Organisation for the fence — never by reaching in.

## Open questions

- **The operator dials — which ones, and how set.** Fluency, cadence, style and autonomy are the
  obvious ones, but the full set is open ("whatever those sliders turn out to be"), as is how each
  is fixed — told outright, inferred from behaviour, or a mix — and how plainly to expose them to you.
- **How the Brain consumes the cadence dial.** The biggest downstream effect is the Brain pacing to
  your time (all-day seller vs a few minutes now and then) — exactly how that changes what the Brain
  surfaces and how hard it pushes is sketched, not settled (`00-spine`).
- **The voice-capture method.** Learning from sent mail and your edits is the working approach, but
  the precise form is unsettled: writing **samples** vs a learned **style-spec** vs purely
  **learned-from-edits** — and how they combine. A use-case pass will settle it.
- **How much before a confident read.** People's threshold question in voice's (and the dials')
  terms: how many messages, edits, or sessions before a read is trustworthy enough to act on, and
  how a thin read degrades (lean on samples, or ask).
- **House voice vs your voice.** Where the organisation's brand voice (`04`) ends and your personal
  voice begins at render time — the two must agree, and the boundary isn't yet drawn. *(The same
  seam is flagged from `04`'s side.)*
