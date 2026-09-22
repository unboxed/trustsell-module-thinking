# The pretend world

For the story of the tool, told from the start with the why of each part, read `story.md`.
This file is the card model, the world and the log of decisions.

Every card in the playbook is written as if the tool already exists and is talking to **you**, the
seller. To keep the cards consistent they all share one world and one card model. The card model
and the decisions live here. The world itself (goal, cast, organisations, documents) is data in
`scenarios/bops/world/`, because cards reference it by id; add there before using a name, a date or a
document that is not already there. The world sections at the end of this file mirror it.

## Today

Wednesday 16 September 2026. Dates on the cards are relative to this.

## The goal, in your words

Sell **BOPS**, a new SaaS for local authorities. A good product but a tough, multi-year sell. Find
the early adopters: individuals inside councils who feel the pain of legacy tech and want better
tools for their officers. Several stakeholders to win per council, some deciders, some influencers.
Land a **partial adoption now**, full adoption later. About **30 councils** on the shortlist, with
named people in eighteen of them.

Tempo: patient. Never push. A clumsy chase costs a relationship built over years.

## The card model

**Four kinds of card, one shape.**
- **Act.** The tool prepared a noun, you do a verb toward someone. Until 19 September an Act was
  labelled Sustain, Advance or Expand; the three were dropped (see "A card's day" below).
- **Ask.** The tool needs one fact only you hold, and the answer changes what it does. The button
  is the answer. It has looked first and says where it ran out. It asks for facts (what happened
  offline, what you intend, what you prefer), never for verdicts it should reach itself. A check
  ("I read Rachel as cautious. Right?") is allowed.
