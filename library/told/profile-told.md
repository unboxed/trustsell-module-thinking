---
id: profile-told
name: What you told me about yourself
source: told
icon: pencil
---

# What you told me about yourself
The facts only you can state about yourself, the seed the personal layer starts from. Here "told"
means a **seed, not a form**: you give it a starting handful, and from there it lives as memory,
refined as the tool watches you work. Nothing about you is frozen as a settings field. The `Source`
column says how each field comes in, and most of the dials carry the same note: seeded once, then
kept honest by behaviour.

The starting point is a **setup archetype**, a single choice about what kind of seller you are, which
**seeds the dials** below. At one end is someone who sells for a living; at the other, someone who
sells only because their role needs the organisation to win clients. The two sit at opposite ends of
nearly every dial (register, pace, how much coaching they want), so the archetype is the quickest way
to get the tool roughly right before behaviour tunes it. The dials stay individually adjustable; the
archetype just sets sensible starting positions.

This is raw data, not reading: the told pile is Floor 1, the seed the voice read and the dials stand
on. Where a record is empty, that is a **told gap**, named not faked, and Profile degrades gracefully:
it proposes a draft "About you" from your sent mail, or infers a dial from how you actually work, for
you to confirm, rather than stall. Each record below is a lineage anchor; its id is the kebab-slug of
its label (`Voice sample` becomes `voice-sample`), and that is what the assemblies and the module
reference.

## Records

| Record | Field | Source |
|---|---|---|
| About you | name | you, typed |
| About you | email | you, typed (also bootstraps before an account is connected) |
| About you | bio (your role and how you'd want to come across) | you, typed or proposed from sent mail |
| Setup archetype | the starting stance (sell for a living ↔ sell as part of my role) | you, pick at setup |
| Operator dial | sales fluency (sales shorthand ↔ plain English with coaching) | you, seeded by archetype, refined by behaviour |
| Operator dial | time and cadence (all day ↔ a few minutes now and then) | you, seeded by archetype, refined by behaviour |
| Operator dial | style (sustain a few ↔ work many) | you, seeded by archetype, refined by behaviour |
| Operator dial | autonomy (how far it drafts or acts before you step in) | you, seeded by archetype, refined by behaviour |
| Operator dial | coaching (just hand me the noun ↔ tell me why this person and what to say) | you, seeded by archetype, refined by behaviour |
| Voice sample | a piece of your writing | you, optional (else learned from sent mail) |
| Voice sample | its context (cold or warm, email or chat) | you, optional |

## In plain words

What a person reads, where it differs from the record's label. The label, and the id made from
it, do not change.

| Record | Plain name |
|---|---|
| Setup archetype | What kind of seller you are |
| Operator dial | Your preferences |
