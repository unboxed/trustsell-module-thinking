# Tracing it back — questions down to the plain facts

The companion to `docs/scenario-councils.md`. That one runs the machine **forward and
down**: it starts from a finished recommendation and peels each layer back until it
reaches the raw material. This one starts somewhere different — from **the questions a
salesperson actually wants answered** — and walks each one *down* to the facts it rests
on, so you can see, for any answer, exactly what it was built from. And, just as useful,
where a branch runs out of ground: what's still missing before the tool could answer at
all.

The point of the whole thing is **track-back**. Nothing the tool says should float. Every
conclusion should walk straight down to plain facts you can check — and where it can't,
the tool should say so plainly rather than guess.

Grounded throughout in the running goal: *sell a new SaaS to local authorities; a good
product but a tough, multi-year sell; find the early adopters who feel the legacy-tech
pain; land a partial adoption now and grow it; about 30 named orgs and people already in
flight.*

---

## The three floors at the bottom

It took a few tries to get the bottom right. The earlier notes said sensing was two
steps — plain facts, then a reading. That skipped a floor. There are really **three**,
and the middle one is the one that makes track-back trustworthy.

**Floor 1 — the plain facts.** What Google and Slack literally hand over, fetched through
Connections: the date on each email, who sent it, the subject, who was copied in, the
body text, whether a meeting was booked, kept, moved or dropped. These carry no meaning.
You can't argue with them — they're just the record.

**Floor 2 — the counting.** Plain arithmetic over those facts: *"the last email from Tom
was 21 days ago," "he started four of the last six threads," "his replies used to take a
day and now take an hour," "two new names appeared on the thread this month."* There is
still no opinion here. Anyone counting the same emails gets the same numbers. This floor
is the one the older notes skipped, and it matters because it's **checkable** — you can
see the dates and redo the sum yourself.

**Floor 3 — the first opinion.** *"He's gone cold," "he's a champion," "he's warming."*
This is the first place the tool actually **judges** something. The same count can mean
different things — three weeks of silence is "gone cold" for a champion mid-conversation
and "perfectly normal" for a contact you speak to twice a year — so a judgement is
needed, and judgement is arguable.

**Where the opinion starts.** The line we used to draw between Connections and People —
"plain facts on one side, reading on the other" — sits one notch higher than that. It
falls **between the counting and the opinion**, and it lives *inside* People. People does
the counting *and* the judging; only the judging is the arguable, intelligent part.
Connections stays dumb — it never counts and never judges; it only carries the records.
The counting is People's, because *what's worth counting* is set by the goal: "days since
last reply" only matters because the strategy cares about momentum.

For track-back this is the useful cut. Floors 1 and 2 you can verify. Floor 3 is the
first place you might disagree with the tool — so being able to see exactly where the
opinion begins is half of trusting it.

---

## The questions sit at the top

A salesperson carries a running list of things they want to know: *who makes the buying
decision here? who should I chase first? have I promised anyone anything? do I know
someone who could introduce me?* (MJ's list of twenty-six is written out in full in
`docs/sales-questions.md`.)

Each of those questions sits at the **top** of one of these stacks. Ask *"who makes the
buying decision at Council 14?"* and underneath it is a stack that reads roles off who
appears on which threads and how they behave, resting in the end on plain facts (who's
copied in, whose signature says "Head of") plus the one thing you told the tool once
(these thirty orgs are my targets).

We're using the questions only as **handles** — convenient places to grab the machine and
pull a thread down to the floor. They are **not** the filing system. The tool's memory of
a person stays what it already is in `02-relationships`; it is not literally a list of
twenty-six answered questions. The questions are how we *show* the tracing, not how the
tool stores it.

---

## Two kinds of gap

The interesting part isn't only the branches that reach the ground. It's the ones that
**don't** — because that's where the tool earns trust by being honest. A branch can run
out of ground in two distinct ways, and the tool should name which:

