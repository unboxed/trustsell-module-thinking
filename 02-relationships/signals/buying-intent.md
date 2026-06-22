---
id: buying-intent
label: Buying intent
blurb: A chat that has turned into a real buying discussion.
modes: [grow, plant]
kind: opening
confidence: graded
inputs: [conversation-history, person-history, meeting-history]
measures: [pricing-question-asked, timeline-or-start-question, proposal-or-trial-requested, budget-or-procurement-entered, decision-language-used]
answers: [Q14, Q19]
needs: [meet]
pull: Offerings' offering relevance, to anchor which offering the interest is about
---

# Buying intent

## What it means

A conversation has stopped being a chat and started being a purchase.

Where the warming read tracks the *pace* of a relationship lifting, this reads the *content*: the
questions people only ask when they are seriously weighing a buy. It is the read that says "this is a
live opportunity", and when it lands on a conversation that is not already inside a deal, it is what
prompts People to propose one.

It is most confident when several buying cues stack on the same conversation at once: a price question,
a question about timing or a start date, a request for a proposal, and procurement entering the room. A
single "what would this cost?" on its own is idle curiosity; several concrete, present-tense buying
questions together are the read. It also leans on Offerings to name which offering the interest is
about, so it reports a real purchase rather than guessing the product.

It reads the conversation across email, Slack and captured calls. Intent voiced on a call with
note-taking off is invisible, and a buyer who has quietly decided but said nothing shows nothing to
read.

## In practice

A conversation that had been all about features turns, over a week, to price, a start date and a
request for a proposal, and the buyer's procurement lead joins the thread. The read: "this has gone
from interested to buying."

## For the build

Applies the shared reading rules in [`docs/reading-principles.md`](../../docs/reading-principles.md).
Borrows Offerings (the `pull` field) to name the offering.

- Trigger: several intent cues stack on one conversation, measured against that conversation's own
  progression (a feature-led thread turning to price, timing and procurement). One stray cue, or a
  hypothetical ("if we ever did this"), does not count; concrete present-tense buying questions do.
- Confidence: high when price, timeline and procurement stack together; softer ("showing interest")
  when only one cue shows.
- Needs: Meet (captured-call content) to catch intent voiced aloud; without it, call-only intent is a
  data gap. If Offerings cannot confirm the offering, the read still sees the intent but cannot name
  what they want to buy (a supplier-told gap), and softens to "interested in something".
- Counts beneath it: the `measures` in the frontmatter (price question, timing question, proposal
  request, procurement entering, decision language).
