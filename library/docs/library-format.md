# The library format: how the thinking is stored

This is the **contract** for the structured library that replaced the one-prose-`CLAUDE.md`-per-module
monolith. It is what an agent reads before producing entries. The matching skeletons live in
[`templates/`](../templates/); one worked example of each lives in its real home (linked below).

## Why we changed

The agent-anatomy prose was right for *reasoning*, but the part of each module that is really a
**catalogue** (the named, enumerable things at each floor of the pipeline) was trapped in prose, so it
could not grow into a library or be rendered. We split each module in two:

- **The catalogue floors** become a **library of structured entries** (this doc).
- **The operating prose** (principles, system prompt, user input, output, memory, open questions)
  becomes a slim **`module.md`** overview.

The mapping from the old agent-anatomy is exact:

| Old agent-anatomy section | New home |
|---|---|
| Raw data | `channels/*.md` and `told/*.md` (raw-data floor) |
| Reasoning, *assembling* | `assemblies/*.md` |
| Reasoning, *counting* | `counts/*.md` |
| Reasoning, *sensing* | `signals/*.md` |
| Principles, System prompt, User input, Output, Memory, Open questions | `modules/<id>.md` |

The folders are flat: every entry names its owning module in a `module:` field rather than living
inside a module folder.

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
    plain sentences), `## In practice` (one short generic example), and `## How it is worked out` (the precise
    rule: the trigger and the confidence grading, leaning on the `needs` and `counts` facets above
    rather than re-listing them; this is the single home for how confident the read is and what it
    cannot see). "How it is worked out" opens by pointing at
    [`reading-principles.md`](reading-principles.md) rather than re-teaching the shared rules.
  - **An assembly** uses two sections: `## What it gathers` (the records it pulls together and the
    identity work; a plain list where it gathers several things) and `## Where it comes from` (which input id
    resolves to which channel or told source). An assembly is the floor, not a reading, by virtue of
    living in `assemblies/`, so no entry needs to say so.

A signal's **`needs`** is a flat list of the sources a read leans on (e.g. `needs: [calendar]`); when
one is not connected, the checks resting on it drop out and confidence falls, which is how a **data
gap** is named honestly. A signal's **`assumes`** is a flat list from a fixed vocabulary
(`thread-under-way`, `own-rhythm`, `several-people`, and `own-firm` since 21 September; `build.js`
checks the words) saying what the read needs to exist before it can stand, and `[]` means it stands
on what it reads alone. Where a sale does
not have it, that is an **assumption gap**, the third kind, added 20 September. The shared reading rules every signal applies (own-rhythm thresholds,
count-first, confidence grading, name-the-gap, answer a real question) live once in
[`reading-principles.md`](reading-principles.md), so no signal re-teaches them.

## The floors, and the one rule that varies by floor

The pipeline runs from raw data through assemblies and signals up toward actions. It mirrors the
three-floor track-back in [`tracing-back.md`](tracing-back.md): facts, then counting, then opinion.
The **granularity matches the floor**, so we write docs only where there is reasoning to hold:

| Floor | Nature | Unit | Template |
|---|---|---|---|
| **Raw data** (channels, records, fields) | reference structure, no opinion | **one doc per channel service** in `channels/` | [`templates/channel.md`](../templates/channel.md) |
| **Told** | what only you can say | **one doc per module that has one**, in `told/` | [`templates/channel.md`](../templates/channel.md) |
| **Assemblies** | deterministic gather (a person, a conversation, an organisation) | **thin doc per entry** | [`templates/assembly.md`](../templates/assembly.md) |
| **Counts** | the arithmetic. Every entry is `defined: false` for now | **thin doc per entry** | [`templates/count.md`](../templates/count.md) |
| **Signals** | the read, the first opinion | **rich doc per entry** | [`templates/signal.md`](../templates/signal.md) |
| **Cards** | the suggestion, question or outcome | **one doc per card**, in the scenario's `cards/` | [`templates/card.md`](../templates/card.md) |

Plus, per module, one **`modules/<id>.md`** ([`templates/module.md`](../templates/module.md)) holding the
operating prose and the card face.

