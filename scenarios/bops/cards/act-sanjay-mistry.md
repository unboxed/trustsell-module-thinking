---
id: act-sanjay-mistry
order: 16
kind: act
signal: champion-went-dark
signal_status: decided   # decided 22 September, from the records up (docs/moreton-pass.md)
supporting: [missing-people, buying-intent]
supporting_status: decided   # missing-people for the one door; buying-intent for what Julie had asked
counts: [auto-reply-no-longer-with, was-once-active, rests-on-one-person, pricing-question-asked]
counts_status: decided   # run by hand on 22 September; the figures are in world/records.md
about: [sanjay-mistry, julie-barker, moreton]
to: sanjay-mistry                # who the move reaches; one move per person at a time
arrives: 2026-09-17             # the day the tool puts it on the home
documents: []
sure: "sure"
sure_because: "A fact on record: Julie's automatic reply, naming him."
when:
  mode: rhythm
  until: 2026-09-18
  words: "This week, while the handover is fresh."
watch:                        # what I watch for once you act; a then card arrives only if it comes
  - for: "Sanjay's reply"
    until: 2026-10-01
    otherwise: "I'll look for a second door into Moreton."
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
  footer: "Nothing attached. Edit anything, then send."
phone:
  when: "This week"
  act: "Send Message"
  act_does: send
  view: "View Draft"
  subject: "Picking up from Julie Barker"
  said: "Sent. I'll watch for Sanjay's reply."
  done: "Sent to Sanjay"
  done_text: "If he replies, I'll start a page on him and pick up Moreton where Julie left it. If not in two weeks, I'll look for a second door."
---

# Introduce yourself to Sanjay Mistry at Moreton

Julie Barker's automatic reply says she has left and names Sanjay for BOPS matters. Your only door there just changed hands.

## What happened

- Why now: the handover is fresh. Julie's mailbox sends BOPS matters to Sanjay, so a note from you now arrives as part of her handover, not out of the blue.
- Julie was real: 9 messages with her since April, a call, and she asked what it would cost in May. She said she would come back after the programme board met in September. That promise left with her.
- Everything at Moreton ran through her. Nobody else there has ever been on a thread, an invite or a call.
- Sanjay Mistry appears nowhere in your mail. Moreton's site lists him as Digital Programme Manager, so he is at least the right shape.
- Moreton stays a target. The goal is patient, but a departure is the one moment to move fast.

## Sources

- gmail · Julie's automatic reply this morning, 08:12: "I have left Moreton Borough Council. For BOPS matters please contact Sanjay Mistry."
- gmail · Your mail with Julie since April: 9 messages, and her question about price on 12 May.
- web · Moreton Borough Council's digital programme page, checked this morning.
- goal-told · Your list of thirty.

## Still unclear

- How much Julie told Sanjay. The draft assumes nothing.

## What happens next

- If Sanjay replies I'll start a page on him and pick up Moreton where Julie left it. If he doesn't within two weeks I'll look for a second door.

## The message

- opens with · Julie's automatic reply, and that it pointed you to him · auto-reply-no-longer-with
- points at · What Julie had: a conversation since April, a call, a price for a borough Moreton's size, and the offer of a short summary of where it got to · was-once-active, pricing-question-asked
- asks · Nothing on a first note. A summary if it is useful, or a fresh start, and which is his to pick · chases-since-their-last-reply, goal-told
- holds back · The figure you gave Julie, her promise to come back after the board, and any guess at how much she told him: none of it is his · pricing-question-asked, gmail

## The draft

Hi Sanjay,

Julie Barker's auto-reply pointed me to you. We had been talking since April about BOPS, a case-work tool for officers, and she had asked about pricing.

I don't want to assume any of that carries over. If it's useful, I can send a short summary of where we'd got to, or simply start again with whatever matters to you.

Fede
