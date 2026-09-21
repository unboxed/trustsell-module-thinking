---
id: act-errol-application
order: 4
kind: act
signal: buying-intent
signal_status: provisional   # mapped by reading the card, not yet confirmed
counts: [decision-language-used, timeline-or-start-question]
counts_status: provisional   # which numbers this quotes, not yet confirmed
about: [errol-danning, mercer-dental]
to: errol-danning
arrives: 2026-09-21
documents: []
sure: "a hunch"
sure_because: "He said yes on a text I cannot read. I am going on your note of it."
when:
  mode: fresh
  words: "Today. A yes on Friday is cold by Wednesday."
watch:
  - for: "The signed application"
    until: 2026-09-23
    next: "Once it is signed I'll start asking for the statements that go with it."
    otherwise: "If nothing is signed by Wednesday I'll say so once and then stop."
reply:
  module: buttons
actions:
  - label: "Send the Link"
    style: filled
    opens: draft
  - label: "Not Now"
    says: "Okay. I'll leave it and raise it again only if something changes."
  - label: "Not Relevant"
    opens: reasons
reasons:
  - label: "Already Sent"
    says: "Noted. I'll watch for the signed form instead of asking you to send it."
  - label: "He Cooled Off"
    says: "Noted. I'll take the yes off the board rather than keep counting from it."
  - label: "Not a Target"
    says: "Understood. I'll take this off the board and not raise it again unless you put it back."
draft:
  title: "Draft"
  hand: "Send"
  sub: "in your voice · sends only when you say"
  footer: "One link, one minute."
phone:
  when: "Today"
  act: "Send Text"
  act_does: send
  view: "View Draft"
  subject: "The form, while it is quick"
  said: "Sent. I'll watch for the signed form."
  done: "Sent to Errol"
  done_text: "I'll watch for a signed application until Wednesday. If nothing comes I'll say so once and then leave it rather than chase a yes that has gone cold."
---

# Get the form in front of Errol Danning today

He said yes on Friday afternoon and nothing has happened since. At this tempo a yes with no form behind it is the commonest way a deal quietly dies.

## What happened

- Why now: it is the first working morning since he said yes, and nothing has been sent, filled in or signed. Every day from here the yes is worth less.
- He has not been sent the form. There is no application against this deal and no request for one.
- Nothing has come back from him since Friday either.
- The deal stands at interested, which is the rung that means a yes and nothing more.

## Sources

- gmail · No mail to or from Errol at all.
- people-told · Mercer Dental, the deal you named, standing at interested, and your note that he said yes on Friday at 16:40.

## Still unclear

- **What he actually said.** He said it by text, and a text conversation is not something I can read: nothing I gather reaches your messages. I am going entirely on the line you wrote down, so "he said yes" is your word and not my reading. If the texts were something I could see, this card would be a good deal surer than a hunch.

## What happens next

- I'll watch for a signed application until Wednesday. If it comes I'll start asking for the statements that go with it. If nothing is signed by Wednesday I'll say so once, and then leave it rather than chase a yes that has gone cold.

## The draft

Hi Errol,

Good to get your yes on Friday.

Here is the form. It takes about a minute and it is the thing that lets me actually go and get you numbers rather than talk about them. Once it is in, I will need three months of business bank statements and then it goes straight out.

Any problem with it, ring me rather than wrestle with it.

Fede
