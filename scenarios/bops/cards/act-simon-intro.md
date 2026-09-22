---
id: act-simon-intro
order: 17
kind: act
signal: warm-path
signal_status: decided   # decided 22 September, from the records up (docs/ashworth-pass.md): cold to you, and one bridge by his own word
supporting: [colleague-already-in-touch, enough-tries]
supporting_status: decided   # colleague-already-in-touch for Simon's contact on record and its age; enough-tries for the four notes. one-sided came off: it cannot apply to somebody who has never replied
counts: [target-cold-to-you, mutual-contact-count, shared-contact-on-thread, colleague-touches-on-record, times-you-chase, innocent-explanation-scan]
counts_status: decided   # run by hand on 22 September; the figures are in world/records.md. intro-chain-length came off: its own sources cannot see a link stated in the workspace
about: [simon-ward, nicola-shaw, ashworth]
to: simon-ward                # who the move reaches; one move per person at a time
arrives: 2026-09-18             # the day the tool puts it on the home
documents: []
sure: "a hunch"
sure_because: "Simon's word is on record; how well he knows her is a reading of one line."
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

He says he knows Nicola Shaw, Head of Digital at Ashworth. Four notes from you have gone unanswered there; a warm path beats a fifth.

## What happened

- Why now: Simon mentioned Nicola two weeks ago in Slack and the memory is fresh. Ask while it is.
- Four cold notes to Ashworth since May, nothing back, and nothing on record to explain the silence. The rest card for Ashworth says stop; this card says try the side door.
- Simon is the only person you deal with who says he is connected to anyone at Ashworth, and he said it in one line. Nobody sits on a thread with both of you.
- Nicola is Head of Digital. The case-system question sits in her patch or next to it.
- Ashworth is on your thirty and marked cold. A warm path is the only thing that changes that.

## Sources

- slack · #partnerships, 2 September: Simon, "I know Nicola at Ashworth from the LGA event".
- gmail · Your four notes to Ashworth, and nothing back.
- web · Ashworth's leadership page.
- goal-told · Your list of thirty, Ashworth marked cold.

## Still unclear

- How well Simon actually knows her. "I know Nicola from the LGA event" can mean a conversation or a handshake, and he gave no date.

## What happens next

- If Simon agrees I'll draft the forwardable note he can send Nicola. If he doesn't know her well, I'll look for another path.

## The message

- opens with · Simon's own words in Slack on 2 September, that he knows Nicola from the LGA event · colleague-touches-on-record
- points at · What you have tried: four notes to Ashworth since May and nothing back, so the ask is not idle · times-you-chase
- asks · How well he knows her. The introduction is asked only on the answer, and the forwardable note is offered as your work, not his · mutual-contact-count
- holds back · The note to Nicola itself, which is not written until he says yes, and any guess at why Ashworth is silent · slack, innocent-explanation-scan

## The draft

Simon, you mentioned you know Nicola Shaw at Ashworth from the LGA event. I've written to them a few times about BOPS and had nothing back, which probably means wrong people.

How well do you know her? If well enough, would you be up for a two-line intro? I'll write the forwardable bit.
