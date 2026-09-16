import type { AssemblyDoc, SignalDoc } from "@/lib/modules";

/* ---------------------------------------------------------------------------
 * Shared library types + tiny helpers, used across the playbook components.
 * ------------------------------------------------------------------------- */

/** A library entry, tagged by floor. */
export type LibraryEntry =
  | { kind: "assembly"; doc: AssemblyDoc }
  | { kind: "signal"; doc: SignalDoc };

/** Look up a sibling assembly by module + id (for lineage labels + clickability). */
export type ResolveAssembly = (
  moduleId: string,
  id: string,
) => AssemblyDoc | undefined;

/** The stable key for an entry: `<module>/<id>` — also the `?play=` deep link. */
export const entryKey = (e: LibraryEntry) =>
  `${e.doc.moduleId}/${e.doc.meta.id}`;

/** Confidence → how many of the three meter segments are inked. */
export const confidenceFill = (confidence?: string): number =>
  confidence === "high"
    ? 3
    : confidence === "graded"
      ? 2
      : confidence === "low"
        ? 1
        : 0;
