---
id: accepts-meetings
label: "Meetings they accept"
used_by: [best-way-to-reach]
over: [person-history]
over_status: decided   # 21 September: it counts within your history with one person, which is the only gather every read using it shares
defined: true
counts: How many meetings you have proposed, how many they accepted, and who proposed each.
needs: [meet#meeting, meet#participant, calendar#calendar-event, calendar#free-busy, gmail#email-message, gmail#email-thread, slack#slack-message, sms#text-message, web-form#form-submission]
breaks: A meeting accepted and not attended is not an acceptance, and the count keeps the two apart where the record can tell.
---

# Meetings they accept
## What it counts

Three numbers. How many meetings have been proposed, by whom, and how many were accepted, with the
acceptance rate on each side. One row per meeting with its day, who proposed it, and what happened.

Accepting a meeting is the cheapest real commitment a buyer makes, which is why it appears under
both a read about intent and a read about how to reach somebody. Who proposed it is the half that
is usually forgotten: a person who accepts everything and proposes nothing is being polite.

## What it cannot see

A meeting arranged by phone with no invitation, and a meeting declined for a diary reason that has
nothing to do with you.
