---
id: ask-good-fit
order: 21
kind: ask
signal: fit-match
signal_status: decided   # 22 September: worked from the seller's own records, see ../docs/no-person-pass.md. The fit-shape is told in a sentence of prose, so fit-match cannot rank, and a told record too thin to match against produces an Ask
counts: [fit-shape-completeness, fit-factors-met]
counts_status: decided
about: [you]
arrives: 2026-09-16             # today: the one card that asks for your own words
documents: []
reply:
  module: field
  placeholder: "A sentence or two, in your words."
actions:
  - label: "Tell Me"
    style: filled
    confirms: field
    says: "Thank you. I'll write that down as what a good fit looks like, and show you the first five councils that match before I add any of them."
  - label: "Use Your Guess"
    style: tinted
    says: "Then I'll go with my guess for now: district or borough, a case system over ten years old, a digital lead in post under two years. Correct it any time."
  - label: "Not Now"
    says: "Okay. I'll ask again in a week, or sooner if it starts to matter."
phone:
  act: "Answer"
  act_does: open
  said: "Thank you. I'll show you the first five matches."
  done: "Thank you"
  done_text: "I've written it down as what a good fit looks like. I'll show you the first five councils that match before I add any of them."
---

# What does a good-fit council look like?

You named thirty. You never said why those thirty. Until I know, I can't spot the thirty-first.

## Known so far

- Your profile says who BOPS is for: councils in the UK, a service lead with ten to forty officers, a legacy case system. Every one of the thirty is a council, and that is the only one of the three I can check from outside.
- What the thirty share, as far as I can see: mostly district and borough councils; a case system over ten years old at the 19 where a contracts register or a tender dates it; a digital or IT lead in post under two years at 14. None of that is a factor you have told me, so none of it counts as met or missed.
- Your goal says "individuals inside councils who feel the pain of legacy tech". That is a mindset. I can only see behaviour.
- My guess from that is written on the button. It is a guess, not your reason.

## What's missing

- The reason is yours and isn't written anywhere I can read. "Feels the legacy-tech pain" is a mindset, and I can only see behaviour.

## What your answer changes

- Once I have it: I build a fit-scan from it and show you the first five candidates before adding anyone to the thirty.
- If you use my guess: same, but I'll flag every match as "on my guess" until you correct it.

## Where your answer is saved

- As "what a good fit looks like", the thing you told me. Editable, dated, and shown to you before it is ever used.
