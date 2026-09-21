---
id: head-of-signature-scan
label: "Job titles in signatures"
used_by: [new-stakeholder]
over: [conversation-history]
over_status: decided   # decided 21 September, when the counts were written
defined: true
counts: For a new name, what the record says about their role: their signature, their title, their place.
needs: [gmail#email-message, gmail#email-thread, slack#slack-message, sms#text-message, linkedin#profile, web#enrichment, contacts#contact]
breaks: A title is not authority. It says what they are called, and what that means differs at every organisation.
---

# Job titles in signatures
## What it counts

For each new name, what can be resolved about them: the job title in their own signature, their
title on the open web or the address book, and where they sit relative to the people already on the
thread.

The signature first, because it is theirs. A title somebody wrote about themselves is worth more
than one scraped from a directory that may be three years old.

## What it cannot see

What a title means. A Director of Resources at one organisation signs things a Director of
Resources at another has never heard of, and no count can carry that. It is also blind to the
person with no title who decides everything.
