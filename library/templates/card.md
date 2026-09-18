---
# THE TOP RUNG. One doc per card, at library/cards/<id>.md.
# A card is ONE PREPARED NOUN with its reasoning on the back: what the tool would say to the
# seller, written as if the tool already existed. Unlike every floor below it, a card is NOT
# agnostic: it names real people, councils and documents from library/world/.
# The card is where the ladder comes out. `signal` is what it rests on and `counts` are the
# numbers it may quote; both MUST resolve, because that join is what stops a card floating.
# Two layers: FRONTMATTER is the machine layer; THE BODY is the card's words, in the tool's
# own first-person voice. Plain English, British spelling, short sentences, no em dashes.
id: <kebab-slug>              # unique across the library; by convention <label>-<who>-<what>
kind: <act|ask|connect|told>  # the shape of the card
label: <Sustain|Advance|Expand|Ask|Connect|Told>   # for kind: act, one of the first three, and
                              # it MUST be among the modes of the signal above it
order: <n>                    # the LAST tie-break only. build.js places each card by what waiting
                              # a day would cost (see ../modules/00-spine.md); keep this in step
signal: <signal-id>           # the main read this rests on. MUST resolve to ../signals/*
signal_status: provisional    # read off the card, not yet decided
supporting: [<signal-id>, ...]  # optional. Other reads the card also leans on, e.g. a gift that
                              # comes from Loose end on a Cooling champion card.
supporting_status: provisional
counts: [<count-id>, ...]     # the numbers this card quotes. Each MUST resolve to ../counts/*,
                              # and MUST belong to the signal or one of the supporting signals
counts_status: provisional
person: <person-id>           # who it is about. MUST resolve to ../world/cast.md; `you` for a
                              # card about the seller's own setup
council: <council-id>         # optional: where. MUST resolve to ../world/councils.md
documents: [<document-id>, ...]   # what it offers or attaches. Each MUST resolve to ../world/documents.md
widgets: [<widget-id>, ...]   # optional. At most two DETAIL widgets from ../widgets/*, shown in
                              # the details between What happened and Still unclear. Each needs a body
                              # section headed with the widget's label, its rows in the widget's
                              # row form, and must be fed by something this card rests on.
sure: <sure|likely|a hunch>   # how sure, earned from the WEAKEST evidence the card stands on:
                              # sure = a fact on record (a bounce, a date in a tender),
                              # likely = a pattern against their own usual (silence),
                              # a hunch = a reading of someone's words. One step down for a
                              # source not connected, too little history, or one sign alone.
                              # Never a number. See ../docs/reading-principles.md, section 6.
sure_because: <one line>      # required with `sure`: what it stands on, shown under the word
when:                         # omit entirely when the card is a "whenever"
  mode: <fresh|dated|rhythm>  #   fresh = stale in days. dated = the world sets it. rhythm = a window.
  words: <the one small line shown on the front>
  until: <YYYY-MM-DD>         #   for mode: dated only
held_by: <optional card-id>   # this card ripens only after that one lands; shown faded until then
held_words: <optional line>   # with held_by only: the line a held card shows in place of `when`
reply:
  module: <buttons|choices|several|field|draft>   # the reply widget. MUST resolve to ../widgets/*
  placeholder: <...>          #   field only: the grey words in the empty field
  header: <...>               #   several only: the list header over the picks
actions:                      # the buttons on the front, first one filled. Title Case, starting
  - label: <Title Case Verb ...>   #   with a verb, e.g. Send the Note, Not Now
    style: <filled|tinted|plain>
    opens: <draft|reasons>    #   optional: raises the draft sheet or the Not Relevant reasons
    says: <...>               #   optional: what the tool says back once it is pressed
    confirms: <picks|field>   #   optional, for several and field: confirms the answer
    limit: <n>                #   with confirms: picks only
reasons:                      # optional: the three one-tap whys behind Not Relevant
  - label: <Title Case>
    says: <...>
answers:                      # choices only: the rows of an Ask; one may be `suggested: true`
  - label: <...>
    says: <...>
picks: [<...>, ...]           # several only
notsure:                      # optional: Still unclear as a one-tap question, two or three replies
  - label: <Title Case>
    says: <what that answer changes>
draft:                        # optional, with a `## The draft` section in the body
  title: <...>
  hand: <Title Case Verb ...> #   the sheet's button, matching where the note goes (Send where mail is connected, Open in Mail where it is not)
  sub: <...>
  footer: <...>
---

# <the action, as the card's title>

<!-- The front. One or two lines of reason, no more. Say the why plainly; the numbers that
     back it belong on the back. For a Sustain card the reason MUST name the gift: what the
     other person gets out of it. A card is an observation with a suggested move, never a
     task: no due dates, no owners, no statuses. -->

## What happened
<!-- ACT CARDS. The first bullet is the why-now, and it earns the card its place today.
     Each later bullet is one observation. Where a bullet quotes a number, that number must
     come from one of the `counts` above, said in plain words rather than as an id. -->

## <a detail widget's label, e.g. Timeline>
<!-- ONE SECTION PER WIDGET in `widgets`, headed with its label exactly. Rows only, each a list
     item in the widget's row form, parts split by " · ". Every row must trace to a record
     named in Sources, and use only names, dates and numbers the card already holds. -->

## Sources
<!-- ACT CARDS. One row per thing read, in the form `<source-ids> · <words>`, e.g.
     `gmail · Your mail with Karen, March to today: 15 messages`. The source ids are channel or
     told ids (gmail, calendar, drive, goal-told…); the card shows their names beside the words,
     so the words need not repeat them. build.js checks every source is reached by what the card
     rests on. The goal and the list of targets are `goal-told`, always reachable. A source that
     a read needs but that is not connected (LinkedIn) is a data gap: say it in your own words,
     or the build adds a plain line saying it. -->

## Still unclear
<!-- ACT CARDS. One sentence naming the honest doubt. Where the seller holds the answer, it
     may become a one-tap question with two or three replies, and each reply says what it
     changes. Ask for facts, never for a verdict the tool should reach itself. -->

## What happens next
<!-- ACT CARDS. What happens after the seller acts: what the tool will watch for, and when it
     will come back. If it would come back with the same reason twice, say what it will do
     instead. -->

<!-- ASK CARDS use four different sections in place of the four above:
       ## Known so far                what it has worked out for itself, so the ask is not lazy
       ## What's missing              the precise point it could go no further, having looked first
       ## What your answer changes    each answer's consequence, said back after the pick
       ## Where your answer is saved  which told record the answer becomes, so it is asked once
     CONNECT CARDS name the source that is not connected and what would become answerable.
     TOLD CARDS are an outcome with nothing to do; the button is Got It. -->

## The draft
<!-- Optional, for a card whose action opens a prepared message. The note itself, in the
     seller's voice, as plain paragraphs. Nothing sends without the seller's say-so. -->
