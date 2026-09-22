---
id: act-holbrook-window
order: 14
kind: act
signal: deadline-they-gave
signal_status: decided   # 22 September: worked from the records up, see ../docs/holbrook-pass.md. Was buying-intent, which only softens to "showing interest" here: one money cue and one timing question. The date is his, and that is the read
supporting: [buying-intent, best-way-to-reach]   # time-to-reconnect came off 22 September: he is inside his usual quiet and nothing fresh is on the web
supporting_status: decided
counts: [dated-facts-in-their-words, time-to-their-date, budget-or-procurement-entered, timeline-or-start-question, accepts-meetings]
counts_status: decided
about: [neil-chapman, holbrook]
to: neil-chapman                # who the move reaches; one move per person at a time
arrives: 2026-09-18             # the day the tool puts it on the home
held_words: "Once the phasing note is with Neil."
documents: []
widgets: [timeline]   # detail widgets, at most two. Each MUST resolve to ../../../widgets/*
sure: "sure"
sure_because: "A fact on record: Neil wrote on 14 July that the window closes 16 October, and why."
when:
  mode: dated
  until: 2026-10-16
  words: "By 16 October: procurement window closes. Book this week."
watch:                        # what I watch for once you act; a then card arrives only if it comes
  - for: "Neil's answer to the invite"
    next: "Once he accepts, I'll prepare the meeting."
reply:
  module: buttons
actions:
  - label: "Send the Invite"
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
  - label: "A Decision"
    says: "Then a meeting in late September is enough and I'll pace the rest to it."
  - label: "A Signed Order"
    says: "Then we're already tight. I'll move this to today and draft the paperwork checklist too."
  - label: "Don't Know"
    says: "Then the invite asks him, plainly, and I'll adjust once he answers."
draft:
  title: "Draft"
  hand: "Send"
  sub: "in your voice · sends only when you say"
  footer: "Nothing attached. Once it goes, I'll watch for his slots."
phone:
  when: "By 16 October"
  act: "Send Message"
  act_does: send
  view: "View Draft"
  subject: "Before your October window"
  said: "Sent. I'll prepare the meeting once he accepts."
  done: "Sent to Neil"
  done_text: "I'll watch for his answer. Once he accepts, I'll prepare the meeting: what Holbrook has asked, and the two things to leave with."
---

# Book the Holbrook follow-up

Their procurement window closes on 16 October. Neil Chapman is warm, and there is no meeting in either calendar.

## What happened

- Why now: twenty working days to the window from Friday, and no meeting in either calendar. This week is the last comfortable one.
- Neil wrote on 14 July that "the window for this year closes 16 October. Anything not in by then is next year's money." The date is his, with his reason, and two months of the run-up have gone with one to go.
- Money and timing have both entered the conversation, once each: the window in July, and how a staged rollout works in August. That is interest, not yet a purchase; the date is what makes it urgent.
- Neil takes every meeting you propose, four of four, and has never proposed one. Waiting for him is waiting.
- The phasing note comes first and asks nothing. This is the ask, two days behind it, and it rests on his own date.

## Timeline

- 14 July · Neil: the window for this year closes 16 October
- 3 August · Your last call with Neil, the fourth
- 19 August · He asks how East Marston did it in stages; the phasing note answers it
- Today · No meeting scheduled
- 16 October · The window closes

## Sources

- gmail · Neil, 14 July: "the window for this year closes 16 October. Anything not in by then is next year's money."
- gmail · Neil, 19 August: how East Marston did it in stages. The one time timing or stages has come up from his side.
- calendar · Four calls since March, all proposed by you and accepted by him. None since 3 August, none scheduled.
- goal-told · Your goal: partial adoption this year means inside that window, and a patient tempo means one ask, on his date, not a chase.

## Still unclear

- Whether the window is for a decision or for a signed order. Neil will know.

## What happens next

- Once he accepts I'll prepare the meeting: what Holbrook has asked so far, where they stand, and the two things to leave the room with.

## The draft

Hi Neil,

You mentioned in July that anything for this year needs to be in before 16 October. With that in mind, would a 45-minute session in the last week of September work, to go through the partial rollout and what Holbrook would need from us for the paperwork? If the window is for a decision rather than a signed order, say so and I will pace it to that.

Two or three slots that suit you and I'll book it.

Fede
