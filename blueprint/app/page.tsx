import { CARD, NODES } from "@/lib/canvas-layout";
import { readModules } from "@/lib/modules";
import type { CanvasNode } from "@/lib/blueprint.config";
import { RfCanvas, type RawEdge, type RfNodeInit } from "@/components/canvas/rf/rf-canvas";

// The canvas is a live mirror of the module docs. Each module's CLAUDE.md is read
// from disk per request (readModules → connection(), no caching); its frontmatter
// (the card face) is merged onto the hand-placed positions, and the wires are
// AUTO-ROUTED from each module's `connects`. Rendered with React Flow — see
// components/canvas/rf. Edit a doc and reload: cards and wiring update with no code.
export default async function Home() {
  const raw = await readModules();
  const byId = new Map(raw.map((d) => [d.id, d]));

  const docs: CanvasNode[] = NODES.map((pos) => {
    const doc = byId.get(pos.id)!;
    return { ...doc.meta, id: pos.id, x: pos.x, y: pos.y, body: doc.body };
  });

  // React Flow positions by top-left; our layout positions by card centre. The port
  // has no card — centre its plug cluster by a rough half-extent.
  const rfNodes: RfNodeInit[] = docs.map((n) => {
    const isPort = n.id === "01-integrations";
    return {
      id: n.id,
      type: isPort ? "port" : "module",
      position: isPort
        ? { x: n.x - 322, y: n.y - 55 }
        : { x: n.x - CARD.width / 2, y: n.y - CARD.height / 2 },
      data: { name: n.name, title: n.title, blurb: n.blurb, icon: n.icon, optional: n.optional },
    };
  });

  // One wire per connection: walk every module's `connects` and dedupe reciprocal
  // pairs (00↔02 is declared on both sides) into a single undirected edge.
  const seen = new Set<string>();
  const rawEdges: RawEdge[] = [];
  for (const n of docs) {
    for (const c of n.connects ?? []) {
      const [a, b] = [n.id, c.to].sort();
      const id = `${a}--${b}`;
      if (seen.has(id)) continue;
      seen.add(id);
      rawEdges.push({ id, source: a, target: b });
    }
  }

  return (
    <main className="h-dvh w-dvw overflow-hidden">
      <RfCanvas initialNodes={rfNodes} rawEdges={rawEdges} docs={docs} />
    </main>
  );
}
