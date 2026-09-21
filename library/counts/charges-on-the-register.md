---
id: charges-on-the-register
label: "Money secured against them, on the register"
used_by: [existing-commitments]
over: [figures-on-record]
over_status: decided   # 21 September: confirmed when the arithmetic was written, which is what made it answerable
defined: true
counts: Charges and filings registered against this business publicly.
needs: [public-records#registered-charge, public-records#public-filing, public-records#credit-standing, public-records#court-judgment]
breaks: It is the public register, which lags and which does not carry everything a business owes.
---

# Money secured against them, on the register
## What it counts

The charges on the public register against this buyer that the register still lists as outstanding, counted by the party each is secured to, with the date each was registered. Beside them, how many of those parties the buyer's own documents also name, and how many they do not, which is the whole point of the count: it is the part of "to whom" the buyer did not have to show you.

Matching a register entry to this buyer, and a party on a charge to a payee on a statement, is identity work done by the gather, and it carries how sure the match is. A match the gather is unsure of is counted apart, never folded in.

It counts within [`figures-on-record`](../assemblies/figures-on-record.md), what the buyer's documents show and what the register says. Which records it needs and when the number stops meaning anything are not written in the count's fields yet, like every other count.

## What it cannot see

Anything a register does not hold, which differs by country: some carry charges and no judgments, some carry neither. Unsecured borrowing, which leaves no charge at all and is most of what a small business owes. And whether a listed charge is really still live, because a satisfied charge can sit on a register for years, which is why the date goes with every row.
