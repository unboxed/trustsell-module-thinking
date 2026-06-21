---
id: compliance-fence
floor: assembly
label: Compliance fence
blurb: The company's hard limits, gathered into one fence a draft must sit inside.
about: an organisation
deterministic: true
inputs:
  - rule
  - house-voice
  - file-content
---

# Compliance fence

Gathers the company's hard limits into a single fence: the told `rule` records (what can never be
claimed, what must always be said, words and tones to avoid), the `house-voice` band a message should
sit in, and the exported `file-content` of any brand or compliance document in Drive they are drawn
from. Each limit is grouped by kind (compliance, legal, brand) and marked hard or soft, so the Gate
knows which lines are walls and which are strong preferences. *Every line the company cannot cross, in
one place.*

This is **floor, not reading**: nothing here is judged. It does not weigh whether a draft is on-brand
or rewrite it; it only gathers the rules into one fence. The only real work is grouping and resolving,
deciding which told rule a Drive brand-doc passage confirms, and keeping the hard limits apart from the
soft preferences. That is arithmetic, not opinion. The Gate job that reads this fence, checking a
finished draft against it and passing it or flagging exactly what crosses a line, lives in the module
prose, not as a signal: Organisation has no signal floor.

A limit that is really a judgement call ("do not sound pushy") is held as a soft rule and flagged as
such, rather than dressed up as a wall it cannot enforce deterministically. Used solo with no
organisation behind you, the fence is empty and the Gate step is skipped.

> Lineage note: `rule` and `house-voice` resolve to [`../told.md`](../told.md), the organisation's own
> told source. `file-content` resolves to
> [`channels/drive.md`](../../01-integrations/channels/drive.md), the brand or compliance document a
> rule may point at. The boundary between this fence and Profile's personal voice at render time is an
> open seam, worked in both modules' prose.
