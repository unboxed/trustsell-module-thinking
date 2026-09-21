---
id: act-tarlton-tender
order: 15
kind: act
signal: fit-match
signal_status: provisional   # mapped by reading the card, not yet confirmed
supporting: [buying-intent, warm-path]
supporting_status: provisional   # the reads its other counts belong to, not yet confirmed
counts: [fit-factors-met, budget-or-procurement-entered, target-cold-to-you]
counts_status: provisional   # which numbers this quotes, not yet confirmed
about: [darren-cole, tarlton]
to: darren-cole                # who the move reaches; one move per person at a time
arrives: 2026-09-18             # the day the tool puts it on the home
documents: []
sure: "sure"
sure_because: "A fact on record: the tender's own dates."
when:
  mode: dated
  until: 2026-10-02
  words: "By 2 October: clarification questions close. Start this week."
watch:                        # what I watch for once you act; a then card arrives only if it comes
  - for: "Tarlton's answers on the portal"
    until: 2026-10-02
reply:
  module: buttons
actions:
  - label: "Send the Questions"
    style: filled
    opens: draft
  - label: "Not Now"
    says: "Okay. I'll leave it and raise it again only if something changes."
  - label: "Not Relevant"
    opens: reasons
reasons:
  - label: "Already Knew"
    says: "Fair. I'll stop telling you things you already know about this one, and try to notice earlier next time."
  - label: "Wrong Person"
    says: "Noted. I'll stop raising this person for this and look for who it should be."
  - label: "Not a Target"
    says: "Understood. I'll take this off the board and not raise it again unless you put it back."
draft:
  title: "The clarification questions"
  hand: "Copy for the Portal"
  sub: "to the procurement contact"
  footer: "Send through the portal, not by email. I'll watch for the answer."
phone:
  when: "By 2 October"
  act: "View Questions"
  act_does: view
  said: "Copied. Paste them into the portal."
  done: "Copied for the portal"
  done_text: "The questions are on your clipboard for Tarlton's portal. I'll watch it for their answers, and ask you about bidding before 2 October."
---

# Send Tarlton two clarification questions

Their tender went out last Wednesday and reads like your pitch. Darren Cole is the named contact. You have never spoken to anyone there.

## What happened

- Why now: clarification questions close 2 October. A good question is the one legitimate way to talk to them during a tender.
- Section 2.3 asks to "reduce officer time on case administration" and section 4 wants a solution that "works alongside existing systems". Those are your two sentences.
- Tarlton is on your thirty and cold: no names, no threads. Darren Cole is procurement-facing; the service lead is unknown.
- Tender rules limit contact. The questions are the contact.

## Sources

- web · Tarlton's procurement portal, "Case management modernisation", published 9 September, closes 9 October, clarifications by 2 October.
- web · The tender PDF, sections 2 and 4.
- goal-told · Your list of thirty, Tarlton marked cold.
- linkedin · LinkedIn is not connected, so I can't see whether you know anyone there.

## Still unclear

- Whether a tender this size can be won cold. I have nothing to go on either way.

## What happens next

- Once sent I'll watch the portal for their answers and published Q&A, and I'll raise the bid or no-bid decision with you before 2 October.

## The draft

Dear Mr Cole,

Regarding the case management modernisation tender published 9 September, two clarification questions.

1. Section 2.3 refers to reducing officer time on case administration. Is there a baseline figure the council is working to, or is establishing one part of the scope?

2. Section 4 asks that the solution work alongside existing systems. Is replacement of the current case system in scope for a later phase, or explicitly out of scope?

Kind regards,

Fede
