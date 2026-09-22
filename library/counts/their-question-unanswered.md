---
id: their-question-unanswered
label: "Their unanswered questions"
used_by: [loose-end]
over: [conversation-history]
over_status: decided   # decided 22 September, when a card was found quoting the count for your questions to describe one of theirs
defined: true
counts: Each question they put to you that nothing since has answered, with how long it has been open and how many times they have asked.
needs: [gmail#email-message, gmail#email-thread, slack#slack-message, sms#text-message, web-form#form-submission, meet#transcript]
breaks: A question asked twice is one open question, dated from the first asking, and an acknowledgement ("I'll send that this week") does not close it; it opens a promise instead.
---

# Their unanswered questions
## What it counts

Each question **they** asked you, one row per question, that nothing on record answers: the words,
the day they asked, how long it has been open in working days, and how many times they have asked
it. A question re-asked is still one open question, dated from the first asking, because how long
they have been waiting is the thing that matters; the re-asking is kept on the row as a second
date, because a buyer who asks twice is telling you something the first asking did not.

Answered means answered, not acknowledged. "Good question, I'll come back to you" closes nothing
here and becomes a promise of yours instead (`promise-made-undelivered`), so the same message can
leave one row open and open another. A question you answered on a captured call is closed; a
question you answered on a call nobody captured looks open, and the read says so rather than
calling you slow.

It is the mirror of `ask-made-unanswered`, which counts your questions to them. The two were one
count until 22 September, when a card was found quoting the count for your questions to describe
a question of theirs, and the day's order was resting on it. They are two numbers with two
meanings: one is them owing you, the other is you owing them, and only the second is something
waiting a day makes worse.

## What it cannot see

An answer given on a call nobody captured, and an answer given by somebody else at your firm from
an account you do not share. It also cannot tell a question they need answered from one they
asked in passing, which is the read's job and not the count's.
