---
id: history-told
name: What I did, and what you did with it
source: told
icon: pencil
---

# What I did, and what you did with it
The tool's own history: every card it raised, and what you did with each one. Added on 22
September, the sixth told source. It is "told" in the one sense that matters here: it comes from
your side and no channel can fetch it. Nobody types it. The tool writes the first half as it
raises a card, and your taps and edits write the second: sent as it was, sent changed, not now,
not relevant and why, an Ask answered.

Four things stand on it and none had a record to stand on until now. **"Not the same reason
twice"**, which every watch on a card promises, needs to know what reason was given last time.
**Asking once**, story chapter 5, needs to know what was asked and answered. **Your voice** learns
most from the gap between a draft and what you actually sent, and the count that measures it
(`draft-to-sent-edit-distance`) had to find the draft in your mail. And **the settings the tool
adjusts by** (how much it explains, how often it brings you things, how far ahead it drafts) are
seeded once and refined from behaviour, and the behaviour they refine from is exactly this: what
you rewrote, what you skipped, what you took as it was. The cold account in
[`docs/purpose-read.md`](../docs/purpose-read.md) named it as the second thing the library had no
rung for; the reads that need it are named below and only one is wired.

The current tool holds half of it: a suggestion rejected with a reason in your own words, kept
and turned into memory. The rest, what was sent unchanged and what was edited, is not held
because nothing drafts yet.

This is raw data, not reading. A card's reason, a tap and an edit are facts; what they mean for
the next card is a read's job. Each record below is a lineage anchor; its id is the kebab-slug of
its label (`What you did` becomes `what-you-did`).

## Records

| Record | Field | Source |
|---|---|---|
| Card raised | the card, the read it rested on, and the day it arrived | the tool, when it raises one |
| Card raised | the reason it gave, in one line (the why-now) | the tool, when it raises one |
| What you did | sent as it was, sent changed, not now, not relevant, or answered | you, by tapping |
| What you did | when | the tool, at the tap |
| Reason given | the reason you picked (already knew, wrong person, not a target) or typed | you, at a not-relevant or a rejection |
| Edit | what changed between the draft and what went out | the tool, the sent message against its draft |
| Ask answered | which Ask, and that it was answered (the answer itself lands in the told record it belongs to) | you, by tapping or typing |

## In plain words

| Record | Plain name |
|---|---|
| Card raised | What I suggested |
| Edit | What you changed before sending |

## Who reads it

- [`counts/draft-to-sent-edit-distance.md`](../counts/draft-to-sent-edit-distance.md), under
  `voice`, for the edit. Wired on 22 September.
- Not yet wired, named so the joins can be made: a count over reasons given, for "not the same
  reason twice"; a count over Asks answered, for asking once; and the loop that refines the
  seller's settings from what they did, which the Profile module names and nothing writes.
