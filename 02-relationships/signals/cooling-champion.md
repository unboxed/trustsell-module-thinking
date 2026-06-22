---
id: cooling-champion
label: Cooling champion
blurb: A champion who is starting to go quiet.
modes: [nurture]
kind: decay
confidence: graded
inputs: [person-history]
measures: [reply-gap-vs-own-rhythm, last-note-unanswered-days, dropped-recurring-meeting, innocent-explanation-scan]
answers: [Q18, Q19]
needs: [calendar]
---

# Cooling champion

## What it means

A champion has gone quiet, and there's no open deal to explain it.

The tool makes this read when someone has gone quiet for far longer than is normal for them, measured
against their own usual pace rather than a set number of days, and nothing on record explains the
silence. A long gap on its own means little; a long gap with no explanation is the read.

It is most confident when several things line up: a clear change from their normal pace, a dropped
regular meeting, an earlier note of yours left unanswered, and nothing that would explain the quiet.
When it is borderline, it says "maybe cooling" rather than forcing a yes or no.

It looks across email, Slack and calls together, so a recent call counts as contact. If the calendar
is not connected, it cannot see dropped meetings or out-of-office notes, and says so rather than
guessing.

## In practice

A contact who normally replies within a day has gone quiet for about three weeks across every channel,
left your last note unanswered, and quietly dropped your monthly check-in, with nothing on record to
explain it. The read: "they're cooling."

## For the build

Applies the shared reading rules in [`docs/reading-principles.md`](../../docs/reading-principles.md).

- Trigger: the reply gap is large against the person's own median reply time (never a fixed number of
  days), AND the innocent-explanation scan returns empty.
- Confidence: high when a large own-rhythm departure, a dropped recurring meeting, an unanswered note
  and an empty scan all stack; grades down toward "maybe cooling" as fewer hold.
- Needs: Calendar (the `needs` field) for the dropped-meeting and out-of-office checks; without it
  those checks drop out and confidence falls (a data gap, named not faked).
- Counts beneath it: the `measures` in the frontmatter (reply gap, unanswered note, dropped meeting,
  innocent-explanation scan).
