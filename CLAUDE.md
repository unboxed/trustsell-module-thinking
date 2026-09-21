# Signal cards: the playbook

This is a **design workspace, not an application**, and its pages are **slides for sharing the
thinking**, not screens of the tool. It holds a playbook of **signal cards**: what a sales tool
would say to a seller, one card at a time, written as if the tool already existed. The
playbook is plain HTML in `playbook/`, opens by double-clicking `playbook/index.html`, and needs no
server or install to read. It is meant to be shared as a folder.

The thinking the cards rest on lives in `library/`, as markdown. `build.js` projects it into the
playbook. Editing the library and running `node build.js` is how the playbook changes.

## How to work with me here
- **Brainstorm and pressure-test first.** Still no application beyond the one phone page:
  `build.js` is the only build script, it is plain Node with no packages, and it renders markdown
  into static HTML. The phone (`phone.html`, drawn by `phone.js` from `data.js`) is plain HTML and
  JS too. Do not add a framework, a bundler, a server or a dependency. Anything else that rewrites files is a one-off and lives in the
  scratchpad, not the repo.
- **The story holds the reasons.** `playbook/story.md` is the reference for why. When the user
  explains something or their reasoning, check it against the story and say where it fits, or
  point out the contradiction so they can think it over. Anything built needs a reason that the
  story tells. If it is missing, ask for it or add it marked "(My reason, not yet yours.)". The
  story can change: a better reason or approach rewrites the chapter it belongs to.
- **Do not make things up.** The facts are what matter. Where something is not known, the entry
  says "not written yet" rather than being filled with a plausible invention. Every count in
  `library/counts/` is in that state on purpose, and the `signal:` on each card is marked
  `provisional` because it was read off the card rather than decided.
