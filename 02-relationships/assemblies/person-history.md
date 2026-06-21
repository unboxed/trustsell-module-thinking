---
id: person-history
floor: assembly
label: Person history
blurb: Everything about one person, gathered into a single picture.
about: a person
deterministic: true
inputs:
  - email-message
  - email-thread
  - calendar-event
  - slack-message
  - slack-user
  - enrichment
---

# Person history

Gathers every record that touches one person (your mail and threads with them, the calendar events
you share, their Slack messages and profile, and any open-web enrichment), resolved by identity
(email, name) into a single timeline. *Tom, and your whole history with him.*

This is **floor, not reading**: nothing here is judged or guessed. It is the deterministic tidy-up
any address book or CRM does, the one picture the signals then count and read. The only real work is
resolving "these scattered records are the same person", and that is still arithmetic, not opinion.

> Lineage note: `email-message` and `email-thread` resolve to
> [`channels/gmail.md`](../../01-integrations/channels/gmail.md) today. `calendar-event`,
> `slack-message`, `slack-user` and `enrichment` resolve once the Calendar, Slack and Web channel
> docs are produced from the same template.
