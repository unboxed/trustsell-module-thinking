---
id: colleague-touches-on-record
label: "Contact by others at your firm, on record"
used_by: [colleague-already-in-touch, enough-tries]
over: [firm-contact]
over_status: decided   # 21 September: confirmed when the arithmetic was written, which is what made it answerable
defined: true
counts: Each contact on record between someone at your firm other than you and anyone at one buyer organisation.
needs: [crm#deal-record, slack#slack-message, gmail#email-thread, calendar#calendar-event, lead-list#lead-list, lead-list#lead-entry, profile-told#about-you]
breaks: A colleague's own mailbox never reaches the tool, so without the CRM the number under-reports.
---

# Contact by others at your firm, on record
## What it counts

Each contact on record between someone at your firm other than you and anyone at one buyer organisation: who at your firm, whom at theirs, when, and by which way (a thread, an event, a CRM activity, a message in the workspace, or a list they handed you, since 22 September: the colleague who worked a stand met everyone on the sheet, and the sheet says when). A plain list, most recent first.

Two signals quote it. [`colleague-already-in-touch`](../signals/colleague-already-in-touch.md) reads it to say who got there before you and how it went. [`enough-tries`](../signals/enough-tries.md), since 21 September, adds it to `times-you-chase`, because a person who has had four approaches has had four and it makes no difference to them which desk each one came from.

It counts within [`firm-contact`](../assemblies/firm-contact.md), who at your firm has been in touch. Which records it needs and when the number stops meaning anything are not written in the count's fields yet, like every other count.

## What it cannot see

A colleague's own mailbox, which never reaches the tool. Without the CRM connected, only what reached your mailbox, your shared calendar or the workspace is counted, so the number under-reports. Used solo there is nothing to count, which is a fact, not a gap.
