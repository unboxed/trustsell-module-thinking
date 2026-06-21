---
id: web
name: Web / Tavily
brand: Tavily
source: builtin
connected: true
icon: telescope
---

# Web / Tavily

The open web, reached through Tavily. It carries what a search turns up (hits, the cleaned text of a page, a site's link graph), a synthesised answer pulled from many searches, and looked-up facts about a company or person. This is a builtin tool, always on, never connected, so there is no data gap here. It forms no opinion: a `Research report` answer is Tavily's synthesis, not the tool's read, and `Enrichment` facts come from the open web and are only as good as what is published there.

Owned by Connections, fetched fresh each time and carried untouched. Each record below is a lineage anchor. Its id is the kebab-slug of its label (`Web result` becomes `web-result`), and that is what the modules' assemblies reference.

## Records

| Record | Field | Source |
|---|---|---|
| Web result | source URL | url |
| Web result | title | title |
| Web result | snippet | content |
| Web result | relevance score | score |
| Web result | published date | published_date |
| Page content | (content) | /extract |
| Site map | pages | results |
| Site map | base URL | base_url |
| Research report | answer | answer |
| Research report | sources | results |
| Enrichment | company (name, domain, industry, size, location) | open web |
| Enrichment | person (role, company) | open web |
| Enrichment | trigger event (a published tender, a leadership change, funding) | open web |
