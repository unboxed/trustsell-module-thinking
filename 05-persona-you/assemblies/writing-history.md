---
id: writing-history
label: Writing history
blurb: Everything you have written, gathered into one picture of how you write.
about: a person
deterministic: true
inputs:
  - email-message
  - draft
  - slack-message
  - voice-sample
---

# Writing history

## What it gathers

Gathers everything you have written into a single picture: your sent mail (`email-message` with a sent
`direction`), the `draft`s you prepare, your `slack-message`s, and any `voice-sample` you handed over
as a head start. It reads what you write, never what others send you, resolved to you by identity (your
own address and Slack user). You, and how you actually put words together.

The sharpest record here is derived: the gap between a `draft` the tool wrote and the `email-message`
you actually sent. That draft-to-sent comparison is computed, not fetched (marked `[derived]`), and it
is the strongest teacher of voice, because every rewrite is a fact about how you would have said it
instead. This also reconciles the loose labels the old notes used ("Sent email", "Draft edit", "Sent
Slack message") with the real channel records: a sent email is `email-message` filtered to your
direction, a draft edit is `draft` compared against its sent counterpart, a sent Slack message is
`slack-message`.

It does not decide that you are "warm but brisk" or "formal with new contacts". It only gathers your
writing into one place and lines up each draft with what you sent. The only real work is identity and
pairing: deciding which messages are yours, and which sent email closes which draft. The read above is
the [`voice`](../signals/voice.md) signal.

## Lineage

`email-message` and `draft` resolve to
[`channels/gmail.md`](../../01-integrations/channels/gmail.md); `slack-message` resolves to
[`channels/slack.md`](../../01-integrations/channels/slack.md); `voice-sample` resolves to
[`told.md`](../told.md), the optional sample you seed it with. The draft-to-sent edit is a `[derived]`
comparison over `draft` and `email-message`, not a separate fetched record.
