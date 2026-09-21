---
id: draft-to-sent-edit-distance
label: "How much you change my drafts"
used_by: [voice]
over: [writing-history]
over_status: decided   # decided 21 September, when the counts were written
defined: true
counts: How much you change a draft before you send it, and what you change.
needs: [gmail#email-message, gmail#email-thread, slack#slack-message, sms#text-message, gmail#draft, sms#draft, profile-told#voice-sample]
breaks: It needs a body of your own writing before any of it means anything: under about thirty sent messages the medians move with every new one.
---

# How much you change my drafts
## What it counts

For every draft the tool offered that was sent, how much of it survived: the edit distance between
what was offered and what went, and what kind of thing was changed, by section.

It is the only count in the library that measures the tool rather than the sale, and it is the one
that tells it whether it has learned a voice or is being tolerated. A draft sent untouched is the
highest mark there is.

## What it cannot see

Why an edit was made. A sentence cut for length and one cut because it was wrong look the same, and
the tool has to ask rather than assume.
