# The pretend world

Every card in the playbook is written as if the tool already exists and is talking to **you**, the
seller. To keep the cards consistent they all share one world and one card model. Reuse these
names and rules; add to this file before inventing anything new.

## Today

Monday 14 September 2026. Dates on the cards are relative to this.

## The goal, in your words

Sell **BOPS**, a new SaaS for local authorities. A good product but a tough, multi-year sell. Find
the early adopters: individuals inside councils who feel the pain of legacy tech and want better
tools for their officers. Several stakeholders to win per council, some deciders, some influencers.
Land a **partial adoption now**, full adoption later. About **30 councils** on the shortlist, with
named people in eighteen of them.

Tempo: patient. Never push. A clumsy chase costs a relationship built over years.

## The card model

**Four kinds of card, one shape.**
- **Act.** The tool prepared a noun, you do a verb toward someone. Labelled Sustain (keep a
  relationship alive), Advance (move a deal forward) or Expand (start a new relationship).
- **Ask.** The tool needs one fact only you hold, and the answer changes what it does. The button
  is the answer. It has looked first and says where it ran out. It asks for facts (what happened
  offline, what you intend, what you prefer), never for verdicts it should reach itself. A check
  ("I read Priya as cautious. Right?") is allowed.
- **Connect.** A source it cannot see.
- **Told.** An outcome with nothing to do: the *Then* of an earlier card coming back ("Lena's
  email bounced this morning"). The button is Got It.

Early on the home is mostly Ask. Later it is mostly Act. That ratio is the learning curve.

**The front** is what the home shows: label, the action as the title, one or two lines of reason,
the *when* if earned, one button. **The back** is the thinking: for Act cards, *What I noticed*
(first bullet is the why-now), *What I read* (the actual records), *Not sure* (a sentence, or a
one-tap question when you hold the answer) and *Then* (what happens after you act). For Ask cards,
*What I already know*, *Where I ran out*, *What I'll do with your answer*, *Where I'll remember it*.

**The when**, shown only when earned, as one small line:
- fresh: "Worth doing today. Stale by Friday."
- dated by the world: "By 16 October: procurement window closes."
- rhythm: "Any day this week."
- whenever: nothing.
Cards ripen and rot. A card past its moment leaves by itself with one line. There is no overdue
state, ever. A card can be **held** (shown faded) when it ripens only after another card lands.

**How sure**, one word beside "The thinking" where it matters: *sure* (a fact: a bounce), *likely*
(a pattern: silence), *a hunch*.

**Guardrails.** Every Sustain card names what the other person gets. "Not Relevant" asks why in
one tap. Cards are observations with a suggested move, never tasks: no due-date fields, owners or
statuses. Nothing sends; the human does.

## Where the cards live

**The home (desk).** The grid, cards first, sorted by when. Filters by kind. The box sits below
the grid, never above it: the cards come to you; the box is for what you're wondering.

**The phone.** Slides that explain the concept; they are not screens of the tool. All of them
live in `deck.html`, one shown at a time. The first, "The phone", is the intro: a title, a line
about the idea, one iPhone showing one card. The second, "What a card asks of you", shows the
six kinds of reply a card can ask for as bare cards in a row, no phone around them, each
captioned by what you do. Only the foot of the card differs.

The deck: the page is the grouped grey, and each slide is a white panel inside the same
48 pt margin the slides always had, with the way out top left and the previous, count and next
controls bottom right on the grey. The heading sits top left in the panel; the body takes the
rest and centres its content, scaled to fit. Arrow keys and space move between slides without
leaving the page. Nothing more: no full screen, no fixed canvas. The Cards and Ask pages stay as
pages: they are the library, not the story.

Decided so far (17 September): the slide sits inside a 48 pt safe area, its title and
description capped at a reading measure and set on the AX1 rung of Dynamic Type, each phone
drawn at 393 × 852 pt and scaled so three fit the row.
On the screen: two round menu buttons at the top, a count line ("1 of 5 cards"), a deck whose
top card fills the screen with two cards behind it, and the iOS 26 floating tab bar at the foot.
The card is one kind label, a title of up to three lines, a description, badges, then the foot,
which is the module, named by what you do: *Pick an answer* has three options and a fourth row
that is a field for your own words; *Confirm a reading* has That's Right and Not Quite; *Give a
fact* has one field ("Type a name or a date") and Done; *Send a note* has Send the Note, Not Now
and Not Relevant; *Connect a source* has Connect and Not Now; *Take note*
(a Told card) has Got It and Open the Thread. Under the foot, "Scroll for details". Placeholder
titles and descriptions say what each module is, in the tool's voice; no avatars, no contact
blocks, no grouped tiles of "the thinking".

Not decided: what a swipe does, what "details" are and how the scroll reaches them (the user
likes the idea of a scroll that snaps to the start of the content), what the two menu buttons
and the three tabs are, and what the count line counts.

**The box.** A place to ask about a person, a council or a deal. It answers with cards where
cards exist (it moves them to the top of the home) and with a paragraph where they don't. Every
answer carries *What I read* and a *Then*, same as a card's back, and a "how sure" word where it
matters. A question the tool cannot answer can turn into an Ask ("if you know who holds the
budget, a name is enough"). A question the cards should already have answered ("who's going
cold?") is a signal that the cards surfaced too late, and the answer says so.

An answer is not a new kind of card. The vocabulary stays at five words.

## How a card is presented

The playbook follows Apple's Human Interface Guidelines: the desk follows iPadOS, the phone
follows iOS. Each part of a card is one Apple component, so a card never needs a component of
its own.

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
| The draft, brief or note | a form sheet over a dimmed page: Cancel, the title, Open in Mail |
| The actions once the card has opened | the same buttons, always in view |
| What the tool says back | the footer line under the actions |
| The kinds | a dot in Apple's colour before the label: Sustain green, Advance blue, Expand orange, Ask and Connect grey |
| Home navigation | a tab bar: Cards, Ask, Phone. The kinds are a segmented control, because they filter rather than navigate |

Wording follows the HIG's writing rules where it is interface text: button labels in title case
and starting with a verb ("Send the Note", "Not Now", "Open in Mail"), everything else in
sentence case, tab labels one word each, section headers short noun phrases. The cards keep
their own first-person voice.

Where the browser cannot do the real thing (sheet physics, the Dynamic Type ladder) the playbook
does the nearest plain thing and says so in a stylesheet comment. The glass material is turned off
on purpose: bars, capsules and buttons are solid surfaces with a hairline. Apple has no toast; the
phone's banner is the nearest honest thing.

## The ladder (where a deal stands)

cold → engaged → coalition → partial → full

## The councils

| Council | Stands at | Notes |
|---|---|---|
| Thornbury Vale District Council | engaged | Sarah Whitlow is the only live door. Budget meeting 22 August. Budget sits with the Director of Resources, Graham Ewell |
| Ashcombe County Council | coalition | Tom Reynolds champion; Priya Nair joined the thread 8 September; no budget holder seen yet |
| Calderside Metropolitan Borough | engaged | Daniel Okoro; procurement window closes 16 October |
| Marlow Heath Borough Council | cold | four notes from you since May, nothing back |
| Eastwick City Council | engaged | Hannah Reid; digital strategy published Friday 11 September |
| Kelbrook District Council | coalition | stuck on price with Mark Ellery; Nadia Hussain for it; Paul Denny not yet in |
| Fenwick & Dale Council | engaged | demo Thursday 17 September 10:00; think BOPS replaces their case system |
| Harrowfield Borough Council | engaged | Lena Marsh left; her auto-reply names Dev Patel |
| Wendleton Borough Council | cold | tender out 9 September, clarifications close 2 October, tender closes 9 October |
| Borsetshire County Council | full (customer) | the case study every other council gets shown; live fourteen months |

Twelve councils have no named person: Ambleford, Brackley Vale, Coldharbour, Dunmere, Ferrisby,
Greystoke, Hollins Cross, Kingsmead, Lowerdale, Norbury Heath, Oxley, Radcliffe Moor.

## The cast

- **Sarah Whitlow**, Head of Customer Services, Thornbury Vale. Used to reply within a day; slowed since the budget meeting.
- **Tom Reynolds**, Service Design Lead, Ashcombe. Your champion. Asked on 10 September whether BOPS can import their case records.
- **Priya Nair**, Head of IT, Ashcombe. Met you Tuesday 8 September, joined Tom's thread the same day. Has twice asked "will officers actually use it". You owe her the data-residency note.
- **Daniel Okoro**, Digital Transformation Lead, Calderside. Warm, slow rhythm, roughly every six weeks. Books calls when you propose them.
- **Hannah Reid**, Director of Digital, Eastwick. Quiet but friendly. Led the digital strategy.
- **Mark Ellery**, Finance Business Partner, Kelbrook. The price objection is his.
- **Nadia Hussain**, Digital Lead, Kelbrook. For it. Has mentioned her director twice.
- **Paul Denny**, Director of Communities, Kelbrook. On no thread yet.
- **Joanne Platt**, Programme Manager, Fenwick & Dale. Running Thursday's demo.
- **Lena Marsh**, formerly Service Improvement Lead, Harrowfield. Left; her email bounced this morning.
- **Dev Patel**, Digital Programme Manager, Harrowfield. Named in Lena's auto-reply. Never spoken.
- **Owen Pryce**, procurement contact, Wendleton. Named in the tender. Never spoken.
- **Claire Bennett**, Head of Digital, Marlow Heath. Your colleague Ravi knows her.
- **Kwame Asante**, Head of IT, Borsetshire. Happy to do reference calls.
- **Ravi Menon**, your colleague in partnerships. Well connected across the sector.
- **You.** Fede, the seller. Warm, plain-spoken, allergic to "just checking in" emails. You delete the tool's pleasantries.

## Proof and documents you can point at

- The **Borsetshire case study**, with a page of officer feedback: case admin down by about a third.
- The **officer-time one-pager**: the one-page summary of that saving.
- The **Borsetshire phasing note**: how they took BOPS in stages. Finished 11 September.
- The **data-residency note**: where the data lives and who can see it. Updated 2 September.
- The **records import note**: how import works, in stages.
- The **partial rollout price sheet**: one service, live cases, about a third of the price.
- The **alongside one-pager**: how BOPS sits beside an existing case system.

## What is connected

Gmail, Calendar, Drive, Meet, Slack, and the open web. **LinkedIn is not connected**, and several
cards say so where it would have helped.
