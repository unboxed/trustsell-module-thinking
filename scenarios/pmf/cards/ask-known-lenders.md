---
id: ask-known-lenders
order: 10
kind: ask
signal: existing-commitments
signal_status: provisional   # mapped by reading the card, not yet confirmed
counts: [repeated-outgoings-to-one-payee, existing-commitments-on-record]
counts_status: provisional   # which numbers this quotes, not yet confirmed
about: [you]
arrives: 2026-09-22
documents: []
reply:
  module: field
  placeholder: "The names, however you write them. Ten is plenty to start."
actions:
  - label: "Tell Me"
    style: filled
    confirms: field
    says: "Thank you. I'll match payees against those names from now on, and show you what I find on the next file before I put it in a card."
  - label: "Not Now"
    says: "Okay. I'll keep saying 'the same payment to the same name' and leave you to recognise it."
phone:
  act: "Answer"
  act_does: open
  said: "Thank you. I'll show you what I find on the next file."
  done: "Thank you"
  done_text: "I've written the names down as who is in this market. From now on a repeated payment to one of them reads as a lender rather than as an unnamed payee, and I'll show you the first file I do it on before it reaches a card."
---

# Which lenders should I recognise on a statement?

I can see the same amount leaving an account to the same name every month. I cannot tell a lender from a landlord, and that is most of the value.

## Known so far

- On the files in front of me I can already pick out repeated outgoings: the same amount, to the same payee, period after period. That much is arithmetic and I do it now.
- What their own documents name as owed I also have, where a document names it.
- What is secured against them I can look up on the public register, and that gives me a party's name where there is a charge.

## What's missing

- The names themselves. A payment of the same amount every month to "NCF Servicing" is either a sixth lender or a van lease, and nothing I can reach tells me which. A register only helps where the borrowing was secured, and most of it is not.
- This is the one question in the trade that turns a number into a read: whether they already take money from five other people before they take it from a sixth.

## What your answer changes

- Once I have the names: a repeated payment to one of them reads as borrowing rather than as an unnamed payee, and it goes into what they already owe with the name attached rather than as "looks like a commitment".
- If you would rather not: nothing breaks. I go on saying "the same payment to the same name, period after period" and leave the recognising to you, which is what happens today.
- Either way I will never call it a commitment on repetition alone. A run of payments is a pattern, and a pattern gets asked about, not asserted.

## Where your answer is saved

- As the names in this market, against the advance. Editable, dated, and shown to you on the first file I use it on before it reaches a card.