- **The card model lives in `playbook/world.md`**, together with the design decisions and the table
  of which Apple component each part of a card is. The pretend world itself (goal, councils, cast,
  documents, today's date) is data, in `library/scenarios/bops/world/`, because cards reference it by id. Read
  both before writing or editing a card. Add to the scenario's `world/` before using a name, a date or a
  document that is not already there.
- **The phone is built from the library** (19 September). Every slide that shows a phone holds
  `phone.html` in an iframe; nothing on the phone is typed into `deck.html`. To change what a card
  says on the phone, edit the card (its `phone:` block, or its body) and run `node build.js`. The
  design is still the user's: do only what they ask on the phone, one step at a time. See the
  phone paragraphs in `world.md` for what is decided.
- **One markdown file per card** in `library/scenarios/bops/cards/`. `playbook/assets/data.js` is
  **generated: never hand-edit it.** Adding a card means adding its markdown and running
  `node build.js`; the library page picks it up from there.
- **`build.js` fails loudly on an id that does not resolve**, and writes nothing when it does.
  That check is the point: the joins between the floors are what went missing before.
- **Voice.** Plain English, British spelling, the tool speaking to the seller in the first person.
  Short sentences. No em dashes. Every message the tool drafts names the gift. Every card can say its why-now.
  Ask cards ask for facts, never verdicts. Interface text follows Apple's writing rules: button
  labels in title case starting with a verb ("Send the Note", "Not Now"), everything else in
  sentence case, tab labels one word, section headers short noun phrases.
- **Kinds are the only labels.** Act, Ask, Connect and News (an outcome with nothing to do; called Told until 19 September,
  a name now kept only for the library's `told/` rung, what you tell the tool). These
  four words are the vocabulary; do not add more. Sustain, Advance and Expand were dropped on 19
  September (`world.md`, "A card's day").
- **The library is the database, the phone is the demo.** Define a thing in the cards'
  frontmatter and let `build.js` work it out (the order of the day, who waits on whom); the
  phone follows. The tool decides the order, never the seller.
- **The scenario is one example, and the library is known to be one seller's.** BOPS lives in
  `library/scenarios/bops/` and can be rewritten to fit the signals. Everything else in `library/` is
  meant to serve any kind of sale, but the signals and counts were derived from one seller's questions
  (`library/docs/sales-questions.md`, the patient end), so the library answers that seller well and is
  silent about what they never had to ask. A second question set from the opposite end,
  `library/docs/volume-questions.md`, a third from a seller with a firm around her,
  `library/docs/firm-questions.md` (21 September, not yet run through the map), and the map of what
  is and is not answered, `library/docs/coverage.md`, exist to make that visible. **Read
  `coverage.md` before adding to a rung.** A mass-selling scenario (PMF, a merchant cash advance
  broker) is the second pressure test: its world is written, at
  `library/scenarios/pmf/world/`, with no cards, and its ladder runs past the sale.
  **Not every entry has to hold for both ends** (20 September): some reads belong to long
  relationships and some to volume. The library is general because the set covers the spectrum and
  each entry says what it needs in order to stand, not because every entry is universal. Each
  signal declares that in `assumes:` (`thread-under-way`, `own-rhythm`, `several-people`, or `[]`;
  `build.js` checks the words, 20 September). The tool covers from a lead onwards; mass cold
  outreach is not its job (the user, 20 September).
- **Flag contradictions in the fiction**: two cards on the same person that pull opposite ways on
  the same day, a date that doesn't match `world.md`, a document nobody has.

## The design system
The playbook is built on Apple's Human Interface Guidelines. The phone follows iOS (the
iPadOS desk was archived on 18 September). Take numbers from the two skills in `.claude/skills/`, not from memory:
`apple-hig` for the rules and specs, `apple-ui-kit` for the measured values and component recipes.
- `playbook/assets/ios-tokens.css` and `playbook/assets/ios-components.css` are copied from the
  kit. **Do not edit them.** If a value must change, change it in `style.css` by overriding.
- `playbook/assets/style.css` is the playbook's own layer: page layout, the card, the kind dots,
  the sheets' placement, the phone frame. Every colour goes through a token, so a later re-theme
  means changing tokens, not rules. Where a number is a judgement rather than Apple's, the comment
  says so.
- `playbook/assets/fonts/` holds Inter (SIL OFL) as the non-Apple fallback, and Plus Jakarta Sans
  (SIL OFL), the phone's face, which the library page uses too.
  Never link a font CDN.
- The phone has a look of its own (big title, Plus Jakarta Sans, no colour on buttons, a white
  card by day and slate by night). It is the last section of `style.css`, "The phone's look",
  set as tokens on `.screen`, `.sheet-stage` and `.page--library`. The library page has taken it,
  without the kind dots, as a catalogue in three columns (`world.md` says why).
- `deck.js` is the deck's script
  (one slide shown at a time by hash, arrow keys, the count, fitting a slide's figures to
  its body, and the pyramid). `phone.js` is the phone's: it draws the day from `data.js` and
  works it (the scroll into details, the pager, the reply sheet, the dark card, what is
  remembered). The deck loads it too, for the bare sheets.
- Markup uses the kit's classes directly (`ios-btn`, `ios-list`, `ios-field`, `ios-segmented`,
  `ios-navbar`, `ios-tabbar`, `ios-actionsheet`). Reach for a kit component before inventing one.
  The one exception is the phone's reply sheet (`.reply-sheet` in `style.css`); `world.md` says why.

## What is where

**`library/`: the source of truth.** Markdown, brainstormed in prose. The two-layer format is the
good thing here and is not up for redesign: **frontmatter is the machine layer** (flat facets, ids
that must resolve), **the body is the human layer** (plain English, short sentences). The
skeletons are in `library/templates/`; the contract is `library/docs/library-format.md`.

The ladder, bottom to top. Each rung rests on the one below and every id is checked:

| Rung | Where | What it is |
|---|---|---|
| Channels | `library/channels/` | what you connect, and what the buyer hands over (`handover.md`, `source: buyer`, 20 September). Carries records, forms no opinion. Whether a channel is connected is the scenario's to say, in `world/goal.md` |
| Told | `library/told/` | what only you can say. No channel can fetch it |
| Records | rows inside a channel or told file | the ingredients, addressed as `gmail#email-message` |
| Assemblies | `library/assemblies/` | ingredients gathered into one picture. Still no opinion |
| Counts | `library/counts/` | the arithmetic. **Nothing written yet** |
| Signals | `library/signals/` | the first opinion, the first thing you could argue with |
| Cards | `library/scenarios/<name>/cards/` | the suggestion, question or outcome |