- **A data gap — a source isn't connected.** The question is answerable in principle, but
  the plumbing to answer it isn't plugged in yet. *"Do I have a mutual connection who
  could introduce me?"* needs LinkedIn, and LinkedIn isn't connected. The honest output
  is not silence and not a guess — it's *"I can't answer this until you connect
  LinkedIn."*
- **A told gap — you haven't told it something.** No amount of fetched data fixes this;
  the tool is missing something only you can supply. *"Which orgs meet my conditions?"*
  can't be answered until you've said what the conditions are. The honest output is *"tell
  me what a good-fit org looks like and I can run this."*

This isn't a new mechanism bolted on. It joins two things already in the notes:
Connections (`01`) already lists sources that are "on the board but not connected yet,"
and Brain (`00`) already "comes back with a few questions to fill the gaps" when shaping a
goal. The gap idea simply puts both under one banner the user can act on: **here's what
I'd need before I could say more** — connect this, or tell me that.

---

## Three questions, traced

### "Who should I chase first?" — reaches the ground
This is the tool's headline output, so its stack is the deepest, and it bottoms out
cleanly. At the top is the suggestion: *act on Tom at Council 14 today.* Pull it down:

- It rests on a reading (floor 3): *Tom is a warming champion with a live, unanswered
  question.*
- That reading rests on counts (floor 2): he started four of the last six threads, his
  replies have been getting faster, a new name (his head of IT) appeared on the thread
  this month, and his most recent message has sat unanswered for four days.
- Those counts rest on plain facts (floor 1): the senders, dates, lengths and participant
  lists of the actual emails, and two internal meetings on the calendar.
- And underneath all of it, two things you told the tool once: Council 14 is one of your
  thirty targets, and your goal is a partial adoption you grow — which is what makes an
  unanswered implementation question from a champion read as *a door opening* rather than
  trivia.

Nothing floats. Every line of the suggestion can be walked down to a date in your inbox or
a sentence you gave the tool. That's the whole idea working.

### "Do I have a mutual connection who could introduce me?" — a data gap
The stack starts to build and then stops in mid-air. To answer it the tool would read who
*you* know against who sits around the buying group at a target — the shape of a warm-path
question it's good at. But the facts that would feed it (your professional network, who's
connected to whom) live in LinkedIn, and LinkedIn isn't connected. Slack can sometimes
catch a sliver of this — a colleague mentioning they know someone — but it can't see your
network. So the honest answer is the gap itself: *"I can only see warm paths that show up
in your mail and Slack today; to answer this properly, connect LinkedIn."* The branch is
real; the ground under it just isn't there yet.

### "What counts as a good-fit org?" — a told gap
This one can't be fetched at all. The tool can list the thirty orgs you named, and it can
read each one's behaviour, but the *shape* of a good fit — the conditions that make a
council an early adopter — is something only you can describe, working with Offerings to
sharpen it. Until you do, the fit-scan has nothing to match against, and a whole family of
questions above it ("which *new* orgs look like the good ones?") stays unanswerable. The
honest answer points at you: *"Tell me what a good-fit council looks like — the pain, the
signs — and I can start matching."*

---

## The picture this makes

Forward-in-time, the machine looks like a route across a map (`docs/flow.md`). Taken apart
and standing still, it looks like a pyramid built from the ground up (`docs/scenario-
councils.md` and the Assembly view). Tracing a question back makes a third picture, and
it's the one that was hard to name: a **radial tree**. Put the question — or the final
suggestion — in the centre. Its supporting stack fans out around it: the readings nearest
the middle, the counts further out, the plain facts on the rim. Pulled all the way open it
closes into something like a circle, the outcome at the heart and the raw material around
the edge.

And the gaps draw themselves: a branch that runs out of ground is one that stops short of
the rim, hanging in the open — a visible reminder that something is missing, and a label
saying whether you'd close it by connecting a source or by telling the tool one more
thing.

That picture is **described here in words only**. The visual work is parked for now; when
it resumes, this is the shape to reach for, and the existing views will need two new
things — the counting floor made visible between the raw facts and the readings, and a way
to draw a branch that stops in mid-air.
