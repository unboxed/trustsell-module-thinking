---
id: target-cold-to-you
label: "You have never spoken to them"
used_by: [warm-path, customer-introduction]
over: [stakeholder-map]
over_status: decided   # decided 21 September, when the counts were written
defined: true
counts: Whether you have ever had any contact with this person at all.
needs: [gmail#email-message, gmail#email-thread, slack#slack-message, sms#text-message, meet#participant, meet#meeting, calendar#calendar-event, contacts#contact, contacts#other-contact, contacts#contact-group]
breaks: It is a gate, not a judgement: it says there is nothing on record, never that they do not know you.
---

# You have never spoken to them
## What it counts

Whether anything on record has ever passed between you and this person: a message, a meeting, an
entry in the address book, a told offline touch. Yes or no, with what it found.

It gates every read about a way in. A person you have dealt with does not need an introduction, and
a read that offers one to somebody you know looks foolish in a way that costs trust.

## What it cannot see

A meeting at a conference nobody wrote down, which the told `offline-touch` record exists to
close.
