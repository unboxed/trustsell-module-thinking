---
name: "Profile"
title: "Your profile"
blurb: "Everything personal to you, your voice and your preferences, so every message sounds like you."
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
    requests: "the compliance fence to write inside, and the house voice guide to write toward"
draws_from: [gmail, slack]
---

# 05 · Profile

The personal layer: your voice and your preferences, so every message sounds like you.

> Profile's catalog floors live as libraries: raw data in
> [`01-integrations/channels/`](../01-integrations/channels/), what you tell it in
> [`told.md`](told.md), assemblies in [`assemblies/`](assemblies/), signals in
> [`signals/`](signals/). This file holds only the operating prose. See
> [`docs/library-format.md`](../docs/library-format.md).

## Principles

How Profile works, in one breath each:

- **Learn voice, don't ask for it.** Your voice is *read off what you actually write* (sent mail,
  the edits you make to drafts), never filled in on a form. (People's "infer, don't tag," pointed
  at you.)
- **Three floors for voice.** The same ladder as People: the facts of your sent text, the patterns
  counted off them, the voice read on top, and every read walks back to something you really wrote.
- **Own identity once, lend it outward.** Who you are lives here and only here; every module that
  writes or reasons as you reaches Profile rather than keeping its own copy.
- **Write inside the fence, toward the house voice.** A draft must sit inside Organisation's hard
  limits (the `compliance-fence`): your voice never overrides compliance or brand. Alongside that hard
  wall is a softer pull, Organisation's `house-voice-guide`, the brand style your voice blends toward
  at render.
- **Suggest, never auto-send.** Profile drafts; you decide. How far it drafts ahead is your
  autonomy dial, but the trigger is always yours.
- **Degrade gracefully.** Missing a sample or an "About you"? It proposes a draft from your sent
  mail to confirm, rather than stall.

## System prompt

*(The operating stance, in prose, brainstorm-level rather than deployable wording.)*

You are Profile, the keeper of how the user sounds and what they prefer. You learn their voice from
what they write, their sent mail and the edits they make to your drafts, never from a form they fill
in. You own their identity: their name, their role, how they see their job; every module that
writes or reasons about them comes to you for it. When you render a message you pitch it to the
relationship, leaning on People for closeness and register, and you keep it inside the
organisation's hard limits, leaning on Organisation for the fence. You draft; the user decides:
how far you draft ahead is their preference to set, but nothing sends without them. When you don't
yet know their voice, you propose from what they've written and ask them to confirm, rather than
guess.

## User input

Profile holds the **told** layer about *you*, but "told" here means a **seed, not a form**. You
give it a starting handful; from there it lives as memory, refined as the tool watches you work
(see Reasoning and Memory). Nothing about you is frozen as a settings field.

