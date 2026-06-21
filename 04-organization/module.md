---
name: "Organisation"
title: "Your organisation"
blurb: "Your proof, your guardrails, your house voice."
icon: building
optional: true
tier: assistant
modes: [grow, plant]
connects:
  - to: "00-spine"
    provides: "the matching case study and the compliance fence, on request"
  - to: "03-offerings"
    requests: "which kind of proof a claim needs"
    provides: "the proof library and pricing authority"
  - to: "05-persona-you"
    provides: "the hard limits (compliance, legal, brand) the voice must write inside"
draws_from: [drive]
---

# 04 · Organisation

Your company's shared layer: the proof you can point to and the lines you cannot cross.

> Its catalog floors live as libraries: raw data in
> [`01-integrations/channels/`](../01-integrations/channels/), assemblies in
> [`assemblies/`](assemblies/). Organisation has **no signals**: it matches proof and gates
> drafts, so there is no behaviour to sense. This file holds only the operating prose. See
> [`docs/library-format.md`](../docs/library-format.md).

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
  or customer.
- **The house voice.** The company's tone and brand wording, the band a message should sit
  within.

Because Organisation is **shared**, these are set once for the whole team. Used solo it's empty,
and the tool simply skips the proof-and-fence step.

## Output

What Organisation hands over:

- **To the Brain.** The matching case study and the compliance fence, on request.
- **To Offerings.** The company proof it asks for, and the pricing authority (how much room there
  is to discount).
- **To Profile.** The hard limits the voice must write inside.
- **The verdict on a draft.** Pass, or a plain list of what breaks the fence and why.

All of it is shared across the team, and none of it decides anything: it backs a claim, or stops
a line being crossed.

## Memory

Organisation holds the company's **shared** layer: the proof library (the general case studies
and collateral, read from Drive and tagged for what they prove), the fence (the hard limits), the
pricing authority, and the house voice.

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
  (`05`) begins at render time: the two must agree, and the boundary isn't drawn yet. *(The same
  seam is flagged from `05`'s side.)*
- **How the fence is set.** Whether the hard limits are typed in as rules, read from a
  brand/compliance document, or both, and how a limit that's really a judgement call ("don't sound
  pushy") gets enforced, is unsettled.
- **The team vision.** "Shared across the team that joins an org" is the direction, but how
  members, roles and permissions actually work is future, not built.
- **Watching for compliance drift.** A future version reading the web for rule changes is noted
  but parked, not connected today.
