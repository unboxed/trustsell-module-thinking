# UI Foundation — the one brief

This is the **single source of truth** for the interface. There is no other vision doc, brief,
or reference. If you are building the UI, build from this and nothing else.

> The existing `blueprint/` UI is a **rejected prototype.** Do not read it for ideas, do not
> preserve its layout, do not revive its concepts. Start fresh from this brief.

## What's being rejected — the whole approach, not just the paint

I don't like the current UI, and it isn't only the colours — the whole *approach* is wrong for
this tool. It's built as a literal **blueprint**: a brain wired to a pentagon of modules, with
traces between them, data "pills" on every module, worked scenarios, a "given vs. worked-out"
story, side inspectors and slide-out sheets, a drafting grid, and monospaced "printed" type. It
reads like an engineering diagram of a system.

This tool is about **people, relationships, and my own voice.** It should feel like the opposite
of a wiring diagram. So all of that goes — the storytelling, the wires, the pills, the scenarios,
*and* the style. Nothing from it carries over.

## What the foundation is

One calm, open **canvas** (drag to pan, **no zoom**) holding **six module nodes** — and nothing
else. That is the whole screen for now. Detail gets added back later, deliberately, only when a
piece earns its place.

At the code level, keep only: the app shell, the live reading of each module's `CLAUDE.md`
(`lib/modules.ts`), and the list of the six modules. Everything that tells the old story — the
trace/plate/pill/decision-core/scenario/inspector/legend/sheet components and the blueprint
styling — is thrown away.

## A node — three things, nothing else

```
        ┌──────────────────────────────┐
        │        ( ◉ )                  │   ← one icon, in a soft tinted disc
        │                              │
        │        The brain              │   ← title (the plain name)
        │   Holds your goals and       │
        │   decides what to do next.   │   ← one plain line
        └──────────────────────────────┘
```

- **Icon** — one [Lucide](https://lucide.dev) glyph, in a softly tinted disc. Warm and simple, never technical.
- **Title** — the plain name. "The brain," not "Spine."
- **Description** — one plain line of what it does.

No numbers on the face, no tags, no data pills. (Module order still lives in the data; it doesn't need to shout on screen.)

### The six nodes

| Module | Title | Description | Lucide icon |
|---|---|---|---|
| `00-spine` | **The brain** | Holds your goals and decides the one thing worth doing next. | `brain` |
| `01-integrations` | **Connections** | Plug in your accounts once; it carries messages in and out. | `cable` |
| `02-relationships` | **People** | Keeps every contact, conversation and connection organised — and digs to find who matters. | `users-round` |
| `03-offerings` | **What you offer** | Each product, who it suits, and the answers to the usual worries. | `package` |
| `04-organization` | **Your organisation** | Your proof, your guardrails, your house voice. Optional. | `building-2` |
| `05-persona-you` | **You** | How you write, so every message sounds like you. | `pen-line` |

(Lucide names are kebab-case here; in `lucide-react` they import as PascalCase — `users-round` → `UsersRound`.)

## Composition — and the one risk worth taking

The signature move, and the clean break from the old design: **no connecting lines at all.**

It's tempting, in a "map of a system," to draw wires. Don't. The layout carries the meaning
instead: **the brain sits a little larger and centred — the lead — and the five assistants rest
around it as calm peers.** Belonging and hierarchy come from placement, size, and warmth, never
from arrows. A small cast of experts, not a circuit board.

## The look

Pointed deliberately away from the blueprint, and away from the obvious "AI cream + serif +
terracotta" default. A calm, warm, tactile surface — closer to soft paper and a friendly hand
than to CAD.

**Palette — warm paper, warm ink, one quiet accent**
- `#E9E4DB` — Oat (canvas ground; warm, soft, not stark white)
- `#FBF9F4` — Chalk (the node surface)
- `#2A2521` — Bistre (ink / text — a warm near-black, *never* blueprint blue)
- `#8B8278` — Stone (secondary text)
- `#DAD2C6` — Line (hairline, soft and warm, used sparingly)
- `#5F6B4E` — Sage (the single accent — organic and calm; used only where it carries meaning)

**Type — kill the mono, bring a human hand**
- Titles: a soft, low-contrast serif with character — e.g. **Fraunces** (warm, not the stark Playfair look), set modestly.
- Body / descriptions: a warm humanist sans — e.g. **Hanken Grotesk**.
- **No monospace anywhere** — it's the loudest "techy" signal in the current build.

**Shape & motion**
- Generous rounded corners (~16–20px) and a soft, low, warm shadow — nodes feel like objects you could pick up.
- The canvas is **open warm space** — no engineering grid (at most a barely-there warm dot, and only if it genuinely helps).
- Calm motion: nodes settle in gently on load, a soft lift on hover. Respect `prefers-reduced-motion`. Drag to pan; no zoom.

## Quality bar — this is where the attention goes

The screen is now almost empty, so there is nowhere to hide. Make the few things *excellent*:

- **One spacing scale, one type scale.** Real hierarchy (title → description → label). No magic numbers.
- **Calm at rest.** Few simultaneous visual events. Nothing floats unanchored — the six nodes are deliberately placed and aligned.
- **One signature** (the centred-lead composition); everything around it stays quiet.
- **Warm, purposeful colour** — strong only where it means something, soft everywhere else.
- **Accessibility floor:** visible keyboard focus, real contrast, sensible target sizes; holds up in a smaller window and down to mobile.
- **Portfolio-grade.** A calm, human object someone would be glad to look at — not a wall of components.
