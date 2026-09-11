---
id: deal
label: Deal
blurb: One selling effort, with its offering, its threads, and everyone in it.
about: a deal
deterministic: true
inputs:
  - deal-seed
  - conversation-history
  - meeting-history
  - person-history
---

# Deal

## What it gathers

Gathers one selling effort into a single picture: the offering it is about, the conversations that
make it up (email threads and calls), and the people on those conversations. It is the gather above
the others, the unit you actually sell into, which is neither a lone person nor a whole organisation.
For example: your push of one offering into one prospect, everyone in it and every thread it runs on.

**The conversation is the membrane.** A deal owns a set of conversations, and its members are simply
whoever is on them. That is what lets a deal cross organisations: if an outside partner, a reseller
or an introducer sits on one of the deal's threads, they are in the deal, even though their email
domain is not the buyer's. Membership is read off participation, never off a shared domain, so two
people in one deal need not share an employer.

**It is seeded, then it grows.** A deal starts from a `deal-seed`: a told fact where you name the
effort, the offering it is about, the people or threads it starts from, and the buyer org or orgs.
From there it grows deterministically by following the conversations: a new name on one of the deal's
threads or calls becomes a candidate member (the `new-stakeholder` signal reads this same arrival).
When Salesforce connects, a CRM opportunity can seed a deal the same way; until then that is a data
gap, named not faked (`salesforce` is `connected: false`).

**It can also be proposed, then confirmed.** You do not have to seed every deal by hand. People can
detect one by clustering conversations that belong to the same effort, the same identity work
`person-history` does when it resolves that scattered records are one person. Threads and calls pull
together when they share the offering (Offerings can tag what a conversation is about), an
overlapping set of people, the account (or a stable cross-org group), cross-references, and a
coherent time window. What makes a cluster worth surfacing is a whiff of buying intent, so a proposal
is triggered by the [`buying-intent`](../signals/buying-intent.md) read firing on a conversation not
already in a deal. People then proposes the deal for you to confirm, split or reject; it never
auto-commits one (suggest, never send). A confirmed proposal simply becomes a `deal-seed`, so
detection and manual creation land on the same object.

**Telling one deal from another.** The offering is the primary separator: the same people talking
about two offerings are two deals. Then distinct people-clusters or accounts, and then time (a
renewal, or a closed-then-reopened effort). The genuinely hard case, the same org and the same
offering with overlapping people (two departments buying separately, say), is a judgement, not a
count, so People makes a graded call and asks rather than silently merging or splitting, and your
split or merge is a told `correction` it keeps.

The only work here is identity and grouping: deciding these threads and these people belong to one
effort (and, at a genuine boundary, asking rather than guessing), and resolving each participant to a
known person via `person-history`. The organisation stays the account, the standing address book that
`stakeholder-map` gathers. It is a useful related lens on a deal's buyer side, not the key the deal is
built on.

No behaviour is sensed here. The deal does not decide what stage it is at, whether it is healthy, or
whether it is worth acting on today. That is intent, and it belongs to the Brain, which places the deal
on a goal's ladder and prioritises it.

## Lineage

`deal-seed` is People's own told record, resolving to [`told.md`](../told.md); `conversation-history`,
`meeting-history` and `person-history` are sibling assemblies. The offering a deal is about is named
in the `deal-seed` and confirmed by asking Offerings "is this conversation about that offering" (a
`connects` request, not a direct input), so module boundaries stay clean. Where the grouping has to
guess which conversations belong to the effort, it can be wrong; it carries that as a soft edge for
the reads above, and a told correction from the user settles it.
