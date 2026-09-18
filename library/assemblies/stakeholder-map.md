---
id: stakeholder-map
module: 02-relationships
label: Who is who in their organisation
blurb: Everyone at one organisation, by their role and who is still missing.
about: an organisation
deterministic: true
inputs:
  - person-history
  - web#enrichment
  - gmail#email-message
  - gmail#email-thread
  - contacts#contact
  - contacts#other-contact
  - calendar#calendar-event
  - slack#slack-user
  - people-told#seed-contact
  - people-told#relationship-note
---

# Who is who in their organisation
## What it gathers

Gathers everyone you deal with at one organisation into a single picture, keyed by the org: its domain
from `enrichment`, the shared email domain on a `Contact`, the company on an `Other contact`.

It stands on Person history. Each name on the map is one person already gathered. The map sorts those
people into deciders, influencers, champions and blockers, and marks who is still a hole.

To place each person, it reads what the records state: who is on a thread (`From`, To and Cc on an
`Email message`, the participants on an `Email thread`), who sits on the shared `Calendar event`, the
job title on a `Contact` or `Slack user`, and the role `enrichment` returns from the open web.

The map names its gaps as plainly as its names. A missing decider is surfaced as honestly as a known
one: the picture says "no decision-maker on record here" the same way it names a known decision-maker.
A hole is a fact about the org, not a thing to paper over.

The only real work is identity and grouping: deciding these scattered people belong to the same org,
and lining them up by the roles their records carry. The sort leans on what the records already state,
a job title that says "Head of", a name that shows up on every thread, not on a read of behaviour. So
the map can place someone in the champion or blocker bucket from their record, but it does not judge
whether they are truly championing or cooling. That judgement is a signal's job.

## Lineage

`email-message` and `email-thread` resolve to
[`channels/gmail.md`](../channels/gmail.md); `contact` and `other-contact` to
[`channels/contacts.md`](../channels/contacts.md); `calendar-event` to
[`channels/calendar.md`](../channels/calendar.md); `slack-user` to
[`channels/slack.md`](../channels/slack.md); `enrichment` to
[`channels/web.md`](../channels/web.md). `person-history` is the sibling assembly
that turns scattered records into a resolved person. `seed-contact` and `relationship-note` are
People's own told records, resolving to [`told.md`](../told/people-told.md): the targets you name and the
placement facts only you know (a quiet person who still decides) that the records cannot show. The
decider gap stays wide until LinkedIn connects (role and reporting lines are a data gap), and the
user can always override a placement, which is a told fact the map keeps.
