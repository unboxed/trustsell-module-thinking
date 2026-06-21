---
id: voice
floor: signal
label: Voice
blurb: 'How you sound in writing: your greeting, your length, your formality, read off what you actually send.'
inputs: [writing-history]
measures: [greeting-and-signoff-pattern, sentence-length-vs-baseline, formality-by-relationship-stage, draft-to-sent-edit-distance, channel-register-shift]
answers: [Q23, Q26]
modes: [nurture, grow, plant]
kind: style
confidence: graded
---

# Voice

People's "infer, don't tag" pointed at you. Not a style you fill in on a form, but a read off what you
actually write: your usual greeting and sign-off, how long your sentences run, how formal you are with
a stranger versus a peer, and, sharpest of all, the edits you make to the tool's drafts. A single
signal carrying its evidence all the way down to something you really sent.

| Floor | What Profile has |
|---|---|
| **Facts** (1) | your sent emails and Slack messages; the drafts the tool wrote and the versions you sent instead; any voice sample you seeded |
| **Counts** (2) | *patterns:* "Hi {first name}" opens ~9 of 10 mails, "Cheers" closes most, sentences run ~14 words, first names from the first reply · *by stage:* fuller and more formal on a cold first touch, looser once a thread is going · *edit distance:* across your last drafts you cut the adjective, drop the exclamation mark, shorten the sign-off · *channel:* terser on Slack than on mail |
| **Opinion** (3) | **"warm but brisk; formal with new contacts, looser once established; never an exclamation mark"** · *confidence: graded* (firm where many messages and edits agree, soft where the writing is thin) |

What another module gets is not a bare label but the read with its evidence: *"writes warm but brisk,
opens with the first name, closes with 'Cheers', keeps it formal on a first touch and loosens once a
thread is going, and reliably strips exclamation marks."* Every clause walks back to something you
actually sent. That is the track-back, and it is what lets the render sound like you.

**Threshold.** There is no fixed "uses please = formal" line. The read is measured against *your own*
baseline: your usual greeting, your usual length, your usual formality at each stage of a relationship,
not an absolute. One unusual email is noise; the read firms only when a pattern holds across many
messages, and the **draft-to-sent edits** are weighted most, because a correction is you saying
outright "not like that, like this." Told voice samples seed the read before there is enough sent mail
to stand on.

**Why it's trustworthy.** Most of it is *deferred counting*: greeting frequency, sentence length, the
diff between a draft and what you sent, all deterministic and re-countable. The one genuine judgement,
turning those counts into "warm but brisk", is guarded by carrying its evidence and by leaning hardest
on your edits rather than on the tool's guesses. The `confidence` is **graded**: firm when many
messages and edits agree, softer when the read rests on a handful of mails or a single sample.

**Where it can fail to reach ground.** With little sent mail (a brand-new user) the read is thin, a
**data gap** named not faked: it leans on your samples or asks, rather than inventing a voice. There is
also a persona-shaped gap worth naming: someone who sells only because their role needs it has sent
mail that is mostly about their real job, not selling, so their *sales* voice can be thin even when
their everyday voice is rich. For them the render leans more on the organisation's house voice (`04`)
and on coaching, which is exactly the persona-dependent blend recorded in the module prose.
