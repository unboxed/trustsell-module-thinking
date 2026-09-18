---
# THE CATALOG. One doc per widget, at library/widgets/<id>.md.
# A widget is one thing a card can show, in a shape the seller learns once. It sits BESIDE the
# ladder, not on it: it holds no reading of its own, it is how a card shows the evidence a
# rung below already holds. The catalog is fixed; a card picks from it and fills it, and never
# arranges it. Keep it AGNOSTIC: no named people, councils or documents.
# Two families. DETAIL widgets sit in a card's details, between the story and Not sure; a card
# takes at most two. REPLY widgets fill the sheet a card's reply is given in; a card takes one.
id: <kebab-slug>              # unique across the library
family: <detail|reply>
label: <Display name>         # plain English; for a detail widget this is also the heading of
                              # the card's body section that holds its rows
blurb: <one line on what it shows>
shape: <what it looks like, in words>   # widgets are told apart by shape, never by meaning:
                              # no new widget without a new shape
parts: <n>                    # DETAIL ONLY. How many " · "-separated parts each row has
rows: <n>                     # DETAIL ONLY, optional. An exact number of rows, where the shape needs it
waits_on: <counts>            # DETAIL ONLY, and only while fed_by reaches no record. build.js
                              # walks fed_by down to the records it can show; a widget that
                              # reaches none must say what it waits on, and must drop this line
                              # once it reaches some
fed_by: [<assembly-or-count-id>, ...]   # DETAIL ONLY. What the rows are read from. Each MUST
                              # resolve, and a card may use the widget only if one of these is
                              # among what the card rests on (its counts, its signal's inputs,
                              # and the assemblies those gather)
---

# <label>

## What it shows

<!-- What the widget is for, in plain English, and when a card would reach for it. If it rests
     on something unfinished (the counts), say so. -->

## Row form

<!-- The one fixed pattern for a row, as `<part> · <part>`. Reply widgets have no rows: say where
     their words come from instead. -->
