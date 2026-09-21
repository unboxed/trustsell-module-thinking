---
id: crm
name: CRM
source: account
icon: kanban
---

# CRM

The deal system of record: where a deal sits in the pipeline, who owns it, what it is worth, when
it is meant to close, and the account, contact and activity behind it. This is the structured deal
state the mail and calendar history cannot show on its own, useful to Offerings for the stage and
to People for who is attached to what, and it is the one place a whole firm's contact with an
account is written down rather than sitting in one person's mailbox.

**No provider is named, because none is chosen** (renamed from `crm` on 21 September, at the
user's asking). Salesforce is one; so are HubSpot, Pipedrive, Dynamics, and the opportunity tool a
broker's own firm runs. They differ in what they call a field and agree on what a deal record
holds, and the library needs the second, not the first. The `Source` column below is therefore a
plain note rather than an API name, the same way [`sms.md`](sms.md) and
[`web-form.md`](web-form.md) are written. That is also why the earlier note about mapping these
rows against one vendor's API has gone: the shape is the general one, and which fields a given
provider exposes is a question for the day one is connected.

Whether it is plugged in is the scenario's to say (`connected:` in its `world/goal.md`). The
patient example has not, so there it is a **data gap**; the broker's world has, because the deal,
its stage and the funders' answers live there and the processor works in it as much as the rep
does. The single `Deal record` here is a placeholder shape, not yet broken into the separate deal,
account and contact objects a real provider exposes. Owned by Connections, fetched fresh and
carried untouched once live; no opinion is formed here.

## Records

| Record | Field | Source |
|---|---|---|
| Deal record | stage | where the deal stands, in the CRM's own words |
| Deal record | owner | whose deal it is at your firm |
| Deal record | amount | what it is worth |
| Deal record | close date | when it is meant to close, or did |
| Deal record | account | the buyer organisation it is against |
| Deal record | contact | the people on it |
| Deal record | activity | what has been logged against it, by whom and when |

## In plain words

What a person reads, where it differs from the record's label. The label, and the id made from
it, do not change.

| Record | Plain name |
|---|---|
| Deal record | The deal, as your CRM holds it |
