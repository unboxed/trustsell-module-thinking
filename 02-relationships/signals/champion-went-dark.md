---
id: champion-went-dark
floor: signal
label: Champion went dark
blurb: 'A once-active contact you can no longer reach: a bounce, a "no longer with" auto-reply, or total silence.'
inputs: [person-history]
measures: [bounce-back-detected, auto-reply-no-longer-with, silence-vs-own-rhythm, was-once-active]
answers: [Q6, Q18]
modes: [nurture, plant]
kind: risk
confidence: high
---

# Champion went dark

A read that is mostly about *reach*, not warmth: the channel to a person you relied on has broken.
Where Cooling champion asks "has Tom's rhythm slipped?", this asks the sharper question "can I still
get to Tom at all?". It leans Nurture (a relationship you are losing) but tips into Plant the moment
the answer is "they left", because the warm path now has to be rebuilt to whoever replaced them.

| Floor | What People has |
|---|---|
| **Facts** (1) | the dated emails with Maya, once two-way and fast; your last note to her; the system bounce that came back; the auto-reply on the address |
| **Counts** (2) | *was once active:* ~1-day median reply, started ~3 of every 5 threads → **a real contact, not a stranger** · *now:* your last note **bounced** (a mailer-daemon message on the `threadId`), or the auto-reply reads **"no longer with the company"**, or there is simply total silence at many times her own rhythm · *innocent-explanation scan:* no out-of-office window, no "back next month" note, no future meeting booked |
| **Opinion** (3) | **"Maya has gone dark"**: the line to a once-active contact is broken, and on the evidence she has likely left · *confidence: high* (a bounce or a "no longer with" reply is near-certain; pure silence is graded down) |

What surfaces is not a bare label but *"Maya's gone dark: your last note bounced and her auto-reply
says she's no longer with the council, so the route through her is gone and we need a new way in."*
Every clause walks back to a record: the mailer-daemon bounce on the thread, the `From` and body of
the auto-reply, the dated history that proves she was active. That is the track-back.

**Threshold.** A bounce or a "no longer with" auto-reply is near-binary: the record either exists on
the thread or it does not, so there is barely a threshold to set. The arguable case is *pure
silence with no bounce*, and there the rule is the own-rhythm one, never a fixed number of days: the
silence has to dwarf *this person's* established cadence (silent at many multiples of a contact who
used to reply within a day), and only after the innocent-explanation scan comes back empty. "Went
dark" is reserved for a once-active contact: a person who emailed twice a year cannot go dark,
because there was never a live channel to break.

**Why it's trustworthy.** Most of the read is not judgement at all: a bounce-back and a "no longer
with" auto-reply are *facts on record*, parsed not inferred, which is why `confidence` is **high**.
The was-once-active check is plain counting against the person's own history. The only genuinely
arguable branch is silence-without-a-bounce, and that one is held to the same guarded own-rhythm
test Cooling champion uses, then graded down so it never reads as certain as a bounce.

**Where it can fail to reach ground.** The signal is only as good as its ability to tell a *broken
channel* from *ordinary quiet*. The strong evidence lives in two specific records: the bounce
(a mailer-daemon message) and the auto-reply body. Reach is now read across calls too: because
`person-history` carries the `Meeting` and its `Participant` list, a recent call with her counts as a
live channel, so "went dark" will not fire on someone you spoke to last week. If a departure happens
silently, no bounce, no auto-reply, just a mailbox (and a calendar) that quietly stops answering, the
read thins to the same evidence Cooling champion has and can only say "went quiet, possibly left", not
"went dark". That is a **data gap**: without a delivery failure or a departure note, a bounce cannot be
told apart from a contact who is simply ignoring you, and the signal is named down accordingly rather
than faked up.
