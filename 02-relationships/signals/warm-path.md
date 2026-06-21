---
id: warm-path
floor: signal
label: Warm path
blurb: A target you can reach through someone you already know, with the intro chain visible.
inputs: [person-history, stakeholder-map]
measures: [shared-contact-on-thread, intro-chain-length, mutual-contact-count, target-cold-to-you]
answers: [Q7, Q8]
modes: [plant]
kind: opening
confidence: graded
---

# Warm path

A Plant read: a target you have never spoken to is reachable through someone you already deal with.
The signal does not just say "there is a path", it carries the chain, so the read walks down to real
names and dated records.

| Floor | What People has |
|---|---|
| **Facts** (1) | the target (a decider on the stakeholder map you have no thread with); the dated mail and Slack where a contact you *do* know sits on a thread with that target, or shares their company on a `Contact` |
| **Counts** (2) | *you and the target:* zero threads, zero shared `Calendar event`, no Slack overlap (cold to you) · *the bridge:* one contact you know appears on 3 threads with the target and shares their `From` domain · *the chain:* you, then that contact, then the target (length 2) · *mutual-contact-count:* 1 |
| **Opinion** (3) | **"There's a warm path to the target"**: you can reach them through one person you already know, here is the chain · *confidence: graded* |

What surfaces is not a bare label but *"You don't know the head of procurement at Council 14, but
Sarah does: she's been on three threads with him and they share an address, so she's a one-hop
intro."* Every clause walks back to a dated record: the threads that put the bridge contact next to
the target, the domain they share, the empty history between you and the target.

**Threshold.** A path only counts as *warm* when the bridge is someone you genuinely deal with, not a
name that brushed past once. The yardstick is that contact's own rhythm with you: a real two-way
history (you reply to each other, you share meetings) makes the intro warm; a single stray cc does
not. Confidence rises with how solidly the bridge sits next to the target (many shared threads, a
shared domain, a meeting together) and falls when the only link is one thin overlap. Short chains
beat long ones: a one-hop intro is warmer than a chain of three you can barely vouch for.

**Why it's trustworthy.** Most of the read is deferred counting, still deterministic: that you and the
target share no history, that one contact you know sits on threads with both of you, that the chain is
two hops long. The one genuine judgement, whether the bridge is warm enough to ask for an intro, is
guarded by that contact's own rhythm with you, the same own-rhythm rule the decay signals use. The
`confidence` is **graded**: high for a heavily-overlapping one-hop bridge, soft for a single thin
link or a longer chain.

**Where it can fail to reach ground.** The richest warm paths live on LinkedIn, mutual connections and
who-knows-whom that never touch your mail. Until LinkedIn is connected the signal sees only the bridges
that happen to appear in your Gmail and Slack, so it under-reports: many real paths stay invisible.
That is a **data gap**, named not faked.
