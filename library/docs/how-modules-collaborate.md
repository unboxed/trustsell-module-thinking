# How the modules collaborate: what each one needs, and how they combine

The third companion piece. `scenarios/bops/docs/scenario-councils.md` (the walkthrough of the example scenario, moved beside it on 21 September) takes one finished
recommendation apart, bottom to top. `docs/tracing-back.md` starts from a salesperson's
questions and traces each down to the plain facts (and names the gaps). This one turns to
the **supply side** (Offerings, Profile, and Organisation), the modules with smaller jobs
than People, and asks how they actually do them.

For each of those modules, four questions:
1. **What does it need to know** to do its job?
2. **Where does that knowledge come from?**
3. **What happens when you don't know**, when you can't yet say what the tool is asking?
4. **What does it remember and learn** over time?

Grounded, as ever, in the running goal: *sell a new SaaS to local authorities; a good
product but a tough, multi-year sell; find the early adopters who feel the legacy-tech
pain; land a partial adoption now and grow it.*

---

## A module's knowledge comes from three places

Whatever a module knows, it got it one of three ways. Naming them up front makes the rest
of this readable:

- **Told.** You supplied it. The product and what it solves, your pricing, a deck, the
  fact that these thirty councils are your targets, your preference to see a draft before
  it sends. The things only you can give.
- **Fetched.** The tool went and got it, through Connections: the open web, a
  competitor's pricing page, a council's published digital strategy. No one had to type
  it in.
- **Supplied.** Another module handed it over when asked. Offerings asks Organisation for
  the evidence behind a claim; Profile asks People how close you are to someone. One module's
  output is another's ingredient.

People runs mostly on *fetched* (your mail, calendar, Slack). The supply modules lean more
on *told* and *supplied*, with *fetched* used to ground and propose. That difference is
most of what makes them feel different from People.

## When you don't know: the tool doesn't stall

Setting up an offering asks you things you may not have a crisp answer to: *who exactly is
a good-fit council? which objection really matters? what's the cleanest first yes?* You
might not know. **That's fine, and it's worth being explicit that it's fine**, because the
module has three honest moves, and only the last is a dead end:

- **Research it.** Go and fetch a starting answer from the web (comparable councils,
  what similar products lead with) and bring it back.
- **Propose and confirm.** Draft an answer for you to react to. *"Here's what I think a
  good-fit council looks like, from the ones already buying tools like this. Am I close?"*
  You correct it; the correction teaches it.
- **Flag it.** If it can't research or propose (because the thing is genuinely only in
  your head), it says so plainly and waits, rather than guessing.

This is the **setup-side** cousin of the gaps in `docs/tracing-back.md`, with one real
difference. A *sensing* gap there ("do I have a mutual connection?") the tool could usually
only **flag**: the missing thing was outside data it can't reach. A *setup* gap the tool
can often **fill itself**, by researching or proposing. So setup degrades more gracefully:
not knowing slows the tool down, it doesn't stop it.

---

## Offerings, worked

**What it needs** to be useful on the councils SaaS:
- *what the product is and what it solves*: the plain pitch;
- *the fit-shape*: what a good-fit council looks like (here, a mindset more than a
  category: feels the legacy-tech pain, wants better tools for its officers);
- *pricing and the entry step*: the price levers, and the partial rollout that's the easy
  first yes;
- *the objections* a cautious public buyer raises, and the rebuttal to each;
- and, for each rebuttal, *what kind* of evidence would back it.

**Where each piece comes from.** The pitch and pricing are **told**. Only you have them.
The fit-shape starts **told** but is often **researched and proposed** (below). The
objections are part told, part **fetched** (procurement patterns, what councils ask about
new software) and proposed for you to confirm. The *kind* of evidence a rebuttal needs is
Offerings' own call; the actual evidence document is **supplied** by Organisation.

**When you don't know your fit-shape.** This is the case worth dwelling on, because it
mirrors People exactly. You may not be able to say crisply what an early-adopter council
looks like. So Offerings researches comparable councils already buying tools like this,
notices what they have in common, and proposes a draft fit-shape for you to react to. You
confirm or correct it. **That is the same move People makes when it reads someone as a
champion from their behaviour, and you confirm or correct**: the tool drafts the noun, you
make the call. People points that move at the people you sell to; Offerings points it at
your own product. Same principle, the setup side of it.

