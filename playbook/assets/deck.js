/* Signal cards: the deck. Every slide lives in deck.html; one shows at a
   time, picked by the hash. Arrow keys and space move. Each slide says how
   big one of its figures is drawn (data-w, data-h) and the script scales the
   figures to fit the slide's body, never above the slide's cap: 1:1, unless
   the slide says otherwise (data-max). A phone is never drawn bigger than a
   phone; a bare sheet may be. The phone's reply sheet works too. */
(function () {
  var slides = Array.prototype.slice.call(document.querySelectorAll('.slide'));
  var count = document.getElementById('count');
  var i = 0;

  function fit() {
    var sl = slides[i], body = sl.querySelector('.slide__body');
    if (!body) return;
    var w = +sl.getAttribute('data-w'), h = +sl.getAttribute('data-h');
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

  /* The reply sheet. On the phone the card's action raises it and the close
     button or the send button lowers it. In any sheet, a row can be chosen
     (one, or several), and the send button wakes once there is an answer. */
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
    if (open) open.closest('.screen').querySelector('.reply-sheet').classList.add('is-open');
    else if (row) choose(row);
    else if (shut) shut.closest('.reply-sheet').classList.remove('is-open');
  });
  document.addEventListener('input', function (e) {
    var sheet = e.target.closest('.reply-sheet'); if (sheet) ready(sheet);
  });

  document.querySelector('.deck__prev').addEventListener('click', function () { show(i - 1, true); });
  document.querySelector('.deck__next').addEventListener('click', function () { show(i + 1, true); });
  document.addEventListener('keydown', function (e) {
    if (e.target.closest('input, textarea')) return;
    var row = e.target.closest('.reply-sheet__rows [role]');
    if (row && (e.key === ' ' || e.key === 'Enter')) { e.preventDefault(); choose(row); return; }
    if (e.key === 'ArrowRight' || e.key === ' ' || e.key === 'PageDown') { e.preventDefault(); show(i + 1, true); }
    else if (e.key === 'ArrowLeft' || e.key === 'PageUp') { e.preventDefault(); show(i - 1, true); }
  });
})();