- **Who you are**, your **name**, your **email**, and a short **bio / "About you"** (your role and
  how you'd want to come across). This is the most basic thing the whole tool needs: a message can't
  sound like you, or even address people as you, without it. (Email also lets it bootstrap before any
  account is connected; the connected Google account later confirms it.) Note what it deliberately
  leaves out: *what you sell* is Offerings' (`03`), not Profile's. Profile keeps only what's personal
  to you and reaches to Offerings for the product, rather than restating it here.
- **How the tool should work with you**, broader than a single setting. This is a set of
  **operator dials** that describe *what kind of seller you are*, and they tune the whole tool, not
  just the wording. They are **seeded by a setup archetype**, a single choice between selling for a
  living and selling only because your role needs it, which sets sensible starting positions; from
  there each dial is adjustable and is refined by what you do (see Reasoning):
  - **Sales fluency**, an expert salesperson, or someone who simply has a product to sell and for
    whom this isn't really the job. This sets the **register the tool speaks to *you*** in: plain
    English at one end, sales shorthand at the other.
  - **Time and cadence**, selling all day, or a few minutes now and then. This tells the **Brain**
    how to pace: how much to surface, how hard to push.
  - **Style**, a relationship owner nurturing a few, or a volume seller working many (the
    Nurture/Plant tilt).
  - **Autonomy**, how far it drafts or acts before you step in. It always suggests; this sets how
    far ahead it works.
  - **Coaching**, how much it teaches rather than just hands over: from "just give me the noun" to
    "tell me *why* this person and *what* to say." This is the lever that most separates the two
    kinds of seller. The accidental seller wants the tool to coach (the *why* and the talking
    points); the experienced seller wants the bare next move. It is distinct from fluency: fluency
    sets the *words* the tool speaks to you in, coaching sets *how much it explains*.
- **Your voice**, optional **writing samples**, or it learns from your sent mail and your edits to
  its drafts (the raw data behind the libraries). Samples are a head start, not a requirement.

**Two different voices live here, and they shouldn't be confused:** the voice the tool writes *as
you* (to your prospects, *your* voice), and the voice the tool speaks *to you* (plain or
sales-fluent, set by your fluency dial). Profile holds both.

These are **supplied outward**: every module that writes, reasons, or speaks to you reaches Profile
for them, rather than each holding its own copy. Your identity and your operator dials are owned
once, here, and lent to the rest. The Brain reads your cadence to pace; every module reads your
fluency to pick plain words over sales jargon.

When something's missing, Profile degrades gracefully: it can propose a draft "About you" from
your sent mail, or infer a dial from how you actually work, for you to confirm, rather than stall.

## Reasoning

Profile does two things: it **learns your voice**, and it **renders** a brief into a message that
sounds like you. Both stand on the same ground, what you actually write. That reasoning is now its
**libraries**, where the moves above the raw data each become a floor you can browse:

- **Assembling** (deterministic, organising your sent text so it can be seen) becomes the
  [`assemblies/`](assemblies/) library.
- **Sensing** (the voice read, on the three floors of [`tracing-back.md`](../docs/tracing-back.md):
  counting then judging) becomes the [`signals/`](signals/) library. Your **edits are the strongest
  teacher**: every time you rewrite a draft, the gap between what it wrote and what you sent is a
  fact that sharpens the read.

**Why voice is the only signal, and the dials are not.** The test for a signal is whether the read,
when it changes, points at a *move on a prospect*, which is why every signal answers one of the
salesperson's 26 questions. [`voice`](signals/voice.md) passes: it is read off your behaviour, but it
is *applied to the prospect*, it shapes the message you send (Q23, Q26), so it earns a signal floor.
The five operator dials (fluency, cadence, style, autonomy, coaching) do not: they change how the tool
talks to *you* and how the Brain paces *your* calendar, not what you do toward a prospect. Even cadence,
the most signal-like, only sets the Brain's tempo; the move toward a prospect still comes from People's
reads. So the dials are **configuration**, not signals. They are still **learned from behaviour**, told
first and refined ever after (how you write, how often you act, what you rewrite, what you ignore), but
that refinement is a **learning loop** tuning a told seed, a different mechanism from a sensing floor,
and it is deferred (see Open questions). The absence of a dials-signal floor is correct and
informative: Profile *configures and renders*, it does not *sense prospects*, save the one read it
applies to them.

When the Brain hands down a brief (who to act on, why, the points to make), Profile is the final
render step: it pitches the closeness and register to the relationship by *pulling* the history from
People, blends your voice with the brand style by *pulling* Organisation's `house-voice-guide` to
write *toward*, and stays inside Organisation's `compliance-fence`, the hard limits it writes
*inside*. Two different things come from Organisation, and they do different jobs: the house voice
guide shapes the draft as it is written (emulate), the fence checks it and can stop it (gate). The
brief carries the *what and why*; Profile supplies the *how it sounds*.

## Output

What Profile hands up, all as suggestions, like every module:

- **The rendered message** (the headline), the brief turned into words in your voice, pitched to
  the relationship and sitting inside the organisation's fence, drafted as far ahead as your
  autonomy allows.
- **Your voice, on request**, the read itself (how you sound, with its evidence), for any module
  that needs to write or reason as you.
- **Your identity and operator dials**, name, email, bio, plus the fluency, cadence, style,
  autonomy and coaching dials, supplied outward to whoever needs them: the Brain reads your cadence
  to pace, every module reads your fluency to choose plain words over sales jargon.

## Memory

Profile holds the **personal layer**, everything the tool needs to be *you-shaped*: your identity
(name, email, bio), your **operator dials** (fluency, cadence, style, autonomy, coaching, seeded by
your setup archetype), your **voice**
(built on the same three floors: the writing it's seen, the patterns it's counted, the read it's
formed), and the standing **preferences and corrections** you've given. All of it is **seeded then
kept alive**, told once, then refined from what you do, and held with its evidence so it can be
revised, never frozen as a form field.

It's a **personal** tier, one Profile per individual, private to that user; the shared,
company-wide material lives in Organisation (`04`). Profile reaches another module's memory only by
**asking**, People for relationship history, Organisation for the fence, never by reaching in.

## Open questions

- **The operator dials, which ones, and how set.** The working set is now five: fluency, cadence,
  style, autonomy and coaching, seeded by a setup archetype and then inferred from behaviour. One
  thing is now **settled**: the dials are **configuration, not signals** (they change how the tool
  works with you, not what you do toward a prospect, so by the action test they earn no signal floor;
  see Reasoning), and their behavioural refinement is a **learning loop** tuning a told seed, not a
  sensing read. What's still open is the calibration: how the archetype maps to starting positions,
  how fast behaviour should override a told setting, and how plainly to expose the dials to you, plus
  the learning loop itself, which is not yet drawn.
- **How the Brain consumes the cadence dial.** The biggest downstream effect is the Brain pacing to
  your time (all-day seller vs a few minutes now and then); exactly how that changes what the Brain
  surfaces and how hard it pushes is sketched, not settled (`00-spine`).
- **The voice-capture method.** Learning from sent mail and your edits is the working approach, but
  the precise form is unsettled: writing **samples** vs a learned **style-spec** vs purely
  **learned-from-edits**, and how they combine. A use-case pass will settle it.
- **How much before a confident read.** People's threshold question in voice's (and the dials')
  terms: how many messages, edits, or sessions before a read is trustworthy enough to act on, and
  how a thin read degrades (lean on samples, or ask).
- **House voice vs your voice.** Where the organisation's brand voice (`04`) ends and your personal
  voice begins at render time. The **structure** is now settled: the brand voice is its own
  `house-voice-guide` your render writes *toward*, kept apart from the `compliance-fence` it writes
  *inside* (emulate vs gate). What stays open is the **blend math**: the proposed direction is
  **persona-dependent**, leaning toward the house voice for someone selling only because their role
  needs it (a thin personal sales voice, more guardrail) and toward your own voice for an experienced
  seller, but the exact mechanism isn't yet drawn. *(The same seam is worked from `04`'s side.)*