**Frontmatter is only the card face.** It holds the flat, tag-like facets (ids, enums, short label
lists, the future chips). Anything **nested or sentence-length** lives in the **body** as readable
markdown: a channel's records become a **field-per-row table** (Record, Field, Source); a signal's
threshold and reasoning are prose in the body's sections (such as `How it is worked out`). A nested tree shoved into frontmatter
renders as an unreadable blob, so keep it out. If a value contains a colon, wrap it in single
quotes; YAML reads an unquoted colon as a key separator, and the file fails to parse.

**Every assembly and signal carries a `label` and a `blurb`**, the same pair `module.md` uses: the
`label` is the plain-English display name, and the `blurb` is the **one-line short description on the
entry's card face** in the library page. Keep the `blurb` to a single plain sentence (the long body
is revealed on click, so it does not belong in the blurb). The library page,
[`playbook/library.html`](../../playbook/library.html), reads exactly these fields from `data.js`, so
editing a `blurb` and running `node build.js` updates its card with no other change.

Not every module has every floor, and the library is meant to reveal that. **04-organization has no
signals** (it matches evidence and gates drafts, so there is no behaviour to sense; the reads
against a sale that brush its rules live in People and Offerings, because Organisation is optional); **01-integrations**
has only raw data; **00-spine**'s "assemblies" are the scoreboard and calendar, a different kind of
synthesis. Absence is information; do not invent a floor a module does not have.

## The told source: a module's own raw data

Raw data has three homes. Most of it is the shared **channels** in `channels/` (the accounts you
connect, the always-on tools, and, since 20 September, what the buyer hands over; see the next
section). But some Floor-1 facts are not fetched from anywhere: they are what the
user **states outright**, the pitch for a product, the shape of a good-fit customer, a price. That
**told** input is raw data too, and the most deterministic kind there is, because the user says it
rather than the tool inferring it.

Each reasoning module owns its own told source, so it sits **inside the module**, not in Connections
(Connections stays strictly the doorway for external accounts). It lives at `told/<name>-told.md`,
one file per module that has one, and it is shaped exactly like a channel doc
([`templates/channel.md`](../templates/channel.md)): a card-face frontmatter with `source: told`,
then a `## Records` field-per-row table. Its records get ids the same way (the kebab-slug of the
label), and an assembly lists them in `inputs` exactly like channel records.

Three things to keep true:

- **It is elicited, not just waited for.** The module actively asks for it (the propose-a-draft,
  you-confirm loop), and a record may be populated from a file the user uploads to Drive. The `Source`
  column says which path each field comes in by.
- **An empty record is a told gap**, named not faked, the same banner [`tracing-back.md`](tracing-back.md)
  already uses: the honest output is "tell me X and I can run this", and the module can offer to
  research a first version for the user to confirm.
- **Five modules have one.** The Brain ([`goal-told.md`](../told/goal-told.md)), People
  ([`people-told.md`](../told/people-told.md)), Offerings
  ([`offering-told.md`](../told/offering-told.md)), Organisation
  ([`organisation-told.md`](../told/organisation-told.md)) and Profile
  ([`profile-told.md`](../told/profile-told.md)). **Offerings is the worked example of this floor.**

## What the buyer hands over: the third home

Added 20 September. Until then every channel was one of the seller's own accounts, so a buyer's
accounts arriving as a mail attachment were a filename and a size, and nothing knew they were the
buyer's, or that three of five asked-for documents were in. [`channels/handover.md`](../channels/handover.md)
is the third home: what a lead gives you on the way to a close (accounts, a brief, a specification),
by whichever door it arrives. It lives in `channels/` and is shaped like a channel doc, but its
`source:` is `buyer`, beside `account`, `builtin` and `told`: nothing fetches it and you cannot say
it, the buyer hands it over. *(My reason, not yet yours.)*

