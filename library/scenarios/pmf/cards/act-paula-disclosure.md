---
id: act-paula-disclosure
order: 2
kind: act
signal: disclosure-still-owed
signal_status: provisional   # mapped by reading the card, not yet confirmed
counts: [required-disclosures, disclosures-on-record, decision-language-used, your-price, cost-to-them-over-the-term]
counts_status: provisional   # which numbers this quotes, not yet confirmed
about: [paula-larkin, larkin-print, disclosure]
to: paula-larkin
arrives: 2026-09-21
documents: [disclosure]
widgets: [timeline]
sure: "likely"
sure_because: "Her words on Friday are on record. What must be said is not written down anywhere I can read."
when:
  mode: fresh
  words: "Before the contract comes back signed, not after."
watch:
  - for: "The signed contract"
    next: "If it comes back before the disclosure has gone, I'll say so plainly rather than let it pass."
reply:
  module: buttons
actions:
  - label: "Send the Disclosure"
    style: filled
    opens: draft
  - label: "Not Now"
    says: "Okay. I'll raise it again the moment the contract comes back."
  - label: "Not Relevant"
    opens: reasons
reasons:
  - label: "Already Sent"
    says: "Noted. I'll mark it on record and stop raising it."
  - label: "Not Required Here"
    says: "Understood. Tell me which rule I have wrong and I'll stop applying it to this kind of deal."
  - label: "Already Knew"
    says: "Fair. I'll stop telling you things you already know about this one."
draft:
  title: "Draft"
  hand: "Send"
  sub: "in your voice · sends only when you say"
  footer: "Attached: the disclosure. The shape of the cost is filled in. Kestrel's own figures are yours."
phone:
  when: "Today"
  act: "Send Disclosure"
  act_does: send
  view: "View Draft"
  subject: "The cost, in writing, before you sign"
  said: "Sent. It is on record now."
  done: "Sent to Paula"
  done_text: "The disclosure is on record against this deal, before the contract came back. If your firm has written rules about what it must contain, tell me and I'll check the next one against them."
---

# Put the cost in front of Paula Larkin before she signs

She accepted Kestrel's offer on Friday and the contract is out for signature. What the cost actually is should be in writing from you first, not discovered afterwards.

## What happened

- Why now: she has accepted and the contract is out. This is the last moment the disclosure is a courtesy rather than a correction.
- Her words on Friday were a decision, not a question: she named the offer she wanted and asked what happens next.
- Nothing on the thread puts the total cost, the term and the daily debit in front of her in writing.
- I can say what an advance costs: a factor rate between 1.25 and 1.49 of what is advanced, over three to twelve months, taken as a fixed debit every working day. That is the shape the disclosure has to fill.

## Timeline

- Friday 18 September · She accepts Kestrel's offer
- Friday 18 September · Contract goes out for signature
- Since Friday · Nothing in writing about the cost

## Sources

- gmail · Her message on Friday accepting the offer.
- gmail · Nothing since that states the cost in writing.
- organisation-told · What your firm says must be put in front of a buyer before they agree.
- offering-told · What you told me an advance costs: the rate band, the term and how it is debited.

## Still unclear

- **What your firm actually requires you to say.** The rules are yours to state and none are written down for me yet, so I am going on the shape of the product rather than on a rule. If your firm has a form of words, tell me and I will check every close against it instead of guessing.
- **What Kestrel actually offered her.** I reach what you told me an advance costs, so the disclosure goes out with the right shape: amount, total repayable, term, daily debit. The four figures on this deal are Kestrel's answer on Friday, and no read of mine reaches what a funder answered on a live deal. Those four are yours to fill.

## What happens next

- Once it has gone I'll record it against this deal, so nobody has to ask later whether it was sent. If the signed contract comes back and the disclosure has not gone, I'll say so plainly rather than let it pass.

## The draft

Hi Paula,

Before the contract comes back, I want the numbers in front of you in writing rather than buried in the agreement.

The attached sets out what you receive, what you repay in total, over how long, and what leaves the account each working day. Those last two are a fixed debit every working day across the term, not a monthly bill. If any of it is not what you understood on Friday, say so now and we will stop and go through it.

Nothing needs signing until you are happy with those four numbers.

Fede
