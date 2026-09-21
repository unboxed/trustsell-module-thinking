---
# COUNTING FLOOR. One doc per entry, at library/counts/<id>.md.
# THE SHAPE OF THIS RUNG WAS SETTLED ON 21 SEPTEMBER. Every entry now holds its id, a label, which
# signals reference it, the assembly it counts within, and the three fields below: `counts`,
# `needs` and `breaks`. A new count is written the same way; `defined: false` is for a count whose
# arithmetic genuinely has not been decided yet, and there are none today.
#
# What a count is meant to be: PLAIN ARITHMETIC over records, checkable, holding no opinion.
# It is floor 2 in ../docs/tracing-back.md, the floor that makes track-back worth trusting.
# The moment a number needs judging, that judgement belongs one floor up, in a signal.
#
id: <kebab-slug>              # unique across the library
label: <Display name>         # plain English
used_by: [<signal-id>, ...]   # which signals reference it. Derived; build.js checks it matches.
over: [<assembly-id>]         # the assembly it counts within: the join down to the records.
                              # Every signal in used_by MUST read it. Where more than one is
                              # possible, leave it empty and name the candidates:
                              #   over: []   # not written yet. One of: person-history, meeting-history
over_status: decided          # `provisional` only where a filled `over` was derived, not decided
defined: true                 # false only while the arithmetic genuinely has not been decided
counts: <one line, the arithmetic said plainly>
needs: [<source-id>#<record-id>, ...]   # the records the sum is done over; build.js checks and walks it
breaks: <one line: when the number stops meaning anything>
---

# <label>

## What it counts

<!-- The arithmetic in plain English: what is summed, over what window, against what baseline.
     Precise enough that two people would compute the same number. No opinion, no threshold. -->

## What it cannot see

<!-- Where the number misleads: a source not connected (a data gap, named not faked), too
     little history for a baseline, a record the channel does not carry. -->
