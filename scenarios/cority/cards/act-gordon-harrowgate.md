---
id: act-gordon-harrowgate
order: 1
kind: act
signal: deadline-they-gave
signal_status: decided   # 22 September: worked from the records up, see ../docs/cority-pass.md. His date, in his own mail, with a reason; eight working days left of a five-week window
supporting: [stated-priorities]   # page 9, published by the group in June: what the questions are built on
supporting_status: decided
counts: [dated-facts-in-their-words, time-to-their-date, priorities-they-state, how-fresh-their-words-are]
counts_status: decided
about: [gordon-ellery, harrowgate]
to: gordon-ellery
arrives: 2026-09-21
documents: [lost-time-note]
widgets: [timeline]
sure: "sure"
sure_because: "Gordon gave the date himself on 25 August, and the commitment is on page 9 of their own report."
when:
  mode: dated
  until: 2026-10-02
  words: "By 2 October, when clarifications close."
watch:
  - for: "A clarification going in"
    next: "Once your questions are lodged I'll stop counting down to the second, and start counting to the tender close."
reply:
  module: buttons
actions:
  - label: "Send the Questions"
    style: filled
    opens: draft
  - label: "Not Now"
    says: "Okay. I'll raise it every day until 2 October, because after that the door is shut."
  - label: "Not Relevant"
    opens: reasons
reasons:
  - label: "Already Lodged"
    says: "Noted. Tell me what you asked and I'll watch for the answers instead."
  - label: "Not Bidding"
    says: "Understood. I'll take Harrowgate off the board and stop counting."
  - label: "Already Knew"
    says: "Fair. I'll stop telling you things you already know about this one."
draft:
  title: "Draft"
  hand: "Send"
  sub: "in your voice · sends only when you say"
  footer: "Their own words back at them, and two questions worth answering."
phone:
  when: "First thing"
  act: "Send Questions"
  act_does: send
  view: "View Draft"
  subject: "Two questions before the 2nd"
  said: "Sent. The window is used."
  done: "Sent to Gordon"
  done_text: "Once your questions are lodged I'll stop counting down to the 2nd and start counting to the tender close."
---

# Use Harrowgate's clarification window before it closes

Gordon gave you the date himself: clarifications close on 2 October. Eight working days, and nothing has been lodged.

## What happened

- Why now: eight working days to 2 October, and a month of the five-week window has already gone. This is their date, not mine and not your quarter's.
- Gordon's words on 25 August: "get anything you want asked in before the 2nd, after that we cannot answer".
- Their sustainability report, published in June, commits the group to halving lost-time injuries by 2029. That is their own commitment in their own words, on page 9, and it is what a clarification question should be built on rather than on your features.
- Nothing has been lodged. Your firm decided to bid on 3 September, the requirements went to your bid channel on 11 September, and nothing since mentions a question going back. The notice says formal questions go through the portal, which is why the draft offers to.

## Timeline

- June · Their sustainability report: halve lost-time injuries by 2029
- 25 August · Tender out. Gordon: get anything asked in before the 2nd
- 11 September · Requirements posted to your bid channel
- 2 October · Clarifications close

## Sources

- gmail · Gordon, 25 August: "get anything you want asked in before the 2nd".
- web · Harrowgate Energy sustainability report, June, page 9: halving lost-time injuries by 2029.
- slack · The bid channel: the requirements posted on 11 September, and nothing since about a question to send back.
- drive · Your note on what other groups did to halve lost-time injuries, and how long it took.

## Still unclear

- **Whether the date has moved.** Procurement dates slip and a slipped date looks exactly like the old one still standing. Gordon would probably tell you, and probably is not a date.
- **What the bid team wants asked.** I can see the requirements were posted and that nothing since mentions a question. Whether one was raised somewhere I cannot see, I do not know. What they would ask is theirs, and the two in the draft are the ones their own report suggests.

## What happens next

- Once your questions are lodged I'll stop counting to the 2nd and start counting to the tender close.
- If 2 October passes with nothing lodged I'll say so plainly rather than let it go quiet, and the answer from then on is that you are bidding without having asked anything.

## The message

- opens with · His date, in his words: before the 2nd. Their clock, not yours · dated-facts-in-their-words
- points at · Page 9 of their own report, and the note on what other groups did about the same number · priorities-they-state, lost-time-note
- asks · Two clarification questions, which is the one thing a clarification window is for, with the formal route offered · dated-facts-in-their-words, goal-told
- holds back · Your features, any date but theirs, and any hint that a question is a pitch · time-to-their-date, web

## The draft

Hi Gordon,

Before the 2nd, two questions, both from your own report rather than from our product sheet.

Page 9 commits the group to halving lost-time injuries by 2029. Are the requirements meant to be read against that target, or against the current reporting process as it stands? And is near-miss reporting in scope, given that is where most of the movement on that number usually comes from?

Happy to be told to put them through the formal channel instead.

Fede
