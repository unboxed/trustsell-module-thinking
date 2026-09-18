---
id: 04-organization
name: "Organisation"
title: "Your organisation"
blurb: "Your proof, your guardrails, your house voice."
icon: building
optional: true
tier: assistant
modes: [advance, expand]
connects:
  - to: "00-spine"
    provides: "the matching case study, the compliance fence, and the pricing fence, on request"
  - to: "03-offerings"
    requests: "which kind of proof a claim needs"
    provides: "the proof library: the case study a claim needs, with its strength attributes"
  - to: "05-persona-you"
    provides: "the compliance fence to write inside, and the house voice guide to write toward"
draws_from: [drive]
---

# 04 · Organisation

Your company's shared layer: the proof you can point to and the lines you cannot cross.

> Its catalogue floors live as libraries: raw data in
> [`channels/`](../channels/), what the company tells it in
> [`organisation-told.md`](../told/organisation-told.md), assemblies in [`assemblies/`](../assemblies/). Organisation has **no signals**:
> it matches proof and gates drafts, so there is no behaviour to sense. This file holds only the
> operating prose. See [`docs/library-format.md`](../docs/library-format.md).

## Principles

How Organisation works, in one breath each:

- **Shared, one per company.** This is the team's layer, not yours alone: everyone in the
  organisation draws on the same proof and the same rules.
- **Optional.** A solo seller with no company behind them can skip it entirely; the tool still
  works without it.
- **Proof you can point to.** It keeps the company's general proof (case studies, track record,
  who you're trusted by) ready to back a claim.
- **The fence is a hard limit, not a suggestion.** The compliance, legal and brand lines are
  walls, not advice. A message that crosses one doesn't go out.
- **Owns the company shelf, not the product shelf.** General company proof is its job; proof
  about a specific product belongs to Offerings. Both read the same Drive: the split is about
  responsibility, not access.
- **Supply and gate, don't decide.** It hands over the right proof and checks a draft against the
  fence; it never decides who to act on.

## System prompt

*(The operating stance, in prose, brainstorm-level rather than deployable wording.)*

You are Organisation, the shared layer of the company the user represents: its proof, its
guardrails, and its house voice. You are optional: a solo seller can do without you. You keep the
company's general proof ready to back a claim, and you hold the hard limits (compliance, legal,
brand) that every message must stay inside. You do two things: you supply the right proof when
asked, and you check a finished draft against the fence, passing it or flagging exactly what
crosses a line. You own the company's general proof; proof about a particular product is
Offerings'. You don't decide who to chase or what to send. You supply, and you gate.

## User input

The **told** pile, what the company sets that no channel can fetch:

- **The rules (the fence).** Your compliance, legal and brand hard limits: what can never be
  claimed, what must always be said, words and tones to avoid. You can point at a brand or
  compliance document in Drive, but you confirm what's actually a hard limit.
- **Pricing authority.** How much discount is allowed, and who signs off beyond it.
- **Proof tags.** Which document proves what, and for whom (this case study is about local
  government, that one about a large rollout), so the right proof can be found for a given claim
  or customer, plus two attributes you confirm so Offerings can judge a proof's *strength*: whether
  the reference is named or anonymous, and whether the proof is third-party or your own word.
- **The house voice.** The company's tone and brand wording, the band a message should sit
  within.

Because Organisation is **shared**, these are set once for the whole team. Used solo it's empty,
and the tool simply skips the proof-and-fence step. The full record list is the
[`organisation-told.md`](../told/organisation-told.md) library.

The same told serves both kinds of seller: it does not change for an experienced salesperson or for
someone selling only because their role needs the organisation to win clients. What changes is how
much weight the tool puts on it. The accidental seller trips the fence more often, and leans on the
proof shelf for case studies they don't carry in their head, so for them the fence is a real safety
net and the proof does more of the work. The experienced seller rarely tests either. The input is
persona-agnostic; the reliance on it is not.

## Reasoning

