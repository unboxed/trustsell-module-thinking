---
id: open-items
family: detail
label: Open items
blurb: What is owed and not yet done, and how long it has waited.
shape: an empty circle, what is owed and by whom, and its age on the right
parts: 3
waits_on: counts   # reaches no record until the counts it rests on are written
fed_by: [promise-made-undelivered, ask-made-unanswered, days-open-vs-own-rhythm]
---

# Open items

## What it shows

Things left hanging: a promise you made and haven't kept, a question someone asked and got no
answer to, a blocker standing in the way. Promises and blockers are one widget because they
have one shape: something owed, by someone, for some time.

It rests only on counts, and none of them can say yet which assembly it counts within (each has
`over: []`). So the widget is wired in but reaches no record yet: the rows on a card are read off
the card, not counted.

It is also the one widget whose rows are a reading rather than a record. No channel carries a
"promise" or a "blocker": both are drawn from words and a date (your line "I'll send it this
week", and when you wrote it). Once the counts are written it may turn out to be Their words with
an age, and fold into it.

## Row form

`<what is owed> · <who owes it, and since when> · <how long>`
