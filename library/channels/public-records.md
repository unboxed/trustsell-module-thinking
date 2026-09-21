---
id: public-records
name: Public records
source: builtin
icon: landmark
---

# Public records

What is on the public record about a business: a charge registered against it, a judgment against
it, what it has filed, and where it stands on a credit scale. It is the one floor that can say
something about a buyer that neither you nor they have said, and it is what "to whom do they
already owe money" needs when the answer goes beyond the documents the buyer chose to hand you.

**It is a lookup, not an account** (added 21 September). Nobody plugs in a companies register the
way they plug in a mailbox: the tool asks a register or a bureau a question about one organisation
and carries the answer back. So `source:` is `builtin`, beside the open web, and there is no data
gap of the "not connected" kind. What there is instead is coverage: registers differ by country,
some hold charges and no judgments, a credit score usually comes from a bureau that has to be paid,
and none of them is complete. **No provider is named, because none is chosen**, the same way the
CRM, SMS and the web form are written; which register or bureau answers, and what it costs, is a
question for the day one is picked. *(My reason, not yet yours.)*

Owned by Connections, fetched fresh and carried untouched. No opinion is formed here. Each record
below is a lineage anchor; its id is the kebab-slug of its label (`Registered charge` becomes
`registered-charge`), and that is what an assembly references.

## Records

| Record | Field | Source |
|---|---|---|
| Registered charge | the organisation it is against | as the register names it |
| Registered charge | in favour of | the party it is registered to, as the register names them |
| Registered charge | what it is over | as the register states it |
| Registered charge | registered on | the date the register gives |
| Registered charge | still outstanding | as the register states it; a charge can be satisfied and stay listed |
| Court judgment | the organisation it is against | as the register names it |
| Court judgment | amount | as stated |
| Court judgment | dated | the date the register gives |
| Court judgment | still outstanding | as the register states it |
| Public filing | the organisation | as the register names it |
| Public filing | what was filed | accounts, a return, a change of officers, as the register names it |
| Public filing | the period it covers | as stated, where the filing says |
| Public filing | filed on | the date the register gives |
| Credit standing | the organisation | as the bureau names it |
| Credit standing | score or band | as the bureau gives it |
| Credit standing | the scale it is on | whose scale, and what its range is |
| Credit standing | as at | when the bureau last took it |

## In plain words

What a person reads, where it differs from the record's label. The label, and the id made from
it, do not change.

| Record | Plain name |
|---|---|
| Registered charge | Money secured against them |
| Court judgment | A judgment against them |
| Public filing | What they have filed |
| Credit standing | Where they stand on a credit scale |

## What is never read

The same discipline as [`handover.md`](handover.md), for the same reason: a record about a buyer is
read as what it states and nothing else.

1. **Never a verdict on the person.** A charge is money secured, not a warning about anybody. A
   judgment is a judgment, not dishonesty. A read may say what is on the register; what to do about
   the sale is yours.
2. **Never certain it is them.** Businesses share names, trade under others and move address. The
   match between an organisation you are selling to and an entry on a register is identity work and
   can be wrong, so a read says how sure the match is and never quietly asserts it.
3. **Never assumed current.** A register is as fresh as its last filing, and a satisfied charge can
   sit on it for years. The date is carried with every row, and a read that leans on one says how
   old it is.
4. **Never what kind of business they are.** A score is this business's, and nothing here supports
   a read about their trade.

**Which read wants what.** [`existing-commitments`](../signals/existing-commitments.md) wants the
charges, because they name a lender the buyer's own documents may not. The credit standing is what
a supplier's box is written in where a sale has to be underwritten, so it is
[`where-this-one-goes`](../signals/where-this-one-goes.md) that would want it; that join is not
wired, and is named here rather than half-built.
