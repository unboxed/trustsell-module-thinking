---
id: answer-gap
floor: signal
label: Answer gap
blurb: A worry on record with no grounded answer yet, or an answer whose proof is missing or thin.
inputs: [objection-list]
measures: [objection-entry-exists, answer-grounded, proof-required-kind, proof-on-file, proofs-per-claim, proof-recency, named-vs-anonymous-reference, third-party-vs-self-asserted]
answers: [Q15, Q17]
modes: [grow]
kind: risk
confidence: graded
pull: Organisation's proof library, to supply the document a claim needs
---

# Answer gap

A Grow read on one worry People put on record: not "can we answer this?" in the abstract, but "do we
have a *grounded* answer ready, with the proof it needs, right now, and is that proof actually strong?"
The honest, valuable edge is naming the gap, saying plainly when there is no good answer yet, or when
the answer leans on proof too thin to carry it, rather than improvising one.

| Floor | What Offerings has |
|---|---|
| **Facts** (1) | the worry on record from People ("is this FedRAMP-authorised?"); your told worries and answers; the proof docs in Drive; what the web turned up |
| **Counts** (2) | *objection-list entry:* no match for "FedRAMP" among your told worries → **missing** · *answer grounded:* none on file · *proof required:* a compliance attestation (kind: certificate) · *proof on file:* Drive search → **empty** · *(contrast, "data residency":* entry **present**, answer told, proof = case study, Drive has "Council X data-residency" → present, but *proofs per claim:* 1 · *recency:* 4 years old · *named vs anonymous:* the council is named · *third-party vs self-asserted:* it is your own write-up → **covered but thin**) |
| **Opinion** (3) | **"Answer gap on FedRAMP, thin proof on data residency"**: FedRAMP is a live worry with no answer and no proof at all; data residency has an answer but it rests on a single ageing, self-written case study · *confidence: high on the total gap, graded on the thin one* |

What surfaces is not "we'll figure it out" but *"FedRAMP has come up and we have nothing on file, no
answer, no certificate. Either supply one or we tell the buyer honestly."* Every clause walks back to
a told record that exists or doesn't, and a Drive file that is there or isn't. That is the track-back,
and the gap is part of it.

**Threshold.** There is no behavioural rhythm here: Offerings reads *coverage and strength*, not pace.
An answer counts as ready only when it is (a) on the objection list with an answer, (b) backed by the
proof its claim needs, and (c) backed by proof strong enough to carry it; a told answer with no proof
behind a claim that needs one is still a gap, and an answer leaning on proof that is old, anonymous, or
only self-asserted is a *partial* gap, not fully covered. *Entry present and strong proof on file* →
covered; *entry missing, or proof required but absent* → gap; *answer present but proof thin* → a
softer, named gap that says "shore this up" rather than "we have nothing". Strength is read off plain
attributes of the proof: how many independent proofs back the claim, how recent they are, whether the
reference is named or anonymous, and whether it is third-party or your own word.

**Why it's trustworthy.** Every count is a lookup anyone could redo: is there an entry, is there an
answer, does the claim need proof, is the proof file in Drive, how old it is, whether the reference is
named, whether it is third-party. The one judgement, *does this claim need proof at all*, leans on
Offerings' own rule (a track-record claim needs a case study, a capability claim a spec line), not
invention; *how strong is enough* is graded against the claim, not a fixed bar, since a four-year-old
named case study may carry a continuity claim but not a "current best-in-class" one. The `confidence`
is **graded on grounding**: high when the gap is total, softer when an answer exists but its proof is
thin, where the read names *why* it is thin (old, anonymous, or self-asserted) rather than passing it
as covered.

**Where it can fail to reach ground.** The proof a claim needs may be the *organisation's*, not this
offering's, a general track-record case study. That lives in Organisation (`04`), and the pull now
resolves to its [`proof-library`](../../04-organization/assemblies/proof-library.md): Offerings asks,
Organisation supplies the matching case study *and its attributes* (how recent it is, whether the
reference is named, whether it is third-party), or names the hole when the shelf has none. So the
strength read stays grounded in what `04` hands back, not invented here; `04` keeps no signals of its
own, it supplies the document and its facts, and Offerings does the judging. Where the organisation has
tagged no proof for the claim, that is a **told/data gap across modules**, named not faked. And if
Drive is not connected, every "proof on file" check comes back empty and the read over-reports gaps, a
**data gap** that lowers confidence rather than inventing coverage.
