---
id: ask-conference-list
order: 9
kind: ask
signal: colleague-already-in-touch
signal_status: decided   # 23 September: written from the records up, see ../docs/cority-pass.md. A list handed to several people cannot say who has worked which name, and the CRM logs a touch against an account, not against a list; the count that says who at your firm has been in touch is blind here, and a told record nobody has filled produces an Ask
supporting: [lead-with-this]   # the list is the read's first line: how you came by each name, cleared to be said
supporting_status: decided
counts: [colleague-touches-on-record, route-in-on-record]
counts_status: decided
about: [you, nadia-frost]
arrives: 2026-09-22
documents: []
when:
  mode: rhythm
  until: 2026-09-25
  words: "This week, before the list goes stale."
reply:
  module: field
  placeholder: "The names you or Owen have already written to, or 'none'."
actions:
  - label: "Tell Me"
    style: filled
    confirms: field
    says: "Thank you. I'll mark those as worked, keep them out of anyone's cadence, and raise the rest one at a time as I did with Ian."
  - label: "Not Now"
    says: "Okay. Until I know, I'll assume nobody has, and say so on every card I raise from the list."
phone:
  when: "This week"
  act: "Answer"
  act_does: open
  said: "Thank you. I'll mark them worked."
  done: "Thank you"
  done_text: "I've marked those names as worked and kept them out of the cadences. The rest I'll raise one at a time, with what each person said at the stand."
---

# Who has already written to the names on Nadia's list?

Twenty-five people signed in at the stand on 3 September. Nadia's list says what each of them said and that you may say where you got them. It does not say who has written to whom since, and neither does anything else.

## Known so far

- Twenty-five names, handed over on 8 September, every one cleared to be told where they came from. One of them, Ian Faulds, has a card of his own.
- The list went to more than one person. Owen's team runs cadences off exactly this kind of sheet, and the CRM logs a touch against an account, not against a list, so a name that is not yet an account leaves no trace when somebody writes to it.
- The sheet says what each person said at the stand. It does not say who at the stand they said it to, so it cannot tell your conversation from a colleague's.

## What's missing

- Who has been in touch with which of the twenty-five since the 8th. That is the one fact the read that counts your firm's contact needs, and here it is on no record: not on the list, not on the CRM until an account exists, not in the workspace unless somebody mentions it.

## What your answer changes

- Names you or Owen have written to: marked worked, kept out of every cadence, and raised only if something comes back.
- The rest: raised one at a time, as Ian was, opening on what each said at the stand.
- If you say nobody has: I take the list as unworked and say so on every card I raise from it.

## Where your answer is saved

- Against each name on the list, as a contact by your firm with a date, which is the record the list was missing. From then on a second approach to any of them is counted as a second.
