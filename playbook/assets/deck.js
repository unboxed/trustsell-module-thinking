/* Signal cards: the deck. Every slide lives in deck.html; one shows at a
   time, picked by the hash. Arrow keys and space move. Each slide says how
   big one of its figures is drawn (data-w, data-h) and the script scales the
   figures to fit the slide's body, never above the slide's cap: 1:1, unless
   the slide says otherwise (data-max). A phone is never drawn bigger than a
   phone; a bare sheet may be. The phone itself is phone.html, drawn by
   phone.js and held in an iframe; phone.js also works the bare sheets. */
(function () {
  var slides = Array.prototype.slice.call(document.querySelectorAll('.slide'));
  var count = document.getElementById('count');
  var i = 0;

  function fit() {
    var sl = slides[i], body = sl.querySelector('.slide__body');
    if (!body) return;
    var w = +sl.getAttribute('data-w'), h = +sl.getAttribute('data-h');
    /* A slide of words only says no size, so there is nothing to fit: leave
       --s alone rather than dividing by zero and setting it to NaN. */
    if (!w || !h) return;
    var n = sl.querySelectorAll('figure').length || 1;
    var caption = sl.querySelector('figcaption') ? 40 : 0;
    var gap = 24, box = body.getBoundingClientRect();
    var max = +sl.getAttribute('data-max') || 1;
    var s = Math.min(max, (box.width - (n - 1) * gap) / (n * w), (box.height - caption) / h);
    sl.style.setProperty('--s', Math.max(.3, s));
  }
  window.addEventListener('resize', function () { fit(); drawShown(); });


  /* The ladder slide: a card and everything under it, as a pyramid. Built from
     data.js when the deck opens, and its lines drawn whenever the slide shows,
     because a hidden slide has no size to measure. The rows follow the card's
     own joins: its signal and supporting signals, the counts it quotes and the
     gather each counts within (dashed to every candidate while that is not
     written), the gathers those reads take, and the channels behind them. */
  var LIB = window.LIBRARY;
  function esc(t) { return String(t).replace(/&/g, '&amp;').replace(/</g, '&lt;'); }
  /* The library, addressed the same way wherever a figure is drawn from it. */
  function find(k, id) { return ((LIB || {})[k] || []).filter(function (e) { return e.id === id; })[0]; }
  function label(e) { return esc(String(e.label).replace(/^"|"$/g, '')); }
  function recLabel(i) { var r = ((LIB || {}).records || []).filter(function (x) { return x.address === i; })[0]; return esc(r ? r.plain || r.label : i); }
  function colName(c) { var ch = find('channels', c); return c === 'told' ? 'You told me' : esc(ch ? ch.name.replace(/ \/.*/, '') : c); }
  function pill(id, text, main) { return '<span class="py__pill' + (main ? ' is-main' : '') + '" data-id="' + id + '">' + text + '</span>'; }
  function build(py) {
    if (!LIB) return;
    var card = find('cards', py.getAttribute('data-card')); if (!card) return;
    var reads = [card.signal].concat(card.supporting || []).map(function (id) { return find('signals', id); }).filter(Boolean);
    var counts = [].concat(card.counts || []).map(function (id) { return find('counts', id); }).filter(Boolean);
    var asmIds = [];
    reads.forEach(function (r) { (r.inputs || []).forEach(function (a) { if (asmIds.indexOf(a) < 0) asmIds.push(a); }); });
    if ((card.documents || []).length) asmIds.push('proof-library');
    var asms = asmIds.map(function (id) { return find('assemblies', id); }).filter(Boolean);
    var col = function (src) { return /-told$/.test(src) ? 'told' : src; };
    var recs = {}, order = [], edges = [];
    asms.forEach(function (a) {
      var seen = {};
      (a.inputs || []).forEach(function (i) {
        if (i.indexOf('#') < 0) return;
        var c = col(i.split('#')[0]);
        if (!recs[c]) { recs[c] = []; order.push(c); }
        if (recs[c].indexOf(i) < 0) recs[c].push(i);
        if (!seen[c]) { seen[c] = 1; edges.push(['ch:' + c, 'a:' + a.id]); }
      });
    });
    // Each channel sits under the gathers it feeds (their mean place), so the lines cross less.
    var feeds = {};
    edges.forEach(function (e) { var c = e[0].slice(3); (feeds[c] = feeds[c] || []).push(asmIds.indexOf(e[1].slice(2))); });
    var mean = function (c) { return feeds[c].reduce(function (a, b) { return a + b; }, 0) / feeds[c].length; };
    order.sort(function (a, b) { return mean(a) - mean(b); });
    counts.forEach(function (c) {
      var users = reads.filter(function (r) { return (r.counts || []).indexOf(c.id) > -1; });
      var over = [].concat(c.over || []);
      if (over.length) over.forEach(function (a) { edges.push(['a:' + a, 'c:' + c.id]); });
      else users.forEach(function (r) { (r.inputs || []).forEach(function (a) { edges.push(['a:' + a, 'c:' + c.id, 'dash']); }); });
      users.forEach(function (r) { edges.push(['c:' + c.id, 'g:' + r.id]); });
    });
    reads.forEach(function (r) { edges.push(['g:' + r.id, 'card']); });
    if ((card.documents || []).length) edges.push(['a:proof-library', 'card']);
    var kind = card.kind;
    py.innerHTML = '<svg class="py__svg" aria-hidden="true"></svg>' +
      '<div class="py__row"><div class="py__card" data-id="card"><article class="card"><span class="kind kind--' + kind + '">' + esc(kind[0].toUpperCase() + kind.slice(1)) + '</span>' +
      '<h2>' + esc(card.title) + '</h2>' + card.intro + '</article></div></div>' +
      '<span class="py__name" data-for="3">What I think</span><div class="py__row" data-r="3">' + reads.map(function (r, j) { return pill('g:' + r.id, label(r), !j); }).join('') + '</div>' +
      '<span class="py__name" data-for="2">What I counted</span><div class="py__row" data-r="2">' + counts.map(function (c) { return pill('c:' + c.id, label(c)); }).join('') + '</div>' +
      '<span class="py__name" data-for="1">What I gathered</span><div class="py__row" data-r="1">' + asms.map(function (a) { return pill('a:' + a.id, label(a)); }).join('') + '</div>' +
      '<span class="py__name" data-for="0">What I fetched</span><div class="py__row py__row--ground" data-r="0">' + order.map(function (c) {
        return '<div class="py__col" data-id="ch:' + c + '"><ul>' + recs[c].map(function (i) { return '<li><span>' + recLabel(i) + '</span></li>'; }).join('') + '</ul><b>' + colName(c) + '</b></div>';
      }).join('') + '</div>';
    py.__edges = edges;
    trace(py);
  }
  /* Hover a pill and its whole trail lights, up to the card and down to the records, while the
     rest recedes; a click holds it, so a demo can leave one lit (the user's ask, 22 September).
     The trail is walked on the same edges the lines are drawn from, so it cannot disagree. */
  function trace(py) {
    if (py.__traced) return; py.__traced = 1;
    var held = null;
    function reach(id) {
      var on = {}; on[id] = 1; var used = [];
      var walk = function (from, up) {
        py.__edges.forEach(function (e) {
          var a = up ? e[0] : e[1], b = up ? e[1] : e[0];
          if (a !== from || used.indexOf(e) > -1) return;
          used.push(e); on[b] = 1; walk(b, up);
        });
      };
      walk(id, true); walk(id, false);
      return {on: on, used: used};
    }
    function light(id) {
      py.classList.toggle('is-tracing', !!id);
      var r = id ? reach(id) : {on: {}, used: []};
      py.querySelectorAll('[data-id]').forEach(function (n) { n.classList.toggle('is-on', !!r.on[n.getAttribute('data-id')]); });
      py.querySelectorAll('.py__svg path').forEach(function (p) { p.classList.toggle('is-on', r.used.indexOf(p.__edge) > -1); });
    }
    var node = function (e) { var n = e.target.closest('[data-id]'); return n && py.contains(n) ? n.getAttribute('data-id') : null; };
    py.addEventListener('mouseover', function (e) { var id = node(e); if (id && !held) light(id); });
    py.addEventListener('mouseout', function (e) { if (!held && node(e)) light(held); });
    py.addEventListener('click', function (e) { var id = node(e); if (!id) return; held = held === id ? null : id; light(held || id); });
    py.__light = light;
  }
  /* The drawing is as wide as its ground needs, never narrower than the slide says (22
     September, after a card quoting eight counts ran off both edges). A row of pills wraps
     (style.css); the ground cannot, because its columns hang their records, so it sets the
     width and the room scales the whole. Measured when the slide shows, from the base width. */
  function size(py) {
    var sl = py.closest('.slide'), stage = py.parentElement;
    var base = +(py.getAttribute('data-w0') || sl.getAttribute('data-w')) || 1136;
    py.setAttribute('data-w0', base);
    py.style.width = base + 'px';
    var pad = parseFloat(getComputedStyle(py).paddingLeft) || 0, need = base;
    py.querySelectorAll('.py__row--ground').forEach(function (row) {
      var w = 0; Array.prototype.forEach.call(row.children, function (c) { w += c.offsetWidth; });
      need = Math.max(need, Math.ceil(w + pad + 16));
    });
    py.style.width = need + 'px';
    stage.style.width = 'calc(' + need + 'px * var(--s))';
    sl.setAttribute('data-w', need);
  }
  function draw(py) {
    var svg = py.querySelector('.py__svg'); if (!svg) return;
    var box = py.getBoundingClientRect(), s = box.width / py.offsetWidth || 1;
    var at = function (el) { var r = el.getBoundingClientRect(); return {l: (r.left - box.left) / s, t: (r.top - box.top) / s, w: r.width / s, h: r.height / s}; };
    py.querySelectorAll('.py__name').forEach(function (n) {
      var r = at(py.querySelector('.py__row[data-r="' + n.getAttribute('data-for') + '"]'));
      n.style.top = (r.t + r.h / 2 - 8) + 'px';
    });
    svg.innerHTML = '';
    py.__edges.forEach(function (e) {
      var a = py.querySelector('[data-id="' + e[0] + '"]'), b = py.querySelector('[data-id="' + e[1] + '"]');
      if (!a || !b) return;
      var ra = at(a), rb = at(b);
      // What to send reaches the card at its right-hand side, so it does not cut across why to write.
      var x1 = ra.l + ra.w / 2, y1 = ra.t, x2 = rb.l + rb.w * (e[0] === 'a:proof-library' && e[1] === 'card' ? .88 : .5), y2 = rb.t + rb.h, m = (y1 + y2) / 2;
      var path = document.createElementNS('http://www.w3.org/2000/svg', 'path');
      path.setAttribute('d', 'M' + x1 + ' ' + y1 + ' C' + x1 + ' ' + m + ' ' + x2 + ' ' + m + ' ' + x2 + ' ' + y2);
      if (e[2]) path.setAttribute('class', e[2]);
      path.__edge = e;
      svg.appendChild(path);
    });
  }
  /* The climb: the ladder itself, drawn from data.js so it is never typed and never
     goes stale. Add a count, run `node build.js`, and this slide says one more. The rungs
     stop at Signals, where the tool first has an opinion, because that is where the
     explanation ends; the cards are the slides after it. Each rung's line is here rather
     than in the library because it is the deck's own way of saying it, the same way
     library.js carries its own words for the same ladder. A slide can hide the sizes with
     data-sizes="off": the numbers are true, and they are not always what you are talking
     about. */
  var CLIMB = [
    ['signals',    'Signals',    'The first opinion, and the first thing you could argue with.'],
    ['counts',     'Counts',     'The arithmetic. Sums, never verdicts.'],
    ['assemblies', 'Assemblies', 'Records brought into one picture. Still no opinion.'],
    ['records',    'Records',    'The rows themselves: an email, a meeting, a document, a payment.'],
    ['told',       'Told',       'What only you can say. No channel can fetch it.'],
    ['channels',   'Channels',   'What you connect, and what the buyer hands over. It carries, it never judges.']
  ];
  Array.prototype.slice.call(document.querySelectorAll('.climb[data-climb]')).forEach(function (el) {
    if (!LIB) return;
    var sizes = el.getAttribute('data-sizes') !== 'off';
    el.innerHTML = CLIMB.map(function (r) {
      var n = (LIB[r[0]] || []).length;
      return '<li class="climb__rung">' +
        (sizes ? '<span class="climb__n">' + n + '</span>' : '') +
        '<span class="climb__name">' + esc(r[1]) + '</span>' +
        '<span class="climb__line">' + esc(r[2]) + '</span></li>';
    }).join('');
    el.classList.toggle('climb--sizes', sizes);
  });

  /* The questions: a seller's own list, drawn from data.js the way the climb is, so the
     slide says exactly what the library's doc says and nobody has to keep the two in step.
     data-questions names the set: Q is the patient seller's twenty-six, V and F the other
     two, should a later slide want them. The number is the id without its letter, so Q18 is
     the eighteenth line. */
  Array.prototype.slice.call(document.querySelectorAll('.qs[data-questions]')).forEach(function (el) {
    if (!LIB) return;
    var set = el.getAttribute('data-questions');
    el.innerHTML = (LIB.questions || []).filter(function (q) { return q.set === set; })
      .map(function (q) {
        return '<li class="qs__q">' +
          '<span class="qs__n">' + esc(q.id.slice(1)) + '</span>' +
          '<span class="qs__t">' + esc(q.text) + '</span></li>';
      }).join('');
  });

  /* The learning loop (23 September): three Asks as bare cards of one height, drawn and worked
     by phone.js, which the deck loads for the reply sheets. A figure names its card; the front,
     the buttons and the reply sheet are the phone's own, so tapping a button opens the slot inside
     the card. No details behind them (the user, 23 September). */
  Array.prototype.slice.call(document.querySelectorAll('.loop-card[data-card]')).forEach(function (el) {
    var card = find('cards', el.getAttribute('data-card'));
    if (!card || !window.PHONE) return;
    el.classList.add('screen');
    el.innerHTML = PHONE.front(card) + '<div class="screen__overin">' + PHONE.actions(card) + PHONE.said(card) + '</div>' + PHONE.sheet(card);
  });

  /* The trail: one question walked down, a rung to a slide. Drawn from data.js the way the
     climb and the questions are, so nothing on the slide is typed and nothing goes stale. A
     slide names the question (data-question), the one read the descent follows (data-read) and
     how far down it has got (data-upto). Every slide of the descent is drawn at the same size,
     so a row that has arrived never moves again and the next slide only adds under it. The rung
     names are the pyramid's own four, in the present tense, plus what you connect, so that the
     pyramid four slides later is a recognition rather than a fifth vocabulary (the user's call,
     22 September: the library's words, reads and counted within, are jargon on a slide).
     No read is filled. The question is abstract, and it is only about a person that a read
     fires, so nothing on this slide picks one of the five; the descent follows one and the row
     under it shows whose counts they are. */
  var TRAIL = ['What I think', 'What I count', 'What I gather', 'What I fetch', 'What you connect'];
  function trail(el) {
    if (!LIB) return;
    var qid = el.getAttribute('data-question'), readId = el.getAttribute('data-read');
    var upto = +el.getAttribute('data-upto') || TRAIL.length;
    var reads = (LIB.signals || []).filter(function (s) { return (s.answers || []).indexOf(qid) > -1; });
    var read = find('signals', readId);
    var counts = read ? (read.counts || []).map(function (c) { return find('counts', c); }).filter(Boolean) : [];
    /* A count says what it is counted within (over) and which records it needs, so the last
       three rows are the counts' own words, gathered and de-duplicated in the order they come. */
    var asms = [], needs = [], chans = [];
    counts.forEach(function (c) {
      [].concat(c.over || []).forEach(function (a) { if (asms.indexOf(a) < 0) asms.push(a); });
      (c.needs || []).forEach(function (n) {
        if (needs.indexOf(n) < 0) needs.push(n);
        var src = n.split('#')[0], ch = /-told$/.test(src) ? 'told' : src;
        if (chans.indexOf(ch) < 0) chans.push(ch);
      });
    });
    var rows = [
      reads.length ? reads.map(function (s) { return pill('g:' + s.id, label(s)); })
                   : ['<span class="trail__none">Not written yet</span>'],
      counts.map(function (c) { return pill('c:' + c.id, label(c)); }),
      asms.map(function (a) { var e = find('assemblies', a); return pill('a:' + a, e ? label(e) : esc(a)); }),
      needs.map(function (n) { return pill('r:' + n, recLabel(n)); }),
      chans.map(function (c) { return pill('ch:' + c, colName(c)); })
    ];
    el.innerHTML = rows.slice(0, upto).map(function (of, j) {
      return '<li class="trail__step"><span class="trail__rung">' + esc(TRAIL[j]) + '</span>' +
        '<span class="trail__of">' + of.join('') + '</span></li>';
    }).join('');
  }
  Array.prototype.slice.call(document.querySelectorAll('.trail[data-question]')).forEach(trail);

  /* How many of a question set a read now claims. Filled from data.js so the number on a
     slide is the library's own and cannot be typed once and left to go stale. */
  Array.prototype.slice.call(document.querySelectorAll('[data-answered]')).forEach(function (el) {
    if (!LIB) return;
    var set = el.getAttribute('data-answered'), claimed = {};
    (LIB.signals || []).forEach(function (s) { (s.answers || []).forEach(function (a) { claimed[a] = 1; }); });
    var qs = (LIB.questions || []).filter(function (q) { return q.set === set; });
    el.textContent = qs.filter(function (q) { return claimed[q.id]; }).length + ' of ' + qs.length;
  });

  var pyramids = Array.prototype.slice.call(document.querySelectorAll('.py[data-card]'));
  pyramids.forEach(build);
  function drawShown() { pyramids.forEach(function (py) { if (!py.closest('.slide').hidden) draw(py); }); }

  function show(k, push) {
    if (k < 0 || k >= slides.length) return;
    i = k;
    slides.forEach(function (s, j) { s.hidden = j !== i; });
    if (count) count.textContent = (i + 1) + ' of ' + slides.length;
    document.title = slides[i].getAttribute('aria-label') + ' · Signal cards';
    if (push) history.replaceState(null, '', '#' + slides[i].id);
    pyramids.forEach(function (py) { if (!py.closest('.slide').hidden) size(py); });
    fit();
    drawShown();
  }
  function fromHash() {
    var id = location.hash.slice(1), k = 0;
    slides.forEach(function (s, j) { if (s.id === id) k = j; });
    show(k, false);
  }
  window.addEventListener('hashchange', fromHash); fromHash();

  document.querySelector('.deck__prev').addEventListener('click', function () { show(i - 1, true); });
  document.querySelector('.deck__next').addEventListener('click', function () { show(i + 1, true); });
  function key(k, e) {
    if (k === 'ArrowRight' || k === ' ' || k === 'PageDown') { if (e) e.preventDefault(); show(i + 1, true); }
    else if (k === 'ArrowLeft' || k === 'PageUp') { if (e) e.preventDefault(); show(i - 1, true); }
  }
  document.addEventListener('keydown', function (e) {
    if (e.defaultPrevented || e.target.closest('input, textarea, .reply-sheet__rows [role]')) return;
    key(e.key, e);
  });
  /* A phone on a slide is its own page; once it has been clicked it hands the deck's arrows back. */
  window.addEventListener('message', function (e) { if (e.data && e.data.deckKey) key(e.data.deckKey); });
})();
