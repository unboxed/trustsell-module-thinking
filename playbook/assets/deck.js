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
  window.addEventListener('resize', fit);

  function show(k, push) {
    if (k < 0 || k >= slides.length) return;
    i = k;
    slides.forEach(function (s, j) { s.hidden = j !== i; });
    if (count) count.textContent = (i + 1) + ' of ' + slides.length;
    document.title = slides[i].getAttribute('aria-label') + ' · Signal cards';
    if (push) history.replaceState(null, '', '#' + slides[i].id);
    fit();
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
  document.querySelectorAll('[data-scroll]').forEach(function (sc) {
    var screen = sc.closest('.screen'), details = sc.querySelector('.details');
    function set() {
      var start = details.offsetTop - parseFloat(getComputedStyle(sc).scrollPaddingTop);
      sc.classList.toggle('is-free', sc.scrollTop >= start - 1);
      var p = clamp(sc.scrollTop / 120);
      screen.style.setProperty('--p', p);
      screen.style.setProperty('--t', clamp((sc.scrollTop - 160) / 40));
      screen.classList.toggle('is-page', p >= .5);
    }
    sc.addEventListener('scroll', set, { passive: true }); set();
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
  document.addEventListener('click', function (e) {
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
      var sc = sent.closest('.screen');
      sc.querySelector('.reply-sheet').classList.remove('is-open');
      sc.classList.add('is-sent');
      return;
    }
    if (undo) { undo.closest('.screen').classList.remove('is-sent'); return; }
    if (open) open.closest('.screen').querySelector('.reply-sheet').classList.add('is-open');
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
