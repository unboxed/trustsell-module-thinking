# What the tool has to be able to do, read cold

Written cold on 22 September 2026, before reading `story.md`, `coverage.md` or `tracing-back.md`.
Not entirely cold: by then the build script, `library-format.md`, `reading-principles.md` and the
three cards about one person had been read, because planning the session needed them. The second
half, under "Where the two accounts meet", was written after reading the three docs.

## The job, in one sentence

Take what already sits in a seller's accounts, and from it say to the seller: here is one thing
worth doing now, for this person, for this reason, and here is what I looked at.

## What it has to hold

1. **The records, as the source holds them.** Every message, invite, call, file and status, with
   when it happened, who sent it, who received it, and roughly how long it was. Not summaries.
   A summary cannot be recounted, and the whole point is that any figure can be recounted.
2. **Who is who.** The same person turns up as an email address, a calendar invitee, a Slack
   handle and a name in a signature. The tool has to decide these are one person before anything
   can be counted about them. It also has to know which organisation each person is at, and which
   people belong to the same deal.
3. **What the seller is trying to do.** A suggestion is only good against a goal: what is sold, to
   whom, at what pace, and what a step forward looks like. Without it the tool can describe, not
   suggest.
4. **What only the seller knows.** What was said in a meeting, whether a quiet person is actually
   on side, that a contact prefers a phone call. No account holds these. The tool has to be able
   to ask for them, keep the answer with its date, and never ask twice.
5. **Its own history.** What it suggested, when, and what the seller did with it. Without this it
   cannot say "why now" honestly, cannot avoid raising the same thing twice, and cannot learn.
6. **The seller's usual with each person.** How fast this person normally replies, how long they
   write, who normally writes first. Every read of change is a comparison against that.

## The steps between a record and a suggestion

- **Gather.** Everything about one person, or one deal, in one pile in time order. Mostly
  arithmetic once who-is-who is settled.
- **Measure.** Numbers off the pile: days since, how many of, the share of, this month against
  the whole history. Pure arithmetic. Anyone with the pile gets the same number.
- **Read.** A named pattern with a trigger: "quieter than their usual, and nothing on record
  explains it". Applying the trigger is arithmetic. Setting it is judgement, and it is a small,
  nameable judgement: what counts as "far longer than usual", which explanations count as
  innocent.
- **Weigh.** Does this matter to the goal, and how much against everything else the seller could
  do today? Judgement, though the rule for ordering the day can be written down and then applied
  as arithmetic.
- **Choose a move.** What to do, and what the other person gets from it. Judgement, but fenced:
  the move has to be possible from what is on record. You can only send a document that exists,
  or answer a question that was actually asked.
- **Draft.** The words, in the seller's voice. Judgement.
- **Watch.** After the seller acts, what comes back, and by when the tool should stop waiting.
  Arithmetic once stated.

## What it must be able to show when asked "why are you telling me this"

- The move, and the reason in one line.
- The numbers the reason rests on, each said plainly.
- The records the numbers came from: which account, which messages, which dates.
- What it could not see: a source not connected, a thing only the seller knows.
- What would change its mind, so the seller can disagree with a fact rather than with a score.
- Which part of it is the tool's opinion, marked as such.

## Which steps are arithmetic and which are judgement

Arithmetic: gathering (given who is who), every measurement, applying a trigger, ordering the
day by a stated rule, watching for a reply. Judgement: who is who at the edges, where each
trigger sits, what counts as an innocent explanation, how much a read matters to the goal, the
move, and the draft. The arithmetic should be most of the work by volume and the judgement should
be a few short, written sentences that anyone can argue with.

## The hard parts

1. **Who is who.** Five sources, one person. Get this wrong and every count is wrong quietly.
2. **The baseline.** "Slower than usual" needs a usual. A new contact has none, and the tool has to
   say "I do not know their usual yet" rather than compare against a made-up number.
3. **The biggest events leave the fewest records.** A meeting, a phone call, a corridor. The tool
   can see that a meeting happened and nothing of what was said. So it has to ask, and it has to
   ask only for facts the seller holds, not for the seller's verdict.
