---
name: "Offerings"
title: "Your offerings"
blurb: "Each product, who it suits, and the answers to the usual worries."
icon: package
optional: false
tier: assistant
modes: [advance, expand]
connects:
  - to: "00-spine"
    provides: "answers the brain's product questions, and the fit-shape of a good customer"
  - to: "02-relationships"
    requests: "the worry 02 has on record that needs answering"
    provides: "the rebuttal to it"
  - to: "04-organization"
    requests: "the actual proof from the library"
    provides: "which kind of proof a claim needs"
  - to: "01-integrations"
    requests: "market / competitor research and enrichment"
---

# 03 · Offerings

**Purpose:** The expert on each thing you sell — who it suits, how it's priced, and how to answer the usual objections. It also helps you *build* that profile in the first place, even proposing answers for you to react to when you don't know.

## What it owns
- **What each offering is** and the easy way in (the entry use-case).
- **The fit-shape** — who a good customer looks like.
- **Pricing and packaging** — the price points and the *menu* of levers.
- **Objections** — for each, the rebuttal and *what kind* of proof backs it.
- **The sales motion** — land-and-expand vs one-and-done, and the usual next step.

## What it doesn't
Decide the move for a real deal (Brain), hold the actual proof documents or the authority to discount (Organisation), or remember who said what (People). It knows the *general* playbook; "what to do about Jane today" is Brain's.

## Its routines
- **Setup (active, especially early):** co-author the product profile with you — the pitch, the fit-shape, pricing, the common objections. Its knowledge arrives three ways: **told** (what only you can give — the product, the pricing, a deck), **fetched** (researched on the open web through Connections, to ground its suggestions), and **supplied** (handed over by another module — the actual proof comes from Organisation). When you don't yet know an answer — your fit-shape, say — it doesn't stall: it **researches** a starting point, **proposes a draft for you to react to**, or **flags it** if the thing is genuinely only in your head. That propose-and-confirm move is the same one People makes reading a disposition off behaviour — the tool drafts the answer, you confirm or correct — only pointed at your own product instead of a contact. (Worked in `docs/how-modules-collaborate.md`.)
- **Day-to-day:** keep the profile sharp, refresh market and competitor intel, and prep rebuttals and proof for active deals. Over time it can also learn *what's landing* — which rebuttal and which proof tend to move a buyer — fed back by Brain when an outcome comes in (lighter than People's learning today).
- **On request:** hand over the **fit-shape** when People goes hunting. Offerings *defines* a good customer; it can't *scan* for them — it holds no contacts. People does the scan; Brain sets the intent.

## Who it works with
- Answers **Brain**'s product questions and supplies the fit-shape.
- Takes a worry from **People** and hands back the rebuttal.
- Tells **Organisation** which *kind* of proof a claim needs, and takes the actual proof back.
- Does its research *through* **Connections**.
