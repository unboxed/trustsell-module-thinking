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

The person on the other side is doing your selling for you inside their organisation.

The tool makes this read when a contact replies fast and at length for them, and keeps adding their own
colleagues to the thread and vouching for the work. Speed and length are measured against this person's
own baseline, never a fixed number of hours: a one-day reply is fast for someone whose norm is a week
and ordinary for someone who answers in minutes, and a three-line reply is long for a one-liner person
and curt for an essay-writer. The read leans hardest on the part that is not about reply behaviour at
all, the colleagues they loop in: advocacy is the work of bringing others to the table, which a fast
reply alone does not prove.

It is most confident when fast, long and clearly recruiting colleagues all stack together. It softens
to "engaged" when only the reply behaviour is there and nobody new is being pulled in.

It reads across email, Slack and captured calls as one, so vouching done out loud on a call counts as
advocacy even before a new name reaches a thread. What stays invisible is advocacy on an uncaptured
call, on a phone call outside the connected accounts, or on LinkedIn, where who vouches for whom never
touches your mail; an introduction made on those routes understates the person until it surfaces in a
channel the tool can see.

## In practice

A contact who normally replies in a day, in a paragraph or two, is now replying at the same speed or
faster and just as long, and over a couple of weeks has added three of their own colleagues to the
thread, including their procurement lead, with lines like "looping in the person who owns this". The
read: this contact is championing the work.

## For the build

Applies the shared reading rules in [`docs/reading-principles.md`](../../docs/reading-principles.md).

- Trigger: reply speed and length sit at or above this person's own baseline (own-rhythm, never a fixed
  number of hours), AND they are actively adding their own colleagues to the thread and vouching for
  the work. Fast and long for them raises it; fast and long for them and recruiting their own people is
  what makes it champion.
- Confidence: high when fast, long and clearly recruiting colleagues all stack; softens to "engaged"
  when only the reply behaviour shows and nobody new is being pulled in.
- Needs: Meet (the `needs` field) so advocacy spoken on a captured call counts even before a new name
  reaches a thread; without it, advocacy on an uncaptured call is invisible (the conditional-content
  data gap [`meeting-history`](../assemblies/meeting-history.md) names), as is advocacy on a phone call
  or on LinkedIn (a data gap, named not faked), so a championing contact reads down until it surfaces
  in a connected channel.
- Counts beneath it: the `measures` in the frontmatter (reply speed vs own rhythm, reply length vs own
  baseline, colleagues looped in count, internal advocacy mentions, advocacy voiced on call).