Two things to keep true. **Two layers are written, and no more.** The envelope: what it is, who
sent it, when, by which way, and which request of yours it answers. And, since 21 September, the
figures a document states, as two records: a stated figure (the document's own label, the amount,
the period, where on the page, and one derived kind: money in, money out, a balance, or unplaced)
and a stated commitment (to whom, what it is called, how much and how often, until when, all as the
document names them). That is the whole of what the tool reads inside a document, and the channel
doc's *What is never read* section lists what no read may do with it: no figure the document does
not state, no verdict on the person, nothing beyond the purpose it was handed over for, nothing
about their kind of business, no view on whether it is genuine. **Two gathers read it, one per
layer.** [`assemblies/document-set.md`](../assemblies/document-set.md) reads the envelope: what you
asked a buyer for against what came (`missing-documents` stands on it).
[`assemblies/figures-on-record.md`](../assemblies/figures-on-record.md) reads the figures, lined up
by period, with what the buyer said on your form or the thread kept apart from what they showed
(`uneven-income`, `existing-commitments` and `can-they-carry-it` stand on it). It is also the first
gather to draw from [`web-form.md`](../channels/web-form.md), for a figure a buyer states on your
enquiry form. [`sms.md`](../channels/sms.md) is still drawn from by nothing: the floor is there so
the reads can be written on it.

## The catalogue: what you sell is a list

Added 21 September. Until then `world/goal.md` carried `offering:` as a single id and
[`assemblies/offering-entry.md`](../assemblies/offering-entry.md) was written for one product, so
the library supported a seller with exactly one thing to sell and had no way to ask which of
several a lead should go to.

`offering:` is now a **flat list of ids**, and one entry is still perfectly valid: `build.js` reads
either and refuses an empty list. Above the entries sits one gather,
[`assemblies/catalogue.md`](../assemblies/catalogue.md), the pile of them, and one read,
[`signals/where-this-one-goes.md`](../signals/where-this-one-goes.md).

Two decisions are worth arguing with, and both are mine. *(My reasons, not yet yours.)*

- **An offering is one thing on one set of terms.** Two shapes of catalogue exist in real selling:
  several products, and one product from several suppliers on different terms. They are modelled
  the same way, as one entry each, because what a read compares is the fit-shape and the price and
  both of those belong to the supplier, not to the product behind it. A lender who will not take
  this trade and a lender who will are two different answers to the same buyer. A second rung to
  hold the product behind several suppliers would buy nothing any read consults. The cost is
  duplication: the pitch, the use-cases and the worries repeat across such entries, and nothing
  shares them yet. `offering-told#supplier` says who is behind an entry, and empty means it is
  yours.
- **The qualifying half is a read; the wanting half is the Brain's.**
  [`modules/03-offerings.md`](../modules/03-offerings.md) parked ranking across offerings with the
  Brain, on the grounds that it is intent. That holds for which of them you most want to sell,
  which depends on the goal and on how hard you will push. It does not hold for which of them
  would have this buyer at all: that is the told box against the lead's facts, and it is the work
  done before anybody is asked what they would like to sell. So the read lives in Offerings with
  the fit-shapes it stands on, and the Brain's half stays parked.

## How a deal ended: told, or fetched, never deduced

Added 21 September. Until then nothing in the library held what came of anything. Every rung read
a sale in progress, and a deal that finished looked exactly like a deal that had gone quiet. The
questions that need endings (what was refused last time on one like this, and what you have
actually delivered) had no ground at all.

An ending is **raw data**, on the same floor as a fetched email, and it arrives by the two routes
that floor already has. **Told**: `people-told#deal-outcome`, where you say which deal ended, how
it ended, when, who decided, and the reason they gave. **Fetched**: `crm#deal-decision`, the same
fact where a deal system holds it, one row per decision so a single deal can carry several answers
from several parties. Above them, one gather,
[`assemblies/deal-outcomes.md`](../assemblies/deal-outcomes.md), the pile of ended deals.

Three decisions are worth arguing with, and all three are mine. *(My reasons, not yet yours.)*

