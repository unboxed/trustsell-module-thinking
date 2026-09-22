#!/usr/bin/env node
// Reads library/ and scenarios/ and writes playbook/assets/data.js.
// Two areas, and the separation is the point. library/ is the blocks: general, reusable,
// and it names no example. scenarios/<name>/ is one seller's world and cards, assembled
// out of those blocks. Change SCENARIO to build the playbook from another.
// Node only, no packages, nothing to install. Run it after editing the library:
//     node build.js
// It fails loudly when an id does not resolve. That is the point of it: the joins
// between the floors are what went missing before, so nothing is allowed to dangle.

const fs = require('fs'), path = require('path');
const SCENARIO = 'bops';
const ROOT = __dirname, LIB = path.join(ROOT, 'library');
const SCN = `scenarios/${SCENARIO}`, SCN_DIR = path.join(ROOT, 'scenarios', SCENARIO);
const OUT = path.join(ROOT, 'playbook/assets/data.js');

/* ---------- a small YAML subset: scalars, flow arrays, block lists, nested maps ---------- */

const unquote = v => (/^".*"$/.test(v) || /^'.*'$/.test(v)) ? v.slice(1, -1) : v;
const decomment = v => {                       // ' #' starts a comment; 'gmail#x' does not
  let out = '', q = null;
  for (let i = 0; i < v.length; i++) {
    const c = v[i];
    if (q) { out += c; if (c === q) q = null; continue; }
    if (c === '"' || c === "'") { q = c; out += c; continue; }
    if (c === '#' && i > 0 && /\s/.test(v[i - 1])) break;
    out += c;
  }
  return out.trim();
};
const scalar = v => {
  v = unquote(decomment(v).trim());
  if (v === 'true') return true;
  if (v === 'false') return false;
  if (/^\[.*\]$/.test(v)) return v.slice(1, -1).split(',').map(x => unquote(x.trim())).filter(x => x !== '');
  return v;
};

function parseFrontmatter(src, where) {
  const m = src.match(/^---\n([\s\S]*?)\n---\n?/);
  if (!m) return {data: {}, body: src};   // docs are plain prose, and that is fine
  const lines = m[1].split('\n');
  const data = {}; const body = src.slice(m[0].length);

  let i = 0;
  const indentOf = l => l.match(/^ */)[0].length;
  function block(minIndent) {
    // returns either an array or an object, whichever the lines look like
    const arr = []; const obj = {};
    while (i < lines.length) {
      const line = lines[i];
      if (!line.trim() || /^\s*#/.test(line)) { i++; continue; }
      const ind = indentOf(line);
      if (ind < minIndent) break;
      const t = line.trim();
      if (t.startsWith('- ')) {
        const rest = t.slice(2);
        const kv = rest.match(/^([A-Za-z_][\w-]*): ?(.*)$/);
        if (kv) {                                   // a list of maps
          const item = {}; item[kv[1]] = scalar(kv[2]); i++;
          while (i < lines.length) {
            const l2 = lines[i];
            if (!l2.trim() || /^\s*#/.test(l2)) { i++; continue; }
            if (indentOf(l2) <= ind || l2.trim().startsWith('- ')) break;
            const kv2 = l2.trim().match(/^([A-Za-z_][\w-]*): ?(.*)$/);
            if (!kv2) break;
            item[kv2[1]] = scalar(kv2[2]); i++;
          }
          arr.push(item);
        } else { arr.push(scalar(rest)); i++; }
        continue;
      }
      const kv = t.match(/^([A-Za-z_][\w-]*): ?(.*)$/);
      if (!kv) { i++; continue; }
      const [, key, raw] = kv;
      if (decomment(raw).trim() === '') {
        i++;
        const nested = block(ind + 1);
        obj[key] = nested;
      } else { obj[key] = scalar(raw); i++; }
    }
    return arr.length ? arr : obj;
  }
  const top = block(0);
  Object.assign(data, Array.isArray(top) ? {items: top} : top);
  return {data, body};
}

/* ---------- just enough markdown for what the library actually uses ---------- */

const esc = s => s.replace(/&/g, '&amp;').replace(/</g, '&lt;').replace(/>/g, '&gt;');
function inline(s) {
  return esc(s)
    .replace(/`([^`]+)`/g, (_, c) => `<code>${c}</code>`)
    .replace(/\[([^\]]+)\]\(([^)]+)\)/g, (_, t, h) => `<a href="${h}">${t}</a>`)
    .replace(/\*\*([^*]+)\*\*/g, '<strong>$1</strong>')
    .replace(/(^|[^*])\*([^*]+)\*/g, '$1<em>$2</em>');
}
function markdown(src) {
  const out = []; const lines = src.split('\n');
  let i = 0;
  while (i < lines.length) {
    const line = lines[i];
    if (!line.trim()) { i++; continue; }
    if (/^<!--/.test(line.trim())) {                       // drop template comments
      while (i < lines.length && !/-->/.test(lines[i])) i++;
      i++; continue;
    }
    let m;
    if ((m = line.match(/^(#{1,4}) (.*)$/))) {
      out.push(`<h${m[1].length}>${inline(m[2])}</h${m[1].length}>`); i++; continue;
    }
    if (/^\|/.test(line)) {
      const rows = []; while (i < lines.length && /^\|/.test(lines[i])) rows.push(lines[i++]);
      const cells = r => r.split('|').slice(1, -1).map(c => c.trim());
      const head = cells(rows[0]);
      const bodyRows = rows.slice(/^[\s|:-]+$/.test(rows[1] || '') ? 2 : 1);
      out.push('<table><thead><tr>' + head.map(c => `<th>${inline(c)}</th>`).join('') +
               '</tr></thead><tbody>' +
               bodyRows.map(r => '<tr>' + cells(r).map(c => `<td>${inline(c)}</td>`).join('') + '</tr>').join('') +
               '</tbody></table>');
      continue;
    }
    if (/^[-*] /.test(line)) {
      const items = [];
      while (i < lines.length && /^[-*] /.test(lines[i])) {
        let t = lines[i++].replace(/^[-*] /, '');
        while (i < lines.length && /^\s{2,}\S/.test(lines[i])) t += ' ' + lines[i++].trim();
        items.push(`<li>${inline(t)}</li>`);
      }
      out.push(`<ul>${items.join('')}</ul>`); continue;
    }
    const para = [];
    while (i < lines.length && lines[i].trim() && !/^([-*] |\||#{1,4} |<!--)/.test(lines[i])) para.push(lines[i++].trim());
    out.push(`<p>${inline(para.join(' '))}</p>`);
  }
  return out.join('\n');
}
function sections(body) {
  const out = {}; const sectionOrder = [];
  const parts = body.split(/^## /m);
  const head = parts.shift();
  const title = (head.match(/^# (.*)$/m) || [])[1] || null;
  const intro = head.replace(/^# .*$/m, '').trim();
  for (const p of parts) {
    const nl = p.indexOf('\n');
    const name = (nl === -1 ? p : p.slice(0, nl)).trim();
    const text = nl === -1 ? '' : p.slice(nl + 1).trim();
    out[name] = {html: markdown(text)};
    sectionOrder.push(name);
  }
  // NOT `order`: a card's frontmatter already uses that for its place on the home.
  return {title, intro: markdown(intro), sections: out, sectionOrder};
}

/* ---------- read a rung ---------- */

const slug = s => s.toLowerCase().replace(/[^a-z0-9]+/g, '-').replace(/^-|-$/g, '');
// `base` is which of the two areas a rung lives in, and `prefix` is how the entry
// names itself from the repo root, which is what data.js and the library page show.
function readDir(dir, base = LIB, prefix = dir) {
  const p = path.join(base, dir);
  if (!fs.existsSync(p)) return [];
  return fs.readdirSync(p).filter(f => f.endsWith('.md')).sort().map(f => {
    const rel = `${prefix}/${f}`;
    const raw = fs.readFileSync(path.join(p, f), 'utf8');
    const {data, body} = parseFrontmatter(raw, rel);
    const id = data.id || f.replace(/\.md$/, '');
    return Object.assign({}, data, sections(body), {id, file: rel, markdown: raw});
  });
}

// A record's address is <source-id>#<kebab-slug of its Record label>. The label stays close to
// the real API name, because the id is made from it; what a person reads is its plain name, from
// the file's "In plain words" table (the label itself where the table has no row for it).
const tableUnder = (md, heading) => {
  const part = md.split(/^## /m).find(p => p.split('\n')[0].trim() === heading) || '';
  return (part.match(/^\|.*\|$/gm) || []).map(r => r.split('|').slice(1, -1).map(c => c.trim()))
    .filter(c => c.length >= 2 && c[0] && !/^-+$/.test(c[0]) && c[0] !== 'Record');
};
function recordsOf(entries) {
  const recs = [];
  for (const e of entries) {
    const plain = new Map(tableUnder(e.markdown, 'In plain words').map(([label, words]) => [label, words]));
    const rows = tableUnder(e.markdown, 'Records');
    const byLabel = new Map();
    for (const [label, field, source] of rows) {
      if (!byLabel.has(label)) byLabel.set(label, {id: slug(label), label, plain: plain.get(label) || label, source: e.id,
                                                   address: `${e.id}#${slug(label)}`, fields: []});
      byLabel.get(label).fields.push({field, source: source || ''});
    }
    recs.push(...byLabel.values());
  }
  return recs;
}

