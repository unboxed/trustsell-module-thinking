---
id: act-marta-pricing
order: 2
kind: act
signal: loose-end
signal_status: provisional   # mapped by reading the card, not yet confirmed
counts: [ask-made-unanswered, days-open-vs-own-rhythm, fulfilment-scan]
counts_status: provisional   # which numbers this quotes, not yet confirmed
about: [marta-olsen, calderbank]
to: marta-olsen
arrives: 2026-09-21
documents: []
widgets: [open-items]
sure: "sure"
sure_because: "Her question of 24 August is on the thread, and nothing since carries an answer to it."
when:
  mode: fresh
  words: "Today. Four weeks is the point where it stops being a delay and starts being an answer."
watch:
  - for: "Marta's reply"
    next: "If she comes back with a number of her own I'll put it on record as what they can carry, and stop guessing from their accounts."
reply:
  module: buttons
actions:
  - label: "Send the Numbers"
    style: filled
    opens: draft
  - label: "Not Now"
    says: "Okay. I'll raise it tomorrow, because this one gets worse rather than older."
  - label: "Not Relevant"
    opens: reasons
reasons:
  - label: "Answered By Phone"
    says: "Noted. I'll mark it answered and stop raising it."
  - label: "Not Ready To Price"
    says: "Understood. Tell me what has to happen first and I'll watch for that instead."
  - label: "Already Knew"
    says: "Fair. I'll stop telling you things you already know about this one."
draft:
  title: "Draft"
  hand: "Send"
  sub: "in your voice · sends only when you say"
  footer: "The numbers, and no excuse for the four weeks."
phone:
  when: "First thing"
  act: "Send Numbers"
  act_does: send
  view: "View Draft"
  subject: "The numbers you asked for"
  said: "Sent. That one is closed."
  done: "Sent to Marta"
  done_text: "I've marked her question answered. If she comes back with a number of her own I'll put it on record as what Calderbank can carry."
---

# Answer Marta Olsen's question about price

She asked on 24 August what this costs. Four weeks have gone and nothing on the thread answers it.

## What happened

- Why now: four weeks. On this thread a turn usually closes inside three days, so this is not a delay any more, it is an answer, and the answer it gives is that she is not a priority.
- Her words on 24 August: "what sort of number are we talking about for a group our size?"
- Nothing since carries a number. No attachment, no follow-up, no meeting where it could have been said.
- She is your champion here and she asked a straight question. Whether price is the real issue is beside the point: the cost of not answering is that you stop being the person she comes to.

## Open items

- The price for a group their size · Marta asked, 24 August · 20 working days

## Sources

- gmail · Marta, 24 August: "what sort of number are we talking about for a group our size?"
- gmail · Every message on the Calderbank thread since. None of them carries a number.
- calendar · No meeting with Calderbank since 19 August, so it was not answered in one.

## Still unclear

- **Whether you answered it on a call.** A call leaves nothing I can count. If you gave her a number by phone, say so and I will mark it closed.
- **What number to give.** The range is yours and the discount room is yours. I have put the shape in the draft and left the figure for you, because a number sent by a tool is a number nobody stands behind.

## What happens next

- Once it has gone I'll mark her question answered and stop raising it.
- If she comes back with a number of her own I'll put it on record as what Calderbank can carry, which is worth more than anything I could work out from their accounts.

## The draft

Hi Marta,

You asked me back in August what sort of number a group your size is looking at, and I have taken far too long to come back to you.

For a group with your number of sites it lands in the range below, priced per site and per user, annually. I would rather give you that now and be wrong by a bit than keep being vague about it.

If it is far from what you had in mind, tell me and we will talk about what a first phase looks like instead.

Fede
