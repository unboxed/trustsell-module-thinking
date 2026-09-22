---
id: where-this-one-goes
module: 03-offerings
label: Where this one goes
blurb: Of the several things you sell, the ones this lead could go to, and the ones that would turn them away.
kind: opening
confidence: graded
inputs: [catalogue, offering-entry]
counts: [offerings-in-play, fit-factors-met, fit-factors-missed, cost-of-each-to-them]
answers: [V15]
needs: []
assumes: []
assumes_status: decided   # 22 September: tested at the fast end on people never contacted or refused before; each stood on told shapes and records alone and needed nothing of the sale
pull: People's lead situation, to match against each entry's fit-shape
---

# Where this one goes

## What it means

You sell more than one thing, and this lead does not suit all of them equally. The read says which
of them it could go to, which would turn it away, and why each.

It is [`fit-match`](fit-match.md) run across the shelf instead of once. That read judges one lead
against one fit-shape and names exactly where it falls short. This one runs it against every entry
in play and lines the answers up, so a lead that misses badly on one and cleanly meets another has
somewhere to go instead of being a poor fit full stop.

The shape it is written for is broader than a product list. Where you broker, resell or place, each
supplier's version is an entry of its own, and the question is which of them would take this buyer:
the lender whose box fits the trade, the one whose minimum is above what they need, the one who
will not touch this industry at all. Same read, and at that end of selling it is most of the work.

Two things it does not do. It does not say which you most want to sell: that is what you want
rather than what fits, and it belongs to the Brain along with how hard to push. And it never ranks
on what you earn. What you make on an entry is on record in the told pricing, and it is not among
the counts here, on purpose.

## In practice

Four entries are in play, the same product from four suppliers. The lead's trade rules out two of
them outright, one of the remaining two wants a minimum well above what the lead has asked for, and
the last meets every factor on its fit-shape. The read: "one of the four would take this, and it is
not the cheapest. Two are out on trade, one on size. Nothing here says they will say yes, only that
they are the ones worth asking."

## How it is worked out

Applies the shared reading rules in [`docs/reading-principles.md`](../docs/reading-principles.md).
Borrows People's lead situation, the same fact [`fit-match`](fit-match.md) leans on.

- Trigger: more than one offering is in play, and the lead's situation is matched against each
  entry's told fit-shape. The counting is how many entries there are, which factors each meets and
  misses, and what each would cost the buyer. The judgement is the same one `fit-match` makes,
  whether a miss is fatal or a caveat, made once per entry; the ordering that falls out of it is
  arithmetic, not a second opinion.
- Confidence: high where several entries have a fully told fit-shape and the lead is richly known,
  and where the answers separate cleanly. It softens where the shapes are thin, because then the
  entries are being told apart on the little that was told rather than on what is different about
  them, and softens again where two entries come out level, which is reported as level rather than
  broken by a tiebreak the tool invented.
- Needs: no source beyond the told entries and People's picture of the lead. Where an entry's
  fit-shape is empty it cannot be ranked at all and is named as untold rather than dropped, because
  a silently missing entry would look like a considered no (a told gap, named not faked).
- Assumes: nothing about the shape of the sale, so `assumes: []`. It is made on a first enquiry as
  readily as on a thread of years. What it needs is a shelf with more than one thing on it, which
  is not an assumption about a sale but a fact about the seller: with one entry there is nothing to
  choose between, and the read is not made rather than declaring the only thing you sell a winner.
- **Where it lives.** [`modules/03-offerings.md`](../modules/03-offerings.md) parked this with the
  Brain, on the grounds that ranking across offerings is intent. That was right about half of it.
  Which of them you most want to sell does depend on the goal and stays the Brain's, parked beside
  "several goals at once". Which of them would have this buyer at all does not: it is the told box
  against the lead's facts, the work a processor does before anyone is asked what they would like
  to sell. So the qualifying half is a read and lives in Offerings with the fit-shapes it stands
  on, and the wanting half is still the Brain's. *(My reason, not yet yours.)*
