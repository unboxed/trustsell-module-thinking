# Sales Amplifier — Thinking Workspace

A structured space to **keep brainstorming the architecture** of a sales-amplifier tool with Claude Code — *not* to build the app (yet).

## The idea
Each module of the system gets a folder. Inside each is a `CLAUDE.md` describing that module's role, the questions it answers, and its open design questions. The root `CLAUDE.md` holds the overall model and tells Claude Code to act as a **design thinking partner** — to pressure-test and update these docs, and *not* to start writing application code.

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
- `00-spine` · the brain (reason to decide)
- `01-integrations` · the pipe (input)
- `02-relationships` · people graph + conversation memory
- `03-offerings` · what we sell
- `04-organization` · strategy, proof, brand voice
- `05-persona-you` · your voice and relationships
- `_scratch` · running questions
