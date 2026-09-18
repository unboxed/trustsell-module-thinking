---
id: linkedin
name: LinkedIn
brand: LinkedIn
source: account
connected: false
icon: in
---

# LinkedIn

The professional graph: who someone is at work, when they move roles, and the people you and a prospect both know who can warm an intro. This is the natural home for warm paths and the Expand work that leans on them. It is **not connected**, a data gap, so everything below is mapped but not flowing. The caveat is deeper than a missing login: LinkedIn's API access for this warm-path data (profiles, job changes, mutual connections) is restricted, so treat this whole channel as aspirational until that access opens. The fields below have no API names because no provider call backs them yet; they are the shape we would want, not what we fetch.

## Records

| Record | Field | Source |
|---|---|---|
| Profile | headline | not connected (restricted API) |
| Profile | role | not connected (restricted API) |
| Profile | company | not connected (restricted API) |
| Profile | location | not connected (restricted API) |
| Profile | experience | not connected (restricted API) |
| Job change | previous role | not connected (restricted API) |
| Job change | new role | not connected (restricted API) |
| Job change | date | not connected (restricted API) |
| Mutual connections | the people | not connected (restricted API) |
| Mutual connections | count | not connected (restricted API) |
