---
id: act-wes-payments
order: 6
kind: act
signal: payments-faltering
signal_status: provisional   # mapped by reading the card, not yet confirmed
counts: [agreed-payments-not-on-record, words-about-paying, money-in-by-period]
counts_status: provisional   # which numbers this quotes, not yet confirmed
about: [wes-halloran, halsey-freight]
to: wes-halloran
arrives: 2026-09-21
documents: []
widgets: [timeline]
sure: "likely"
sure_because: "Two debits are recorded as returned. Why, nobody has said."
when:
  mode: fresh
  words: "This week, and as a question rather than a chase."
watch:
  - for: "Wes's reply"
    next: "Whatever he says, I'll write it down as his own words and stop reading the gap as a verdict."
reply:
  module: buttons
actions:
  - label: "Send the Text"
    style: filled
    opens: draft
  - label: "Not Now"
    says: "Okay. I'll leave it and raise it again only if a third one comes back."
  - label: "Not Relevant"
    opens: reasons
reasons:
  - label: "Already Spoke"
    says: "Noted. Tell me what he said and I'll keep it rather than reading the gap myself."
  - label: "Not Your Job"
    says: "Understood. Collections sit with the funder, so I'll stop raising repayment on funded deals."
  - label: "Already Knew"
    says: "Fair. I'll stop telling you things you already know about this one."
draft:
  title: "Draft"
  hand: "Send"
  sub: "in your voice · sends only when you say"
  footer: "A question, not a demand."
phone:
  when: "This week"
  act: "Send Text"
  act_does: send
  view: "View Draft"
  subject: "Checking in on the debits"
  said: "Sent. I'll keep whatever he tells you."
  done: "Sent to Wes"
  done_text: "I've asked rather than assumed. Whatever he answers I'll keep as his words, and I will not read two returned debits as anything about him."
---

# Ask Wes Halloran what is happening with the debits

Two payments came back unpaid this month. That is a fact about an account, not about him, and the only way to know which it is is to ask.

## What happened

- Why now: two of this month's agreed debits are recorded as returned. A third would change the conversation from a question to a problem, and it is better to ask before that.
- He was funded in June over nine months, paid by a fixed debit every working day.
- Nothing he has said mentions money, late payment or a bad month. There is no word from him either way.
- His own later documents do not cover this month yet, so what actually went in and out is not on record anywhere I can see.

## Timeline

- June · Funded over nine months, daily debit
- This month · Two debits recorded as returned
- Since · Nothing said either way

## Sources

- crm · The deal record: funded in June, and two returned debits logged this month.
- offering-told · The advance's term and how it is paid: a fixed debit each working day.
- handover · No document from him covering this month.
- people-told · Halsey Freight, the deal you named, standing at repaying.

## Still unclear

- **Whether the money is actually a problem.** A returned debit can be a bank limit, a card change, a holiday, or a business in trouble, and nothing I hold tells those apart. Whether anything arrived after the return is on your bank or the funder's, and neither is a place I look.

## What happens next

- Once you have asked I'll keep his answer as his own words, and stop treating the gap as meaning anything by itself. If a third comes back before he replies, I'll raise it once more and say plainly that I still do not know why.

## The draft

Hi Wes,

Quick one, and not a chase. Two of the debits came back this month and I would rather ask than assume.

Is it a banking thing at your end, or is the daily amount landing at an awkward time? If it is the second, it is worth a conversation now rather than in a month.

Either way, tell me what is going on and I will work with it.

Fede
