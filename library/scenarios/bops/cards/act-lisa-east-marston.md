---
id: act-lisa-east-marston
order: 25
kind: act
signal: time-to-reconnect
signal_status: provisional   # mapped by reading the card, not yet confirmed
supporting: []
supporting_status: provisional   # the reads its other counts belong to, not yet confirmed
counts: [fresh-reason-to-write, how-long-quiet-vs-own-rhythm]
counts_status: provisional   # which numbers this quotes, not yet confirmed
about: [lisa-holmes, burnham, east-marston-case-study]
to: lisa-holmes
arrives: 2026-09-30             # a fortnight after the congratulations, as that card said
held_by: act-lisa-strategy
held_words: "A fortnight after your congratulations, if they went."
documents: [east-marston-case-study]
sure: "likely"
sure_because: "A pattern: a fortnight of quiet after a warm note, on her own slow rhythm."
when:
  mode: rhythm
  until: 2026-10-02
  words: "Any day this week."
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
  footer: "The East Marston case study attached."
phone:
  when: "Any day this week"
  act: "Send Message"
  act_does: send
  view: "View Draft"
  subject: "What page 12 looks like in practice"
  said: "Sent. I'll watch for Lisa's reply."
  done: "Sent to Lisa"
  done_text: "I've sent her the East Marston case study. I'll watch for her reply, and leave Burnham be if none comes."
---

# Show Lisa Holmes what page 12 looks like

A fortnight since your congratulations. Page 12 of her strategy commits Burnham to replacing legacy case systems by 2028. East Marston is fourteen months into doing that.

## What happened

- Why now: two weeks since your note about the strategy, as planned. Long enough not to look like a follow-up, soon enough that the strategy is still hers to talk about.
- Page 12 commits Burnham to "replacing legacy case systems by 2028".
- East Marston has been live for fourteen months, and case admin is down by about a third.
- Lisa rarely writes first. This gives her something she can use, and asks for nothing.

## Sources

- web · Burnham's "Digital Strategy 2026 to 2030", page 12.
- gmail · Your note to Lisa about the strategy, and nothing since.
- goal-told · East Marston, the customer, live fourteen months.

## Still unclear

- Whether she would rather see it in a call than in a document. She has never asked for either.

## What happens next

- I'll watch for her reply. If she asks how East Marston started, the phasing note is the answer.

## The draft

Hi Lisa,

Page 12 of the strategy stayed with me: replacing the legacy case systems by 2028. East Marston has been doing a version of exactly that for fourteen months, and their case admin is down by about a third.

Their case study is attached, in case it is useful while the plan takes shape. No agenda.

Fede
