---
id: goal
today: 2026-09-21
seller: you
offering: [advance-avondale, advance-kestrel, advance-northline, advance-bayard]   # what is sold: one product, four funders, one entry each
ladder: [interested, applied, submitted, offers-in, accepted, funded, repaying, coming-round-again]
connected: [sms, web-form, handover, crm, gmail, web]   # what you have plugged in; a channel left out is not connected
---

# The goal, in your words

Place **merchant cash advances**. You are a broker: businesses that need money on one side, funders
on the other, and your job is to get one to the other before somebody else does. A lead comes in
from a form on your site, from a list somebody else worked, or from a text that finally got an
answer. The moment an owner says "yes, I need money" the work starts, and most of it is done inside
a day.

One owner per business, so there is nobody else to win over on their side. The people to work with
are on **your** side: you take the merchant as far as the offers, and a processor takes it from
there, because from then on it is a loan expert speaking to them.

About **fifteen live deals** at any time, at every stage of the ladder. A good week is two funded.

Tempo: hours. A deal that has sat in one stage since this morning is late, and an offer that has
come in and not been passed on is worse than late.

## Today

Monday 21 September 2026. Every `when` on a card is relative to this date.

The tempo here is hours and the library's dates are days. Nothing in `world/` needs a clock yet,
because a world holds no cards; a card at this end would. It is flagged in
[`docs/what-pmf-told-us.md`](../docs/what-pmf-told-us.md) rather than solved here.

## The ladder

Where a deal stands, in order: interested, applied, submitted, offers in, accepted, funded,
repaying, coming round again.

The first six are the trade's own stages. **Interested** is an owner who has said they need money
and nothing more. **Applied** is the signed application and the documents that go with it.
**Submitted** is the processor sending it to the funders who would take this one. **Offers in** is
what came back, offers and declines with their reasons. **Accepted** is the one they chose.
**Funded** is money on their account, which at this end is usually the same day.

The last two rungs are past the sale, and they are the point of this scenario. **Repaying** is a
customer with a live advance being debited daily or weekly. **Coming round again** is one whose
advance is far enough through that the conversation starts over. The library's reads stop at the
signature today, so a ladder that stops there could never show the hole
([`docs/coverage.md`](../../../docs/coverage.md), the after-the-sale family).

## What is connected

SMS, the web form, what the buyer hands over, the CRM, Gmail and the open web, listed as
`connected:` above. Four of those are plugged in for the first time by this scenario: nothing in
the patient sale used them.

Text is the main way you talk to an owner, so **SMS** carries most of the conversation. The **web
form** is where a lead says in their own words what they want and how soon. **What the buyer hands
over** is the signed application, the bank statements and whatever stipulation a funder asks for
later; it is how this sale is qualified at all. The **CRM** is where the deal, its stage and the
funders' answers live, and it is the record your processor works in as much as you do.

**Calendar, Meet, Drive and Contacts are not connected.** There are no meetings to read at this
end: the deal happens on the phone, by text, and in the CRM, and the address book is the CRM's.
**LinkedIn is not connected** either, and matters less here than it does in a patient sale: there
is one owner and no coalition to map. **Slack is not connected**, which is a real gap rather than
a shrug, because the rep and the processor hand a deal between them and the tool cannot see the
handover being talked about.

## What you are selling

One product, an advance against future takings, from any of several funders. The `offering:` above
is four ids, one per funder, and that is the catalogue decision of 21 September working: a thing
you sell is one thing on one set of terms, so the same advance from Avondale and from Kestrel is
two entries, because they are what you actually choose between
([`docs/library-format.md`](../../../docs/library-format.md), *The catalogue*).

| Offering | id | Who supplies it | What their box takes |
|---|---|---|---|
| Advance, Avondale | advance-avondale | avondale-capital | Restaurants and retail, weaker credit, $10,000 to $60,000, same-day answer |
| Advance, Kestrel | advance-kestrel | kestrel-funding | Any industry, good credit only, $75,000 upwards, slower and cheapest |
| Advance, Northline | advance-northline | northline-advance | Trucking, freight and plant, two years in business |
| Advance, Bayard | advance-bayard | bayard-funding | Under $25,000, almost anyone, the dearest money on the shelf |

Each funder's box is that entry's told fit-shape, which is what
[`signals/where-this-one-goes.md`](../../../signals/where-this-one-goes.md) reads to say which of
the four a merchant should be submitted to.
[`cards/act-curtis-funder.md`](../cards/act-curtis-funder.md) is that read as a card. The pitch is the same on all four, because the product
is: that repetition is the price of this shape, and
[`docs/library-format.md`](../../../docs/library-format.md) says so rather than hiding it.

What [`told/offering-told.md`](../../../told/offering-told.md) calls Pricing, filled in for an
advance. The price band is the shelf's; each entry narrows it to its own funder's:

| Told field | What you would say |
|---|---|
| price | $10,000 to $250,000, priced as a factor rate between 1.25 and 1.49 of the amount advanced |
| discount room | None of it is yours to give. The rate is the funder's; what you can move is your own commission, one to three points |
| term (how long it runs for) | Three to twelve months, set by the funder against what the takings will carry |
| how it is paid (once, or how often over the term) | A fixed debit from the business account every working day, or once a week for a longer term |

The term and how it is paid are the two fields added on 21 September, and they are what
[`signals/can-they-carry-it.md`](../../../signals/can-they-carry-it.md) waits on. At this end they
are never empty: a rate with no term is not an offer anybody could accept.
