---
# SIGNAL FLOOR. One doc per entry, at <module>/signals/<id>.md.
# Two layers in one file:
#   FRONTMATTER is the structured (machine) layer: flat facets only, no sentence-length prose.
#   THE BODY is the human layer, plain English / GDS style (sentence case, short sentences, say what
#   it means; a signal does not "fire" to a reader). Three consistent sections, below.
# A signal is the FIRST OPINION: a named read off an assembly that carries its evidence down to plain
# facts (the track-back tree). It APPLIES the shared rules in docs/reading-principles.md; it does not
# re-teach them. It earns its place by answering a real question (docs/sales-questions.md).
# Keep it AGNOSTIC: no named customers, offerings or people anywhere. Examples use generic placeholders.
id: <kebab-slug>                 # unique within this module's signals
label: <Display name>            # plain English, e.g. Cooling champion
blurb: <one line on what this read means>
modes: [<plant|grow|nurture>]    # which category(ies) of work it serves
kind: <opening|decay|deal-movement|risk|style>   # the family of read (style = a non-state read like Profile's voice)
confidence: <high|graded|low>    # graded = depends on how much evidence stacks (explain in For the build)
inputs: [<assembly-id>, ...]     # the assembly(ies) it reads. Each MUST resolve to ../assemblies/*
measures: [<count-id>, ...]      # the deterministic counts beneath the read (the checkable arithmetic)
answers: [Q##, ...]              # which sales questions (docs/sales-questions.md) it answers
needs: [<source-id>, ...]        # sources the read leans on; if one is missing, its checks drop out (a data gap)
pull: <optional: a fact it borrows from a supplier module, e.g. "Offerings' objection list">
---

# <label>

## What it means

<!-- Plain English: what the read is, when it applies, how confident it is, and what it cannot see.
     No named customers, offerings or people. Apply the own-rhythm rule (reading-principles.md);
     do not re-justify "there is no fixed N-day line" at length. -->

## In practice

<!-- One short, generic worked example (a contact, a prospect). Concrete numbers are fine for
     intuition; a case study is not. -->

## For the build

<!-- The precise rule, in tight structured English. Open by pointing at docs/reading-principles.md.
     - Trigger: how the measures combine into the read (own-rhythm, never a fixed number).
     - Confidence: what makes it high, what softens it.
     - Needs: the `needs` sources, and what drops out without them (a data gap, named not faked).
     - Counts beneath it: the `measures`. -->
