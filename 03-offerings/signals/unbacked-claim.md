---
id: unbacked-claim
label: Unbacked claim
blurb: "A claim in your pitch that outruns its grounding: nothing on file to back it up yet."
modes: [grow]
kind: risk
confidence: graded
inputs: [product-claims]
measures: [claims-stated-count, claims-grounded-count, grounding-kind-required, claim-source]
answers: [Q11]
needs: [drive, web]
pull: Organisation's proof library, to confirm a track-record claim's backing exists
---

# Unbacked claim

## What it means

A claim in your own pitch that nothing on file backs up yet, before it ever reaches a draft.

The tool turns Offerings' first principle on itself, "back every claim, don't make things up". Where
[`answer-gap`](answer-gap.md) reads a buyer's worry and asks whether you have a grounded answer, this
reads your own pitch and asks whether each thing it asserts is backed, by a spec line, a Drive file, or
a proof on the shelf. It is the guard that keeps a boast you cannot support out of a message. It
qualifies Q11 (what current information do I have to share) from the other side: not "what do I have"
but "which of it is safe to put in front of a buyer".

It is most confident when a claim has nothing behind it at all, and it softens when something thin
exists but may not carry the claim's kind. A told claim with no source is a gap; a suggested claim
(one a researched sharper pitch introduced, not one you stated) with no source is the sharper gap,
because it asserts something you never actually told it.

It leans on Drive to see whether a spec line or file is on the shelf, and on the open web for what a
suggested pitch researched. If Drive is not connected, every "spec line or file" check comes back
empty and the read over-reports, flagging grounded claims as floating. A track-record claim's backing
may be the organisation's, so it borrows the Organisation proof library before calling it a gap.

## In practice

Your pitch makes six claims; four have a spec line or file under them. A track-record claim such as
"trusted by 30 organisations" needs a case study and has none, and it came from a suggested sharper
pitch rather than something you told it. A second claim, "fastest in its class", has no spec line and
no source. The read: "two claims float. The track-record claim is a number a researched draft
suggested and you have no case study for, and the best-in-class claim has no spec line, so do not send
either until they are grounded or softened."

## For the build

Applies the shared reading rules in [`docs/reading-principles.md`](../../docs/reading-principles.md).
Borrows the Organisation proof library (the `pull` field) to confirm a track-record claim's backing
exists before calling it a gap.

- Trigger: a claim counts as backed only when the grounding its kind requires is on file: a capability
  claim needs a spec line, a track-record claim needs a case study (the same rule `answer-gap` applies
  to proof). Required grounding on file reads as backed; required grounding absent reads as unbacked. A
  told claim with no source is a gap; a suggested claim with no source is the sharper gap, because it
  asserts something you never told it. The one judgement, whether a claim needs backing at all, leans
  on Offerings' own rule rather than invention.
- Confidence: graded on grounding. High when a claim has nothing behind it at all; softer when
  something thin exists but may not carry the claim's kind.
- Needs: Drive (the `needs` field) for the "spec line or file" check; without it those checks come back
  empty and the read over-reports, flagging grounded claims as floating (a data gap that lowers
  confidence rather than inventing a verdict). The open web supplies what a suggested pitch researched.
  A claim grounded only in a deck never uploaded cannot be checked until the file is connected.
- Counts beneath it: the `measures` in the frontmatter (claims stated, claims grounded, grounding kind
  required, claim source).
- This read names which claims are unsafe to assert; whether the buyer then believes a backed one is
  People's read (Q14), not Offerings' to judge. The guard flows downstream into the render and the
  Organisation compliance fence, which gate the draft itself.
