---
# COUNTING FLOOR. One doc per entry, at library/counts/<id>.md.
# THE SHAPE OF THIS RUNG IS NOT SETTLED YET. Every entry in counts/ today holds only two
# facts: its id, and which signals reference it. Nothing has been written about what any of
# them actually counts. That is deliberate, and it is the next piece of thinking to do.
#
# What a count is meant to be: PLAIN ARITHMETIC over records, checkable, holding no opinion.
# It is floor 2 in ../docs/tracing-back.md, the floor that makes track-back worth trusting.
# The moment a number needs judging, that judgement belongs one floor up, in a signal.
#
# Fields below marked OPEN are a suggestion, not a decision. Settle them before filling them in.
id: <kebab-slug>              # unique across the library
label: <Display name>         # plain English
used_by: [<signal-id>, ...]   # which signals reference it. Derived; build.js checks it matches.
over: [<assembly-id>]         # the assembly it counts within: the join down to the records.
                              # Every signal in used_by MUST read it. [] while not written yet.
defined: <true|false>         # false until someone has actually written what it counts
# OPEN, once the shape is agreed:
#   counts:  one line, the arithmetic said plainly
#   needs:   the records the sum is done over, addressed as <source-id>#<record-id>
#   breaks:  when the number stops meaning anything
---

# <label>

## What it counts

<!-- The arithmetic in plain English: what is summed, over what window, against what baseline.
     Precise enough that two people would compute the same number. No opinion, no threshold. -->

## What it cannot see

<!-- Where the number misleads: a source not connected (a data gap, named not faked), too
     little history for a baseline, a record the channel does not carry. -->
