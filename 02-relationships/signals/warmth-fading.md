---
id: warmth-fading
label: Warmth fading
blurb: Replies turning short and cool, or quiet on the last call.
modes: [grow, nurture]
kind: style
confidence: low
inputs: [person-history, meeting-history]
measures: [warmth-trend-in-replies, friendly-words-trend, talk-time-on-calls]
answers: [Q14]
needs: [meet]
---

# Warmth fading

## What it means

The softest read in the library, and labelled as such.

Where cooling and warming count whether someone engages (speed, gaps, who starts), this asks the
murkier question of how they come across: is the warmth still there, or has it gone flat? It is the
read for the case where the replies still arrive on time but something in them has cooled. It earns a
place only as a quiet flag that sits on top of a firmer read, never as a verdict on its own.

The change is measured against the person's own earlier warmth, never an absolute: a naturally short
writer is not "going cold" for being short, and the read only leans on a clear move away from their own
usual length, friendliness and how much they say on a call. Because the underlying judgement is soft,
the bar to raise it is higher than for the counting reads, and it is held at low confidence on purpose.

Reading warmth from words is genuinely arguable: tone over text is unreliable, and sarcasm, culture,
mood and shorthand all fool it. So the read never acts on its own. Its job is to add colour to a firmer
read (a cooling champion, a blocker), and it is always shown with its evidence so a person can glance
and wave it off in a second. The text half misreads anyone naturally clipped; the call half exists only
when a call was captured. With neither half on solid ground, it steps back to "nothing reliable to say"
rather than inventing a mood.

## In practice

A contact whose replies were once around 70 words with a greeting and "thanks so much!" now run to
about 10 words with no greeting, their warm and enthusiastic words tail off across the period, and on
the last captured call they spoke about a third as much as the call before. The read, offered as a
prompt: "they may be going cooler in how they come across, worth a look alongside whatever else you're
seeing."

## For the build

Applies the shared reading rules in [`docs/reading-principles.md`](../../docs/reading-principles.md).

- Trigger: a clear move away from the person's own earlier warmth across reply length, friendly-word
  use and talk-time on calls (own rhythm, never an absolute). Held at a higher bar than the counting
  reads because the judgement is soft.
- Confidence: low on purpose. Never raised alone; it rides on top of a firmer read and is always shown
  with its evidence so a person can wave it off.
- Needs: Meet (captured-call content) for the talk-time half; an uncaptured call leaves no record to
  hear tone in (a data gap, named not faked). With both halves off solid ground the read steps back to
  "nothing reliable to say".
- Counts beneath it: the `measures` in the frontmatter (warmth trend in replies, friendly-words trend,
  talk-time on calls).
