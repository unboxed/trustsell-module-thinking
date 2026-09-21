---
id: objection-entry-exists
label: "Answer on file for this worry"
used_by: [answer-gap]
over: [objection-list]
over_status: decided   # decided 21 September, when the counts were written
defined: true
counts: Whether a worry on record has an entry with an answer written for it.
needs: [offering-told#pitch, offering-told#use-case, offering-told#fit-shape, offering-told#worry-answer, offering-told#names-in-the-field, gmail#email-message, gmail#email-thread, slack#slack-message, sms#text-message]
breaks: An entry with no answer in it is not an entry, and the count keeps the two apart.
---

# Answer on file for this worry
## What it counts

For each worry on record, whether your told material holds an entry for it, and whether that entry
actually carries an answer. Three states per worry: no entry, an entry with no answer, an entry
with an answer.

The middle state is the one worth having. It is the difference between a worry nobody has thought
about and one somebody catalogued and never answered.

## What it cannot see

A worry answered brilliantly by a person, every time, and never written down.
