---
id: buying-intent
module: 02-relationships
label: Talking about buying
blurb: A chat that has turned into a real buying discussion.
kind: deal-movement
confidence: graded
inputs: [conversation-history, person-history, meeting-history, deal]
counts: [pricing-question-asked, timeline-or-start-question, proposal-or-trial-requested, budget-or-procurement-entered, decision-language-used]
answers: [Q14, Q19]
needs: [meet]
assumes: [thread-under-way]
assumes_status: provisional
pull: Offerings' offering relevance, to anchor which offering the interest is about
---

# Talking about buying
## What it means

A conversation has stopped being a chat and started being a purchase.

The warming read tracks the *pace* of a relationship lifting. This one reads the *content*: the
questions people ask only when they are seriously weighing a buy. It is the read that says "this is a
live opportunity". When it lands on a conversation that is not yet in a deal, it is what prompts People
to propose one.

It leans on Offerings to name which offering the interest is about, so it reports a real purchase
rather than guessing the product.

## In practice

A conversation that had been all about features turns, over a week, to price, a start date and a
request for a proposal, and the buyer's procurement lead joins the thread. The read: "this has gone
from interested to buying."

## How it is worked out

Applies the shared reading rules in [`docs/reading-principles.md`](../docs/reading-principles.md).
Borrows Offerings' offering relevance to name the offering.

- Trigger: several intent cues stack on one conversation, measured against that conversation's own
  progression (a feature-led thread turning to price, timing and procurement). One stray cue, or a
  hypothetical ("if we ever did this"), does not count; concrete present-tense buying questions do.
- Confidence: high when price, timeline and procurement stack together; softer ("showing interest")
  when only one cue shows.
- Needs: Meet (captured-call content) to catch intent voiced aloud; without it, call-only intent is a
  data gap. If Offerings cannot confirm the offering, the read still sees the intent but cannot name
  what they want to buy (a supplier-told gap), and softens to "interested in something".
- Assumes: a conversation already under way, because the cues are read against that conversation's
  own progression. On a first contact there is no progression to read them against, so the read
  waits for the thread (an assumption gap, named not faked).
