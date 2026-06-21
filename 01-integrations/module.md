---
name: "Connections"
title: "Your connections"
blurb: "Plug in your accounts once; it carries messages in and out."
icon: cable
optional: false
tier: connector
# No modes or connects: 01 has no initiative and no reasoning. Every module
# reaches *through* it, so its links are drawn from the others, not declared here.
---

# 01 · Connections

The single doorway to everything outside the tool. It owns the **channels**, so it holds the
master list of every raw record they can produce. Other modules pull a subset of it.

Two kinds of channel sit here. The **Connections** are the accounts you authorise once: your
Google services, your Slack, and (later) LinkedIn and Salesforce. The **Tools library** holds the
tools that ship with the product and are always on, the ones you never connect. Today that is web
search and enrichment.

> **The catalog floor lives as a library.** This module has no assemblies and no signals: it is
> the connector, so it does no reasoning. Its raw data is the channels, written up one doc per
> channel service in [`channels/`](channels/). This file holds only the operating prose. See
> [`docs/library-format.md`](../docs/library-format.md).

## Raw data

The full catalogue, grouped by channel, lives in [`channels/`](channels/): one doc per channel
service (Gmail, Calendar, Drive, Contacts, Meet, Slack, web, and the not-yet-connected LinkedIn
and Salesforce), each carrying its records as a field-per-row table. These are plain records,
carried as-is. All the meaning is made downstream, in the modules.

## Principles

How Connections works, in one breath each:

- **Carry, don't read.** It moves records in and out untouched. It never counts, never judges,
  never forms an opinion. All the meaning is made downstream, in the modules.
- **No agency, no goals.** It starts nothing and wants nothing; it only answers a reach-through.
  Every routine and signal lives in a module, never here.
- **Modules reach *through*, not into.** A module asks Connections for records and gets them; it
  never reaches into another module. The doorway is the one shared place, so the wiring stays in
  one spot.
- **Connect once, then it's wiring.** You authorise an account a single time; from then on it's
  plumbing, with no re-asking and no decisions.
- **Honest about what's not plugged in.** A channel that isn't connected (LinkedIn, Salesforce
  today) says so plainly: a **data gap**, surfaced, never faked.
- **One catalogue, many subsets.** Connections owns the master list of every raw record; each
  module pulls only the slice it needs (its `draws_from`).

## System prompt

*(The operating stance, in prose, brainstorm-level rather than deployable wording.)*

You are Connections, the single doorway between the tool and the outside world. You hold no
opinions, you sense nothing, you decide nothing: you carry records faithfully in and out, in the
shape the provider hands them over. You start no work of your own; you answer when a module
reaches through you, and otherwise you wait. When an account isn't connected, you say so plainly
rather than improvise. You are plumbing, and your whole worth is being *trustworthy* plumbing:
what passes through you is the ground every reading upstream stands on, so you never bend it.

## User input

The only thing Connections needs from you is **consent**. You authorise each account once (your
Google services, your Slack; later LinkedIn and Salesforce), and from then on it carries messages
without asking again. That one-time hookup is the whole *told* pile here; there's nothing else it
could learn only from you, because it doesn't learn. It carries.

Two kinds of channel sit behind that consent: the **Connections** you authorise (Gmail, Calendar,
Drive, Contacts, Meet, Slack) and the **Tools library** that ships always-on and needs no hookup
(web search, enrichment). What you *don't* connect is itself information: a channel left unplugged
(LinkedIn, Salesforce today) is a **data gap** the rest of the tool will name honestly rather than
paper over.

## Reasoning

**None, and that's the point.** Connections does no counting and no judging; it sits *below* the
first floor of [`docs/tracing-back.md`](../docs/tracing-back.md), handing over the plain facts
(Floor 1) that the modules then count (Floor 2) and read (Floor 3). The opinion line lives inside
the modules (People, Offerings, Profile), never in the doorway. Pushing any reasoning down here
would blur the one seam the whole design depends on: that what arrives through Connections is
untouched, checkable ground. So this module has no assemblies and no signals, by design.

## Output

The raw records themselves, handed to whichever module reaches through: no interpretation, no
ranking, no summary. A module asks for a slice (the threads on a contact, this week's events, a
web search) and gets exactly those records. Out the other way, it carries what the user sends (a
drafted reply, an invite), but only once a human has pulled the trigger. Nothing leaves on its
own.

## Memory

Connections remembers **which accounts are hooked up** and the scopes you granted: the live
wiring, nothing more. It keeps **no memory of content**: it doesn't retain the messages, events or
files that pass through it. Ask it the same thing twice and it fetches fresh both times; the
records that get *kept* are kept upstream, in each module's own memory (People's relationships,
Profile's voice) on their own tiers. The doorway holds the connection, not the conversation.

## Open questions

- **The restricted channels.** LinkedIn and Salesforce are mapped but not connected. LinkedIn's
  API access for warm-path data (mutual connections, job changes) is restricted and treated as
  aspirational. What's reachable, and when, gates whole signal families upstream (warm paths stay
  thin without it).
- **Provider gaps inside connected channels.** Some records exist in principle but aren't reachable
  through the official API: Slack huddle audio, Meet transcripts retained only ~30 days. Worth
  tracking as the providers change.
- **New providers.** Which channels join next (a CRM beyond Salesforce, a second mail provider),
  and how the catalogue grows without the master list drifting from what modules actually pull.
