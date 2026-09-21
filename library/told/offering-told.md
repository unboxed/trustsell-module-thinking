---
id: offering-told
name: What you told me about what you sell
source: told
icon: pencil
---

# What you told me about what you sell
The facts only you can state about a product, the most deterministic ground there is, because you say
them outright rather than the tool inferring them from behaviour. They arrive three ways: you type
them into the tool, Offerings asks you for them (the propose-a-draft, you-confirm loop), or you upload
a file to Drive and Offerings reads them out of it. The `Source` column says which path each field
comes in by.

This is raw data, not reading: the told pile is Floor 1, the same floor as a fetched email, and
everything Offerings senses stands on it. Where a record is empty, that is a **told gap**, named not
faked: Offerings says "tell me X and I can run this", and can offer to research a first version from
the web for you to confirm.

**One entry is one thing on one set of terms** (21 September). Where you resell, broker or place
the same product with several suppliers, each supplier's version is its own entry, because that is
what you actually choose between: not the product in the abstract, but the product from that
supplier, on their terms, for the buyers they will take. `Supplier` is the record that says which;
left empty, the thing is yours and there is nobody behind it. The pitch and the worries repeat
across such entries, and that repetition is the price of the shape
([`docs/library-format.md`](../docs/library-format.md), *The catalogue*).

Each record below is a lineage anchor; its id is the kebab-slug of its
label (`Worry + answer` becomes `worry-answer`), and that is what the assemblies reference.

## Records

| Record | Field | Source |
|---|---|---|
| Pitch | what it is | you, typed or asked |
| Pitch | why it's worth buying | you, typed or asked |
| Supplier | who supplies it, where it is not you | you, typed or asked |
| Supplier | what you have to do to put a buyer to them | you, typed or asked |
| Fit-shape | customer size | you, typed or asked |
| Fit-shape | situation | you, typed or asked |
| Fit-shape | the problem it solves | you, typed or asked |
| Use-case | the situation it's best for | you, or read from a deck in Drive |
| Use-case | the angle to lead with | you, typed or asked |
| Pricing | price | you, or read from a Drive pricing sheet |
| Pricing | discount room | you, typed or asked |
| Pricing | term (how long it runs for) | you, typed or asked; empty for a thing sold once |
| Pricing | how it is paid (once, or how often over the term) | you, typed or asked |
| Worry + answer | the worry | you, or seen in a buyer's mail (via People) |
| Worry + answer | your answer | you, typed or asked |
| Worry + answer | the kind of evidence it needs | you, typed or asked |

## In plain words

What a person reads, where it differs from the record's label. The label, and the id made from
it, do not change.

| Record | Plain name |
|---|---|
| Fit-shape | What a good fit looks like |
| Use-case | Use case |
| Worry + answer | Worries and answers |
| Supplier | Who it comes from |
