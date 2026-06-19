# Handoff — the demand-side "sales questions" probe (and the method behind it)

*A brief for the next agent. This is a **brainstorm**, not a build — see the root
`CLAUDE.md`: reason and pressure-test, don't write app code or schemas unless explicitly
asked. When something gets decided, write it into the owning module's `CLAUDE.md`.*

---

## Part A — how we've been brainstorming (the method)

Two complementary directions, and the second is new:

**Supply-side — goal down to raw data.** Start from a high-level goal, have Brain turn it
into a strategy, and reverse-engineer all the way down to the raw material, refusing to
let any conclusion float above the facts it was built from. The worked example is the
councils goal in `docs/scenario-councils.md` (read it first); it's also a live picture in
the blueprint app — the **Assembly** view at `/assembly`, where raw facts at the base
converge up through readings into a single action.

**Demand-side — questions down to capabilities.** Start instead from the questions a real
salesperson wants answered, and work back to what the tool must hold to answer them. This
handoff is the first run of that direction (Part B). The two directions meet in the
middle: supply-side says what the tool *can* produce; demand-side says what it *must* hit.
Where they don't meet, you've found the real work.

**The working principles both directions lean on:**
- Every piece of raw material is either **fetched** (mail, calendar, Slack, web, through
  Connections), **told** (the goal, the seed list of who to chase, your voice and
  preferences), or **inferred** (read by a module off the other two). Only **Relationships**
  leans on fetched data; the other modules run mostly on what you tell them once
  (Connections is the port that does the fetching, and reads nothing itself).
- **Characterisation is inferred, not tagged.** You never label someone a "champion" — the
  Relationship module reads disposition off behaviour. That inference is the point.
- **Routine vs play.** A routine is one module's standing watch (a beat plus events, with
  an owner). A play is a Brain-conducted recipe across several modules with a *decision in
  the middle*. The litmus: a decision in the middle means a play.
- **People as the fulcrum, AI as the lever.** The human works the verbs (decide, approve,
  send); the AI works the nouns (find, draft, gather). The AI suggests; the human decides.

---

## Part B — the questions probe

### The list (verbatim)
Suggested by MJ at a show & tell: a salesperson's own questions through the sales process.

1. What are the different conditions under which my product is needed?
2. What factors make up these conditions?
3. What organisations meet these conditions?
4. What roles make the buying decisions?
5. Who else influences the buying decisions?
6. Who are the individuals in those roles?
7. Do I know any of the individuals?
8. Do I have mutual connections that can introduce us?
9. What is the best way to contact them?
10. Which of the factors do they care most about?
11. What current information do I have available to share?
12. Which information is most relevant to them?
13. Do they understand my product?
14. Do they believe my product could help them?
15. What barriers need to be removed before they would buy?
16. Are those barriers likely to be removed?
17. Is there anything we can do to remove those barriers?
18. Did I get a response to my previous message?
19. When is the right time to chase?
20. What should my next message say?
21. Who should I contact most urgently?
22. Is there anything I've promised to do that I need to do now/today/this week?
23. What should my tone be with this person?
24. What should I suggest as a next step?
25. What questions should I ask them?
26. Do they respond better to formal or informal communication?

### The verdict
**Worth exploring.** About 21 of the 26 land cleanly on mechanisms the model already has;
about 5 expose real frontiers; and one points at a reframe (below). The list traces the
whole pipeline and touches all three kinds of work — Sustain, Advance and Expand — which
is strong evidence the model wasn't built in a vacuum.

### The mapping (grouped onto the pipeline)
Each group with its **answer path** (fetched / told / inferred) and its **shape**.

- **Define the need** — Q1 (conditions), Q2 (factors). *Told*, with the tool co-authoring.
  Shape: **setup**, owned by Offerings (the fit-shape).
- **Find the targets** — Q3 (which orgs), Q4 (decider roles), Q5 (influencers), Q6 (the
  individuals), Q7 (do I know them), Q8 (warm intro). *Fetched + inferred*, pulling the
  fit-shape from Offerings. Shape: People **routine** — the fit-scan plus the **stakeholder
  map** and warm-path work. Mostly Expand.
