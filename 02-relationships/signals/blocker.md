---
id: blocker
floor: signal
label: Blocker
blurb: A skeptic who repeats the same objection, replies flat and short, and stalls after each ask.
inputs: [conversation-history, person-history]
measures: [repeated-objection-count, reply-length-vs-own-rhythm, stall-after-ask-count, objection-name-match]
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

**Where it can fail to reach ground.** If the worry is phrased loosely and does not match anything on
Offerings' objection list, People can still see the *pattern* (a recurring concern, short replies,
stalled asks) but cannot **name** the objection, so it reports an unnamed block and confidence falls.
That is a **told gap** on Offerings' side, named not faked. And if the push-back lives on a call or in
person rather than in mail or Slack, the thread shows only the stall, not the worry behind it, a
**data gap** in what the channels can see.
