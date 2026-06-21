---
# SIGNAL FLOOR. One (rich) doc per entry, at <module>/signals/<id>.md.
# Frontmatter holds only the flat facets (the future chips). The reasoning (the worked
# example, the threshold rule, why it is trustworthy) lives in the BODY, where it reads.
# A signal is the FIRST OPINION: a named, reusable read off an assembly that carries its
# evidence down to plain facts (track-back). It earns its place only by answering a real
# salesperson's question (docs/sales-questions.md).
id: <kebab-slug>                 # unique within this module's signals
floor: signal
label: <Display name>            # plain English, e.g. Cooling champion
blurb: <one line: what this read means>
inputs: [<assembly-id>, ...]     # the assembly(ies) it reads. Each MUST resolve to ../assemblies/*
measures: [<count-id>, ...]      # the deterministic Floor-2 counts beneath the read (the checkable arithmetic)
answers: [Q##, ...]              # which of the 26 sales questions (docs/sales-questions.md) it answers
modes: [<plant|grow|nurture>]    # which category(ies) of work it serves
kind: <opening|decay|deal-movement|risk>   # the family of read
confidence: <high|graded|low>    # graded means it depends on how much evidence stacks up (explain in the body)
pull: <optional: a fact it borrows from a supplier, e.g. "Offerings' objection list to name the objection">
---

# <label>

<!-- The worked example, traced to the floor. A small table is the clearest form:

       | Floor       | What the module has                                    |
       |-------------|--------------------------------------------------------|
       | Facts (1)   | the dated records underneath                           |
       | Counts (2)  | the arithmetic, including the innocent-explanation scan |
       | Opinion (3) | the read plus its confidence                           |
-->

**Threshold.** <!-- the rule that turns the count into an opinion, measured against the
relationship's OWN rhythm. Never a fixed number of days. -->

**Why it's trustworthy.** <!-- most of it is deferred counting; the arguable residue is guarded. -->

**Where it can fail to reach ground.** <!-- name the data gap (e.g. thin without LinkedIn). Never fake it. -->
