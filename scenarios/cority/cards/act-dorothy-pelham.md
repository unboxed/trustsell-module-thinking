---
id: act-dorothy-pelham
order: 4
kind: act
signal: colleague-already-in-touch
signal_status: decided   # 23 September: worked from the records up, see ../docs/cority-pass.md. Six touches of Owen's on the deal record, none answered, and neither the thread nor the transcript of 8 September mentions them
counts: [colleague-touches-on-record, since-last-colleague-touch]
counts_status: decided
about: [dorothy-nwosu, pelham, owen-clark]
to: dorothy-nwosu
arrives: 2026-09-21
documents: []
widgets: [people]
sure: "sure"
sure_because: "Six touches from Owen against Pelham on the deal record, June, with no reply to any of them."
when:
  mode: fresh
  words: "Before the second conversation, not after she works it out."
watch:
  - for: "Dorothy's reply"
    next: "If she says she remembers the emails, I'll mark Pelham as worked by Owen and keep his cadences off it."
reply:
  module: buttons
actions:
  - label: "Send the Note"
    style: filled
    opens: draft
  - label: "Not Now"
    says: "Okay. I'll raise it again if Owen touches Pelham a seventh time."
  - label: "Not Relevant"
    opens: reasons
reasons:
  - label: "Already Knew"
    says: "Fair. I'll stop telling you things you already know about this one."
  - label: "Different Person"
    says: "Noted. Tell me who Owen actually reached and I'll keep the two apart."
  - label: "Not a Target"
    says: "Understood. I'll take Pelham off the board and not raise it again unless you put it back."
draft:
  title: "Draft"
  hand: "Send"
  sub: "in your voice · sends only when you say"
  footer: "Says it first. No apology for a thing that is not wrong."
phone:
  when: "Today"
  act: "Send Note"
  act_does: send
  view: "View Draft"
  subject: "Before we go further, one thing"
  said: "Sent. It is said, and said by you."
  done: "Sent to Dorothy"
  done_text: "I've noted that Pelham knows. I'll keep Owen's cadences off this account while you are in the conversation, and tell you if one starts anyway."
---

# Tell Dorothy Nwosu your firm has been here before

Owen ran a cadence at Pelham in June. Six touches, no reply to any of them. Your first conversation with her was on 8 September and nobody mentioned it.

## What happened

- Why now: you have had one good conversation and there will be a second. This is worth saying before she says it, because said first it is a large firm doing its job, and said second it is a firm that does not know what it is doing.
- Owen's six touches ran from 2 June to 24 June, against Pelham, on the deal record. Four emails, a call and a message.
- Nothing came back to any of them. She may never have seen them. Neither your thread nor the transcript of your call on 8 September mentions June, on either side.
- You have said the rule you work under is being able to say how you came by someone. It is not written down for me as a rule; if it were, I would check every first note against it. This is that rule kept, and it costs nothing when you say it yourself.

## People

- Dorothy Nwosu · Chief Medical Officer · First conversation 8 September, about why rather than features
- Owen Clark · your business development rep · Six touches at Pelham in June, none answered
- You · enterprise account executive · One conversation, and a second to come

## Sources

- crm · Six activities against Pelham between 2 and 24 June, all Owen's.
- gmail · Your own thread with Dorothy, opened 8 September. No mention of June on either side.
- slack · Owen's note in the account channel on 24 June: moving on from Pelham.
- meet · The transcript of 8 September: no mention of June by either of you.

## Still unclear

- **Whether the June emails reached her at all.** I can see they were sent and that nothing came back. Whether they went to her, to a shared inbox or to somebody who left, I cannot tell.
- **Whether your firm wants this said.** I think saying it is right and cheap. It is a judgement about how your firm looks, which is yours and not mine.

## What happens next

- Once it has gone I'll keep Owen's cadences off Pelham while you are in the conversation, and tell you if one starts anyway.
- If she says she remembers the emails I'll mark the account as worked by Owen, so nothing like this comes up twice.

## The message

- opens with · What a colleague did, on record: six touches in June, said plainly and first · colleague-touches-on-record
- points at · Nothing to send. The fact and its dates are the whole of it · since-last-colleague-touch
- asks · One thing: half an hour the week after next. Her own "let's talk again" makes it hers to place · goal-told, gmail
- holds back · An apology for a thing that is not wrong, and what Owen's emails said, which she can read for herself · colleague-touches-on-record

## The draft

Hi Dorothy,

One thing before we go further, so you hear it from me rather than find it in your archive.

A colleague of mine reached out to Pelham a few times in June, before you and I spoke. Nothing came back, which is fair enough, and I only mention it so it is not a surprise if you come across it.

From here it is me. Shall we put half an hour in for the week after next?

Fede
