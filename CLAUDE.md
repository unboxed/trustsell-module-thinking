# Sales Amplifier — Thinking Workspace

This is a **design / brainstorming workspace, not an application**. There is no code here and we are not building the app yet. Each folder is a *module* of a multi-agent sales tool we're still reasoning about. The markdown files are the living memory of that thinking.

## How to work with me in here
- **Brainstorm and pressure-test. Do NOT write application code, scaffold a project, or propose database/file schemas unless I explicitly ask.** If a request would start "building," pause and confirm first.
- These `.md` files are the source of truth. When we make a decision, **update the relevant module's `CLAUDE.md`** so it persists between sessions.
- When I explore one module, read that module's `CLAUDE.md`. For cross-cutting questions, read every module file involved before answering.
- Actively **flag contradictions** between modules (e.g. two modules claiming the same responsibility). Boundary disputes are the most useful thing to catch.
- Keep this distinction sacred: some modules **reason to *answer*** (serve knowledge when asked); the spine **reasons to *decide*** (sets intent, routes, acts).

## The model so far
A three-tier system, not a swarm:
1. **Pipe** — `01-integrations` brings 360° context in from connected channels (sensing / triggers).
2. **Memory** — `02-relationships`, `03-offerings`, `04-organization`, `05-persona-you` hold and retrieve knowledge. Rich retrieval/reasoning, but **no standing goals**.
3. **Decider** — `00-spine` is the brain. It reasons to decide, holds standing strategy, and routes scoped questions to the memory modules.

**Principle:** capability is *distributed* (in the modules); intent is *centralized* (in the spine).

**Output of the tool:** a recommendation — *who to act on, why, and a ready message in the user's voice.* The what+why comes from the modules; **You (`05`) + Organization (`04`) render the voice last.**

**Three operating modes are really three *query patterns* over the same modules:**
- **Sustain** — keep relationships alive (decay + events; mutes Offerings).
- **Advance** — move open deals (stage + objections; leans on Offerings).
- **Expand** — find / grow (warm paths + targets; leans on the Relationships graph).

## Index
- `00-spine/` — the brain (reason to decide)
- `01-integrations/` — the pipe (input)
- `02-relationships/` — people graph + conversation memory
- `03-offerings/` — what we sell
- `04-organization/` — strategy, proof, brand voice
- `05-persona-you/` — your voice and your relationships
- `_scratch/open-questions.md` — running parking lot
