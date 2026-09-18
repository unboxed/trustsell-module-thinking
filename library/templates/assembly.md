---
# ASSEMBLY FLOOR. One doc per entry, at library/assemblies/<id>.md.
# An assembly is a DETERMINISTIC gather: it tidies scattered records into one picture (a person, a
# conversation, an organisation). Nothing is judged here; it is the floor a reading stands on.
# Two layers in one file: FRONTMATTER is the structured (machine) layer; THE BODY is the human layer,
# plain English / GDS style, in two consistent sections. Keep it AGNOSTIC: no named people.
id: <kebab-slug>              # unique across the library
module: <module-id>           # which module owns the gather, e.g. 02-relationships
label: <Display name>         # plain English, e.g. Person history (not jargon like "dossier")
blurb: <one line on what this gathers>
about: <a person|a conversation|an organisation|an offering|a deal>   # what a single instance is keyed on
deterministic: true           # always true for an assembly; no opinion lives here
inputs:                       # what it gathers, one floor down. Each id MUST resolve.
  - <channel-id>#<record-id>  #   a record, addressed by the source that carries it: gmail#email-message
  - <assembly-id>             #   an assembly may also gather another assembly (e.g. stakeholder-map draws on person-history)
---

# <label>

## What it gathers

<!-- Which records it pulls together and the identity work it does (how a single instance is keyed),
     in plain English, agnostic (no named people). Use a plain list where it gathers several things.
     No need to say "this is floor, not reading": living in assemblies/ already says it. -->

## Where it comes from

<!-- Which input id resolves to which channel doc (../channels/* or ../told/*), so the
     gather walks all the way down to raw data. Every id must resolve; name a gap, do not fake it. -->
