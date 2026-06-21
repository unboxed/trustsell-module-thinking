import { CARD, NODES, channelLayout } from "@/lib/canvas-layout";
import { readChannels, readModules } from "@/lib/modules";
import type { CanvasNode } from "@/lib/blueprint.config";
import { RfCanvas, type RawEdge, type RfNodeInit } from "@/components/canvas/rf/rf-canvas";

/** Card stacking order — above the auto-elevated channel→module wires (z≈1) so the
 *  wires tuck behind the card faces. */
const CARD_Z = 10;

// The canvas is a live mirror of the module docs. Each module's module.md is read
// from disk per request (readModules → connection(), no caching); its frontmatter
// (the card face) is merged onto the hand-placed positions, and the wires are
// AUTO-ROUTED from each module's `connects`. The channel plugs are read live from
// 01-integrations/channels/*.md (readChannels). Rendered with React Flow — see
// components/canvas/rf. Edit a doc and reload: cards and wiring update with no code.
export default async function Home() {
  const [raw, channels] = await Promise.all([readModules(), readChannels()]);
  const byId = new Map(raw.map((d) => [d.id, d]));

  const docs: CanvasNode[] = NODES.map((pos) => {
    const doc = byId.get(pos.id)!;
    return { ...doc.meta, id: pos.id, x: pos.x, y: pos.y, body: doc.body };
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
      rawEdges.push({ id, source: a, target: b, kind: "peer" });
    }
  }

  // Channel → module inflow arrows: each module's `draws_from` names the channel
  // plugs it pulls raw data through. The source is the channel child node
  // ("01-integrations:<id>"), the target the module — a single arrow flowing in.
  // Validate ids against the real channel list so a typo never makes a dangling edge.
  const validChannels = new Set(channels.map((c) => c.id));
  for (const n of docs) {
    for (const chId of n.drawsFrom ?? []) {
      if (!validChannels.has(chId)) continue;
      rawEdges.push({
        id: `src:${chId}->${n.id}`,
        source: `01-integrations:${chId}`,
        target: n.id,
        kind: "source",
      });
    }
  }

  // React Flow positions by top-left; our layout positions by card centre. The port
  // is a *group*: a frame centred on its position, holding one compact child node per
  // channel (positioned relative to the group's top-left). The group keeps the id
  // "01-integrations" so the peer + inflow wires resolve to it; the children are the
  // clickable plugs. Every other module is a single card.
  const rfNodes: RfNodeInit[] = docs.flatMap((n) => {
    if (n.id === "01-integrations") {
      const layout = channelLayout(channels);
      const group: RfNodeInit = {
        id: n.id,
        type: "port",
        position: { x: n.x - layout.width / 2, y: n.y - layout.height / 2 },
        data: {
          width: layout.width,
          height: layout.height,
          clusterLabels: layout.clusterLabels,
          brands: layout.brands,
        },
        style: { width: layout.width, height: layout.height },
        selectable: false,
      };
      const children: RfNodeInit[] = channels.map((ch) => ({
        id: `${n.id}:${ch.id}`,
        type: "channel",
        parentId: n.id,
        extent: "parent",
        position: layout.pos[ch.id] ?? { x: 0, y: 0 },
        data: { channel: ch },
      }));
      return [group, ...children];
    }
    return [
      {
        id: n.id,
        type: "module" as const,
        position: { x: n.x - CARD.width / 2, y: n.y - CARD.height / 2 },
        // Lift cards above the channel→module wires. Those wires touch a channel
        // *child* node, which React Flow auto-elevates to z=1, so without this they'd
        // paint over the card faces. CARD_Z clears that band so every wire tucks behind.
        zIndex: CARD_Z,
        data: { name: n.name, title: n.title, blurb: n.blurb, icon: n.icon, optional: n.optional },
      },
    ];
  });

  return (
    <main className="relative h-dvh w-dvw overflow-hidden">
      <RfCanvas initialNodes={rfNodes} rawEdges={rawEdges} />
    </main>
  );
}
