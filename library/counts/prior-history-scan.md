---
id: prior-history-scan
label: "Spoken to before"
used_by: [new-stakeholder]
over: [stakeholder-map]
over_status: decided   # decided 21 September, when the counts were written
defined: true
counts: For a new name, whether you have ever dealt with them before, anywhere.
needs: [gmail#email-message, gmail#email-thread, slack#slack-message, sms#text-message, meet#participant, meet#meeting, calendar#calendar-event, linkedin#profile, linkedin#mutual-connections, linkedin#job-change]
breaks: It matches a person, not an address. Where the identity work is unsure, it says so rather than claiming an old friend.
---

# Spoken to before
## What it counts

For each new name, everything on record from before they appeared here: an earlier thread at a
different organisation, a meeting years ago, a mutual connection, an entry in the address book. One
row per find, with the date and where.

It is the difference between "a new person has joined the thread" and "a new person has joined the
thread and you sold to them in 2022", which are not the same card at all.

## What it cannot see

A person whose name or address has changed, where nothing links the two. The identity work is
`person-history`'s and it is honest about being unsure, which this count passes on rather than
hiding.
