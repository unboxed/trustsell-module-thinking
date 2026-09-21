---
id: distinct-worries-count
label: "Different worries raised"
used_by: [recurring-objection]
over: [objection-list]
over_status: decided   # decided 21 September, when the counts were written
defined: true
counts: How many different worries are on record across all your deals, as distinct things.
needs: [gmail#email-message, gmail#email-thread, slack#slack-message, sms#text-message, web-form#form-submission, offering-told#pitch, offering-told#use-case, offering-told#fit-shape, offering-told#worry-answer, offering-told#pricing]
breaks: Distinctness is the whole of it: too coarse and every worry is "price", too fine and nothing ever repeats.
---

# Different worries raised
## What it counts

Across every deal, how many separate worries are on record, grouped so the same worry in different
words counts once. One row per distinct worry, with how many deals it has appeared in.

Grouping is the only real work and the count states the grouping it used, so a seller who disagrees
can see why two things they think of as one were counted as two.

## What it cannot see

A worry that has never been said out loud on any deal, which is usually the one that decides
them.
