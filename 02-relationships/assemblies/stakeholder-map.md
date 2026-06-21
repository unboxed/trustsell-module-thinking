---
id: stakeholder-map
floor: assembly
label: Stakeholder map
blurb: Everyone at one organisation, gathered by role and by the gaps.
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
---

# Stakeholder map

Gathers everyone you deal with at one organisation into a single picture, keyed by the org (its
domain from `enrichment`, the shared email domain on a `Contact`, the company on an `Other contact`).
It stands on Person history: each name on the map is one person already gathered, and the map sorts
those people into deciders, influencers, champions, blockers, plus who is still a hole. It reads who
is on a thread (the `From`, To and Cc on an `Email message`, the participants on an `Email thread`),
who sits on the shared `Calendar event`, the job title on a `Contact` or `Slack user`, and the role
`enrichment` returns from the open web, then places each person against the org.

The map names its gaps as plainly as its names. A missing decider is surfaced as honestly as a known
one: the picture says "no decision-maker on record here" the same way it says "the decider is Jane".
A hole is a fact about the org, not a thing to paper over.

This is floor, not reading. The sort into deciders and influencers leans on what the records already
state (a job title that says "Head of", a name that shows up on every thread), not on a read of
behaviour. The only real work is identity and grouping: deciding these scattered people belong to the
same org, and lining them up by the roles their records carry. Whether a person is actually a
champion or has gone cooling is a judgement, and that happens above, in the signals that read this map.

> Lineage note: `email-message`, `email-thread`, `contact`, `other-contact` and `calendar-event`
> resolve to [`channels/gmail.md`](../../01-integrations/channels/gmail.md),
> [`channels/contacts.md`](../../01-integrations/channels/contacts.md) and
> [`channels/calendar.md`](../../01-integrations/channels/calendar.md). `slack-user` and `enrichment`
> resolve to [`channels/slack.md`](../../01-integrations/channels/slack.md) and
> [`channels/web.md`](../../01-integrations/channels/web.md). The decider gap stays wide until
> LinkedIn connects (role and reporting lines are a data gap), and the user can always override a
> placement, which is a told fact the map keeps.
