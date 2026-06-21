---
# MODULE OVERVIEW. The slim card face plus the prose that is NOT a catalog.
# The catalog floors (raw data, assemblies, signals, ...) live in their own libraries
# (channels/, assemblies/, signals/); this file holds everything else about the module.
name: <Short name>            # the card eyebrow, e.g. People
title: <Your ___>             # the friendly heading, e.g. Your relationships
blurb: <one line: what it does>
icon: <lucide name>           # e.g. users, package, building, pen, brain, cable
optional: <true|false>        # true only for a module a solo user can skip (today: 04)
tier: <brain|assistant|connector>
modes: [<plant|grow|nurture>] # the categories of work it serves
connects:                     # two-way links to other modules (request out, provide back)
  - to: <module-id>           #   e.g. 00-spine
    requests: <what this module asks the other to do or hand over>   # omit if it only answers
    provides: <what this module hands back>                          # omit if it only asks
draws_from: [<channel-id>, ...]   # the channels (01 sub-items) it pulls raw data through
---

# <NN · Name>

<!-- Overview: one paragraph on what this module is the expert on. -->

## Principles
<!-- How it works, one line each. -->

## System prompt
<!-- The operating stance, in prose (brainstorm-level, not deployable wording). -->

## User input
<!-- The "told" pile: what only the user can supply, that no fetched data will reveal. -->

## Output
<!-- What it hands up, and to whom. Everything it surfaces is a suggestion. -->

## Memory
<!-- What it keeps, and which tier (shared = org-wide, or personal = one per user). -->

## Open questions
<!-- A plain bulleted list of what is still unsettled. -->

<!-- The two catalog sections of the old agent-anatomy now live as libraries:
       Raw data             -> channels/   (raw-data floor; owned by 01)
       Reasoning (assemble) -> assemblies/
       Reasoning (sense)    -> signals/
     This file keeps a one-line pointer to them instead of the prose catalog. -->
