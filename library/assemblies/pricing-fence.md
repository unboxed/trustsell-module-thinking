---
id: pricing-fence
module: 04-organization
label: How far the price can move
blurb: The company's discount limits, gathered into one envelope a deal's price must sit inside.
about: an organisation
deterministic: true
inputs:
  - organisation-told#pricing-authority
  - drive#file-content
---

# How far the price can move
## What it gathers

Gathers the company's discount governance into a single envelope: the told `pricing-authority` record
(the standard discount ceiling, who signs off beyond it, the floor price if there is one) and the
exported `file-content` of any pricing sheet in Drive it is drawn from. Each limit is marked hard or
soft the same way the compliance fence marks its rules: the floor is a wall, the standard ceiling is
the line beyond which sign-off is needed. Every line the company holds on price, in one place. The
sibling of `compliance-fence`: one fences words, this one fences money.

It does not decide how far to discount this deal; that is the Brain's call (the deferred deal-specific
discount room, which reads this fence to know the envelope it must stay inside). It only gathers the
governance into one place. The only real work is grouping and resolving: lining up the told ceiling and
floor with any Drive pricing sheet that confirms them, and keeping the hard floor apart from the
sign-off line.

Keep this apart from Offerings' price reading: `03`'s `price-position` and `price-barrier` work the
per-offering price (what the offering costs, how far its own told discount room reaches against
rivals). This is the org-level governance that sits above every offering, the authority and the floor
the whole team shares. The two are different things; this one is the envelope, that one is the number
inside it.

Where the company has set no ceiling, sign-off or floor, the fence shows the hole plainly, a told gap
named not faked: used solo with no organisation behind you it is empty, and pricing is left entirely
to the user.

## Lineage

`pricing-authority` resolves to [`organisation-told.md`](../told/organisation-told.md), the organisation's own told source.
`file-content` resolves to [`channels/drive.md`](../channels/drive.md), the pricing
sheet a ceiling or floor may point at. The Brain's deferred deal-specific discount room is the
downstream that reads this fence; the static governance lives here, the per-deal judgement sits with
staging.
