---
id: salesforce
name: Salesforce
brand: Salesforce
source: account
icon: cloud
---

# Salesforce

The CRM side of a deal: where a deal sits in the pipeline, who owns it, what it's worth, when it's
meant to close, and the account, contact and activity behind it. This is the structured deal state
the mail and calendar history can't show on its own, useful to Offerings for stage and to People for
who's attached to what.

Whether it is plugged in is the scenario's to say (`connected:` in its `world/goal.md`); the example
seller has not, so there it is a **data gap**. The records below are mapped against Salesforce's API,
and no live data flows until an account is authorised. The single `CRM record`
here is a placeholder shape, not yet broken into the separate deal, account and contact objects
Salesforce actually exposes. Owned by Connections, fetched fresh and carried untouched once live; no
opinion is formed here.

## Records

| Record | Field | Source |
|---|---|---|
| CRM record | stage | StageName |
| CRM record | owner | OwnerId |
| CRM record | amount | Amount |
| CRM record | close date | CloseDate |
| CRM record | account | AccountId |
| CRM record | contact | ContactId |
| CRM record | activity | ActivityHistory |
