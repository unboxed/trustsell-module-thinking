---
id: drive
name: Drive
brand: Google
source: account
icon: hard-drive
---

# Drive

The shared documents, where evidence and brand material live: a doc, sheet, PDF or image, the folders
that hold them, and the team-owned spaces they sit in. Files carry the who and when (owner, created,
modified) plus the sharing that says who can see them, which is what the organisation's reading
leans on. `File content` is the exported text of a Doc, Sheet or Slide, a single payload rather than
a set of fields. `Comment` carries the back-and-forth left on a file.

Owned by Connections, fetched fresh each time and carried untouched. No opinion is formed here and
no content is kept. Each record below is a lineage anchor. Its id is the kebab-slug of its label
(`Shared drive` becomes `shared-drive`), and that is what the modules' assemblies reference.

## Records

| Record | Field | Source |
|---|---|---|
| File | name | name |
| File | type (mime) | mimeType |
| File | size | size |
| File | owner | owners |
| File | created | createdTime |
| File | modified | modifiedTime |
| File | starred | starred |
| File | shared-with | permissions |
| File | web link | webViewLink |
| File | parent folder | parents |
| File content | (content) | exported text of a Doc, Sheet or Slide |
| Comment | author | author |
| Comment | text | content |
| Comment | anchor | anchor |
| Comment | resolved flag | resolved |
| Comment | replies | replies |
| Folder | name | name |
| Folder | contents | derived |
| Folder | sharing | permissions |
| Shared drive | name | name |
| Shared drive | members | permissions |
| Shared drive | org unit | orgUnitId |

## In plain words

What a person reads, where it differs from the record's label. The label, and the id made from
it, do not change.

| Record | Plain name |
|---|---|
| File content | What a file says |
| Shared drive | Team drive |
