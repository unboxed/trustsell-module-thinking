---
id: act-simon-intro
order: 17
kind: act
signal: warm-path
signal_status: provisional   # mapped by reading the card, not yet confirmed
supporting: [one-sided]
supporting_status: provisional   # the reads its other counts belong to, not yet confirmed
counts: [shared-contact-on-thread, intro-chain-length, mutual-contact-count, target-cold-to-you, times-you-chase]
counts_status: provisional   # which numbers this quotes, not yet confirmed
about: [simon-ward, ashworth]
to: simon-ward                # who the move reaches; one move per person at a time
arrives: 2026-09-18             # the day the tool puts it on the home
documents: []
sure: "likely"
sure_because: "Simon's word is on record, but how well he knows Nicola I can't see. LinkedIn isn't connected."
when:
  mode: rhythm
  until: 2026-09-18
  words: "Any day this week."
watch:                        # what I watch for once you act; a then card arrives only if it comes
  - for: "Simon's answer"
    next: "If he agrees, I'll draft the note he can forward to Nicola."
reply:
  module: buttons
actions:
  - label: "Ask Simon"
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
notsure:
  - label: "Well"
    says: "Then the ask is for an introduction."
  - label: "Barely"
    says: "Then the ask is for a mention, not an intro, and I'll redraft accordingly."
  - label: "Don't Know"
    says: "Then ask Simon that first. The draft does."
draft:
  title: "The message"
  hand: "Open in Slack"
  sub: "Slack, to Simon"
  footer: "Send it from Slack yourself. I don't send."
phone:
  when: "Any day this week"
  act: "View Message"
  act_does: view
  said: "Opened in Slack. Over to you."
  done: "Opened in Slack"
  done_text: "I've handed the message to Slack for you to send. If Simon agrees, I'll draft the note he can forward to Nicola."
---

# Ask Simon for an introduction

He knows Nicola Shaw, Head of Digital at Ashworth. Four notes from you have gone unanswered there; a warm path beats a fifth.

## What happened

- Why now: Simon mentioned Nicola two weeks ago in Slack and the memory is fresh. Ask while it is.
- Four cold notes to Ashworth since May, nothing back. The rest card for Ashworth says stop; this card says try the side door.
- Nicola is Head of Digital. The case-system question sits in her patch or next to it.
- Ashworth is on your thirty and marked cold. A warm path is the only thing that changes that.

## Sources

- slack · #partnerships, 2 September: Simon, "I know Nicola at Ashworth from the LGA event".
- gmail · Your four notes to Ashworth.
- web · Ashworth's leadership page.
- linkedin · LinkedIn is not something I can see yet, so I can't see how well Simon knows her. I'm going on his word.

## Still unclear

- How well Simon actually knows her. "I know Nicola from the LGA event" can mean a conversation or a handshake.

## What happens next

- If Simon agrees I'll draft the forwardable note he can send Nicola. If he doesn't know her well, I'll look for another path.

## The draft

Simon, you mentioned you know Nicola Shaw at Ashworth from the LGA event. I've written to them a few times about BOPS and had nothing back, which probably means wrong people.

How well do you know her? If well enough, would you be up for a two-line intro? I'll write the forwardable bit.
