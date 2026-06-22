---
id: best-way-to-reach
label: Best way to reach them
blurb: The channel where this person actually replies, and how fast.
modes: [plant, grow, nurture]
kind: style
confidence: graded
inputs: [person-history]
measures: [replies-by-channel, reply-speed-by-channel, where-they-start, accepts-meetings]
answers: [Q9]
needs: [calendar, meet]
---

# Best way to reach them

## What it means

The plainest question there is before you get in touch: what is the best way to reach this person?

The tool makes this read by sorting every back-and-forth with a contact by where it went, then seeing
which way of reaching them earns a reply. Not where you happen to have been writing, but where they
actually answer. People already gathers every email, Slack message, calendar invite and call into one
picture; this read scores each route by its own reply rate and speed.

There is no fixed "answers within a day means reachable" line. Each route is judged by its own reply
rate and speed, measured against this person rather than an absolute, and only once there is enough
back-and-forth on it to mean something. One lucky email reply is not a pattern; a dozen messages with a
steady fast answer is. One route wins by being faster and surer for this person than the others.

It is most confident when one route clearly beats the rest. When two run close it reports both rather
than forcing a single winner. It can only compare the routes that are connected: if someone really
lives on a phone call, a text or WhatsApp, none of which touch the connected accounts, their truest
route is invisible and the read says so. A contact with too little back-and-forth anywhere gets a thin,
low-confidence read rather than a guess.

## In practice

A contact has had eight emails from you and answered one, about six days later, but has answered all
five of your Slack messages within fifteen minutes and accepts and shows up to every meeting. Every
conversation they begin, they begin on Slack. The read: email them and you wait a week, Slack them and
they are back in minutes, and they always take a call.

## For the build

Applies the shared reading rules in [`docs/reading-principles.md`](../../docs/reading-principles.md).

- Trigger: each route is scored by its own reply rate and typical speed, plus where the person starts
  conversations and whether they accept meetings; a route wins by being faster and surer for this
  person than the others (own-rhythm across channels, never a fixed speed), and only once it carries
  enough back-and-forth to count.
- Confidence: high when one route clearly beats the rest; softens when two run close, where it reports
  both; thin and low when there is too little back-and-forth anywhere.
- Needs: Calendar and Meet (the `needs` field) to count accepted invites and calls joined as a route;
  without them, calls and meetings drop out of the comparison and only the written channels are scored
  (a data gap, named not faked). Routes outside the connected accounts (phone, text, WhatsApp) cannot
  be seen at all, so the read says "of what I can see, this route wins".
- Counts beneath it: the `measures` in the frontmatter (replies by channel, reply speed by channel,
  where they start, accepts meetings).
