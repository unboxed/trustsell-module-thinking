---
id: how-fresh-their-words-are
label: "How old their words are"
used_by: [stated-priorities]
over: [published-picture]
over_status: decided   # 21 September: confirmed when the arithmetic was written, which is what made it answerable
defined: true
counts: The time between the day a passage was published and today, per passage.
needs: [web#research-report, web#enrichment, web#web-result, web#page-content, web#site-map]
breaks: A page with no publication date is dated by its crawl, and the count says which date it used.
---

# How old their words are
## What it counts

The time between the day a passage was published and today, per passage. Not against a threshold:
the number is the age, and what age makes a priority stale is the read's judgement and differs by
what kind of document it is. A four-year plan is current for four years; a page on a site is stale
the moment it stops matching the plan. Which records it needs and when the number stops meaning
anything are not written in the count's fields yet, like every other count.

It counts within [`published-picture`](../assemblies/published-picture.md), decided when the count
was written rather than derived.

## What it cannot see

A publication date that is not published. Many pages carry none, and the only date available is the
day the page was fetched, which says nothing about when the words were written. Where that is all
there is, the count says the date is the crawl's rather than the document's, and the read grades
down accordingly. It also cannot see a document quietly revised in place, which reads as old and is
not.
