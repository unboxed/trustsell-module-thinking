# 01 · Integrations (The Switchboard)

**Role:** A **port**, and nothing more. Think of it as a switchboard or a junction box: the user plugs their accounts into it once — they log into their Google account, say — and from then on it simply holds those connections and carries messages through them, in and out. It is the wires, not the brain.

## What it does — and doesn't

01 has **no agency**. It never reads an email, never decides anything is important, never interprets content. The *act* of pulling Jane's conversation history is `02-relationships` reaching **through** 01; the *act* of sending an approved message is the decision/render flow reaching through 01. The switchboard just provides the connection.

It is **shared plumbing**, not a one-way input stage. Any module can borrow its connections for whatever that module needs — `02` to fetch a contact's past emails and meetings, the send step to deliver a draft the user has approved. And it reaches more than the user's own inbox: research tools (web search, Tavily, enrichment) live here too, which is how `02` and `03` do their investigating.

One useful job it *should* do is **hide the differences between providers.** If the user connects Gmail today and a work Outlook account next year, a module just asks for "emails with Jane" without caring which account they came from. 01 smooths that over.

## What is explicitly NOT 01's job

**Noticing that something matters** — a new reply landed, a customer has gone quiet — is the brain's and `02`'s job, never the switchboard's. 01 only carries whatever comes down the wire; deciding it's important happens upstairs.

> Correction from earlier drafts: 01 used to be described as "the pipe that brings 360° context in" and "often the trigger source." That was backwards. Modules reach *through* 01; the active verb belongs to `02`. Triggers are detected by `02` (real events) and the spine (goal-derived), not by the port.

## Still open
- Bidirectional is settled — it carries both in and out. The deeper mechanics (polling vs. push for new events) are deferred; either way, *interpreting* whatever arrives stays with `02`.
