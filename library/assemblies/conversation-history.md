---
id: conversation-history
module: 02-relationships
label: Conversation history
blurb: Everything said in one conversation, with everyone who was on it.
about: a conversation
deterministic: true
inputs:
  - gmail#email-thread
  - gmail#email-message
  - sms#text-conversation
  - sms#text-message
  - web-form#form-submission
  - slack#slack-channel
  - slack#slack-message
  - slack#slack-user
  - person-history
---

# Conversation history

## What it gathers

Gathers one conversation into a single picture, in order, with everyone who is on it: an email
thread, a conversation by text, or a Slack channel thread.

It keys on the thread's own identity, an email thread by `threadId`, a text conversation by the
other number, a Slack thread by `thread_ts`. Then it hangs every message off that key by timestamp,
so the back-and-forth reads as one timeline.

**Text arrived here on 21 September, and it should have been here from the start.** Until then this
gather drew on mail and Slack only, which quietly assumed that a conversation is something typed at
a desk. In a sale that runs days from lead to close, most of it happens by text: the first answer,
the promise to send the statements by Friday, the reminder that Friday has gone. A read standing on
this gather was blind to all of it, and the reads are many: what was left hanging, whether a chat
has turned into a buying discussion, whether the next message would push. `sms.md` said from the
day it was written that "a conversation by SMS is `thread-under-way` in every sense a mail thread
is"; nothing acted on it until a card at the fast end could only be **a hunch** because the yes it
rested on was a text nobody could read. *(My reason, not yet yours.)*

**The form submission is the first turn, not a separate thing.** Where a lead came in through your
own enquiry form, what they typed there is the opening of the conversation: the earliest thing they
said, in their own words, before anyone replied. It belongs at the head of the same timeline rather
than in a record of its own that a read has to remember to go and look at.

Each participant is resolved to the person behind them through `person-history`. So a name in the
`From` line, or a Slack author, becomes someone you already have a history with, not a fresh stranger.

The only real work is the tidy-up: pulling scattered messages back onto their one thread, and matching
each speaker to a known person.

## Where it comes from

`email-thread` and `email-message` resolve to
[`channels/gmail.md`](../channels/gmail.md); `text-conversation` and `text-message` to
[`channels/sms.md`](../channels/sms.md); `form-submission` to
[`channels/web-form.md`](../channels/web-form.md); `slack-channel`, `slack-message` and
`slack-user` to [`channels/slack.md`](../channels/slack.md).
`person-history` is the sibling assembly that turns a raw participant into a resolved person, and
it is what matches a phone number to somebody you already know. Where it cannot, the number stays a
number and the conversation is still gathered: an unmatched party is better than a dropped one.

Which of these a seller actually has is the scenario's to say. The patient example connects mail
and Slack and neither text nor a form; the broker connects text, the form and mail and no Slack.
Neither is missing anything it needs, which is the point of gathering all four here rather than
choosing.
