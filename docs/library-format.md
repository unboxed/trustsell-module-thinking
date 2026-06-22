# The library format: how the modules' thinking is stored from here on

This is the **contract** for the structured library that replaces the one-prose-`CLAUDE.md`-per-module
monolith. It is what an agent reads before producing entries. The matching skeletons live in
[`_templates/`](../_templates/); one worked example of each lives in its real home (linked below).

## Why we changed

The agent-anatomy prose was right for *reasoning*, but the part of each module that is really a
**catalog** (the named, enumerable things at each floor of the pipeline) was trapped in prose, so it
could not grow into a library or be rendered. We split each module in two:

- **The catalog floors** become a **library of structured entries** (this doc).
- **The operating prose** (principles, system prompt, user input, output, memory, open questions)
  becomes a slim **`module.md`** overview.

The mapping from the old agent-anatomy is exact:

| Old agent-anatomy section | New home |
|---|---|
| Raw data | `01-integrations/channels/*.md` (raw-data floor) |
| Reasoning, *assembling* | `<module>/assemblies/*.md` |
| Reasoning, *sensing* | `<module>/signals/*.md` |
| Principles, System prompt, User input, Output, Memory, Open questions | `<module>/module.md` |

## Writing style for every entry

Two rules, because a person reads these, not just a parser:

1. **Plain English for the names we invent.** An assembly is "Person history", not "Contact dossier".
   Avoid fancy or business-fashion words for our own labels and field values. Keep the real API names
   (`internalDate`, `threadId`) and the established domain terms the user already uses (stakeholder,
   champion).
2. **Go light on dashes.** Explain with commas, colons, parentheses, or a fresh sentence rather than
   em-dash asides. Keep ordinary hyphens only inside compound words (field-per-row) and code ids
   (email-message).

## The floors, and the one rule that varies by floor

The pipeline runs from raw data through assemblies and signals up toward actions. It mirrors the
three-floor track-back in [`tracing-back.md`](tracing-back.md): facts, then counting, then opinion.
The **granularity matches the floor**, so we write docs only where there is reasoning to hold:

| Floor | Nature | Unit | Template |
|---|---|---|---|
| **Raw data** (channels, records, fields) | reference structure, no opinion | **one doc per channel service**, plus each module's own `told.md` | [`_templates/channel.md`](../_templates/channel.md) |
| **Assemblies** | deterministic gather (a person, a conversation, an organisation) | **thin doc per entry** | [`_templates/assembly.md`](../_templates/assembly.md) |
| **Signals** | the read, the first opinion | **rich doc per entry** | [`_templates/signal.md`](../_templates/signal.md) |
| insights, briefs, actions | the higher floors | (none yet) | later |

Plus, per module, one **`module.md`** ([`_templates/module.md`](../_templates/module.md)) holding the
operating prose and the card face.

**Frontmatter is only the card face.** It holds the flat, tag-like facets (ids, enums, short label
lists, the future chips). Anything **nested or sentence-length** lives in the **body** as readable
markdown: a channel's records become a **field-per-row table** (Record, Field, Source); a signal's
threshold and reasoning are prose under the worked example. A nested tree shoved into frontmatter
renders as an unreadable blob, so keep it out. If a value contains a colon, wrap it in single
quotes; YAML reads an unquoted colon as a key separator, and the file fails to parse.

**Every assembly and signal carries a `label` and a `blurb`**, the same pair `module.md` uses: the
`label` is the plain-English display name, and the `blurb` is the **one-line short description on the
entry's card face** in the library viewer. Keep the `blurb` to a single plain sentence (the long body
is revealed on click, so it does not belong in the blurb). The library at `/library` reads exactly
these fields, so editing a `blurb` updates its card with no other change.

Not every module has every floor, and the library is meant to reveal that. **04-organisation has no
signals** (it matches proof and gates drafts, so there is no behaviour to sense); **01-integrations**
has only raw data; **00-spine**'s "assemblies" are the scoreboard and calendar, a different kind of
synthesis. Absence is information; do not invent a floor a module does not have.

## The told source: a module's own raw data

Raw data has two homes. Most of it is the shared **channels** in `01-integrations` (the accounts you
connect, the always-on tools). But some Floor-1 facts are not fetched from anywhere: they are what the
user **states outright**, the pitch for a product, the shape of a good-fit customer, a price. That
**told** input is raw data too, and the most deterministic kind there is, because the user says it
rather than the tool inferring it.

Each reasoning module owns its own told source, so it sits **inside the module**, not in Connections
(Connections stays strictly the doorway for external accounts). It lives at `<module>/told.md` (a
`told/` folder only if a module grows several), and it is shaped exactly like a channel doc
([`_templates/channel.md`](../_templates/channel.md)): a card-face frontmatter with `source: told`,
then a `## Records` field-per-row table. Its records get ids the same way (the kebab-slug of the
label), and an assembly lists them in `inputs` exactly like channel records.

Three things to keep true:

