---
id: unbacked-claim
floor: signal
label: Unbacked claim
blurb: "A claim in your pitch that outruns its grounding: nothing on file to back it up yet."
inputs: [product-claims]
measures: [claims-stated-count, claims-grounded-count, grounding-kind-required, claim-source]
answers: [Q11]
modes: [grow]
kind: risk
confidence: graded
pull: Organisation's proof library, to confirm a track-record claim's backing exists
---

# Unbacked claim

A read that turns Offerings' first principle on itself: "back every claim, don't make things up". Where
[`answer-gap`](answer-gap.md) reads a *buyer's worry* and asks whether you have a grounded answer, this
reads your *own pitch* and asks whether each thing it asserts is backed, a spec line, a Drive file, or
a proof on the shelf, before it ever reaches a draft. It is the guard that keeps a boast you cannot
support out of a message. It qualifies Q11 (what current information do I have to share) from the other
side: not "what do I have" but "which of it is *safe* to put in front of a buyer".

| Floor | What Offerings has |
|---|---|
| **Facts** (1) | the claims your pitch makes, gathered by `product-claims` with whatever grounds each ("syncs both ways" → a spec line; "trusted by 30 councils" → a case study); which claims are yours (told) and which a researched sharper pitch suggested |
| **Counts** (2) | *claims stated:* 6 in the current pitch · *claims grounded:* 4 (spec line or file on each) · *grounding kind required:* "trusted by 30 councils" is a track-record claim → needs a case study; "deploys in a day" is a capability claim → needs a spec line · *claim source:* "trusted by 30 councils" came from a **suggested** sharper pitch, not something you told it |
| **Opinion** (3) | **"Two claims float"**: "trusted by 30 councils" (a suggested track-record claim with no case study behind it) and "fastest in its class" (no spec line, no source) are unbacked · *confidence: high* |

What surfaces is not "the pitch is fine" but *"two of your six claims have nothing behind them:
'trusted by 30 councils' is a number a researched draft suggested and you have no case study for, and
'fastest in its class' has no spec line, so do not send either until they are grounded or softened."*
Every clause walks back to a claim on the list and a file that is there or isn't, the same track-back
`answer-gap` uses, pointed at your own words instead of the buyer's.

**Threshold.** There is no behavioural rhythm here: Offerings reads *coverage of its own claims*, not
pace. A claim counts as backed only when the grounding its *kind* requires is on file, a capability
claim needs a spec line, a track-record claim needs a case study (the same rule `answer-gap` applies to
proof). A told claim with no source behind it is a gap; a *suggested* claim (one a researched sharper
pitch introduced, not one you stated) with no source is the sharper gap, because it asserts something
you never actually told it. *Required grounding on file* → backed; *required grounding absent* →
unbacked.

**Why it's trustworthy.** Every count is a lookup anyone could redo over `product-claims`: how many
claims the pitch makes, how many have a spec line or file under them, what kind of backing each needs,
and whether the claim is yours or a suggestion. The one judgement, *does this claim need backing at
all*, leans on Offerings' own rule rather than invention, and a track-record claim's backing may be the
organisation's, so the pull asks `04`'s
[`proof-library`](../../04-organization/assemblies/proof-library.md) whether a case study exists before
calling it a gap. The `confidence` is **graded on grounding**: high when a claim has nothing behind it
at all, softer when something thin exists but may not carry the claim's kind.

**Where it can fail to reach ground.** If Drive is not connected, every "spec line or file" check comes
back empty and the read over-reports, flagging grounded claims as floating, a **data gap** that lowers
confidence rather than inventing a verdict. A claim grounded only in a deck that was never uploaded
cannot be checked until the file is connected. And this read names which claims are unsafe to assert;
whether the buyer then *believes* a backed one is People's read (Q14), not Offerings' to judge. The
guard it provides flows downstream into the render and `04`'s compliance fence, which gate the draft
itself.
