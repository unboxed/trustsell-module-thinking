---
id: act-karen-slowing
order: 7
kind: act
signal: cooling-champion
signal_status: decided   # 22 September: worked from the records up, see ../docs/karen-hughes-pass.md
supporting: [loose-end, champion]   # one-sided and warmth-fading came off 22 September: neither fires on her records
supporting_status: decided
counts: [reply-gap-vs-own-rhythm, innocent-explanation-scan, who-starts-threads, promise-made-undelivered, fulfilment-scan, reply-speed-vs-own-rhythm, colleagues-looped-in-count, internal-advocacy-mentions]
counts_status: decided
about: [karen-hughes, bramley]
to: karen-hughes                # who the move reaches; one move per person at a time
arrives: 2026-09-16             # the day the tool puts it on the home
documents: [officer-time-one-pager]
widgets: [number, timeline]   # detail widgets, at most two. Each MUST resolve to ../../../widgets/*
widget_heads:
  number: "Quiet for"   # the head names the measure; the widget's label is the default
sure: "likely"
sure_because: "A pattern against her usual: fifteen working days since her last message, when she normally wrote every four or five. Why, only you can say."
held_words: "Once you have told me about the budget meeting."
when:
  mode: rhythm
  until: 2026-09-18
  words: "Any day this week."
watch:                        # what I watch for once you act; a then card arrives only if it comes
  - for: "Karen's reply"
    until: 2026-09-30
    then: act-karen-budget-holder
    otherwise: "I'll come back with a different reason to write, not the same one twice."
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

- Why now: fifteen working days since her last message, when she normally wrote every four or five, and you have a gift ready: the figures she asked for.
- She was your champion at Bramley. She used to answer within a day, opened nine of your twelve threads, brought three colleagues in, and put BOPS on the budget agenda herself.
- Since the meeting on 20 August she has written once, two lines on 26 August saying she would come back to you. The only thread since is yours. Nothing on record explains the quiet: no bounce, no auto-reply, one bank holiday.
- You promised her the officer-time figures on 14 July and again on 24 August. The one-pager was finished on 9 September and has been shared with nobody.
- Bramley is one of your thirty and she is the only door in. Your goal says move patiently, so give, don't nudge.

## Quiet for

- Now · 15 working days · since her last message
- Usually · 4 or 5 · working days between her messages

## Timeline

- March · You and Karen start writing
- 13 July · She asks for the officer-time figures
- 20 August · Budget meeting at Bramley, you sat in
- 26 August · Her last message, two lines
- Today · The figures are still not sent

## Sources

- gmail · Your mail with Karen, March to today: 47 messages on 12 threads, who wrote, when, how long.
- calendar · The demo on 15 April and "Budget prioritisation meeting, Bramley" on Thursday 20 August. Nothing since.
- drive, gmail · The officer-time one-pager, finished 9 September and shared with nobody, and her July email asking for it.
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
