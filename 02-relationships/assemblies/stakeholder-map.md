---
id: stakeholder-map
label: Stakeholder map
blurb: Everyone at one organisation, by their role and who is still missing.
about: an organisation
deterministic: true
inputs:
  - person-history
  - enrichment
  - email-message
  - email-thread
  - contact
  - other-contact
  - calendar-event
  - slack-user
  - seed-contact
  - relationship-note
---

# Stakeholder map

## What it gathers

Gathers everyone you deal with at one organisation into a single picture, keyed by the org (its
domain from `enrichment`, the shared email domain on a `Contact`, the company on an `Other contact`).
It stands on Person history: each name on the map is one person already gathered, and the map sorts
those people into deciders, influencers, champions and blockers, plus who is still a hole. It reads
who is on a thread (the `From`, To and Cc on an `Email message`, the participants on an `Email
thread`), who sits on the shared `Calendar event`, the job title on a `Contact` or `Slack user`, and
the role `enrichment` returns from the open web, then places each person against the org.

The map names its gaps as plainly as its names. A missing decider is surfaced as honestly as a known
one: the picture says "no decision-maker on record here" the same way it names a known decision-maker.
A hole is a fact about the org, not a thing to paper over.

The only real work is identity and grouping: deciding these scattered people belong to the same org,
and lining them up by the roles their records carry. The sort into deciders and influencers leans on
what the records already state (a job title that says "Head of", a name that shows up on every
thread), not on a read of behaviour. That is arithmetic, not opinion. This is floor, not reading: any
address book or CRM does this much. Whether a person is actually a champion or has gone cooling is a
judgement, and that happens above, in the signals (see
[`docs/reading-principles.md`](../../docs/reading-principles.md)).

## Lineage

`email-message` and `email-thread` resolve to
[`channels/gmail.md`](../../01-integrations/channels/gmail.md); `contact` and `other-contact` to
[`channels/contacts.md`](../../01-integrations/channels/contacts.md); `calendar-event` to
[`channels/calendar.md`](../../01-integrations/channels/calendar.md); `slack-user` to
[`channels/slack.md`](../../01-integrations/channels/slack.md); `enrichment` to
[`channels/web.md`](../../01-integrations/channels/web.md). `person-history` is the sibling assembly
that turns scattered records into a resolved person. `seed-contact` and `relationship-note` are
People's own told records, resolving to [`told.md`](../told.md): the targets you name and the
placement facts only you know (a quiet person who still decides) that the records cannot show. The
decider gap stays wide until LinkedIn connects (role and reporting lines are a data gap), and the
user can always override a placement, which is a told fact the map keeps.
