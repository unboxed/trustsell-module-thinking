/* The library, browsable. Everything here comes from window.LIBRARY, which build.js
   writes from library/. Nothing is typed twice. Nothing sends anywhere. */
(function () {
  var L = window.LIBRARY, $ = function (s, r) { return (r || document).querySelector(s); };
  if (!L) return;

  /* The ladder, bottom to top. `holds` is what an entry points DOWN at. */
  var RUNGS = [
    {key: 'channels',   floor: '1 · source',      name: 'Channels',   does: 'What you connect. Carries records, forms no opinion.'},
    {key: 'told',       floor: '1 · source',      name: 'Told',       does: 'What only you can say. No channel can fetch it.'},
    {key: 'records',    floor: '2 · ingredients', name: 'Records',    does: 'Rows inside their source, each with an address.'},
    {key: 'assemblies', floor: '3 · gather',      name: 'Assemblies', does: 'Ingredients combined into one picture. Still no opinion.'},
    {key: 'counts',     floor: '4 · counting',    name: 'Counts',     does: 'The arithmetic. Nothing written yet.'},
    {key: 'signals',    floor: '5 · opinion',     name: 'Signals',    does: 'The first thing you could argue with.'},
    {key: 'cards',      floor: '6 · what you see',name: 'Cards',      does: 'The suggestion, question or outcome.'},
    {key: 'widgets',    floor: 'beside',          name: 'Widgets',    does: 'The catalog a card picks from and fills: its details and its reply.'},
    {key: 'modules',    floor: 'across',          name: 'Modules',    does: 'Who owns which reads.'},
    {key: 'docs',       floor: 'across',          name: 'Notes',      does: 'The thinking behind the shape of all this.'},
    {key: 'templates',  floor: 'across',          name: 'Templates',  does: 'The format each rung is written to.'}
  ];
  var byKey = {}; RUNGS.forEach(function (r) { byKey[r.key] = r; });
  var find = function (key, id) { return (L[key] || []).filter(function (e) { return e.id === id || e.address === id; })[0]; };
  /* A card's name is its title. Its `label` is the kind, which every card of that kind shares. */
  var nameOf = function (e) { return e && (e.title || e.plain || e.label || e.name || e.id); };

  /* Which fields point at which rung, so links resolve without hand-wiring. */
  var POINTS = {
    cards:      [['signal','signals'], ['supporting','signals'], ['counts','counts'], ['held_by','cards'], ['widgets','widgets']],
    widgets:    [['fed_by','fed'], ['reaches','records']],
    signals:    [['inputs','assemblies'], ['counts','counts'], ['needs','sources'], ['module','modules']],
    assemblies: [['inputs','mixed'], ['module','modules']],
    counts:     [['used_by','signals'], ['over','assemblies']],
    modules:    [['draws_from','channels']]
  };
  var esc = function (s) { return String(s).replace(/&/g,'&amp;').replace(/</g,'&lt;').replace(/>/g,'&gt;'); };
  var href = function (key, id) { return '#' + key + '/' + id; };

  function resolve(target, id) {
    if (target === 'sources') return find('channels', id) ? ['channels', id] : find('told', id) ? ['told', id] : null;
    if (target === 'fed')     return find('assemblies', id) ? ['assemblies', id] : find('counts', id) ? ['counts', id] : null;
    if (target === 'mixed')   return find('assemblies', id) ? ['assemblies', id] : find('records', id) ? ['records', id] : null;
    return find(target, id) ? [target, id] : null;
  }
  function link(key, id) {
    var e = find(key, id);
    var label = e ? nameOf(e) : id;
    return '<a href="' + href(key, e ? (e.address || e.id) : id) + '"><code>' + esc(id) + '</code> ' + esc(label) + '</a>';
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
        var vals = [].concat(e[pair[0]] || []);
        vals.forEach(function (v) {
          var r = resolve(pair[1], v);
          if (r) note(r[0], r[1], key, e.id);
        });
      });
    });
  });
  (L.records || []).forEach(function (r) { note(r.source.indexOf('told') > -1 ? 'told' : 'channels', r.source, 'records', r.address); });

  /* ---------- views ---------- */

  function ladder() {
    var h = ['<header class="large-title"><h1>The library</h1>' +
             '<p class="date">Everything the tool would reason from, bottom to top. ' +
             (L.cards || []).length + ' cards rest on ' + (L.signals || []).length + ' signals rest on ' +
             (L.counts || []).length + ' counts.</p></header>'];
    RUNGS.forEach(function (r) {
      var items = L[r.key] || [];
      if (!items.length) return;
      var undef = items.filter(function (e) { return e.defined === false; }).length;
      h.push('<div class="ios-list__header">' + esc(r.floor) + ' &middot; ' + esc(r.name) +
             ' <span class="lib-count">' + items.length +
             (undef ? ', ' + undef + ' not written yet' : '') + '</span></div>');
      h.push('<p class="lib-does">' + esc(r.does) + '</p>');
      h.push('<ul class="ios-list lib-grid">' + items.map(function (e) {
        return '<li><a class="ios-list__row ios-list__row--tappable" href="' + href(r.key, e.address || e.id) + '">' +
               '<span class="ios-list__title">' + esc(nameOf(e)) + '</span>' +
               (e.defined === false ? '<span class="ios-list__value">not written</span>' : '') +
               '<span class="chevron chevron--next" aria-hidden="true"></span></a></li>';
      }).join('') + '</ul>');
    });
    return h.join('');
  }

  function trackback(card) {
    var rows = [];
    rows.push('<li class="ios-list__row"><span class="ios-list__title">' + link('cards', card.id) + '</span><span class="ios-list__value">the card</span></li>');
    var sig = find('signals', card.signal);
    if (sig) {
      rows.push('<li class="ios-list__row"><span class="ios-list__title">' + link('signals', sig.id) + '</span><span class="ios-list__value">the read</span></li>');
      // Supporting reads: the other signals whose counts the card quotes.
      var reads = [sig].concat([].concat(card.supporting || []).map(function (id) { return find('signals', id); }).filter(Boolean));
      reads.slice(1).forEach(function (s) {
        rows.push('<li class="ios-list__row"><span class="ios-list__title">' + link('signals', s.id) + '</span><span class="ios-list__value">a supporting read</span></li>');
      });
      [].concat(card.counts || []).forEach(function (c) {
        var cnt = find('counts', c), over = [].concat((cnt && cnt.over) || []);
        rows.push('<li class="ios-list__row lib-indent"><span class="ios-list__title">' + link('counts', c) + '</span><span class="ios-list__value">' + (over.length ? 'counts within ' + esc(over.join(', ')) : 'a count') + '</span></li>');
      });
      var gathers = [];
      reads.forEach(function (s) { [].concat(s.inputs || []).forEach(function (a) { if (gathers.indexOf(a) < 0) gathers.push(a); }); });
      gathers.forEach(function (a) {
        var asm = find('assemblies', a);
        rows.push('<li class="ios-list__row"><span class="ios-list__title">' + link('assemblies', a) + '</span><span class="ios-list__value">the gather</span></li>');
        if (asm) [].concat(asm.inputs || []).slice(0, 6).forEach(function (inp) {
          var r = resolve('mixed', inp);
          if (r) rows.push('<li class="ios-list__row lib-indent"><span class="ios-list__title">' + link(r[0], r[1]) + '</span><span class="ios-list__value">a record</span></li>');
        });
      });
    }
    // What to send is its own trail, beside the read: the card's documents, then the proof library.
    if ([].concat(card.documents || []).length) {
      [].concat(card.documents).forEach(function (d) {
        rows.push('<li class="ios-list__row"><span class="ios-list__title"><code>' + esc(d) + '</code></span><span class="ios-list__value">what to send</span></li>');
      });
      var proof = find('assemblies', 'proof-library');
      if (proof) {
        rows.push('<li class="ios-list__row"><span class="ios-list__title">' + link('assemblies', proof.id) + '</span><span class="ios-list__value">the gather</span></li>');
        [].concat(proof.inputs || []).forEach(function (inp) {
          var r = resolve('mixed', inp);
          if (r) rows.push('<li class="ios-list__row lib-indent"><span class="ios-list__title">' + link(r[0], r[1]) + '</span><span class="ios-list__value">a record</span></li>');
        });
      }
    }
    return '<div class="ios-list__header">All the way down</div><ul class="ios-list">' + rows.join('') + '</ul>' +
           '<p class="ios-list__footer">What each count adds up is not written yet. Where a count can already say ' +
           'which gather it counts within, it does; the rest are the gap, named rather than hidden.</p>';
  }

  function entry(key, id) {
    var e = find(key, id);
    if (!e) return '<header class="large-title"><h1>Not found</h1><p class="date">Nothing in the library has the id <code>' + esc(id) + '</code>.</p></header>';
    var r = byKey[key] || {name: key, floor: ''};
    var h = ['<p class="lib-crumb"><a href="#">The library</a> &rsaquo; ' + esc(r.name) + '</p>',
             '<header class="large-title"><h1>' + esc(nameOf(e)) + '</h1>' +
             '<p class="date"><code>' + esc(e.address || e.id) + '</code>' +
             (e.blurb ? ' &middot; ' + esc(e.blurb) : '') +
             (key === 'cards' ? ' &middot; ' + esc(e.label) : '') + '</p></header>'];

    if (e.defined === false)
      h.push('<p class="lib-gap">Nothing is written here yet. The id is the only fact.</p>');

    /* a record shows its fields */
    if (key === 'records') {
      h.push('<div class="ios-list__header">Fields</div><ul class="ios-list">' + e.fields.map(function (f) {
        return '<li class="ios-list__row"><span class="ios-list__title">' + esc(f.field) + '</span><span class="ios-list__value">' + esc(f.source) + '</span></li>';
      }).join('') + '</ul>');
      h.push('<div class="ios-list__header">Carried by</div><ul class="ios-list"><li class="ios-list__row"><span class="ios-list__title">' +
             link(find('channels', e.source) ? 'channels' : 'told', e.source) + '</span></li></ul>');
    }

    /* what it rests on */
    var pts = POINTS[key] || [];
    var down = [];
    pts.forEach(function (pair) {
      [].concat(e[pair[0]] || []).forEach(function (v) {
        var res = resolve(pair[1], v);
        down.push('<li class="ios-list__row"><span class="ios-list__title">' +
          (res ? link(res[0], res[1]) : '<code>' + esc(v) + '</code>') +
          '</span><span class="ios-list__value">' + esc(pair[0]) + '</span></li>');
      });
    });
    if (down.length) h.push('<div class="ios-list__header">Rests on</div><ul class="ios-list">' + down.join('') + '</ul>');

    var up = usedBy[key + '/' + (e.address || e.id)] || [];
    if (up.length) h.push('<div class="ios-list__header">Used by</div><ul class="ios-list">' + up.map(function (p) {
      return '<li class="ios-list__row"><span class="ios-list__title">' + link(p[0], p[1]) + '</span><span class="ios-list__value">' + esc(byKey[p[0]] ? byKey[p[0]].name : p[0]) + '</span></li>';
    }).join('') + '</ul>');

    if (key === 'cards') h.push(trackback(e));

    /* the words themselves */
    if (e.intro) h.push('<div class="lib-prose">' + e.intro + '</div>');
    (e.sectionOrder || []).forEach(function (name) {
      h.push('<div class="ios-list__header">' + esc(name) + '</div><div class="lib-prose">' + e.sections[name].html + '</div>');
    });

    if (e.markdown) h.push('<div class="actions lib-actions"><button class="ios-btn ios-btn--tinted" id="dl">Download as Markdown</button>' +
                           '<span class="ios-list__footer">' + esc(e.file || '') + '</span></div>');
    return h.join('');
  }

  /* ---------- routing ---------- */

  function render() {
    var hash = location.hash.replace(/^#/, '');
    var parts = hash.split('/');
    var main = $('#lib');
    main.innerHTML = (parts.length === 2 && byKey[parts[0]]) ? entry(parts[0], decodeURIComponent(parts[1])) : ladder();
    window.scrollTo(0, 0);
    var dl = $('#dl');
    if (dl) dl.addEventListener('click', function () {
      var e = find(parts[0], decodeURIComponent(parts[1]));
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
