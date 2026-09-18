/* The library, browsable. Everything here comes from window.LIBRARY, which build.js
   writes from library/. Nothing is typed twice. Nothing sends anywhere.

   A catalogue in three columns (decided 18 September, by looking): the climb, the
   entries on one step of it, and the entry at a glance. Every join is a link that
   moves the columns, so following what a thing is built from, and where it is used,
   is how you browse. The reason is chapter 3 of the story: the tool counts first and
   judges last, and nothing it says floats. The full entry is at #rung/id/read. */
(function () {
  var L = window.LIBRARY, $ = function (s, r) { return (r || document).querySelector(s); };
  if (!L) return;

  /* The ladder, top to bottom as the page climbs down it. `one` is what a single entry
     is called. `step` is the story's word for what the tool does there; the page shows
     only the names (the user: the step words repeated them), so it is kept as a note. */
  var RUNGS = [
    {key: 'cards',      step: 'What it says',                    name: 'Cards',      one: 'Card',     does: 'The suggestion, question or outcome.'},
    {key: 'signals',    step: 'What it judges',                  name: 'Signals',    one: 'Signal',   does: 'The tool\'s first judgement, made from the counts.'},
    {key: 'counts',     step: 'What it counts',                  name: 'Counts',     one: 'Count',    does: 'The arithmetic. Nothing written yet.'},
    {key: 'assemblies', step: 'What it gathers',                 name: 'Assemblies', one: 'Assembly', does: 'Records combined into one picture, before any judgement.'},
    {key: 'records',    step: 'What it sees, and what you told it', name: 'Records', one: 'Record',   does: 'Rows inside their source, each with an address.'},
    {key: 'told',       step: 'What it sees, and what you told it', name: 'Told',    one: 'Told',     does: 'What only you can say. No channel can fetch it.'},
    {key: 'channels',   step: 'What it sees, and what you told it', name: 'Channels', one: 'Channel', does: 'The services you connect, and the records they hold.'},
    {key: 'widgets',    step: 'Reference',                       name: 'Widgets',    one: 'Widget',   does: 'The catalogue a card picks from and fills: its details and its reply.'},
    {key: 'modules',    step: 'Reference',                       name: 'Modules',    one: 'Module',   does: 'Who owns which reads.'},
    {key: 'docs',       step: 'Reference',                       name: 'Notes',      one: 'Note',     does: 'Why the library is shaped this way.'},
    {key: 'templates',  step: 'Reference',                       name: 'Templates',  one: 'Template', does: 'The format each rung is written to.'}
  ];
  var byKey = {}; RUNGS.forEach(function (r) { byKey[r.key] = r; });
  var find = function (key, id) { return (L[key] || []).filter(function (e) { return e.id === id || e.address === id; })[0]; };
  /* A card's name is its title. Its `label` is the kind, which every card of that kind shares. */
  var nameOf = function (e) { return e && (e.title || e.plain || e.label || e.name || e.id); };
  var keyOf = function (e) { return e.address || e.id; };

  /* Which fields point DOWN at which rung, so links resolve without hand-wiring.
     A count's `used_by` points up, so it stays out: the reverse index finds it. */
  var POINTS = {
    cards:      [['signal','signals'], ['supporting','signals'], ['counts','counts'], ['held_by','cards'], ['widgets','widgets']],
    widgets:    [['fed_by','fed'], ['reaches','records']],
    signals:    [['inputs','assemblies'], ['counts','counts'], ['needs','sources'], ['module','modules']],
    assemblies: [['inputs','mixed'], ['module','modules']],
    counts:     [['over','assemblies']],
    modules:    [['draws_from','channels']]
  };
  /* What each of those joins is called above its list, in plain words. */
  var JOIN_WORDS = {
    cards:      {signal: 'Main signal', supporting: 'Other signals', counts: 'Numbers it quotes', held_by: 'Waits for', widgets: 'Details', documents: 'Documents to send'},
    widgets:    {fed_by: 'Fed by', reaches: 'Records it can show'},
    signals:    {inputs: 'Reads from', counts: 'Counts', needs: 'Needs', module: 'Module'},
    assemblies: {inputs: 'Built from', module: 'Module'},
    counts:     {over: 'Counted within'},
    modules:    {draws_from: 'Draws from'}
  };
  var esc = function (s) { return String(s == null ? '' : s).replace(/&/g,'&amp;').replace(/</g,'&lt;').replace(/>/g,'&gt;'); };
  var href = function (key, id) { return '#' + key + '/' + encodeURIComponent(id); };
  var plural = function (n, w) { return n + ' ' + w + (n === 1 ? '' : 's'); };

  function resolve(target, id) {
    if (target === 'sources') return find('channels', id) ? ['channels', id] : find('told', id) ? ['told', id] : null;
    if (target === 'fed')     return find('assemblies', id) ? ['assemblies', id] : find('counts', id) ? ['counts', id] : null;
    if (target === 'mixed')   return find('assemblies', id) ? ['assemblies', id] : find('records', id) ? ['records', id] : null;
    return find(target, id) ? [target, id] : null;
  }
  function link(key, id) {
    var e = find(key, id);
    var label = e ? nameOf(e) : id;
    return '<a href="' + href(key, e ? keyOf(e) : id) + '"><code>' + esc(id) + '</code> ' + esc(label) + '</a>';
  }

  /* Reverse index: who points AT this entry. Built once, from the same fields. */
  var usedBy = {};
  function note(key, id, fromKey, fromId) {
    if (!id) return;
    var k = key + '/' + id;
    (usedBy[k] = usedBy[k] || []).push([fromKey, fromId]);
  }
  Object.keys(POINTS).forEach(function (key) {
    (L[key] || []).forEach(function (e) {
      POINTS[key].forEach(function (pair) {
        [].concat(e[pair[0]] || []).forEach(function (v) {
          var r = resolve(pair[1], v);
          if (r) note(r[0], r[1], key, e.id);
        });
      });
    });
  });
  (L.records || []).forEach(function (r) { note(r.source.indexOf('told') > -1 ? 'told' : 'channels', r.source, 'records', r.address); });

  /* The pretend world's names, read off its own tables, so a card can say who it is
     about and what it would send. */
  var WORLD = {};
  ['cast', 'councils', 'documents'].forEach(function (k) {
    var w = L.world && L.world[k]; if (!w) return;
    var html = (w.intro || '') + (w.sectionOrder || []).map(function (s) { return w.sections[s].html; }).join('');
    html.replace(/<tr><td>(.*?)<\/td><td>(.*?)<\/td>/g, function (_, name, id) { WORLD[id] = name.replace(/<[^>]+>/g, ''); });
  });
  var who = function (id) { return id === 'you' ? 'You' : (WORLD[id] || id); };
  var firstLine = function (html) { var m = /<p>([\s\S]*?)<\/p>/.exec(html || ''); return m ? m[1].replace(/<[^>]+>/g, '') : ''; };
  var recordsIn = function (src) { return (L.records || []).filter(function (r) { return r.source === src; }).length; };
  var cardsOn = function (sigId) {
    return (L.cards || []).filter(function (c) { return c.signal === sigId || [].concat(c.supporting || []).indexOf(sigId) > -1; });
  };

  /* Not written yet, or read off a card rather than decided: drawn dashed, never filled in. */
  function unfinished(key, e, field, target) {
    if (e[field + '_status'] === 'provisional') return true;
    var t = find(target[0], target[1]);
    return !!(t && t.defined === false);
  }

  /* ---------- column 2: one quiet line under each entry's name ---------- */
  /* Only what tells one entry from its neighbours. Sustain, Advance and Expand, and the
     owning module, are left off: where they belong on this page is not decided (the
     user, 18 September). The whole entry still shows them. */
  var GLANCE = {
    cards: function (e) {
      return [e.label, [who(e.person), e.council && who(e.council)].filter(Boolean).join(', ')].filter(Boolean).join(' · ');
    },
    signals: function (e) { var n = cardsOn(e.id).length; return n ? 'Used in ' + plural(n, 'card') : 'Not used in a card yet'; },
    /* A count has nothing written yet, so no line: its name is drawn quiet instead (the
       user: that line was only temporary). */
    counts: function () { return ''; },
    assemblies: function (e) { return 'About ' + e.about; },
    records: function (e) { return e.label + ' · ' + plural((e.fields || []).length, 'field'); },
    told: function (e) { return plural(recordsIn(e.id), 'record'); },
    channels: function (e) { return (e.connected ? 'Connected' : 'Not connected') + ' · ' + plural(recordsIn(e.id), 'record'); },
    widgets: function (e) { return e.family === 'detail' ? 'A detail' : 'A reply'; },
    modules: function (e) { return e.blurb; },
    docs: function (e) { return firstLine(e.intro); },
    templates: function (e) { return e.file; }
  };

  /* ---------- column 3: the kind line above the name ---------- */
  var KIND = {
    cards: function (e) { return ['Card', e.label, e.sure].filter(Boolean).join(' · '); },
    signals: function () { return 'Signal'; },
    counts: function () { return 'Count'; },
    assemblies: function (e) { return 'Assembly · about ' + e.about; },
    records: function (e) { var s = find('channels', e.source) || find('told', e.source); return 'Record · in ' + (s ? s.name : e.source); },
    told: function () { return 'Told · what only you can say'; },
    channels: function (e) { return 'Channel · ' + e.brand + ' · ' + (e.connected ? 'connected' : 'not connected'); },
    widgets: function (e) { return 'Widget · ' + (e.family === 'detail' ? 'a detail' : 'a reply'); },
    modules: function () { return 'Module'; },
    docs: function () { return 'Note'; },
    templates: function () { return 'Template'; }
  };

  /* One row of Apple's inset grouped list: the name, a quiet value on the right, and a
     chevron when it leads somewhere. An unfinished join is drawn quiet, and says so. */
  function row(key, id, value, gap) {
    var e = find(key, id);
    var inner = '<span class="ios-list__title">' + esc(e ? nameOf(e) : id) + '</span>' +
                (value ? '<span class="ios-list__value">' + esc(value) + '</span>' : '');
    if (!e) return '<div class="ios-list__row cat-row' + (gap ? ' is-gap' : '') + '">' + inner + '</div>';
    return '<a class="ios-list__row ios-list__row--tappable cat-row' + (gap ? ' is-gap' : '') + '" href="' + href(key, keyOf(e)) + '">' +
           inner + '<span class="chevron chevron--next" aria-hidden="true"></span></a>';
  }
  var group = function (title, rows) { return '<div class="ios-list__header">' + esc(title) + '</div><div class="ios-list">' + rows.join('') + '</div>'; };

  function glance(key, e) {
    var h = ['<header class="cat-head"><p class="cat-head__kind">' + esc(KIND[key](e)) + '</p><h2>' + esc(nameOf(e)) + '</h2>'];
    var lede = e.blurb || (key === 'cards' || key === 'docs' ? firstLine(e.intro) : key === 'records' ? e.address : '');
    if (lede) h.push('<p class="cat-head__lede">' + esc(lede) + '</p>');
    if (e.defined === false) h.push('<p class="cat-head__lede">Not written yet. Only the name is decided.</p>');
    h.push('</header>');

    /* Where it is used: cards first, then everything else. For a source, its records are its own list. */
    var up = (usedBy[key + '/' + keyOf(e)] || []).slice();
    var held = up.filter(function (p) { return p[0] === 'records'; });
    if (key === 'channels' || key === 'told') up = up.filter(function (p) { return p[0] !== 'records'; });
    var cards = up.filter(function (p) { return p[0] === 'cards'; }), rest = up.filter(function (p) { return p[0] !== 'cards'; });
    if (cards.length) h.push(group(key === 'cards' ? 'Waiting on this card' : 'Used in cards',
      cards.map(function (p) { return row('cards', p[1], find('cards', p[1]).label); })));
    if (rest.length) h.push(group('Used by', rest.map(function (p) { return row(p[0], p[1], byKey[p[0]].one); })));
    if (held.length) h.push(group('Records', held.map(function (p) { return row('records', p[1]); })));

    /* What it is built from, one group per join. The module is left to the whole entry. */
    (POINTS[key] || []).forEach(function (pair) {
      if (pair[0] === 'module') return;
      var vals = [].concat(e[pair[0]] || []), words = JOIN_WORDS[key][pair[0]];
      if (!vals.length) {
        if (key === 'counts') h.push(group(words, ['<div class="ios-list__row cat-row is-gap"><span class="ios-list__title">Not decided yet</span></div>']));
        return;
      }
      h.push(group(words, vals.map(function (v) {
        var r = resolve(pair[1], v);
        if (!r) return row(null, v, 'not found', true);
        var gap = unfinished(key, e, pair[0], r);
        var t = find(r[0], r[1]);
        return row(r[0], r[1], t && t.defined === false ? 'Not written yet' : gap ? 'Not confirmed' : '', gap);
      })));
    });
    if (key === 'records') h.push(group('Comes from', [row(find('channels', e.source) ? 'channels' : 'told', e.source)]));
    if (key === 'cards' && [].concat(e.documents || []).length)
      h.push(group(JOIN_WORDS.cards.documents, [].concat(e.documents).map(function (d) { return '<div class="ios-list__row cat-row"><span class="ios-list__title">' + esc(who(d)) + '</span></div>'; })));

    /* The first of its own words. A card's are its story, and a source's are the records
       already shown above, so neither repeats them here. */
    var first = (e.sectionOrder || [])[0];
    if (e.defined !== false && first && ['cards', 'channels', 'told'].indexOf(key) < 0)
      h.push('<div class="ios-list__header">' + esc(first) + '</div><div class="lib-prose cat-prose">' + e.sections[first].html + '</div>');
    h.push('<div class="cat-open"><a class="ios-btn ios-btn--filled" href="' + href(key, keyOf(e)) + '/read">Read in Full</a></div>');
    return h.join('');
  }

  function stepHead(r) {
    var items = L[r.key] || [];
    var undef = items.filter(function (e) { return e.defined === false; }).length;
    return '<header class="cat-head"><h2>' + esc(r.name) + '</h2>' +
      '<p class="cat-head__lede">' + esc(r.does) + '</p>' +
      '<p class="cat-head__lede">' + items.length + ' ' + r.name.toLowerCase() + (undef ? ', ' + (undef === items.length ? 'none' : items.length - undef) + ' written yet' : '') + '. Pick one to see what it is built from, and where it is used.</p></header>';
  }

  /* ---------- the columns ---------- */
  function columns(key, id) {
    var r = byKey[key], e = id ? find(key, id) : null;
    var depth = !location.hash.replace(/^#/, '') ? 'home' : e ? 'entry' : 'rung';
    var h = ['<header class="large-title cat-title"><h1>The library</h1><p class="date">What the tool reads, and how it builds a card from it. ' +
             (L.cards || []).length + ' cards, ' + (L.signals || []).length + ' signals, ' + (L.counts || []).length + ' counts.</p></header>'];
    h.push('<div class="cat" data-depth="' + depth + '">');

    /* 1. the climb */
    /* Just the names, top to bottom; a gap sets apart what sits beside the climb. */
    var climb = [];
    RUNGS.forEach(function (x) {
      climb.push('<li' + (x.key === 'widgets' ? ' class="cat-climb__beside"' : '') + '><a href="#' + x.key + '"' + (x.key === key ? ' aria-current="true"' : '') + '>' + esc(x.name) + '<span>' + (L[x.key] || []).length + '</span></a></li>');
    });
    h.push('<nav class="cat__climb" aria-label="The climb"><ul class="cat-climb">' + climb.join('') + '</ul></nav>');

    /* 2. the entries on this step, as Apple's inset grouped list; records grouped by source */
    var groups = [], cur = null;
    (L[key] || []).forEach(function (x) {
      var g = key === 'records' ? x.source : '';
      if (!cur || cur.g !== g) { cur = {g: g, rows: []}; groups.push(cur); }
      cur.rows.push('<a class="ios-list__row ios-list__row--tappable cat-item' + (x.defined === false ? ' is-gap' : '') + '" href="' + href(key, keyOf(x)) + '"' +
                    (e && keyOf(x) === keyOf(e) ? ' aria-current="true"' : '') + '>' +
                    '<span class="ios-list__title"><span class="cat-item__name">' + esc(nameOf(x)) + '</span>' +
                    (GLANCE[key](x) ? '<span class="cat-item__line">' + esc(GLANCE[key](x)) + '</span>' : '') + '</span></a>');
    });
    var list = groups.map(function (g) {
      var s = g.g && (find('channels', g.g) || find('told', g.g));
      return (g.g ? '<div class="ios-list__header">' + esc(s ? s.name : g.g) + '</div>' : '') + '<div class="ios-list">' + g.rows.join('') + '</div>';
    }).join('');
    h.push('<section class="cat__list" aria-label="' + esc(r.name) + '"><a class="cat__back" href="#">&lsaquo; The climb</a>' + list + '</section>');

    /* 3. the entry at a glance, or what this step is */
    h.push('<section class="cat__entry"><a class="cat__back" href="#' + key + '">&lsaquo; ' + esc(r.name) + '</a><article class="cat-entry">' +
           (e ? glance(key, e) : stepHead(r)) + '</article></section>');
    h.push('</div>');
    return h.join('');
  }

  /* ---------- the full entry, one step further ---------- */

  function trackback(card) {
    var rows = [];
    rows.push('<li class="ios-list__row"><span class="ios-list__title">' + link('cards', card.id) + '</span><span class="ios-list__value">Card</span></li>');
    var sig = find('signals', card.signal);
    if (sig) {
      rows.push('<li class="ios-list__row"><span class="ios-list__title">' + link('signals', sig.id) + '</span><span class="ios-list__value">Main signal</span></li>');
      // Supporting reads: the other signals whose counts the card quotes.
      var reads = [sig].concat([].concat(card.supporting || []).map(function (id) { return find('signals', id); }).filter(Boolean));
      reads.slice(1).forEach(function (s) {
        rows.push('<li class="ios-list__row"><span class="ios-list__title">' + link('signals', s.id) + '</span><span class="ios-list__value">Other signal</span></li>');
      });
      [].concat(card.counts || []).forEach(function (c) {
        var cnt = find('counts', c), over = [].concat((cnt && cnt.over) || []);
        rows.push('<li class="ios-list__row lib-indent"><span class="ios-list__title">' + link('counts', c) + '</span><span class="ios-list__value">' + (over.length ? 'Count, within ' + esc(nameOf(find('assemblies', over[0]))) : 'Count') + '</span></li>');
      });
      var gathers = [];
      reads.forEach(function (s) { [].concat(s.inputs || []).forEach(function (a) { if (gathers.indexOf(a) < 0) gathers.push(a); }); });
      gathers.forEach(function (a) {
        var asm = find('assemblies', a);
        rows.push('<li class="ios-list__row"><span class="ios-list__title">' + link('assemblies', a) + '</span><span class="ios-list__value">Assembly</span></li>');
        if (asm) [].concat(asm.inputs || []).slice(0, 6).forEach(function (inp) {
          var r = resolve('mixed', inp);
          if (r) rows.push('<li class="ios-list__row lib-indent"><span class="ios-list__title">' + link(r[0], r[1]) + '</span><span class="ios-list__value">Record</span></li>');
        });
      });
    }
    // What to send is its own trail, beside the read: the card's documents, then the proof library.
    if ([].concat(card.documents || []).length) {
      [].concat(card.documents).forEach(function (d) {
        rows.push('<li class="ios-list__row"><span class="ios-list__title"><code>' + esc(d) + '</code></span><span class="ios-list__value">Document to send</span></li>');
      });
      var proof = find('assemblies', 'proof-library');
      if (proof) {
        rows.push('<li class="ios-list__row"><span class="ios-list__title">' + link('assemblies', proof.id) + '</span><span class="ios-list__value">Assembly</span></li>');
        [].concat(proof.inputs || []).forEach(function (inp) {
          var r = resolve('mixed', inp);
          if (r) rows.push('<li class="ios-list__row lib-indent"><span class="ios-list__title">' + link(r[0], r[1]) + '</span><span class="ios-list__value">Record</span></li>');
        });
      }
    }
    return '<div class="ios-list__header">From the card down to the records</div><ul class="ios-list">' + rows.join('') + '</ul>' +
           '<p class="ios-list__footer">No count is written yet. Where a count already knows which assembly it ' +
           'counts within, it says so.</p>';
  }

  function entry(key, id) {
    var e = find(key, id);
    if (!e) return '<header class="large-title"><h1>Not found</h1><p class="date">Nothing in the library has the id <code>' + esc(id) + '</code>.</p></header>';
    var r = byKey[key] || {name: key};
    var h = ['<p class="lib-crumb"><a href="#' + key + '">' + esc(r.name) + '</a> &rsaquo; <a href="' + href(key, keyOf(e)) + '">' + esc(nameOf(e)) + '</a></p>',
             '<header class="large-title"><h1>' + esc(nameOf(e)) + '</h1>' +
             '<p class="date"><code>' + esc(keyOf(e)) + '</code>' +
             (e.blurb ? ' &middot; ' + esc(e.blurb) : '') +
             (key === 'cards' ? ' &middot; ' + esc(e.label) : '') + '</p></header>'];

    if (e.defined === false)
      h.push('<p class="lib-gap">Not written yet. Only the name is decided.</p>');

    /* a record shows its fields */
    if (key === 'records') {
      h.push('<div class="ios-list__header">Fields</div><ul class="ios-list">' + e.fields.map(function (f) {
        return '<li class="ios-list__row"><span class="ios-list__title">' + esc(f.field) + '</span><span class="ios-list__value">' + esc(f.source) + '</span></li>';
      }).join('') + '</ul>');
      h.push('<div class="ios-list__header">Comes from</div><ul class="ios-list"><li class="ios-list__row"><span class="ios-list__title">' +
             link(find('channels', e.source) ? 'channels' : 'told', e.source) + '</span></li></ul>');
    }

    /* what it is built from */
    var down = [];
    (POINTS[key] || []).forEach(function (pair) {
      [].concat(e[pair[0]] || []).forEach(function (v) {
        var res = resolve(pair[1], v);
        down.push('<li class="ios-list__row"><span class="ios-list__title">' +
          (res ? link(res[0], res[1]) : '<code>' + esc(v) + '</code>') +
          '</span><span class="ios-list__value">' + esc(JOIN_WORDS[key][pair[0]]) + '</span></li>');
      });
    });
    if (down.length) h.push('<div class="ios-list__header">Built from</div><ul class="ios-list">' + down.join('') + '</ul>');

    var up = (usedBy[key + '/' + keyOf(e)] || []).slice();
    if (up.length) h.push('<div class="ios-list__header">Used by</div><ul class="ios-list">' + up.map(function (p) {
      return '<li class="ios-list__row"><span class="ios-list__title">' + link(p[0], p[1]) + '</span><span class="ios-list__value">' + esc(byKey[p[0]] ? byKey[p[0]].one : p[0]) + '</span></li>';
    }).join('') + '</ul>');

    if (key === 'cards') h.push(trackback(e));

    /* the words themselves */
    if (e.intro) h.push('<div class="lib-prose">' + e.intro + '</div>');
    (e.sectionOrder || []).forEach(function (name) {
      h.push('<div class="ios-list__header">' + esc(name) + '</div><div class="lib-prose">' + e.sections[name].html + '</div>');
    });

    if (e.markdown) h.push('<div class="actions lib-actions"><button class="ios-btn ios-btn--filled" id="dl">Download as Markdown</button>' +
                           '<span class="ios-list__footer">' + esc(e.file || '') + '</span></div>');
    return h.join('');
  }

  /* ---------- routing ---------- */
  /* #                   the climb, with Cards open
     #signals            a step of the climb
     #signals/some-id    that entry at a glance
     #signals/some-id/read  the whole entry */
  var lastKey = null;
  function render() {
    var parts = location.hash.replace(/^#/, '').split('/');
    var key = byKey[parts[0]] ? parts[0] : 'cards';
    var id = parts[1] ? decodeURIComponent(parts[1]) : null;
    var main = $('#lib');
    var reading = id && parts[2] === 'read';
    main.innerHTML = reading ? entry(key, id) : columns(key, id);
    // A new step, or the whole entry, starts at the top; a new entry on the same step keeps your place in the list.
    if (reading || key !== lastKey || window.innerWidth < 900) window.scrollTo(0, 0);
    lastKey = reading ? null : key;
    var dl = $('#dl');
    if (dl) dl.addEventListener('click', function () {
      var e = find(key, id);
      var blob = new Blob([e.markdown], {type: 'text/markdown'});
      var a = document.createElement('a');
      a.href = URL.createObjectURL(blob);
      a.download = (e.id || 'entry') + '.md';
      a.click();
      URL.revokeObjectURL(a.href);
    });
  }
  window.addEventListener('hashchange', render);
  render();
})();
