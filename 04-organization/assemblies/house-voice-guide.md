---
id: house-voice-guide
label: House voice guide
blurb: The company's brand voice, gathered into one positive style the render can write toward.
about: an organisation
deterministic: true
inputs:
  - house-voice
  - file-content
---

# House voice guide

## What it gathers

Gathers the company's brand voice into a single style guide: the told `house-voice` record (the
company tone, the required phrasings, the forbidden phrasings, the band a message should sit in) and
the exported `file-content` of any brand document in Drive it is drawn from. How the company wants to
sound, in one place, as something to write toward.

This is the positive half of the old fence, split out on purpose. The `compliance-fence` holds the
hard "never claim this, always say that" walls a draft is gated against; this guide holds the "sound
like this" style the render emulates. Two different operations: one checks a finished draft and can
stop it, the other shapes a draft as it is written. Keeping them apart gives the render a clean thing
to lean toward and keeps the fence to walls only. A genuinely hard brand wall (a phrase the company
can never use) stays a `rule` in the fence; the guide's forbidden phrasings are the softer "we don't
talk like that" preferences.

Nothing here is judged or guessed. It does not weigh how far to bend the house voice toward your own,
which is the render's persona-dependent blend (`05`), still an open seam; it only gathers the brand
voice into one guide. The only real work is grouping and resolving, lining up the told tone and
phrasings with any Drive brand doc that confirms them. That is arithmetic, not opinion; judgement
starts a floor up (see [`docs/reading-principles.md`](../../docs/reading-principles.md)).

Profile (`05`) is the downstream: at render it pulls this guide as the brand style to write toward and
blends it with the user's personal voice, leaning more on the house voice for someone who sells only
because their role needs it and more on the personal voice for a practised seller. That blend lives in
`05`'s prose, not here. Used solo with no organisation behind you, the guide is empty and the render
rests entirely on your own voice.

## Lineage

`house-voice` resolves to [`told.md`](../told.md), the organisation's own told source. `file-content`
resolves to [`channels/drive.md`](../../01-integrations/channels/drive.md), the brand document a tone
or phrasing may point at. The seam between this guide and Profile's personal voice at render time is
an open question, worked in both modules' prose.
