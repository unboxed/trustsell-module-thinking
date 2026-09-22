---
id: act-renee-statements
order: 3
kind: act
signal: missing-documents
signal_status: decided   # 22 September: worked from the records up, see ../docs/pmf-pass.md. One request with its months named, two documents in, one out, and nobody has told her
counts: [documents-still-out, documents-received, answered-for-the-wrong-period]
counts_status: decided
about: [renee-sackville, bluebird-childcare]
to: renee-sackville
arrives: 2026-09-21
documents: []
widgets: [timeline]
sure: "sure"
sure_because: "A fact on record: what you asked for, and what came."
when:
  mode: fresh
  words: "Worth doing this morning. Marcus will not submit a short file."
watch:
  - for: "The August statement"
    next: "Once it lands the file is complete and I'll tell Marcus it is ready."
    otherwise: "If nothing comes by Wednesday I'll raise it again, once, and then leave it."
reply:
  module: buttons
actions:
  - label: "Send the Text"
    style: filled
    opens: draft
  - label: "Not Now"
    says: "Okay. I'll leave it and raise it again only if something changes."
  - label: "Not Relevant"
    opens: reasons
reasons:
  - label: "Already Knew"
    says: "Fair. I'll stop telling you things you already know about this one, and try to notice earlier next time."
  - label: "Already Have It"
    says: "Noted. I'll mark the August statement in and stop asking for it."
  - label: "Not a Target"
    says: "Understood. I'll take this off the board and not raise it again unless you put it back."
draft:
  title: "Draft"
  hand: "Send"
  sub: "in your voice · sends only when you say"
  footer: "One document, named."
phone:
  when: "This morning"
  act: "Send Text"
  act_does: send
  view: "View Draft"
  subject: "The August statement"
  said: "Sent. I'll watch for the August statement."
  done: "Sent to Renee"
  done_text: "I've asked for August by name rather than for the statements again. If it lands I'll tell Marcus the file is ready. If nothing comes by Wednesday I'll raise it once more and then leave it."
---

# Ask Renee Sackville for August, by name

Two of the three statements are in. Ask for the one that is missing rather than for all three again, so she does not resend what you already have.

## What happened

- Why now: she signed on Thursday and the file has been one document short since. Marcus will not put a short file to a funder, so nothing moves until August lands.
- You asked for three statements covering the last three months. Two came the same day, June and July.
- The one still out is August. I can say which because your request said which months it had to cover, not just how many documents.
- Nothing has come since Thursday and nothing has been asked of her since. Marcus marked the file short on Thursday evening, and nobody has told her.

## Timeline

- Thursday 17 September · She signs the application
- Thursday 17 September · Two statements arrive, June and July
- Since Thursday · Nothing either way

## Sources

- handover · Your request: three statements, covering June, July and August.
- handover · Two documents in, covering June and July.
- handover · No document covering August.
- people-told · Bluebird Childcare, the deal you named, standing at applied.

## Still unclear

- Whether she has August at all yet. A business account statement for a month is usually out within a few days of the month ending, so it should exist.

## What happens next

- I'll watch for a document covering August. When it lands the file is complete and I'll say so. If nothing comes by Wednesday I'll raise it once more, and then leave it rather than ask a third time.

## The message

- opens with · What came, by name: June and July, both through. The one thing you both already know · documents-received
- points at · The one still out, August, and what it unlocks: a complete file that can go out the same day · documents-still-out
- asks · One thing: August. The thanks and the ask share one text, which is the tempo · documents-still-out, goal-told
- holds back · Asking for all three again, and any hint the delay is hers: the file went short on Thursday evening and nobody told her · documents-received, chases-since-their-last-reply

## The draft

Hi Renee,

Thanks for the June and July statements, they both came through fine.

One left: August. That is the last one the funders need, and once it is in your file is complete and can go out the same day.

If it is easier to send a download from your banking app than a PDF, that works too.

Fede
