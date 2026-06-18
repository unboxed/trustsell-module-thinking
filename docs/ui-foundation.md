# UI Foundation — the one brief

The single source of truth for the interface. It says *what* the screen is and *what*
it shows — and deliberately leaves *how it looks* (palette, type, shape, motion, layout)
to the design step.

## What this is

An app, not a web page. The screen is one **canvas** you drag to pan — no zoom. It
starts by holding a single thing: the module **nodes**. As the tool grows, detail
arrives in **panels**, and only when a piece earns its place. The canvas of nodes stays
the home.

## What it shows — the nodes

The whole point is to show the six modules as nodes. Each node reads its own module's
notes live (`lib/modules.ts`), so the map always reflects the current thinking.

| Module | Title | What it does |
|---|---|---|
| `00-spine` | The brain | Holds your goals and decides the one thing worth doing next. |
| `01-integrations` | Connections | Plug in your accounts once; it carries messages in and out. |
| `02-relationships` | People | Keeps every contact, conversation and connection organised — and digs to find who matters. |
| `03-offerings` | What you offer | Each product, who it suits, and the answers to the usual worries. |
| `04-organization` | Your organisation | Your proof, your guardrails, your house voice. Optional. |
| `05-persona-you` | You | How you write, so every message sounds like you. |

How the nodes and canvas look and lay out — and what each panel becomes — is the
designer's call.
