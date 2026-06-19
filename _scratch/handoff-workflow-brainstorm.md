# Handoff — brainstorm the workflow: raw data → recipes → compounded recipes → action

*A brief for the next agent. This is a **brainstorm**, not a build — see the root `CLAUDE.md`: reason and pressure-test, don't write app code or schemas unless explicitly asked. Capture decisions in the relevant module `CLAUDE.md`.*

## Where we are
The visual work (the canvas "Trace the flow" / artifact-follow trace) is **intentionally paused** — it's "getting there" but more polish has diminishing returns until the *workflow* underneath is clearer. The model is in decent shape: a three-tier system (Brain decides · expert modules answer · Connections carries), and we recently deepened the **sensing mechanism** — deterministic fetch in `01` → non-deterministic *reading* in `02`, with a grounded signal taxonomy and routines spelled out "in agent terms."

## The question to crack
The user wants to work a **particular journey** end to end and pin down **what the actual routines are** — but the real spine of it, in their words:

> "how raw data starts to form into recipes and then compounded recipes, ending into the action. I still struggle to visualise."

So the job is to make that layering concrete and findable-to-picture. Bounce ideas around; don't rush to an artifact.

## A seed interpretation (pressure-test it, don't treat as settled)
The reason it resists the current route/trace visual is probably that **"compounding recipes" is a composition build-up, not a linear sequence.** A candidate framing to argue with:
- **raw data** = the deterministic *facts* the port fetches (a Gmail reply, a calendar event, a Slack mention, a web/Tavily hit). No meaning yet.
- **a recipe** = *ingredients (raw facts) + a method (a reading/inference) → a higher-order item (a signal).* A routine's reading is a recipe. E.g. "cooling champion" = (last outbound + no reply in N days + dropped recurring meeting) → a Sustain signal.
- **a compounded recipe** = a recipe whose ingredients are *other recipes' outputs.* The recommendation play is the compound: People's signal + Offerings' fit/entry use-case + Organisation's proof → Brain's **brief** → (+ `05` voice + `04` fence) → a **draft** → the **action**.
- ⇒ the natural shape is a **dependency tree / assembly** (action at the root, decomposing down to raw facts at the leaves) — think *ingredients → dishes → a plated meal*. That's a different picture from a route across a map, and may be the visual the user is missing.

Worth testing: does "recipe" hold up as the unit? Is a recipe the same thing as a routine, or smaller (a routine *runs* recipes)? Where exactly is the deterministic→non-deterministic line inside a recipe? What's reusable across journeys?

## How to run it
1. Pick **one concrete journey**, grounded only in **currently-connected plumbing** (Gmail, Calendar, Slack, web/Tavily — *not* LinkedIn/Salesforce, which are unconnected/future). A **Sustain** or **Advance** example is the parked "next session" idea in `_scratch/open-questions.md`; flow.md already does the BOPS **Expand** journey.
2. For that journey, name: the **actual routines** (use the agent-terms shape: *trigger · inputs · job · push-condition · output*), the **recipes** (ingredients + method → output), and **how they compound** up to the action.
3. Pressure-test the "recipe → compounded recipe" model and sketch a **candidate way to picture it** (likely a build-up/assembly, not a route). Keep it conceptual — a concept, not UI code.

## Read these first
- `docs/flow.md` — the end-to-end narrative + the current artifact-follow trace.
- `02-relationships/CLAUDE.md` — "How it senses: facts → reading," the signal taxonomy table, the routine in agent terms.
- `00-spine/CLAUDE.md` — routine vs play, the agent-terms routine shape, the decision-in-the-middle.
- `01-integrations/CLAUDE.md` — deterministic carry; connected vs available accounts.
- `blueprint/lib/flow-trace.ts` — the trace choreography (the artifact's form per step: goal → routines → fact → signal → pieces → brief → draft → action → lesson).
- `_scratch/open-questions.md` — still genuinely open: reading *thresholds*, decision-maker identification, goal representation/prioritisation, voice capture.

## Guardrails
- Brainstorm at **"who does what" altitude**, plain English (non-technical), module docs as **narrative** not shorthand.
- The visual is on pause: the output here is *thinking* (and maybe a visual *concept*), not canvas code.
- When something is decided, write it into the owning module's `CLAUDE.md` so it persists.