**What it remembers.** Offerings' memory is the playbook itself (the pitch, the
fit-shape, the objection-and-rebuttal pairs), kept current. Over time it can also learn
*what's landing*: which rebuttal tends to move a council, which evidence tends to reassure,
fed back by the Brain when an outcome comes in. (That learning is lighter today than
People's, and the richer version is a future direction.)

## A supplier chain, with no boss

Here is collaboration in its simplest honest form: three modules producing one answer,
and **no one ordering anyone around.**

A council replies: *"can it import our existing case records?"*

- **People** has that message on record (it read the reply, filed it as a worry), and
  hands the worry to **Offerings** when asked.
- **Offerings** recognises this as a technical-capability worry, and knows the rebuttal
  needs a specific kind of evidence: something showing the import has actually worked somewhere real.
- It asks **Organisation**, which **supplies** the matching evidence from its library: the
  records-import case study from a comparable council.

Three modules, one finished answer. But notice the shape: **Offerings owns the job**
("answer this objection"), and People and Organisation are *suppliers* it pulls from. Nobody
directed anybody; each was asked and each provided. And there's no decision in the middle:
it's a straight assembly, not a judgement call. So this is a **supplier chain**, not a
Brain play. That distinction is the whole point: collaboration here is always either *one
module owning a job and asking others to supply*, or *the Brain conducting a play when a
real decision sits in the middle*, never one module bossing another. Modules can't direct
each other; only the Brain conducts.

---

## Profile, and the memory of your voice

Profile has the narrowest job of all (make every message sound like you), but it is the
cleanest example of a module that **builds a memory**.

**What it needs:** your voice, and your preferences (chiefly, how much you trust it to act
before showing you a draft). The preference is **told**. The voice is **learned**.

**What it remembers: built exactly the way People senses a person.** Think back to the
three floors in `02-relationships`: plain facts, then counting, then the reading. Profile's
voice-memory has the same three floors, just pointed at you:
- **The plain facts**: the messages you actually send, and the edits you make to the
  drafts it hands you. (Your sent mail comes through Connections; the edits it sees the
  moment you make them.)
- **The counting**: how you tend to open, how long your messages run, how formal you are,
  the turns of phrase you reach for, whether you sign off warm or brisk.
- **The reading**: your *voice*: the thing it writes in.

So **Profile senses *you* the way People senses *them*.** The difference is only the subject:
People reads the people you sell to; Profile reads you.

**When it doesn't know your voice yet.** Early on it can't. It has too few examples. So it
stays modest: it leans on what little it has, watches your edits closely, and gets
confident slowly. Its routine is exactly this: *keen at the start, quiet once it's
confident, attentive again only if your edits show it has drifted.* It never has to guess
loudly; it just learns from what you change.

**Where the voice is used.** Only at write-time, and only by Profile. When the Brain hands down
a brief, Profile writes it, reaching to People to judge how close you are to the person (so it
pitches the register right) and staying inside Organisation's fence. That render is itself
a small chain: **Profile owns the words**; People and Organisation supply.

## Organisation, lightly

Organisation holds the **shared** things (true for everyone who represents the company)
rather than anything personal. Its knowledge is almost all **told** (or uploaded): the
evidence library, the brand and compliance rules, the authority to discount. It rarely goes
hunting; it mostly **supplies**: the matching case study to the Brain, the actual evidence to
Offerings, the hard limits to Profile. For a solo operator it simply switches off: no company,
no shared evidence or fence, so Profile writes free. Its memory is the evidence library itself; a
richer future version would mint a fresh case study from a won deal, but that's a vision,
not today.

---

## The shape of it

Two things fall out of all this.

**Collaboration is a spectrum, and every rung stays inside the model.** From simplest to
richest:
- a module answers **alone**: Offerings naming the entry use-case from its own playbook;
- a module pulls from **one supplier**: Profile reaching to People for closeness at
  write-time;
- a **chain across several** with one owner: the objection answered by Offerings pulling
  from People and Organisation;
- a full **Brain play**: the recommendation itself, where a real decision sits in the
  middle and only the Brain can conduct.

The line never crossed: a module never bosses another. It either owns a job and *asks*
others to supply, or it's the Brain conducting a play. That's what keeps a team of experts
from becoming a swarm.

**Every module with initiative also has a memory, and they sit in tiers.** People
remembers relationships; Profile remembers your voice; Offerings remembers the playbook and
what's landing; Organisation holds the evidence. Profile and People are **personal**: one set per
individual. Organisation is **shared**: one per company. And a module reaches another's
memory only by *asking* for what it needs, never by rummaging through it directly. Connections
alone remembers nothing, because it is a pipe, not an expert.

So the supply modules aren't lesser versions of People. They're the same kind of thing:
each with knowledge it gathers, a memory it grows, and an honest answer when it doesn't yet
know, just pointed at different subjects, and wired together by asking rather than by
ordering.
