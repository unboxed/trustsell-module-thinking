# UI Foundation — the one brief

The single source of truth for the interface. It says *what* the screen is and *what*
it shows — and deliberately leaves *how it looks* (palette, type, shape, motion, layout)
to the design step.

## What this is

An app, not a web page. The screen is one **endless canvas** you drag to pan — no
zoom — with a **recenter** control (a button, or press `0`) to frame the nodes
again from anywhere. It starts by holding a single thing: the module **nodes**. As the tool grows, detail
arrives in **panels**, and only when a piece earns its place. The canvas of nodes stays
the home.

## What it shows — the nodes

The whole point is to show the six modules as nodes. Each node carries a consistent
short **name** and a **title** (the friendly "Your ___" form), plus a one-line summary
of what it does — curated copy that lives in `lib/canvas-layout.ts`. Each module's own
live notes (`lib/modules.ts`) feed its **panel** when panels land, so the detail layer
reflects the current thinking.

| Module | Name | Title | What it does |
|---|---|---|---|
| `00-spine` | Brain | Your deal lead | Holds your goals and decides the one thing worth doing next. |
| `01-integrations` | Connections | Your connections | Plug in your accounts once; it carries messages in and out. |
| `02-relationships` | People | Your relationships | Keeps every contact, conversation and connection organised — and digs to find who matters. |
| `03-offerings` | Offerings | Your offerings | Each product, who it suits, and the answers to the usual worries. |
| `04-organization` | Organisation | Your organisation | Your proof, your guardrails, your house voice. Optional. |
| `05-persona-you` | Voice | Your profile | How you write, so every message sounds like you. |

How the nodes and canvas look and lay out — and what each panel becomes — is the
designer's call.
