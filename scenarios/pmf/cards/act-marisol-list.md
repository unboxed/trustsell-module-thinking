---
id: act-marisol-list
order: 12
kind: act
signal: lead-with-this
signal_status: decided   # 22 September: worked from the records up, see ../docs/pmf-pass.md. The read's angle half is silent, no use-case is told; its first-line half holds: how you came by her, cleared to be said, and her own words on the list
supporting: [colleague-already-in-touch]   # Marcus, at the stand, 20 August: the one approach she has had, on the list he handed over and in his CRM note
supporting_status: decided
counts: [route-in-on-record, use-cases-on-file, dominant-worry-for-buyer-type, colleague-touches-on-record, since-last-colleague-touch]
counts_status: decided
about: [marisol-delgado, delgado-tile]
to: marisol-delgado
arrives: 2026-09-21
documents: []
widgets: []
sure: "sure"
sure_because: "Her own words at the stand are on the list, and the list says you may say where you got them."
when:
  mode: fresh
  words: "A month is late. Two is a stranger."
watch:
  - for: "Marisol's reply"
    next: "If she comes back I'll treat it as a live lead and ask you what she wants the money for, in her words."
reply:
  module: buttons
actions:
  - label: "Send the Email"
    style: filled
    opens: draft
  - label: "Not Now"
    says: "Okay. I'll raise her again next week, and stop after that: a list lead you never work goes cold and stays cold."
  - label: "Not Relevant"
    opens: reasons
reasons:
  - label: "Already Called Her"
    says: "Noted. Tell me how it went when you have a moment and I'll stop raising her."
  - label: "Marcus Has It"
    says: "Understood. I'll take the trade show names as his and only raise the ones you worked yourself."
  - label: "Not a Target"
    says: "Understood. I'll take her off the board and not raise her again unless you put her back."
draft:
  title: "Draft"
  hand: "Send"
  sub: "in your voice · sends only when you say"
  footer: "Her own words at the stand, and one question. No pitch. By mail, because no consent to text her is on record."
phone:
  when: "Today"
  act: "Send Email"
  act_does: send
  view: "View Draft"
  subject: "The van and the second cutter"
  said: "Sent. She is a live lead now."
  done: "Sent to Marisol"
  done_text: "I've marked her worked. If she comes back I'll ask you what she wants the money for in her own words, because what she told a stand in August is not what she would tell you today."
---

# Write to Marisol Delgado, a month after she asked

Her name came off Marcus's trade show list in August. She told the stand she needed a van and a second cutter. Nobody has written to her.

## What happened

- Why now: it is a month since she said it out loud to somebody at your stand. A month is late and two is a stranger, and the thing she needed in August is either bought by now or still needed.
- You can say where you got her. The list says so, so the first line writes itself and it is not a cold call.
- What she said she needed is on the list in her own words: a van and a second cutter. That is what the opening leads with, not the product.
- Nothing else about her is on record. She has never written to you, and there is no form and no thread. Marcus spoke to her at the stand on 20 August and imported the list four days later; that is the one approach she has had.
- This goes by mail, not text. The sheet says she is happy to hear from you and does not say by which way, and no consent to text her number is on record. A first text without it is the thing the trade gets fined for.

## Sources

- lead-list · Marcus's trade show list from August, and her entry on it: a van and a second cutter.
- lead-list · The list says you may say where the names came from, and that everyone on it ticked "happy to hear from you"; nothing about texting.
- crm · Marcus's note on import, 24 August: he spoke to her at the stand on the 20th.
- sms · No consent to text her on record.
- people-told · Delgado Tile and Stone, the deal you named, standing at interested.

## Still unclear

- **Whether she still needs it.** A month is long enough for a tile firm to have found the money elsewhere or given up on the van. I am leading with what she said because it is the only thing she has said, not because I think it is still true.
- **Whether Marcus wrote to her after the stand.** His conversation at the stand is on record; anything from his own mailbox since is not. If he did, this is the third approach rather than the second.

## What happens next

- If she comes back I'll ask you what she wants the money for, in her words, because what somebody tells a stand in August is not what they would tell you today.
- If nothing comes back I'll raise her once more next week and then stop. A list lead nobody works goes cold and stays cold, and chasing one is the shape of thing I am built to talk you out of.

## The message

- opens with · How you came by her, which the list clears you to say, and her own words at the stand · route-in-on-record
- points at · The van and the second cutter, hers, and nothing of yours: no use-case is on file to lead with · route-in-on-record, use-cases-on-file
- asks · One thing: did it get sorted. A yes ends it and a no is the conversation · route-in-on-record, goal-told
- holds back · The product, the price and any claim to know more than the stand heard; Marcus is named because the list clears the door, and the message goes by mail because no consent to text is on record · colleague-touches-on-record, sms

## The draft

Hi Marisol,

This is Fede. You talked to my colleague Marcus at our stand at the show in August, and left your details.

You said then you were after a van and a second cutter. Did that get sorted?

If it did not, I can tell you in two minutes what the money would cost and whether it is worth it. If it did, say so and I will leave you alone.
