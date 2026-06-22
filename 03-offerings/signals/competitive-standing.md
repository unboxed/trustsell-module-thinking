---
id: competitive-standing
label: Competitive standing
blurb: 'Where your offering stands against the named field: where you win, where a rival or incumbent wins, and whether lock-in is a live barrier.'
modes: [grow]
kind: risk
confidence: graded
inputs: [competitor-field]
measures: [claims-we-win-on, claims-rival-wins-on, incumbent-lock-in-present, incumbent-data-or-contract-lock]
answers: [Q15]
needs: [web]
---

# Competitive standing

## What it means

Where your offering stands against the field around it, on capability and on lock-in, never on price.

The tool reads one offering against its named field: where you are stronger, where a named rival or
the incumbent is stronger (including a capability the buyer needs and you do not have), and whether a
rival's lock-in is likely to stand as a barrier to a switch. It turns the side-by-side of claims and
lock-in into a "watch for this", the way [`price-barrier`](price-barrier.md) does for price, but it
never touches the number itself: that is price-barrier's read, this one is about capability and
lock-in. The "where you win" half is the angle [`lead-with-this`](lead-with-this.md) leans on; this
read's own spine is the barrier.

It is most confident when several rivals are gathered with their claims and lock-in clear, and it
softens when only one thin rival page was found. Lock-in reads as a likely barrier only when it is
concretely present (a live contract, a proprietary format, a real switching hassle), not on the bare
fact that an incumbent exists.

It leans on the open web for the rivals' published claims and reviews. Much enterprise capability is
unpublished, so what it reads off public pages may understate or overstate what a rival really does;
it names that rather than asserting. A switching cost that lives in a private contract is invisible
until the buyer tells you.

## In practice

Against the incumbent, your offering has a grounded claim on three counts the incumbent lacks
(two-way sync, one-day deploy, audit log) and loses on one the buyer asked for (offline mode). The
incumbent is in place, mid-contract, with data held in a proprietary export. The read: "you win on
capability, but the incumbent's lock-in is the live barrier. You are stronger on three counts, you
have one real gap on offline mode, and a switch means breaking a contract and a proprietary export, so
lead on a partial rollout that does not force a rip-out."

## For the build

Applies the shared reading rules in [`docs/reading-principles.md`](../../docs/reading-principles.md).

- Trigger: standing is read against the named field this offering actually competes with (the rivals
  on the board), not a global average, and against what the buyer asked for. A claim you win on that no
  buyer cares about does not lift the read, and one capability gap on something a buyer named can sink
  it. The read needs at least one rival or incumbent gathered to have a field to stand in. The one
  judgement, whether a lock-in will actually hold the buyer, is graded by how concrete the lock is (a
  dated contract and a proprietary export, versus a vague "they're used to it") rather than asserted.
  Price is deliberately out of scope, so the two competitive reads never double-judge the same thing.
- Confidence: graded on how complete the field is. High when several rivals are gathered with their
  claims and lock-in clear; soft when only one thin rival page was found.
- Needs: the open web (the `needs` field) for rivals' public pages, claims and reviews; without it the
  field has holes and a rival's real capability is a data gap, named not faked. A switching cost in a
  private contract is a told gap People surfaces from the thread, not this read inventing it.
- Counts beneath it: the `measures` in the frontmatter (claims you win on, claims a rival wins on,
  incumbent lock-in present, data-or-contract lock).
- Feeds the Brain's message play (Q12, which information is most relevant) without owning it: the
  standing is supplied, the move is the Brain's.