Beside the ladder, `library/widgets/`: the catalogue a card picks from and fills, never arranges.
Detail widgets (Timeline, What they said, People, Documents, Open items, Compared with usual; at most two
per card, each fed by something the card rests on) and reply widgets (the reply modules and the
draft). `build.js` checks every join. See `library/docs/library-format.md`.

Also there: `library/scenarios/bops/world/` (the pretend world as data: goal, cast, organisations, documents),
`library/modules/` (who owns which reads) and `library/docs/` (the thinking behind the shape,
including `tracing-back.md`, which this ladder is the executable form of; the three question sets the
library is measured against, `sales-questions.md`, `volume-questions.md` and `firm-questions.md`;
and `coverage.md`, the map of which of those questions nothing answers yet, with the work still to
do at its end).

**Two rungs are unfinished, on purpose.** No entry in `counts/` says yet what it counts;
`defined: false` says so. Each names the assembly it counts within (`over:`) where only one is
possible, marked `provisional`, and leaves `over: []` where it could be one of several. Each card's
`signal:` (the main read) and `supporting:` (other reads whose counts it quotes) are marked
`provisional` because they were read off the card rather than decided. A card's *Sources*
rows are `source · words`, and the build checks each source against the trail. All of this is a
later pass, not an oversight.

**A third thing is missing rather than unfinished.** Seven of the volume seller's twenty-two
questions still have no read at all, and none of the holes is really about volume. Since later on 20
September four reads point *against* a move or a sale (`enough-tries`, `disclosure-still-owed`,
`pushing` in People; `can-they-carry-it` in Offerings), and People draws from what the buyer hands
over (`assemblies/document-set.md`, the envelope only: which documents came against which you asked
for). What the tool reads *inside* a document is still not written, and `sms.md` and `web-form.md`
are drawn from by nothing. `library/docs/coverage.md` names all of it.

- `build.js`: the one script. Plain Node, no packages. Reads `library/`, validates every id,
  writes `playbook/assets/data.js`.
- `playbook/`: the deliverable, still plain static HTML. `index.html` (the way in: it
  opens the slides), `library.html` (the library, browsable, rendered from
  `data.js`), `phone.html` (the one phone, rendered from `data.js`: opened on its own it is a
  working week, each day's cards on the strip, waiting cards arriving once freed, and a last
  page of what the tool is watching; the button top right switches to the day as a stack, a day to a page; it remembers what you did; `?card=`, `&open=details` and
  `&fresh` are for the slides), `deck.html` (the slides, one file, one slide shown at a time: the idea, in words
  only; your day on mobile, a working prototype; reply sheets (the modules that can fill a card's reply sheet),
  as bare sheets, a draft among them; the details, three phones scrolled into their details; and
  last how a card is built, a pyramid `deck.js` draws from `data.js`), `world.md` (the card model and the design decisions, the log), `story.md` (the tool told
  from the start, for any kind of sale (the pretend world only as marked examples), at the
  altitude of why: what the tool needs to know and why each part exists,
  never how a screen looks, and no detours. It is the user's test of the
  thinking: a reason I supplied is marked "(My reason, not yet yours.)" until they confirm it,
  and a missing why is listed, never filled in. When a decision changes the story, update it there too), `assets/` (`library.js` is the library page's script).
- `_archive/`: what did not come forward. That is the blueprint viewer app, the hackathon deck, the
  scenario docs, the two blueprint-era UI notes, and the desk (`_archive/desk/`: the grid of
  cards, the card pages and the Ask page, archived 18 September because it had fallen behind). **Inspiration, not source of truth.** The
  channels, assemblies, signals and the live docs that used to live here are now in `library/`.
  The old vocabulary there was Plant / Grow / Nurture; it later became Expand / Advance / Sustain, and those were dropped too.

## The idea in one paragraph
People work the verbs (decide, approve, send); the tool works the nouns (find the person, gather
the proof, write the draft). A card is one prepared noun with its reasoning on the back. Early on
the tool mostly asks; once it has learned your world it mostly acts. Nothing goes out without you.
