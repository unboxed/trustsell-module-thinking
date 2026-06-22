---
id: cooling-champion
floor: signal
label: Cooling champion
blurb: A champion who is starting to go quiet.
inputs: [person-history]
measures: [reply-gap-vs-own-rhythm, last-note-unanswered-days, dropped-recurring-meeting, innocent-explanation-scan]
answers: [Q18, Q19]
modes: [nurture]
kind: decay
confidence: graded
---

# Cooling champion

A pure-Nurture read: one champion going quiet, no open deal. A single signal carrying its evidence
all the way down to a date in the inbox.

| Floor | What People has |
|---|---|
| **Facts** (1) | the dated emails with Tom; the recurring monthly check-in on the calendar; his replies |
| **Counts** (2) | *normal:* ~1-day median reply, starts ~4 of every 6 threads · *now:* silent 26 days across mail, Slack **and calls** (≈26× his norm), your last note 19 days unanswered, **monthly check-in moved once then dropped** · *innocent-explanation scan:* no out-of-office, no "away" note, no future meeting, no recent call → **empty** |
| **Opinion** (3) | **"Tom is cooling"**: a champion whose rhythm broke with nothing to explain it · *confidence: high* |

What surfaces is not a bare label but *"Tom's cooling: he normally replies within a day, but he's
gone 26 days and skipped your monthly check-in, and there's nothing on record to explain it."* Every
clause walks back to a date in the inbox. That is the track-back.

**Threshold.** There is no fixed "21 days = quiet" line. The gap is measured against *this person's*
own normal (~26× a 1-day median reply), and the read fires only once the innocent-explanation scan
comes back empty. *Gap is big* → quiet is wrong; *gap is big **and nothing on record explains it***
→ quiet is right.

**Why it's trustworthy.** The arguable part is tiny. Most of the read is *deferred counting*, the
gap against his own rhythm, still deterministic. The one genuine judgement is guarded by that scan.
The `confidence` is **graded**: high here (a big departure, a dropped meeting, and nothing
exonerating); near the line it softens to "maybe cooling" rather than a false binary.

**Where it can fail to reach ground.** Silence is now read across mail, Slack **and calls**: because
`person-history` carries the `Meeting` and its `Participant` list, a recent call counts as contact, so
a champion who is quiet on email but spoke to you last week does not read as cooling. The
out-of-office and "away" checks resolve through the calendar `Status event` the same picture now holds.
If Calendar is not connected, the dropped check-in and the out-of-office check both drop out of the
evidence and confidence falls with it. That is a **data gap**, named not faked.
