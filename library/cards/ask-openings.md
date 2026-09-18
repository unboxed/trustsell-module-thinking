---
id: ask-openings
order: 19
kind: ask
label: Ask
signal: voice
signal_status: provisional   # mapped by reading the card, not yet confirmed
counts: [draft-to-sent-edit-distance, greeting-and-signoff-pattern]
counts_status: provisional   # which numbers this quotes, not yet confirmed
person: you
documents: []
when:
  mode: rhythm
  words: "Five seconds."
reply:
  module: choices
answers:
  - label: "Yes, drop them"
    suggested: true
    says: "Done. I start with the point, everywhere, from the next draft."
  - label: "Keep them"
    says: "Fine. I'll leave them in and stop asking."
  - label: "Depends who"
    says: "Then I'll keep them for first contact and drop them for people you already know. Tell me if that's the wrong line."
actions:
  - label: "Not Now"
    says: "Okay. I'll ask again in a week, or sooner if it starts to matter."
---

# You rewrite most of my openings. Should I drop the pleasantries?

In 9 of the last 11 drafts you deleted the first sentence before sending. I'd rather learn than keep guessing.

## What I already know

- 11 drafts since August. In 9, the first sentence was deleted before sending: "I hope you're well", "Hope the week is going well".
- The 2 you kept were both to people you had not met.

## Where I ran out

- I can see what you changed. I can't see why.

## What I'll do with your answer

- Drop them: I open with the point, everywhere.
- Keep them: I leave them in and stop asking.
- Depends: first contact keeps them, people you know don't.

## Where I'll remember it

- In your voice profile, as a rule you set, with the date.
