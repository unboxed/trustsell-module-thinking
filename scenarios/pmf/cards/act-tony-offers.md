---
id: act-tony-offers
order: 1
kind: act
signal: answer-came-back
signal_status: provisional   # mapped by reading the card, not yet confirmed
supporting: [loose-end]
counts: [answers-back, since-an-answer-landed, still-out-with-someone, told-them-since, promise-made-undelivered]
counts_status: provisional   # which numbers this quotes, not yet confirmed
about: [tony-prieto, corner-tire]
to: tony-prieto
arrives: 2026-09-21
documents: []
widgets: [timeline]
sure: "sure"
sure_because: "Four answers on the deal record since Friday, and nothing from you to Tony since."
when:
  mode: fresh
  words: "First thing. He has been waiting since Friday on news that already exists."
watch:
  - for: "Tony's reply"
    next: "If he picks one before Marcus has been through them with him, I'll tell you rather than let it run on."
reply:
  module: buttons
actions:
  - label: "Send the Text"
    style: filled
    opens: draft
  - label: "Not Now"
    says: "Okay. I'll raise it again tomorrow, because the answers are in and he does not know."
  - label: "Not Relevant"
    opens: reasons
reasons:
  - label: "Already Told Him"
    says: "Noted. I'll mark the answers passed on and stop raising them."
  - label: "Marcus Has It"
    says: "Understood. I'll take the offers as his to present and only raise what you owe Tony yourself."
  - label: "Not a Target"
    says: "Understood. I'll take this off the board and not raise it again unless you put it back."
draft:
  title: "Draft"
  hand: "Send"
  sub: "in your voice · sends only when you say"
  footer: "The news, and a time. The terms are Marcus's to walk him through."
phone:
  when: "First thing"
  act: "Send Text"
  act_does: send
  view: "View Draft"
  subject: "Your offers are in"
  said: "Sent. He knows they are in."
  done: "Sent to Tony"
  done_text: "I've marked the answers passed on. Marcus has the terms. If Tony picks one before that conversation happens, I'll tell you."
---

# Tell Tony Prieto his offers are in

Four answers came back on Corner Tire since Friday and he has heard none of them. Three offers and a decline, nothing still out.

## What happened

- Why now: the news already exists. He is not waiting on a funder, he is waiting on you, and that is the worst kind of wait to leave running.
- Avondale came back with two offers, Bayard with one. Northline declined on the industry.
- Nothing is still out. All three funders you went to on Friday have answered.
- You also told him on Friday you would come back with what the funders said, and nothing has gone since.
- The terms are Marcus's to present. What you owe Tony today is that they are in, and when he will see them.

## Timeline

- Friday 18 September · Out to three funders for $22,000
- Friday 18 September · You tell Tony you will come back with the offers
- Friday 18 September · Northline declines, the industry is not theirs
- Monday 21 September · Avondale answers with two offers, Bayard with one
- Since Friday · Nothing from you to Tony

## Sources

- crm · The four answers recorded against Corner Tire: three offers and one decline.
- sms · Your text to Tony on Friday: "I'll come back to you with the offers".
- sms · Nothing from you to Tony since, and nothing from him.
- people-told · Corner Tire and Auto, the deal you named, standing at offers in.

## Still unclear

- **Whether you have already told him by phone.** A call leaves nothing I can count, so I am reading "he has not heard" off your messages alone. If you rang him on Friday, say so and I will mark it passed on rather than raise it again.
- **Where your part ends and Marcus's begins.** He collects the offers and presents them, and your promise was to come back with them. I have written the draft as the news and a time rather than the terms, which is my reading of that line, not yours.

## What happens next

- Once it has gone I'll mark the answers passed on and the promise kept, and stop raising both. If Tony replies picking one before Marcus has been through them with him, I'll tell you rather than let it run on.

## The draft

Tony, your offers are in. Three of them, and one funder passed.

Marcus will go through the numbers with you today so you can compare them properly rather than off a text.

Sorry for the wait on this.

Fede
