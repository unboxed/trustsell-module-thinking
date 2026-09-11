"use client";

import { Badge } from "@/components/ui/badge";
import type { LibraryEntry, ResolveAssembly } from "./types";

/* ---------------------------------------------------------------------------
 * The descent — the signature of the playbook.
 *
 * It draws a play's lineage as a diagram of floors: the read on top, resting on
 * its gathers, resting on the raw records — joined by thin connectors. It is the
 * one truest thing about the data made visible: nothing floats, everything traces
 * down. Assembly nodes are clickable and flip you to that entry. Styled with the
 * canvas design system: outline node cards, the self node lit with the blue ring.
 *
 * Built purely from data already on the entries: a signal's `inputs` are its
 * assemblies; each assembly's `inputs` are the record ids (or sibling assemblies)
 * it gathers, one floor lower.
 * ------------------------------------------------------------------------- */

const EYEBROW = "text-[11px] font-semibold tracking-[0.1em] uppercase text-muted-foreground";
const NODE =
  "inline-flex items-center gap-2 rounded-lg border bg-card px-3 py-2 text-[13px]";

type FloorNode =
  | { type: "self"; label: string }
  | { type: "assembly"; moduleId: string; id: string; label: string }
  | { type: "record"; id: string };

interface Floor {
  label: string;
  nodes: FloorNode[];
}

/** Resolve one input id into a clickable assembly node, or a quiet record chip. */
function toNode(
  moduleId: string,
  id: string,
  resolveAssembly: ResolveAssembly,
): FloorNode {
  const a = resolveAssembly(moduleId, id);
  return a
    ? { type: "assembly", moduleId, id, label: a.meta.label }
    : { type: "record", id };
}

function buildFloors(
  entry: LibraryEntry,
  resolveAssembly: ResolveAssembly,
): Floor[] {
  const moduleId = entry.doc.moduleId;
  const meta = entry.doc.meta;

  // An assembly is a two-floor descent: the gather, then the records beneath it.
  if (entry.kind === "assembly") {
    return [
      { label: "the gather", nodes: [{ type: "self", label: meta.label }] },
      {
        label: "down to",
        nodes: meta.inputs.map((id) => toNode(moduleId, id, resolveAssembly)),
      },
    ];
  }

  // A signal is a three-floor descent: the read, the gathers it rests on, and the
  // deduped union of records those gathers stand on.
  const restsOn = meta.inputs.map((id) => toNode(moduleId, id, resolveAssembly));

  // The ground is the deduped union of what those gathers stand on. Skip any id
  // already shown a floor up (a gather that is itself a direct input), so nothing
  // appears twice in the descent.
  const seen = new Set<string>(meta.inputs);
  const ground: FloorNode[] = [];
  for (const id of meta.inputs) {
    const a = resolveAssembly(moduleId, id);
    if (!a) continue;
    for (const rec of a.meta.inputs) {
      if (seen.has(rec)) continue;
      seen.add(rec);
      ground.push(toNode(moduleId, rec, resolveAssembly));
    }
  }

  const floors: Floor[] = [
    { label: "the read", nodes: [{ type: "self", label: meta.label }] },
    { label: "rests on", nodes: restsOn },
  ];
  if (ground.length) floors.push({ label: "down to", nodes: ground });
  return floors;
}

export function Descent({
  entry,
  resolveAssembly,
  onJump,
}: {
  entry: LibraryEntry;
  resolveAssembly: ResolveAssembly;
  onJump: (moduleId: string, id: string) => void;
}) {
  const floors = buildFloors(entry, resolveAssembly);

  return (
    <div className="flex flex-col">
      {floors.map((floor, fi) => (
        <div key={floor.label}>
          {fi > 0 && <div className="ml-3 h-5 w-px bg-border" aria-hidden />}
          <p className={`${EYEBROW} mb-2`}>{floor.label}</p>
          <div className="flex flex-wrap gap-2">
            {floor.nodes.map((n, ni) => {
              if (n.type === "self") {
                return (
                  <span
                    key={ni}
                    className={`${NODE} border-primary/40 text-foreground ring-1 ring-primary/30`}
                  >
                    <span className="size-1.5 rounded-full bg-primary" />
                    <span className="font-medium">{n.label}</span>
                  </span>
                );
              }
              if (n.type === "assembly") {
                return (
                  <button
                    key={ni}
                    type="button"
                    className={`${NODE} cursor-pointer border-border text-muted-foreground transition-colors hover:border-primary/50 hover:text-foreground`}
                    onClick={() => onJump(n.moduleId, n.id)}
                    title={`Go to ${n.label}`}
                  >
                    <span className="size-1.5 rounded-full bg-muted-foreground" />
                    {n.label}
                  </button>
                );
              }
              return (
                <Badge key={ni} variant="outline" className="font-normal">
                  {n.id}
                </Badge>
              );
            })}
          </div>
        </div>
      ))}
    </div>
  );
}
