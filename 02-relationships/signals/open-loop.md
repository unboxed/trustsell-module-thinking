---
id: open-loop
floor: signal
label: Open loop
blurb: 'A promise left dangling: your "I will send you X" undelivered, or your ask still unanswered.'
inputs: [conversation-history, person-history]
measures: [promise-made-undelivered, ask-made-unanswered, days-since-loop-opened-vs-own-rhythm, fulfilment-scan]
answers: [Q22]
modes: [grow, nurture]
kind: risk
confidence: graded
---

# Open loop

A loop has two halves, and only the closing half makes it safe. One half is *your* promise ("I'll
send you the pricing sheet") that never went out. The other is *your* ask ("can you confirm the
budget?") that never came back. Either way a thread is hanging on you or on them, and the signal
carries which.

| Floor | What People has |
|---|---|
| **Facts** (1) | the dated messages on the thread with Dana; your line "I'll get you the security questionnaire by Friday"; her reply asking nothing back; your earlier ask "who signs off on this?" still with no answer |
| **Counts** (2) | *promise-made-undelivered:* your "I'll send the questionnaire" sits 11 days back, no later message from you carries an attachment or a "here it is" · *ask-made-unanswered:* your "who signs off?" is 9 days back, nothing from Dana names a person · *days-since-loop-opened-vs-own-rhythm:* on this thread the two of you usually close a turn within ~2 days, so 11 days is ≈5× the thread's own pace · *fulfilment-scan:* no attachment, no follow-up note, no calendar event that would have delivered it offline → **empty** |
| **Opinion** (3) | **"You owe Dana the questionnaire, and she still owes you the sign-off"**: two open loops on one thread, both past the pace it normally keeps · *confidence: high* |

What surfaces is not a bare flag but *"This thread is hanging: you promised Dana the security
questionnaire 11 days ago and never sent it, and your question about who signs off is still
unanswered, both well past how fast this thread usually moves."* Every clause walks back to a dated
message. That is the track-back. The two halves are read off `conversation-history` (the thread's
own back-and-forth tells you who said "I'll send" and whether anything later closed it); the pace
they are judged against comes from `person-history`, the rhythm this pair actually keeps.

**Threshold.** There is no fixed "a promise older than 7 days is overdue" line. A loop is overdue
measured against *this thread's* own normal turn time: a pair who close a turn in two days have an
open loop the moment a promise outruns that, while a pair who trade notes monthly do not. The read
fires only once the fulfilment-scan comes back empty, so a questionnaire that did go out as an
attachment, or got delivered in a meeting on the calendar, never counts as still open. *Loop is
past pace* → maybe overdue; *loop is past pace **and nothing on record closed it*** → overdue.

**Why it's trustworthy.** Most of the read is deferred counting. Spotting "I'll send", "I'll get
you", "let me follow up" against a later message that delivers, and spotting your question against a
later reply that answers it, is matching over dated text, not opinion. The arguable residue (did
that vague "I'll look into it" really promise something, was the question rhetorical) is guarded by
the fulfilment-scan and surfaced with its evidence, so a person can glance at the two messages and
agree in a second. The `confidence` is **graded**: high when the promise is concrete and well past
the thread's pace with nothing to close it; softer when the language was loose or the gap only just
crossed the line.

**Where it can fail to reach ground.** A promise kept *outside* the connected channels is invisible:
if you sent the questionnaire from a personal account, or handed it over on a call, the
fulfilment-scan finds nothing and the loop looks open when it is closed. That is a **data gap**, named
not faked, and it softens confidence rather than firing a false overdue. And a promise made in words
the parser does not catch ("I'll sort that") may be missed entirely: a told gap the user can close by
correcting the read.
