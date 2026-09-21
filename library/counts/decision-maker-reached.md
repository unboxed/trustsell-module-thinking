---
id: decision-maker-reached
label: "Reached the decision-maker"
used_by: [missing-people]
over: [stakeholder-map]
over_status: decided   # decided 21 September, when the counts were written
defined: true
counts: Whether anybody you have reached can actually decide, and what that rests on.
needs: [gmail#email-message, gmail#email-thread, slack#slack-message, sms#text-message, meet#participant, meet#meeting, calendar#calendar-event, linkedin#profile, linkedin#mutual-connections, linkedin#job-change]
breaks: It reports the evidence for authority, never authority itself. Nobody on a record ever says "I decide".
---

# Reached the decision-maker
## What it counts

Whether any person you have exchanged anything with is a decision-maker, with what that rests on:
a title, something they said about signing, something a colleague said about them, or your own told
note. One row per candidate with the evidence and its kind.

Evidence kind is the point. A person who said "I'll sign it" is a different claim from a person
whose title contains the word Director, and a read that cannot tell them apart will be confident
about the wrong one.

## What it cannot see

Authority that is informal, which is most of it: the person everyone actually listens to, the
technical veto, the one who has to be consulted. And a signature that is a formality where the real
decision was taken elsewhere.
