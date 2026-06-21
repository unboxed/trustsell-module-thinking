# Handoff — catalog review: a solid set of assemblies and signals, module by module

> **The task in one line.** Go module by module through the assistants and, for each, review the
> assemblies and signals that exist today, flag anything outdated now that the floors are real, and
> come up with a **solid, deliberately expanded set**. This is a brainstorm, not a build: propose and
> pressure-test first, build the agreed entries after. The **Brain (`00`) is deferred** to its own
> session (it is the most complex and the least brainstormed; see the end).

## Why now

The structured libraries now exist for every assistant (`02`/`03`/`04`/`05`), the old per-module
`CLAUDE.md`s are retired, and `module.md` plus the libraries are the source of truth. With the floors
real, two things are worth a deliberate pass: some prose and lineage may be **stale** (written before
the floors, or pointing at the wrong channels), and most catalogs are **thinner than they should be**.
The first build aimed at parity, not completeness; this pass aims at completeness.

## Order

`02` → `03` → `04` → `05`, one at a time. Then `00` Brain as its own dedicated session.

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
| `02` People | person-history, conversation-history, stakeholder-map | champion, cooling-champion, warming, blocker, understanding-gap, new-stakeholder, champion-went-dark, warm-path, open-loop | **missing** | richest catalog; the worked example |
| `03` Offerings | offering-entry, product-claims, price-position, objection-list | fit-match, price-barrier, answer-gap, recurring-objection, lead-with-this | yes | fairly solid |
| `04` Organisation | proof-library, compliance-fence | **none, by design** | yes | matches proof, gates drafts; no behaviour to sense |
| `05` Profile | writing-history | voice | yes | thinnest; most room to grow |

(`00` Brain has no channels/assemblies/signals by design and still lacks a `told.md`; `02` also still
lacks a `told.md`. Closing those two told sources is a small, mechanical parity pass, separate from
this catalog work.)

## Seed findings (a running start, not the whole job)

These came out of a first look. Treat them as leads to confirm and extend, not a finished list.

### 02 People
- **`draws_from` is out of sync.** It declares `[gmail, calendar, slack, web]`, but `stakeholder-map`
  already pulls `contact` and `other-contact` from the **Contacts** channel. Contacts is used but not
  declared; **Meet** is not used at all.
- **Meet is unexploited, and it would close a named blind spot.** `blocker`, `understanding-gap`,
  `open-loop` and `champion` all name "if it happened on a call, the thread shows only the stall" as a
  data gap. The Meet channel (Meeting, Transcript, Smart notes) would close it. Candidate: a
  **meeting/call history** assembly, feeding signals like *a commitment made on a call* or *an
  objection raised on a call*.
- **Q9 "best way to contact them" has no signal.** A **responsive-channel** read (where they actually
  reply: email vs Slack vs meeting, and how fast on each) would answer it.
- **The innocent-explanation scan leans on out-of-office**, but `person-history` does not list the
  Calendar `status-event` (or `free-busy`) in its inputs, so that scan's lineage is thin. Wire it.
- **More candidates to weigh:** coalition-complete / decider-gap (Q4-Q6, the stakeholder-map already
  names the hole, a signal could fire on it); re-engagement opportunity (a dormant relationship worth
  reviving, distinct from cooling, which is decay); reciprocity / engagement-balance (who is chasing
  whom); a tone/sentiment shift read (distinct from blocker).

### 03 Offerings
- 4 assemblies / 5 signals, the most balanced catalog. **"What's landing" is deliberately parked** (no
  outcome loop yet), so do not invent it as a signal here.
- Candidates to weigh, watching for overlap with `price-barrier`: competitive displacement (incumbent
  lock-in as its own read), proof strength (is the proof behind a claim strong or thin), deal-specific
  discount room.

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
