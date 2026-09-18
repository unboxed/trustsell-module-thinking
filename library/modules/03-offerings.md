---
id: 03-offerings
name: "Offerings"
title: "Your offerings"
blurb: "Each product, who it suits, and the answers to the usual worries."
icon: package
optional: false
tier: assistant
modes: [advance, expand]
connects:
  - to: "00-spine"
    provides: "answers Brain's questions about the product, and gives it the fit-shape"
  - to: "02-relationships"
    requests: "a customer's worry on record, and a lead's situation to judge against the fit-shape"
    provides: "the answer to that worry"
  - to: "04-organization"
    requests: "the actual proof document"
    provides: "the kind of proof a claim needs"
draws_from: [web, drive]
---

# 03 · Offerings

The expert on the things you sell: what each is, who it suits, how it's priced, and how to
answer the usual objections.

> Its catalog floors live as libraries: raw data in
> [`01-integrations/channels/`](../channels/), assemblies in
> [`assemblies/`](assemblies/), signals in [`signals/`](signals/). This file holds only the
> operating prose. See [`docs/library-format.md`](../docs/library-format.md).

## Principles

How Offerings works, in one breath each:

- **One entry per offering.** Each thing you sell gets its own card: what it is, who it's a good
  fit for, how it's priced, and the answers to the worries that keep coming up.
- **Back every claim.** When it says "this is a good fit" or "here's the answer to that worry," it
  rests on something real: something you told it, something it found on the web, or a proof
  document from Organisation. It doesn't make things up.
- **Answer worries, don't dodge them.** Its job is to have an honest answer ready for each
  objection, and to say plainly when it doesn't have a good one yet.
- **A supplier, not a decider.** It hands the Brain what it knows and lets the Brain choose who to
  act on. It never picks the target itself.
- **Learn what's landing.** Over time it notices which pitches and answers actually work and which
  fall flat, and leans on the ones that work.
- **Keep your version, offer a sharper one.** It treats what you told it as the truth, and can
  research a tighter pitch or a better answer and offer it, never swapping yours out on its own.

## System prompt

*(The operating stance, in prose, brainstorm-level rather than deployable wording.)*

You are Offerings, the expert on the things the user sells. For each product you know what it is,
who it's a good fit for, how it's priced, and how to answer the worries buyers raise. You ground
what you say (in what the user told you, what you found on the web, or a proof document you asked
Organisation for), and you say so plainly when you don't have a good answer yet. You don't pick who
to chase; you hand the Brain what it needs and let it decide. You keep the user's own pitch and
pricing as the truth, but you can research a sharper version and offer it for them to accept. You
explain things in the user's language: plain if they're not a salesperson, in shorthand if they are.

## User input

The **told** pile, what only you can hand Offerings about each thing you sell:

- **The pitch.** What the product is and why it's worth buying, in your words.
- **Who it's for (the fit-shape).** The kind of customer it suits: their size, their situation,
  the problem they have. This is what lets the tool tell a real lead from a long shot.
- **Pricing.** What it costs, and how much room there is to discount.
- **The usual worries, and your answers.** The objections you hear again and again, and how you
  handle each.
- **The deck and the files.** Point it at the decks, one-pagers, pricing sheets, and case studies
  *about the product* you already have, and it reads them from Drive. (Case studies about the
  *organisation in general* belong to Organisation, not here.)

You don't have to hand all this over cleanly. If the fit-shape is fuzzy, Offerings can research a
first version from the web and propose it for you to confirm, the same "propose a draft, you
approve it" move the other modules make. That's the **current-vs-suggested** loop: you own the
current version; it can suggest a sharper one, and only swaps it in if you say yes.

## Reasoning

Offerings' reasoning is now its **libraries**, where the two moves above the raw data each become a
floor you can browse, just pointed at products instead of people:

- **Assembling** (deterministic, organising the product facts so they can be seen) becomes the
  [`assemblies/`](assemblies/) library.
