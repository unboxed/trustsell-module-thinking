---
id: blocker
floor: signal
label: Blocker
blurb: A skeptic who repeats the same objection, replies flat and short, and stalls after each ask.
inputs: [conversation-history, person-history, meeting-history]
measures: [repeated-objection-count, reply-length-vs-own-rhythm, stall-after-ask-count, objection-name-match, objection-raised-on-call]
answers: [Q13, Q15]
modes: [grow]
kind: risk
confidence: graded
pull: Offerings' objection list, to name the objection
---

# Blocker

A Grow read: one stakeholder on a live deal who keeps pushing back. Not gone quiet (they still reply)
and not warming (the replies are flat, short, and the same worry keeps coming back). The read names
the worry rather than just calling the person difficult, which is what makes it actionable.

| Floor | What People has |
|---|---|
| **Facts** (1) | the dated thread with Priya, her replies, the points where you asked for a next step (a call, a pilot, a sign-off) |
| **Counts** (2) | *the same worry, three times:* "is this GDPR-safe?" reappears in three separate replies · *replies run short:* ~12 words now against her own ~60-word norm earlier in the thread · *stalls after each ask:* three times you asked for a next step, three times the reply pivoted back to a concern with no movement · *objection-name match:* "GDPR-safe?" matches Offerings' objection list entry **data-residency** |
| **Opinion** (3) | **"Priya is blocking on data residency"**: the same objection, restated and unresolved, with every ask stalled · *confidence: high* |

What surfaces is not "Priya is difficult" but *"Priya is blocking on data residency: she's raised the
same GDPR worry three times, her replies have gone short, and she's pivoted back to it every time
you've asked for a next step."* Every clause walks back to a dated line in the thread, and the
objection is named, not guessed, because Offerings matched the worry to its list. That is the
track-back.

**Threshold.** There is no fixed "two objections = blocker" line. A single push-back is healthy
interest, not a block. The read fires when the *same* worry repeats across replies without resolving
**and** the replies have gone short against this person's own earlier rhythm in the thread **and**
each ask stalls instead of moving. The reply-length count is measured against her own normal (~12
words now versus her ~60-word norm earlier), never an absolute word count, the same own-rhythm rule
the cooling read uses: a person who is always terse is not suddenly a blocker for being terse.

**Why it's trustworthy.** Most of the read is deferred counting: how many times a worry recurs, how
short the replies run against the person's own norm, how many asks went unmoved. All three are
arithmetic anyone could redo over the same thread. The one genuine judgement, "this is a block, not
just diligence", is guarded by requiring all three counts to line up at once, and the objection is
named by a supplier pull (Offerings' objection list) rather than by People inventing a label. The
`confidence` is **graded**: high when the worry is identical across replies, the replies have clearly
shortened, and every ask stalled; it softens toward "pushing back" when the worries differ each time
or the deal is still inching forward.

**Now reads objections raised aloud.** Push-back no longer has to be typed. When a call was captured,
`meeting-history` carries the `Transcript` and `Smart notes`, so the same GDPR worry voiced on the
call counts toward the recurring-objection pattern (`objection-raised-on-call`) and is still matched
to Offerings' list to be named. The block reads across mail, Slack and the call as one.

**Where it can fail to reach ground.** Two ways, and the second is now **narrowed**. If the worry is
phrased loosely and does not match anything on Offerings' objection list, People can still see the
*pattern* but cannot **name** the objection, so it reports an unnamed block and confidence falls: a
**told gap** on Offerings' side. And if the push-back happens on a call, it is visible only when
note-taking was on; an uncaptured call (or an in-person stand-off) still shows the stall without the
worry behind it, the conditional-content **data gap** [`meeting-history`](../assemblies/meeting-history.md)
names.
