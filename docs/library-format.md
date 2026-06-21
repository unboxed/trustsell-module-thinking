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
| **Raw data** (channels, records, fields) | reference structure, no opinion | **one doc per channel service** | [`_templates/channel.md`](../_templates/channel.md) |
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

Not every module has every floor, and the library is meant to reveal that. **04-organisation has no
signals** (it matches proof and gates drafts, so there is no behaviour to sense); **01-integrations**
has only raw data; **00-spine**'s "assemblies" are the scoreboard and calendar, a different kind of
synthesis. Absence is information; do not invent a floor a module does not have.

## Lineage, the spine

Every entry names what it is built from, one floor down, by **id**:

- an **assembly**'s `inputs` are **record ids** (and, optionally, other assembly ids);
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
name them without qualifying the channel. Assembly and signal ids are unique within their module.

## How an agent produces a module's library

Given a module's existing prose `CLAUDE.md`:

1. **`module.md`.** Copy the card-face frontmatter (drop the old `raw_data` and `channels` blobs);
   move Principles, System prompt, User input, Output, Memory and Open questions into the body
   verbatim; reduce Raw data and Reasoning to a one-line pointer at the libraries.
2. **Signals.** For the reasoned module, each named read in the old "signal catalog" becomes one
   `signals/<id>.md`. Carry its counts into `measures`, its sales-question handles into `answers`, its
   tilt into `modes` and `kind`, and the worked example plus threshold logic into the body. A signal
   earns its place only by answering a real question in [`sales-questions.md`](sales-questions.md).
3. **Assemblies.** Name the deterministic gathers the signals stand on (a person history, a
   conversation history, a stakeholder map). Their `inputs` are the channel records they tidy
   together.
4. **Channels** (raw-data floor, 01 only). Turn each channel's record and field prose in
   `01-integrations/CLAUDE.md` `## Raw data` into a `channels/<id>.md`: a card-face frontmatter, then
   the records as a **field-per-row table** in the body (`| Record | Field | Source |`).
5. **Check the lineage.** Every signal `inputs` id points at a real assembly file; every assembly
   `inputs` id points at a real record id in a channel doc. Walk one signal end to end to confirm
   nothing floats.

These steps are **additive**. The new files sit beside the old `CLAUDE.md`, which stays until a
module's library is complete, then retires. No app code changes; the old blueprint keeps reading
`CLAUDE.md`.

## The worked examples (the gold standard to imitate)

- Channel: [`01-integrations/channels/gmail.md`](../01-integrations/channels/gmail.md)
- Assembly: [`02-relationships/assemblies/person-history.md`](../02-relationships/assemblies/person-history.md)
- Signal: [`02-relationships/signals/cooling-champion.md`](../02-relationships/signals/cooling-champion.md)
- Module overview: [`02-relationships/module.md`](../02-relationships/module.md)

**02-relationships is the first module being converted**, so copy its shape.

## Deliberately deferred

- **Measures as their own floor.** The deterministic counts are a `measures:` field on a signal for
  now. Because they are reusable and checkable (`reply-gap-vs-own-rhythm` feeds several signals), they
  may graduate to their own doc-per-entry floor. Open question, not yet.
- **The higher floors** (insights, briefs, actions) come once raw data, assemblies and signals prove
  out.
- **Retiring the old `CLAUDE.md`s** and any UI that renders the library are separate, later efforts.
