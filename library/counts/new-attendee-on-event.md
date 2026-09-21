---
id: new-attendee-on-event
label: "New name on an invite"
used_by: [new-stakeholder]
over: [stakeholder-map]
over_status: decided   # decided 21 September, when the counts were written
defined: true
counts: Each person attending a meeting with you for the first time.
needs: [meet#participant, meet#meeting, calendar#calendar-event]
breaks: An invitation is not an attendance, and the count separates the two where the record can tell them apart.
---

# New name on an invite
## What it counts

Each person who appears on a meeting with this organisation for the first time: who, which
meeting, which day, and whether they accepted, attended or merely were invited. One row per person.

A new face in a room is a stronger sign than a new address on a thread, because somebody chose to
spend an hour. It counts within the account's standing map of people, not within the meetings, so a
face new to the meeting but known at the account is not counted as new.

## What it cannot see

Who was actually in the room, where the record only carries who was invited. And anybody who joined
a call from somebody else's laptop.
