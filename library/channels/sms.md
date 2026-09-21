---
id: sms
name: SMS
source: account
icon: message-square
---

# SMS

Text messages, the fast end's mail. In a sale that runs days from lead to close, most of the
conversation happens by text: the lead's first answer, the promise to send their accounts by
Friday, the reminder that Friday has gone. A conversation groups the messages with one number.
A message carries the who, when and what, plus which way it went, which is all the counting floor
needs to read a reply, a gap or a promise on a thread. Attachments ride on messages when the
provider carries them. `Draft` is the outgoing side: a text prepared but not yet sent, for a
human to send.

Which provider carries the texts (the phone itself, or a business messaging service) is not
decided, so the Source column gives plain sourcing notes and no API names, the same way LinkedIn
does. What is carried is settled: a text is a text. A conversation by SMS is `thread-under-way` in
every sense a mail thread is.

**Whether you may text them at all is a record here** (added 21 September). In some trades and
countries a text may not go out until the person has agreed to receive it, and an opt-out has to
be honoured from the moment it arrives. That is not a fact about one message, and it is not
something the buyer hands over: it is a state of this channel for this number, which is why it
sits here rather than on [`handover.md`](handover.md). It arrives two ways, and the record carries
which: the provider's own opt-in and opt-out state, because "STOP" comes in as a text and every
service keeps the list; and a tick on your own enquiry form, where that is where the lead agreed.
**No read uses it yet.** [`disclosure-still-owed`](../signals/disclosure-still-owed.md) reads what
must be *said* on a thread, not what must be *held* before one starts, and which words a trade
forbids or requires in a text is the organisation's fence to state, not the library's to invent.
The floor is here so that read can be written on it. *(My reason, not yet yours.)*

Owned by Connections, fetched fresh each time and carried untouched. No opinion is formed here and
no content is kept. Each record below is a lineage anchor. Its id is the kebab-slug of its label
(`Text message` becomes `text-message`), and that is what the modules' assemblies reference.

## Records

| Record | Field | Source |
|---|---|---|
| Text conversation | the other number | derived |
| Text conversation | message count | derived |
| Text conversation | first and last activity | derived |
| Text message | sender | the sending number |
| Text message | to | the receiving number |
| Text message | body | the text |
| Text message | timestamp | when it was sent or received |
| Text message | direction | derived (sent or received) |
| Text message | delivered | the provider's delivery state, where it reports one |
| Text message | has attachments | derived |
| Text attachment | filename | as the provider names it |
| Text attachment | type | media type |
| Text attachment | content | the file |
| Draft | to | the receiving number |
| Draft | body | the text |
| Consent | the number | the number the consent is about |
| Consent | may be texted | whether they have agreed to be texted at all |
| Consent | given on, and how | when they agreed, and by which door: a tick on your form, a reply, a word you recorded |
| Consent | opted out on | when they asked you to stop, where they have |

## In plain words

What a person reads, where it differs from the record's label. The label, and the id made from
it, do not change.

| Record | Plain name |
|---|---|
| Text conversation | A conversation by text |
| Text message | A text |
| Text attachment | A photo or file sent by text |
| Draft | A text ready to send |
| Consent | Whether you may text them |
