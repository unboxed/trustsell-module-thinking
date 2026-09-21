---
id: since-last-colleague-touch
label: "How long since a colleague was last in touch"
used_by: [colleague-already-in-touch]
over: [firm-contact]
over_status: decided   # 21 September: confirmed when the arithmetic was written, which is what made it answerable
defined: true
counts: The working time since the most recent contact by anyone at your firm other than you.
needs: [crm#deal-record, slack#slack-message, gmail#email-thread, calendar#calendar-event]
breaks: It is as recent as the records your firm shares, and no more.
---

# How long since a colleague was last in touch
## What it counts

The days since the most recent contact on record between anyone at your firm other than you and this organisation. Arithmetic on the list above; whether that is recent enough to matter is the read's judgement.

It counts within [`firm-contact`](../assemblies/firm-contact.md), who at your firm has been in touch. Which records it needs and when the number stops meaning anything are not written in the count's fields yet, like every other count.

## What it cannot see

A colleague's own mailbox, which never reaches the tool. Without the CRM connected, only what reached your mailbox, your shared calendar or the workspace is counted, so the number under-reports. Used solo there is nothing to count, which is a fact, not a gap.
