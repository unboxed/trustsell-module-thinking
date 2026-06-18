# 00 · Spine (The Brain)

**Role:** Reasoning to *decide*. Sets intent, decomposes goals into sub-questions, routes them to the memory modules, and assembles the final recommendation. The only true "agent" — everything else is an assistant it queries.

**What lives here**
- Standing strategy (slow clock): who we target, what we push, positioning. *(Open question: belongs here, or in `04-organization`?)*
- Per-deal tactics (fast clock): sustain / advance / expand on a specific person or deal.
- Routing logic: what to ask, whom to ask, in what order.
- The output renderer: turns a decision into "follow up with X because Y — here's the message," pulling voice from `05` + `04`.

**Its job, step by step**
1. A trigger arrives (from `01-integrations`) or a cadence / strategy prompt fires.
2. Pick a mode: sustain / advance / expand.
3. Decompose into sub-questions; ask the relevant modules (reason-to-answer).
4. Assemble what + why; render the message in voice.
5. *(Missing today)* Learn from what worked; update standing strategy.

**Open questions**
- Split standing strategy (org-level) from per-deal tactics? Where does each sit?
- Where does the learning loop live, and what does it update?
- How does routing handle order when one answer depends on another (Relationships -> Offerings)?
