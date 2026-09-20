---
id: contacts
name: Contacts
brand: Google
source: account
icon: contact-round
---

# Contacts

The address book: the people a user has saved, the addresses they have written to without saving, and the tags that group saved people together. It carries the plain identity facts (name, email, phone, organisation, job title) that help match a person across channels and place them inside an org. Two provenance notes: `Contact` records come from the Google People API, and an `Other contact` is thinner by nature, just a name and an email harvested from correspondence, with no organisation or phone behind it.

Owned by Connections, fetched fresh each time and carried untouched. No opinion is formed here and no content is kept. Each record below is a lineage anchor. Its id is the kebab-slug of its label (`Other contact` becomes `other-contact`), and that is what People's assemblies reference.

## Records

| Record | Field | Source |
|---|---|---|
| Contact | name | names |
| Contact | emails | emailAddresses |
| Contact | phones | phoneNumbers |
| Contact | organisation | organizations |
| Contact | job title | organizations.title |
| Contact | photo | photos |
| Other contact | name | names |
| Other contact | email | emailAddresses |
| Contact group | name | name |
| Contact group | members | memberResourceNames |

## In plain words

What a person reads, where it differs from the record's label. The label, and the id made from
it, do not change.

| Record | Plain name |
|---|---|
| Other contact | Someone you have emailed |
