# Handoff — the clarity and consistency pass on the module blueprints

*A brief for the next agent. This is a brainstorm/blueprint workspace, not the tool — see the
root `CLAUDE.md`, and don't write app code. These `.md` files are a **blueprint someone will
follow** to build the tool later, so they have to read clearly to a non-technical person.*

## Why this exists

The six module docs (`00-spine` through `05-persona-you`) were just put on a shared **facet**
template — Purpose, Values, System prompt, Inputs, Routines, and so on. The template is good;
**keep it.** The problem is the writing. It got dense and uneven:

- too many **tables** used to explain things,
- too many **arrows (`→`)** and **em-dashes (`—`)** strung through sentences,
- **nested asides** in brackets, and
- **clever but ambiguous** phrasing that's hard to follow on first read.

The owner finds the docs hard to read and says they feel "all over the place." This pass fixes
the **presentation and clarity** — not the structure, and not the ideas.

## What "done" looks like (the rules)

1. **Plain English, blueprint voice.** Short, direct sentences. Write as if explaining to a
   smart person who is not technical and was not in any of these conversations. If a sentence
   needs two dashes or an arrow to hold itself together, split it into two sentences.

2. **No tables to explain things.** Use clear prose and simple bullet or numbered lists
   instead. (One exception below.)

3. **Every section pairs a description with its values, shown as badges.** Each facet section
   starts with one or two plain sentences saying what the facet is, and then lists its actual
   values underneath. Each value is a `badge` (a short label in backticks) followed by a
   one-line description. So you can always tell them apart: a `badge` is a value; plain text is
   description. See "How to show values" below for the exact format.

4. **Same sections, in the same order, in every module.** Once you've read one module you
   should be able to read them all. Use this order and these headings everywhere:
   1. Purpose
   2. Values
   3. System prompt
   4. What it owns
   5. What it doesn't own
   6. Inputs (today vs. suggested)
   7. Routines
   8. Plays *(Brain only)*
   9. Connections
   10. Memory
   11. Open questions
   Skip a section only when it genuinely doesn't apply (for example, Connections has no
   Routines — say "None" and why, don't drop the heading).

5. **Keep the structure and the metadata.** The frontmatter lists (`values`, `inputs`,
   `routines`, `plays`, `open_questions`, `connects`) stay — the future UI reads them. But make
   each list item a **short label** (the badge text), not a full sentence. The body then shows
   that same badge with its one-line description. So the only thing repeated is the short label;
   the description lives once, in the body. Keep the labels and the badges in sync.

6. **Keep the meaning.** Only the wording, the layout, and the order change. Don't drop ideas
   and don't invent new ones. If something is genuinely unclear, leave a short note in the
   module's "Open questions" rather than guessing.

## How to show values — badges

Facets that hold a list of values (Values, Inputs, Routines, Connections, and Plays on Brain)
use the same shape:

- **Frontmatter:** each value is a **short label** in the list — for example
  `routines: ["Build the profile", "Keep it current"]`.
- **Body:** a one-line description of the facet, then each value as a `badge` (the same short
  label, in backticks) followed by a dash and a one-line description of that value.

Example:

```
## Routines
The standing jobs Offerings does:
`Build the profile` — set the pitch, fit-shape, pricing and objections with you.
`Keep it current` — refresh the market and competitor research.
```

Two facets are not badge lists: **Open questions** stays a plain bulleted list (a question is
not a label), and **Memory / Purpose / System prompt / Owns / Doesn't** are prose. If the
`backtick` styling ever reads oddly, the fallback is a **bold** lead-in label — same idea.

## The target style — one facet, before and after

This is the Routines facet on Brain. It shows the level of plainness to aim for.

**Before (too dense):**

> Routines are standing jobs drawn from the strategy. Brain is the source of every *other*
> module's routines, and works with each three ways (the jobs listed in `routines`):
> - **Briefs** them — hands each a strategy-driven job ("watch these councils, find the
>   decision-makers").
> - **Receives** what they push up — *"Jane's gone quiet," "Council X replied asking about
>   pricing."* These can wake Brain.

**After (plain, with badges):**

> The standing jobs Brain runs. Brain also sets the routines for every other module.
>
> `Brief the modules` — give each module a job drawn from the strategy, such as "watch these councils and find the decision-makers."
> `Listen for reports` — take in what modules push up, such as "Jane has gone quiet," and act when it matters.
> `Ask follow-ups` — put specific questions to a module, such as "who else works at that account?"
> `Decide what's next` — weigh everything surfaced into the single most useful thing to do.
> `Track outcomes` — record how each recommendation turned out, so the right module can learn from it.

The live version of this is already done in `03-offerings/CLAUDE.md` — read it as the reference
for the whole style.

## Scope — which files

- **The main job: the six module docs.** `00-spine`, `01-integrations`, `02-relationships`,
  `03-offerings`, `04-organization`, `05-persona-you` — each `CLAUDE.md`.
- **Two explaining-tables to remove** (replace with prose): the facet table in the root
  `CLAUDE.md` ("Module doc format") and the frontmatter scheme table in
  `docs/ui-foundation.md`. Keep the same information, just not as a grid.
- **One table to leave alone (it's real data, not explanation):** the signals table in
  `02-relationships` ("what's fetched and counted → reading → action"). That one is genuinely
  tabular. Confirm with the owner, but the default is keep it.
- **Out of scope for now:** the cross-cutting docs (`docs/flow.md`, `scenario-councils.md`,
  `tracing-back.md`, `how-modules-collaborate.md`). Leave them unless the owner asks.

## How to work

1. **Read `03-offerings/CLAUDE.md` first.** It is already done in this style (plain writing +
   badges) and the owner has signed it off. Copy its shape exactly.
2. **Roll the same style across the other five,** keeping the section order identical and the
   frontmatter labels in sync with the body badges.
3. **After each file, check the frontmatter still parses as valid YAML** (the blueprint reads
   it live; a broken block makes the card go blank). A quick parse check is enough.

## Settled, and one open call

- **Settled:** values live as short labels in the frontmatter and as badges in the body. The
  frontmatter feeds the future UI; the body is what a human reads. Only the short label repeats.
- **Open call for the owner:** the `02` signals table — keep it as a table (it is real data,
  not explanation) or turn it into badges? *(Default: keep it.)*

## Don't

- Don't change the facet set, the three-layer model (model / scenario / demo), or the
  `inputs` "today vs. suggested" split.
- Don't fill in any `inputs.current` value — those `<fill in …>` blanks are the owner's to
  fill, by describing the existing tool.
