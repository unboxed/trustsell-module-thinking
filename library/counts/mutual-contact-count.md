---
id: mutual-contact-count
label: "People you both know"
used_by: [warm-path]
over: [person-history]
over_status: decided   # decided 21 September, when the counts were written
defined: true
counts: How many people you deal with are connected to this target, and how strongly you deal with each.
needs: [linkedin#profile, linkedin#mutual-connections, linkedin#job-change, contacts#contact, contacts#other-contact, contacts#contact-group, gmail#email-message, gmail#email-thread, slack#slack-message, sms#text-message]
breaks: A connection is not a relationship on either side. It counts links, and the read has to weigh both ends.
---

# People you both know
## What it counts

For one target you have never spoken to, how many people you genuinely deal with have a connection
to them, and for each of those bridges, how strong your own dealing is: how recently, how often,
how two-way.

Both ends matter and only one of them is visible. Your end is countable from your own records;
their end is a connection on a network, which may mean everything or nothing.

## What it cannot see

How well the bridge actually knows the target. A connection made at a conference in 2018 looks
identical to a decade of working together.
