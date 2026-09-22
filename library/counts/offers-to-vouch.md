---
id: offers-to-vouch
label: "A customer's offer to vouch for you"
used_by: [answer-gap]
over: [since-the-sale]
over_status: decided   # 22 September: written when a customer's records were run by hand and the offer on them reached no count
defined: true
counts: Each offer on record from a customer to speak to buyers for you, in their words, dated, and how many times it has been taken up since.
needs: [gmail#email-message, gmail#email-thread, slack#slack-message, sms#text-message, meet#transcript]
breaks: An offer is not a booking. It says the customer was willing on the day they said it, and the count keeps that day so the read can say how old the willingness is; whether they would still say it is on no record until somebody asks.
---

# A customer's offer to vouch for you
## What it counts

Each offer on record from a customer, a deal past the sale, to speak to buyers on your behalf:
their words, the day they said them, how the offer arrived (a message, a line in the workspace, a
call somebody captured), and how many times it has been taken up since. Taken up means a buyer was
put in front of them: a thread or an event with the customer and a buyer both on it, or a message
of yours to the customer naming a buyer and asking. One row per offer, with the days since it was
made and the count of uses beside it.

It exists because a customer who will speak is evidence, and until 22 September the shelf held only
documents. [`answer-gap`](../signals/answer-gap.md) reads it beside `proof-on-file`: a worry that
only a peer can carry ("will officers actually use it") has an answer on file when a customer has
offered to take the call, and the read grades it the way it grades a case study, by who speaks and
by how old it is. It was found by running one customer's records by hand: his offer had sat on a
thread for six months while five people at four councils asked, in different words, what a live
council's experience was, and every answer they got was yours.

It counts within [`since-the-sale`](../assemblies/since-the-sale.md), the deal since it completed,
which is where what a customer has said since is gathered.

## What it cannot see

Whether the offer still stands. Willingness said in March is a fact about March, and the count
keeps the date rather than pretending; the read that quotes it says a customer *has offered*, never
that they will, and the message that rests on it asks the customer before it promises the buyer. It
cannot see an offer made on a call nobody captured, or one made to a colleague's mailbox, and it
cannot see an offer in your own profile's prose ("its Head of IT will take reference calls"), which
is your word about theirs rather than theirs.
