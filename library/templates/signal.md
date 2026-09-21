---
# SIGNAL FLOOR. One doc per entry, at library/signals/<id>.md.
# Two layers in one file:
#   FRONTMATTER is the structured (machine) layer: flat facets only, no sentence-length prose.
#   THE BODY is the human layer, plain English / GDS style (sentence case, short sentences, one idea
#   each, say what it means; a signal does not "fire" to a reader). Three consistent sections, below.
# A signal is the FIRST OPINION: a named read off an assembly that carries its evidence down to plain
# facts (the track-back tree). It APPLIES the shared rules in ../docs/reading-principles.md; it does not
# re-teach them. It earns its place by answering a real question (../docs/sales-questions.md).
# Keep it AGNOSTIC: no named customers, offerings or people anywhere. Examples use generic placeholders.
id: <kebab-slug>                 # unique across the library
module: <module-id>              # which module owns the read, e.g. 02-relationships
label: <Display name>            # plain English, e.g. Cooling champion
blurb: <one line on what this read means>
kind: <opening|decay|deal-movement|risk|style>   # the family of read (style = a non-state read like Profile's voice)
confidence: <high|graded|low>    # graded = depends on how much evidence stacks (explain in How it is worked out)
inputs: [<assembly-id>, ...]     # the assembly(ies) it reads. Each MUST resolve to ../assemblies/*
counts: [<count-id>, ...]        # the counting floor beneath the read. Each MUST resolve to ../counts/*
answers: [Q##, ...]              # which sales questions (../docs/sales-questions.md) it answers
needs: [<source-id>, ...]        # sources the read leans on; if one is missing, its checks drop out (a data gap)
assumes: [<thread-under-way|own-rhythm|several-people|own-firm>]   # what the read needs to exist before it can stand
                                 #   thread-under-way = a conversation already under way with them
                                 #   own-rhythm       = enough history with them to know their usual
                                 #   several-people   = several people to win at the buyer
                                 #   own-firm         = a firm beside you, whose records you share
                                 # `[]` is a claim too: it stands on what it reads alone. build.js checks the words.
assumes_status: provisional      # read off the prose, not yet decided
pull: <optional: a fact it borrows from a supplier module, e.g. "Offerings' objection list">
---

# <label>

## What it means

<!-- Just the read and when it applies, in a few short plain sentences. One idea per sentence; put the
     point first. No named customers, offerings or people. Do NOT restate the blurb, re-teach own-rhythm
     (reading-principles.md), grade confidence, or list blind spots: those live in "How it is worked out". -->

## In practice

<!-- One short, generic worked example (a contact, a prospect). Concrete numbers are fine for
     intuition; a case study is not. -->

## How it is worked out

<!-- The precise rule, in tight structured English. The single home for how confident the read is and
     what it cannot see. Open by pointing at ../docs/reading-principles.md.
     - Trigger: how the counts combine into the read (own-rhythm, never a fixed number).
     - Confidence: what makes it high, what softens it.
     - Needs: what drops out when a `needs` source is missing (a data gap, named not faked).
     - Assumes: what the read needs to exist before it can stand, and what it says when that is not
       there (an assumption gap, named not faked). With `assumes: []`, say what it stands on instead.
     Do NOT re-list the `counts`, `needs` or `confidence` here: they are frontmatter facets already. -->
