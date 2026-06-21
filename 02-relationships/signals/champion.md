---
id: champion
floor: signal
label: Champion
blurb: 'A contact who advocates for you inside their org: replies fast and long, and pulls colleagues in.'
inputs: [person-history, conversation-history, meeting-history]
measures: [reply-speed-vs-own-rhythm, reply-length-vs-own-baseline, colleagues-looped-in-count, internal-advocacy-mentions, advocacy-voiced-on-call]
answers: [Q4, Q5, Q6, Q14]
modes: [grow]
kind: opening
confidence: graded
---

# Champion

A Grow read: the person on the other side is doing your selling for you inside their org. They reply
fast and at length, and they keep adding their own colleagues to the thread. The signal carries that
read down to the dated messages it stands on.

| Floor | What People has |
|---|---|
| **Facts** (1) | the dated emails and Slack messages with Dana; the `From` lines and Slack `author` on each; who is on the `To`/`cc` of her threads over time; her message bodies |
| **Counts** (2) | *her rhythm:* normally replies in a day, replies run a paragraph or two · *now:* same speed or faster (well inside her own norm), replies just as long or longer, and over the period **she has added 3 colleagues to the thread** (a "Head of Procurement", a "Service lead"), with lines like "looping in Sam who owns this" · *advocacy scan:* her own words pull people in and vouch for the work, not just answer questions |
| **Opinion** (3) | **"Dana is a champion"**: she replies fast and long and is recruiting her own colleagues to the conversation · *confidence: graded* |

What surfaces is not a bare label but *"Dana's championing this: she replies within a day at length,
and she's pulled in three of her own colleagues including the Head of Procurement, vouching for the
work as she does it."* Every clause walks back to a dated message and a name on a `To` line. That is
the track-back.

**Threshold.** There is no fixed "replies within X hours = champion" line. Speed and length are
measured against *this person's* own baseline: a one-day reply is fast for someone whose norm is a
week and ordinary for someone who answers in minutes, and a three-line reply is long for a one-liner
person and curt for someone who writes essays. The read leans hardest on the part that is not about
her at all, the colleagues she loops in: advocacy is doing the work of bringing others to the table,
which a fast reply alone does not prove. *Fast and long for her* raises it; *fast and long for her
**and** she is actively adding her own people* is what makes it champion.

**Why it's trustworthy.** Most of the read is deferred counting: reply speed and length against her
own baseline, and a plain count of new colleagues she added to her threads, all deterministic and
re-checkable against `internalDate` and the `To`/`cc` lines. The one genuine judgement is reading
her words as advocacy ("looping in Sam who owns this", "you should really talk to our Head of
Procurement") rather than ordinary forwarding. The `confidence` is **graded**: high when fast, long,
and clearly recruiting colleagues all stack; lower when only the reply behaviour is there and nobody
new is being pulled in, where it softens to "engaged" rather than a confident "champion".

**Now reads advocacy in the room.** Championing often happens out loud. When a call was captured,
`meeting-history` carries the `Transcript` and `Smart notes`, so Dana vouching for the work on the
call, or saying "you should talk to our Head of Procurement", counts as advocacy
(`advocacy-voiced-on-call`) even when no new name has reached a `To` line yet.

**Where it can fail to reach ground.** The off-channel gap is now **narrowed**, not closed. A captured
meeting surfaces advocacy spoken in it; what stays invisible is advocacy on an *uncaptured* call (the
conditional-content data gap [`meeting-history`](../assemblies/meeting-history.md) names), on a phone
call outside Meet, or on **LinkedIn**, where who-vouches-for-whom never touches your mail. People reads
the present off the records it has, so an introduction made on those routes understates her until it
surfaces in mail, Calendar, Slack, or a captured call. That is a **data gap**, named not faked.
