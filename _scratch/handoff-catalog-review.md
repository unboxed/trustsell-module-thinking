# Handoff — catalog review: a solid set of assemblies and signals, module by module

> **The task in one line.** Go module by module through the assistants and, for each, review the
> assemblies and signals that exist today, flag anything outdated now that the floors are real, and
> come up with a **solid, deliberately expanded set**. This is a brainstorm, not a build: propose and
> pressure-test first, build the agreed entries after. The **Brain (`00`) is deferred** to its own
> session (it is the most complex and the least brainstormed; see the end).

## Status (updated 2026-06-21)

- **`02` People — DONE.** Catalog expanded, the plain-English pass applied, and a new cross-cutting
  primitive (the **deal**) added along the way. Details under "02 People — DONE" and "The deal
  primitive" below.
- **`03` Offerings — DONE.** Staleness check clean; catalog expanded on the competitive and
  claim-integrity dimensions. Details under "03 Offerings — DONE" below.
- **`04` → `05` — the rest**, in that order. The seed findings below still stand.
- **`00` Brain — deferred**, and it has grown: it now also owns **staging the deal** and the **signal
  re-scoping** the deal work deferred (see Deferred, at the end).

## Why now

The structured libraries now exist for every assistant (`02`/`03`/`04`/`05`), the old per-module
`CLAUDE.md`s are retired, and `module.md` plus the libraries are the source of truth. With the floors
real, two things are worth a deliberate pass: some prose and lineage may be **stale** (written before
the floors, or pointing at the wrong channels), and most catalogs are **thinner than they should be**.
The first build aimed at parity, not completeness; this pass aims at completeness.

## Order

`02` ✓ done → `03` ✓ done → **`04`** (next) → `05`, one at a time. Then `00` Brain as its own dedicated session.

## Method, per module

1. **Inventory.** List the current assemblies and signals with their lineage (`inputs`, `measures`).
2. **Consistency and staleness check.** Does the module's `draws_from` match what its assemblies
   actually pull? Do the signals' named data gaps still hold, or has a now-connected channel closed
   one? Is any prose left over from before the floors existed?
3. **Gap analysis.** Which of the 26 sales questions ([`../docs/sales-questions.md`](../docs/sales-questions.md))
   does the module own but not yet answer? Which connected channels
   ([`../01-integrations/channels/`](../01-integrations/channels/)) are unexploited? Where is the
   catalog thin?
4. **Propose.** New assemblies (deterministic gathers) and new signals (reads), each named with its
   lineage and the question it answers. Pressure-test for overlap, for single-owner sensing, and for
   "is this a real read or just a tag".
5. **Build.** Against [`../_templates/`](../_templates/), honouring the lineage rules: every `inputs`
   id must resolve, a signal walks `signal → measures → assembly → record`, and a gap is **named, not
   faked**.

## Current inventory (the starting point)

| Module | Assemblies | Signals | told.md | Notes |
|---|---|---|---|---|
| `02` People ✓ | person-history, conversation-history, **meeting-history**, stakeholder-map, **deal** | champion, cooling-champion, warming, blocker, understanding-gap, new-stakeholder, champion-went-dark, warm-path, **loose-end** (was open-loop), **best-way-to-reach**, **missing-people**, **time-to-reconnect**, **one-sided**, **warmth-fading**, **buying-intent** | **yes** | DONE: expanded + renamed + deal primitive |
| `03` Offerings ✓ | offering-entry, product-claims, price-position, objection-list, **competitor-field** | fit-match, price-barrier, **answer-gap** (now grades proof strength), recurring-objection, lead-with-this, **competitive-standing**, **unbacked-claim** | yes | DONE: expanded on competitive + claim-integrity |
| `04` Organisation | proof-library, compliance-fence | **none, by design** | yes | matches proof, gates drafts; no behaviour to sense |
| `05` Profile | writing-history | voice | yes | thinnest; most room to grow |

(`02`'s `told.md` now exists, with `deal-seed` among its records. `00` Brain has no
channels/assemblies/signals by design and still lacks a `told.md`; closing that one told source is a
small parity pass folded into the Brain session.)

## Seed findings (a running start, not the whole job)

These came out of a first look. Treat them as leads to confirm and extend, not a finished list.

### 02 People — DONE
Everything the seed findings called for was built, plus more:
- **Meet wired in.** New `meeting-history` assembly, in **two layers**: who-was-on-the-call is always
  there; what-was-said only when note-taking was on (named as a data gap, not faked). `person-history`
  now also pulls Meet (`meeting`, `participant`) and Calendar `status-event`/`free-busy`. The four call
  gaps (`loose-end`, `blocker`, `understanding-gap`, `champion`) are **narrowed, not faked**.