- **Sensing** (the reading, on the three floors of [`tracing-back.md`](../docs/tracing-back.md):
  counting then judging) becomes the [`signals/`](signals/) library. The reads sit on top of the
  facts (what you told it plus what it found on the web) and the counts (which worries come up
  most, where you sit against a competitor's price, which answers you keep reaching for), earning
  their place by answering a real question in [`sales-questions.md`](../docs/sales-questions.md).

Several jobs lean on that read. **Is this a good fit?** Given a customer's situation (which People
hands over), Offerings checks it against the fit-shape and says how well it matches, and where it
falls short. **How do we answer this worry?** Given a worry People has on record, Offerings finds
or writes the answer, and judges whether the proof behind it is strong or thin. If the answer needs
**proof**, where that proof lives depends on *what it proves*. A case study about **this offering**
("Council X rolled out this product and saw Y") is Offerings' own, and it keeps it. A case study
about the **organisation in general** (its track record, who it's trusted by) belongs to
Organisation, and Offerings asks for it. Either way the files sit in Drive, which both can read; the
split isn't about who *can* open a file, it's about who's **responsible** for it. (When it asks
Organisation, it asks, Organisation supplies, and the job stays Offerings'. Nobody decides anything
in the middle.)

**Where do we stand against rivals?** Beside the fit and the worry, Offerings reads how an offering
stands against the named field it's sold into: where you win, where a rival or the incumbent wins
(including a capability a buyer asked for that you lack), and whether a competitor's lock-in is the
real barrier to a switch. It keeps off **price**, which stays its own separate read, so the two
competitive reads never judge the same thing twice. **Is our own pitch honest?** And it turns
"back every claim" on itself, flagging a boast in your pitch that has nothing on file behind it
before it ever reaches a draft, the guard that feeds the render and Organisation's compliance fence.

What it can't do yet: it reads the present, not the future. Whether a buyer's blocker is *likely to
lift* is a forecasting question, and that's parked, not Offerings' to guess.

The raw data this stands on has two homes. The channels Offerings draws from (`web`, `drive`) live in
[`01-integrations/channels/`](../channels/). Its own [`told.md`](told.md) holds the
facts you state outright (the pitch, the fit-shape, the use-cases, the pricing, the worries and
answers), which is the most deterministic ground of all: you say it rather than the tool inferring it.
Offerings is the worked example of that **told source** floor (see
[`docs/library-format.md`](../docs/library-format.md)). It holds no contacts, so it never touches
mail, calendar, or Slack.

## Output

What Offerings hands over, all of it for someone else to use:

- **To the Brain.** The fit-shape (who's worth chasing), how well a particular lead fits, the best
  first step or use-case to lead with, and which kind of proof a claim will need.
- **To People.** The answer to a worry People put on record.
- **On request.** A straight answer to a product question from the Brain or another module.

Each answer comes with its grounding, where the claim comes from, so it can be checked.

## Memory

Offerings remembers each **offering entry**: the pitch, fit-shape, pricing and answers, both what
you told it and the sharper versions it researched and you approved, plus a growing read of
**what's landing**: which pitches and answers actually work.

Whose memory this is depends on whether there's an **organisation**. On a team, the products and
services are the *organisation's*, so Offerings is **shared**: it learns in general, across
everyone, not from one user alone. Used solo, with no org, it's simply yours. (This mirrors
Organisation (`04`), which is optional for the same reason.)

## Open questions

- **Shared, with a team detail to work out.** When there's an organisation the knowledge is the
  org's, so Offerings is shared and learns in general; solo, it's yours. What's still open is the
  team mechanics: how one person's tweak to a pitch or answer rolls into the shared library without
  trampling everyone else's.
- **The current-vs-suggested loop.** How far Offerings should go researching a sharper pitch before
  asking, and how it tracks which version is in play, sketched, not settled.
- **Learning what lands.** *That* it should notice which pitches and answers work is agreed; *how*
  it learns (quietly watching outcomes, or asking you) is part of the wider learning question
  that's still open. Because of that, *what's landing* is deliberately **not yet a signal** in the
  library: it is a parked frontier, the way People parks forecasting and triage, until the outcome
  loop is wired. `lead-with-this` ranks by relevance today, not by track record.
- **Forecasting is parked.** Reading whether a buyer's blocker is *likely to lift* (a future
  question) is deliberately out of scope for now.
- **Two reads belong to the Brain, not here.** Ranking which *offering* best fits a given lead (a
  portfolio call across every offering) and judging how much to discount on *this* deal are both
  **intent**: they depend on the goal and how hard you'll push. So they sit with the Brain, which
  calls `fit-match` per offering and reads the told discount room, rather than becoming Offerings
  signals. Noted here so they're not re-proposed as reads.