- **Never deduced.** The tool does not read a loss out of silence, a win out of a warm word, an
  ending out of a card nobody acted on, or a decision out of "we have gone another way" in a mail.
  It is the rule the completion of a sale already follows
  ([`assemblies/since-the-sale.md`](../assemblies/since-the-sale.md)), extended to the other three
  ways a deal can finish. Silence is the commonest ending in real selling and the least reliable to
  read, so a quiet deal is held as quiet until somebody says otherwise.
- **The ending is People's, the reads are Offerings'.** A deal is People's, gathered from the
  conversations that make it up, so the pile of ended deals lives there. What a buyer refused and
  what you have delivered are facts about the thing you sell, so both reads sit in Offerings and
  ask for the pile through module 03's `connects`.
- **It is a pile, not a thing.** `deal-outcomes` is the first gather keyed on no single subject.
  That needs no new machinery: a count names it in `over:` exactly as a per-person count names
  `person-history`, which is what [`coverage.md`](coverage.md) said counting over a group would
  take.

The endings are not the same as **feedback on a card**, which story ch. 9 covers and which the
told `correction` record already carries in part. A card's outcome is about the tool's own bets; a
deal's outcome is about the sale. Only the second is written.

## Whether a channel is connected is the scenario's to say

Moved 20 September. A channel doc says what a service carries and nothing about whether this
seller has it: that is one seller's stack, and it belongs in the scenario. `world/goal.md` lists what
is plugged in as `connected:`, a flat list of channel ids that `build.js` checks; a channel left off
it is **not connected**, the data gap the cards name. A channel or told doc that still carries
`connected:` fails the build, so the general layer stays clean. The library page reads the same list.

## Where each entry comes from, the spine

Every entry names what it is built from, one floor down, by **id**:

- an **assembly**'s `inputs` are **record addresses** (`gmail#email-message`, or a told record such
  as `offering-told#pitch`) and, optionally, other assembly ids;
- a **count** names the assembly it counts within as `over`;
- a **signal**'s `inputs` are **assembly ids**, and its `counts` are the deterministic counts
  beneath the read.

So any signal walks straight down: **signal, then its counts, then the assembly each counts within,
then the records it gathers**.
A count names the assembly it counts within as `over` (settled 18 September), so the walk passes
through the counting floor instead of stepping over it. A card names its main `signal` and, when
it quotes numbers from other reads, those reads as `supporting`; every count a card quotes must
belong to one of them. A card's *Sources* rows name their sources, and `build.js` checks each
is reached by the trail. The Brain's own told pile, [`told/goal-told.md`](../told/goal-told.md),
is always reachable: the goal is what every card is weighed against.
This is the *track-back*: nothing the tool says should float. Two iron rules:

1. **Every id must resolve.** A dangling `inputs` or `counts` id is a bug, not a stub.
2. **Name the gap, do not fake it.** Where a branch runs out of ground because a source is not
   connected (warm paths without LinkedIn) or the user has not told us something, the entry says so,
   as a **data gap** or a **told gap**. (See [`tracing-back.md`](tracing-back.md).)

### Names: the id for the build, the label for a person

Every entry has two names. The **id** is the backend name: kebab-case, stable, what every join and
`build.js` use. It never changes for the sake of wording. The **label** is what a person reads on the
slide, in the library and on a card, and it is plain English: say what it is the way the seller
would ("Wait for a reply, against usual", not "Reply gap vs own rhythm"). Rename a label freely;
rename an id only with every join that names it. A record is the one exception: its id is made from
its label, which keeps the real API name, so its plain name lives in the source file's
`## In plain words` table instead (renamed 18 September).

### Ids

Kebab-slugs. A **record's id is the kebab-slug of its label** (`Email message` gives
`email-message`); it lives in the body table's Record column, not in frontmatter. A record is always
**addressed by its source**, `<source-id>#<record-id>` (`gmail#email-message`, `offering-told#pitch`),
so two sources may share a record name. Every other id (assembly, count, signal, card, widget) is
unique across the library, because the folders are flat.

## The widgets: a catalogue beside the ladder

A card shows its evidence through **widgets**, one doc each in [`widgets/`](../widgets/), to the
skeleton in [`templates/widget.md`](../templates/widget.md). A widget holds no reading of its own,
so it is not a floor: it sits beside the ladder, and is how a card shows what a rung below already
holds.