4. **A cause it cannot see.** Silence has many reasons. The tool can say "quiet, and I can see no
   reason", never "quiet because of the budget meeting".
5. **Knowing when not to.** A chase has a cost. The tool has to be able to say "leave this one",
   and to say nothing at all when there is nothing worth doing.
6. **One move per person.** Two suggestions about the same person on the same day are a
   contradiction, not two cards. The tool has to order and hold.
7. **The seller acts outside the tool.** They send a note from their phone. The tool has to pick
   that up from the record, not from its own memory of what it suggested.
8. **Keeping the seam.** If a language model reads the pile and opines, the arithmetic vanishes and
   nothing can be recounted. The counting has to be actual counting, and the model's job is the
   small judgement on top and the words.

## Where the two accounts meet

Written after reading `story.md`, `coverage.md` and `tracing-back.md`, on the same day.

### Where they agree

- **Three floors.** My gather, measure and read are the tracing-back doc's plain facts, counting
  and first opinion, and the ladder's channels, assemblies, counts and signals. Count first, judge
  last is the same rule in both.
- **The person's own usual as the only baseline.** Both refuse a fixed number of days.
- **The three kinds of gap.** My "no usual yet" is the library's assumption gap; my "only the
  seller knows" is its told gap; a source not plugged in is its data gap.
- **Nothing floats.** What I said the tool must show when asked why is what a card's back holds:
  the reason, the numbers, the sources, what is unclear, what happens next.
- **Asks are for facts, never verdicts.** Same rule, same reason.
- **Knowing when not to.** The four reads that point against a move are what my "leave this one"
  needs, and they exist.
- **One move per person, and the tool orders the day.** Same.
- **How sure, in a word.** Same three words, same weakest-ground rule.
- **The seller acting outside the tool** is handled: the fulfilment scan reads the record, so a
  note sent from a phone closes a promise without the tool being told.

### What my account needs that the library has no rung for

1. **Who is who.** Every count stands on it and nothing holds it. The person gather says in one
   sentence that "the one real piece of work is deciding which scattered records are the same
   person", and the prior-history scan says it "passes on" that unsureness, but there is no record,
   count or read that carries how sure a match is, and the story never mentions it. It sits below
   the bottom floor, and it is the place a wrong number comes from without anyone seeing why.
2. **The tool's own history.** No channel or told source holds what the tool suggested, when, and
   what the seller did with it. Story chapter 9 needs it, "not the same reason twice" needs it,
   "why now" needs it, and the reading principles admit learning from outcomes is not written. My
   account says it is a record like any other, so it belongs at the bottom as a source the tool
   itself is, not as a floor above the cards.
3. **The step from a read firing to a card existing.** My "weigh" step. The library has signals,
   then cards, and the design log says which fired reads become cards is the Brain's, but nothing
   written says how. The six bands order cards that already exist. Job 1 will show on one person
   whether every fired read makes a card, and if not, what rule was applied without being written.

### What the library has that my account cannot justify

1. **Connect and News as kinds of card.** The story already lists both as reasons nobody has
   given. On News I now accept the eighteenth pass's reason: the tool's watching stops and the
   seller is owed the list of what it will no longer raise. On Connect I still cannot: a missing
   source is something you set up once, and a card is a strange place for a setup step.
2. **Rule 5, that a read earns its place by answering a seller's question.** My account says a
   read earns its place by changing what the tool would do. The library's own seventeenth pass
   found the counterexample, a read that answers no question in any set and is plainly needed. I
   would make "changes a move" the test and keep the question sets as evidence, not as the gate.
3. **Scans on the counting floor.** The innocent-explanation scan, the fulfilment scan and the
   head-of-signature scan read text and return what they found. The library keeps them as counts
   by having them return passages rather than verdicts, which is a fair answer, but "anyone can
   redo the sum" is weaker for a scan than for a count of days, and the seam is thinner there than
   the ladder's shape suggests.
4. **Modules and widgets** are organisation and presentation. My account has no need for either
   and no quarrel with them.

One place where both accounts have the same hole: what the next message should say. My account
calls drafting judgement with nothing under it, and the coverage map calls Q20 answered because
"the draft does it". That is the same admission twice, and it is Job 2 in `NEXT.md`.
