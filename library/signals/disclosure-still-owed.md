---
id: disclosure-still-owed
module: 02-relationships
label: Something you must tell them first
blurb: A buyer is close to agreeing and something you are obliged to tell them is not yet on record.
kind: risk
confidence: graded
inputs: [compliance-fence, conversation-history, deal, price-position, decisions-so-far]
counts: [required-disclosures, disclosures-on-record, decision-language-used, your-price, cost-to-them-over-the-term, answers-back]
answers: [V18]
needs: [offering-told, crm]
assumes: [thread-under-way]
assumes_status: provisional
pull: Organisation's compliance fence, for what must always be said before a buyer agrees, and Offerings' price position, for the numbers the disclosure has to carry
---

# Something you must tell them first

## What it means

A buyer is moving to agree, and something you are obliged to tell them before they do is not yet
on the record between you.

The fence gates a draft: it stops a message that breaks a rule. This read looks at the thread
instead, and asks whether a rule of the must-say kind has been met yet on this deal. A message can
pass the fence and the deal can still be missing its disclosure, because nobody wrote the message
that carries it. This is the read that writes it, or holds the close until it is sent.

## In practice

A buyer has asked for the paperwork to sign. Your organisation's rules say the total cost over the
term and the charge for early settlement must be given in writing before agreement. Your sent
messages on this deal quote the monthly figure and nothing else. The read: "they are ready to sign
and you have not told them the total cost or the early settlement charge. Send those before the
paperwork, not with it."

It can say what those numbers are, and not only that they are missing. The deal names the offering,
the offering's told price says what it costs and over how long, and the arithmetic over the term is
already counted for the read that asks whether a buyer can carry it. A disclosure that says "the
cost is not on record" and leaves the seller to look it up is half a card. This one arrives with
the figures in the draft.

## How it is worked out

Applies the shared reading rules in [`docs/reading-principles.md`](../docs/reading-principles.md).
Borrows Organisation's compliance fence for the must-say rules.

- Trigger: the buyer's words on the thread have turned to agreeing (counting, the same decision
  language [`buying-intent`](buying-intent.md) reads) AND at least one required disclosure has no
  match in your sent messages or sent documents on the deal (counting). The one judgement is whether
  a message meets a rule in different words, and it is made by naming the passage rather than
  assuming it.
- What it fills the disclosure with, in this order. The terms actually answered on this deal,
  where a party who had to agree has come back with them
  ([`decisions-so-far`](../assemblies/decisions-so-far.md), counting). Failing that, the offering's
  own price and what it costs them across the term
  ([`price-position`](../assemblies/price-position.md), counting, the same two numbers
  [`can-they-carry-it`](can-they-carry-it.md) works). The rule says which numbers are owed; these
  say what they are. The order matters and is not a preference: a buyer is owed the cost of the
  thing they are agreeing to, and where a supplier has set terms for them, the shelf price is a
  description of the product and not the cost of their deal. Where neither reaches a figure, the
  read carries the shape and says plainly which part is missing.
- Confidence: high when the rule is a hard one in the fence and the thread carries the buyer's own
  words about agreeing; softens when the rule is marked soft, or when the buyer's readiness is one
  passing cue.
- Needs: no source beyond the fence, the thread and your told price. The fence itself is a told thing: if the
  organisation has told the tool no rules, there is nothing to check against and the read is silent
  (a told gap, named not faked). What a jurisdiction actually requires a seller to disclose, and
  where, is not written yet and is not the tool's to invent: it is a rule the organisation tells it.
  A disclosure made on an uncaptured call is invisible until you say so. Where the answers on this
  deal are in a system nobody has connected, the read falls back to the shelf price and says that
  is what it is quoting (a data gap, named not faked): the right numbers to a wrong deal are worse
  than an honest band.
- Assumes: a conversation already under way, because a disclosure is owed on a thread that is
  heading somewhere, and "already said" can only be read off what has been sent. On a first contact
  there is nothing to have said yet (an assumption gap, named not faked).
- This read points against a close, for the moment. It sits in People and not in Organisation on
  purpose: Organisation is optional and gates drafts, and this is a read of a thread's state. Where
  there is no organisation, there is no fence and no read, which is right: the rules are theirs to
  tell.
