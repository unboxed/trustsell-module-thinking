/* Signal cards: the deck. Every slide lives in deck.html; one shows at a
   time, picked by the hash. Arrow keys and space move. Each slide says how
   big one of its figures is drawn (data-w, data-h) and the script scales the
   figures to fit the slide's body, never above the slide's cap: 1:1, unless
   the slide says otherwise (data-max). A phone is never drawn bigger than a
   phone; a bare sheet may be. The phone's scroll and reply sheet work too. */
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
  function build(py) {
    if (!LIB) return;
    var find = function (k, id) { return (LIB[k] || []).filter(function (e) { return e.id === id; })[0]; };
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
    var label = function (e) { return esc(String(e.label).replace(/^"|"$/g, '')); };
    var recLabel = function (i) { var r = (LIB.records || []).filter(function (x) { return x.address === i; })[0]; return esc(r ? r.plain || r.label : i); };
    var colName = function (c) { var ch = find('channels', c); return c === 'told' ? 'You told me' : esc(ch ? ch.name.replace(/ \/.*/, '') : c); };
    var pill = function (id, text, main) { return '<span class="py__pill' + (main ? ' is-main' : '') + '" data-id="' + id + '">' + text + '</span>'; };
    var kind = card.kind === 'act' ? card.label.toLowerCase() : card.kind;
    py.innerHTML = '<svg class="py__svg" aria-hidden="true"></svg>' +
      '<div class="py__row"><div class="py__card" data-id="card"><article class="card"><span class="kind kind--' + kind + '">' + esc(card.label) + '</span>' +
      '<h2>' + esc(card.title) + '</h2>' + card.intro + '</article></div></div>' +
      '<span class="py__name" data-for="3">What I think</span><div class="py__row" data-r="3">' + reads.map(function (r, j) { return pill('g:' + r.id, label(r), !j); }).join('') + '</div>' +
      '<span class="py__name" data-for="2">What I counted</span><div class="py__row" data-r="2">' + counts.map(function (c) { return pill('c:' + c.id, label(c)); }).join('') + '</div>' +
      '<span class="py__name" data-for="1">What I gathered</span><div class="py__row" data-r="1">' + asms.map(function (a) { return pill('a:' + a.id, label(a)); }).join('') + '</div>' +
      '<span class="py__name" data-for="0">What I fetched</span><div class="py__row py__row--ground" data-r="0">' + order.map(function (c) {
        return '<div class="py__col" data-id="ch:' + c + '"><ul>' + recs[c].map(function (i) { return '<li><span>' + recLabel(i) + '</span></li>'; }).join('') + '</ul><b>' + colName(c) + '</b></div>';
      }).join('') + '</div>';
    py.__edges = edges;
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
      svg.appendChild(path);
    });
  }
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
    fit();
    drawShown();
  }
  function fromHash() {
    var id = location.hash.slice(1), k = 0;
    slides.forEach(function (s, j) { if (s.id === id) k = j; });
    show(k, false);
  }
  window.addEventListener('hashchange', fromHash); fromHash();

  /* The phone's scroll. The card becomes a page over the first 120 pt: --p
     runs from 0 to 1 and the stylesheet does the rest. --t brings in the
     compact title once the large one has passed under the bar, 160 pt in.
     is-page says which View Draft is in play, the card's or the bar's.
     The snap is only for the way between the card and the start of the
     details. Past that start the scroll runs free (is-free): the details
     are taller than the screen, and not every browser lets you rest inside
     a snap area that big; Safari pulls back to its edges. */
  function clamp(x) { return Math.max(0, Math.min(1, x)); }
  /* Where a card keeps its state: its page, when the screen holds several cards side by side, or else the screen. */
  function scope(el) { return el.closest('.screen__page') || el.closest('.screen'); }
  function mirror(from, to) {
    to.style.setProperty('--p', from.style.getPropertyValue('--p') || 0);
    to.style.setProperty('--t', from.style.getPropertyValue('--t') || 0);
    to.classList.toggle('is-page', from.classList.contains('is-page'));
  }
  document.querySelectorAll('[data-scroll]').forEach(function (sc) {
    var screen = sc.closest('.screen'), host = scope(sc), details = sc.querySelector('.details');
    var shared = screen.querySelector('.screen__shared');
    /* A screen whose card sits lower (the week strip's) says where its title reaches the bar. */
    var titleAt = +screen.getAttribute('data-title-at') || 160;
    function set() {
      var start = details.offsetTop - parseFloat(getComputedStyle(sc).scrollPaddingTop);
      sc.classList.toggle('is-free', sc.scrollTop >= start - 1);
      var p = clamp(sc.scrollTop / 120);
      host.style.setProperty('--p', p);
      host.style.setProperty('--t', clamp((sc.scrollTop - titleAt) / 40));
      host.classList.toggle('is-page', p >= .5);
      if (shared && host.classList.contains('is-here')) mirror(host, shared);
    }
    sc.addEventListener('scroll', set, { passive: true }); set();
  });

  /* Cards side by side: a sideways swipe moves one card at a time. The card in
     view (is-here) lends its scroll to the layer that stays put, its title to
     the bar, and its place to the dots; the edges show where there is a card
     either side. */
  document.querySelectorAll('[data-pager]').forEach(function (pager) {
    var screen = pager.closest('.screen'), shared = screen.querySelector('.screen__shared');
    var pages = pager.querySelectorAll('.screen__page'), dots = shared.querySelectorAll('.dots i');
    var here = -1;
    function go() {
      /* A hidden slide has no width yet; it starts on the first card. */
      var w = pager.clientWidth, k = w ? Math.max(0, Math.min(pages.length - 1, Math.round(pager.scrollLeft / w))) : 0;
      if (k === here) return;
      here = k;
      pages.forEach(function (pg, j) { pg.classList.toggle('is-here', j === k); pg.inert = j !== k; });
      dots.forEach(function (d, j) { d.classList.toggle('is-on', j === k); });
      shared.querySelector('.dots').setAttribute('aria-label', 'Card ' + (k + 1) + ' of ' + pages.length);
      shared.querySelector('.screen__title').textContent = pages[k].querySelector('.deck__card h2').textContent;
      shared.querySelector('.peek--left').hidden = k === 0;
      shared.querySelector('.peek--right').hidden = k === pages.length - 1;
      mirror(pages[k], shared);
    }
    pager.addEventListener('scroll', go, { passive: true }); go();
  });

  /* The reply sheet. On the phone the card's plain action raises it and the
     close button lowers it; sending, from the card or the sheet, lowers it
     and the card says back what happened, with a way to undo. In any sheet, a row can be chosen
     (one, or several), and the send button wakes once there is an answer. A
     draft's version pills switch between its versions. */
  function ready(sheet) {
    var send = sheet.querySelector('[data-send]'), input = sheet.querySelector('input');
    if (!send || !sheet.querySelector('[role], input')) return;
    send.disabled = !(sheet.querySelector('[aria-checked="true"]') || (input && input.value.trim()));
  }
  function choose(row) {
    var on = row.getAttribute('aria-checked') === 'true';
    if (row.getAttribute('role') === 'radio') {
      row.parentNode.querySelectorAll('[role="radio"]').forEach(function (r) { r.setAttribute('aria-checked', 'false'); });
      row.setAttribute('aria-checked', 'true');
    } else row.setAttribute('aria-checked', on ? 'false' : 'true');
    ready(row.closest('.reply-sheet'));
  }
  /* The week strip. Tapping a day moves the selection and the header names
     it: Today, Tomorrow, Yesterday, or the weekday and date. The card stays; what a later
     day shows is not written yet. */
  function dayName(day, today) {
    var d = new Date(day.getAttribute('data-date') + 'T12:00:00');
    var t = new Date(today.getAttribute('data-date') + 'T12:00:00');
    var gap = Math.round((d - t) / 864e5);
    return gap === 0 ? 'Today' : gap === 1 ? 'Tomorrow' : gap === -1 ? 'Yesterday' : day.getAttribute('aria-label');
  }
  function pick(day) {
    var screen = day.closest('.screen');
    screen.querySelectorAll('.week__day').forEach(function (d) {
      d.classList.toggle('is-selected', d === day);
      d.setAttribute('aria-pressed', d === day ? 'true' : 'false');
    });
    screen.querySelector('.screen__day').textContent = dayName(day, screen.querySelector('.week__day.is-today'));
  }

  document.addEventListener('click', function (e) {
    var day = e.target.closest('.week__day');
    if (day) { pick(day); return; }
    var open = e.target.closest('[data-reply-open]'), row = e.target.closest('.reply-sheet__rows [role]');
    var shut = e.target.closest('.screen .reply-sheet__close, .screen [data-send]');
    var version = e.target.closest('[data-version]');
    if (version) {
      var sh = version.closest('.reply-sheet');
      sh.querySelectorAll('[data-version]').forEach(function (v) { v.setAttribute('aria-pressed', v === version ? 'true' : 'false'); });
      sh.querySelectorAll('[data-version-panel]').forEach(function (p) { p.hidden = p.getAttribute('data-version-panel') !== version.getAttribute('data-version'); });
      return;
    }
    var asked = e.target.closest('[data-ask]');
    if (asked) { ask(asked.closest('.reply-sheet')); return; }
    var sent = e.target.closest('.screen [data-send-message]'), undo = e.target.closest('[data-undo]');
    if (sent) {
      var sc = scope(sent);
      sc.querySelector('.reply-sheet').classList.remove('is-open');
      sc.classList.add('is-sent');
      return;
    }
    if (undo) { scope(undo).classList.remove('is-sent'); return; }
    if (open) scope(open).querySelector('.reply-sheet').classList.add('is-open');
    else if (row) choose(row);
    else if (shut) shut.closest('.reply-sheet').classList.remove('is-open');
  });
  /* A draft: words typed in the ask row wake its arrow and rest the sheet's
     send; the arrow (or return) hands them over and the draft is rewritten. */
  function askState(sheet) {
    var input = sheet.querySelector('[data-ask-input]'); if (!input) return;
    var has = !!input.value.trim();
    sheet.querySelector('[data-ask]').disabled = !has;
    sheet.querySelector('[data-email-send]').disabled = has;
  }
  function ask(sheet) {
    var input = sheet.querySelector('[data-ask-input]'), again = sheet.querySelector('[data-redraft]');
    if (!input.value.trim()) return;
    sheet.querySelector('.email__body').innerHTML = again.innerHTML;
    input.value = ''; input.placeholder = 'Tell me what else to change…';
    askState(sheet);
  }

  document.addEventListener('input', function (e) {
    var sheet = e.target.closest('.reply-sheet'); if (sheet) { ready(sheet); askState(sheet); }
  });

  document.querySelector('.deck__prev').addEventListener('click', function () { show(i - 1, true); });
  document.querySelector('.deck__next').addEventListener('click', function () { show(i + 1, true); });
  document.addEventListener('keydown', function (e) {
    if (e.key === 'Enter' && e.target.matches('[data-ask-input]')) { e.preventDefault(); ask(e.target.closest('.reply-sheet')); return; }
    if (e.target.closest('input, textarea')) return;
    var row = e.target.closest('.reply-sheet__rows [role]');
    if (row && (e.key === ' ' || e.key === 'Enter')) { e.preventDefault(); choose(row); return; }
    if (e.key === 'ArrowRight' || e.key === ' ' || e.key === 'PageDown') { e.preventDefault(); show(i + 1, true); }
    else if (e.key === 'ArrowLeft' || e.key === 'PageUp') { e.preventDefault(); show(i - 1, true); }
  });
})();
