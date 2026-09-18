---
id: warm-path
module: 02-relationships
label: Warm path
blurb: A way to reach a target through someone you already know.
modes: [expand]
kind: opening
confidence: graded
inputs: [person-history, stakeholder-map]
counts: [shared-contact-on-thread, intro-chain-length, mutual-contact-count, target-cold-to-you]
answers: [Q7, Q8]
needs: [linkedin]
---

# Warm path

## What it means

A target you have never spoken to is reachable through someone you already deal with.

It does not just say "there is a path". It carries the chain, down to real names and dated records: the
threads that put a bridge contact next to the target, the domain they share, the empty history between
you and the target.

A path only counts as warm when the bridge is someone you genuinely deal with, not a name that brushed
past once. A real two-way history makes the intro warm. A single stray Cc does not. And a short chain
beats a long one: a one-hop intro is warmer than a chain of three you can barely vouch for.

## In practice

You have no thread with a decision-maker at a prospect, no shared meeting, no Slack overlap (cold to
you). One contact you know sits on 3 threads with that decision-maker and shares their email domain,
giving a chain of length 2 (you, the contact, the target). The read: "there's a one-hop warm path, and
here is the chain."

## For the build

Applies the shared reading rules in [`docs/reading-principles.md`](../docs/reading-principles.md).

- Trigger: you share no history with the target (cold to you) AND a contact with a real two-way rhythm
  with you sits next to the target on threads or a shared domain, forming a short chain. Judged against
  the bridge contact's own rhythm with you, not a fixed overlap count.
- Confidence: graded. High for a heavily-overlapping one-hop bridge; soft for a single thin link or a
  longer chain.
- Needs: LinkedIn for the mutual-connection web; without it the read sees only mail and Slack bridges
  and under-reports real paths (a data gap, named not faked).