---
id: re-asked-questions
label: "Same question asked again"
used_by: [understanding-gap]
over: [conversation-history]
over_status: decided   # decided 21 September, when the counts were written
defined: true
counts: Questions they have asked more than once, with how far apart.
needs: [gmail#email-message, gmail#email-thread, slack#slack-message, sms#text-message]
breaks: It reads what was written. Where the conversation happens on calls this is thin, and the companion count on captured calls carries the rest.
---

# Same question asked again
## What it counts

Questions asked again after being answered: the question, how many times, how far apart, and
whether each asking followed an answer. One row per question.

A question asked twice was answered badly, answered to the wrong person, or answered in a way that
did not survive being repeated internally. All three are worth knowing and none of them is the
buyer's fault.

## What it cannot see

A question re-asked in different enough words that nothing matches it, which is the case where the
answer landed worst of all.
