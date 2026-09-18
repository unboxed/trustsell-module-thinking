# The desk (archived 18 September 2026)

The playbook's first home: an iPadOS-style grid of cards (`index.html`), a page per card with
its thinking beside it (`cards/`), and the Ask page (`ask.html`). It was archived because it had
not kept up with the thinking and no longer meant anything to the user. The phone slides
(`playbook/deck.html`) and the library (`playbook/library.html`) carry on.

**Inspiration, not source of truth.** The pages are as they were on the day, so their links to
`assets/` and `library.html` no longer resolve from here. `pages.js` is the part of `build.js`
that wrote them; it does not run on its own. `card.js` was the card pages' script.

The last change made to it, the same day: a draft's Open in Mail became Send, with Undo after.

## The home The grid, cards first, sorted by what waiting a day would cost: six bands
worked out by `build.js` from each card's `when`, what it owes and what waits on it, with a held card
right under the card it waits on (decided 18 September; the bands are in
`library/modules/00-spine.md`). Filters by kind. The box sits below
the grid, never above it: the cards come to you; the box is for what you're wondering.


## How a card was presented on the desk

| Part of a card | On the desk |
| --- | --- |
| The front (label, title, reason, when) | a card on the grouped grey page |
| The one action | a filled capsule button |
| Not Now | a plain button |
| Not Relevant and its one-tap why | a plain button that opens an action sheet: three reasons and Cancel |
| The answers of an Ask card | an inset grouped list; one row gets the checkmark; the suggested one says so |
| A pick of several | the same list, with a limit, and a filled button to confirm |
| A sentence in your words | a text field in a list row, and a filled button |
| The thinking | inset grouped lists with section headers, beside the front |
| The person | not shown yet |
| What each answer changes | the answer's line, said back after you pick |
| Not sure, when you hold the answer | a segmented control in the last row of that list; the reply is the list footer |
| The draft, brief or note | a form sheet over a dimmed page: Cancel, the title, Send (Open in Slack, Copy for the Portal or Add to the Invite where it goes elsewhere) |
| The actions once the card has opened | the same buttons, always in view |
| What the tool says back | the footer line under the actions |
| The kinds | a dot in Apple's colour before the label: Sustain green, Advance blue, Expand orange, Ask and Connect grey |
| Home navigation | a tab bar: Cards, Ask, Library, Phone. The kinds are a segmented control, because they filter rather than navigate |

