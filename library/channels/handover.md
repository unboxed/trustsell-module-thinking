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

**Two layers are written here.** The envelope, which every handover has: what it is, who sent it,
when, by which way, the stretch of time it is for, and what you had asked for. And, since 21 September, the figures a document
states: one row per figure, in the document's own words, and one row per thing the document names
as owed. That is the whole of what the tool reads inside a document. It reads what is stated, as
stated, and the section *What is never read* below says what it must not do with it. Which
documents a sale asks for, what a document's own labels mean by type and jurisdiction, and how a
figure is read out of a page are still not written, and the entries above say so where they lean on
them. *(My reason, not yet yours.)*

**A request can ask for a period, and a document can be for one** (added 21 September). "Three
months of statements, the last three months, not a year ago" is two facts, and until now the
envelope carried only the first. It carries both now: `for which period` on the request, and
`covers` on the document. They are envelope facts and not figures, because which months a statement
is for is written on the front of it, so
[`missing-documents`](../signals/missing-documents.md) can tell "not sent" from "sent, for the
wrong stretch" without the inside layer being read at all. That keeps the separation the fifth pass
made: the envelope read does not change when the inside is read. Where you asked for no period, the
field is empty and nothing is checked; the tool does not decide for itself how far back a sale
should look. *(My reason, not yet yours.)*

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
| Handed-over document | covers | the stretch of time it is for, where the document says so on its face |
| Handed-over document | in answer to | derived: the request of yours it answers, where there was one |
| Handed-over document | content | (content) the file itself, read only as the two records below |
| Stated figure | document | the handed-over document it was read from |
| Stated figure | as the document names it | the label in the document's own words ("Turnover", "Credits", "Net profit") |
| Stated figure | amount | as stated |
| Stated figure | period | the month, year or date the figure covers, as the document says |
| Stated figure | where | the page and line it was read from |
| Stated figure | kind | derived: money in, money out, a balance, or unplaced. Unplaced is the honest fallback |
| Stated commitment | document | the handed-over document it was read from |
| Stated commitment | to whom | as the document names them |
| Stated commitment | what it is called | in the document's words ("bank loan", "hire purchase", "advance") |
| Stated commitment | how much, how often | as stated |
| Stated commitment | until when | as stated, where the document says; empty otherwise |
| Stated commitment | where | the page and line it was read from |
| Document request | asked for | what you asked them to send, in your words |
| Document request | for which period | the stretch of time it must cover, where you said one |
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
| Stated figure | A figure their document gives |
| Stated commitment | Something their document says they owe |

## What is never read

The two figure records are the whole of what the tool reads inside a document. Five things it never
reads into one, and every read above this channel applies them. *(My reason, not yet yours.)*

1. **Never a figure the document does not state.** No filled gap, no estimate for a missing month.
   A gap is a gap, and the reads say so.
2. **Never a verdict on the person.** Amounts, never character: not creditworthy, not honest, not
   risky. The read is what the figures show; what to do about the sale is yours.
3. **Never beyond the purpose it was handed over for.** Accounts sent to show what they can bear
   are not read for who their customers are, who they pay, or where they spend. Who a buyer could
   introduce you to is never answered from their bank statement.
4. **Never what kind of business they are.** No "restaurants are seasonal". Every read is per
   buyer, from their own figures.
5. **Never whether it is genuine.** The tool reads what a document states, as stated. Whether it is
   true, complete or audited is not its read, and it does not treat a document as proof of anything.

The one judgement on this floor is the derived `kind` on a stated figure: whether the document's
own label means money in, money out or a balance. Where the label is unfamiliar the figure is kept
as unplaced rather than guessed, the same way an unasked-for document is kept rather than dropped.
The rules that place a label, by document type and jurisdiction, are not written yet.

A commitment the document does not name, but that the same payment to the same name month after
month suggests, is not a record. That is arithmetic, on the counting floor, and the read that uses
it says "looks like" rather than stating it as a fact.
