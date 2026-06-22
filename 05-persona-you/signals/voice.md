---
id: voice
label: Voice
blurb: 'How you sound in writing: your greeting, your length, your formality, read off what you actually send.'
modes: [nurture, grow, plant]
kind: style
confidence: graded
inputs: [writing-history]
measures: [greeting-and-signoff-pattern, sentence-length-vs-baseline, formality-by-relationship-stage, draft-to-sent-edit-distance, channel-register-shift]
answers: [Q23, Q26]
needs: [gmail, slack]
---

# Voice

## What it means

How you sound in writing, read off what you actually send rather than a style you fill in on a form:
your usual greeting and sign-off, how long your sentences run, how formal you are with a stranger
versus a peer, and, sharpest of all, the edits you make to the tool's drafts.

The read is measured against your own baseline, your usual greeting, your usual length, your usual
formality at each stage of a relationship, not an absolute. One unusual email is noise; the read firms
only when a pattern holds across many messages. The draft-to-sent edits are weighted most, because a
correction is you saying outright "not like that, like this". Told voice samples seed the read before
there is enough sent mail to stand on.

What another module gets is not a bare label but the read with its evidence: "writes warm but brisk,
opens with the first name, closes with 'Cheers', keeps it formal on a first touch and loosens once a
thread is going, and reliably strips exclamation marks." Every clause walks back to something you
actually sent, which is what lets the render sound like you.

It is most confident when many messages and edits agree, and softer when the read rests on a handful
of mails or a single sample. With little sent mail (a brand-new user) the read is thin and it leans on
your samples or asks, rather than inventing a voice. There is also a persona-shaped gap worth naming:
someone who sells only because their role needs it has sent mail that is mostly about their real job,
not selling, so their sales voice can be thin even when their everyday voice is rich. For them the
render leans more on the organisation's house voice (`04`) and on coaching, the persona-dependent blend
recorded in the module prose.

## In practice

Across the last batch of drafts, the user opens "Hi {first name}" in nine of ten mails, closes with
"Cheers", runs sentences around fourteen words, and on the drafts the tool wrote keeps cutting the
adjective, dropping the exclamation mark and shortening the sign-off. On Slack the same person is
terser than on mail, and fuller and more formal on a cold first touch than once a thread is going. The
read: "warm but brisk; formal with new contacts, looser once established; never an exclamation mark."

## For the build

Applies the shared reading rules in [`docs/reading-principles.md`](../../docs/reading-principles.md).
This is a `style` read, a non-state match to your own writing voice, not an own-rhythm decay read, so
"when it applies" is about having enough voice to read and "what it cannot see" is about thin or stale
samples.

- Trigger: a greeting, sign-off, length and formality pattern holds across many of your own messages
  (measured against your own baseline, never a fixed "uses please = formal" line), with the
  draft-to-sent edits weighted most because each correction states the preference outright.
- Confidence: high when many messages and edits agree; grades down toward a soft read when it rests on
  a handful of mails or a single seeded sample.
- Needs: Gmail and Slack (the `needs` field) for the sent mail, drafts and Slack messages the read is
  built from; without them the read is thin and leans on told samples or asks, rather than inventing a
  voice (a data gap, named not faked).
- Counts beneath it: the `measures` in the frontmatter (greeting and sign-off pattern, sentence length
  versus baseline, formality by relationship stage, draft-to-sent edit distance, channel register
  shift).
