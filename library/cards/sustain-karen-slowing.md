---
id: sustain-karen-slowing
order: 7
kind: act
label: Sustain
signal: cooling-champion
signal_status: provisional   # mapped by reading the card, not yet confirmed
supporting: [loose-end, one-sided, warmth-fading]
supporting_status: provisional   # the reads its other counts belong to, not yet confirmed
counts: [reply-gap-vs-own-rhythm, innocent-explanation-scan, promise-made-undelivered, who-starts-threads, reply-length-vs-own-rhythm]
counts_status: provisional   # which numbers this quotes, not yet confirmed
person: karen-hughes
council: bramley
documents: [officer-time-one-pager]
widgets: [number, timeline]   # detail widgets, at most two. Each MUST resolve to ../widgets/*
widget_heads:
  number: "Reply time"   # the head names the measure; the widget's label is the default
sure: "likely"
sure_because: "A pattern against her usual: 28 days, when she used to answer in a day. Why, only you can say."
held_by: ask-budget-meeting
when:
  mode: rhythm
  words: "Any day this week, once you have told me about the budget meeting."
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
  footer: "Attached: the officer-time one-pager. Edit anything, then send."
phone:   # what the phone says where it differs from the card above; moved from deck.html, 19 September
  when: "Any day this week"
  act: "Send Message"
  act_does: send   # send: the filled action sends the draft · tap: one tap, the draft is a separate try · open: raises the reply sheet
  view: "View Draft"
  said: "Sent. I will tell you when Karen replies."
  done: "Sent to Karen"
  done_text: "I've marked the July figures as sent. I'll watch for her reply, and if nothing comes in two weeks I'll bring a different reason to write."   # a stand-in for how the tool reports updating its nouns, not decided
  subject: "The officer-time numbers you asked for"
---

# Message Karen Hughes

Her replies have slowed since the budget meeting. She never got the officer-time figures she asked for in July.

## What happened

- Why now: 28 days since her last real reply, when she used to answer in about a day, and you have a gift ready: the figures she asked for.
- Before the budget meeting she replied in about a day and started 9 of your 12 threads.
- Since it: one two-line reply. No out-of-office, no leave, no meeting booked.
- Bramley is one of your thirty and she is the only door in. Your goal says move patiently, so give, don't nudge.

## Reply time

- Now · 28 days · since her last real reply
- Usually · about a day · her replies before the budget meeting

## Timeline

- March · You and Karen start writing
- July · She asks for the officer-time figures
- 20 August · Budget meeting at Bramley
- Today · The figures are still not sent

## Sources

- gmail · Your mail with Karen, March to today: 15 messages, who wrote, when, how long.
- calendar · "Budget prioritisation meeting, Bramley", Thursday 20 August. Nothing since.
- drive, gmail · The officer-time one-pager, and her July email asking for it.
- goal-told · Your list of thirty councils, and the goal you gave me.

## Still unclear

- Whether she is quiet because of the budget meeting or for a reason I can't see. What you tell me about the meeting settles most of it.

## What happens next

- Once you send it I'll watch for her reply. If nothing comes in two weeks I'll come back with a different reason to write, not the same one twice.

## The draft

Hi Karen,

You asked back in July for the officer-time numbers from East Marston and I never sent them. Here they are, one page. The short version: case admin down by about a third.

I imagine the budget round has been eating your weeks. No need to reply. If it is useful to talk through how East Marston phased it in, I am around whenever suits.

Fede

## The shorter draft

Hi Karen,

The officer-time numbers you asked for in July are attached, one page. I am sorry they took this long.

No need to reply.

Fede
