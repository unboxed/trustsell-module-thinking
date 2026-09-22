---
id: offering
about: what the tool holds about the thing you sell, as the product's own profile would carry it
---

# The offering, as the tool holds it

Written on 22 September, after reading the tool's own design (`trustsell-adk-architecture`).
The tool holds one profile per offering, in eight fields of plain prose, built by interviewing
you one question at a time or from a document you paste, and edited by hand after. This is that
profile for BOPS, in this world. The wording is drawn from the tool's own demo documents for BOPS
(a product one-pager and a price list dated 2026) where they fit this world, and from the world
where they do not; the two places they disagree are at the end.

## The profile

| Field | What it holds |
|---|---|
| Product | BOPS is a case-handling system for local authorities: a case arrives, is validated, goes out to whoever has to be consulted, and is decided, all in one case file. Officers work one file; the public sees one status. |
| Customer | Councils in the UK. The buyer is usually a service lead responsible for ten to forty officers, and the buying group is a head of service with the budget, a digital or IT lead for assurance, and one or two senior officers for adoption. |
| Value proposition | Cuts the time to validate a case by about half, and lets the public check a status themselves, which removes most of the chase calls. Checklists are enforced so bad submissions bounce early; consultees are notified on a schedule rather than by hand. |
| Pricing | A licence per authority per year, banded by population: £45,000 up to 150,000 people, £55,000 to 300,000, £68,000 to 500,000, on application above. Unlimited officer accounts. Implementation and migration quoted separately, typically £18,000 to £35,000 depending on how many legacy cases are moved. Shared services buying jointly are one authority at the combined band, less 10%. The sheet replaces all per-team and per-month pricing quoted before April 2026. |
| Competition | Mostly incumbent legacy systems on long renewal cycles. The live competitor is usually "do nothing for another year". Renewals cluster at the financial year end, so the realistic window is the twelve months before a contract break. |
| Current situation | One council live, East Marston, fourteen months in; case admin down by about a third, and its Head of IT will take reference calls. Around thirty councils on the shortlist, named people in eighteen. |
| Goal | A partial adoption at two or three more councils this year, full adoption later. Patient: never push. |
| Other | Sold by you alone, with a colleague in partnerships beside you. |

## What this fills, and what it does not

The library expects to be told more about an offering than the profile holds
(`library/told/offering-told.md`). Read against the eight fields:

| Told record | Filled from |
|---|---|
| Pitch (what it is, why it is worth buying) | Product, Value proposition |
| Fit-shape (size, situation, the problem) | Customer, Value proposition |
| Pricing (price, discount room, term, how it is paid) | Pricing. The term and how it is paid are there in prose (per year); discount room is not stated |
| Names in the field (a rival, the incumbent) | Competition, as a kind rather than a name |
| Use-case (the situation it is best for, the angle, for which kind of buyer) | **Not held.** The value proposition says why teams switch, in one paragraph for every buyer. Nothing ties a use-case to a kind of council |
| Worry + answer (the worry, your answer, the evidence it needs) | **Not held.** The tool has a place for snippets with an "objections" label, and nothing reads it |
| Supplier | Not needed here: you supply it yourself |

So a read that leads with a use-case for this kind of buyer (`lead-with-this`), or answers a
worry on record (`answer-gap`), has the buyer's half and not yours. The cards say so where it
matters.

## Where the tool's own documents and this world disagree

Two things, flagged rather than fixed:

- **The tool's demo documents describe BOPS as a planning application system**, for planning
  departments, with statutory consultees and applicants. This world has sold it since 14
  September as a case system for any council service: customer services at Bramley, service
  design at Westmoor, digital at Burnham. The profile above keeps the world's reading and the
  documents' shape. If the world moves to planning, twenty-five cards and the cast's roles move
  with it.
- **The price list has no partial rollout on it.** It prices a licence per authority per year and
  says the sheet "replaces all per-team and per-month pricing". This world's documents include a
  partial rollout price sheet, "one service, live cases, about a third of the price", and three
  cards lean on it (Karen's, Gary's, and the Felton price card). Either the world's sheet is a
  quote outside the list, which the Pricing told record's "discount room" would have to carry, or
  the cards are offering something the price list does not. **Felton's pass met it on 22
  September and settled it as fiction**: the sheet is your own one-page quote, written on 6 July
  after Bramley asked whether they could start with one service (`records.md`, Stephen Walsh's
  Drive), and the profile has never been told about it. So `your-price` gives the band and
  nothing smaller, the card's "about a third" rests on the document in Drive and not on a count,
  and the card says so. What that leaves for the library is in `felton-pass.md`: the Pricing told
  record has no place for a smaller first step's price, and "one entry is one thing on one set
  of terms" would make the partial rollout a second entry on the offering list, which nobody
  has decided.