- **Reach them** — Q9 (best channel). *Inferred* from where they actually respond. Shape:
  People routine. A thin one today (mostly email connected).
- **Match the message to the person** — Q10 (what they care about), Q11 (what info I have),
  Q12 (most relevant), Q15 (barriers), Q17 (remove them), Q24 (next step), Q25 (questions
  to ask). Shape: a Brain **play** — combine People's read of the person with Offerings'
  answers and Organisation's proof. Advance.
- **Read their state** — Q13 (understand?), Q14 (believe?), Q16 (will barriers lift?), Q19
  (when to chase?). *Inferred readings* — the soft, judgement end.
- **Track and prioritise** — Q18 (did they reply), Q22 (what did I promise — open loops),
  Q21 (who's most urgent). *Fetched* facts and open loops feeding Brain's **triage** play.
- **Write it** — Q20 (what to say), Q23 (tone), Q26 (formal or informal). Shape: the
  **render** — You's voice, reading closeness from People, inside Organisation's fence.

### The frontiers (the misfits — where the real work is)
1. **Forecasting.** Q16 ("are those barriers *likely* to be removed?"), and the predictive
   edges of Q14 and Q19. The model reads the **present** well but doesn't predict the
   **future** — it reasons about *now*, not *next*. A genuinely new dimension to weigh.
2. **The triage mechanism.** Q21 ("who most urgently?") confirms triage is central, not a
   footnote — but *how* Brain prioritises across a big, slow board is exactly the open
   question parked in `00-spine`.
3. **Timing thresholds.** Q19 ("when to chase?") is first-class, yet the "how long is
   quiet, how strong a reply must be" knob is still deferred in `02-relationships`.
4. **Plumbing-bound answers.** Q8 (mutual connections) and Q9 (best channel) are answerable
   in principle but thin until LinkedIn and more channels are connected. A *data* gap, not
   a model gap — name it so answer quality isn't oversold.
5. **Coaching, not just drafting.** Q25 ("what questions should I ask them?") stretches the
   output from "a message to send" to "a move plus talking points." A possible widening of
   what the tool hands back — worth a deliberate decision.

### The reframe to pursue (probably the most valuable thread)
Read the whole list and it stops looking like a test and starts looking like **the
specification of what the tool knows about each person and deal** — but held as reasoned
**answers, not fields you fill in** (which is the "infer, don't tag" principle exactly). On
that framing, a **recommendation is simply the question whose answer just changed in a way
that points to a move.** That could be the tool's real information architecture: a living
dossier of answered questions per contact, with the surfaced action falling out of it.
Worth pressure-testing as a first-class idea — does it hold across Sustain/Advance/Expand,
and where does it break?

### Open threads for the next agent
- Pick one frontier and work it concretely (forecasting and the triage mechanism are the
  juiciest, and both already have a home in `00-spine`/`02`).
- Pressure-test the reframe (questions-as-information-architecture). If it holds, it may
  change how a contact's "card" is described — but keep it plain English and inference-led,
  not a schema.
- Decide whether the output type widens (a message vs a move-plus-talking-points).
- When anything gets settled, write it into the owning module's `CLAUDE.md`.

### Read these first
- `docs/scenario-councils.md` — the supply-side worked example (and the Assembly view it
  describes, live at `/assembly`).
- `02-relationships/CLAUDE.md` — sensing (facts then reading), disposition-is-inferred, the
  stakeholder map, the deferred thresholds.
- `00-spine/CLAUDE.md` — goal-to-strategy, routine vs play, the open triage/prioritisation
  question.
- `03-offerings` / `04-organization` / `05-persona-you` — the fit-shape, the proof and
  fence, the voice and autonomy preference.
- `_scratch/open-questions.md` — the running parking lot.

### Guardrails
- Brainstorm at "who does what" altitude, plain English (non-technical), narrative not
  shorthand, and **no arrow/symbol shorthand** — write connections out in words.
- Don't let conclusions float: show the raw building blocks underneath any insight.
- The visual is built (the Assembly view); the output here is *thinking*, not more canvas
  code, unless the user asks.
