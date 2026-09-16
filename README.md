# Signal cards

A playbook of what a sales tool would say to you, one card at a time, written as if the tool
already existed. Each card names one action and its reason on the front, shows its thinking on the
back, and ends with a button. Nothing here is connected to anything; it is a design fiction to
argue with.

## Open it

Double-click `playbook/index.html`. No server, no install. Works offline: the font is bundled, and
Macs and iPhones use their own SF Pro.

## Share it

Send the `playbook/` folder. Everything it needs is inside it. If the repository's GitHub Pages
is switched on, the same folder is published there on every push to `main`.

## Change it

- The world, the cast, the dates and the card model are in `playbook/world.md`. Start there.
- Each card is one file in `playbook/cards/`. Copy a card of the same kind (Act, Ask or Connect)
  and edit the words. Add a tile for it to `playbook/index.html`.
- The look follows Apple's Human Interface Guidelines. `playbook/assets/style.css` is the
  playbook's own layer; the two `ios-*.css` files beside it are Apple's measured values and
  component recipes, copied in and not edited.

## What came before

`_archive/` holds the system design this grew out of. It is kept for inspiration; the playbook is
the source of truth.
