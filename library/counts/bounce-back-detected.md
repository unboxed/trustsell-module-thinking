---
id: bounce-back-detected
label: "Emails bouncing"
used_by: [champion-went-dark]
over: [person-history]
over_status: decided   # decided 21 September, when the counts were written
defined: true
counts: A message to them that came back undelivered, with the reason the server gave.
needs: [gmail#email-message, gmail#email-thread, slack#slack-message, sms#text-message, web-form#form-submission]
breaks: A soft bounce is not a departure. The count keeps the reason so the two are not confused.
---

# Emails bouncing
## What it counts

Each undelivered message: when, and what the server said. Sorted into permanent (the address does
not exist) and temporary (a full mailbox, a server refusing for a while).

Permanent is a fact about a person who has gone. Temporary is a fact about a mail server, and
treating one as the other is how a tool ends up telling somebody their champion has left because a
mailbox was full on a Tuesday.

## What it cannot see

A mailbox that silently discards, and an address that still accepts mail nobody reads, which is
what most departed people leave behind.
