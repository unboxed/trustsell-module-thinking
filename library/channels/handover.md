---
id: handover
name: What the buyer hands over
source: buyer
icon: inbox
---

# What the buyer hands over

The third place the tool learns from, beside what you connect and what you tell it. On the way to
a close a lead gives you things: a set of accounts, bank statements, a brief, a specification, a
budget paper, a signed form. None of it is yours and none of it can be fetched. It arrives when
the buyer sends it, by whatever way they choose: an attachment on a mail or a text, a link to a
file, an upload, the post.

Until 20 September every channel in the library was one of your own accounts, so a buyer's
accounts sat in Gmail as an attachment with a filename and a size, and nothing knew they were
the buyer's accounts, or that you had asked for five documents and had three. This channel is
the shape that gap needs: it holds what was handed over as the buyer's, whichever door it came
in by. That is why `source:` is neither `account` nor `builtin` but `buyer`: nothing fetches it,
the same way nothing fetches what you tell the tool. *(My reason, not yet yours.)*

**What is written here is only the envelope**, the part every handover has: what it is, who sent
it, when, by which way, and what you had asked for. What is inside is not written yet. Which
documents a sale asks for, what the tool reads in a set of accounts (V11, whether the income is
steady; V12, what they already owe) and what it must never read into them are decisions not yet
made, and the coverage map lists them as the reads to write once this channel exists. So there is
no record for the contents of a document below, on purpose.

Owned by Connections and carried untouched. No opinion is formed here. The envelope rows are
lineage anchors like any other: the id is the kebab-slug of the label (`Handed-over document`
becomes `handed-over-document`), and that is what an assembly would reference.

## Records

| Record | Field | Source |
|---|---|---|
| Handed-over document | name | as the buyer named it |
| Handed-over document | type | media type |
| Handed-over document | from | the person who sent it |
| Handed-over document | received | when it arrived |
| Handed-over document | arrived by | the door it came in: a mail or text attachment, a link, an upload, the post |
| Handed-over document | in answer to | derived: the request of yours it answers, where there was one |
| Handed-over document | content | (content) not written yet: what the tool reads inside is not decided |
| Document request | asked for | what you asked them to send, in your words |
| Document request | asked on | when you asked |
| Document request | asked by | derived: the message or call you asked in |
| Document request | answered by | the handed-over document that answers it, where one has |

## In plain words

What a person reads, where it differs from the record's label. The label, and the id made from
it, do not change.

| Record | Plain name |
|---|---|
| Handed-over document | Something they sent you |
| Document request | Something you asked them for |
