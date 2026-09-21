---
id: timeline-or-start-question
label: "Asked when it could start"
used_by: [buying-intent]
over: [conversation-history]
over_status: decided   # decided 21 September, when the counts were written
defined: true
counts: Each time they ask when it could start, how long it takes, or what happens next.
needs: [gmail#email-message, gmail#email-thread, slack#slack-message, sms#text-message, web-form#form-submission]
breaks: It counts what was written. A conversation that moved on a call leaves this at zero, which is a data gap and not a quiet buyer.
---

# Asked when it could start
## What it counts

Each question from them about time: when could it start, how long does it take, what happens
after we agree, could it be in before the year end. One row per question with the words and the
day.

A buyer asking how long something takes has already imagined having it, which is why this sits
beside the money questions rather than with the curious ones.

## What it cannot see

The same blindness as the rest: calls, and questions asked of colleagues. It also reads a
procurement officer's timetable question, which is administration, the same as a buyer's, which is
intent.