There are two families. **Detail widgets** (Timeline, What they said, People, Documents, Open items,
Compared with usual) sit in a card's details, between What happened and Still unclear; a card takes at most
two. **Reply widgets** (Buttons, Choices, Several choices, A field, A draft) fill the sheet a
card's reply is given in; a card takes one. Widgets are told apart by shape, never by meaning:
no new widget without a new shape.

The idea is close to Google's A2UI, where an app keeps a catalogue of trusted components and an
agent sends data that picks from it and fills it. The difference is on purpose. A2UI's
components are usually small building blocks the agent arranges freely. Ours are large and
specific, and they sit in a fixed place on every card. The agent chooses and fills; it never
arranges. That is what lets a seller learn the set once.

The joins, checked by `build.js`: a detail widget's `fed_by` resolves to assemblies or counts;
a card's `widgets` resolve to detail widgets, and each is fed by something the card rests on
(its counts, the inputs of its signal and its supporting signals, each count's `over`, every
assembly those gather, and, when the card names
what to send in `documents`, the evidence library: why to write and what to send are two trails); each has a body section
headed with its label, rows in its row form; and a card's `reply.module` is a reply widget.
`build.js` also walks each detail widget's `fed_by` down through the assemblies to the records it
can actually show, and lists them on the widget's page. A widget that reaches no record fails the
build unless it says what it `waits_on`: today that is Open items, which rests only on counts,
none of which can say yet which assembly it counts within (`over: []`).

### The phone block

The phone (`playbook/phone.html`) is drawn from the cards, not typed (decided 19 September). A card
is on the phone when it carries a `phone:` block. The block holds only the words the phone uses where
they differ from the rest of the card: the short when on the badge, the filled action and what it
does (`send` the draft, one `tap`, or `open` the reply sheet), the outline action if there is one,
the line said back, the dark card's heavy line and receipt, and the draft's subject. Everything else
the phone reads from the card as it is: the title, the intro, how sure, the organisation, the documents,
the details on their spine with the widgets in place, the draft, and an Ask's answers. A card with
a `## The shorter draft` section offers the ask-for-a-change row, and every ask gets that draft
back; that is a stand-in until the tool can really redraft. `build.js` checks that whatever the
phone will reach for is there: an action that raises the draft needs `## The draft`, and an action
that raises a sheet needs a `reply.module` of choices, several or field, with its answers. The
order on the phone is the home's, which `build.js` writes as `day`.

### The scenario

Everything above the cards is general, and the pretend world and its cards are not. General does
not mean that every entry holds for every kind of sale (the rule until 20 September, which forced
a false choice between universal and wrong). The library is general because the set covers the
spectrum, from a lead onwards, and each entry states its ground in `assumes:`. Some reads belong
to long relationships and some to a live thread with no history. A scenario may only rest on reads
whose assumptions its sale meets; the build does not check that yet. The world and cards are one **scenario**, in `scenarios/<name>/`, with a `world/` (the goal,
the cast, the organisations, the documents, and, since 20 September, which channels this seller
has plugged in) and a `cards/` (decided 19 September). Today there
is one, `bops`, a patient sale to councils. A second, a mass sale, is meant to follow, standing
on the same channels, assemblies, counts and signals. `build.js` reads the one named in
`SCENARIO` at its top. A scenario can be rewritten to fit the signals; when a card fights a
general rule, the card changes, not the rule.

### A card's day: what it is about, who it reaches, when, and what it waits on

Decided 19 September, so the day is worked out from the cards rather than typed.

- **`kind`** is the card's only label: Act, Ask, Connect or News. (Sustain, Advance and Expand were
  dropped the same day: they were one picture of selling, and may mean nothing to a seller.)
- **`about`** names the nouns the card concerns, of any type: a person, an organisation, a
  document, the offering, or `you`. An Ask can be about anything the tool wants to learn.
