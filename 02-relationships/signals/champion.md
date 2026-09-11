---
id: champion
label: Champion
blurb: Someone inside the buyer who is selling for you.
modes: [grow]
kind: opening
confidence: graded
inputs: [person-history, conversation-history, meeting-history]
measures: [reply-speed-vs-own-rhythm, reply-length-vs-own-baseline, colleagues-looped-in-count, internal-advocacy-mentions, advocacy-voiced-on-call]
answers: [Q4, Q5, Q6, Q14]
needs: [meet]
---

# Champion

## What it means

Someone inside the buyer is selling for you. They reply quickly and fully. And they bring their own
colleagues in to back the work.

Bringing colleagues in is the real sign. Quick replies on their own are just warmth, not championing.

## In practice

A contact who normally replies in a day, in a paragraph or two, is now replying at the same speed or
faster and just as long, and over a couple of weeks has added three of their own colleagues to the
thread, including their procurement lead, with lines like "looping in the person who owns this". The
read: this contact is championing the work.

## For the build

Applies the shared reading rules in [`docs/reading-principles.md`](../../docs/reading-principles.md).

- Trigger: reply speed and length sit at or above this person's own baseline (own-rhythm, never a fixed
  number of hours). And they are actively adding their own colleagues to the thread and vouching for the
  work. Fast and long for them is warmth. Fast and long *and* recruiting their own people is what makes
  it champion.
- Confidence: high when fast, long and clearly recruiting colleagues all stack; softens to "engaged"
  when only the reply behaviour shows and nobody new is being pulled in.
- Needs: Meet. With it, advocacy spoken on a captured call counts, even before a
  new name reaches a thread. Without it, that advocacy is invisible: the conditional-content data gap
  [`meeting-history`](../assemblies/meeting-history.md) names. Advocacy on a phone call or on LinkedIn
  is invisible too (a data gap, named not faked). So a championing contact reads low until it surfaces
  in a connected channel.