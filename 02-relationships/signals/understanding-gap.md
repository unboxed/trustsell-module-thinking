---
id: understanding-gap
floor: signal
label: Understanding gap
blurb: They keep asking the same things, or use your own terms wrongly, so the product hasn't landed.
inputs: [conversation-history, meeting-history]
measures: [confused-questions, re-asked-questions, terms-used-wrongly, claims-restated-back, confusion-voiced-on-call]
answers: [Q13]
modes: [grow]
kind: risk
confidence: graded
pull: Offerings' product claims, to judge the confusion
---

# Understanding gap

A Grow read on one conversation: the deal isn't stalling on price or a blocker, it's stalling
because the product hasn't landed. Read off the same thread you've already gathered, scored against
what Offerings says the product actually claims.

| Floor | What People has |
|---|---|
| **Facts** (1) | the dated messages on the thread with Priya; her replies quoting your earlier notes; what she asks back |
| **Counts** (2) | she's asked "so does it sync both ways?" in three separate replies (a re-ask), opened two replies with a question that the deck already answered (confused questions), and called the audit log "the export" twice (a term used wrongly) · *pull:* Offerings' product claims says one-way sync and a separate audit log, so her restatements don't match the claim |
| **Opinion** (3) | **"Priya hasn't got it"**: the same points keep coming back and her words for the product drift from what it does · *confidence: graded* |

What surfaces is not a bare label but *"Priya keeps re-asking whether it syncs both ways and calls
the audit log 'the export', so the core of how it works hasn't landed, three replies in."* Every
clause walks back to a message on the thread, and the mismatch walks back to a claim Offerings
provides.

**Threshold.** There is no fixed "asks twice = confused" line. The yardstick is this
conversation's own normal: a re-ask only counts when the same point was already answered earlier in
*this* thread (so a first clarifying question is just diligence, not a gap), and a wrong term only
counts when it contradicts a claim Offerings confirms. *Questions repeat* → maybe; *the same answered
question repeats **and** their words for the product drift from what it actually does* → understanding
gap.

**Why it's trustworthy.** Most of it is deferred counting you could redo by re-reading the thread:
which questions were already answered (a re-ask is an exact-enough match against an earlier message),
how many times a point came back. The one genuine judgement, does their wording actually contradict
the product, is guarded by the pull: People doesn't decide what's true about the product, it borrows
Offerings' product claims and only flags the drift. The `confidence` is **graded**: high when several
answered questions repeat and a term plainly clashes with a claim; near the line it softens to "may
not have fully landed" rather than calling the buyer confused on one stray phrase.

**Now reads confusion voiced aloud.** The muddle often surfaces on a call before it shows in mail.
When a call was captured, `meeting-history` carries the `Transcript` and `Smart notes`, so the same
question asked again on the call, or the product described wrongly out loud, counts toward the read
(`confusion-voiced-on-call`) and is scored against Offerings' claims the same way.

**Where it can fail to reach ground.** Three ways now. If Offerings can't supply the relevant product
claim, the wrong-term check has nothing to score against and only the re-ask count survives, so
confidence falls: a **told-by-a-supplier gap**. A buyer who understands fine but writes in shorthand
can trip the term check, which is why the read leans on repetition, not a single loose word. And the
call signal is there only when note-taking was on: an uncaptured call hides the confusion voiced in
it, the conditional-content **data gap** [`meeting-history`](../assemblies/meeting-history.md) names.
