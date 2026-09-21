---
id: act-marisol-list
order: 12
kind: act
signal: lead-with-this
signal_status: provisional   # mapped by reading the card, not yet confirmed
counts: [route-in-on-record, use-cases-on-file, dominant-worry-for-buyer-type]
counts_status: provisional   # which numbers this quotes, not yet confirmed
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
  - label: "Send the Text"
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
  footer: "Her own words at the stand, and one question. No pitch."
phone:
  when: "Today"
  act: "Send Text"
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
- Nothing else about her is on record. She has never written to you, and there is no form and no thread.

## Sources

- lead-list · Marcus's trade show list from August, and her entry on it: a van and a second cutter.
- lead-list · The list says you may say where the names came from.
- people-told · Delgado Tile and Stone, the deal you named, standing at interested.

## Still unclear

- **Whether she still needs it.** A month is long enough for a tile firm to have found the money elsewhere or given up on the van. I am leading with what she said because it is the only thing she has said, not because I think it is still true.
- **Whether Marcus has already worked her.** He worked the stand and the list is his. Nothing on record says whether he wrote to anyone on it, and if he did, this is the second approach rather than the first.

## What happens next

- If she comes back I'll ask you what she wants the money for, in her words, because what somebody tells a stand in August is not what they would tell you today.
- If nothing comes back I'll raise her once more next week and then stop. A list lead nobody works goes cold and stays cold, and chasing one is the shape of thing I am built to talk you out of.

## The draft

Hi Marisol, this is Fede. We met at the show in August, or rather you talked to my colleague Marcus at our stand.

You said then you were after a van and a second cutter. Did that get sorted?

If it did not, I can tell you in two minutes what the money would cost and whether it is worth it. If it did, say so and I will leave you alone.
