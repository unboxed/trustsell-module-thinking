---
id: new-stakeholder
module: 02-relationships
label: New stakeholder
blurb: A new person joins the conversation, often someone senior.
modes: [expand]
kind: opening
confidence: graded
inputs: [conversation-history, stakeholder-map]
counts: [new-name-on-thread, new-attendee-on-event, head-of-signature-scan, prior-history-scan]
answers: [Q5, Q6]
needs: [calendar, linkedin]
---

# New stakeholder

## What it means

A fresh face arrives in a conversation you are already in, and the map gains a name it did not have.

The read fires on a name that has no history: on no earlier email, on no earlier event, and not already
on the organisation's map. That empty history is what tells a real arrival apart from a colleague who
has just been quiet for a while.

Seniority matters here. A "Head of" signature or an organiser role on an invite weighs more than a name
buried in a long Cc.

## In practice

A new name appears in Cc on a deal thread, on no earlier message or event before now, and is added to
next week's demo invite. Their signature reads as a senior service lead, and there is no prior history
with them anywhere. The read: a senior new name with no history has entered the conversation, and a
new decision-maker may be in the room.

## For the build

Applies the shared reading rules in [`docs/reading-principles.md`](../docs/reading-principles.md).

- Trigger: a name is new only when the prior-history scan comes back empty (on no earlier message, no
  earlier event, not already on the stakeholder map), so a quiet colleague is not mistaken for an
  arrival; seniority is then weighed against the conversation's own cast (own-rhythm by cast, never a
  fixed rank), so a senior signature or an organiser role outweighs a name buried in Cc.
- Confidence: high when the signature is senior and the map had a decision-maker hole this person could
  fill; softens to "a new name appeared" when all there is is a fresh address in Cc with nothing on it.
- Needs: Calendar, to see a new attendee added to an event, and LinkedIn for role
  and seniority; without LinkedIn the role rests on a self-described signature and whatever enrichment
  returns, so a vague or missing signature leaves seniority a guess (a data gap, named not faked). A
  stakeholder who only joins by phone or in a room never lands in a sender line or attendee list and
  stays invisible until they touch a connected channel.