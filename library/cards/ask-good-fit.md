---
id: ask-good-fit
order: 20
kind: ask
label: Ask
signal: fit-match
signal_status: provisional   # mapped by reading the card, not yet confirmed
counts: [fit-shape-completeness, fit-factors-met]
counts_status: provisional   # which numbers this quotes, not yet confirmed
person: you
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
    says: "Then I'll go with my guess for now: district or borough, 200 to 800 officers, a case system over ten years old, a digital lead in post under two years. Correct it any time."
  - label: "Not Now"
    says: "Okay. I'll ask again in a week, or sooner if it starts to matter."
---

# What does a good-fit council look like?

You named thirty. You never said why those thirty. Until I know, I can't spot the thirty-first.

## What I already know

- What your thirty share, as far as I can see: mostly district and borough councils; case systems over ten years old at the 19 where I can tell; a digital lead in post under two years at 14.
- My guess from that is written on the button. It is a guess, not your reason.

## Where I ran out

- The reason is yours and isn't written anywhere I can read. "Feels the legacy-tech pain" is a mindset, and I can only see behaviour.

## What I'll do with your answer

- Once I have it: I build a fit-scan from it and show you the first five candidates before adding anyone to the thirty.
- If you use my guess: same, but I'll flag every match as "on my guess" until you correct it.

## Where I'll remember it

- As "what a good fit looks like", the thing you told me. Editable, dated, and shown to you before it is ever used.
