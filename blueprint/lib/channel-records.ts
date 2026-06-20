/**
 * Pairs a channel's raw-data record LABEL (held in the frontmatter) back to its
 * one-line field description (held once in the module body, as a `` `Label` — fields ``
 * line). Pure string work with no server-only imports, so it is safe to call from
 * the client channel panel. Returns null when no matching line exists yet (a channel
 * section not written), letting the UI degrade gracefully.
 */
export function recordDescription(body: string, label: string): string | null {
  const esc = label.replace(/[.*+?^${}()|[\]\\]/g, "\\$&");
  const m = body.match(new RegExp("`" + esc + "`\\s*[—–-]\\s*(.+)"));
  if (!m) return null;
  // strip markdown emphasis (e.g. the trailing *(provenance)* notes) for plain display
  return m[1].replace(/\*/g, "").trim();
}
