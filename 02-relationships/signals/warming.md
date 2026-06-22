---
id: warming
label: Warming
blurb: A relationship picking up pace, with faster replies and more people joining in.
modes: [grow, plant]
kind: opening
confidence: graded
inputs: [person-history]
measures: [reply-gap-vs-own-rhythm, threads-they-started-this-period, new-people-from-their-side, reply-length-trend]
answers: [Q14, Q19]
needs: [meet]
---

# Warming

## What it means

The mirror of cooling, read upward.

One contact whose own rhythm is quickening: they answer sooner than they used to, they are the one
starting threads now, and more of their colleagues are turning up on the chain. A single read carrying
its evidence all the way down to a date in the inbox.

There is no fixed "replies within a day = warm" line. The lift is measured against this person's own
normal: their reply gap shrinking against their established rhythm, their share of started threads
rising above their usual share. One faster reply is noise; the read only holds when the move stays
across the period and more than one count points the same way. One count up could be a busy week; pace
and initiation and reach all up together is warming.

The "more of their people joining in" count leans on seeing who is on the chain. If a thread moves to a
channel the tool cannot read, a call or a side conversation off the connected accounts, the reach count
thins and confidence falls with it.

## In practice

A contact who normally takes a roughly 3-day median reply and starts about 1 thread in 6 now replies in
about 6 hours (well under their own norm), has started 4 of the last 6 threads, has pulled two new
colleagues onto the chain, and is writing longer replies, with the lift holding across the period
rather than one busy week. The read: "they're warming."

## For the build

Applies the shared reading rules in [`docs/reading-principles.md`](../../docs/reading-principles.md).

- Trigger: the reply gap shrinks against the person's own median, their share of started threads rises
  above their usual share, and the move holds across the period in more than one count (never a fixed
  number of days).
- Confidence: graded. High when pace, initiation and reach all turn together; softer to "maybe
  warming" when only one count moves.
- Needs: Meet (captured-call content) so contact and new names voiced on a call still count toward
  reach; when a thread moves off the connected accounts the reach count thins and confidence falls
  (a data gap, named not faked).
- Counts beneath it: the `measures` in the frontmatter (reply gap against own rhythm, threads they
  started this period, new people from their side, reply length trend).
