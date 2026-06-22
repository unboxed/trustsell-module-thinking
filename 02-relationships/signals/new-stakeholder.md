---
id: new-stakeholder
floor: signal
label: New stakeholder
blurb: A new person joins the conversation, often someone senior.
inputs: [conversation-history, stakeholder-map]
measures: [new-name-on-thread, new-attendee-on-event, head-of-signature-scan, prior-history-scan]
answers: [Q5, Q6]
modes: [plant]
kind: opening
confidence: graded
---

# New stakeholder

A Plant read: a fresh face arrives in a conversation you are already in, and the map gains a name it
did not have. One signal carrying its evidence down to the `From` line that introduced them.

| Floor | What People has |
|---|---|
| **Facts** (1) | the dated `Email message` and `Email thread` for the deal with Council 14; the `Calendar event` for next week's demo; the `From`, To and Cc on each message; the attendee list on the event; each message body and signature |
| **Counts** (2) | *new name on thread:* Priya Shah appears in Cc this period, on no `email-message` or `email-thread` before now · *new attendee on event:* she is added to the demo invite · *head-of signature scan:* her signature reads "Head of Digital Services" · *prior-history scan:* no `person-history` for her, she is not on the existing `stakeholder-map` for this org → **she is genuinely new here** |
| **Opinion** (3) | **"A new stakeholder joined Council 14"**: a senior name you have no history with has entered the conversation · *confidence: high* |

What surfaces is not a bare label but *"Priya Shah just joined the Council 14 thread, signing as Head
of Digital Services, and you have no history with her: a new decision-maker may be in the room."*
Every clause walks back to a `From` line or an attendee row. That is the track-back.

**Threshold.** There is no fixed "anyone new is a stakeholder" line. A name only fires this read when
the prior-history scan comes back empty (they are on no earlier `email-message`, no earlier event, and
not already on the org's `stakeholder-map`), so a colleague who has been quiet for a while is not
mistaken for an arrival. Seniority is graded against the conversation's own cast: a "Head of ..."
signature or an organiser role on the demo invite weighs more than a name buried in a long Cc, the same
way a reply gap is weighed against a person's own rhythm rather than a calendar of days.

**Why it's trustworthy.** The arguable part is small. Most of the read is *deferred counting*: who is
on the thread now versus who was on it before, who is on the event, what the signature says, all
deterministic over the assembled picture. The one genuine judgement, *does this arrival matter*, is
guarded by the signature scan and the existing map, so a real "Head of ..." reads stronger than an
unknown junior name. The `confidence` is **graded**: high when the signature is senior and the map had
a decision-maker hole this person could fill; softer to "a new name appeared" when all we have is a
fresh address in Cc with nothing on it.

**Where it can fail to reach ground.** Without LinkedIn the role rests on a self-described signature and
whatever `enrichment` returns, so a vague or missing signature leaves seniority a guess: that is a
**data gap**, named not faked. And a stakeholder who only ever joins by phone or in a room never lands
in a `From` line or an attendee list, so they stay invisible to this read until they touch a connected
channel.
