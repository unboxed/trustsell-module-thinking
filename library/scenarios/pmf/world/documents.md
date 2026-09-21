---
id: documents
about: the documents in the fiction. Here they are mostly the buyer's, not yours
---

# The documents

In the patient sale this file is the evidence shelf: the case study, the one-pager, the note you
attach to a message, all of it yours and all of it in Drive. **Here it is the other way round.**
Almost every document in this scenario is the merchant's, and it arrives through
[`channels/handover.md`](../../../channels/handover.md), not out of your own folder. A deal at this
end is not won by what you send. It is held up by what has not come back.

Each row is still a noun a card can be about, and a card that names one in `documents:` is saying
what to send. Only the last two are yours to send.

| Document | id | What it is | Dated |
|---|---|---|---|
| The signed application | signed-application | The form they fill in and sign, generated as a PDF. Everything the funders need about the business in one place | per deal |
| The three bank statements | bank-statements | Their business account for the last three months, one document per month. The figures the whole deal is read from | the last three months, not a year ago |
| The mortgage contract | mortgage-contract | A stipulation. Asked for only when a funder asks, and only on the deal that funder is looking at | as the contract stands |
| The other lender's contract | other-lender-contract | A stipulation. What they already owe somebody else, in that lender's own words | as the contract stands |
| The offer sheet | offer-sheet | What came back from the funders, side by side: how much, over how long, at what rate, what the daily debit would be | per deal, from the day the offers landed |
| The disclosure | disclosure | What you are obliged to put in front of them about the cost before they agree. What it must contain is the firm's to say, and is not written yet | per offer |

**The required period is the thing to notice.** "Three bank statements for the last three months"
is not one fact but two: the documents, and the stretch of time they have to cover. Until 21
September a handover request carried what you asked for and when you asked, and nothing that said
how far back it had to reach, so nothing could tell two months and August apart from three months
to date. The eleventh pass added it: `handover#document-request` carries the period it asks for and
`handover#handed-over-document` carries the stretch it covers, both on the envelope.

Bluebird Childcare is the deal in this world that turns on it, and
[`cards/act-renee-statements.md`](../cards/act-renee-statements.md) is what the field buys. Without
it the card could only say "two of three are in". With it, it says the one still out is August, and
asks for that by name rather than asking her to send everything again.
