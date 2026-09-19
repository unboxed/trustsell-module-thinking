---
id: ask-openings
order: 19
kind: ask
signal: voice
signal_status: provisional   # mapped by reading the card, not yet confirmed
counts: [draft-to-sent-edit-distance, greeting-and-signoff-pattern]
counts_status: provisional   # which numbers this quotes, not yet confirmed
about: [you]
arrives: 2026-09-21             # the day the tool puts it on the home
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
phone:
  act: "Answer"
  act_does: open
  said: "Thank you. I'll write that way from now on."
  done: "Thank you"
  done_text: "I've saved it with how you like to sound, so every draft follows it."
---

# Should I leave the greetings out of my drafts?

In 9 of the last 11 drafts you deleted the first sentence before sending. I'd rather learn than keep guessing.

## Known so far

- 11 drafts since August. In 9, the first sentence was deleted before sending: "I hope you're well", "Hope the week is going well".
- The 2 you kept were both to people you had not met.

## What's missing

- I can see what you changed. I can't see why.

## What your answer changes

- Drop them: I open with the point, everywhere.
- Keep them: I leave them in and stop asking.
- Depends: first contact keeps them, people you know don't.

## Where your answer is saved

- In your voice profile, as a rule you set, with the date.
