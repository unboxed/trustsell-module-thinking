---
id: ask-made-unanswered
label: "Your unanswered questions"
used_by: [loose-end]
over: [conversation-history]
over_status: decided   # decided 21 September, when the counts were written
defined: true
counts: Each question you put to them that nothing since has answered, with how long it has been open.
needs: [gmail#email-message, slack#slack-message, sms#text-message, meet#transcript]
breaks: A question asked three times is one open question, not three, and the count says so.
---

# Your unanswered questions
## What it counts

Each question **you** asked them, one row per question, that nothing on record answers: the words,
the day you asked, and how long it has been open in working days. A question re-asked is still one
open question, dated from the first asking, because how long they have had it is the thing that
matters and the re-asking is a separate fact (`times-you-chase`).

Answered means answered, not acknowledged. "I'll find out" closes nothing and becomes a promise of
theirs instead (`their-promise-undelivered`).

## What it cannot see

An answer given on a call nobody captured, and an answer given to somebody else at your firm. It
also cannot tell a question they are ignoring from one they could not answer, which is the read's
job and not the count's.
