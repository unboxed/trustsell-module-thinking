---
id: answer-came-back
module: 02-relationships
label: An answer they have not heard
blurb: Someone whose agreement the sale needs has answered, and nothing has gone to the buyer since.
kind: deal-movement
confidence: graded
inputs: [decisions-so-far, conversation-history]
counts: [answers-back, since-an-answer-landed, still-out-with-someone, told-them-since]
answers: []
needs: [crm]
assumes: [thread-under-way]
assumes_status: provisional
pull: None. Both floors are People's own
---

# An answer they have not heard

## What it means

An answer has come back on a live deal and the buyer still does not know it.

Most sales wait on somebody who is not in the conversation: a lender, a credit committee, a
procurement board, a head office. When that answer lands it lands in a record, not in the thread,
and nobody is told. The buyer is waiting on news that already exists.

This is the read for that gap, and the gap is the whole of it. It does not say whether the answer
is a good one. It says the answer is in, and you are the last thing between it and the person
waiting.

## In practice

A deal went out to three parties who had to agree. One came back on Tuesday with terms, one
refused, and the third has not answered. Nothing has gone from you to the buyer since Monday. The
read: "two of the three have answered, the first on Tuesday with terms. The buyer has heard nothing
since Monday. One is still out."

## How it is worked out

Applies the shared reading rules in [`docs/reading-principles.md`](../docs/reading-principles.md).

- Trigger: at least one answer is recorded against a deal that is still running (counting) AND
  nothing has gone from you to the buyer since the day it landed (counting). Both halves are
  arithmetic. The read makes no judgement about the answer itself.
- What it says, in order: what came back and from whom, when it landed, how long that is, and what
  is still out. The last of those is what a buyer actually asks next, so it is part of the read
  rather than a second one.
- Confidence: high when the answer is on the deal record and nothing has gone on any connected
  channel since. Softens when the only record of it is a line you typed, because then the tool
  cannot tell an answer that landed today from one you are catching it up on. Softens again where
  a channel you talk on is not connected, since "nothing has gone" is only as good as what it can
  see.
- Needs: the deal system, where a decision is usually written down. Without it the read stands on
  your told `answer-received` alone, which means it can only tell you what you already knew (a data
  gap, named not faked). A call in which you passed the news on is invisible until you say so, and
  that is the most likely way for this read to be wrong: it will raise an answer you have already
  given by voice.
- Assumes: a conversation already under way, because "they have not heard" is read off what has
  been sent. There is no such thing as an answer on a deal with no thread (an assumption gap,
  named not faked).
- It points **towards** a move, and it is the only read in the library whose trigger is something
  arriving rather than something ageing. It does not wait for the silence to grow: the moment the
  answer is on record the buyer is owed it, so a day late here is already late. What waiting a day
  costs is the Brain's to weigh, and this read hands it a landing date rather than a gap.
- It answers no question in any of the three sets, and that is worth saying rather than hiding.
  The sets are sellers' questions to themselves, and nobody asks "has something come back that I
  have not passed on", because at every desk a person is already doing it. It is the first entry
  in the library written against a job rather than a question. *(My reason, not yet yours.)*
- Keep it apart from [`loose-end`](loose-end.md), which reads a promise **you** made and have not
  kept. The two often fire on one deal and they are not the same thing: one is your word
  outstanding, this is their answer undelivered. Where both hold, this is the one with something
  to say, because it has the news.
