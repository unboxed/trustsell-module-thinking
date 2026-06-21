---
id: answer-coverage
floor: signal
label: Answer gap
blurb: A worry on record with no grounded answer yet, or an answer whose proof is missing.
inputs: [objection-list]
measures: [objection-entry-exists, answer-grounded, proof-required-kind, proof-on-file]
answers: [Q15, Q17]
modes: [grow]
kind: risk
confidence: graded
pull: Organisation's proof library, to supply the document a claim needs
---

# Answer gap

A Grow read on one worry People put on record: not "can we answer this?" in the abstract, but "do we
have a *grounded* answer ready, with the proof it needs, right now?" The honest, valuable edge is
naming the gap, saying plainly when there is no good answer yet rather than improvising one.

| Floor | What Offerings has |
|---|---|
| **Facts** (1) | the worry on record from People ("is this FedRAMP-authorised?"); your told worries and answers; the proof docs in Drive; what the web turned up |
| **Counts** (2) | *objection-list entry:* no match for "FedRAMP" among your told worries → **missing** · *answer grounded:* none on file · *proof required:* a compliance attestation (kind: certificate) · *proof on file:* Drive search → **empty** · *(contrast, "data residency":* entry **present**, answer told, proof = case study, Drive has "Council X data-residency" → **covered**) |
| **Opinion** (3) | **"Answer gap on FedRAMP"**: a live worry with no grounded answer and no proof on file · *confidence: high* |

What surfaces is not "we'll figure it out" but *"FedRAMP has come up and we have nothing on file, no
answer, no certificate. Either supply one or we tell the buyer honestly."* Every clause walks back to
a told record that exists or doesn't, and a Drive file that is there or isn't. That is the track-back,
and the gap is part of it.

**Threshold.** There is no behavioural rhythm here: Offerings reads *coverage*, not pace. An answer
counts as ready only when it is (a) on the objection list with an answer, and (b) backed by the proof
its claim needs; a told answer with no proof behind a claim that needs one is still a gap. *Entry
present and proof on file* → covered; *entry missing, or proof required but absent* → gap.

**Why it's trustworthy.** Every count is a lookup anyone could redo: is there an entry, is there an
answer, does the claim need proof, is the proof file in Drive. The one judgement, *does this claim
need proof at all*, leans on Offerings' own rule (a track-record claim needs a case study, a
capability claim a spec line), not invention. The `confidence` is **graded on grounding**: high when
the gap is total, softer when an answer exists but its proof is thin.

**Where it can fail to reach ground.** The proof a claim needs may be the *organisation's*, not this
offering's, a general track-record case study. That lives in Organisation (`04`), and until `04`'s
proof library is built the pull dangles: Offerings can see the gap but not yet fill it from the shared
shelf. That is a **told/data gap across modules**, named not faked. And if Drive is not connected,
every "proof on file" check comes back empty and the read over-reports gaps, a **data gap** that
lowers confidence rather than inventing coverage.
