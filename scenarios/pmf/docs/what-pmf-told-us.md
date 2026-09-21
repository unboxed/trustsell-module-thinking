# What PMF told us: the first-hand source for the second scenario

Read 21 September 2026 from the transcript of a workflow interview on 21 November 2025 with two
people from MyRM, the opportunity-management tool PMF (Premium Merchant Funding) sells on: its
product lead and its product manager. Both had worked with PMF for five years. Names are left out
on purpose. The transcript is in the user's research folder
(`sales-personas/research/interviews/inti-leyla-pmf.md`); this note keeps what matters for the
library and leaves the rest. Times are the transcript's. Everything under *What they said* is
theirs; everything under *What it means for the library* is mine and not yet confirmed.

[`docs/volume-questions.md`](../../../docs/volume-questions.md) was drawn from what brokers publish.
This is the first account from inside the trade, and it changes some of that doc's "inferred" rows
to first-hand.

## What they said

**Two spaces, and a hard line between them** (05:43 to 21:10). "Leads" are purchased lists: a phone
number, a name, sometimes a company, a state, an industry. Reps call, email and text hundreds or
thousands a day from spreadsheets and third-party tools (dialling, texting, email), outside the
CRM, because the CRM is not a campaigning tool and a spreadsheet is faster. The moment a merchant
says "yes, I need money" they become a hot lead; once they fill in and sign the application they
are an "opportunity", and that is where the CRM, the documents and the roles begin. "Excel would
not be able to do 1% of what is needed" past that point. The lead space is "super simple, three
channels, multiple platforms", and its one problem is reconciliation across them (47:21: "a 100%
problem", "a huge problem", the 360 view of text, calls and email on one person). Reps rotate
through sending platforms because they get banned from them (48:31).

**The numbers** (43:21 to 46:04). A thousand calls to one opportunity; one opportunity in fifty
funded; a good rep has one or two opportunities a day; most deals close, from "yes" to money on
the account, within 24 hours. Reps are not overwhelmed by opportunities and do not want fewer
leads ("no rep in the world will tell you I have too many leads"). What to do first is "not a
philosophy": the deal furthest along, because it is nearest to commission. "The one that is one
missing document from money, that is commission on the table."

**The roles** (32:38 to 38:19). PMF is a broker, a two-sided market: merchants who need money on
one side, funders (lenders) on the other, many of them, each with a specialism (an industry, a
credit band, the merchants a bank would refuse). The **rep** works the merchant until the offers
are in. The **processor** takes over from there: checks the documents are complete and correct,
works out which funders would take this merchant (credit score, industry, amount), submits to
them, collects their offers, and presents the offers, because from then on "it is a loan expert
speaking to you". Underwriting makes the deal happen. Neither interviewee was sure at exactly
which moment the processor takes over from the rep.

