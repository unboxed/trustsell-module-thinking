---
id: reply-size-vs-yours
label: "Reply length, theirs against yours"
used_by: [one-sided]
over: [conversation-history]
over_status: decided   # decided 21 September, when the counts were written
defined: true
counts: The length of their replies against the length of the messages they are answering, over the thread.
needs: [gmail#email-message, gmail#email-thread, slack#slack-message, sms#text-message, web-form#form-submission]
breaks: Length is not care. A short answer to a simple question is right, and the count does not know which questions were simple.
---

# Reply length, theirs against yours
## What it counts

For each turn on the thread, how long their reply is against how long the message it answers was,
in words, and the median of those ratios across the thread. Plus the trend: the ratio over the last
month against the whole.

It is one of the two numbers behind "one-sided": you writing paragraphs and getting lines back.

## What it cannot see

Whether a short reply is a brush-off or an efficient person. Some people answer everything in six
words and mean nothing by it, which is why this is read against **their** own usual rather than
against a standard, and why the read that uses it needs a second number beside it.
