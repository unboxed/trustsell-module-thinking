#!/usr/bin/env node
// Reads library/ and writes playbook/assets/data.js.
// The library is general; the pretend world and its cards are one scenario of it, in
// library/scenarios/<name>/. Change SCENARIO to build the playbook from another.
// Node only, no packages, nothing to install. Run it after editing the library:
//     node build.js
// It fails loudly when an id does not resolve. That is the point of it: the joins
// between the floors are what went missing before, so nothing is allowed to dangle.

const fs = require('fs'), path = require('path');
const SCENARIO = 'bops';
const ROOT = __dirname, LIB = path.join(ROOT, 'library'), SCN = `scenarios/${SCENARIO}`;
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
function readDir(dir) {
  const p = path.join(LIB, dir);
  if (!fs.existsSync(p)) return [];
  return fs.readdirSync(p).filter(f => f.endsWith('.md')).sort().map(f => {
    const rel = `${dir}/${f}`;
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
  cards:      readDir(`${SCN}/cards`),
  widgets:    readDir('widgets'),
  docs:       readDir('docs'),
  templates:  readDir('templates'),
};
L.records = recordsOf([...L.channels, ...L.told]);

const world = {};
for (const w of readDir(`${SCN}/world`)) world[w.id] = w;

const rowsOf = (entry, col = 1) => (entry.markdown.match(/^\|.*\|$/gm) || [])
  .map(r => r.split('|').slice(1, -1).map(c => c.trim()))
  .filter(c => c.length > col && c[col] && !/^-+$/.test(c[0]) && c[0] !== 'Person' && c[0] !== 'Organisation' && c[0] !== 'Document');

const castIds     = rowsOf(world.cast).map(r => r[1]);
const orgIds      = rowsOf(world.organisations).map(r => r[1])
  .concat((world.organisations.markdown.match(/`([a-z-]+)`/g) || []).map(s => s.replace(/`/g, '')));
const documentIds = rowsOf(world.documents).map(r => r[1]);
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
  nouns: new Set([...castIds, ...orgIds, ...documentIds, world.goal && world.goal.offering].filter(Boolean)),
  questions: new Set(questionIds),
};

// What this seller has plugged in is the scenario's, not the channel's (moved out of the channel
// docs on 20 September). world/goal.md lists it in `connected`; a channel it leaves out is not
// connected, the data gap the cards name. A channel is what it is, so a channel or told doc that
// still says `connected:` fails, and the general layer stays free of one seller's stack.
if (!world.goal || !('connected' in world.goal)) problems.push(`${SCN}/world/goal.md: no connected; list the channels this seller has plugged in, or connected: []`);
else must(world.goal.file, 'connected', world.goal.connected, S.channels, 'channel');
const plugged = new Set([].concat((world.goal && world.goal.connected) || []));
for (const ch of L.channels) {
  if ('connected' in ch) problems.push(`${ch.file}: connected belongs in ${SCN}/world/goal.md, not on the channel`);
  ch.connected = plugged.has(ch.id);
}
for (const t of L.told) if ('connected' in t) problems.push(`${t.file}: connected; a told source is said, never connected`);

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
};
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
  if (!['act', 'ask', 'connect', 'news'].includes(c.kind))
    problems.push(`${c.file}: kind "${c.kind}" is not one of act, ask, connect, news`);
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
  for (const a of restsOn(c)) {
    const asm = L.assemblies.find(x => x.id === a);
    for (const inp of (asm && asm.inputs) || []) if (S.records.has(inp)) out.add(inp.split('#')[0]);
  }
  return out;
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
    c.readRows.push({sources: [s], words: `${src.name} is not connected. The ${who.join(' and ')} ${who.length > 1 ? 'reads lean' : 'read leans'} on it, so I have less to go on here.`, from: sourceName(s), gap: true});
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
const OWED = ['promise-made-undelivered', 'ask-made-unanswered'];
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

// Ties: the organisation further up the ladder first, then the surer card, then `order`.
const ladder = [].concat((world.goal && world.goal.ladder) || []);
const stands = new Map(rowsOf(world.organisations).map(r => [r[1], r[2]]));
const ladderRank = c => orgOf(c) ? ladder.indexOf(stands.get(orgOf(c)) || ladder[0]) : -1;
const sureRank = c => c.sure ? SURE.length - SURE.indexOf(c.sure) : 0;
const byPlace = (a, b) => a.band - b.band || ladderRank(b) - ladderRank(a) || sureRank(b) - sureRank(a) || (a.order || 0) - (b.order || 0);
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

