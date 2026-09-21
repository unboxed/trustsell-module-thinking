---
id: deal-outcomes
module: 02-relationships
label: How deals ended
blurb: Every deal that has ended, how it ended and the reason given, lined up so a new one can be weighed against the ones like it.
about: your deals so far
deterministic: true
inputs:
  - people-told#deal-outcome
  - crm#deal-decision
  - deal
  - offering-told#fit-shape
---

# How deals ended

## What it gathers

Gathers every deal that has finished, whichever way it finished, with the reason on record and
enough about the deal itself to say which of them were alike.

Every other gather in the library is keyed on one thing: one person, one deal, one document set.
This one is keyed on none of them. It is the group gather, the pile of endings, and it exists
because the questions above it are comparisons: what happened the last few times on a deal of this
shape. A count over it is counted the same way any other count is, over the pile instead of over
one person.

For each ended deal it holds:

- **how it ended**, in four plain states: you sold it, they went elsewhere, they did nothing, you
  withdrew;
- **who decided**, because on some sales the decision is not the buyer's. Where the sale needs a
  third party to agree, that party's answer is the one that ended the deal;
- **the reason as it was given**, in their words or as it was written down, never a reason the tool
  worked out;
- **when it ended**, and how long it had run;
- **what the deal was**: the offering, the buyer organisation, the people on it, and the amount.

**What makes two deals alike** is the told fit-shape, and nothing else. The fit-shape is the only
place a seller has said what kind of buyer this offering is for (their size, their situation, the
problem it solves), so past deals are grouped by it rather than by categories the tool invents for
itself. Where the fit-shape is empty, "one like this" means nothing, and the reads above say so
rather than grouping by whatever the records happen to share. *(My reason, not yet yours.)*

**An ending is told or fetched, never deduced.** It is the same rule the completion of a sale
already follows in [`since-the-sale`](since-the-sale.md), and this gather is the other half of it.
A deal is not ended because it went quiet, because a card was skipped, because someone wrote "we
have gone another way" in a mail, or because a watch ran out. You say it ended, or the deal record
says so. Silence is the most common ending in real selling and the least reliable to read, so the
tool holds a quiet deal as quiet and waits to be told. *(My reason, not yet yours.)*

It forms no opinion about why a pattern of endings exists. Three refusals in a row for the same
stated reason is four facts, not a finding; whether that reason is really the reason is a read, one
floor up.

## Where it comes from

`deal-outcome` is People's own told record, resolving to
[`people-told.md`](../told/people-told.md), where you say how a deal finished and why. `deal-decision`
resolves to [`channels/crm.md`](../channels/crm.md), the fetched twin: the same fact where a deal
system holds it, one row per decision, which is what lets a single deal carry several answers from
several parties. Where the CRM is not connected the told record is the whole of it, and the pile is
as complete as you have been (a data gap and a told gap at once, named not faked). `deal` is a
sibling assembly, for what each ended deal actually was. `fit-shape` resolves to
[`told/offering-told.md`](../told/offering-told.md), the told vocabulary for what makes two buyers
alike.

It lives in People because a deal is People's, gathered from the conversations that make it up. The
two reads that stand on it are Offerings', because what was refused and what you delivered are
facts about the thing you sell; module 03 asks for them through its `connects`.
