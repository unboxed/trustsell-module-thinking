# The pretend world

For the story of the tool, told from the start with the why of each part, read `story.md`.
This file is the card model, the world and the log of decisions.

Every card in the playbook is written as if the tool already exists and is talking to **you**, the
seller. To keep the cards consistent they all share one world and one card model. The card model
and the decisions live here. The world itself (goal, cast, councils, documents) is data in
`library/world/`, because cards reference it by id; add there before using a name, a date or a
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
- **Act.** The tool prepared a noun, you do a verb toward someone. Labelled Sustain (keep a
  relationship alive), Advance (move a deal forward) or Expand (start a new relationship).
- **Ask.** The tool needs one fact only you hold, and the answer changes what it does. The button
  is the answer. It has looked first and says where it ran out. It asks for facts (what happened
  offline, what you intend, what you prefer), never for verdicts it should reach itself. A check
  ("I read Rachel as cautious. Right?") is allowed.
- **Connect.** A source it cannot see.
- **Told.** An outcome with nothing to do: the *Then* of an earlier card coming back ("Julie's
  email bounced this morning"). The button is Got It.

Early on the home is mostly Ask. Later it is mostly Act. That ratio is the learning curve. An Ask
is the general way the tool learns what it cannot observe, not only about a person: your tone, which
councils matter most, what is new about the product. A fact that does not shift is told once; what
shifts is asked when the answer would change something, and every answer is kept, so nothing is
asked twice. There is no settings screen (decided 18 September).

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

**How sure**, one word beside "The thinking" where it matters: *sure* (a fact on record: a bounce),
*likely* (a pattern against their usual: silence), *a hunch* (a reading of someone's words). Never
a number. The weakest ground sets the word, and a line under it says what it stands on (decided 18
September; the rule is in `library/docs/reading-principles.md`).

**Guardrails.** Every Sustain card names what the other person gets. "Not Relevant" asks why in
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

**The phone.** Slides that explain the concept; they are not screens of the tool. The tool is a
desktop platform and a phone app both; the phone is where the thinking is done because one card
on a small screen is easier to think through than a full desktop platform (the user, 18
September). All of them
live in `deck.html`, one shown at a time. The first, "The idea", is words only: it states the
argument before anything is demonstrated, that people work the verbs and the tool works the
nouns. The second, "Your day on mobile" (called "The phone" until 18 September), is the prototype: the title
and a line about the idea on the left, one iPhone on the right at almost the room's full
height, and it works (the card's action raises the reply sheet, a row can be chosen, the
close button lowers it). The third, "The modules", shows the modules as bare reply
sheets in a row, no phone around them, each captioned by its module. Only the middle of the
sheet differs. The last of them, "A draft", shows what the sheet does when the tool has
written something for you. Claude's card also has version pills (A and B) and a copy button;
both are left off the slide for now. The fourth, "The details" (18 September), shows three phones
side by side, one card each, chosen so the three replies differ: Karen's Send Message (a
draft), Ashworth's Rest It (one tap, with One More Try raising the last note) and the Ask
about Rachel's meeting (Answer raises the Choices sheet). Scroll each into its details, which
follow the spine with the card's widgets in place. The words and rows come from the cards in
`library/`, copied in by a one-off script, so the slide says only what the cards say. Felton
and Rachel's promise card also carry widgets (People, Their words, Open items, Documents) but
are not on the slide: their replies are drafts too. Holbrook's window card carries a Timeline
and is not on the slide either. The fifth, "How a card is built"
(18 September, by looking, after four rendered sheets: a full tree, one thread, rings, then
https://claude.ai/artifact/U4dtpbqQJmpbFp5k5hdES6 where "B · Pyramid" was chosen), shows Karen's
card at the peak of a pyramid. The channels are the ground, each with the records it gives;
above them the gathers, the counts and the reads, so the shape narrows as it compiles. Unlike
the other slides it is not typed: `deck.js` draws it from `data.js` when the deck opens, so it
follows the library. A dashed line is a join not written yet (a count that cannot yet say which
gather it counts within). Passed over: rings with the card at the centre, which could not fit
the long names; one thread, which left the rest of the card on trust.

The deck, "The room" (decided 17 September, by looking, on one sheet of three rendered
directions: https://claude.ai/artifact/YJCZrrjxT3N7iKS5pDse1b). There is no panel. The slide is
the ground itself, the same pale cool ground by day and near-black by night that the card was
drawn against, so the phone stands in the room rather than on a tile inside it. The words sit
left in a fixed column and the figure right, both at the ground's level, with 64 pt of padding
top and bottom and 72 pt at the sides. The title is the card's big words one step up, 72 on 66
in the phone's face, and the line under it is small and quiet. The way out, the arrows and the
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
the ground still bleeds to the edges. The modules slide is not capped, because a bare sheet is
allowed to grow. A slide whose body is a row of figures (the modules, the details) has
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
stay put while the cards move, and follow the card in view. There are three cards (Karen,
Ashworth, the Ask about Rachel's meeting) because only three are built; which cards make a day,
and in what order, is not written yet. Passed over: "Act or Skip to move on", where only a
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
break the rule that cards carry no due dates. What a later day shows is not written yet, so the
card stays the same whichever day is chosen. Only the four `dated` cards have a real day today;
every other card would need an "arrives" fact first. Passed over: the strip above the count,
which pushed the card 50 pt down, and a smaller strip between the menu buttons, which left the
compact title nowhere to go. The strip fades with the count's timing as the card becomes a page,
and "Today" gives way to the card's title in the bar. The three phones on "The details" keep
their count.

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
own state. The last card has no hint and does not slide, because what comes after the day's last
card is not written yet. After a reply it is two thumbs and a note; after
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
iOS large title does. After a hairline come the details, as prose: section heads, paragraphs,
and records as plain lines. No grouped tiles. For now the details are the library card's
thinking retold: "The story so far" (what I noticed, as a story), "What I read" and "Then".
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
Connect; Got It and Open the Thread.

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
cannot inherit it. Four choices. *Big words*: the title is the design, very large, tight and heavy (38 on 40, down from 48 on 46 on 18 September),
and everything else is small and quiet. *Plus Jakarta Sans* is the phone's face, carried in the
fonts folder as Inter is; the status bar keeps the system's. *No colour on buttons*: the filled
action is ink, or white in the dark, and the kind's dot is the only colour on the screen. The
kind's name is in sentence case and badges are outlines. *The card matches the room*: by day a
glazed white card on a pale cool ground, with a lit top edge and one deep soft shadow; by night
all slate, a near-black ground and a lighter slate card with a faint sheen and a lit edge. Tried
and passed over on the way: recolouring Apple's kit, a card tinted by its kind, a white card on
deep green set in Baskerville, a ruled docket, paper and frosted glass as materials, a slate
card kept by day as well, and the kind glowing in the slate. The library page has not taken the look and is still Apple's blue and SF Pro. (The desk never
took it either, and was archived.) The kind's dot is pinned to the blue itself rather than to the accent, because the accent
is ink here and an Advance dot was coming out black. Long titles will
need a smaller step than 38; not built. The wider face wraps the draft's subject onto two
lines, so the tallest bare sheet is now 588 pt.

The details have a fixed spine and a catalogue of widgets (decided 18 September, by looking, on one
sheet of rendered options: https://claude.ai/artifact/DnMav6ETmx2HwEnYtXEn7K). The spine is the
same on every card: Why now, The story so far, then one or two detail widgets, then Not sure,
Then, and What I read. Ask cards keep their own section names in the same places. The widgets
are a catalogue the tool picks from and fills, as the reply modules are, and they live in
`library/widgets/`. They are close to Google's A2UI, where an agent picks components from a
catalogue and fills them with data, but with one difference, on purpose: ours are large and
specific and sit in a fixed place, so the tool chooses and fills them but never arranges them.
That is what lets a seller learn the set once. There are six detail widgets, told apart by
shape: *Timeline* (a line of dots, today's filled), *Their words* (a quote in large type with a
rule beside it), *People* (a name in bold, the role beside it, where they stand underneath),
*Open items* (an empty circle, what is owed, its age on the right) and *A number against its
usual* (the figure in the card's big words, a bar against a bar). *Documents* (a file, what it proves,
how recent) was added the same day, when the widgets were checked against the records rather
than the cards: every record carries a time, a person, some words or a file, and Documents was
the missing one. Open items reaches no record yet, because it rests only
on counts and none of its counts can say yet which assembly it counts within; it says so with
`waits_on: counts`. A number against its usual reaches records since 18 September, when each count
that could name its assembly did. A card says two things, why to write and what to
send, and they are two trails in the library (decided 18 September, by looking:
https://claude.ai/artifact/DCS9ZqFCFLqoj2Xd4QaHMQ). Why to write goes down through the signal.
What to send hangs off the card itself: a card that names `documents` rests on the proof
library too. Passed over: the signal reading the proof library, which would have made every
card on that signal lean on documents even when it sends nothing. The look chosen is "Each shape
drawn"; tried and passed over on the same sheet were "Plain lines" (the blocks looked alike)
and "Meta beside the words" (a quiet left column on every block). Ink only: the kind's dot stays
the only colour. A message history is a Timeline; promises and blockers are both Open items.
Every row traces to a record in What I read. Six cards carry widgets so far: Karen, Ashworth, the
Ask about Rachel's meeting, Rachel's promise, Felton's director and Holbrook's window. North Ridley's
demo brief could not take People at first, because its signal, `lead-with-this`, does not read who
is in the room; it now rests on `new-stakeholder` too, so it could, but none is placed yet. On the
phone the widgets show only on "The details".

Not decided: how widgets look at night, whether a widget can be tapped through to its records,
whether the draft becomes a `reply.module` of its own, what a swipe does, the names and the list of the details' sections ("The story
so far" is the user's; the other two are borrowed from the old desk), whether "Not sure" and "how
sure" belong in the details, what the two menu buttons are, and what the count line counts. Also open: whether one-tap replies (That's Right and Not Quite; Got It) move from the
Buttons sheet to the front, as the message card's have; the names the signal writes on the
front's actions for the other modules; whether the sheet's pager stays when a card asks one
thing only (it sits close to "1 of 5 cards"), what Skip does next (the next card arrives, and what Not Now and Not Relevant each
change), whether
Skip is needed once the card is a page, whether modules chain (what follows "Not Quite"), and a later slide that
shows one module serving many signals.

**The box.** A place to ask about a person, a council or a deal. It answers with cards where
cards exist (it moves them to the top of the home) and with a paragraph where they don't. Every
answer carries *What I read* and a *Then*, same as a card's back, and a "how sure" word where it
matters. A question the tool cannot answer can turn into an Ask ("if you know who holds the
budget, a name is enough"). A question the cards should already have answered ("who's going
cold?") is a signal that the cards surfaced too late, and the answer says so.

An answer is not a new kind of card. The vocabulary stays at six words.

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

## Proof and documents you can point at

- The **East Marston case study**, with a page of officer feedback: case admin down by about a third.
- The **officer-time one-pager**: the one-page summary of that saving.
- The **East Marston phasing note**: how they took BOPS in stages. Finished 11 September.
- The **data-residency note**: where the data lives and who can see it. Updated 2 September.
- The **records import note**: how import works, in stages.
- The **partial rollout price sheet**: one service, live cases, about a third of the price.
- The **alongside one-pager**: how BOPS sits beside an existing case system.

## What is connected

Gmail, Calendar, Drive, Meet, Slack, and the open web. **LinkedIn is not connected**, and several
cards say so where it would have helped.