- **`to`** names who an Act reaches, when it reaches anyone. A brief for you has no `to`.
- **`arrives`** is the working day the tool puts the card on the home. A card due "any day this
  week" is not piled on Monday: the tool spreads the week, and quiet days take the cards that
  cost nothing to wait. A card a watch turns up has no `arrives`.
- **`when.until`** is the day it goes stale, or the world's date, left out when nothing says.
  "This week" ends on Friday. The `words` are the when only.
- **`watch`** is what the tool watches for once you act, taken from What happens next: what it
  waits for, until when, the card it turns up (`then`), and what it does if nothing comes.
- **Waiting.** A card waits for four reasons, and `build.js` works out all four into `waits_on`:
  an Ask names it in `changes` (the answer changes it); it names `held_by` (a sequence its own
  words give); a watch turns it up; or it is a second Act to the same person, because there is
  one move per person at a time. For that last one the tool decides the order: a sequence the
  cards state first, then what arrives first, what is owed, what gives (names `documents`)
  before what asks, and what waiting a day costs. Two Acts to one person
  that nothing tells apart fail the build: write them as one card. A card that waits carries
  `held_words`, the line it shows while it waits.
- `build.js` writes `day` (the home's order) and `days` (each date, the cards that arrive on it,
  in that order). The phone shows a day's cards, hides a waiting card until what it waits on is
  sent or answered, and ends every day on a page of what the tool is watching.

## How an agent produces a module's library

All six modules are now converted, and the per-module `CLAUDE.md` files have been retired. The steps
below record how the conversion was done and guide any **new** module added later (working from a
`module.md` draft rather than an old `CLAUDE.md`):

1. **`module.md`.** Copy the card-face frontmatter (drop the old `raw_data` and `channels` blobs);
   move Principles, System prompt, User input, Output, Memory and Open questions into the body
   verbatim; reduce Raw data and Reasoning to a one-line pointer at the libraries.
2. **Signals.** For the reasoned module, each named read in the old "signal catalogue" becomes one
   `signals/<id>.md`. Carry its counts into `counts`, its sales-question handles into `answers`, its
   tilt into `kind`, and the worked example plus threshold logic into the body. Declare what it
   `assumes` before it can stand, from the fixed vocabulary, and say in the body what it does when
   that is absent. A signal earns its place only by answering a real question in
   [`sales-questions.md`](sales-questions.md), [`volume-questions.md`](volume-questions.md) or
   [`firm-questions.md`](firm-questions.md).
3. **Assemblies.** Name the deterministic gathers the signals stand on (a person history, a
   conversation history, a stakeholder map). Their `inputs` are the channel records they tidy
   together, plus any records from the module's own told source.
4. **Raw data.** The shared channels (raw-data floor, 01 only) live in
   `channels/<id>.md`: a card-face frontmatter (never `connected:`, which is the scenario's), then
   the records as a **field-per-row table**, `| Record | Field | Source |`. And, where a module has facts the user states outright, a
   `told/<name>-told.md` of the same shape with `source: told` (see *The told source* above).
5. **Check the lineage.** Every signal `inputs` id points at a real assembly file; every assembly
   `inputs` id points at a real record id in a channel doc. Walk one signal end to end to confirm
   nothing floats.

These steps were **additive**: the new files sat beside the old `CLAUDE.md` until each module's
library was complete. That is now done across all six modules, the per-module `CLAUDE.md` files are
retired (they are in `_archive/`), and `build.js` reads the library into the playbook.

## The worked examples (the gold standard to imitate)

- Channel: [`channels/gmail.md`](../channels/gmail.md)
- Assembly: [`assemblies/person-history.md`](../assemblies/person-history.md)
- Signal: [`signals/cooling-champion.md`](../signals/cooling-champion.md)
- Module overview: [`modules/02-relationships.md`](../modules/02-relationships.md)

**02-relationships is the worked example**, so copy its shape.

## Deliberately deferred

- **What each count counts.** Counts became their own floor on 18 September, joined by `over`. Every
  entry is still `defined: false`: what it counts, which records it needs and when the number stops
  meaning anything are not written yet.
- **Floors above the cards** (insights, briefs) come once the cards prove out.
