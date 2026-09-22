---
id: re-asked-questions
label: "Same question asked again"
used_by: [understanding-gap]
over: [person-history]
over_status: decided   # 22 September: moved from one conversation to the person, when a question answered on a July thread came back on a September one and the count could not see it
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

It counts within everything with the person, not within one thread, since 22 September. A question
answered on one thread and asked again on a later one is the commonest shape of the third case: the
answer reached the person who asked and not the people they passed it to, and the new thread is
where those people arrive. Counted per thread, that repeat is invisible. *(My reason, not yet
yours.)*

## What it cannot see

A question re-asked in different enough words that nothing matches it, which is the case where the
answer landed worst of all.
