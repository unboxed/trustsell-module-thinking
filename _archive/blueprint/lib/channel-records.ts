/**
 * Parses a channel doc's `## Records` table into the records the channel panel renders.
 * The table is rows of `| Record | Field | Source |`; this groups them by Record (in
 * first-appearance order), each carrying its fields and the Source note. Pure string
 * work with no server-only imports, so it is safe to call from the client panel.
 * Returns [] when the doc has no `## Records` table yet, letting the UI degrade
 * gracefully.
 */
import type { ChannelRecord } from "./blueprint.config";

export function parseRecordsTable(body: string): ChannelRecord[] {
  const order: string[] = [];
  const byLabel = new Map<string, ChannelRecord>();
  let inRecords = false;

  for (const line of body.split("\n")) {
    const t = line.trim();
    // Track the `## Records` section so stray pipe lines elsewhere can't leak in.
    if (t.startsWith("## ")) {
      inRecords = /^##\s+records\b/i.test(t);
      continue;
    }
    if (!inRecords || !t.startsWith("|")) continue;

    const cells = t
      .replace(/^\|/, "")
      .replace(/\|$/, "")
      .split("|")
      .map((c) => c.trim());
    if (cells.length < 2) continue;
    const [record, field, source = ""] = cells;
    // Skip the header row and the |---|--- separator.
    if (!record || record.toLowerCase() === "record") continue;
    if (/^:?-+:?$/.test(record)) continue;

    let rec = byLabel.get(record);
    if (!rec) {
      rec = { label: record, fields: [] };
      byLabel.set(record, rec);
      order.push(record);
    }
    if (field) rec.fields.push({ label: field, source: source || null });
  }

  return order.map((label) => byLabel.get(label)!);
}
