# Signal cards: the playbook

This is a **design workspace, not an application**, and its pages are **slides for sharing the
thinking**, not screens of the tool. It holds a playbook of **signal cards**: what a sales tool
would say to a seller, one card at a time, written as if the tool already existed. The
playbook is plain HTML in `playbook/`, opens by double-clicking `playbook/index.html`, and needs no
server, build or install. It is meant to be shared as a folder.

## How to work with me here
- **Brainstorm and pressure-test first.** Do not write application code, schemas or a build system
  unless asked. The cards are static HTML on purpose. A one-off script that rewrites the HTML is
  fine; it lives in the scratchpad, not the repo.
- **The card model lives in `playbook/world.md`**, together with the pretend world (goal, councils,
  cast, documents, dates) and the table of which Apple component each part of a card is. Read it
  before writing or editing a card. Add to it before inventing a name, a date or a document.
- **The phone and card slides are concept slides.** Do only what the user asks on them, one step
  at a time; they direct the design. See the phone paragraph in `world.md` for what is decided.
- **One HTML file per card** in `playbook/cards/`. The home (`playbook/index.html`) lists every
  card sorted by *when*. When a card is added, add its tile to the home and wire the previous/next
  links in the toolbar at the foot of the neighbouring cards.
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
  means changing tokens, not rules. Where a number is a judgment rather than Apple's, the comment
  says so.
- `playbook/assets/fonts/` holds Inter (SIL OFL) as the non-Apple fallback. Macs and iPhones use
  SF Pro through `-apple-system`. Never link a font CDN.
- `playbook/assets/card.js` is the one script the card pages share; `deck.js` is the deck's
  (one slide shown at a time by hash, arrow keys, the count, fitting a slide's figures to
  its body, and the phone's reply sheet).
- Markup uses the kit's classes directly (`ios-btn`, `ios-list`, `ios-field`, `ios-segmented`,
  `ios-navbar`, `ios-tabbar`, `ios-actionsheet`). Reach for a kit component before inventing one.
  The one exception is the phone's reply sheet (`.reply-sheet` in `style.css`); `world.md` says why.

## What is where
- `playbook/` — the deliverable. `index.html` (Cards), `ask.html` (Ask), `deck.html` (the
  slides, one file, one slide shown at a time: the phone, a working prototype, then the modules
  that can fill a card's reply sheet, as bare sheets), `world.md`,
  `cards/`, `assets/`.
- `_archive/` — the earlier system design this grew out of: six modules, signals, assemblies, a
  blueprint app, scenario docs. **Inspiration, not source of truth.** The signals under
  `_archive/02-relationships/signals/` and `_archive/03-offerings/signals/` are where most cards'
  reasoning came from; `_archive/docs/tracing-back.md` explains the facts → counting → opinion track-back that a card's
  back follows. The old vocabulary there was Plant / Grow / Nurture; here
  it is Expand / Advance / Sustain.

## The idea in one paragraph
People work the verbs (decide, approve, send); the tool works the nouns (find the person, gather
the proof, write the draft). A card is one prepared noun with its reasoning on the back. Early on
the tool mostly asks; once it has learned your world it mostly acts. Nothing goes out without you.