/* ---------- build ---------- */

const L = {
  modules:    readDir('modules'),
  channels:   readDir('channels'),
  told:       readDir('told'),
  assemblies: readDir('assemblies'),
  counts:     readDir('counts'),
  signals:    readDir('signals'),
  cards:      readDir('cards', SCN_DIR, `${SCN}/cards`),
  widgets:    readDir('widgets'),
  docs:       readDir('docs'),
  templates:  readDir('templates'),
};
L.records = recordsOf([...L.channels, ...L.told]);

const world = {};
for (const w of readDir('world', SCN_DIR, `${SCN}/world`)) world[w.id] = w;

const rowsOf = (entry, col = 1) => (entry.markdown.match(/^\|.*\|$/gm) || [])
  .map(r => r.split('|').slice(1, -1).map(c => c.trim()))
  .filter(c => c.length > col && c[col] && !/^-+$/.test(c[0]) && c[0] !== 'Person' && c[0] !== 'Organisation' && c[0] !== 'Document');

const castIds     = rowsOf(world.cast).map(r => r[1]);
const orgIds      = rowsOf(world.organisations).map(r => r[1])
  .concat((world.organisations.markdown.match(/`([a-z-]+)`/g) || []).map(s => s.replace(/`/g, '')));
const documentIds = rowsOf(world.documents).map(r => r[1]);
// What this seller has to sell. One id or several: `offering` became a list on 21 September,
// because a seller with one product and a broker with four suppliers are the same shape at
// different lengths, and V15 (which of them should this lead go to) needs the list to exist.
// One entry stays valid, and the ids are nouns a card can be about, like a person or a document.
const offeringIds = [].concat((world.goal && world.goal.offering) || []).filter(Boolean);

// The questions are a numbered list under each doc's "The list" heading, so Q18 is item 18.
// Only that list: the docs carry other numbered lists further down. Keep the wording, because a
// card's track-back can then show the question it is ultimately answering. There are three sets:
// Q is the patient seller's, V the volume seller's at the other end of the spectrum, and F, added
// 21 September, a third seller's with a firm around her and tenders on the buyer's side. Each doc
// is matched by its exact filename, so a later doc about the questions cannot stand in for one.
const questionsIn = (file, set) => {
  const doc = L.docs.find(d => d.file === `docs/${file}`) || {markdown: ''};
  const part = doc.markdown.split(/^## /m).find(p => /^The list\b/.test(p.split('\n')[0].trim())) || '';
  return [...part.matchAll(/^(\d{1,2})\. +(.+)$/gm)].map(m => ({id: set + m[1], text: m[2].trim(), set}));
};
const questions = [
  ...questionsIn('sales-questions.md', 'Q'),
  ...questionsIn('volume-questions.md', 'V'),
  ...questionsIn('firm-questions.md', 'F'),
];
const questionIds = questions.map(q => q.id);

/* ---------- validate: every id must resolve ---------- */

const ids = k => new Set(L[k].map(e => e.id));
const has = (set, v) => set.has(v);
const problems = [];

/* ---------- one card, two sellers ---------- */
// Proposed 22 September (playbook/world.md, "One card, two sellers"): a card may carry
// "## Said straight", the same card's own lines for a seller who sells for a living, under heads
// naming the part each replaces. The reads, counts, records, draft and buttons are the card's
// once; only the tool's voice to the seller changes. The section is lifted off the card's
// sections here, so neither the phone nor the library page shows it as a part of the back, and it
// stays in the body, so the figure rule reads it like the rest. The phone does not draw it yet:
// the two versions are on a sheet first, and the phone changes only after the user has looked.
const STRAIGHT = ['Under the title', 'When', 'What happened', 'Still unclear', 'Said back', 'Done'];
for (const c of L.cards) {
  if (!c.sections['Said straight']) continue;
  const part = c.markdown.split(/^## /m).find(p => p.split('\n')[0].trim() === 'Said straight');
  c.straight = {};
  for (const sub of part.split(/^### /m).slice(1)) {
    const nl = sub.indexOf('\n'), head = (nl === -1 ? sub : sub.slice(0, nl)).trim(), text = nl === -1 ? '' : sub.slice(nl + 1).trim();
    if (!STRAIGHT.includes(head)) problems.push(`${c.file}: "## Said straight" has a head "${head}", which is not a part of the card (${STRAIGHT.join(', ')})`);
    c.straight[slug(head)] = markdown(text);
  }
  delete c.sections['Said straight'];
  c.sectionOrder = c.sectionOrder.filter(x => x !== 'Said straight');
}
function must(where, field, values, set, what) {
  for (const v of [].concat(values || [])) {
    if (!v) continue;
    if (!set.has(v)) problems.push(`${where}: ${field} "${v}" does not resolve to a ${what}`);
  }
}
const S = {
  modules: ids('modules'), channels: ids('channels'), told: ids('told'),
  assemblies: ids('assemblies'), counts: ids('counts'), signals: ids('signals'), cards: ids('cards'),
  detail: new Set(L.widgets.filter(w => w.family === 'detail').map(w => w.id)),
  reply:  new Set(L.widgets.filter(w => w.family === 'reply').map(w => w.id)),
  records: new Set(L.records.map(r => r.address)),
  sources: new Set([...ids('channels'), ...ids('told')]),
  cast: new Set(castIds), orgs: new Set(orgIds), documents: new Set(documentIds),
  // Everything a card can be about: a person, an organisation, a document, the offering, you.
  nouns: new Set([...castIds, ...orgIds, ...documentIds, ...offeringIds]),
  questions: new Set(questionIds),
};

// What this seller has plugged in is the scenario's, not the channel's (moved out of the channel
// docs on 20 September). world/goal.md lists it in `connected`; a channel it leaves out is not
// connected, the data gap the cards name. A channel is what it is, so a channel or told doc that
// still says `connected:` fails, and the general layer stays free of one seller's stack.
if (!offeringIds.length) problems.push(`${SCN}/world/goal.md: no offering; name what this seller sells, as one id or a list of them`);
if (new Set(offeringIds).size !== offeringIds.length) problems.push(`${SCN}/world/goal.md: offering names the same id twice`);
/* ---------- the two areas stay apart ---------- */
// The library is the blocks and it names no example. Every rung, widget, module and template is
// checked against the cast and the organisations of EVERY scenario, not just the one being built,
// because a block that knows one seller's world has already stopped being a block. A doc under
// library/docs/ is exempt: those are the notes about the blocks, and the record of how they were
// tested is the one place an example belongs. A card and a world are exempt for the plain reason
// that naming people is their job.
const fiction = [];                              // [what to look for, what it is, where it is from]
for (const name of fs.readdirSync(path.join(ROOT, 'scenarios'))) {
  const dir = path.join(ROOT, 'scenarios', name, 'world');
  if (!fs.existsSync(dir)) continue;
  fiction.push([new RegExp(`\\bscenarios/${name}\\b`), `the ${name} scenario's own files`, name]);
  for (const f of ['cast.md', 'organisations.md']) {
    const file = path.join(dir, f);
    if (!fs.existsSync(file)) continue;
    for (const row of fs.readFileSync(file, 'utf8').match(/^\|.*\|$/gm) || []) {
      const cell = row.split('|').slice(1, -1).map(c => c.trim());
      const [full, id] = cell;
      if (!full || !id || /^-+$/.test(full) || !/^[a-z][a-z0-9-]*$/.test(id)) continue;
      if (id === 'id' || !/^[A-Z]/.test(full)) continue;   // the table's own header row
      if (id === 'you') continue;                         // the seller, who is in every world
      const what = f === 'cast.md' ? 'a person' : 'an organisation';
      fiction.push([new RegExp(`\\b${full.replace(/[.*+?^${}()|[\]\\]/g, '\\$&')}\\b`), `${what} from ${name}`, name]);
      fiction.push([new RegExp(`\\b${id}\\b`), `${what} from ${name}`, name]);
      // A first name alone is how the fiction usually leaks in: "Rachel's promise".
      const first = full.split(/\s+/)[0];
      if (f === 'cast.md' && first.length > 2) fiction.push([new RegExp(`\\b${first}\\b`), `${what} from ${name}`, name]);
    }
  }
}
for (const rung of ['modules', 'channels', 'told', 'assemblies', 'counts', 'signals', 'widgets', 'templates'])
  for (const e of L[rung] || [])
    for (const [re, what] of fiction)
      if (re.test(e.markdown)) {
        problems.push(`${e.file}: names ${what} ("${e.markdown.match(re)[0]}"); the library is the blocks and holds no example. Say the condition, not the case.`);
        break;                                   // one line per file is enough to act on
      }

if (!world.goal || !('connected' in world.goal)) problems.push(`${SCN}/world/goal.md: no connected; list the channels this seller has plugged in, or connected: []`);
else must(world.goal.file, 'connected', world.goal.connected, S.channels, 'channel');
const plugged = new Set([].concat((world.goal && world.goal.connected) || []));
// What this sale has, from the same four words a read's `assumes` draws on (added 21 September).
// A read whose condition the sale does not have does not apply at all, which is not the same as a
// read with a source missing: that one still stands with less to go on. So a card resting on a
// read this sale cannot make is refused rather than given a gap row. The vocabulary is checked
// below, once ASSUMES is defined.
if (!world.goal || !('has' in world.goal)) problems.push(`${SCN}/world/goal.md: no has; say what this sale has, from the assumes vocabulary, or has: []`);
const sale = new Set([].concat((world.goal && world.goal.has) || []));
for (const ch of L.channels) {
  if ('connected' in ch) problems.push(`${ch.file}: connected belongs in ${SCN}/world/goal.md, not on the channel`);
  ch.connected = plugged.has(ch.id);
}
for (const t of L.told) if ('connected' in t) problems.push(`${t.file}: connected; a told source is said, never connected`);

/* ---------- what the tool can connect at all ---------- */
// A second fact beside `connected`, added 22 September on the user's word: what the tool is able
// to offer, whoever the seller is. It lives on the Connections module, whose job that is, as
// `can:`. A channel outside it stays in the library, because a read has to be able to name the
// gap in the story's words, but no card may ask a seller to connect it, and a read whose every
// count needs one is marked silent rather than pretending. A scenario that connects one anyway is
// not refused: it is an exploration of what a later connection would allow, and the build says so.
const cap = L.modules.find(m => m.id === '01-integrations');
const CAN = new Set([].concat((cap && cap.can) || []));
if (!cap || !('can' in cap)) problems.push(`library/modules/01-integrations.md: no can; list the channels the tool can connect today, or can: []`);
else must(cap.file, 'can', cap.can, S.channels, 'channel');
// A world may pretend, in `explores:`, that a channel the tool cannot offer is there, to find out
// what it would allow; it says so, and the build says so back. The shipping world pretends nothing.
const explores = [].concat((world.goal && world.goal.explores) || []);
if (world.goal) must(world.goal.file, 'explores', explores, S.channels, 'channel');
for (const x of explores) if (CAN.has(x)) problems.push(`${SCN}/world/goal.md: explores ${x}, which the tool already offers`);
const OFFER = new Set([...CAN, ...explores]);
for (const id of plugged) if (S.channels.has(id) && !OFFER.has(id))
  problems.push(`${SCN}/world/goal.md: connects ${id}, which the tool cannot offer today (modules/01-integrations.md, can:). Leave it out, or name it in explores: to pretend.`);
// The built library reasons only over what is on offer (the user, 22 September: "the library for
// now shouldn't reason based on those"). The channel docs stay in the folder for the day they
// can be offered; here their records leave every gather, every count and every read. A count
// left with nothing to count is silent, a read whose every count is silent is silent, and no
// card may rest on either. What a scenario explores counts as offered for that scenario only.
const toldIds = new Set(L.told.map(t => t.id));
const offered = r => { const s = String(r).split('#')[0]; return toldIds.has(s) || OFFER.has(s); };
const heldBack = L.channels.filter(ch => !OFFER.has(ch.id)).map(ch => ch.id);
L.channels = L.channels.filter(ch => OFFER.has(ch.id));
for (const ch of L.channels) ch.available = CAN.has(ch.id);
L.records = L.records.filter(r => offered(r.address));
for (const a of L.assemblies) a.inputs = [].concat(a.inputs || []).filter(i => !String(i).includes('#') || offered(i));
const countById = new Map(L.counts.map(c => [c.id, c]));
for (const c of L.counts) { c.needs = [].concat(c.needs || []).filter(offered); c.silent = c.needs.length === 0; }
for (const s of L.signals) {
  s.needs = [].concat(s.needs || []).filter(n => toldIds.has(n) || OFFER.has(n));
  const cs = [].concat(s.counts || []).map(id => countById.get(id)).filter(Boolean);
  const lost = cs.filter(c => c.silent).map(c => c.id);
  s.standing = cs.length && lost.length === cs.length ? 'silent' : lost.length ? 'thinner' : 'whole';
  s.standing_lost = lost;
}

for (const m of L.modules) {
  must(m.file, 'draws_from', m.draws_from, S.channels, 'channel');
  for (const c of m.connects || []) must(m.file, 'connects.to', c.to, S.modules, 'module');
}
for (const a of L.assemblies) {
  must(a.file, 'module', a.module, S.modules, 'module');
  for (const inp of a.inputs || []) {
    if (S.assemblies.has(inp) || S.records.has(inp)) continue;
    problems.push(`${a.file}: inputs "${inp}" does not resolve to a record address or an assembly`);
  }
}
for (const c of L.counts) {
  must(c.file, 'needs', c.needs, S.records, 'record address');
  must(c.file, 'over', c.over, S.assemblies, 'assembly');
  // used_by is derived, so it must match the signals that actually list this count.
  const users = L.signals.filter(s => (s.counts || []).includes(c.id)).map(s => s.id).sort();
  if (users.join() !== [].concat(c.used_by || []).slice().sort().join())
    problems.push(`${c.file}: used_by says [${[].concat(c.used_by || []).join(', ')}], but the signals that list it are [${users.join(', ')}]`);
  // A count counts within one assembly, and every signal quoting it must read that assembly.
  for (const a of [].concat(c.over || []))
    for (const s of L.signals.filter(x => users.includes(x.id)))
      if (!(s.inputs || []).includes(a))
        problems.push(`${c.file}: over "${a}", but signal "${s.id}" uses this count and does not read that assembly`);
}
// What a read needs to exist before it can stand, from a fixed vocabulary (decided 20 September).
// A read says it in `assumes`. An empty list is a claim too: it stands on what it reads alone.
// When a sale does not have what a read assumes, that is an assumption gap, named not faked
// (docs/reading-principles.md, section 4). The words are shown, never resolved as ids.
const ASSUMES = {
  'thread-under-way': 'A conversation already under way with them',
  'own-rhythm':       'Enough history with them to know their usual',
  'several-people':   'Several people to win at the buyer',
  'own-firm':         'A firm beside you, whose records you share',   // added 21 September
};
if (world.goal && 'has' in world.goal)
  for (const h of [].concat(world.goal.has || []))
    if (!ASSUMES[h]) problems.push(`${SCN}/world/goal.md: has "${h}" is not one of ${Object.keys(ASSUMES).join(', ')}`);
const signalsOfEarly = c => [c.signal, ...[].concat(c.supporting || [])]
  .map(id => L.signals.find(s => s.id === id)).filter(Boolean);
for (const s of L.signals) {
  must(s.file, 'module', s.module, S.modules, 'module');
  if (!('assumes' in s)) problems.push(`${s.file}: no assumes; say what the read needs before it can stand, or assumes: []`);
  for (const a of [].concat(s.assumes || []))
    if (!ASSUMES[a]) problems.push(`${s.file}: assumes "${a}" is not one of ${Object.keys(ASSUMES).join(', ')}`);
  must(s.file, 'inputs', s.inputs, S.assemblies, 'assembly');
  must(s.file, 'counts', s.counts, S.counts, 'count');
  must(s.file, 'needs', s.needs, S.sources, 'channel or told source');
  must(s.file, 'answers', s.answers, S.questions, 'sales question');
}
const SURE = ['sure', 'likely', 'a hunch'];
const isDate = v => /^\d{4}-\d{2}-\d{2}$/.test(v || '') && !isNaN(Date.parse(v));
for (const c of L.cards) {
  must(c.file, 'signal', c.signal, S.signals, 'signal');
  must(c.file, 'supporting', c.supporting, S.signals, 'signal');
  must(c.file, 'counts', c.counts, S.counts, 'count');
  // A card quotes only numbers from the reads it rests on: its signal, or one it names as supporting.
  const reads = [c.signal, ...[].concat(c.supporting || [])];
  if ([].concat(c.supporting || []).includes(c.signal))
    problems.push(`${c.file}: "${c.signal}" is both the signal and a supporting signal`);
  for (const n of [].concat(c.counts || [])) {
    const cnt = L.counts.find(x => x.id === n);
    if (cnt && !reads.some(r => [].concat(cnt.used_by || []).includes(r)))
      problems.push(`${c.file}: count "${n}" belongs to [${[].concat(cnt.used_by || []).join(', ')}], which is neither the card's signal nor among its supporting`);
  }
  // A card cannot rest on a read this sale cannot make. An assumption gap is not a data gap: a
  // missing source leaves a read standing with less to go on, a missing condition leaves it not
  // applying at all (docs/reading-principles.md, section 4).
  for (const r of signalsOfEarly(c))
    for (const a of [].concat(r.assumes || []))
      if (!sale.has(a))
        problems.push(`${c.file}: "${r.id}" assumes ${a} (${ASSUMES[a] || a}), which ${SCN} does not have`);
  if (!['act', 'ask', 'connect', 'news'].includes(c.kind))
    problems.push(`${c.file}: kind "${c.kind}" is not one of act, ask, connect, news`);
  // A card may not rest on a read the tool cannot make today, nor quote a count it cannot count.
  for (const id of [c.signal, ...[].concat(c.supporting || [])].filter(Boolean)) {
    const s = L.signals.find(x => x.id === id);
    if (s && s.standing === 'silent') problems.push(`${c.file}: rests on ${id}, which the tool cannot make today: every count under it needs a source it cannot connect`);
  }
  for (const id of [].concat(c.counts || [])) { const k = countById.get(id); if (k && k.silent) problems.push(`${c.file}: quotes ${id}, which cannot be counted from anything the tool can connect today`); }
  // A Connect card asks for one channel, and only one the tool can offer (22 September).
  if (c.kind === 'connect') {
    if (!c.channel) problems.push(`${c.file}: a connect card names the channel it asks for, as channel:`);
    else if (!S.channels.has(c.channel)) problems.push(`${c.file}: channel "${c.channel}" is not a channel`);
    else if (!CAN.has(c.channel)) problems.push(`${c.file}: asks to connect ${c.channel}, which the tool cannot offer yet (modules/01-integrations.md, can:). A card must not ask for what the tool cannot do.`);
    else if (plugged.has(c.channel)) problems.push(`${c.file}: asks to connect ${c.channel}, which this seller already has`);
  }
  // News is the one kind that rests on a record rather than a read (decided 21 September, see
  // playbook/world.md). An outcome with nothing to do carries no opinion, so there is nothing for
  // a signal to say; what it must carry instead is the records that say it happened, named in
  // `rests` and checked like every other join. Every other kind still rests on a read.
  must(c.file, 'rests', c.rests, S.records, 'record address');
  if (c.kind === 'news' && !c.signal && ![].concat(c.rests || []).length)
    problems.push(`${c.file}: a News card rests on a record; name it in rests, as "crm#deal-record"`);
  if (c.kind !== 'news' && [].concat(c.rests || []).length)
    problems.push(`${c.file}: rests is News only; every other kind rests on a read, in signal`);
  if (c.kind !== 'news' && !c.signal)
    problems.push(`${c.file}: no signal; only a News card may rest on a record instead of a read`);
  if (![].concat(c.about || []).length) problems.push(`${c.file}: about names nothing; a card is about at least one noun`);
  must(c.file, 'about', c.about, S.nouns, 'person, organisation, document or offering in world/');
  must(c.file, 'to', c.to, new Set(castIds.filter(x => x !== 'you')), 'person in world/cast.md other than you');
  if (c.to && c.kind !== 'act') problems.push(`${c.file}: only an Act reaches someone, so only an Act has a to`);
  must(c.file, 'documents', c.documents, S.documents, 'document in world/documents.md');
  must(c.file, 'held_by', c.held_by, S.cards, 'card');
  must(c.file, 'changes', c.changes, S.cards, 'card');
  if (c.changes && c.kind !== 'ask') problems.push(`${c.file}: only an Ask's answer changes other cards`);
  // A limit on how many to pick: only for several choices, and fewer than there are to pick from.
  for (const x of [].concat(c.actions || []).filter(x => x.limit)) {
    const n = [].concat(c.answers || c.picks || []).length;
    if (!c.reply || c.reply.module !== 'several') problems.push(`${c.file}: limit ${x.limit} on "${x.label}", but the reply is not several choices`);
    else if (!(+x.limit > 0 && +x.limit < n)) problems.push(`${c.file}: limit ${x.limit} must be between 1 and one fewer than the ${n} choices`);
  }
  // The moment, in real dates: the day the tool puts it on the home (`arrives`) and the day it
  // goes stale (`when.until`). The words say it for the seller; the dates say it for the week
  // (decided 19 September). A working day, never before today, never after it goes stale.
  const w = c.when;
  if (w) {
    if (!['fresh', 'dated', 'rhythm'].includes(w.mode)) problems.push(`${c.file}: when.mode "${w.mode}" is not fresh, dated or rhythm`);
    if (w.until && !isDate(w.until)) problems.push(`${c.file}: when.until "${w.until}" is not a date (YYYY-MM-DD)`);
    if (w.mode === 'dated' && !w.until) problems.push(`${c.file}: a dated when needs the world's date as until`);
    if (!w.words) problems.push(`${c.file}: when needs its words, the line the seller reads`);
  }
  if (c.arrives) {
    if (!isDate(c.arrives)) problems.push(`${c.file}: arrives "${c.arrives}" is not a date (YYYY-MM-DD)`);
    else {
      if ([0, 6].includes(new Date(c.arrives + 'T12:00:00Z').getUTCDay())) problems.push(`${c.file}: arrives ${c.arrives} is a weekend`);
      if (c.arrives < world.goal.today) problems.push(`${c.file}: arrives ${c.arrives}, before today (${world.goal.today})`);
      if (w && w.until && c.arrives > w.until) problems.push(`${c.file}: arrives ${c.arrives}, after it goes stale (${w.until})`);
    }
  }
  // What the tool watches for once you act: a line on the days it is open, and a card that
  // arrives only if what it watches for comes (`then`). The words come from What happens next.
  for (const x of [].concat(c.watch || [])) {
    if (!x.for) problems.push(`${c.file}: a watch needs a for, what it watches for`);
    if (x.until && !isDate(x.until)) problems.push(`${c.file}: watch until "${x.until}" is not a date`);
    if (x.then) {
      must(c.file, 'watch then', x.then, S.cards, 'card');
      const t = L.cards.find(y => y.id === x.then);
      if (t && t.arrives) problems.push(`${t.file}: arrives only if ${c.id}'s watch turns it up, so it has no arrives`);
    }
  }
  if (!c.arrives && !L.cards.some(y => [].concat(y.watch || []).some(x => x.then === c.id)))
    problems.push(`${c.file}: no arrives, and no watch turns it up; say which day it comes`);
  // How sure: one of three words, earned from the weakest evidence under the card, and it
  // always says why (decided 18 September; the rule is in docs/reading-principles.md).
  if (c.sure && !SURE.includes(c.sure))
    problems.push(`${c.file}: sure "${c.sure}" is not one of ${SURE.map(w => `"${w}"`).join(', ')}`);
  if (c.sure && !c.sure_because)
    problems.push(`${c.file}: sure "${c.sure}" needs a sure_because line saying what it stands on`);
}

/* ---------- the catalog: widgets a card picks from and fills, never arranges ---------- */

for (const w of L.widgets) {
  if (!['detail', 'reply'].includes(w.family))
    problems.push(`${w.file}: family "${w.family}" is neither detail nor reply`);
  for (const f of w.fed_by || [])
    if (!S.assemblies.has(f) && !S.counts.has(f))
      problems.push(`${w.file}: fed_by "${f}" does not resolve to an assembly or a count`);
  // Grounding: walk fed_by down through the assemblies (and a count's `over` and `needs`) to the
  // records it can actually show. A detail widget that reaches none must say what it waits on.
  if (w.family !== 'detail') continue;
  const seen = new Set(), todo = [...(w.fed_by || [])];
  while (todo.length) {
    const x = todo.pop();
    if (seen.has(x)) continue;
    seen.add(x);
    const asm = L.assemblies.find(a => a.id === x), cnt = L.counts.find(c => c.id === x);
    if (asm) todo.push(...(asm.inputs || []));
    if (cnt) todo.push(...[].concat(cnt.over || []), ...[].concat(cnt.needs || []));
  }
  w.reaches = [...seen].filter(x => S.records.has(x)).sort();
  if (!w.reaches.length && !w.waits_on)
    problems.push(`${w.file}: reaches no record through fed_by; ground it, or say what it waits_on`);
  if (w.reaches.length && w.waits_on)
    problems.push(`${w.file}: reaches ${w.reaches.length} records, so it no longer waits_on "${w.waits_on}"; remove that line`);
}
// Everything a card rests on: its counts, the inputs of its signal and its supporting signals,
// each count's `over`, and every assembly those gather. A card that names what to send
// (`documents`) also rests on the evidence library: why to write is traced through the signal,
// what to send is its own trail (decided 18 September, by looking).
const signalsOf = c => [c.signal, ...[].concat(c.supporting || [])]
  .map(id => L.signals.find(s => s.id === id)).filter(Boolean);
function restsOn(c) {
  const out = new Set(c.counts || []);
  const todo = [...signalsOf(c).flatMap(s => s.inputs || []),
                ...[].concat(c.counts || []).flatMap(n => [].concat((L.counts.find(x => x.id === n) || {}).over || [])),
                ...((c.documents || []).length ? ['proof-library'] : [])];
  while (todo.length) {
    const a = todo.pop();
    if (out.has(a)) continue;
    out.add(a);
    const asm = L.assemblies.find(x => x.id === a);
    for (const inp of (asm && asm.inputs) || []) if (S.assemblies.has(inp)) todo.push(inp);
  }
  return out;
}
// The sources a card's trail reaches: the channel or told file behind every record it gathers.
// The Brain's told pile is always there, because the Brain weighs every card against the goal.
function sourcesOf(c) {
  const out = new Set(['goal-told']);
  for (const r of [].concat(c.rests || [])) out.add(r.split('#')[0]);
  for (const a of restsOn(c)) {
    const asm = L.assemblies.find(x => x.id === a);
    for (const inp of (asm && asm.inputs) || []) if (S.records.has(inp)) out.add(inp.split('#')[0]);
  }
  return out;
}
// Every channel a gather reaches, walking down through the assemblies it stands on. Told sources
// are left out on purpose: a told source is said, never connected, so it is always there to ask.
function channelsUnder(id, seen = new Set()) {
  if (seen.has(id)) return [];
  seen.add(id);
  const asm = L.assemblies.find(a => a.id === id);
  if (!asm) return [];
  const out = new Set();
  for (const inp of asm.inputs || []) {
    if (S.records.has(inp)) { const src = inp.split('#')[0]; if (S.channels.has(src)) out.add(src); }
    else for (const x of channelsUnder(inp, seen)) out.add(x);
  }
  return [...out];
}
const sourceById = id => L.channels.find(x => x.id === id) || L.told.find(x => x.id === id);
const sourceName = id => { const s = sourceById(id); return !s ? id : s.source === 'told' ? 'You told me' : s.name.replace(/ \/ .*/, ''); };
// A detail widget's rows are the list items under the body heading that carries its label.
const rowsUnder = (md, heading) => {
  const m = md.split(/^## /m).find(p => p.split('\n')[0].trim() === heading);
  return m ? (m.match(/^[-*] .*$/gm) || []).map(l => l.replace(/^[-*] /, '').split(' · ').map(s => s.trim())) : null;
};
for (const c of L.cards) {
  if (c.reply && c.reply.module && !S.reply.has(c.reply.module))
    problems.push(`${c.file}: reply.module "${c.reply.module}" is not a reply widget in widgets/`);
  const picked = [].concat(c.widgets || []);
  if (picked.length > 2) problems.push(`${c.file}: ${picked.length} detail widgets; a card takes at most two`);
  const base = restsOn(c);
  c.widgetRows = {};
  for (const id of picked) {
    if (!S.detail.has(id)) { problems.push(`${c.file}: widgets "${id}" is not a detail widget in widgets/`); continue; }
    const w = L.widgets.find(x => x.id === id);
    if (!(w.fed_by || []).some(f => base.has(f)))
      problems.push(`${c.file}: widget "${id}" is fed by ${(w.fed_by || []).join(', ')}, and the card rests on none of them`);
    // The section carries the widget's label, unless the card names what it shows (widget_heads).
    const head = (c.widget_heads && c.widget_heads[id]) || w.label;
    const rows = rowsUnder(c.markdown, head);
    if (!rows || !rows.length) { problems.push(`${c.file}: widget "${id}" has no rows under "## ${head}"`); continue; }
    const bad = rows.filter(r => r.length !== Number(w.parts));
    if (bad.length) problems.push(`${c.file}: "## ${head}" rows need ${w.parts} parts split by " · " (${bad.length} don't)`);
    if (w.rows && rows.length !== Number(w.rows)) problems.push(`${c.file}: "## ${head}" needs exactly ${w.rows} rows, has ${rows.length}`);
    c.widgetRows[id] = rows;
  }
  // Sources: each row is `source-ids · words`. The words are the card's; the sources are
  // checked against the trail, so the list cannot claim a source the card does not rest on.
  // A source a card's reads need but that is not connected is a data gap: it may be named even
  // off the trail, and when the card does not name it in its own words, the build does.
  const read = c.sections['Sources'] ? c.markdown.split(/^## /m).find(p => p.split('\n')[0].trim() === 'Sources') : null;
  if (!read) continue;
  const reach = sourcesOf(c);
  const needed = new Set(signalsOf(c).flatMap(s => s.needs || []));
  c.readRows = [];
  for (const line of read.match(/^[-*] .*$/gm) || []) {
    const t = line.replace(/^[-*] /, ''), at = t.indexOf(' · ');
    if (at === -1) { problems.push(`${c.file}: Sources row "${t.slice(0, 40)}…" needs its sources first, as "gmail · words"`); continue; }
    const srcs = t.slice(0, at).split(',').map(s => s.trim()), words = t.slice(at + 3).trim();
    for (const s of srcs) {
      const src = sourceById(s);
      if (!src) problems.push(`${c.file}: Sources source "${s}" is not a channel or told source`);
      else if (!reach.has(s) && !(needed.has(s) && src.connected === false))
        problems.push(`${c.file}: Sources names "${s}", but nothing the card rests on reaches it`);
    }
    c.readRows.push({sources: srcs, words, from: srcs.map(sourceName).join(', ')});
  }
  for (const s of needed) {
    const src = sourceById(s);
    if (!src || src.connected !== false || c.readRows.some(r => r.sources.includes(s))) continue;
    const who = signalsOf(c).filter(x => (x.needs || []).includes(s)).map(x => x.label.toLowerCase());
    const how = src.available === false ? `${src.name} is not something I can see yet` : `${src.name} is not connected`;
    c.readRows.push({sources: [s], words: `${how}. The ${who.join(' and ')} ${who.length > 1 ? 'reads lean' : 'read leans'} on it, so I have less to go on here.`, from: sourceName(s), gap: true});
  }
  // A card that names what to send has to be able to fetch it (added 21 September, after a card
  // at the fast end offered a document off a shelf its world does not have). The evidence shelf's
  // files come from a channel; where not one of them is connected, the shelf is empty here and
  // the card says so. Deliberately narrow: a gather that merely touches an unconnected channel
  // finds nothing there and is fine, and a row for every one of those would put a line about SMS
  // on almost every patient-sale card. A promise to attach something is different, because the
  // card has claimed it.
  if ([].concat(c.documents || []).length) {
    const shelf = channelsUnder('proof-library');
    if (shelf.length && !shelf.some(x => (sourceById(x) || {}).connected)) {
      for (const x of shelf) {
        if (c.readRows.some(r => r.sources.includes(x))) continue;
        const src = sourceById(x);
        c.readRows.push({sources: [x], words: `${src.name} is ${src.available === false ? 'not something I can see yet' : 'not connected'}, and the evidence shelf lives there. I can tell you what to send; I cannot fetch it for you.`, from: sourceName(x), gap: true});
      }
    }
  }
}

/* ---------- a card may not state a figure the world does not carry ---------- */
// Proposed on 22 September, after one person's records showed three numbers on one card that
// nothing could have produced, and built the same day on the user's word: for the people who have
// a section in world/records.md, and nobody else, so it fails nothing for a person nobody has
// reached yet. Every figure in a card's prose, a number or a day of the month, has to appear in
// that person's section: in a record's row, or in the section's own "What the counts give" table,
// where the figures the counts compute are written down beside the count that gives them. A date
// is matched as "day month". A number is matched only against numbers that are not dates, so a
// fifteen cannot hide behind the fifteenth of a month. Years and clock times are left alone, and
// a word is a number too ("fifteen" is 15). Weak on small numbers, which is known; strong on the
// ones that matter, which is what it is for.
const MONTHS = {jan: 'Jan', january: 'Jan', feb: 'Feb', february: 'Feb', mar: 'Mar', march: 'Mar', apr: 'Apr', april: 'Apr', may: 'May', jun: 'Jun', june: 'Jun', jul: 'Jul', july: 'Jul', aug: 'Aug', august: 'Aug', sep: 'Sep', sept: 'Sep', september: 'Sep', oct: 'Oct', october: 'Oct', nov: 'Nov', november: 'Nov', dec: 'Dec', december: 'Dec'};
const WORDS = {one: 1, two: 2, three: 3, four: 4, five: 5, six: 6, seven: 7, eight: 8, nine: 9, ten: 10, eleven: 11, twelve: 12, thirteen: 13, fourteen: 14, fifteen: 15, sixteen: 16, seventeen: 17, eighteen: 18, nineteen: 19, twenty: 20, thirty: 30, forty: 40, fifty: 50, sixty: 60, seventy: 70, eighty: 80, ninety: 90, hundred: 100, once: 1, twice: 2};
const monthRe = Object.keys(MONTHS).join('|');
function figuresIn(text) {
  const dates = new Set(), numbers = new Set();
  // Clock times, years, and spans of seconds, minutes or hours are left alone: the last are the
  // tool's own estimate of your effort ("ten seconds") or a proposal ("a twenty-minute call"),
  // not a claim about the world. Days, weeks and months are claims, and are checked.
  let t = text.replace(/\b\d{1,2}:\d{2}\b/g, ' ').replace(/\b(19|20)\d{2}\b/g, ' ')
    .replace(/\b[\w.]+[- ](second|minute|hour)s?\b/gi, ' ');
  t = t.replace(new RegExp(`\\b(\\d{1,2})(?:st|nd|rd|th)? (${monthRe})\\b`, 'gi'), (_, d, m) => { dates.add(`${+d} ${MONTHS[m.toLowerCase()]}`); return ' '; });
  for (const m of t.match(/\b\d+(?:\.\d+)?\b/g) || []) numbers.add(String(+m));
  t = t.replace(/\b(twenty|thirty|forty|fifty|sixty|seventy|eighty|ninety)-(one|two|three|four|five|six|seven|eight|nine)\b/gi,
    (_, a, b) => { numbers.add(String(WORDS[a.toLowerCase()] + WORDS[b.toLowerCase()])); return ' '; });
  for (const m of t.match(new RegExp(`\\b(${Object.keys(WORDS).join('|')})\\b`, 'gi')) || []) numbers.add(String(WORDS[m.toLowerCase()]));
  return {dates, numbers};
}
// A card's prose: its body, and every string in its front matter that reads as words rather than
// as an id or a date (the phone's lines, the sure_because, the watch, the answers).
function proseOf(c) {
  const out = [c.markdown.replace(/^---\n[\s\S]*?\n---\n?/, '')];   // the body; the front matter's prose is walked below
  (function walk(v) {
    if (typeof v === 'string') { if (/\s/.test(v.trim()) && !isDate(v)) out.push(v); }
    else if (Array.isArray(v)) v.forEach(walk);
    else if (v && typeof v === 'object') for (const [k, x] of Object.entries(v)) if (!['markdown', 'file', 'sections', 'widgetRows', 'readRows'].includes(k)) walk(x);
  })(c);
  return out.join('\n');
}
const recordSections = new Map();
if (world.records) for (const part of world.records.markdown.split(/^## /m).slice(1)) {
  const row = rowsOf(world.cast).find(r => r[0] === part.split('\n')[0].trim());
  if (row) recordSections.set(row[1], part);
}
// The rest of the world is in the pool too: the organisations, the documents and the goal are
// small tables any card may quote from ("live fourteen months", "one of your thirty").
const worldFigures = figuresIn(['organisations', 'documents', 'goal'].map(k => (world[k] || {}).markdown || '').join('\n'));
let figured = 0, unfigured = 0;
for (const c of L.cards) {
  const people = [...new Set([c.to, ...[].concat(c.about || [])].filter(p => p && recordSections.has(p)))];
  if (!people.length) { unfigured++; continue; }
  figured++;
  const have = {dates: new Set(worldFigures.dates), numbers: new Set(worldFigures.numbers)};
  for (const p of people) { const f = figuresIn(recordSections.get(p)); f.dates.forEach(x => have.dates.add(x)); f.numbers.forEach(x => have.numbers.add(x)); }
  const said = figuresIn(proseOf(c));
  const missing = [...[...said.dates].filter(d => !have.dates.has(d)), ...[...said.numbers].filter(n => !have.numbers.has(n))];
  if (missing.length) problems.push(`${c.file}: states ${missing.join(', ')}, which the records of ${people.join(' and ')} do not carry. A card may not state a figure the world does not carry (world/records.md).`);
}

/* ---------- the message: what a draft rests on ---------- */
// A card with a draft says what its message rests on, in four rows under "## The message", in
// this order: what it opens with, what it points at, what it asks, and what it holds back (decided
// 22 September; the argument is docs/message-shape.md). Each row is `part · words · rests`, and
// what it rests on is checked the way Sources rows are: a count the card quotes, a count of the
// envelope (the counts under `pushing`, which say what a thread can honestly carry and hold for
// every draft), a document the card sends, a told source, or a channel the card's trail reaches.
// The opening has to rest on what is owed, a fresh reason, their own date, the angle, or a worry in
// their own words; or, on a
// card a watch turns up, on what came back. A decided card must carry the rows; a card still
// provisional is counted and named, because its message cannot be traced before its reads are.
const MESSAGE_HEADS = ['opens with', 'points at', 'asks', 'holds back'];
const envelope = new Set([].concat((L.signals.find(s => s.id === 'pushing') || {}).counts || []));
// What a message may open on: what is owed (three counts), a fresh reason (published about them,
// or published by them: the counts under stated-priorities), their own date, the angle (the
// counts under lead-with-this), or a worry in their own words (the two counts that keep the
// passages: added 22 September, when Felton's price card had no sanctioned opening for a message
// that answers a worry the buyer raised four times; docs/message-shape.md), or the name a departure
// notice handed you (added the same day, from Moreton: the note to a successor opens on the
// automatic reply that named them, which is the one thing the two of you already share), or, on a
// note to a colleague, the contact of theirs the record holds, in their own words (added 22 September,
// from a colleague who said in the workspace that he knew the target: the note that asks him for the
// introduction opens on what he said, which is the one thing the two of you already share), or
// what they sent, by name (added 22 September, from the fast end: a text that asks for the one
// document still out opens on the two that came, which is the one thing you both already know,
// and a chase that opens anywhere else reads as a form letter), or, after the sale, their own
// clock or what their account did (added 22 September, from the broker's customers: a note to
// somebody near the end of the term they agreed opens on that term, a date of theirs agreed rather
// than said, and a note about two returned debits opens on the debits, which they know better than
// you; the list had nothing written for a customer, because no card to one had met it).
const openers = new Set(['auto-reply-no-longer-with', 'colleague-touches-on-record', 'documents-received', 'how-far-through-the-term', 'agreed-payments-not-on-record', 'promise-made-undelivered', 'their-question-unanswered', 'things-they-asked-you-for',
  'fresh-reason-to-write', 'dated-facts-in-their-words', 'repeated-objection-count', 'objection-raised-on-call',
  ...['lead-with-this', 'stated-priorities'].flatMap(id => [].concat((L.signals.find(s => s.id === id) || {}).counts || []))]);
const toldSources = new Set(L.told.map(t => t.id));
let shaped = 0; const unshaped = [];
for (const c of L.cards) {
  if (!c.sections['The draft']) continue;
  const rows = rowsUnder(c.markdown, 'The message');
  if (!rows) {
    if (c.signal_status === 'decided') problems.push(`${c.file}: has a draft and no "## The message"; a decided card says what its message opens with, points at, asks and holds back`);
    else unshaped.push(c.id);
    continue;
  }
  shaped++;
  const heads = rows.map(r => r[0]);
  if (heads.join('|') !== MESSAGE_HEADS.join('|'))
    problems.push(`${c.file}: "## The message" needs four rows, in order: ${MESSAGE_HEADS.join(', ')} (has: ${heads.join(', ')})`);
  const reach = sourcesOf(c), mine = new Set([...[].concat(c.counts || []), ...envelope]), docs = new Set([].concat(c.documents || []));
  c.messageRows = [];
  for (const r of rows) {
    if (r.length !== 3) { problems.push(`${c.file}: "## The message" row "${r[0]}" needs three parts split by " · ": the part, the words, what it rests on`); continue; }
    const rests = r[2].split(',').map(x => x.trim()).filter(Boolean);
    for (const id of rests)
      if (!mine.has(id) && !docs.has(id) && !toldSources.has(id) && !reach.has(id))
        problems.push(`${c.file}: "## The message" rests "${r[0]}" on "${id}", which is not a count the card quotes, a count of the envelope, a document it sends, a told source, or a channel it reaches`);
    if (r[0] === 'opens with' && !rests.some(id => openers.has(id) || (!c.arrives && reach.has(id))))
      problems.push(`${c.file}: the message opens on ${rests.join(', ') || 'nothing'}. It has to open on what is owed, a fresh reason, their own date, the angle, a worry in their own words, what they sent, or, after the sale, their own clock or what their account did (${[...openers].join(', ')}), or on what came back when a watch turned the card up`);
    c.messageRows.push({part: r[0], words: r[1], rests});
  }
}

/* ---------- the phone: what a card says on playbook/phone.html ---------- */
// A card the phone shows carries a `phone:` block with the words that differ from the card's
// own (decided 19 September: the phone is built from the library, not typed into the deck).
// The build checks that what the phone will reach for is there, so the phone never guesses.
const ACT_DOES = ['send', 'tap', 'open', 'view'];
const SHEETS = ['choices', 'several', 'field'];
const orgRows = new Map(rowsOf(world.organisations).map(r => [r[1], r[0]]));
const orgOf = c => [].concat(c.about || []).find(a => orgRows.has(a));
const documentRows = new Map(rowsOf(world.documents).map(r => [r[1], r[0]]));
for (const c of L.cards) {
  // Short names for the phone's badges: "Bramley", not "Bramley District Council".
  if (orgOf(c))
    c.orgName = orgRows.get(orgOf(c)).replace(/\s+((District|County|Borough|City|Metropolitan)\s+)*(Council|Borough)$/, '');
  c.documentNames = [].concat(c.documents || []).filter(d => documentRows.has(d))
    .map(d => documentRows.get(d).replace(/^The /, '')).map(n => n[0].toUpperCase() + n.slice(1));
  const p = c.phone;
  if (!p) continue;
  if (!p.act) problems.push(`${c.file}: phone needs an act, the words on the filled action`);
  if (!ACT_DOES.includes(p.act_does))
    problems.push(`${c.file}: phone act_does "${p.act_does}" is not one of ${ACT_DOES.join(', ')}`);
  if (p.act_does === 'view' && !(c.draft && c.draft.hand))
    problems.push(`${c.file}: phone act_does view raises the draft and hands it over, but draft.hand says nothing`);
  if ((['send', 'view'].includes(p.act_does) || p.view) && !c.sections['The draft'])
    problems.push(`${c.file}: phone ${p.view ? `view "${p.view}"` : 'act_does send'} raises the draft, but there is no "## The draft"`);
  if (p.act_does === 'open' && !SHEETS.includes(c.reply && c.reply.module))
    problems.push(`${c.file}: phone act_does open raises a sheet, but reply.module is not one of ${SHEETS.join(', ')}`);
  if (p.act_does === 'open' && c.reply && c.reply.module !== 'field' && !(c.answers || c.picks || []).length)
    problems.push(`${c.file}: phone act_does open raises ${c.reply.module}, but the card has no answers`);
}

/* ---------- what first: what does waiting a day cost? ---------- */
// Decided 18 September; the rule is in modules/00-spine.md. Every card's band comes from
// what it already carries, so nothing about its place is typed by hand except the last
// tie-break, `order`. A held card is not banded: it sits right under the last card it waits on.
const BANDS = ['Gone tomorrow', 'Worse every day', 'Holding something up', 'A date further off',
               'Due by its rhythm', 'Costs nothing to wait'];
const DAY = 86400000;
// What somebody is waiting on you for. `told-them-since` joined on 21 September: an answer has
// landed on the deal and nothing has gone to the buyer since, which is the same shape as a promise
// you have not kept. `their-question-unanswered` joined on 22 September, when a card was found
// quoting `ask-made-unanswered` (your question to them) for a question of theirs: the day's order
// was right for the wrong reason. `their-promise-undelivered` is deliberately not here: that is
// them owing you, and waiting a day on it costs a day of someone else's lateness, not of yours.
// `ask-made-unanswered` came off the same day: a question of yours they have not answered is them
// owing you, the same shape as their promise, and the two cards that quoted it were both describing
// a question of theirs. (My reason, not yet yours.)
const OWED = ['promise-made-undelivered', 'their-question-unanswered', 'told-them-since'];
const owes = c => [].concat(c.counts || []).some(n => OWED.includes(n));
const gives = c => [].concat(c.documents || []).length > 0;
// The band a card would have on its own, on the day it arrives, before anything waits on it.
function ownBand(c) {
  const w = c.when || {}, on = Date.parse((c.arrives || world.goal.today) + 'T00:00:00Z');
  if (w.until && Date.parse(w.until + 'T00:00:00Z') - on <= DAY) return 1;
  if (w.mode === 'fresh' || owes(c)) return 2;
  if (w.mode === 'dated') return 4;
  if (w.mode === 'rhythm') return 5;
  return 6;
}

// Who waits on whom. The tool decides it from what the cards carry, not the seller (decided
// 19 September). Four ways a card comes to wait:
//   1. an Ask names it in `changes`: the answer changes it, so it waits for the answer;
//   2. it names `held_by`: a sequence its own words give ("once the note has gone");
//   3. a watch turns it up (`then`): it waits on the card that set the watch, and on the reply;
//   4. it is a second Act to the same person: one move per person at a time. What arrives
//      first goes first, then what is owed, then what gives before what asks, then the band.
//      (My reason, not yet yours.)
// Two Acts to one person that nothing tells apart should be one card, and the build says so.
const waitsOn = new Map(L.cards.map(c => [c.id, new Set([].concat(c.held_by || []))]));
for (const a of L.cards) for (const id of [].concat(a.changes || [])) if (waitsOn.has(id)) waitsOn.get(id).add(a.id);
for (const a of L.cards) for (const x of [].concat(a.watch || [])) if (waitsOn.has(x.then)) waitsOn.get(x.then).add(a.id);
const byPerson = new Map();
for (const c of L.cards) if (c.kind === 'act' && c.to) byPerson.set(c.to, [...(byPerson.get(c.to) || []), c]);
const arrival = c => c.arrives || '9999-12-31';   // turned up by a watch: after everything scheduled
const firstMove = (a, b) => (arrival(a) < arrival(b) ? -1 : arrival(a) > arrival(b) ? 1 : 0) ||
  owes(b) - owes(a) || gives(b) - gives(a) || ownBand(a) - ownBand(b);
for (const [person, moves] of byPerson) {
  // A sequence the cards already state wins over the rule.
  const stated = (a, b) => waitsOn.get(b.id).has(a.id) ? -1 : waitsOn.get(a.id).has(b.id) ? 1 : 0;
  moves.sort((a, b) => stated(a, b) || firstMove(a, b) || (a.order || 0) - (b.order || 0));
  for (let i = 1; i < moves.length; i++) {
    const [prev, c] = [moves[i - 1], moves[i]];
    if (!stated(prev, c) && !firstMove(prev, c) && (prev.when || {}).until === (c.when || {}).until)
      problems.push(`${c.file}: a second move to ${person} that nothing tells apart from ${prev.id}; write these as one card`);
    waitsOn.get(c.id).add(prev.id);
  }
}
for (const c of L.cards) {
  c.waits_on = [...waitsOn.get(c.id)];
  if (c.waits_on.length && !c.held_words)
    problems.push(`${c.file}: waits on ${c.waits_on.join(', ')} but has no held_words, the line it shows while it waits`);
  if (!c.waits_on.length && c.held_words)
    problems.push(`${c.file}: has held_words but waits on nothing`);
}
for (const c of L.cards) for (const id of c.waits_on) {
  const h = L.cards.find(x => x.id === id);
  if (c.arrives && h && h.arrives && c.arrives < h.arrives)
    problems.push(`${c.file}: arrives ${c.arrives}, before ${id} (${h.arrives}), which it waits on`);
}
const heldOn = new Set(L.cards.flatMap(c => c.waits_on));
function bandOf(c) { const b = ownBand(c); return b > 3 && heldOn.has(c.id) ? 3 : b; }

// Ties: what somebody is waiting on you for first, then the organisation further up the ladder,
// then the surer card, then `order`. The waiting test went in front of the ladder on 21 September,
// after the broker's day put an offer nobody had passed on third. A band asks what waiting a day
// costs; the ladder asks what a deal is worth. That is a different question, and asking it first
// inside a band was the one place the order stopped answering its own. (My reason, not yet yours.)
const ladder = [].concat((world.goal && world.goal.ladder) || []);
const stands = new Map(rowsOf(world.organisations).map(r => [r[1], r[2]]));
const ladderRank = c => orgOf(c) ? ladder.indexOf(stands.get(orgOf(c)) || ladder[0]) : -1;
const sureRank = c => c.sure ? SURE.length - SURE.indexOf(c.sure) : 0;
const byPlace = (a, b) => a.band - b.band || owes(b) - owes(a) || ladderRank(b) - ladderRank(a) || sureRank(b) - sureRank(a) || (a.order || 0) - (b.order || 0);
for (const c of L.cards) if (!c.waits_on.length) { c.band = bandOf(c); c.bandWords = BANDS[c.band - 1]; }
const sorted = [];
(function place(list) {
  for (const c of list.sort(byPlace)) {
    if (sorted.includes(c)) continue;
    sorted.push(c);
    // A waiting card follows once everything it waits on is placed, and takes the band of the last.
    place(L.cards.filter(x => x.waits_on.includes(c.id) && x.waits_on.every(id => sorted.some(s => s.id === id)))
      .map(x => Object.assign(x, {band: c.band, bandWords: c.bandWords})));
  }
})(L.cards.filter(c => !c.waits_on.length));
for (const c of L.cards) if (!sorted.includes(c))
  problems.push(`${c.file}: waits on ${c.waits_on.join(', ')}, which never reaches a card that waits on nothing, so it has no place`);

// The week: for each day, the cards the tool puts on the home that day, in the home's order.
// A card that waits is listed on its day too; the phone shows it once what it waits on is done.
// A card a watch turns up has no day. The watches themselves are on their cards, for the phone.
const days = {};
for (const c of sorted) if (c.arrives) (days[c.arrives] = days[c.arrives] || []).push(c.id);

if (problems.length) {
  console.error(`\n${problems.length} unresolved reference${problems.length > 1 ? 's' : ''}:\n`);
  for (const p of problems) console.error('  ' + p);
  console.error('\nNothing written. Fix the ids above, or add the entry they point at.\n');
  process.exit(1);
}

/* ---------- write ---------- */

const payload = Object.assign({
  today: world.goal && world.goal.today,
  generated: new Date().toISOString().slice(0, 10),
  world,
  questions,
  assumptions: ASSUMES,         // the vocabulary a signal's `assumes` draws on, with its plain words
  scenario: SCENARIO,
  capabilities: [...CAN],       // what the tool can connect today, from modules/01-integrations.md
  heldBack,                     // channels written up and not offered: out of the reasoning until they are
  explores,                     // channels this world pretends are offered, to explore
  day: sorted.map(c => c.id),   // the home's order, first to last
  days,                         // date -> the ids whose moment is open that day, in the home's order
}, L);

fs.mkdirSync(path.dirname(OUT), {recursive: true});
fs.writeFileSync(OUT,
  '// Generated by build.js from library/. Do not edit: run `node build.js` instead.\n' +
  'window.LIBRARY = ' + JSON.stringify(payload, null, 1) + ';\n');

const kb = (fs.statSync(OUT).size / 1024).toFixed(0);
console.log('library builds clean. every id resolves.\n');
for (const k of ['modules','channels','told','records','assemblies','counts','signals','cards','widgets','docs','templates'])
  console.log(`  ${String((L[k] || []).length).padStart(3)}  ${k}`);
console.log(`\n  wrote playbook/assets/data.js (${kb} KB)`);
const standing = k => L.signals.filter(s => s.standing === k).length;
console.log(`  under what the tool can connect today: ${standing('whole')} reads whole, ${standing('thinner')} thinner, ${standing('silent')} silent`);
if (heldBack.length) console.log(`  held back, out of the reasoning: ${heldBack.join(', ')}`);
console.log(`  message rows on ${shaped} draft${shaped === 1 ? '' : 's'}; ${unshaped.length} draft${unshaped.length === 1 ? '' : 's'} without, on cards not yet decided`);
console.log(`  figures checked on ${figured} card${figured === 1 ? '' : 's'} whose people have records; ${unfigured} skipped, their people have none yet`);
if (explores.length) console.log(`  note: ${SCENARIO} pretends ${explores.join(', ')}, which the tool cannot offer today, to explore what they would allow.`);

