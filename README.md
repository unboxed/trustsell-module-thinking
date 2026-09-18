# Signal cards

A playbook of what a sales tool would say to you, one card at a time, written as if the tool
already existed. Each card names one action and its reason on the front, shows its thinking on the
back, and ends with a button. Nothing here is connected to anything; it is a design fiction to
argue with.

Behind the cards is `library/`: the facts the tool would reason from, as markdown, from the
channels you connect at the bottom to the cards at the top.

## Open it

Double-click `playbook/index.html`. No server, no install. Works offline: the fonts are bundled,
and Macs and iPhones use their own SF Pro. The **Library** tab walks the same material from the
bottom up, and any entry can be downloaded as the markdown it came from.

## Share it

Send the `playbook/` folder. Everything it needs is inside it. If the repository's GitHub Pages
is switched on, the same folder is published there on every push to `main`.

## Change it

The library is the source of truth. The playbook is generated from it.

1. Edit the markdown in `library/`.
2. Run `node build.js`. No packages to install; it is plain Node.
3. It validates every id and **writes nothing if one does not resolve**, naming the file and the
   id that broke.

It regenerates `playbook/index.html`, `playbook/cards/*.html` and `playbook/assets/data.js`.
**Do not hand-edit those**: the next build overwrites them. `ask.html` and `deck.html` are
hand-written and are left alone.

- To add a card: copy `library/templates/card.md` into `library/cards/`, fill it in, give it an
  `order`, and build. The tile on the home and the previous/next links wire themselves.
- The world the cards share (goal, cast, councils, documents, today's date) is data, in
  `library/world/`. Add a person there before a card names them.
- The card model, the phone and the design decisions are in `playbook/world.md`.
- The look follows Apple's Human Interface Guidelines. `playbook/assets/style.css` is the
  playbook's own layer; the two `ios-*.css` files beside it are Apple's measured values and
  component recipes, copied in and not edited.

## What is not finished

Two rungs are deliberately empty rather than guessed at:

- **`library/counts/`** — the arithmetic floor. Every entry holds its id and which signals
  reference it, and says `defined: false`. Nothing has been written about what any of them
  actually counts.
- **Each card's `signal:`** — marked `provisional`. It was read off the card, not decided.

Both are named in the interface rather than hidden, which is the same rule the tool itself
follows: a gap is a fact, so say it.

## What came before

`_archive/` holds what did not come forward: the blueprint viewer app, the hackathon deck and the
scenario docs. It is kept for inspiration; the library is the source of truth.
