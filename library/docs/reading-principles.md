# Reading principles: the rules every signal applies

A signal is the first opinion: it turns deterministic counts into a named read (a champion, a cooling
contact, a live buying conversation). The rules below govern how that turn is made, and they are the
same for every signal. So each signal file states only what is specific to it (its own trigger, its
own gap) and points here for the shared rules, rather than re-teaching them. This keeps the entries
short and stops the same guidance being retyped across the library.

This sits beside two companion docs: [`library-format.md`](library-format.md) (how an entry file is
structured) and [`tracing-back.md`](tracing-back.md) (the three floors, and the track-back tree that
keeps a read honest).

## 1. Read against the subject's own rhythm, never a fixed number

A read about change (quiet, warming, cooling) is measured against what is normal *for that subject*,
not against an absolute. Three weeks of silence is alarming from someone who normally replies daily
and unremarkable from someone you speak to twice a year. So a signal never says "21 days means quiet";
it says "far longer than their own usual gap". The same holds for reply length, for who starts a
thread, and for any other pace measure: the baseline is the subject's own history.

## 2. Count first, judge last

Most of a read is deterministic counting that anyone could redo and get the same answer: how many days,
how many new names on a thread, how a reply length compares to the baseline. Only a small, named step
is an actual judgement. Keep that seam visible. A signal's "For the build" should make clear which part
is counting and which one line is the judgement, so the read can always be checked.

## 3. Grade the confidence by how much stacks

Confidence is rarely a flat yes or no. It is high when several independent cues line up, and it softens
as fewer hold, to an honest hedge ("maybe cooling", "showing interest") rather than a false binary. A
signal says what makes it high and what softens it, so the grade is earned, not asserted.

## 4. Name the gap, do not fake it

When a read cannot reach the ground, because a source is not connected or the user has not told us
something, the signal says so plainly instead of guessing. There are two kinds, both set out in
[`tracing-back.md`](tracing-back.md): a **data gap** (a source such as Calendar or LinkedIn is not
connected) and a **told gap** (something only the user can supply). A signal's `needs` field lists the
sources it depends on; when one is missing, the checks that rest on it drop out and the confidence
falls with them.

## 5. Earn the place by answering a real question

A signal exists only because a salesperson actually asks the question it answers (the list in
[`sales-questions.md`](sales-questions.md)). Its `answers` field names those questions. A read that
answers no real question does not belong in the library.
