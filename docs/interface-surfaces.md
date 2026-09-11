# The interface foundation — creating Contacts, Organisations, and Deals

The other docs reason about how the modules *think*. This one turns to how a person *sees
and touches* the tool, and it deliberately starts at the ground floor: the plain act of
**creating a Contact, an Organisation, and a Deal by hand**, and how those three link.

The tool's larger vision is that the assistant discovers most of this on its own from your
connected inbox. That is real, and it has its own section near the end. But it is the
**growth on top of this foundation, not the starting point.** You should be able to sit
down on day one, with nothing connected, and build up your own Contacts, Organisations, and
Deals the way you would in any address book. So this note designs that floor first.

One principle carries over from the bigger vision, because keeping it now costs nothing and
saves a rebuild later: **a record you create by hand is the same record the assistant later
enriches.** There is no separate "manual" object and "auto" object. You make a Contact; in
time it grows a history, and each thing it knows carries where it came from (you typed it,
or it was found). Manual create is the floor of one object, never a throwaway.

---

## First, the word "Organisation" means two things

This trap is worth clearing before anything else, because the interface must never blur it:

- **The buyer's Organisation** is one of the three things you create. The council you are
  selling to. This is what the rest of this note means by "Organisation".
- **Your own company** is a different thing entirely. It is module `04`, and it lives in
  **Setup**, not in your list of buyers. It holds your proof, your brand, your rules. It is
  *you*, not a target.

They should never share a label on screen. The recommendation is to call the buyers
**Organisations** and your own **Your company** (in Setup), so no screen is ambiguous.

---

## The three things you create

Three entities, each with a **create** action, a **list view** where they gather, and a
**detail view** you click into. They share one shape so the whole tool feels like one system.

### Create a Contact

The simplest record, and the one you reach for most. The form:

- **Name** and **email** — the two facts that make a contact a contact.
- **Organisation** — the field you asked about. It lets you **create a new Organisation on
  the spot, or pick one you already made.** If you leave it empty, the contact simply has
  no Organisation yet. That is a gap to fill later, not a wall that stops you saving.
- **Why they matter** (optional) — a short note only you can give: "she's my ex-colleague",
  "he decides even though he's quiet". This is the kind of context no inbox would ever
  reveal, so it is worth a field of its own.

On save, the contact lands in the **Contacts** list, and also shows up under the people of
whichever Organisation you chose.

### Create an Organisation

The buyer's company. The form:

- **Name** and **domain** (say, `camden.gov.uk`). The domain earns its keep later, when the
  assistant uses it to attach discovered people to the right Organisation, but at the
  foundation it is just a fact about the company.
- **Its Contacts** — you can **add existing Contacts to it, or create new ones inline**
  without leaving the form. The Organisation's detail view then shows its people, and later
  its deals.

You can also create an Organisation with **no contacts at all**. That is how you seed a
**target** you want to break into before you know anyone there. The empty seats are a fact
about the account, not a mistake.

### Create a Deal

The richest of the three, because a deal pulls the others together. A deal is one selling
effort, the thing you actually sell into, which is neither a lone person nor a whole company.
The form:

- **Name** — a plain name for the effort ("BOPS at Camden").
- **Offering** — which of your products this deal is about. This is the one field that most
  separates one deal from another: the same people talking about two products are two deals.
- **Organisation(s)** — the buyer. One is the **primary** buyer; you can add more, because a
  deal is allowed to reach across companies (a reseller or an introducer can sit inside it).
- **Contacts** — the people involved, drawn from those Organisations or from across them.

The deal's detail view gathers **offering, organisations, and people** into a single
picture. Note what is *not* on this form: how far along the deal is, whether it is healthy,
whether it is worth chasing today. That is intent, and it belongs to the Brain later, not to
the person filling in a deal.

---

## How the three connect

The links, and their shape, kept at the level of what the screen does:

| Link | Shape | Set where |
|---|---|---|
| Contact → Organisation | one primary, optional at first | the Contact form (create-on-spot or select) |
| Organisation → Contacts | one holds many | the Organisation form, or from a Contact |
| Deal → Offering | exactly one | the Deal form (the primary separator) |
| Deal → Organisation | one primary, sometimes more | the Deal form |
| Deal → Contacts | many, may span Organisations | the Deal form |

