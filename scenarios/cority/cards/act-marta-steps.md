---
id: act-marta-steps
order: 6
kind: act
signal: steps-on-their-side
signal_status: provisional   # mapped by reading the card, not yet confirmed
supporting: [missing-people]
supporting_status: provisional   # the reads its other counts belong to, not yet confirmed
counts: [steps-the-buy-needs, steps-with-a-sign, steps-you-can-help-with, decision-maker-reached]
counts_status: provisional   # which numbers this quotes, not yet confirmed
about: [marta-olsen, calderbank, colin-hurst]
to: marta-olsen
arrives: 2026-09-22
documents: [security-answers]
held_by: act-marta-pricing
held_words: "After her question about price is answered. Two things in one week is one thing too many."
widgets: [people]
sure: "likely"
sure_because: "Four of their five steps show no sign on the record, and no sign is not the same as not done."
when:
  mode: fresh
  words: "This week, once the numbers have gone."
watch:
  - for: "Marta's answer about where they are"
    next: "Whatever she says, I'll write it down against Calderbank so nobody asks her twice."
reply:
  module: buttons
actions:
  - label: "Send the Offer"
    style: filled
    opens: draft
  - label: "Not Now"
    says: "Okay. I'll raise it again when something moves on their side, or in a fortnight if nothing does."
  - label: "Not Relevant"
    opens: reasons
reasons:
  - label: "Already Know Where They Are"
    says: "Then tell me and I'll write it down rather than ask her."
  - label: "Too Early"
    says: "Understood. I'll wait until they are discovering properly before I ask what has been done."
  - label: "Already Knew"
    says: "Fair. I'll stop telling you things you already know about this one."
draft:
  title: "Draft"
  hand: "Send"
  sub: "in your voice · sends only when you say"
  footer: "Offers two of the four. Asks about the rest without implying she has been slow."
phone:
  when: "This week"
  act: "Send Offer"
  act_does: send
  view: "View Draft"
  subject: "What would help from here"
  said: "Sent. Let's see what comes back."
  done: "Sent to Marta"
  done_text: "Whatever she tells you about where they are, I'll write it down against Calderbank so nobody asks her twice. I will not treat her silence about a step as the step not happening."
---

# Offer Marta Olsen help with the parts of her own process you can reach

A buy here takes five steps on their side. One shows a sign. You can help with two of the four that do not.

## What happened

- Why now: they have been discovering since June and nothing formal has started. On an eighteen-month sale this is the month where helping is cheap and chasing is expensive.
- What has shown a sign: a case for the spend. Marta quoted your lost-time figures back at you on 2 September, which is somebody building one.
- What has shown none: an IT discussion, budget approved, and a works council consultation. That is not the same as them not happening. Work inside Calderbank does not reach me.
- Two of the three are ones you said you can help with: the standing security answers, and the note on what other groups did about the works council. Budget is theirs.
- Colin Hurst holds the money and is on no thread. That is the other read on this card, and it is the one step nobody can help with until somebody names him.

## People

- Marta Olsen · VP Safety · Your champion. Building the case, on the evidence of 2 September
- Colin Hurst · Chief Financial Officer · Holds the money. On no thread
- Alan Beck · Head of IT · Not at Calderbank. Their IT lead has not appeared at all

## Sources

- gmail · Marta, 2 September, quoting your lost-time figures back at you.
- gmail, calendar · Every Calderbank thread and meeting. Nobody from IT or finance on any of them.
- people-told · What you told me a buy at this kind of group takes: five steps, and what each looks like when it has happened.
- drive · The standing security answers and the works council note, both on the shelf.

## Still unclear

- **Whether any of the three has already happened.** I can only say the record is silent, and the record is silent about most of what goes on inside a large organisation. I have written the draft as an offer and a question, not as a list of things she has not done.
- **Whether the works council is even a step at Calderbank.** It is on your list for this kind of group. Some have one and some do not, and nothing tells me which this is.

## What happens next

- Whatever she tells you about where they are, I'll write it down against Calderbank so nobody asks her twice.
- If she names Colin, I'll stop counting budget as a step with nobody attached to it.

## The draft

Hi Marta,

Now you have the numbers, a practical one.

By this point most groups your size are working through three things on their own side: their IT people looking at integration and security, the budget itself, and whatever consultation your works council needs. Two of those I can take off you. I have standing answers to the questions IT always asks, and a short note on what comparable groups did about consultation and how long it took them.

Would either help, and is there anything else in the way I have not thought of?

Fede