**What the merchant hands over** (30:43, 52:20 to 53:37). A link to a form on the web; the merchant
fills it in, signs it (a PDF the tool generates; special terms go by an e-signature service) and
uploads the documents: the signed application, and three bank statements for the last three
months. Later, stipulations: a contract with a mortgage company, a contract with another lender.
Documents "are often outdated, not correct, maybe a screenshot", and chasing them ("did you
provide three statements for the last three months, not from a year ago") should be an algorithm,
not a person. A live bank connection the merchant authorises (Plaid) would be "pure gold": accurate
figures at once, no documents.

**What is read inside** (52:20 to 55:02). Monthly recurring revenue for the last three months from
the statements; the credit score; liens; and "did you already borrow from five other lenders and
now I'm the sixth": the tool should "look for typical lender names on their bank statements so
they can decide this person already gets money from someone else". Then, once the basics are
automated, a read that a merchant will not be funded (a credit score nobody funds) so nobody
wastes the work.

**Offers, declines and time** (32:38, 55:02). Funders reply with offers ("$10,000 for one day at
19%") or declines "because some parameters are not correct for the person"; there may be ten
offers and a couple of declines on one deal. Time is everything: if a deal sits in a stage for
more than three hours someone should be told; if an offer has come in and the rep has not been
told, "raise alarms". "It is almost like optimising a factory."

**Compliance on outreach** (23:45 to 26:31). Texts in US financial sales cannot mention a loan, a
dollar amount or a product (MCA, line of credit); they need the merchant's written consent first;
they must introduce the sender and the company, state the intention, and carry the opt-out (STOP,
HELP). Complied with, a rep could send about 500 texts a day; they want to send 50,000. So reps
break the rules ("I can give you 50k tomorrow" becomes "50 C" to pass the filter), the most
effective messages are the ones that break them, and PMF is trying to enforce company-approved
templates. The financial industry is "the worst industry to be texting".

**Personalisation** (49:37 to 52:20). At the lead stage there is "no creativity": about fifty
characters of playground, and the only question is "do you need money?", answered by timing, not
trust ("call me in two months", "never call me again or I will sue", or "yes, today"). In email
there is a little more room, but "if you show me that you know too much about me it becomes
creepy super fast", and the most valuable thing to know (that a merchant is in financial trouble)
is confidential and cannot be had. "It's not about speaking the right language. It's super
pragmatic: will your business close at the end of the week?"

**Their tools.** MyRM for opportunities (stages, documents, offers, dialling, email; bulk text in
progress); Orum and Prospect Boss for dialling; SlickText and Textedly for texting; PandaDoc for
signatures; a chatbot trained on PMF's documents that knows what an MCA is and nothing about any
merchant. Wished for: Plaid, and APIs to every funder so submissions stop going by email.

## What it means for the library

*(My reading, not yet yours.)*

- **The scope line lands exactly where the trade draws its own.** The tool covers from a lead
  onwards (decided 20 September); PMF's "lead" is before that line and its "hot lead" is on it. So
  the second scenario begins at "yes, I need money", and the lead space, with its reconciliation
  problem and its 50,000 texts, is out of scope on the user's own decision and by the trade's own
  account of where the work gets hard. V1 to V3 and the cohort half of V6 stay out.
- **The seller's side has several people; the buyer's has one.** The rep and the processor split
  one deal, and nobody is sure where. That is the mirror of BOPS (one seller, several buyers), and
  it is what V4 (a colleague already in touch, written 21 September) and the story's chapter 2 ("how
  the work is split") are for. `several-people` still means the buyer's side; the missing word,
  a firm beside you, is what this scenario needs most.
- **The documents are known.** `world/documents.md` for PMF is: the signed application, three
  bank statements covering the last three months, and stipulations on request (a mortgage
  contract, another lender's contract). A document request carries a **required period** ("the
  last three months, not from a year ago"), which `handover#document-request` does not have yet
  and `missing-documents` cannot check; `periods-covered` is the count that would.
- **Reading inside a statement is what the trade already does by hand**, and the fifth pass's
  shape fits it: money in per period (their "monthly recurring revenue for the last three
  months"), and the same payment to a known lender's name month after month (their "look for
  typical lender names"). One thing the trade has that the library does not: a **list of known
  funders and lenders** to match payee names against. That is a told record (whose: the
  organisation's, or the offering's) and `repeated-outgoings-to-one-payee` should be able to lean
  on it. Credit score and liens are not in any document the merchant sends: they are the public
  records channel the map already names as open.
- **Outcomes exist here, with reasons.** A funder's decline "because some parameters are not
  correct" is exactly V16's "what was turned down last time on one like this, and why", and it is
  on record in the CRM per deal. So the shape for outcomes (step 3 of the plan) has a fetched
  twin in `salesforce#crm-record`, not only a told one: an offer, a decline and its reason, per
  funder, per deal.
- **The catalogue is the funders.** "Which of the things I can offer should this one go to" (V15)
  is, at PMF, which funder to submit to, and funders specialise by industry and credit band. The
  offering is one product (an advance) with many suppliers and terms, which is a different shape
  from several products. Step 4 should decide which shape the catalogue is before changing
  `goal.md`.
- **Tempo is hours.** A deal sitting three hours in a stage is late; an offer the rep has not seen
  is an alarm. The order of the day (what waiting costs) fits, but every `when` on a card is a
  day, and the story's chapter 7 is written in days. The scenario's `today` will need a time, or
  the cards will need hours. Out of scope for the library rungs; flagged for the cards and phone.
- **Consent is a record nothing holds.** A text needs the merchant's written consent first. Neither
  `sms.md` nor `handover.md` has a row for it, and `disclosure-still-owed` reads what must be said
  on a thread, not what must be held before one starts. The scenario's organisation rules will
  carry the forbidden words (loan, a dollar amount, a product name) and the required ones (who you
  are, why, STOP and HELP), and a consent row belongs on `sms.md` or the handover.
- **The fence and the pushing read are the trade's own problem.** The most effective messages are
  the ones that break the rules, and the tool's rule is that nothing goes out that the record
  cannot back. The scenario should carry at least one moment where the honest message is the
  slower one.
- **Two doors for a handover the channel does not name.** An e-signature service, and a live
  bank connection the merchant authorises, which hands over figures with no document at all.
  `handover.md`'s "arrived by" should admit both when the scenario needs them.
- **Personalisation is not the problem, insight is.** The user's own closing line in the interview
  ("insights rather than personalised messages") is the tool's shape already: a card is a prepared
  noun with its reasoning on the back. And "how much I know about you against how much I show
  you that I know" is rule 3 of *What is never read* on `handover.md`, said by the trade.
