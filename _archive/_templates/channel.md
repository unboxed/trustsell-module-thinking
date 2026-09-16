---
# RAW-DATA FLOOR. One doc per channel service, at 01-integrations/channels/<id>.md.
# Frontmatter is ONLY the channel's card face. The records and fields live in the BODY,
# as a clean field-per-row table that reads well and that a UI can render directly.
# (A nested records tree in frontmatter renders as an unreadable blob, so keep it out.)
id: <kebab-slug>          # channel id, e.g. gmail. Matches a module's draws_from value.
name: <Display name>      # e.g. Gmail
brand: <Brand>            # the account family, e.g. Google, Slack, Tavily
source: <account|builtin> # account = the user authorises it once. builtin = ships always-on (web, enrichment)
connected: <true|false>   # false = a DATA GAP, named not faked
icon: <lucide-or-glyph>   # e.g. mail, calendar, hash, telescope
---

# <channel name>

<!-- One short paragraph: what this channel carries and why it matters to the modules that
     draw from it. Note any data gaps or provenance caveats. No reasoning; it forms no opinions. -->

## Records

<!-- One row per FIELD. The Record column is the lineage anchor: a record's id is the
     kebab-slug of its label (Email message becomes email-message), and that is what
     assemblies reference. Source = the real API name, "derived" (the tool computes it), or a
     short sourcing note. A pure-payload record (extracted page text, AI notes) gets a single
     row with field "(content)". Show nesting, if it matters, by ordering child records under
     their parent. -->

| Record | Field | Source |
|---|---|---|
| <Record label> | <field> | <API name, derived, or note> |
| <Record label> | <field> | <...> |