Organisation's thinking is lighter than People's or Offerings': it doesn't read behaviour or
judge a situation, so it carries **no signal floor**, and that absence is deliberate. The test for
whether something is a signal is whether the read, when it changes, points at a *move on a prospect*
(which is why every signal answers one of the salesperson's 26 questions). Organisation never makes
that kind of read: it only supplies material and gates a draft. The one judgement-shaped question it
brushes against, *is this proof strong enough to carry the claim*, was handed up a floor to Offerings'
[`answer-gap`](../signals/answer-gap.md), which judges strength off the attributes
Organisation merely surfaces. So Organisation does two plain jobs and supplies two more gathered
floors, none of it a signal:

- **Match.** Find the right proof. Given the kind of proof a claim needs (from Offerings or the
  Brain) and who the customer is, it reads the [`proof-library`](../assemblies/proof-library.md) and
  returns the company case study that fits best, or names the hole honestly when nothing on the
  shelf matches.
- **Gate.** Check against the fence. Given a finished draft (from Profile), it checks it against
  the [`compliance-fence`](../assemblies/compliance-fence.md) and either passes it or flags exactly
  what crosses a line. This is the last check before anything reaches you.

And it **supplies** two gathered floors it does no reading on, handing them to whoever asks:

- The [`pricing-fence`](../assemblies/pricing-fence.md), the org-level discount envelope (ceiling,
  sign-off, floor), supplied to the **Brain** for its deferred deal-specific discount decision. (This
  is the company governance, distinct from the per-offering price Offerings reads in `price-barrier`.)
- The [`house-voice-guide`](../assemblies/house-voice-guide.md), the positive brand style, supplied to
  **Profile** to write *toward* at render, the partner to the fence it writes *inside*.

All four stand on the deterministic gathers in [`assemblies/`](../assemblies/); none is a signal,
because there is no behaviour to sense, just proof to fetch, limits to enforce, and material to supply.

## Output

What Organisation hands over:

- **To the Brain.** The matching case study, the compliance fence, and the pricing fence (the
  org-level discount envelope its deal-specific discount decision sits inside), on request.
- **To Offerings.** The company proof it asks for, with the strength attributes (recency, named or
  anonymous, third-party or your own word) that let its `answer-gap` judge how solid the proof is.
- **To Profile.** The compliance fence the voice must write *inside*, and the house voice guide it
  writes *toward*.
- **The verdict on a draft.** Pass, or a plain list of what breaks the fence and why.

All of it is shared across the team, and none of it decides anything: it backs a claim, or stops
a line being crossed.

## Memory

Organisation holds the company's **shared** layer as four gathered floors: the proof library (the
general case studies and collateral, read from Drive and tagged for what they prove, with their
strength attributes), the compliance fence (the hard limits a draft must sit inside), the pricing
fence (the org-level discount envelope), and the house voice guide (the brand style the render writes
toward).

It's the one **shared** tier in the system, a single copy per company, drawn on by everyone on
the team (the future vision is the team that joins an organisation). That's the opposite of
People and Profile, which are **personal**, one per individual. Organisation reaches another
module's memory only by **asking**, like everyone else.

## Open questions

- **The Offerings boundary in practice.** The line is clear in principle (product proof to
  Offerings, company proof to Organisation), but a single Drive file can blur it: a case study
  that's both about a product *and* a flagship company win. Who tags and owns the in-between cases
  is worth a pass.
- **House voice vs your voice.** Where the company's brand voice ends and your personal voice
  (`05`) begins at render time. The **structure** is now settled: the brand voice is its own
  [`house-voice-guide`](../assemblies/house-voice-guide.md) the render writes *toward*, kept apart from
  the [`compliance-fence`](../assemblies/compliance-fence.md) it writes *inside* (emulate vs gate). What
  stays open is the **blend math**: the proposed direction is **persona-dependent**, leaning toward
  the house voice for someone who sells only because their role needs it (a thin personal sales voice,
  more guardrail) and toward their own voice for an experienced seller, but the exact mechanism isn't
  drawn yet. *(The same seam is worked from `05`'s side.)*
- **How the fence is set.** Whether the hard limits are typed in as rules, read from a
  brand/compliance document, or both, and how a limit that's really a judgement call ("don't sound
  pushy") gets enforced, is unsettled.
- **The team vision.** "Shared across the team that joins an org" is the direction, but how
  members, roles and permissions actually work is future, not built.
- **Watching for compliance drift.** A future version reading the web for rule changes is noted
  but parked, not connected today.
