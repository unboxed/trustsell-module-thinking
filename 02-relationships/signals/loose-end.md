---
id: loose-end
floor: signal
label: Loose end
blurb: Something left hanging, like a promise you never followed through on.
inputs: [conversation-history, person-history, meeting-history]
measures: [promise-made-undelivered, ask-made-unanswered, days-open-vs-own-rhythm, fulfilment-scan, commitment-made-on-call]
answers: [Q22]
modes: [grow, nurture]
kind: risk
confidence: graded
---

# Loose end

A loose end comes in two shapes, and only finishing it makes the thread safe. One shape is *your*
promise ("I'll send you the pricing sheet") that never went out. The other is *your* question ("can you
confirm the budget?") that never came back. Either way a thread is hanging on you or on them, and the
signal carries which.

| Floor | What People has |
|---|---|
| **Facts** (1) | the dated messages on the thread with Dana; your line "I'll get you the security questionnaire by Friday"; her reply asking nothing back; your earlier question "who signs off on this?" still with no answer |
| **Counts** (2) | *promise-made-undelivered:* your "I'll send the questionnaire" sits 11 days back, no later message from you carries an attachment or a "here it is" · *ask-made-unanswered:* your "who signs off?" is 9 days back, nothing from Dana names a person · *days-open-vs-own-rhythm:* on this thread the two of you usually close a turn within ~2 days, so 11 days is ≈5× the thread's own pace · *fulfilment-scan:* no attachment, no follow-up note, no calendar event that would have delivered it offline → **empty** |
| **Opinion** (3) | **"You owe Dana the questionnaire, and she still owes you the sign-off"**: two loose ends on one thread, both past the pace it normally keeps · *confidence: high* |

What surfaces is not a bare flag but *"This thread is hanging: you promised Dana the security
questionnaire 11 days ago and never sent it, and your question about who signs off is still unanswered,
both well past how fast this thread usually moves."* Every clause walks back to a dated message. That
is the track-back. The two shapes are read off `conversation-history` (the thread's own back-and-forth
tells you who said "I'll send" and whether anything later closed it); the pace they are judged against
comes from `person-history`, the rhythm this pair actually keeps.

**Threshold.** There is no fixed "a promise older than 7 days is overdue" line. A loose end is overdue
measured against *this thread's* own normal turn time: a pair who close a turn in two days have a loose
end the moment a promise outruns that, while a pair who trade notes monthly do not. The read fires only
once the fulfilment-scan comes back empty, so a questionnaire that did go out as an attachment, or got
delivered in a meeting on the calendar, never counts as still open. *Past pace* → maybe overdue; *past
pace **and nothing on record closed it*** → overdue.

**Why it's trustworthy.** Most of the read is deferred counting. Spotting "I'll send", "I'll get you",
"let me follow up" against a later message that delivers, and spotting your question against a later
reply that answers it, is matching over dated text, not opinion. The arguable residue (did that vague
"I'll look into it" really promise something, was the question rhetorical) is guarded by the
fulfilment-scan and surfaced with its evidence, so a person can glance at the two messages and agree in
a second. The `confidence` is **graded**: high when the promise is concrete and well past the thread's
pace with nothing to close it; softer when the language was loose or the gap only just crossed the line.

**Now reads promises made aloud.** A loose end no longer opens only in writing. When a call was
captured, `meeting-history` carries the `Transcript` and `Smart notes`, so an "I'll send that over by
Friday" said on the call counts as a promise (`commitment-made-on-call`), and a later attachment or
note closes it the same way. A spoken next step is the same loose end as a written one.

**Where it can fail to reach ground.** The call gap is now **narrowed, not closed**. When note-taking
was on, a promise handed over on the call is visible; when it was off, the call leaves only "you
spoke", not what you said, so a promise made there still looks undelivered, the conditional-content
data gap [`meeting-history`](../assemblies/meeting-history.md) names. A promise kept *outside* the
connected channels altogether (sent from a personal account) is invisible the same way, a **data gap**
that softens confidence rather than firing a false overdue. And a promise made in words the parser does
not catch ("I'll sort that") may be missed entirely: a told gap the user can close by correcting the
read.
