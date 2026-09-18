---
id: answer-gap
module: 03-offerings
label: Answer gap
blurb: A worry on record with no grounded answer yet, or an answer whose proof is missing or thin.
modes: [advance]
kind: risk
confidence: graded
inputs: [objection-list]
counts: [objection-entry-exists, answer-grounded, proof-required-kind, proof-on-file, proofs-per-claim, proof-recency, named-vs-anonymous-reference, third-party-vs-self-asserted]
answers: [Q15, Q17]
needs: [drive, web]
pull: Organisation's proof library, to supply the document a claim needs
---

# Answer gap

## What it means

A worry is on record from People, but there is no grounded answer ready for it. Or the answer leans on
proof too thin to carry it.

It reads one worry at a time. It does not ask "can we answer this?" in the abstract. It asks whether
there is a grounded answer ready right now, with the proof that worry needs, and whether that proof is
actually strong.

The honest, useful edge is naming the gap plainly. It says when there is no good answer yet, or when
the answer rests on proof that is old, anonymous, or only your own word, rather than improvising one.

## In practice

A buyer worry such as a compliance attestation has come up on a thread, and there is no entry for it
among your told worries, no answer on file, and nothing in Drive. By contrast a second worry, data
residency, has a told answer backed by one case study, but the case study is four years old, written
by you rather than a third party. The read: "answer gap on the compliance worry, thin proof on data
residency. The first has nothing on file; the second rests on a single ageing, self-written
reference."

## For the build

Applies the shared reading rules in [`docs/reading-principles.md`](../docs/reading-principles.md).
Borrows the Organisation proof library for proof that belongs to the organisation
rather than this offering, such as a general track-record case study.

- Trigger: a worry counts as answered only when it is on the objection list with an answer, backed by
  the kind of proof its claim needs, and backed by proof strong enough to carry it. An entry present
  with strong proof on file reads as covered; an entry missing, or proof required but absent, is a
  gap; an answer present but proof thin is a softer, named gap that says "shore this up" rather than
  "we have nothing". Strength is read against the claim, not a fixed bar, since an ageing named case
  study may carry a continuity claim but not a "current best-in-class" one. The one judgement, whether
  a claim needs proof at all, leans on Offerings' own rule (a track-record claim needs a case study, a
  capability claim a spec line), not invention.
- Confidence: high when the gap is total (a live worry, no answer, no proof); softer when an answer
  exists but its proof is thin, where the read names why it is thin (old, anonymous, or self-asserted)
  rather than passing it as covered.
- Needs: Drive, for the "proof on file" check; without it those checks come back
  empty and the read over-reports gaps, lowering confidence rather than inventing coverage (a data
  gap, named not faked). The open web supplies what research turned up. Where the organisation has
  tagged no proof for a borrowed claim, that is a told gap across modules, named not faked.