---
id: act-rachel-promise
order: 3
kind: act
signal: loose-end
signal_status: decided   # 22 September: worked from the records up, see ../docs/westmoor-pass.md
supporting: []   # nothing else needed: a promise, a date, and nothing that closed it
supporting_status: decided
counts: [promise-made-undelivered, days-open-vs-own-rhythm, fulfilment-scan]
counts_status: decided
about: [rachel-gill, westmoor]
to: rachel-gill                # who the move reaches; one move per person at a time
arrives: 2026-09-16             # the day the tool puts it on the home
documents: [data-residency-note]
widgets: [open-items, documents]   # detail widgets, at most two. Each MUST resolve to ../../../widgets/*
sure: "sure"
sure_because: "A fact on record: your own words, on 8 September."
when:
  mode: fresh
  words: "Worth doing today. A promise ages badly."
watch:                        # what I watch for once you act; a then card arrives only if it comes
  - for: "Rachel's reply"
    next: "If she has more questions, I'll draft answers from the note."
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
  hand: "Send"
  sub: "in your voice · sends only when you say"
  footer: "Attached: the data-residency note."
phone:
  when: "Today"
  act: "Send Message"
  act_does: send
  view: "View Draft"
  subject: "The data-residency note"
  said: "Sent. The promise is kept."
  done: "Sent to Rachel"
  done_text: "I've marked the data-residency note as sent, so I'll stop raising it. If she comes back with questions, I'll draft answers from the note."
---

# Close the loop with Rachel Gill

You promised her the data-residency note on 8 September. It hasn't gone, and it answers the first question she asked you.

## What happened

- Why now: six working days since you wrote "I'll send the data-residency note this week", and that week ended on Friday. On this thread every turn so far came the same day or the next.
- Rachel is Head of IT at Westmoor, and data residency was her first question, the day she joined the thread. Nothing from you has reached the thread since that reply.
- The note exists and is current: last edited on 2 September, shared with nobody. Nothing is stopping this except that it slipped.
- Westmoor is at coalition, one of your two furthest-along councils with Felton. An unkept promise to the newest person in it costs more than anywhere else.

## Open items

- The data-residency note · You owe Rachel, promised 8 September · 6 working days

## Documents

- The data-residency note · Where the data lives and who can see it · Updated 2 September

## Sources

- gmail · Your reply to Rachel, 8 September: "I'll send the data-residency note this week".
- gmail · The Westmoor thread since: three messages in, two from her, none from you.
- drive · The data-residency note, last edited 2 September, shared with nobody.
- gmail · The Westmoor thread: Rachel's question of 8 September, where the data lives and who can see it.

## Still unclear

- Nothing here. A promise and a date.

## What happens next

- Once sent I'll mark the promise kept and stop raising it. If she replies with more questions I'll draft answers from the note.

## The draft

Hi Rachel,

I said I would send the data-residency note and then didn't. Sorry for the delay. It is attached: where the data lives and who can see it.

If anything in it is unclear, or you want it in the form your information governance team prefers, say so and I'll adjust.

Fede