- **Connect.** A source it cannot see.
- **News.** An outcome with nothing to do (called Told until 19 September; renamed because
  "told" is also the library's word for what you tell the tool, the opposite direction. Update
  was tried the same day and dropped: it reads as an instruction to update something, or as a
  software update. FYI and Heads-up were passed over. The user's call): the *What happens next* of an earlier card coming back ("Julie's
  email bounced this morning"). The button is Got It.

**News rests on a record, not a read** (21 September). Every other kind of card names a `signal`,
the read it stands on, and the build refuses a card whose read does not reach what it claims. News
carries no opinion: an outcome with nothing to do is a fact, and there is nothing for a read to
say about it. So a News card names `rests` instead, the records that say it happened, addressed
the way every other join is (`crm#deal-record`) and checked the same way. It rests lower on the
ladder than any other card, which is exactly right. The rule that guards it: a completion is
fetched or told and **never deduced**, the same rule the library already holds for an ending and
for the completion of a sale. What earns it a card is not that the news is good, but that the
tool's watching on that deal stops, and the seller should be told which promises it will stop
raising. *(My reason, not yet yours.)*

Early on the home is mostly Ask. Later it is mostly Act. That ratio is the learning curve. An Ask
is the general way the tool learns what it cannot observe, not only about a person: your tone, which
councils matter most, what is new about the product. A fact that does not shift is told once; what
shifts is asked when the answer would change something, and every answer is kept, so nothing is
asked twice. "There is no settings screen" was decided on 18 September and opened again on 19
September: the tool also holds records and a profile, and how the seller sees or changes them is
not written yet. So far only the cards are designed.

**The front** is what the home shows: label, the action as the title, one or two lines of reason,
the *when* if earned, one button. **The back** is the thinking: for Act cards, *What happened*
(first bullet is the why-now), *Sources* (the actual records), *Still unclear* (a sentence, or a
one-tap question when you hold the answer) and *What happens next* (what happens after you act). For Ask cards,
*Known so far*, *What's missing*, *What your answer changes*, *Where your answer is saved*.

**The when**, shown only when earned, as one small line:
- fresh: "Worth doing today. Stale by Friday."
- dated by the world: "By 16 October: procurement window closes."
- rhythm: "Any day this week."
- whenever: nothing.
Cards ripen and rot. A card past its moment leaves by itself with one line. There is no overdue
state, ever. A card can be **held** when it ripens only after another card lands. On the phone it is hidden
until then and arrives next (since 19 September; until then it was to be shown faded).

**How sure**, one word beside "The thinking" where it matters: *sure* (a fact on record: a bounce),
*likely* (a pattern against their usual: silence), *a hunch* (a reading of someone's words). Never
a number. The weakest ground sets the word, and a line under it says what it stands on (decided 18
September; the rule is in `library/docs/reading-principles.md`).

**Guardrails.** Every message the tool drafts names what the other person gets (until 19
September: every Sustain card). "Not Relevant" asks why in
one tap. Cards are observations with a suggested move, never tasks: no due-date fields, owners or
statuses. Nothing sends without your say-so: where mail is connected the tool can send a
message once you tell it to, and you can undo for a moment after; where it is not, the message
opens in Mail and you send it yourself. (Until 17 September this read "Nothing sends; the
human does". In the library the mail drafts' button is Send; the tender portal and the Slack
message to Simon still hand over, because neither is mail.)

## Where the cards live

**The desk** was archived on 18 September 2026 (the user: outdated, and it had no meaning for
them any more). Its pages are in `_archive/desk/`. What it decided that is about the tool, not
the screen, lives on: the day ordered by what waiting a day would cost (`library/modules/00-spine.md`)
and the box, below. The playbook is now the slides and the library.

**The library page** became a catalogue on 18 September 2026, chosen by looking over three rounds
on one sheet of rendered options (https://claude.ai/artifact/DWZCjrQ7FXH9vqkGkLnZ1q): "C · Columns,
the phone's look", then set straight on the page. The page runs to 96rem, wider than the playbook's 80rem. Three columns on a 12-column grid, 3, 3 and 6:
the rungs by name, top to bottom (the story's step words were dropped because they repeated the
names), the entries on one rung as Apple's inset grouped list with one quiet line each and no separators
(too many hairlines otherwise; the chosen row takes a fill), and the
entry at a glance. The entry is laid out like Settings: its header on the ground, then grouped
lists of what rests on it and what it rests on. Every row moves the columns, so following the
joins is how you browse. A join not written yet, or read off a card rather than decided, is a
quiet row that says "Not written yet" or "Provisional". Open the Entry leads to the whole entry.
The reason is chapter 3 of the story: the tool counts first and judges last, and nothing it says
floats; the library is that climb made browsable (the user: the story is about how things build
up to a card, not about the library). It wears the phone's type and ink so the playbook reads as
one, with no coloured dots, and its surfaces are plain: the glaze and the deep shadow belong to
the card alone (the user's calls). Every entry's module is left off the page for now: where it
belongs is not decided. Passed over: every rung as a shelf of tiles, and
one rung as a table.

**The phone.** Slides that explain the concept; they are not screens of the tool. The tool is a
desktop platform and a phone app both; the phone is where the thinking is done because one card
on a small screen is easier to think through than a full desktop platform (the user, 18
September). All of them
live in `deck.html`, one shown at a time. First in the deck since 21 September, "Martyn's
twenty-six questions" is where the whole thing started: the questions a real seller of a SaaS to
local authorities asks himself through a sale, all of them, in his own words, unedited. The library
was derived from that list, so the deck now opens where the thinking did rather than on the claim.
He is named on the slide, the user's call. Like the climb it is **not typed**: `deck.js` fills it
from `data.js`, which `build.js` reads off `library/docs/sales-questions.md`, so rewording a
question rewords the slide at the next build. **It never scrolls.** A scrolling version was built
first, three columns narrowing to one you go down on a phone, and dropped the same day: a slide is
not a page (the user). So the wall is drawn at one size and scaled to the room, the way a bare sheet
is, `deck.js` doing the fitting from the slide's `data-w` and `data-h`. The composition never
changes, only how big it is, and nothing is ever cut or hidden below a fold. 1776 is the room's
width less the slide's margins and 537 is the list's own height there, measured. Its rows take the
kit's own list-row padding, 11 pt, and the gap under the title is 48, twice the deck's usual 24 and
three times the 16 a figures slide cuts it to, because the list starts on a hairline and the title
has to stand clear of it (the user, on both). The wall hangs from the top of the body rather than
its middle, so that gap stays 48 at every size instead of opening up as the slide scales down. "The idea", which opened the deck until then, is words
only: it states the argument before anything is demonstrated, that people work the verbs and the
tool works the nouns. The second, "Your day on mobile" (called "The phone" until 18 September), is the prototype: the title
and a line about the idea on the left, one iPhone on the right at almost the room's full
height, and it works (the card's action raises the reply sheet, a row can be chosen, the
close button lowers it). The third, "Reply sheets", shows the reply modules as bare
sheets in a row, no phone around them, each captioned by its module. Only the middle of the
sheet differs. The last of them, "A draft", shows what the sheet does when the tool has
written something for you. Claude's card also has version pills (A and B) and a copy button;
both are left off the slide for now. The fourth, "The details" (18 September), shows three phones
side by side, one card each, chosen so the three replies differ: Karen's Send Message (a
draft), Ashworth's Rest It (one tap, with One More Try raising the last note) and the Ask
about Rachel's meeting (Answer raises the Choices sheet). Scroll each into its details, which
follow the spine with the card's widgets in place. The words and rows come from the cards in
`library/`: each phone is `phone.html` on one card (see "The phone is built" below). Felton
and Rachel's promise card also carry widgets (People, What they said, Open items, Documents) but
are not on the slide: their replies are drafts too. Holbrook's window card carries a Timeline
and is not on the slide either. Second in the deck since 21 September, "The climb" shows the ladder itself: six
rungs from what you connect up to Signals, where the tool first has an opinion, each with its size
and one line saying what it does. It stops below the cards on purpose, because that is where the
explanation ends and the cards are the slides after it. Like the pyramid it is **not typed**:
`deck.js` fills it from `data.js`, so adding a count changes the slide and nobody has to remember
to. The rungs' own words live in `deck.js` beside the pyramid's, the way `library.js` carries its
own words for the same ladder. `data-sizes="off"` on the list hides the numbers, because they are
true and they are not always what you are talking about. The fifth, "How a card is built"
(18 September, by looking, after four rendered sheets: a full tree, one thread, rings, then
https://claude.ai/artifact/U4dtpbqQJmpbFp5k5hdES6 where "B · Pyramid" was chosen), shows Karen's
card at the peak of a pyramid. The channels are the ground, each with the records it gives;
above them the gathers, the counts and the reads, so the shape narrows as it compiles. Unlike
the other slides it is not typed: `deck.js` draws it from `data.js` when the deck opens, so it
follows the library. A dashed line is a join not written yet (a count that cannot yet say which
gather it counts within). Passed over: rings with the card at the centre, which could not fit
the long names; one thread, which left the rest of the card on trust. Balanced 19 September, by
looking (https://claude.ai/artifact/UA8xP4uwqtfz3V8KzPAgcx, "B · Names on the ground line"): the
records had stood on their channel, one to six high, so the lines ended at eight heights and the
tall stacks crowded the gathers. Now the channel names are the ground line, every line ends on
them, and the records hang below. Passed over: records capped
at three high, which made the busiest channels too wide for the slide. The same day its words
went one step down Apple's scale ("B · One step down": pills Footnote, channel names Subhead,
records Caption 1), the pyramid kept at the same size, so the stacks are shorter. Passed over:
two steps down, too small to read across a room, and drawing the figure wider, which shrank
everything rather than using the sides. Then the five longest count names were shortened
("Wait for a reply, against usual" and its kin, ids unchanged), and every pill, the counts too,
now sits on one line, as wide as its words. The key (main read, supporting read, the two
kinds of line) was taken off the slide the same day, the user's call.

**A second deck** (22 September, the user's call), `how-it-builds.html`, beside `deck.html` and
not replacing it. `deck.html` shows the tool; this one tells where the tool's reading came from,
casually, for people who were not there: it starts on the questions a seller asks himself, walks
one of them down to the records and the connections it takes to answer it, names the ladder that
walk turns out to be, says how far that got across all twenty-six, and ends on the phone, where it
arrives. Ten slides: the wall, five of the descent, the climb, one of words, the pyramid, the
phone. Chosen by looking, on one sheet of three ways to tell the middle of it
(https://claude.ai/artifact/Fx3uz44D4pbUVV6U56QA1T): "A · One question, walked down". Passed over:
the question set beside a list of what it takes, which states the blocks rather than building
them, and the wall kept on screen with a shelf filling under it, where the wall is a texture
rather than words. The descent is **not typed**: a slide names the question, the one read the
descent follows and how far down it has got (`data-question`, `data-read`, `data-upto`), and
`deck.js` walks `data.js` for the rest. Like the wall and the pyramid it is drawn at one size,
1600 x 473, and scaled to the room, so all five slides place their rows identically and a row that
has arrived never moves again. The five names down the left are the pyramid's own four in the
present tense, plus what you connect (chosen by looking, on one sheet of three ways of saying it,
https://claude.ai/artifact/CjBHMCBZuhS8qYksH3FF15: "A · The words the pyramid uses"). The first
try used the library's words, reads and counted within, and the user's call was that they are
jargon on a slide. Passed over: everyday words for each rung, which teach a vocabulary the rest of
the playbook never uses again, and a chain, each row saying why the row under it exists.
Question 19 is answered by five reads, not one, so the first row shows all five and the descent
follows one of them: the fan is true, and the whole fan would not fit. **No read on that row is
filled** (22 September). It was, and the user asked what the fill meant: on the pyramid a filled
pill is the read the card rests on, a fact from the card, but here it was only the one I chose to
walk down, which made the slide claim a decision nobody had made. A read is not picked by
preference at all. Each fires on its own written trigger, and which of the fired reads becomes a
card is the Brain's (`library/modules/00-spine.md`). What the library genuinely has not decided is
which read a card rests on, `signal_status: provisional` on 44 of the 45 cards, and that is what
the fill was quietly papering over. *(My reason, not yet yours.)* The climb shows its sizes here,
unlike in `deck.html`, because by then every rung has been met once and how much of it there is is
the point; and the rung names arrive after the walk, as the names for five steps already taken. One slide is typed, "Every question, the same way", and
even its number is filled from `data.js`, so it cannot go stale. The cost, noted: the two decks
share `deck.js` and `style.css`, so a change to either script or stylesheet is a change to both.

**Proof is now evidence** (19 September, the user's call). "Proof" named what a document does, not
what it is, and read as unclear. Everywhere it meant the case studies, references and results you
can show a buyer to back a claim, it now says evidence: the Evidence library, Claim without
evidence, Evidence on file and the rest. Labels and prose only; the ids (`proof-library`,
`proof-on-file`…) and the told record "Proof tag" keep their names. Passed over: "documents",
which the cards already use for the file itself.

**The phone is built** (decided 19 September, the user's call). The phone is no longer typed into
`deck.html`. It is one page, `phone.html`, and `phone.js` draws it from `data.js`, so it says what
the cards in `library/` say. A card is on the phone when it carries a `phone:` block with the few
words the phone uses where they differ from the card: the short when, the filled action and what
it does, the outline action, the line said back and the dark card's words, the draft's subject.
Everything else is read from the card as it is. The slides hold `phone.html` in an iframe in place
of the screen, inside their own bezel: "Your day on mobile" shows the day, and each phone on "The
details" shows one card. Opened on its own it is a working day: it remembers what you sent, skipped
and marked in that browser, so a day can be gone through for real (the slides pass `fresh`, so they
always start clean). The user's reasons, all four: stop the copies drifting, test the flow for
real, show it to sellers, and a step towards the product. Before this there were four phones
typed by hand, Karen's email pasted three times, and the details copied from the library once and
left to drift. Still no framework, no bundler and no server: the folder opens with a double-click.
What each slide's phone does is unchanged, with two exceptions that came with drawing from one
card: Karen's details on "Your day on mobile" now follow the spine with her widgets, as on "The
details", and the day's order is the home's. The phones on "The details" still say back one line
and do not darken. The Reply sheets slide is still typed; it can be drawn the same way later.
On a real phone (the same day, the user's call: they want to hold it as an app, not look at a
mockup) there is no bezel, and the phone's own status bar and home indicator stand in for the
drawn ones. The screen takes the phone's own size: what sits at the foot (the actions, the hint,
the bar) is measured up from the bottom and across the width, so the card fills any phone edge to
edge. (For an hour it was the 367 x 826 screen scaled to fit, which left bands on an iPhone 13 Pro;
the user asked for it to be responsive.) The slides still draw it at 367 x 826. Added to the Home Screen from Safari it opens full screen, like an app.
It is reached on GitHub Pages, at `/playbook/phone.html`.

The deck, "The room" (decided 17 September, by looking, on one sheet of three rendered
directions: https://claude.ai/artifact/YJCZrrjxT3N7iKS5pDse1b). There is no panel. The slide is
the ground itself, the same pale cool ground by day and near-black by night that the card was
drawn against, so the phone stands in the room rather than on a tile inside it. The words sit
left in a fixed column and the figure right, both at the ground's level, with 64 pt of padding
top and bottom and 72 pt at the sides. The title and the words are set in tvOS's text styles, in the phone's face (19 September, the
user's call: slides are read across a room, which is what tvOS type is for; tvOS as a platform
is still not the playbook's): Title 1, 76 on 96, for the title, Caption 2 for the quiet line
under it, Body for the words-only slide, Callout for the brief title over a row of figures, and
Caption 2 for the figures' captions. Until then the title was 72 on 66, the card's big words one
step up. The same day every other size in the playbook moved onto Apple's iOS scale, from the
kit's tokens, so no size is ours any more; only the heavy weight is, as part of the look. The way out, the arrows and the
count are ink marks in the margins, not buttons: the room has no furniture in it. Arrow keys and
space move between slides without leaving the page. Nothing more: no full screen, no fixed
canvas. Tried and passed over on the way: "The masthead", the title full width over a hairline
with the figures ranked beneath, and "The night studio", a room fixed dark with the words
stepped back to a caption in the corner. The Cards and Ask pages stay as pages: they are the
library, not the story.

Decided so far (17 September): each phone is drawn at 393 × 852 pt and scaled to fit, never
bigger than a phone. A bare sheet is the phone's sheet, as if grabbed from the phone: 335 pt
wide, then scaled, and it may grow past 1:1 on a big screen. A slide of words and a figure caps
its content at 1440 pt and centres it, so a wide screen does not pull the two to opposite walls;
the ground still bleeds to the edges. The reply sheets slide is not capped, because a bare sheet is
allowed to grow. A slide whose body is a row of figures (the reply sheets, the details) has
only a brief, small title and no line under it, so the figures take the room (decided 18
September, by looking: https://claude.ai/artifact/919qY4w2iqY1KyTBmE44E1; passed over were the
words in a column beside the figures and a line across the top). A slide of words only says no size, and the script leaves its scale alone.

On the screen: two round menu buttons at the top, a count line ("1 of 5 cards"), and one
card, already in focus, that runs down to the home indicator. There is no stack of cards
behind it and no menu at the foot. Both were tried and dropped: a stack says "flick through
these" while a reply asks you to stop and think, and on a real phone the reply was too small
inside a card that did not feel in focus. (On "Your day on mobile" the count has since given way
to the week strip, and the cards to either side now show at the edges; both are below.)

Moving between cards (decided 18 September, by looking, on a sheet of three ways:
https://claude.ai/artifact/GmPvzETw8SUGyAkHYaLcXM). On "Your day on mobile" the cards sit side by
side and a sideways swipe moves one card at a time, forward or back. Up and down still opens a
card into its details. The cards either side show as thin edges in the gutters, and three dots
above the home indicator say where you are. Each card keeps its own state: send Karen's
message, swipe on, and Ashworth is still waiting with Rest It. The header, the week and the bar
stay put while the cards move, and follow the card in view. The edges are the real cards
(19 September, the user's call): until then they were two slivers that stood still while the
real card slid in from off the screen, and the user saw through it. Now a swipe pulls in the edge
you were looking at. There are three cards (Karen,
the Ask about Rachel's meeting, Ashworth) because only three carry a phone block. Their order is
the home's, from `build.js` (Karen's card is held by the budget meeting Ask, Rachel's Ask is
holding something up, Ashworth costs nothing to wait); until 19 September it was typed as Karen,
Ashworth, Rachel. Passed over: "Act or Skip to move on", where only a
decision takes you to the next card, and "Today's list", a list of the day's cards from the
header. The cost, noted: a sideways swipe invites flicking through, the habit the stack was
dropped for. Skip now darkens the card and asks why, quietly (see "After the action"); moving to the next card is its obvious job, not yet given.

The week strip (decided 18 September, by looking, on a sheet of three placements:
https://claude.ai/artifact/BHpdq7UGj2dX5EtNbLw2HU). On "Your day on mobile" only, the count line
gives way to a week: seven days, a letter over each date, today (Wednesday 16 September) filled
in ink. Monday and Tuesday, already gone, are faint but can still be chosen. The header between the two menu buttons names the day, "Today". The strip swipes a week at
a time, from this week to the week of 12 October, so the last dated card (Holbrook, 16 October)
is in reach. There are no past weeks, because a card never goes overdue. Tapping a day moves
the fill there, today keeps a ring, and the header says "Tomorrow", "Yesterday" or the weekday
and date. (Today moved from Monday 14 to Wednesday 16 September on 18 September, so a week
with past days in it could be seen; the cards were reworded to stay true from Wednesday.) A
day on the strip means when a card's moment arrives, never a due date, so the strip does not
break the rule that cards carry no due dates. Since 19 September a day shows the cards that arrive on it
(see "The week, played out"); until then the card stayed the same whichever day was chosen. Passed over: the strip above the count,
which pushed the card 50 pt down, and a smaller strip between the menu buttons, which left the
compact title nowhere to go. The strip fades with the count's timing as the card becomes a page,
and "Today" gives way to the card's title in the bar. The three phones on "The details" keep
their count, which now counts the day's cards with a phone block ("1 of 3"; until 19 September it
said a typed "of 5").

Two views of the day (decided 19 September, the user's call, by looking over two rounds on one
sheet: https://claude.ai/artifact/1Svan95P5BFhYUEYwqMuVr). The button top right of the day screen,
the round `•••` until then, switches between one card at a time and the day as a stack. It shows
the view it takes you to, as Apple's buttons show their action: a stack in the card view, a
single card in the stack (the user was unsure which; this is Apple's convention, and Notes and
Files do the same). The header and the week strip stay in both. In the stack each card shows only
its top: the kind and the when on one line, then the title in up to two lines, each card
overlapping the one above ("B · Two lines per card"). One day is one page; a sideways swipe or the
strip changes the day ("B · Swipe sideways to another day"), and a day with no cards says so in the
end page's words. What is waiting stays out of the stack until it is free, as in the card view.
Passed over: one line per card (long titles were cut), the next card open with the rest as lines
under it, and scrolling down from today into tomorrow (today lost its end). The cost, noted: a
sideways swipe means the next card in one view and the next day in the other. "Today's list",
passed over on 18 September as a way to move between cards, comes back as a view for reading the
day, which is a different job; and the stack dropped from behind the focused card stays dropped,
because this stack is for reading, not for flicking through while you act. The view is
remembered. Proposals, not decided: tapping a card in the stack opens it in the card view; a card
sent or skipped keeps its place in the stack, in the done card's colours; and a card freed by an
answer arrives in the stack the next time it opens. The reason is in the story, chapter 7, still
mine.

The stack's motion (decided 19 September, the user's call, by trying four working phones on one
sheet: https://claude.ai/artifact/EesojPnV7RRKuFE3i5hMcm). The aim was for the stack to feel like
real cards. The layout stays as it was; only motion is added. When the stack opens, the day's
cards rise into place one after another. A tapped card dips and lifts, then grows into the card
it opens while the card view fades in under it. With reduced motion there is none of it. Passed
over: Wallet (taller cards like passes; the tapped one rises and the rest drop to a pile at the
foot), Depth (cards apart, the ones you have passed sinking into a pile at the top, which fit
fewer titles on the screen) and Cards on a table (each card a little askew, which Apple's screens
never do). The cost, noted: standing still the stack looks as it did, so a slide shows no change.

The card starts as a front: one kind label, a large bold title (Apple's Large
Title), a description, badges, then the actions and, under them, "Scroll for details". The
front holds one filled action and at most one outline one, stacked, with Skip under them; anything that needs more room goes
in a sheet. If the reply is one tap it lives on the front; if it needs room or reading, an
action on the front raises the sheet. The phone slide shows the library's Karen Hughes card:
the filled action is Send Message, the plain one is View Draft, which raises the draft
sheet. Once sent, the card darkens and says back what happened (see "After the action" below).
On the phone the word is "message" and the buttons drop the
article, as Apple's do; the library card still says "Send the Note". Placeholder titles and descriptions
say what each module is, in the tool's voice; no avatars, no contact blocks, no grouped
tiles of "the thinking".

How sure sits top right of the card, at the end of the kind label's line: one quiet word
("likely"), with what it stands on a hover away; an Ask card leaves the place empty. Skip has
moved into the actions (18 September, the user's call). The actions stack, one per row: the
filled action, then the secondary one as an outline capsule of the same size (drawn with the badges'
hairline, so there is still no colour on buttons), then Skip as quiet text, last. The stack keeps its foot: on a card with no secondary action the filled action drops a row, so Skip sits in the same place on every card and no empty row is left under it. Skip fades with the front as the card becomes a page. For an
hour the same day Skip shared the secondary action's row, side by side; the user preferred a stack. On "Your day on mobile" it darkens the card and offers Not Now and Not Relevant; on "The details" it does nothing yet. (Until 18 September Skip sat
where the word now is.)

After the action, the card darkens (decided 18 September, by looking, over three rounds on one
sheet: https://claude.ai/artifact/DuTZjnLqWKDHCCjsU9vRsq, where "A · The card darkens" was
chosen). Once you reply (Send Message, Rest It, an Ask's answer) or Skip, the card itself turns
dark, ink by day and a step darker than the slate by night, with the day still around it. On it,
centred: a large mark for what happened (a tick, or a skip mark), a short heavy line ("Sent to
Karen", "Skipped"), then the receipt: what I did, what I updated, what I'll do next. Feedback
comes after, quiet and optional, then Undo. "Scroll for details" leaves while the dark card shows (the user's call, the same
day). In its place, at the foot of the dark card, a quiet hint: "Swipe for the next card". A
thumb, Not Now or Not Relevant is the acknowledgment too: it marks itself and, after a beat, the
card slides off to the next one; the note does not, because it is for typing (the user's call,
the same day). A Next button between the feedback and Undo was tried first and dropped: one more
button on a moment meant to be quiet. A card left behind stays dark, since each card keeps its
own state. Since 19 September the day's last card is followed by a page of what the tool is watching, so
every card has the hint. After a reply it is two thumbs and a note; after
Skip it is the reason, in the library cards' words, Not Now (another day) and Not Relevant (the card got
it wrong), then the note. Scrolled into a page, the bar says the line with Undo, as before. The
user asked for this because feedback is optional and must not stand in the way: first confirm,
then let the seller say something if they want to. Passed over on the way: a yes-or-no question
under the line, the sheet staying up to ask why, the card as a white receipt with a field, the
three icons under a white receipt or in the card's corner, and the whole screen dimming with a
panel at the foot (liked too). Stand-ins, not decided: "I've marked the July figures as sent" is a
proposal for how the tool reports updating its nouns; what Not Now and Not Relevant do next, what
the thumbs change and what the note opens are not written yet. A dark card by day is a new
material on the phone, beside the white card and the slate night. Only "Your day on mobile" has
it; the three phones on "The details" still say back one line.

Scrolling turns the card into a page (decided 17 September, picked from three rendered
options; the other two were a card that scrolls inside itself, and details that rise over the
card as a second sheet). It is one surface: over the first 120 pt of scroll the card's
margins, corners and shadow dissolve until the white runs to the screen's edges, the count
line and the hint fade, and a bar with a hairline comes in behind the two menu buttons. The
actions shift into a bar at the foot and stay there: Send Message travels down and narrows to
the right; View Draft fades out on the card and fades in on the bar's left, so the two never
cross. What the tool says back after sending, and Undo, show in the same bar. Once the large
title has passed under the top bar, the title shows small between the menu buttons, as an
iOS large title does. Under the card come the details, one filled tile per section, as an inset
grouped list: a head, then paragraphs, a widget or records as plain lines (18 September, by
looking, on a sheet of options; until then they were prose after a hairline, and "No grouped
tiles", but every gap was the same and nothing grouped). A tile is a plain fill with no shadow,
so the card is still the only raised thing. For now the details are the library card's
thinking retold: "What happened" (what I noticed, as a story), "Sources" and "What happens next".
The scroll snaps between the card and the start of the details, so half-way between card and
page is only ever seen in motion; past that start it runs free through the details (a snap
there pulled the reading back in Safari). Few things move and no text reflows. The reply sheet
still rises over either state.

The reply is given in a sheet that rises over the card, its anatomy copied from the sheet
Claude's phone app raises to ask a question: a floating panel, the card still in view behind
it and not dimmed; a pager ("1 of 2") and a round close button; the question; plain rows with
hairlines and a tick on a chosen row; a last row for your own words ("Type your answer…");
one filled button at the foot's right, Next, grey until there is an answer. Colour and type
are ours. One module fills the sheet. The signal picks the module and writes its words.
There are four, told apart by shape, not by meaning (an earlier slide showed six, which was
a mistake: four of them were the same buttons with different words). *Buttons*: a line about
what is ready, a plain second action and the filled one. *Choices*: three options and your
own words; one tick. *Several choices*: the same, with several ticks. *A field*: one thing
typed ("Type a name or a date"). The wordings decided earlier are all the Buttons module
with the signal's words in it: That's Right and Not Quite; Send the Note and Not Relevant;
Connect; Got It and Open the Thread. An answer sheet grows with its rows only so far (19 September, the user found twelve
councils running off the screen): as Apple's sheets do, it stops at its tallest, here the card's
own top edge under the week strip, and the question and Next stay put while the rows scroll
between them, fading at the foot while more are below. The draft sheet was already bounded.
Several choices can carry a limit ("Pick up to three", the same day): at the limit the rows not
ticked grey out until one is unticked, and the card's own header says the number. Only an Ask
about what you intend or prefer takes one (the twelve councils); an Ask about what happened
never does (the demo), because a limit would make the tool record something untrue.

A draft fills the same sheet, and its anatomy is copied from the email card Claude's phone
app shows when it drafts a message: a head with a mail glyph and "Email"; a row of version
pills, A and B, when more than one version helps; a small grey label over the subject and
another over the body; one full-width action at the foot, Send Message. There is no To row
and no edit form. You change the note by asking, in the sheet's last row ("Tell me what to
change…"). The row has its own round arrow, grey until there are words to send; it hands
them to the tool, which rewrites the draft in place. While words wait unsent, Send Message
stands down, so the old draft cannot go by mistake. Asking covers attachments too ("attach
the case study": the tool finds it). There is no editing by hand on the phone yet; whether
there should be is open. A two-state sheet (reviewing, then a
tall editing form with To, Subject and Attached rows) was tried the same day and dropped: it
was Mail rebuilt inside a sheet. The worry that led there, Send sitting under your thumb while you are still changing the
message, is met another way: sending asks for one deliberate tap, the card says back what
happened, and Undo is there for a moment. The slide uses the library's Karen Hughes note as version
A ("With the figure") and a short form as version B ("Shorter"); the subject line, "The
officer-time numbers you asked for", is new and belongs to that card.

The phone's look (decided 17 September, by looking, over six rounds on one sheet of rendered
options: https://claude.ai/artifact/4kvVknQPP2bFEdw2z9ooKB). The anatomy is iOS and stays; the
look is the playbook's own. It lives on the phone, on the bare sheets grabbed from it, and on
the slide that holds them, which took it later the same day when the deck became a room. In the
stylesheet that is one selector, `.page--slide`, which only `deck.html` carries, so the desk
cannot inherit it. Four choices. *Big words*: the title is the design, heavy, on Apple's scale (Title 1 from the kit's tokens, 28 on 34, since 19 September, so the size is the kit's and not ours; 38 on 40 before that, and 48 on 46 until 18 September),
and everything else is small and quiet. *Plus Jakarta Sans* is the phone's face, carried in the
fonts folder as Inter is; the status bar keeps the system's. *No colour on buttons*: the filled
action is ink, or white in the dark, and the kind's dot is the only colour on the screen (grey for now, since 19 September). The
kind's name is in sentence case and badges are outlines. *The card matches the room*: by day a
glazed white card on a pale cool ground, with a lit top edge and one deep soft shadow; by night
all slate, a near-black ground and a lighter slate card with a faint sheen and a lit edge. Tried
and passed over on the way: recolouring Apple's kit, a card tinted by its kind, a white card on
deep green set in Baskerville, a ruled docket, paper and frosted glass as materials, a slate
card kept by day as well, and the kind glowing in the slate. The library page took the look on 18 September, without the dots (see "The library page"
above). (The desk never took it, and was archived.) Since 19 September every kind's dot is the quiet grey: the three colours went with Sustain,
Advance and Expand, and what the four kinds look like is the user's call, not yet made. Long titles will
need a smaller step than 38; not built. The wider face wraps the draft's subject onto two
lines, so the tallest bare sheet is now 588 pt.

The details have a fixed spine and a catalogue of widgets (decided 18 September, by looking, on one
sheet of rendered options: https://claude.ai/artifact/DnMav6ETmx2HwEnYtXEn7K). The spine is the
same on every card: Why now, What happened, then one or two detail widgets, then Still unclear,
What happens next, and Sources. Ask cards keep their own section names in the same places. The widgets
are a catalogue the tool picks from and fills, as the reply modules are, and they live in
`library/widgets/`. They are close to Google's A2UI, where an agent picks components from a
catalogue and fills them with data, but with one difference, on purpose: ours are large and
specific and sit in a fixed place, so the tool chooses and fills them but never arranges them.
That is what lets a seller learn the set once. There are six detail widgets, told apart by
shape: *Timeline* (a line of dots, today's filled), *What they said* (a quote in large type with a
rule beside it), *People* (a name in bold, the role beside it, where they stand underneath),
*Open items* (an empty circle, what is owed, its age on the right) and *A number against its
usual* (the figure in the card's big words, a bar against a bar). *Documents* (a file, what it proves,
how recent) was added the same day, when the widgets were checked against the records rather
than the cards: every record carries a time, a person, some words or a file, and Documents was
the missing one. Open items reaches no record yet, because it rests only
on counts and none of its counts can say yet which assembly it counts within; it says so with
`waits_on: counts`. Compared with usual reaches records since 18 September, when each count
that could name its assembly did. A card says two things, why to write and what to
send, and they are two trails in the library (decided 18 September, by looking:
https://claude.ai/artifact/DCS9ZqFCFLqoj2Xd4QaHMQ). Why to write goes down through the signal.
What to send hangs off the card itself: a card that names `documents` rests on the evidence
library too. Passed over: the signal reading the evidence library, which would have made every
card on that signal lean on documents even when it sends nothing. The look chosen is "Each shape
drawn"; tried and passed over on the same sheet were "Plain lines" (the blocks looked alike)
and "Meta beside the words" (a quiet left column on every block). Ink only: the kind's dot stays
the only colour. A message history is a Timeline; promises and blockers are both Open items.
Every row traces to a record in Sources. Six cards carry widgets so far: Karen, Ashworth, the
Ask about Rachel's meeting, Rachel's promise, Felton's director and Holbrook's window. North Ridley's
demo brief could not take People at first, because its signal, `lead-with-this`, does not read who
is in the room; it now rests on `new-stakeholder` too, so it could, but none is placed yet. Since 19
September every phone shows them, because every phone is drawn from the same card.

Not decided: how widgets look at night, whether a widget can be tapped through to its records,
whether the draft becomes a `reply.module` of its own, what a swipe does, the list of the details' sections (their names
were made plain on 18 September, checked against Apple's and GOV.UK's heading guidance: "The story
so far", the user's, became What happened), whether "Still unclear" and "how
sure" belong in the details, what the two menu buttons are, and what the count line counts. Also open: whether one-tap replies (That's Right and Not Quite; Got It) move from the
Buttons sheet to the front, as the message card's have; the names the signal writes on the
front's actions for the other modules; whether the sheet's pager stays when a card asks one
thing only (it sits close to "1 of 5 cards"), what Skip does next (the next card arrives, and what Not Now and Not Relevant each
change), whether
Skip is needed once the card is a page, whether modules chain (what follows "Not Quite"), and a later slide that
shows one module serving many signals.

**The box.** A place to ask about a person, an organisation or a deal. It answers with cards where
cards exist (it moves them to the top of the home) and with a paragraph where they don't. Every
answer carries *Sources* and a *What happens next*, same as a card's back, and a "how sure" word where it
matters. A question the tool cannot answer can turn into an Ask ("if you know who holds the
budget, a name is enough"). A question the cards should already have answered ("who's going
cold?") is a signal that the cards surfaced too late, and the answer says so.

An answer is not a new kind of card. The vocabulary stays at six words.

## A card's day

Decided 19 September, the user's calls, with the reasons in chapter 7 of the story. The library
is the database and the phone is the demo: if the cards carry the day properly, the phone
follows. So the day is defined in the cards' frontmatter and worked out by `build.js`, and the
rules are in `library/docs/library-format.md`, "A card's day".

- **The kind is the only label.** Sustain, Advance and Expand were dropped. They were the user's
  picture of how selling works, and a seller may not see it that way. The cards renamed with them:
  `sustain-*`, `advance-*` and `expand-*` are now `act-*`.
- **A card is about nouns of any type** (`about`): a person, an organisation, a document, the
  offering, or you. `person` and `council` are gone. An Act names who it reaches (`to`); the
  demo brief reaches nobody, because it is for you.
- **Real dates.** Every `when` has `from` and, where the card's own words give one, `until`. Only
  the words were there before. `build.js` writes `days` for the week strip: each day, the cards
  whose moment is open. The strip does not read it yet.
- **The tool decides who waits.** An Ask names the cards its answer changes (Karen's note waits on
  the budget Ask, Rachel's peer call on the Ask about her meeting). Two Acts to one person: what is
  owed first, then what gives before what asks, then the band. So Rachel's peer call also waits on
  the promised note, and Neil's invite on the phasing note (it used to be typed; the card's own
  words already said "send that first"). The demo brief waits on the note to Michelle, as that
  card says. Two moves to one person that nothing tells apart fail the build: write one card.
  The user first asked for this when the question was put to them ("the tool should know what
  should go first, or if it's merged").
- **The scenario is separate.** The pretend world and its cards moved to `scenarios/bops/`.
  BOPS is one example. The user means to pressure-test the same library on the opposite kind of
  sale, a mass sale, and the scenarios can be rewritten to fit the signals.

**The week, played out** (the same day, the user's call, after looking at
https://claude.ai/artifact/DxWfJdHinuRtz7gMXWWN2A). The user did not want to set how many cards
make a day ("the whole point of the tool is to bring you things you can do in the day") and asked
me to judge waiting by playing scenarios out. What came of it:
- Every card has a day, `arrives`. The tool spreads "any day this week" across the working days
  instead of piling it on Wednesday; quiet days take what costs nothing to wait. "This week" ends
  on Friday. Placed by me in the pretend world, each day from what the card already says.
- Today holds one card of every reply the phone has (the user's call, the same day): drafts to
  send, a hand-over (the brief), one choice (the budget Ask), several choices (the twelve
  councils), your own words (a good fit) and one tap (let Ashworth rest). The twelve councils, a
  good fit and Ashworth moved to Wednesday for it; Lisa's note moved to Thursday, a day before
  it goes stale, so Wednesday does not overflow. The scenario bends to show the tool.
- A waiting card is not shown until it is free, then it arrives next. On a phone that shows one
  card at a time, a faded card you cannot act on is a dead stop. Send the note to Michelle and the
  demo brief is next; answer the budget Ask and Karen's note is next.
- Known events prepare cards on their day. Three new cards, each promised by an existing one:
  the question after Thursday's demo, the Tarlton bid question before 2 October, and the note to
  Lisa a fortnight after the congratulations.
- What happens next becomes a `watch` on the card. Once you act, the tool watches; a later day's
  last page lists what it is still watching, and on a watch's last day what it will do if nothing
  came. The cards a watch turns up (Karen's budget holder, Felton's director) have no day.
  Felton's director used to wait on the offer being sent; its own trail said on Stephen's reply
  saying budget again, so it now waits on that.
- Every day ends past its last card, and that end is not a card (the user's call, by looking:
  https://claude.ai/artifact/CdpkU44FdAYVj8NecebAfg). It is the card's own shape, same size and
  corners, as a faded outline with no fill and no shadow, so it speaks the cards' language
  without being one. In it, the card's big words in grey ("No more cards today.", or "No cards
  on Saturday.") and the watches under them. That writes what comes after the day's last card,
  which was open. Tried first: a card saying "That's all for today" (the user was not convinced),
  then, on the ground with no outline, Apple's empty state, an inset list, and big words alone.
  The content inside the outline was my pick (big words); the user asked only that the shape be
  the card's exactly.
- The phone draws the day picked on the week strip. A draft that is not mail (the brief, the
  Slack message to Simon, Tarlton's portal questions) opens under its own title and hands over
  with the card's own words ("Add to the Invite", "Open in Slack", "Copy for the Portal").
Passed over: a fixed number of cards a day, and waiting cards shown faded (decided 16 September,
see "The card model"; kept in the library page, where a card's "Waits for" is still shown).

## How a card is presented

The playbook follows Apple's Human Interface Guidelines, and the phone follows iOS. Each part of
a card is one Apple component, so a card never needs a component of its own. There is one
exception: the reply sheet is the playbook's own component (see the phone paragraph above), its
anatomy copied from Claude's phone app and built from the kit's tokens, so the modules read as one
family. The phone also has a look of its own (typeface, colour and the card's material; see the
phone paragraph above), set as tokens over the kit. The desk's table of components went to
`_archive/desk/README.md` with the desk.

Wording follows the HIG's writing rules where it is interface text: button labels in title case
and starting with a verb ("Send Message", "Not Now", "Undo"), everything else in sentence case,
section headers short noun phrases. The cards keep their own first-person voice.

Where the browser cannot do the real thing (sheet physics, the Dynamic Type ladder) the playbook
does the nearest plain thing and says so in a stylesheet comment. The glass material is turned off
on purpose: bars, capsules and buttons are solid surfaces with a hairline. Apple has no toast; the
phone's banner is the nearest honest thing.

## The ladder (where a deal stands)

cold → engaged → coalition → partial → full

## The councils

| Council | Stands at | Notes |
|---|---|---|
| Bramley District Council | engaged | Karen Hughes is the only live door. Budget meeting Thursday 20 August. Budget sits with the Director of Resources, Martin Hodgson |
| Westmoor County Council | coalition | Gary Pearson champion; Rachel Gill joined the thread 8 September; no budget holder seen yet |
| Holbrook Metropolitan Borough | engaged | Neil Chapman; procurement window closes 16 October |
| Ashworth Borough Council | cold | four notes from you since May, nothing back |
| Burnham City Council | engaged | Lisa Holmes; digital strategy published Friday 11 September |
| Felton District Council | coalition | stuck on price with Stephen Walsh; Shabana Akhtar for it; David Marshall not yet in |
| North Ridley Council | engaged | demo Thursday 17 September 10:00; think BOPS replaces their case system |
| Moreton Borough Council | engaged | Julie Barker left; her auto-reply names Sanjay Mistry |
| Tarlton Borough Council | cold | tender out 9 September, clarifications close 2 October, tender closes 9 October |
| East Marston County Council | full | the customer. The case study every other council gets shown; live fourteen months |

Twelve councils have no named person: Ashby, Brinsley, Carlton, Denby, Fulford,
Glenfield, Hatton, Kirby, Linton, Newby, Orton, Rowley.

## The cast

- **Karen Hughes**, Head of Customer Services, Bramley. Used to reply within a day; slowed since the budget meeting.
- **Martin Hodgson**, Director of Resources, Bramley. Holds the budget. Not on any thread.
- **Gary Pearson**, Service Design Lead, Westmoor. Your champion. Asked on 10 September whether BOPS can import their case records.
- **Rachel Gill**, Head of IT, Westmoor. Met you Tuesday 8 September, joined Gary's thread the same day. Has twice asked "will officers actually use it". You owe her the data-residency note.
- **Neil Chapman**, Digital Transformation Lead, Holbrook. Warm, slow rhythm, roughly every six weeks. Books calls when you propose them.
- **Lisa Holmes**, Director of Digital, Burnham. Quiet but friendly. Led the digital strategy.
- **Stephen Walsh**, Finance Business Partner, Felton. The price objection is his.
- **Shabana Akhtar**, Digital Lead, Felton. For it. Has mentioned her director twice.
- **David Marshall**, Director of Communities, Felton. On no thread yet.
- **Michelle Turner**, Programme Manager, North Ridley. Running Thursday's demo.
- **Julie Barker**, formerly Service Improvement Lead, Moreton. Left; her email bounced this morning.
- **Sanjay Mistry**, Digital Programme Manager, Moreton. Named in Julie's auto-reply. Never spoken.
- **Darren Cole**, procurement contact, Tarlton. Named in the tender. Never spoken.
- **Nicola Shaw**, Head of Digital, Ashworth. Your colleague Simon knows her.
- **Andrew Doyle**, Head of IT, East Marston. Happy to do reference calls.
- **Simon Ward**, your colleague in partnerships. Well connected across the sector.
- **You.** Fede, the seller. Warm, plain-spoken, allergic to "just checking in" emails. You delete the tool's pleasantries.

## Evidence and documents you can point at

- The **East Marston case study**, with a page of officer feedback: case admin down by about a third.
- The **officer-time one-pager**: the one-page summary of that saving.
- The **East Marston phasing note**: how they took BOPS in stages. Finished 11 September.
- The **data-residency note**: where the data lives and who can see it. Updated 2 September.
- The **records import note**: how import works, in stages.
- The **partial rollout price sheet**: one service, live cases, about a third of the price.
- The **alongside one-pager**: how BOPS sits beside an existing case system.

## What is connected

Gmail, Calendar, Drive, Meet, Slack, and the open web. **LinkedIn is not something the tool can
connect yet** (the user, 22 September: what it can offer today is the Google accounts, Slack, the
web and a CRM, beside everything told), and several cards say so where it would have helped. The
Connect LinkedIn card went with it: a card must not ask for what the tool cannot do, so the
Connect kind has no card in any world now, and the week's Monday is one card shorter.
