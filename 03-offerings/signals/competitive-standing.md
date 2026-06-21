---
id: competitive-standing
floor: signal
label: Competitive standing
blurb: 'Where your offering stands against the named field: where you win, where a rival or incumbent wins, and whether lock-in is a live barrier.'
inputs: [competitor-field]
measures: [claims-we-win-on, claims-rival-wins-on, incumbent-lock-in-present, incumbent-data-or-contract-lock]
answers: [Q15]
modes: [grow]
kind: risk
confidence: graded
---

# Competitive standing

A Grow read on one offering against the field around it: where you are stronger, where a named rival
or the incumbent is stronger (including a capability the buyer needs and you do not have), and whether
a rival's lock-in is likely to stand as a barrier to a switch. It reads the
[`competitor-field`](../assemblies/competitor-field.md) gather and turns the side-by-side of claims and
lock-in into a "watch for this", the way [`price-barrier`](price-barrier.md) does for price, but it
**never touches price itself**: the number is price-barrier's, this read is about capability and
lock-in.

| Floor | What Offerings has |
|---|---|
| **Facts** (1) | your product's claims (carried in the offering entry the field stands on); the named rivals and the incumbent the `competitor-field` gathered, with their own claims, their lock-in bet, and their public reviews |
| **Counts** (2) | *claims you win on:* 3 (two-way sync, one-day deploy, audit log) where you have a grounded claim and the incumbent does not · *claims a rival wins on:* 1 (offline mode, which a buyer asked for and you do not have) · *incumbent lock-in present:* yes, the incumbent is in place · *data-or-contract lock:* their data sits in a proprietary export and the council is mid-contract |
| **Opinion** (3) | **"You win on capability, but the incumbent's lock-in is the live barrier"**: stronger on three counts, one real gap (offline mode), and a switch means breaking a contract and a proprietary export · *confidence: graded* |

What surfaces is not "you're better" but *"against the incumbent you win on sync, deploy speed and
audit, you lose on offline mode they asked about, and the real barrier is the switch itself: they are
mid-contract and their data is locked in a proprietary format, so lead on a partial-rollout that does
not force a rip-out."* Every clause walks back to a claim on a page and a lock-in named in the field.
The "where you win" half is the **angle** [`lead-with-this`](lead-with-this.md) leans on; this signal's
own spine is the **barrier**.

**Threshold.** There is no fixed "win on more claims = strong". Standing is read against the *named
field this offering actually competes with* (the rivals on the board), not a global average, and
against what the buyer asked for: a claim you win on that no buyer cares about does not lift the read,
and one capability gap on something a buyer named can sink it. Lock-in reads as a *likely* barrier only
when it is concretely present (a live contract, a proprietary format, a real switching hassle), not on
the bare fact that an incumbent exists. The read needs at least one rival or incumbent gathered to have
a field to stand in.

**Why it's trustworthy.** Most of the read is deferred counting: which claims you have that a rival
does not, which a rival has that you do not, whether an incumbent is in place, whether a contract or
proprietary lock is named, all checkable against the rivals' own pages in the `competitor-field`. The
one genuine judgement, *will this lock-in actually hold them*, is graded by how concrete the lock is
(a dated contract and a proprietary export, versus a vague "they're used to it") rather than asserted.
Price is deliberately out of scope here, so the two competitive reads never double-judge the same
thing: capability and lock-in are this signal's, the number is `price-barrier`'s. The `confidence` is
**graded** on how complete the field is: high when several rivals are gathered with their claims and
lock-in clear, soft when only one thin rival page was found.

**Where it can fail to reach ground.** Much enterprise capability is unpublished, so a rival's claims
read off their public pages may understate or overstate what they really do, a **data gap** on the open
web, named not faked. A switching cost that lives in a private contract you cannot see is invisible
until the buyer tells you, a **told gap** People surfaces from the thread rather than this read
inventing it. And it feeds *into* the Brain's message play (Q12, which information is most relevant)
without owning it: the standing is supplied, the move is the Brain's.