- **It is elicited, not just waited for.** The module actively asks for it (the propose-a-draft,
  you-confirm loop), and a record may be populated from a file the user uploads to Drive. The `Source`
  column says which path each field comes in by.
- **An empty record is a told gap**, named not faked, the same banner [`tracing-back.md`](tracing-back.md)
  already uses: the honest output is "tell me X and I can run this", and the module can offer to
  research a first version for the user to confirm.
- **02 and 00 will adopt one too.** People's seed list and corrections and the Brain's goals are
  told piles living in their `module.md` User input today; each grows a `told.md` of its own when its
  library is built. **05-persona-you** now has one (identity, the operator dials, voice samples).
  **03-offerings is the worked example of this floor.**

## Lineage, the spine

Every entry names what it is built from, one floor down, by **id**:

- an **assembly**'s `inputs` are **record ids** (a channel record, or a record from the module's own
  `told.md`) and, optionally, other assembly ids;
- a **signal**'s `inputs` are **assembly ids**, and its `measures` are the deterministic counts
  beneath the read.

So any signal walks straight down: **signal, then measures, then assembly, then channel record**.
This is the *track-back*: nothing the tool says should float. Two iron rules:

1. **Every id must resolve.** A dangling `inputs` or `measures` id is a bug, not a stub.
2. **Name the gap, do not fake it.** Where a branch runs out of ground because a source is not
   connected (warm paths without LinkedIn) or the user has not told us something, the entry says so,
   as a **data gap** or a **told gap**. (See [`tracing-back.md`](tracing-back.md).)

### Ids

Kebab-slugs. A **record's id is the kebab-slug of its label** (`Email message` gives
`email-message`); it lives in the body table's Record column, not in frontmatter. **Record ids are
unique across all channels** (`email-message`, `calendar-event`, `slack-message`), so an assembly can
name them without qualifying the channel. A told source's records follow the same rule and are unique
within their module (`pitch`, `fit-shape`). Assembly and signal ids are unique within their module.

## How an agent produces a module's library

All six modules are now converted, and the per-module `CLAUDE.md` files have been retired. The steps
below record how the conversion was done and guide any **new** module added later (working from a
`module.md` draft rather than an old `CLAUDE.md`):

1. **`module.md`.** Copy the card-face frontmatter (drop the old `raw_data` and `channels` blobs);
   move Principles, System prompt, User input, Output, Memory and Open questions into the body
   verbatim; reduce Raw data and Reasoning to a one-line pointer at the libraries.
2. **Signals.** For the reasoned module, each named read in the old "signal catalog" becomes one
   `signals/<id>.md`. Carry its counts into `measures`, its sales-question handles into `answers`, its
   tilt into `modes` and `kind`, and the worked example plus threshold logic into the body. A signal
   earns its place only by answering a real question in [`sales-questions.md`](sales-questions.md).
3. **Assemblies.** Name the deterministic gathers the signals stand on (a person history, a
   conversation history, a stakeholder map). Their `inputs` are the channel records they tidy
   together, plus any records from the module's own `told.md`.
4. **Raw data.** The shared channels (raw-data floor, 01 only) live in
   `01-integrations/channels/<id>.md`: a card-face frontmatter, then the records as a **field-per-row
   table**, `| Record | Field | Source |`. And, where a module has facts the user states outright, a
   `<module>/told.md` of the same shape with `source: told` (see *The told source* above).
5. **Check the lineage.** Every signal `inputs` id points at a real assembly file; every assembly
   `inputs` id points at a real record id in a channel doc. Walk one signal end to end to confirm
   nothing floats.

These steps were **additive**: the new files sat beside the old `CLAUDE.md` until each module's
library was complete. That is now done across all six modules, the per-module `CLAUDE.md` files are
retired, and the blueprint reads `module.md` (`readModules` in `blueprint/lib/modules.ts`).

## The worked examples (the gold standard to imitate)

- Channel: [`01-integrations/channels/gmail.md`](../01-integrations/channels/gmail.md)
- Assembly: [`02-relationships/assemblies/person-history.md`](../02-relationships/assemblies/person-history.md)
- Signal: [`02-relationships/signals/cooling-champion.md`](../02-relationships/signals/cooling-champion.md)
- Module overview: [`02-relationships/module.md`](../02-relationships/module.md)

**02-relationships is the worked example**, so copy its shape.

## Deliberately deferred

- **Measures as their own floor.** The deterministic counts are a `measures:` field on a signal for
  now. Because they are reusable and checkable (`reply-gap-vs-own-rhythm` feeds several signals), they
  may graduate to their own doc-per-entry floor. Open question, not yet.
- **The higher floors** (insights, briefs, actions) come once raw data, assemblies and signals prove
  out.
- **The UI that renders the library.** A first cut now exists: `/library` in the blueprint viewer is
  a filterable gallery of every assembly and signal (search · module · type · mode), each card
  mirroring its `label` + `blurb` + facets, with the body and clickable lineage in an overlay. The
  told floor is not rendered there yet. Retiring the old per-module `CLAUDE.md`s is **done**.
