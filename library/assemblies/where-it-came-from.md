---
id: where-it-came-from
module: 02-relationships
label: How you came by them
blurb: The route one lead reached you by, from whichever record carries it, and whether you may say so.
about: a person
deterministic: true
inputs:
  - lead-list#lead-entry
  - lead-list#lead-list
  - people-told#lead-source
  - web-form#form-submission
  - person-history
---

# How you came by them

## What it gathers

Gathers, for one person, how they reached you.

There are only so many doors. Somebody introduced you. They filled in a form. Their name was on a
list a colleague handed over. You found them and wrote first. You met them somewhere. Until now the
library could see two of those, the form and the introduction, and was blind to the rest, so the
first sentence of a first message, the one that says why this is not a cold approach, had nothing
under it.

For each person it holds:

- **the door**, one of the above, from whichever record carries it;
- **when** they came through it;
- **what they said at the time**, where the door carries words: what they wrote on the form, what
  the list says they were there for;
- **whether you may say so out loud**, which is a field on the record and never an assumption.

That last one is the difference between a first line that works and one that costs you the
relationship. A person who handed over their badge at a stand expects to hear from you and can be
told exactly that. A bought list is usually the opposite. The gather carries the permission with
the provenance and never separates them, so nothing above it can reach for one without the other.
*(My reason, not yet yours.)*

Where no record carries a door, the person came by a route nobody wrote down, and the gather says
so rather than guessing at the likeliest one. "I do not know how you came by them" is a useful
thing for a tool to say before a first message.

## Where it comes from

`lead-entry` and `lead-list` resolve to [`channels/lead-list.md`](../channels/lead-list.md), what a
colleague hands you. `lead-source` is People's own told record, resolving to
[`people-told.md`](../told/people-told.md), where you say how you came by someone and whether you
may say it. `form-submission` resolves to [`channels/web-form.md`](../channels/web-form.md), the
one door that records itself. [`person-history`](person-history.md) is the sibling assembly that
resolves the scattered records to one person, which is what lets a name on a list and a name on a
thread be the same person.

The introduction door is the one this gather does not hold itself: a route that ran through
somebody you know is read by [`warm-path`](../signals/warm-path.md) off the mutual-connection web,
which is a different kind of evidence, and that read now takes this gather as well so the two
halves are answered in one place.
