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
    provides: "the hard limits — compliance, legal, brand — the voice must write inside"
draws_from: [drive]
raw_data:
  - "File"
  - "File content"
---

# 04 · Organisation

Your company's shared layer: the proof you can point to and the lines you cannot cross.

## Raw data

Organisation reads its documents from **Drive**, through Connections — the **org-general** proof
and reference files: case studies about the company, general collateral, and any brand or
compliance guideline documents. (Proof about a *specific product* isn't here — that's Offerings'.
Both modules can open the same Drive; they just own different shelves of it.) The channel it draws
from (`drive`) is mirrored in the `draws_from` frontmatter, which the canvas draws as an inflow
arrow from the plug into this module.

### Drive
`File` — a proof or reference document filed for the company: a case study, a collateral piece, a brand or compliance guideline · name · type · owner · modified
`File content` — the exported text of that document, so its claims and rules can be read

The **rules themselves** — what counts as a hard limit, what discount is allowed — aren't fetched;
you set them, so they live under User input. A future version might watch the web for compliance
changes, but that isn't connected today.

## Principles

How Organisation works, in one breath each:

- **Shared, one per company.** This is the team's layer, not yours alone — everyone in the
  organisation draws on the same proof and the same rules.
- **Optional.** A solo seller with no company behind them can skip it entirely; the tool still
  works without it.
- **Proof you can point to.** It keeps the company's general proof — case studies, track record,
  who you're trusted by — ready to back a claim.
- **The fence is a hard limit, not a suggestion.** The compliance, legal and brand lines are walls,
  not advice. A message that crosses one doesn't go out.
- **Owns the company shelf, not the product shelf.** General company proof is its job; proof about
  a specific product belongs to Offerings. Both read the same Drive — the split is about
  responsibility, not access.
- **Supply and gate, don't decide.** It hands over the right proof and checks a draft against the
  fence; it never decides who to act on.

## System prompt

*(The operating stance, in prose — brainstorm-level, not deployable wording.)*

You are Organisation, the shared layer of the company the user represents — its proof, its
guardrails, and its house voice. You are optional: a solo seller can do without you. You keep the
company's general proof ready to back a claim, and you hold the hard limits — compliance, legal,
brand — that every message must stay inside. You do two things: you supply the right proof when
asked, and you check a finished draft against the fence, passing it or flagging exactly what crosses
a line. You own the company's general proof; proof about a particular product is Offerings'. You
don't decide who to chase or what to send — you supply, and you gate.

## User input

The **told** pile — what the company sets, that no channel can fetch:

- **The rules (the fence)** — your compliance, legal and brand hard limits: what can never be
  claimed, what must always be said, words and tones to avoid. You can point at a brand or
  compliance document in Drive, but you confirm what's actually a hard limit.
- **Pricing authority** — how much discount is allowed, and who signs off beyond it.
- **Proof tags** — which document proves what, and for whom (this case study is about local
  government, that one about a large rollout) — so the right proof can be found for a given claim or
  customer.
- **The house voice** — the company's tone and brand wording, the band a message should sit within.

Because Organisation is **shared**, these are set once for the whole team. Used solo it's empty, and
the tool simply skips the proof-and-fence step.

## Reasoning

Organisation's thinking is **lighter** than People's or Offerings' — it doesn't read behaviour or
judge a situation. It does two plain jobs:

- **Match** — find the right proof. Given the kind of proof a claim needs (from Offerings or the
  Brain) and who the customer is, it finds the company case study that fits best — and says so
  honestly when nothing in the library matches.
- **Gate** — check against the fence. Given a finished draft (from Profile), it checks it against
  the hard limits and either passes it or flags exactly what crosses a line. This is the last check
  before anything reaches you.

Both are closer to *looking something up and applying a rule* than to the count-then-judge reading
the other modules do. That's why it carries no "signal" layer — there's no behaviour here to sense,
just proof to fetch and limits to enforce.

## Output

What Organisation hands over:

- **To the Brain** — the matching case study and the compliance fence, on request.
- **To Offerings** — the company proof it asks for, and the pricing authority (how much room there
  is to discount).
- **To Profile** — the hard limits the voice must write inside.
- **The verdict on a draft** — pass, or a plain list of what breaks the fence and why.

All of it is shared across the team, and none of it decides anything — it backs a claim, or stops a
line being crossed.

## Memory

Organisation holds the company's **shared** layer: the proof library (the general case studies and
collateral, read from Drive and tagged for what they prove), the fence (the hard limits), the
pricing authority, and the house voice.

It's the one **shared** tier in the system — a single copy per company, drawn on by everyone on the
team (the future vision is the team that joins an organisation). That's the opposite of People and
Profile, which are **personal**, one per individual. Organisation reaches another module's memory
only by **asking**, like everyone else.

## Open questions

- **The Offerings boundary in practice.** The line is clear in principle — product proof to
  Offerings, company proof to Organisation — but a single Drive file can blur it (a case study
  that's both about a product *and* a flagship company win). Who tags and owns the in-between cases
  is worth a pass.
- **House voice vs your voice.** Where the company's brand voice ends and your personal voice (`05`)
  begins at render time — the two must agree, and the boundary isn't drawn yet. *(The same seam is
  flagged from `05`'s side.)*
- **How the fence is set.** Whether the hard limits are typed in as rules, read from a
  brand/compliance document, or both — and how a limit that's really a judgement call ("don't sound
  pushy") gets enforced — is unsettled.
- **The team vision.** "Shared across the team that joins an org" is the direction, but how members,
  roles and permissions actually work is future, not built.
- **Watching for compliance drift.** A future version reading the web for rule changes is noted but
  parked — not connected today.
