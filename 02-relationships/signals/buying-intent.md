---
id: buying-intent
floor: signal
label: Buying intent
blurb: A chat that has turned into a real buying discussion.
inputs: [conversation-history, person-history, meeting-history]
measures: [pricing-question-asked, timeline-or-start-question, proposal-or-trial-requested, budget-or-procurement-entered, decision-language-used]
answers: [Q14, Q19]
modes: [grow, plant]
kind: opening
confidence: graded
pull: Offerings' offering relevance, to anchor which offering the interest is about
---

# Buying intent

A read on one conversation: it has stopped being a chat and started being a purchase. Where Warming
reads the *pace* of a relationship lifting, this reads the *content*, the questions people only ask
when they are seriously weighing a buy. It is the read that says "this is a live opportunity", and when
it fires on a conversation **not already inside a deal**, it is what prompts People to *propose* one.

| Floor | What People has |
|---|---|
| **Facts** (1) | the dated messages and captured calls on the thread with Council 14; what they ask; who is newly on it |
| **Counts** (2) | *pricing question:* "what would BOPS cost for our size?" · *timeline:* "could we be live before April?" · *proposal/trial ask:* "can you put a proposal together?" · *budget/procurement entered:* their procurement lead joined the thread · *decision language:* "if we went ahead, what's the rollout?" · *pull:* Offerings confirms these are about BOPS |
| **Opinion** (3) | **"This conversation has gone live on BOPS"**: several buying questions at once, with procurement now in the room · *confidence: graded* |

What surfaces is not a bare flag but *"Council 14 has gone from interested to buying: they've asked
price and timeline, requested a proposal, and pulled in procurement, all on the BOPS thread."* Every
clause walks back to a dated message, and the offering is named by the pull, not guessed.

**Threshold.** There is no fixed "asks about price = buying" line. One stray "what's the cost?" is idle
curiosity; the read fires when *several* intent cues stack on the same conversation, measured against
that conversation's own progression (a thread that was all features suddenly turning to price, timing
and procurement). A single hypothetical ("if we ever did this…") does not count; concrete,
present-tense buying questions do.

**Why it's trustworthy.** Most of the read is deferred counting: which question-types appear (price,
timeline, proposal, procurement) is matching over dated text, re-checkable. The one genuine judgement,
"is this real intent or tyre-kicking", is guarded by requiring more than one cue and by the pull, so
People does not decide *what* they're buying, it borrows Offerings to name the offering and only reads
the intent. The `confidence` is **graded**: high when price, timeline and procurement stack together;
softer to "showing interest" when only one cue shows.

**Where it can fail to reach ground.** Buying intent voiced on an **uncaptured call** is invisible: if
the pricing talk happened on a call with note-taking off, the thread shows only that you spoke, the
conditional-content **data gap** [`meeting-history`](../assemblies/meeting-history.md) names. A buyer
who has decided but stays quiet shows nothing to read. And if Offerings cannot confirm which offering
the conversation is about, the read still sees the intent but cannot name *what* they want to buy, a
**told-by-a-supplier gap** that softens it to "interested in something".
