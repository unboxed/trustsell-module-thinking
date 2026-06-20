# Sales Amplifier — Thinking Workspace

A structured space to **keep brainstorming the architecture** of a sales-amplifier tool with Claude Code — *not* to build the app (yet).

## The idea
Each module of the system gets a folder. Inside each is a `CLAUDE.md` describing that module's role, the questions it answers, and its open design questions. The root `CLAUDE.md` holds the overall model and tells Claude Code to act as a **design thinking partner** — to pressure-test and update these docs, and *not* to start writing application code.

## How this workspace is organised
Everything here is one of **three layers** — knowing which is which is the whole trick:

1. **The model** — the durable definition of what each module *is* and *does*. This is the **source of truth**, and it lives in each module's `CLAUDE.md` (the module's *home*). Genuinely cross-module mechanism — the end-to-end flow, the Brain's plays — is model too.
2. **Scenarios** — one concrete case used to *illustrate* the model (e.g. the councils deal in `docs/scenario-councils.md`). A scenario is an example, **not a contract** — it's allowed to be rough or out of date.
3. **Demos / views** — how the model is *shown* running on a scenario (the blueprint canvas, the "trace the flow" timeline). Presentation, not truth.

**The invariant:** a module's home is the single source of truth for everything the UI shows about that module — the card, the wires, and (in time) its routines and inputs. The UI is a **read-only mirror**: edit the doc, the UI reflects it; there is no second store. `connects` already works this way, and every facet follows it — a **narrative** in the body plus the **actual listed values** as frontmatter metadata.

**Routines & recipes** follow the owner: a **routine** (one owner) lives in that module's home; a **recipe/play** (across modules, a decision in the middle) lives in the Brain. Defined **once**, then referenced by scenarios and demos.

**The discipline:** when a scenario or a demo teaches you something durable about a module, write it back into the **module's home**. The scenario stays as the illustration; the home is the record — that's how nothing you brainstorm gets lost.

Where a thing lives falls straight out of this:
- **one module, settled** → that module's `CLAUDE.md`
- **spans modules, settled** → `docs/`
- **still being figured out** → `_scratch/`

## How to use it
1. Install Claude Code, then open this folder:
   ```
   cd sales-amplifier-thinking
   claude
   ```
2. Claude reads the root `CLAUDE.md` automatically and picks up the model + the rules.
3. To brainstorm one module in depth, focus into its folder:
   ```
   cd 02-relationships
   claude
   ```
   Claude auto-loads that module's `CLAUDE.md` plus the root.
4. As decisions firm up, ask Claude to update the relevant `CLAUDE.md`. The files are your memory between sessions.
5. Use `_scratch/open-questions.md` as the parking lot.

## Good first prompts
- "Read the whole workspace and tell me where the modules contradict each other."
- "Let's work only on the spine. Walk me through routing for one Advance example, end to end."
- "Play devil's advocate on the three-tier split — what would collapse these into fewer modules?"

## Folders
- `00-spine` · the brain — reasons to decide; holds the goals
- `01-integrations` · the connector — connect once; carries messages in and out
- `02-relationships` · the people expert — relationships, conversation history, sensing
- `03-offerings` · the product expert — what we sell, per offering
- `04-organization` · the organisation you represent — proof, brand, compliance (optional)
- `05-persona-you` · Profile — your voice and your preferences
- `docs/` · cross-module reasoning (the model that spans modules) + the UI foundation
- `_scratch/` · running questions and handoff briefs (the workbench)
