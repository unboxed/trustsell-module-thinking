# Sales Amplifier — Thinking Workspace

This is a **design / brainstorming workspace, not an application**. There is no code here and we are not building the app yet. Each folder is a *module* of a multi-agent sales tool we're still reasoning about. The markdown files are the living memory of that thinking.

## How to work with me in here
- **Brainstorm and pressure-test. Do NOT write application code, scaffold a project, or propose database/file schemas unless I explicitly ask.** If a request would start "building," pause and confirm first.
- These `.md` files are the source of truth. When we make a decision, **update the relevant module's `CLAUDE.md`** so it persists between sessions.
- When I explore one module, read that module's `CLAUDE.md`. For cross-cutting questions, read every module file involved before answering.
- Actively **flag contradictions** between modules (e.g. two modules claiming the same responsibility). Boundary disputes are the most useful thing to catch.
- Keep this distinction sacred: the memory modules **reason to *answer*** — they serve what they know, and proactively flag what their brief cares about, but they hold **no goals of their own**. The spine **reasons to *decide*** — it sets intent, routes, and acts.

## The model so far

A three-tier system, not a swarm. The clearest way to picture it: **one brain, a team of expert assistants, and a single shared connector to the outside world.**

### The brain — `00-spine` (reasons to *decide*)
The spine is the only true decision-maker. It holds the user's **strategy** — which, concretely, is a set of **goals, each pinned to an offering** ("BOPS → 30 councils as early adopters by Q1"). From those goals it decides who to act on and why, then assembles a recommendation. It is the one place **intent** lives.

### The assistants — the memory modules (reason to *answer*)
`02-relationships`, `03-offerings`, `04-organization`, and `05-persona-you` are domain experts the brain leans on. Crucially they are **not passive answer-on-demand stores**. The brain works with each of them three ways: it **briefs** them (standing instructions drawn from the strategy), they **proactively report** what their brief tells them matters (which itself can trigger the brain), and it **asks** them specific questions on demand. They have real expertise and initiative — they can even research the open web — but **no goals of their own**. What we're trying to achieve always originates in the brain.

### The connector — `01-integrations` (no reasoning at all)
A **port / switchboard**, nothing more. The user connects their accounts to it once; from then on it just carries messages in and out. It does not read, sense, or decide — the modules reach *through* it. (Earlier notes called this "the pipe that brings context in" and "the trigger source." That was wrong: the *reaching* is `02`'s job, and triggers are noticed by `02` and the spine, never by the port.)

**Principle:** capability is *distributed* (in the assistants); intent is *centralized* (in the spine).

**Autonomy — people as the fulcrum, AI as the lever.** The human works the *verbs* (decide, approve, send); the AI works the *nouns* (find the target, draft the message, gather the proof). The AI always **suggests**; the human makes the final call. Nothing goes out without a person pulling the trigger — at least for now.

**Output of the tool:** a recommendation — *who to act on, why, and a ready-to-send draft in the user's voice.* The brain assembles the what+why from the assistants and hands down a **brief**; a final render step turns it into a message, with `05` supplying the personal voice and `04` supplying the brand/compliance guardrails it must stay inside.

**Two tiers of memory — shared vs personal.** `04-organization` is the **shared** tier (proof, brand, compliance, and — as a future vision — the team that joins an org). `05-persona-you` and `02-relationships` are the **personal** tier: one voice, and one set of relationships, per individual.

**Three operating modes are really three *query patterns* the brain runs over the same assistants:**
- **Sustain** — keep relationships alive (decay + events; mutes Offerings).
- **Advance** — move open deals (stage + objections; leans on Offerings).
- **Expand** — find / grow (warm paths + targets; leans on the Relationships web).

## Index
- `00-spine/` — the brain (reasons to decide; holds the goals)
- `01-integrations/` — the switchboard (connect once; carries messages in and out)
- `02-relationships/` — the people expert (relationships, conversation history, sensing)
- `03-offerings/` — the product expert (what we sell, per offering)
- `04-organization/` — the organisation you represent (proof, brand, compliance — optional)
- `05-persona-you/` — your voice (the personal layer, applied when a message is written)
- `_scratch/open-questions.md` — running parking lot
