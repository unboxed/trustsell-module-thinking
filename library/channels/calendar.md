---
id: calendar
name: Calendar
brand: Google
source: account
connected: true
icon: calendar
---

# Calendar

The meeting record: who is booked with whom, when, and whether they showed up. Events carry the guest list with each guest's accepted, declined or tentative state, the timing, and the Meet link, so the counting floor can read meetings held versus invites ignored. `Status event` covers focus-time, out-of-office and working-location blocks, now first-class event types in the Calendar API. `Free / busy` is a query, not a stored record: it returns when a person is busy or open across their calendars, with no titles attached.

Owned by Connections, fetched fresh each time and carried untouched. No opinion is formed here. Each record below is a lineage anchor. Its id is the kebab-slug of its label (`Calendar event` becomes `calendar-event`), and that is what the modules' assemblies reference.

## Records

| Record | Field | Source |
|---|---|---|
| Calendar list | name | summary |
| Calendar list | colour | colorId |
| Calendar list | access role | accessRole |
| Calendar event | title | summary |
| Calendar event | description | description |
| Calendar event | attendees | attendees (with accepted / declined / tentative) |
| Calendar event | organiser | organizer |
| Calendar event | start | start |
| Calendar event | end | end |
| Calendar event | all-day flag | derived |
| Calendar event | recurrence | recurrence |
| Calendar event | location | location |
| Calendar event | video link | hangoutLink (Meet) |
| Calendar event | visibility | visibility |
| Calendar event | reminders | reminders |
| Calendar event | created | created |
| Calendar event | updated | updated |
| Status event | type | eventType |
| Status event | time range | start / end |
| Status event | auto-decline | autoDeclineMode |
| Free / busy | busy periods | busy |
| Free / busy | time range | timeMin / timeMax |

## In plain words

What a person reads, where it differs from the record's label. The label, and the id made from
it, do not change.

| Record | Plain name |
|---|---|
| Calendar list | Your calendars |
| Status event | Away and focus time |
| Free / busy | When they are free |
