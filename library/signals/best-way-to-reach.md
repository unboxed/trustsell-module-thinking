---
id: best-way-to-reach
module: 02-relationships
label: Best way to reach them
blurb: The channel where this person actually replies, and how fast.
kind: style
confidence: graded
inputs: [person-history]
counts: [replies-by-channel, reply-speed-by-channel, where-they-start, accepts-meetings]
answers: [Q9]
needs: [calendar, meet]
---

# Best way to reach them

## What it means

The plainest question before you get in touch: what is the best way to reach this person?

It sorts every back-and-forth with them by where it went. Then it scores each route by where they
actually reply, and how fast. Not where you happen to write, but where they answer.

One route usually wins by being quicker and surer for this person than the others.

## In practice

A contact has had eight emails from you and answered one, about six days later, but has answered all
five of your Slack messages within fifteen minutes and accepts and shows up to every meeting. Every
conversation they begin, they begin on Slack. The read: email them and you wait a week, Slack them and
they are back in minutes, and they always take a call.

## How it is worked out

Applies the shared reading rules in [`docs/reading-principles.md`](../docs/reading-principles.md).

- Trigger: each route is scored by its own reply rate and typical speed, plus where the person starts
  conversations and whether they accept meetings; a route wins by being faster and surer for this
  person than the others (own-rhythm across channels, never a fixed speed), and only once it carries
  enough back-and-forth to count.
- Confidence: high when one route clearly beats the rest; softens when two run close, where it reports
  both; thin and low when there is too little back-and-forth anywhere.
- Needs: Calendar and Meet, to count accepted invites and calls joined as a route;
  without them, calls and meetings drop out of the comparison and only the written channels are scored
  (a data gap, named not faked). Routes outside the connected accounts (phone, text, WhatsApp) cannot
  be seen at all, so the read says "of what I can see, this route wins".