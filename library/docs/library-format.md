# The library format: how the modules' thinking is stored from here on

This is the **contract** for the structured library that replaces the one-prose-`CLAUDE.md`-per-module
monolith. It is what an agent reads before producing entries. The matching skeletons live in
[`_templates/`](../templates/); one worked example of each lives in its real home (linked below).

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

A few rules, because a person reads these, not just a parser:

1. **Plain English, GDS style.** Sentence case, short sentences, say what it means. No jargon or
   wordplay in the prose a person reads: a signal does not "fire" to a reader, it is a read the tool
   *makes*. Write the body for a person; the structured facets in the frontmatter carry the precise,
   parser-facing data.
2. **Plain English for the names we invent.** An assembly is "Person history", not "Contact dossier".
   Avoid fancy or business-fashion words for our own labels and field values. Keep the real API names
   (`internalDate`, `threadId`) and the established domain terms the user already uses (stakeholder,
   champion).
3. **Keep it agnostic.** Signals and assemblies are reusable across any sales goal, so no named
   customer, offering or person belongs in them. Examples use generic placeholders (a contact, a
   prospect, the offering). The specific case study lives only in the scenario and demo docs.
4. **Go light on dashes.** Explain with commas, colons, parentheses, or a fresh sentence rather than
   em-dash asides. Keep ordinary hyphens only inside compound words (field-per-row) and code ids
   (email-message).
5. **Clarity before brevity.** One idea per sentence; break a long sentence rather than stack clauses.
   Put the point first: say what a read *is* before how it works. Where a section names several things,
   use a plain list, not a parenthetical run-on. Shorter prose is the result of clear writing, never the
   goal; cramming ideas into one packed sentence reads as cryptic, not clear. Say a thing once: do not
   repeat what the `blurb`, [`reading-principles.md`](reading-principles.md) or another section already
   carries.

## The two layers: structured frontmatter, plain-English body

Every assembly and signal is two layers in one file, kept cleanly apart so each is written to best
practice for its reader:

- **Frontmatter is the structured (machine) layer.** Flat, typed facets only: ids, enums, short lists
  (the card face described below). Each field earns its place by carrying genuine structured data;
  nothing is kept just because it was there. `floor` has been **dropped** (the folder, `signals/` vs
  `assemblies/`, already states the type). Sentence-length content never goes here.
- **The body is the human layer**, plain English under a **fixed set of section headings**, so it
  reads well *and* a parser can address each section later. The headings are consistent across every
  entry:
  - **A signal** uses three sections: `## What it means` (just the read and when it applies, in a few
    plain sentences), `## In practice` (one short generic example), and `## For the build` (the precise
    rule: the trigger and the confidence grading, leaning on the `needs` and `measures` facets above
    rather than re-listing them; this is the single home for how confident the read is and what it
    cannot see). "For the build" opens by pointing at
    [`reading-principles.md`](reading-principles.md) rather than re-teaching the shared rules.
  - **An assembly** uses two sections: `## What it gathers` (the records it pulls together and the
    identity work; a plain list where it gathers several things) and `## Lineage` (which input id
    resolves to which channel or told source). An assembly is the floor, not a reading, by virtue of
    living in `assemblies/`, so no entry needs to say so.

A signal's **`needs`** is a flat list of the sources a read leans on (e.g. `needs: [calendar]`); when
one is not connected, the checks resting on it drop out and confidence falls, which is how a **data
gap** is named honestly. The shared reading rules every signal applies (own-rhythm thresholds,
count-first, confidence grading, name-the-gap, answer a real question) live once in
[`reading-principles.md`](reading-principles.md), so no signal re-teaches them.

## The floors, and the one rule that varies by floor

The pipeline runs from raw data through assemblies and signals up toward actions. It mirrors the
three-floor track-back in [`tracing-back.md`](tracing-back.md): facts, then counting, then opinion.
The **granularity matches the floor**, so we write docs only where there is reasoning to hold:

| Floor | Nature | Unit | Template |
|---|---|---|---|
| **Raw data** (channels, records, fields) | reference structure, no opinion | **one doc per channel service**, plus each module's own `told.md` | [`_templates/channel.md`](../templates/channel.md) |
| **Assemblies** | deterministic gather (a person, a conversation, an organisation) | **thin doc per entry** | [`_templates/assembly.md`](../templates/assembly.md) |
| **Signals** | the read, the first opinion | **rich doc per entry** | [`_templates/signal.md`](../templates/signal.md) |
| insights, briefs, actions | the higher floors | (none yet) | later |

Plus, per module, one **`module.md`** ([`_templates/module.md`](../templates/module.md)) holding the
operating prose and the card face.

**Frontmatter is only the card face.** It holds the flat, tag-like facets (ids, enums, short label
lists, the future chips). Anything **nested or sentence-length** lives in the **body** as readable
markdown: a channel's records become a **field-per-row table** (Record, Field, Source); a signal's
threshold and reasoning are prose in the body's sections (such as `For the build`). A nested tree shoved into frontmatter
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
([`_templates/channel.md`](../templates/channel.md)): a card-face frontmatter with `source: told`,
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

## The widgets: a catalog beside the ladder

A card shows its evidence through **widgets**, one doc each in [`widgets/`](../widgets/), to the
skeleton in [`templates/widget.md`](../templates/widget.md). A widget holds no reading of its own,
so it is not a floor: it sits beside the ladder, and is how a card shows what a rung below already
holds.

There are two families. **Detail widgets** (Timeline, Their words, People, Open items, A number
against its usual) sit in a card's details, between the story and Not sure; a card takes at most
two. **Reply widgets** (Buttons, Choices, Several choices, A field, A draft) fill the sheet a
card's reply is given in; a card takes one. Widgets are told apart by shape, never by meaning:
no new widget without a new shape.

The idea is close to Google's A2UI, where an app keeps a catalog of trusted components and an
agent sends data that picks from it and fills it. The difference is on purpose. A2UI's
components are usually small building blocks the agent arranges freely. Ours are large and
specific, and they sit in a fixed place on every card. The agent chooses and fills; it never
arranges. That is what lets a seller learn the set once.

The joins, checked by `build.js`: a detail widget's `fed_by` resolves to assemblies or counts;
a card's `widgets` resolve to detail widgets, and each is fed by something the card rests on
(its counts, its signal's inputs, every assembly those gather, and, when the card names
what to send in `documents`, the proof library: why to write and what to send are two trails); each has a body section
headed with its label, rows in its row form; and a card's `reply.module` is a reply widget.
`build.js` also walks each detail widget's `fed_by` down through the assemblies to the records it
can actually show, and lists them on the widget's page. A widget that reaches no record fails the
build unless it says what it `waits_on`: today that is Open items and A number against its usual,
which rest only on counts, and no count is written yet.

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

- Channel: [`01-integrations/channels/gmail.md`](../channels/gmail.md)
- Assembly: [`02-relationships/assemblies/person-history.md`](../assemblies/person-history.md)
- Signal: [`02-relationships/signals/cooling-champion.md`](../signals/cooling-champion.md)
- Module overview: [`02-relationships/module.md`](../modules/02-relationships.md)

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
