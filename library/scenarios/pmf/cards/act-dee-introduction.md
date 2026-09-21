---
id: act-dee-introduction
order: 9
kind: act
signal: customer-introduction
signal_status: provisional   # mapped by reading the card, not yet confirmed
counts: [names-they-have-given-you, still-owed-either-way, target-cold-to-you]
counts_status: provisional   # which numbers this quotes, not yet confirmed
about: [dee-whitlock, sandhill-diner]
to: dee-whitlock
arrives: 2026-09-23
documents: []
widgets: [timeline]
sure: "a hunch"
sure_because: "Nothing is outstanding either way. That she would give a name is a guess."
when:
  mode: rhythm
  words: "Any day. Nothing about this gets worse by waiting."
watch:
  - for: "A name from Dee"
    next: "If she gives one I'll check it is nobody you are already talking to before I do anything with it."
reply:
  module: buttons
actions:
  - label: "Send the Text"
    style: filled
    opens: draft
  - label: "Not Now"
    says: "Okay. I'll leave it. Nothing here goes stale."
  - label: "Not Relevant"
    opens: reasons
reasons:
  - label: "Too Soon"
    says: "Noted. Tell me how far into a repayment you like to ask and I'll wait that long."
  - label: "Never Ask Customers"
    says: "Understood. I'll stop raising introductions entirely."
  - label: "Already Asked"
    says: "Noted. I'll mark it and stop raising it."
draft:
  title: "Draft"
  hand: "Send"
  sub: "in your voice · sends only when you say"
  footer: "A question she can say no to."
phone:
  when: "Any day"
  act: "Send Text"
  act_does: send
  view: "View Draft"
  subject: "A favour, if it is an easy one"
  said: "Sent. I'll watch for a name."
  done: "Sent to Dee"
  done_text: "If she gives a name I'll check it against everyone you are already in touch with before doing anything with it, so nobody gets approached twice."
---

# Ask Dee Whitlock if she knows anyone

She has been paying daily since February without a miss, and there is nothing outstanding between you in either direction. That is the only moment this question is fair to ask.

## What happened

- Why now: nothing is owed either way. She has not asked you for anything and you are not waiting on anything from her, which is what makes this a favour rather than a collection.
- She was funded in February over six months and has paid without a miss.
- She answers texts within the hour, so asking costs her almost nothing.
- No name has come from her so far, so this is a first ask rather than a repeat.

## Timeline

- February · Funded over six months, paying daily
- Since · Nothing missed, nothing outstanding either way
- Now · Near the end of the term, and still paying

## Sources

- crm · The deal record: funded in February, and how it has run since.
- offering-told · The advance's term and how it is paid.
- people-told · Sandhill Diner, the deal you named, standing at repaying.
- gmail · No introduction from her on record.

## Still unclear

- **Whether she has anyone to give.** A one-owner business knows other one-owner businesses, but knowing them and being willing to put your name to them are different things, and nothing I hold says which this is.
- I will never answer this question from anything she handed over. A name on a bank statement is not an introduction, and I do not read her documents for who she pays.

## What happens next

- If she gives a name I'll check it against everyone you are already in touch with before doing anything with it, so nobody is approached twice. If she says she would rather not, I'll leave it and not ask again.

## The draft

Hi Dee,

No chasing, this one is a favour and an easy no.

Yours has run exactly the way these are supposed to, which is not true of every one of them. If anyone you know is in the position you were in back in February, I would rather they talked to someone who will tell them when not to do it.

If nobody springs to mind, forget I asked.

Fede
