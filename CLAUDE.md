# Sales Amplifier — Thinking Workspace

This is a **design / brainstorming workspace, not an application**. There is no code here and we are not building the app yet. Each folder is a *module* of a multi-agent sales tool we're still reasoning about. The markdown files are the living memory of that thinking.

## How to work with me in here
- **Brainstorm and pressure-test. Do NOT write application code, scaffold a project, or propose database/file schemas unless I explicitly ask.** If a request would start "building," pause and confirm first.
- These `.md` files are the source of truth. When we make a decision, **update the relevant module's `CLAUDE.md`** so it persists between sessions.
- When I explore one module, read that module's `CLAUDE.md`. For cross-cutting questions, read every module file involved before answering.
- Actively **flag contradictions** between modules (e.g. two modules claiming the same responsibility). Boundary disputes are the most useful thing to catch.
- Keep this distinction sacred: the memory modules **reason to *answer*** — they serve what they know, and proactively flag what their brief cares about, but they hold **no goals of their own**. The brain **reasons to *decide*** — it sets intent, routes, and acts.

## Module doc format

Each module's `CLAUDE.md` is **two layers in one file**: a thin **frontmatter** block of
facts, then the **narrative body**. The body is the reasoning — the actual product of
this workspace — and stays prose. The frontmatter holds only the small, schema-able
slice the blueprint needs (`name`, `title`, `blurb`, `icon`, `optional`, plus the
semantic `tier`/`modes`/`connects`); it is the **single source of the node's card
face**. Edit a module and the blueprint reflects it live — the UI is a read-only
**mirror** of these docs, never the store. The frontmatter scheme is catalogued in
`docs/ui-foundation.md`.

**Two layers per facet, with values shown as badges.** Each facet has a **narrative** in the
body that explains it. Where the facet is a list of things, those things also show as
**badges**: a short label in `backticks`, followed by a dash and a one-line description. The
same short labels are stored in the frontmatter, so the future UI can render them as chips you
add, change, or remove. `connects` is the original of this pattern; the list-facets that follow
it are `values`, `inputs` (`current` and `suggested`), `routines`, `plays` (on `00` only) and
`open_questions`.

Which facets use badges:
- **Badge facets** (short labels in frontmatter, badges in the body): Values, Inputs, Routines,
  Connections, Plays.
- **Plain facets** (prose only): Purpose, System prompt, What it owns, What it doesn't own, Memory.
- **Open questions** stays a plain bulleted list — a question is not a label.

Keep the frontmatter labels short (the badge text), put each description once in the body, and
keep the two in sync. The YAML is hand-edited, so keep it shallow. The blueprint reads only the
keys it knows today (`coerceMeta` in `blueprint/lib/modules.ts`); the newer keys parse
harmlessly and will surface in the UI once that reader is extended. `03-offerings/CLAUDE.md` is
the worked example to copy; the full clarity-and-badges spec is in
`_scratch/handoff-clarity-pass.md`.

The three layers (**model / scenario / demo**) and the single-source-of-truth invariant that
sit above this are written up in `README.md`.

## The model so far

A three-tier system, not a swarm. The clearest way to picture it: **one brain, a team of expert assistants, and a single shared connector to the outside world.**

### The brain — `00-spine` (reasons to *decide*)
The brain is the only true decision-maker. It holds the user's **strategy** — which, concretely, is a set of **goals, each pinned to an offering** ("BOPS → 30 councils as early adopters by Q1") — and it *helps shape* that strategy with the user, back and forth. From those goals it decides who to act on and why, then assembles a recommendation. It is the one place **intent** lives.

### The assistants — the memory modules (reason to *answer*)
`02-relationships`, `03-offerings`, `04-organization`, and `05-persona-you` are domain experts the brain leans on. Crucially they are **not passive answer-on-demand stores**. The brain works with each of them three ways: it **briefs** them with **routines** (the standing jobs drawn from the strategy — a default beat plus strategy-driven focus), they **proactively report** what their routines turn up (which itself can trigger the brain), and it **asks** them specific questions on demand. They have real expertise and initiative — they can even research the open web — but **no goals of their own**. What we're trying to achieve always originates in the brain.

### The connector — `01-integrations` (no reasoning at all)
A **port**, nothing more. The user connects their accounts to it once; from then on it just carries messages in and out. It does not read, sense, or decide — the modules reach *through* it, and triggers are noticed by `02` and the brain, never by the port.

**Principle:** capability is *distributed* (in the assistants); intent is *centralized* (in the brain).

**Routines vs plays.** A **routine** is a standing job with a single owner — the module that does it (it may *pull* ingredients from others, who are just suppliers). A **play** is a brain-conducted recipe across several modules with a *decision in the middle* — it has no single-module owner, so it lives with the brain. The litmus: a decision in the middle ⇒ a play; otherwise a routine.

**Every connection is a request + a provide.** A link between two modules is never one undirected road: something is *asked for* going one way and *handed back* the other — the brain *requests* "find the decision-maker" and `02` *provides* the answer; `02` *requests* a person's mail history and `01` *provides* it. Each module names both sides in its `connects` frontmatter (`requests` / `provides`), and the blueprint draws them as twin directional lines — in and out.

**Autonomy — people as the fulcrum, AI as the lever.** The human works the *verbs* (decide, approve, send); the AI works the *nouns* (find the target, draft the message, gather the proof). The AI always **suggests**; the human makes the final call. Nothing goes out without a person pulling the trigger — at least for now.

**Output of the tool:** a recommendation — *who to act on, why, and a ready-to-send draft in the user's voice.* The brain assembles the what+why from the assistants and hands down a **brief**; a final render step turns it into a message, with `05` supplying the personal voice and `04` supplying the brand/compliance guardrails it must stay inside.

**Two tiers of memory — shared vs personal.** `04-organization` is the **shared** tier (proof, brand, compliance, and — as a future vision — the team that joins an org). `05-persona-you` and `02-relationships` are the **personal** tier: one personal layer (voice + preferences), and one set of relationships, per individual.

**Sustain, Advance and Expand are not modes you switch into — they're the three *categories* every routine and action falls into.** All three run at once; the strategy just tilts where the emphasis goes:
- **Sustain** — keep relationships alive (decay + events).
- **Advance** — move open deals (stage + objections; leans on Offerings).
- **Expand** — find / grow (warm paths + targets; leans on the People web).

## Index
- `00-spine/` — the brain (reasons to decide; holds the goals)
- `01-integrations/` — the connector (connect once; carries messages in and out)
- `02-relationships/` — the people expert (relationships, conversation history, sensing)
- `03-offerings/` — the product expert (what we sell, per offering)
- `04-organization/` — the organisation you represent (proof, brand, compliance — optional)
- `05-persona-you/` — Profile (the personal layer: your voice and your preferences)
- `_scratch/open-questions.md` — running parking lot
