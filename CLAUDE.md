# Signal cards: the playbook

This is a **design workspace, not an application**, and its pages are **slides for sharing the
thinking**, not screens of the tool. It holds a playbook of **signal cards**: what a sales tool
would say to a seller, one card at a time, written as if the tool already existed. The
playbook is plain HTML in `playbook/`, opens by double-clicking `playbook/index.html`, and needs no
server or install to read. It is meant to be shared as a folder.

The thinking the cards rest on lives in `library/`, as markdown. `build.js` projects it into the
playbook. Editing the library and running `node build.js` is how the playbook changes.

## How to work with me here
- **Brainstorm and pressure-test first.** Still no application: `build.js` is the only script, it
  is plain Node with no packages, and it renders markdown into static HTML. Do not add a framework,
  a bundler or a dependency. Anything else that rewrites files is a one-off and lives in the
  scratchpad, not the repo.
- **Do not make things up.** The facts are what matter. Where something is not known, the entry
  says "not written yet" rather than being filled with a plausible invention. Every count in
  `library/counts/` is in that state on purpose, and the `signal:` on each card is marked
  `provisional` because it was read off the card rather than decided.
- **The card model lives in `playbook/world.md`**, together with the design decisions and the table
  of which Apple component each part of a card is. The pretend world itself (goal, councils, cast,
  documents, today's date) is data, in `library/world/`, because cards reference it by id. Read
  both before writing or editing a card. Add to `library/world/` before using a name, a date or a
  document that is not already there.
- **The phone and card slides are concept slides.** Do only what the user asks on them, one step
  at a time; they direct the design. See the phone paragraph in `world.md` for what is decided.
- **One markdown file per card** in `library/cards/`. `playbook/cards/*.html`,
  `playbook/index.html` and `playbook/assets/data.js` are **generated: never hand-edit them.**
  Adding a card means adding its markdown and running `node build.js`; the tile on the home and
  the previous/next links wire themselves from the card's `order`.
- **`build.js` fails loudly on an id that does not resolve**, and writes nothing when it does.
  That check is the point: the joins between the floors are what went missing before.
- **Voice.** Plain English, British spelling, the tool speaking to the seller in the first person.
  Short sentences. No em dashes. Every Sustain card names the gift. Every card can say its why-now.
  Ask cards ask for facts, never verdicts. Interface text follows Apple's writing rules: button
  labels in title case starting with a verb ("Send the Note", "Not Now"), everything else in
  sentence case, tab labels one word, section headers short noun phrases.
- **Kinds and labels.** Act cards are labelled Sustain (keep alive), Advance (move forward) or
  Expand (new relationship). Ask, Connect and Told (an outcome with nothing to do) are their own
  quiet labels. These six words are the vocabulary; do not add more.
- **Flag contradictions in the fiction**: two cards on the same person that pull opposite ways on
  the same day, a date that doesn't match `world.md`, a document nobody has.

## The design system
The playbook is built on Apple's Human Interface Guidelines. The desk follows iPadOS, the phone
follows iOS. Take numbers from the two skills in `.claude/skills/`, not from memory:
`apple-hig` for the rules and specs, `apple-ui-kit` for the measured values and component recipes.
- `playbook/assets/ios-tokens.css` and `playbook/assets/ios-components.css` are copied from the
  kit. **Do not edit them.** If a value must change, change it in `style.css` by overriding.
- `playbook/assets/style.css` is the playbook's own layer: page layout, the card, the kind dots,
  the sheets' placement, the phone frame. Every colour goes through a token, so a later re-theme
  means changing tokens, not rules. Where a number is a judgement rather than Apple's, the comment
  says so.
- `playbook/assets/fonts/` holds Inter (SIL OFL) as the non-Apple fallback, and Plus Jakarta Sans
  (SIL OFL), the phone's face. Macs and iPhones use SF Pro through `-apple-system` on the desk.
  Never link a font CDN.
- The phone has a look of its own (big title, Plus Jakarta Sans, no colour on buttons, a white
  card by day and slate by night). It is the last section of `style.css`, "The phone's look",
  set as tokens on `.screen` and `.sheet-stage`. The desk has not taken it. `world.md` says why.
- `playbook/assets/card.js` is the one script the card pages share; `deck.js` is the deck's
  (one slide shown at a time by hash, arrow keys, the count, fitting a slide's figures to
  its body, the phone's scroll into details, and the phone's reply sheet).
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
| Channels | `library/channels/` | what you connect. Carries records, forms no opinion |
| Told | `library/told/` | what only you can say. No channel can fetch it |
| Records | rows inside a channel or told file | the ingredients, addressed as `gmail#email-message` |
| Assemblies | `library/assemblies/` | ingredients gathered into one picture. Still no opinion |
| Counts | `library/counts/` | the arithmetic. **Nothing written yet** |
| Signals | `library/signals/` | the first opinion, the first thing you could argue with |
| Cards | `library/cards/` | the suggestion, question or outcome |

Beside the ladder, `library/widgets/`: the catalogue a card picks from and fills, never arranges.
Detail widgets (Timeline, Their words, People, Documents, Open items, A number against its usual; at most two
per card, each fed by something the card rests on) and reply widgets (the reply modules and the
draft). `build.js` checks every join. See `library/docs/library-format.md`.

Also there: `library/world/` (the pretend world as data: goal, cast, councils, documents),
`library/modules/` (who owns which reads) and `library/docs/` (the thinking behind the shape,
including `tracing-back.md`, which this ladder is the executable form of).

**Two rungs are unfinished, on purpose.** No entry in `counts/` says yet what it counts;
`defined: false` says so. Each names the assembly it counts within (`over:`) where only one is
possible, marked `provisional`, and leaves `over: []` where it could be one of several. Each card's
`signal:` (the main read) and `supporting:` (other reads whose counts it quotes) are marked
`provisional` because they were read off the card rather than decided. A card's *What I read*
rows are `source · words`, and the build checks each source against the trail. All of this is a
later pass, not an oversight.

- `build.js`: the one script. Plain Node, no packages. Reads `library/`, validates every id,
  writes `playbook/assets/data.js`, `playbook/index.html` and `playbook/cards/*.html`.
- `playbook/`: the deliverable, still plain static HTML. `index.html` (Cards, generated),
  `ask.html` (Ask, hand-written), `library.html` (the library, browsable, rendered from
  `data.js`), `deck.html` (the slides, one file, one slide shown at a time: the idea, in words
  only; your day on mobile, a working prototype; the modules that can fill a card's reply sheet,
  as bare sheets, a draft among them; the details, three phones scrolled into their details; and
  last how a card is built, a pyramid `deck.js` draws from `data.js`), `world.md` (the card model and the design decisions), `cards/` (generated), `assets/`.
- `_archive/`: what did not come forward. That is the blueprint viewer app, the hackathon deck, the
  scenario docs and the two blueprint-era UI notes. **Inspiration, not source of truth.** The
  channels, assemblies, signals and the live docs that used to live here are now in `library/`.
  The old vocabulary there was Plant / Grow / Nurture; here it is Expand / Advance / Sustain.

## The idea in one paragraph
People work the verbs (decide, approve, send); the tool works the nouns (find the person, gather
the proof, write the draft). A card is one prepared noun with its reasoning on the back. Early on
the tool mostly asks; once it has learned your world it mostly acts. Nothing goes out without you.
