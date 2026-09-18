---
id: sustain-rachel-promise
order: 5
kind: act
label: Sustain
signal: loose-end
signal_status: provisional   # mapped by reading the card, not yet confirmed
counts: [promise-made-undelivered, days-open-vs-own-rhythm, fulfilment-scan]
counts_status: provisional   # which numbers this quotes, not yet confirmed
person: rachel-gill
council: westmoor
documents: [data-residency-note]
widgets: [open-items, documents]   # detail widgets, at most two. Each MUST resolve to ../widgets/*
sure: "sure"
when:
  mode: fresh
  words: "Worth doing today. A promise ages badly."
reply:
  module: buttons
actions:
  - label: "Send the Note"
    style: filled
    opens: draft
  - label: "Not Now"
    says: "Okay. I'll leave it and raise it again only if something changes."
  - label: "Not Relevant"
    opens: reasons
reasons:
  - label: "Already Knew"
    says: "Fair. I'll stop telling you things you already know about this one, and try to notice earlier next time."
  - label: "Wrong Person"
    says: "Noted. I'll stop raising this person for this and look for who it should be."
  - label: "Not a Target"
    says: "Understood. I'll take this off the board and not raise it again unless you put it back."
draft:
  title: "Draft"
  hand: "Open in Mail"
  sub: "in your voice · nothing sends until you do"
  footer: "Attached: the BOPS data residency note."
---

# Close the loop with Rachel Gill

You promised her the data-residency note on 31 August. It is two weeks later and it hasn't gone.

## What I noticed

- Why now: it is two weeks since you wrote "I'll send the data-residency note this week", and you haven't. Every day makes the next email harder.
- Rachel is Head of IT at Westmoor. Data residency is the first thing IT leads ask, and she asked it in her second message.
- The note exists and is current. Nothing is stopping this except that it slipped.
- Westmoor is your most advanced deal. An unkept promise to the newest person in it costs more than anywhere else.

## Open items

- The data-residency note · You owe Rachel, promised 31 August · 14 days

## Documents

- The data-residency note · Where the data lives and who can see it · Updated 2 September

## What I read

- Gmail: your message to Rachel, 31 August: "I'll send the data-residency note this week".
- Gmail: no message from you to Rachel since.
- Drive: "BOPS data residency", updated 2 September.
- The Westmoor thread: Rachel's question of 9 September.

## Not sure

- Nothing here. A promise and a date.

## Then

- Once sent I'll mark the promise kept and stop raising it. If she replies with more questions I'll draft answers from the note.

## The draft

Hi Rachel,

I said I would send the data-residency note and then didn't. Sorry for the delay. It is attached: where the data lives, who can see it, and how it leaves if you ever want it to.

If anything in it is unclear, or you want it in the form your information governance team prefers, say so and I'll adjust.

Fede
