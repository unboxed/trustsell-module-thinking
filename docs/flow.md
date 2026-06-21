# The flow, end to end

How the pieces move from a **strategy** to a **surfaced action** — *"Reach out to Person P, because …"* — worked through the running example: a *plant* goal, **BOPS → 30 councils by Q1**.

This is the worked version of Brain's canonical **play** (`00-spine`); it ties together the module roles and the routines-vs-plays distinction. The exact steps will shift with real use — this is the *shape*, not the gospel.

## Phase A — strategy becomes standing work
*Happens when you set or change the strategy.*

1. **You and Brain shape the strategy.** Together you set a goal pinned to an offering: *"BOPS → 30 councils by Q1."* Brain reads it as **plant**-flavoured, with a target shape (early-adopter councils).
2. **Brain turns the strategy into routines and briefs each module** with a standing job to focus on:
   - **People** — "find councils fitting the BOPS profile, surface warm paths, watch the ones we're courting."
   - **Offerings** — "keep BOPS's fit-shape, entry use-case and rebuttals sharp."
   - **Organisation** — "have the council case study and the compliance fence ready."
   - **Profile** — (always) "render anything in my voice."
   - **Connections** — nothing; it has no routines, it's just the wiring.

## Phase B — standing work becomes a surfaced action
*Happens continuously, as routines turn things up.*

3. **Modules run their routines and push up what matters.** People scans for fits — pulling the *fit-shape* from Offerings as a supplier — and watches for signals. *Underneath:* Connections fetches the raw facts (a new mail, a calendar change, a Slack mention, a web hit); People does the **reading**. One clears the bar — a reply lands from Council X asking what BOPS would cost, which People reads as *a live buying question* — so it pushes *"Council X replied asking about pricing"* up, and that wakes Brain.
4. **Brain runs the recommendation play — gathering each module's piece:**
   - asks **People** → *provides* our history with Council X, the warm path in, any open loop.
   - asks **Offerings** → *provides* the entry use-case and the proof that lands for a council.
   - asks **Organisation** → *provides* the matching case study and the fence to stay inside.
5. **Brain decides — this is the mix.** It weighs the pieces into one call: *act on **Person P** at **Council X**, because [warm path through Q + fits the early-adopter profile + just asked about pricing], leading with [the entry use-case + that council case study].* That's the **what + why**.
6. **Brain hands a brief to Profile, who renders it.** Profile writes it in your voice, reading your closeness to Person P from People, inside Organisation's fence — and Organisation does a final compliance pass.
7. **The action surfaces to you.** *"Reach out to Person P at Council X — they just asked about pricing and you've a warm intro through Q. Here's a draft."* You approve, tweak, or send. Nothing leaves without you.
8. **The outcome loops back.** Brain had stamped what it leaned on; when Person P replies (or goes quiet), it routes the lesson to the module that should learn — and Profile learns from any edits you made to the draft.

## The concepts underneath
- **Routine** (steps 2–3): a standing job with one owner; it may pull from a **supplier** (People pulls the fit-shape from Offerings).
- **Play** (steps 4–6): the cross-module choreography Brain conducts, with the **decision in the middle** (step 5). Only Brain can own it.
- **Provide** (step 4): each module's piece, handed back when Brain asks.
- **Brief → render** (steps 6–7): Brain decides; Profile writes; Organisation gates.

## Visualised — "Trace the flow"
This sequence is now playable on the canvas. A **step timeline / scrubber** ("Trace the flow") steps through all eight stages turn-by-turn: each lights the nodes and the directional wires it touches (reusing the route lines already drawn, marching in the flow direction) and shows that step's line.

The trace **follows the artifact**: a single parcel rides the route and **changes form only where a mind reasons** — a raw **fact** that People's reading flips to a **signal**, then a **brief**, a **draft**, an **action**. The parcel is **grey while it's a raw fetched record and turns blue the moment a mind reads it**; that one grey→blue flip *is* the deterministic→non-deterministic boundary, shown not told. On the dumb legs it's just carried.

The choreography — nodes, legs and the parcel's form per step — lives in `blueprint/lib/flow-trace.ts`, with the *words* mirrored from this doc; **keep the two in sync.** The framing follows the canvas's GPS metaphor (a route traced across the map) and the "play = a path that lights up across nodes" note in `ui-foundation.md`.
