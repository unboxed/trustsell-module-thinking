---
id: competitive-standing
module: 03-offerings
label: How you compare with competitors
blurb: 'Where your offering stands against the named field: where you win, where a rival or incumbent wins, and whether lock-in is a live barrier.'
kind: risk
confidence: graded
inputs: [competitor-field, product-claims]
counts: [claims-we-win-on, claims-rival-wins-on, incumbent-lock-in-present, incumbent-data-or-contract-lock]
answers: [Q15, F3]
needs: [web]
assumes: []
assumes_status: provisional
---

# How you compare with competitors
## What it means

Where your offering stands against the field around it, on capability and on lock-in, never on price.

It reads one offering against its named field: where you are stronger, where a named rival or the
incumbent is stronger (including a capability the buyer needs and you do not have), and whether a
rival's lock-in is likely to block a switch.

It turns that side-by-side into a "watch for this", the way [`price-barrier`](price-barrier.md) does
for price. But it never touches the number: price is price-barrier's read, this one is capability and
lock-in. The "where you win" half is the angle [`lead-with-this`](lead-with-this.md) leans on; this
read's own spine is the barrier.

## In practice

Against the incumbent, your offering has a grounded claim on three counts the incumbent lacks
(two-way sync, one-day deploy, audit log) and loses on one the buyer asked for (offline mode). The
incumbent is in place, mid-contract, with data held in a proprietary export. The read: "you win on
capability, but the incumbent's lock-in is the live barrier. You are stronger on three counts, you
have one real gap on offline mode, and a switch means breaking a contract and a proprietary export, so
lead on a partial rollout that does not force a rip-out."

## How it is worked out

Applies the shared reading rules in [`docs/reading-principles.md`](../docs/reading-principles.md).

- Trigger: standing is read against the named field this offering actually competes with (the rivals
  on the board), not a global average, and against what the buyer asked for. A claim you win on that no
  buyer cares about does not lift the read, and one capability gap on something a buyer named can sink
  it. The read needs at least one rival or incumbent gathered to have a field to stand in. The one
  judgement, whether a lock-in will actually hold the buyer, is graded by how concrete the lock is (a
  dated contract and a proprietary export, versus a vague "they're used to it") rather than asserted.
  Price is deliberately out of scope, so the two competitive reads never double-judge the same thing.
- Confidence: graded on how complete the field is. High when several rivals are gathered with their
  claims and lock-in clear; soft when only one thin rival page was found.
- Needs: the open web, for rivals' public pages, claims and reviews; without it the
  field has holes and a rival's real capability is a data gap, named not faked. A switching cost in a
  private contract is a told gap People surfaces from the thread, not this read inventing it.
- Assumes: nothing about the shape of the sale. It reads the offering against its field and holds
  the same whoever the buyer is.
- Feeds the Brain's message play (Q12, which information is most relevant) without owning it: the
  standing is supplied, the move is the Brain's.
- **Which half of F3 it reaches** (what do they already run, and what budget sits behind it). It
  reads what they already run: the incumbent, and whether the lock-in around it is a live barrier
  or a soft one. The budget behind it, as a figure the buyer states, is on no record in the
  library. [`can-they-carry-it`](can-they-carry-it.md) reads what a buyer can bear from what they
  showed or said, which is the nearest thing and is not the same: what they can bear is read off
  their figures, and a budget is a number somebody was given. That is a told or handed-over fact
  nobody has, and it is named rather than guessed at from the size of the organisation.
  *(My reason, not yet yours.)*
