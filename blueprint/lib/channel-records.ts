/**
 * Parses a channel's raw-data record line (held once in the module body) into the
 * pieces the channel panel renders. The record LABEL lives in the frontmatter; this
 * pairs it back to its body line — a `` `Label` — gloss: field [Provider] · field … `` line.
 *
 * The line format (see 01-integrations/CLAUDE.md `## Raw data`):
 *   - an optional GLOSS — plain-English prose describing the record;
 *   - a `·`-separated FIELD LIST — each field an optional `[provider]` annotation
 *     (the real API name, `derived`, or a short sourcing note like `UNREAD label`);
 *   - an optional trailing `*(…)*` PROVENANCE note.
 * A colon separates a gloss from the field list when both are present. A field's `·`
 * inside parentheses is kept (so `company (name · domain · …)` stays one field).
 *
 * Pure string work with no server-only imports, so it is safe to call from the client
 * channel panel. Returns null when no matching line exists yet (a record not written),
 * letting the UI degrade gracefully.
 */

export interface RecordField {
  /** the plain-English chip text (e.g. `to`, `type (system or user)`) */
  label: string;
  /** the real provider name / `derived` / sourcing note shown on hover, or null */
  name: string | null;
}

export interface ParsedRecord {
  gloss: string | null;
  fields: RecordField[];
  note: string | null;
}

export function parseRecord(body: string, label: string): ParsedRecord | null {
  const esc = label.replace(/[.*+?^${}()|[\]\\]/g, "\\$&");
  const m = body.match(new RegExp("`" + esc + "`\\s*[—–-]\\s*(.+)"));
  if (!m) return null;

  let raw = m[1].trim();

  // Peel a trailing italic *(…)* provenance note (e.g. *(Google People API)*).
  let note: string | null = null;
  const noteMatch = raw.match(/\s*\*\((.+?)\)\*\s*$/);
  if (noteMatch) {
    note = noteMatch[1].trim();
    raw = raw.slice(0, noteMatch.index).trim();
  }
  // strip any remaining stray emphasis markers
  raw = raw.replace(/\*/g, "").trim();

  // Separate an optional gloss from the ·-separated field list. A colon marks the
  // boundary when both are present; it only counts if it precedes the first field.
  let gloss: string | null = null;
  let fieldStr = "";
  const colon = raw.indexOf(":");
  const midProbe = firstTopLevelMiddot(raw);
  if (colon !== -1 && (midProbe === -1 || colon < midProbe)) {
    gloss = raw.slice(0, colon).trim();
    fieldStr = raw.slice(colon + 1).trim();
  } else if (midProbe !== -1) {
    fieldStr = raw;
  } else {
    gloss = raw;
  }

  const fields = splitTopLevel(fieldStr).map(parseField).filter((f) => f.label.length > 0);

  return { gloss: gloss || null, fields, note };
}

/** Index of the first `·` at paren depth 0, or -1. */
function firstTopLevelMiddot(s: string): number {
  let depth = 0;
  for (let i = 0; i < s.length; i++) {
    const ch = s[i];
    if (ch === "(") depth++;
    else if (ch === ")") depth = Math.max(0, depth - 1);
    else if (ch === "·" && depth === 0) return i;
  }
  return -1;
}

/** Split on `·` only outside parentheses, so nested middots stay within one field. */
function splitTopLevel(s: string): string[] {
  const out: string[] = [];
  let depth = 0;
  let cur = "";
  for (const ch of s) {
    if (ch === "(") depth++;
    else if (ch === ")") depth = Math.max(0, depth - 1);
    if (ch === "·" && depth === 0) {
      out.push(cur);
      cur = "";
    } else {
      cur += ch;
    }
  }
  out.push(cur);
  return out.map((x) => x.trim()).filter(Boolean);
}

/** Peel a trailing `[provider]` annotation off a field segment. */
function parseField(seg: string): RecordField {
  const m = seg.match(/^(.*?)\s*\[([^\]]+)\]\s*$/);
  if (m) return { label: m[1].trim(), name: m[2].trim() };
  return { label: seg.trim(), name: null };
}
