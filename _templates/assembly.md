---
# ASSEMBLY FLOOR. One (thin) doc per entry, at <module>/assemblies/<id>.md.
# An assembly is a DETERMINISTIC gather: it tidies scattered records into one picture
# (a person, a conversation, an organisation). Nothing is judged here; it is the floor a
# reading stands on.
id: <kebab-slug>              # unique within this module's assemblies
floor: assembly
label: <Display name>         # plain English, e.g. Person history (not jargon like "dossier")
blurb: <one line: what this gathers>
about: <a person|a conversation|an organisation>   # what a single instance is keyed on
deterministic: true           # always true for an assembly; no opinion lives here
inputs:                       # what it gathers, one floor down. Each id MUST resolve.
  - <record-id>               #   a channel record id (defined in 01-integrations/channels/*)
  - <assembly-id>             #   an assembly may also gather another assembly (e.g. stakeholder-map draws on person-history)
---

# <label>

<!-- A few lines: which records it pulls together and how it is keyed (the identity work it
     does). Then say plainly why this is FLOOR, not reading. Any address book or CRM does this
     much; the judgement happens above, in the signals that read this picture. -->