- **`draws_from` fixed** → `[gmail, calendar, slack, contacts, meet, web]` (Contacts was used-but-undeclared).
- **New signals:** `best-way-to-reach` (Q9, previously unanswered), `missing-people` (Q4-6),
  `time-to-reconnect` (Q19), `one-sided` (Q14), `warmth-fading` (Q14, low-confidence), `buying-intent`
  (Q14/Q19, the deal-detection trigger).
- **`told.md` created** (relationship-note, offline-touch, contact-preference, correction, seed-contact,
  deal-seed).
- **Plain-English pass:** coalition→`missing-people`, open-loop→`loose-end`,
  responsive-channel→`best-way-to-reach`, reciprocity→`one-sided`, engagement-tone→`warmth-fading`.
  (`champion`/`blocker`/`stakeholder`/`warm-path` kept, as common-enough domain terms.)
- **Reviewed** (two independent focused passes): catalog is solid; small calibration fixes applied.
- *Optional tidy not applied:* `blocker` still answers `Q13` (really `understanding-gap`'s question)
  alongside `Q15`; drop `Q13` if you agree.

### The deal primitive (cross-cutting, added this session)
A bigger gap surfaced while reviewing 02: there was **no unit for what you actually sell into**. We
added the **deal**, and it reaches across modules, so read this before continuing.
- **What:** a deal is one selling effort (an offering + its conversations + the people on them), and it
  can **span organisations** because *the conversation is the membrane* (members = whoever is on the
  deal's threads/calls). The org stays the *account* (roster); the deal is the unit of progress.
- **Where it lives:** **People gathers** the deal (`02/assemblies/deal.md`, goal-blind); the **Brain
  stages** it (a scoreboard row is a deal, a calendar item is a person inside one). Capability gathers,
  intent stages.
- **Creation:** manual (a `deal-seed` told record) or **detected** (People clusters conversations and
  *proposes* a deal-seed; never auto-commits). Detection is triggered by the `buying-intent` signal.
  Separation: offering first, then people-cluster/account, then time; the same-org/same-offering
  boundary is a judgement People asks about.
- **Written into:** `02` (module, `assemblies/deal.md`, `told.md`), `00-spine/module.md`, root
  `CLAUDE.md` model section, `docs/scenario-councils.md`, `_scratch/open-questions.md`.

### 03 Offerings — DONE
Started from 4 assemblies / 5 signals (the most balanced catalog), now 5 / 7. Staleness check came back
clean: `draws_from [web, drive]` matches what the assemblies pull, every `inputs`/`measures` id
resolves, all `kind`s valid, "what's landing" and forecasting correctly parked. No existing prose
needed rewriting. What was built:
- **New assembly `competitor-field`** (about: an offering). Gathers the named rivals/incumbent: who
  they are, what they claim, their lock-in bet, their public-review worries. Shares its web inputs with
  `price-position` on purpose (price = numbers only; competitor-field = the fuller rival profile those
  numbers sit inside); `objection-list` deliberately **not** an input, to avoid double-counting
  review-worries. Gives the competitive read a floor to stand on (it had none).
- **New signal `competitive-standing`** (kind: risk, `answers: [Q15]`). Where you win, where a rival or
  incumbent wins (incl. a capability the buyer needs and you lack), and whether lock-in is a live
  barrier. **Stays off price** (that's `price-barrier`'s single read); the "where we win" half is an
  *angle* that feeds `lead-with-this`; it *feeds* Q12 (the Brain's message play) but doesn't claim it.
  Lock-in measure is `incumbent-data-or-contract-lock` (present/absent), never a cost number.
- **New signal `unbacked-claim`** (kind: risk, `answers: [Q11]`). Turns "back every claim" on the
  user's own pitch: flags a claim with no spec line, no Drive file, no proof tag, before it reaches a
  draft. `claim-source` (told vs researched-suggested) catches a sharper-pitch claim you never made.
  Maps loosely to Q11 ("which of my info is *safe* to share"); its real downstream is the render and
  `04`'s compliance fence (user accepted the looser fit).
- **`answer-gap` extended, not duplicated** — proof *strength* folded in (user decision). Added measures
  `proofs-per-claim, proof-recency, named-vs-anonymous-reference, third-party-vs-self-asserted`; an
  answer on thin proof (old/anonymous/self-asserted) now reads as a *partial* gap, not "covered". Keeps
  one owner for "do we have a solid answer" and avoids placing a sensing floor on `04` (no signals by
  design); `04` supplies the proof doc *and its attributes*, Offerings judges.
- **Considered and deliberately NOT built** (so they aren't re-litigated): standalone `proof-strength`
  (folded into answer-gap); **deal-specific discount room** and **best-fit-offering** (both deferred to
  the Brain, see Deferred); collateral freshness (a tag not a read; its one useful atom `proof-recency`
  harvested into answer-gap). "What's landing" / forecasting remain parked, untouched.

### 04 Organisation
- **No signals, by design** (it matches proof and gates drafts). Confirm that still holds rather than
  inventing a sensing floor. The interesting question is assemblies: are `proof-library` and
  `compliance-fence` enough, or does the pricing authority want its own gather rather than sitting as a
  told record?

### 05 Profile
- Thinnest catalog. The big open question: the **operator dials** (sales fluency, cadence, style,
  autonomy, coaching) are described as "inferred from behaviour" in prose but are **not modelled as
  signals**. Decide whether each becomes a signal (a `cadence` read off engagement times, a `fluency`
  read off edits, a `style` read off how many relationships are worked) or stays prose. The lone
  `voice` signal uses `kind: style`, a value added to the enum for non-state reads; reuse it.

## Deferred: 00 Brain, its own session

The most complex module, and the one we have **not brainstormed in full**. By design it has no
channels, assemblies or signals (it decides, it does not sense); its synthesis is the **scoreboard**
and the **calendar**. Its open questions are the system's hardest: the **triage / pick-and-schedule**
keystone, the **shape of a brief**, and **reading the fuzzy target**. These deserve a dedicated
session once the assistant catalogs are solid, because a richer signal set upstream changes what the
Brain has to weigh. The deeper Brain-frontiers brief is [`handoff-post-rollout.md`](handoff-post-rollout.md).

**The Brain session now also carries the deal's intent half** (see "The deal primitive" above):
- **Stage and prioritise deals** on the goal's ladder (a scoreboard row is a deal). This is the triage
  keystone, now deal-shaped.
- **Re-scope the signals to the deal** — `missing-people` should read the deal's buying group (not the
  org roster), and `champion`/`blocker`/`loose-end` should roll up per deal. Deferred here because it
  only makes sense alongside staging.
- **The deal's "how"** — clustering and grow thresholds (how much overlap merges two threads into one
  deal), auto-propose vs always-ask sensitivity, and the deal-boundary judgement (same org + same
  offering). All in [`open-questions.md`](open-questions.md).

**The Brain session also inherited two reads deferred out of `03` Offerings** (both are *intent*, not
product sensing, so they belong here):
- **Best-fit-offering** — given one lead, which of *all* the offerings best fits, and why the others
  fit worse. This is a portfolio call (a Brain play that calls `fit-match` per offering and ranks),
  not a new Offerings signal (which would just be `fit-match` run N times and sorted).
- **Deal-specific discount room** — how far to discount on *this* deal to close it. Depends on the goal
  and how hard you'll push, so it sits with staging; the *static* told discount room is already read by
  `price-barrier`.

## Guardrails and contract

- Brainstorm at **"who does what"** altitude, in plain English, narrative not shorthand. Go light on
  dashes (commas, colons, parentheses).
- **Lineage rules** ([`../docs/library-format.md`](../docs/library-format.md)): every `inputs` id
  resolves; name data gaps and told gaps rather than fake them.
- **Single-owner sensing:** a signal keeps its own read; it may pull an ingredient from a supplier, but
  with no decision in the middle (a decision in the middle is a Brain play, not a signal).
- A signal **earns its place by answering a real question** in
  [`../docs/sales-questions.md`](../docs/sales-questions.md). Do not invent signals in the abstract;
  the space is bottomless.
- Templates in [`../_templates/`](../_templates/). Worked examples: `02` for assemblies and signals,
  `03` for the `told.md` source floor.

## Read these first

- root [`CLAUDE.md`](../CLAUDE.md) (the model and the rules, auto-loaded)
- the module under review: its `module.md` plus `assemblies/`, `signals/`, `told.md`
- [`../docs/library-format.md`](../docs/library-format.md) (the contract)
- [`../docs/sales-questions.md`](../docs/sales-questions.md) (the demand spec, the 26 questions)
- [`../docs/tracing-back.md`](../docs/tracing-back.md) (the three floors: facts, counting, opinion)
- [`../01-integrations/channels/`](../01-integrations/channels/) (what is connectable, and what is not)
- [`open-questions.md`](open-questions.md) (settled vs still open)
