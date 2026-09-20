---
id: warmth-fading
module: 02-relationships
label: Warmth fading
blurb: Replies turning short and cool, or quiet on the last call.
kind: decay
confidence: low
inputs: [person-history, meeting-history]
counts: [reply-length-vs-own-rhythm, friendly-words-trend, talk-time-on-calls]
answers: [Q14]
needs: [meet]
assumes: [own-rhythm]
assumes_status: provisional
---

# Warmth fading

## What it means

The softest read in the library, and labelled as such.

Cooling and warming count whether someone engages: speed, gaps, who starts. This asks the murkier
question of how they come across. Is the warmth still there, or has it gone flat? It is the read for
when the replies still arrive on time, but something in them has cooled.

Reading warmth from words is genuinely arguable. Tone over text is unreliable, and sarcasm, culture,
mood and shorthand all fool it. So the read never acts on its own. It rides on top of a firmer read, a
cooling champion or a blocker, and is always shown with its evidence so you can glance and wave it
off.

## In practice

A contact whose replies were once around 70 words with a greeting and "thanks so much!" now run to
about 10 words with no greeting, their warm and enthusiastic words tail off across the period, and on
the last captured call they spoke about a third as much as the call before. The read, offered as a
prompt: "they may be going cooler in how they come across, worth a look alongside whatever else you're
seeing."

## How it is worked out

Applies the shared reading rules in [`docs/reading-principles.md`](../docs/reading-principles.md).

- Trigger: a clear move away from the person's own earlier warmth across reply length, friendly-word
  use and talk-time on calls (own rhythm, never an absolute). Held at a higher bar than the counting
  reads because the judgement is soft.
- Confidence: low on purpose. Never raised alone; it rides on top of a firmer read and is always shown
  with its evidence so a person can wave it off.
- Needs: Meet (captured-call content) for the talk-time half; an uncaptured call leaves no record to
  hear tone in (a data gap, named not faked). With both halves off solid ground the read steps back to
  "nothing reliable to say".
- Assumes: enough history with this person to know their usual, because a move away from their
  earlier warmth needs an earlier warmth on record. On a first contact a short reply is just a short
  reply (an assumption gap, named not faked).
