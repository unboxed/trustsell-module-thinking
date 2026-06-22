---
id: lead-with-this
label: Lead with this
blurb: For a buyer-type, the use-case and information to open with, and what to hold for later.
modes: [grow, plant]
kind: opening
confidence: graded
inputs: [offering-entry, objection-list]
measures: [dominant-worry-for-buyer-type, use-cases-on-file, relevance-to-stated-factors]
answers: [Q10, Q11, Q12, Q24]
needs: []
---

# Lead with this

## What it means

For a kind of buyer, the use-case to lead with, the information that is most relevant, and what to
hold back.

The tool points the angle. It feeds the Brain's message play (the "match the message to the person"
group, Q10 to Q12 and Q24): Offerings supplies the angle, the Brain decides the move. The angle is
chosen against this buyer-type's own concerns, not a fixed "always lead with X".

It is most confident when use-cases and the fit-shape are richly told, and it softens when only one
use-case is on file or the buyer-type's factors are thin. A use-case that maps to none of the factors
this buyer-type cares about is not the opener, however strong it is in general.

It cannot tell you which use-case actually wins (rather than which maps best): that is the parked
learning loop, and until outcomes are wired it ranks by relevance, not by track record. If you have
told it no use-cases, there is nothing to lead with.

## In practice

You have three use-cases on file (a full migration, a partial rollout you grow, a pilot). For a
cautious buyer-type, rollout risk and data residency top the worry list, and the partial-rollout
use-case maps to two of the three factors they lead with (continuity and risk) while full migration
maps to none. The read: "lead with the partial-rollout use-case. It speaks to the continuity and risk
this buyer-type cares about and sidesteps the rollout-risk worry that tops their list; hold full
migration for later."

## For the build

Applies the shared reading rules in [`docs/reading-principles.md`](../../docs/reading-principles.md).

- Trigger: the angle is chosen against this buyer-type's own concerns: which of the factors they care
  about a use-case actually speaks to, and which dominant worry it sidesteps or invites. A use-case
  that maps to none of their stated factors is not the opener, however strong it is in general. The
  read needs at least one use-case on file and a fit-shape that names what the buyer cares about; with
  neither it has nothing to rank. The one judgement, which angle leads, is guarded by ranking against
  the told factors rather than taste.
- Confidence: graded on grounding. High when use-cases and fit-shape are richly told; soft when only
  one use-case is on file or the buyer-type's factors are thin.
- Needs: no source dependency beyond the told use-cases, the told fit-shape, and the worries
  People put on record (the [`objection-list`](../assemblies/objection-list.md) it reads). If you have
  told it no use-cases there is nothing to lead with (a told gap). Which use-case actually wins is the
  parked learning loop, named not faked.
- Counts beneath it: the `measures` in the frontmatter (dominant worry for this buyer-type, use-cases
  on file, relevance to stated factors).