Two of these are worth saying in words, because they are where this tool differs from an
ordinary address book. A **Deal reaches across Organisations**: its people are not required
to share a company, so a partner from outside the buyer can still be inside the deal. And a
**Deal has exactly one Offering**, which is what tells two deals apart when the same people
are talking about two different products.

---

## The entity views (the tables)

Your original instinct, made concrete. Each entity gets a **list view**: a table of rows
with a **create** button, columns you can sort, and a search or filter bar across the top.
Click a row and you get that entity's **detail view**. The three list views and the three
detail views share one anatomy, so learning one teaches all of them.

- **Contacts** — rows of people (name, Organisation, why they matter). 
- **Organisations** — rows of companies (name, domain, how many people, how many deals).
- **Deals** — rows of efforts (name, offering, primary Organisation, how many people).

The detail view is where a single record opens up: its fields at the top, its links laid out
(a Contact shows its Organisation and the deals it is in; an Organisation shows its people
and deals; a Deal shows its offering, organisations, and people).

---

## Where Profile and Your company live (Setup)

Setup is a place apart from your buyers, holding the things that are about **you**, not about
a target:

- **You / Profile** (`05`) — your name, email, a short bio, and how you want to come across.
  The floor is a light handful you type once; the tool leans on it from the first message.
- **Your company** (`04`) — optional, and shared by everyone at your company: the proof, the
  brand voice, the rules you must sell within. A solo seller can skip it entirely and the
  tool still works.
- **Connections** (`01`) — where you plug in your accounts. The foundation can leave this as
  a stub and light it up when the assembly layer arrives.
- **The Goal** (`00`) — what you are trying to achieve, pinned to an offering. This can come
  after your entities exist, and it is a short back-and-forth, not a form to fill.

The line to hold: **Setup is about you; the entity views are about the people and companies
you sell to.** Keeping them in separate parts of the app is what keeps the two meanings of
"Organisation" from ever colliding.

---

## The growth path (assembly, later)

This is the vision the foundation is shaped for, written here so the shaping makes sense, not
as something to build first.

Once you connect your accounts, the same Contacts, Organisations, and Deals you made by hand
start to **fill themselves in.** A contact grows a history of your emails and meetings. New
people appear on a deal's threads and offer themselves as members. An Organisation's roster
fills from the shared email domain. None of this makes a second, parallel record: it lands on
**the object you already created**, and each field carries its **provenance**, whether you
typed it or it was found.

The one rule that makes this work, and the reason the foundation looks the way it does:
**a record you created and a record the assistant discovered are the same kind of thing.**
The "create" button and a future "confirm what I found" button produce one object. Build the
floor as real records now, and the assembly layer has somewhere to land.

---

## Reusing the blueprint's look

So the working tool reads as one family with the existing blueprint app, lean on what is
already there:

- **The card** — `rounded-[18px]`, with the eyebrow / title / blurb rhythm the module and
  play cards already use.
- **The list row** — the label-pill-plus-chips row from `channel-panel.tsx` is the closest
  existing thing to a table row, provenance tooltips and all.
- **The detail view** — the two-column spread from `play-spread.tsx` (a title band, then a
  main column beside a sticky rail of labelled data rows) is a ready shape for an entity's
  detail.
- **The toolbar** — the search-plus-tabs-plus-toggles header from `playbook.tsx` is a
  ready filter bar for a list view.
- **The icons are already chosen** — in `play-card.tsx`: person `User`, Organisation
  `Building2`, deal `Handshake`, offering `Package`, conversation `MessagesSquare`.

## Open questions

- **How much of an Organisation is typed vs pulled.** At the foundation the domain is just
  typed. Later it drives the roster. Where exactly the handover sits is open.
- **How a Deal's people grow.** Today by hand. Once conversations exist, membership can be
  *proposed* from who is on the threads. Whether that stays a suggestion you confirm, or ever
  becomes automatic, is unsettled.
- **Whether a Contact ever has more than one Organisation.** The foundation says one primary.
  Some people genuinely wear two hats. Left open.
- **How Setup ripens.** The first-time flow is a light seed; over time Profile learns your
  voice from your edits. The path from one-time setup into a living profile is still to draw.
