---
id: new-name-on-thread
label: "New name on a thread"
used_by: [new-stakeholder]
over: [conversation-history]
over_status: decided   # decided 21 September, when the counts were written
defined: true
counts: Each person appearing on a thread for the first time, and the day they appeared.
needs: [gmail#email-message, gmail#email-thread, slack#slack-message, sms#text-message]
breaks: Somebody copied once and never again is still new, and the read decides whether that mattered.
---

# New name on a thread
## What it counts

Each address that appears on one of this deal's threads for the first time: who, on which thread,
on which day, and whether they were added by you or by them. One row per person.

Added by them is the fact that matters. A name you copied in is your move; a name they copied in is
a change in who is involved, and it is the earliest thing on record that says so.

## What it cannot see

Somebody involved without being copied, which is how most decisions are actually taken. It also
cannot tell a new decision-maker from an assistant managing a diary.
