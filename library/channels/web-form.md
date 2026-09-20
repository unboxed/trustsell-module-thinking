---
id: web-form
name: Web form
source: account
icon: clipboard-list
---

# Web form

The enquiry form on your own site, and the first thing a lead hands over. A submission is the
moment a stranger becomes a lead: they came to you, filled in what you asked, and said in their
own words what they want and how soon. That makes it the earliest record the tool covers, and the
only one where the buyer speaks first.

A submission carries when it came in, which form and page it came from, how they found the page
where the site records it, and the answers. The answers are one payload, not a fixed set of
fields, because what the form asks is yours: a broker's form asks for the business, the amount and
the monthly takings; a software seller's asks for the organisation and the pain. Which questions
your form asks is not written yet, and belongs in the scenario's `world/`, not here. What the tool
does with an answer (matching it against the fit-shape, reading urgency from their words) is
upstream, in the reads.

Which service holds the form (your site's own form, or a form service) is not decided, so the
Source column gives plain sourcing notes and no API names. Owned by Connections, fetched fresh
each time and carried untouched. No opinion is formed here and no content is kept. Each record
below is a lineage anchor. Its id is the kebab-slug of its label (`Form submission` becomes
`form-submission`), and that is what the modules' assemblies reference.

## Records

| Record | Field | Source |
|---|---|---|
| Form | name | as you named it |
| Form | questions | the fields the form asks, in order |
| Form | page | the page it sits on |
| Form submission | submitted at | when it came in |
| Form submission | form | which form |
| Form submission | answers | (content) the answers, one per question asked |
| Form submission | how they found the page | the referrer, where the site records it |
| Form submission | contact given | the email or number they left |

## In plain words

What a person reads, where it differs from the record's label. The label, and the id made from
it, do not change.

| Record | Plain name |
|---|---|
| Form | An enquiry form on your site |
| Form submission | An enquiry |
