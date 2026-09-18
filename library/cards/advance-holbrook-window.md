---
id: advance-holbrook-window
order: 3
kind: act
label: Advance
signal: buying-intent
signal_status: provisional   # mapped by reading the card, not yet confirmed
counts: [budget-or-procurement-entered, accepts-meetings, where-they-start, how-long-quiet-vs-own-rhythm]
counts_status: provisional   # which numbers this quotes, not yet confirmed
person: neil-chapman
council: holbrook
documents: []
widgets: [timeline]   # detail widgets, at most two. Each MUST resolve to ../widgets/*
sure: "sure"
when:
  mode: dated
  words: "By 16 October: procurement window closes. Book this week."
  until: 2026-10-16
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
  hand: "Open in Mail"
  sub: "in your voice · nothing sends until you do"
  footer: "Nothing attached. Send from your own mail; I'll watch for his slots."
---

# Book the Holbrook follow-up

Their procurement window closes on 16 October. Neil Chapman is warm, and there is no meeting in either calendar.

## What I noticed

- Why now: five weeks to the window, and a meeting takes two to three to land in Neil's calendar. This week is the last comfortable one.
- Holbrook told you in July that anything for this year has to be in by 16 October. Nothing since has changed that.
- Neil's pattern: he books calls when you propose them, and rarely proposes himself. Waiting for him is waiting.
- You are also sending him the phasing note this week. Send that first; propose the meeting in the same breath or two days later.

## Timeline

- 14 July · Neil: the window for this year closes 16 October
- 3 August · Your last meeting with Holbrook
- Today · No meeting scheduled
- 16 October · The procurement window closes

## What I read

- Gmail: Neil, 14 July: "the window for this year closes 16 October".
- Your calendar: no meeting with Holbrook since 3 August, none scheduled.
- Your mail with Neil: who proposed each meeting. You, four of four.
- Your goal: partial adoption this year means inside that window.

## Not sure

- Whether the window is for a decision or for a signed order. Those are five weeks apart in practice.

## Then

- Once he accepts I'll prepare the meeting: what Holbrook has asked so far, where they stand, and the two things to leave the room with.

## The draft

Hi Neil,

You mentioned in July that anything for this year needs to be in before 16 October. With that in mind, would a 45-minute session in the last week of September work, to go through the partial rollout and what Holbrook would need from us for the paperwork?

Two or three slots that suit you and I'll book it.

Fede
