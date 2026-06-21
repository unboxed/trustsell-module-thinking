---
id: proof-library
floor: assembly
label: Proof library
blurb: The company's general proof, gathered into one shelf and tagged for what it proves.
about: an organisation
deterministic: true
inputs:
  - proof-tag
  - file
  - file-content
---

# Proof library

Gathers the company's general proof into a single shelf: the case studies, collateral and track
record filed in Drive (`file`, and its exported `file-content`), each lined up with the told
`proof-tag` that says what it proves and for whom. Keyed by the claim a document backs and the
customer-type it fits, so the right proof can be found for a given claim or customer. *Everything the
company can point to, on one shelf, labelled.*

This is **floor, not reading**: nothing here is judged. It does not decide whether a proof will land
or which case study wins a deal; it only gathers the documents and matches each to its told tag. The
only real work is identity and grouping, deciding which Drive file is the one a `proof-tag` names, and
which shelf (company-general here, product-specific in Offerings) a file belongs on. That is
arithmetic, not opinion. The Match job that reads this shelf, finding the best-fitting proof for a
claim, lives in the module prose, not as a signal: Organisation has no signal floor.

Where a claim has a `proof-tag` but no Drive document behind it, the shelf shows the hole plainly, a
proof gap named not faked, rather than implying a document that is not there.

> Lineage note: `proof-tag` resolves to [`../told.md`](../told.md), the organisation's own told
> source. `file` and `file-content` resolve to
> [`channels/drive.md`](../../01-integrations/channels/drive.md). The split with Offerings is
> responsibility, not access: both read the same Drive, but company-general proof is gathered here and
> product-specific proof in Offerings' `offering-entry`.
