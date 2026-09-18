/* Signal cards: one card page. Nothing here sends anything; Send only says it did. */
(function () {
  var $ = function (s) { return document.querySelector(s); };
  var $$ = function (s) { return Array.prototype.slice.call(document.querySelectorAll(s)); };
  var ack = $('#ack'), draft = $('#draft'), reasons = $('#reasons'), miniack = $('#miniack');
  var lastFocus = null;

  function say(t) { if (!t || !ack) return; ack.textContent = t; ack.hidden = false; }

  /* Sheets. One at a time; Escape or the backdrop closes; focus returns. */
  function open(sheet) {
    if (!sheet) return;
    close(draft); close(reasons);
    lastFocus = document.activeElement;
    sheet.hidden = false;
    var first = sheet.querySelector('button, [href], textarea, input');
    if (first) first.focus();
  }
  function close(sheet) {
    if (!sheet || sheet.hidden) return;
    sheet.hidden = true;
    if (lastFocus && lastFocus.focus) lastFocus.focus();
  }
  $$('.sheet-backdrop').forEach(function (b) {
    b.addEventListener('click', function (e) { if (e.target === b) close(b); });
  });
  document.addEventListener('keydown', function (e) { if (e.key === 'Escape') { close(draft); close(reasons); } });
  $$('.sheet-cancel').forEach(function (b) { b.addEventListener('click', function () { close(b.closest('.sheet-backdrop')); }); });
  $$('.sheet-hand').forEach(function (b) {
    b.addEventListener('click', function () {
      close(b.closest('.sheet-backdrop'));
      if (b.hasAttribute('data-sends')) { say('Sent. You have a moment to undo it.'); if (undo) undo.hidden = false; return; }
      say(b.getAttribute('data-ack') || 'Opened in Mail. Nothing sends until you do.');
    });
  });
  /* Undo: on a phone it would last a few seconds; here it stays, so the page can be shown again. */
  var undo = $('#undo');
  if (undo) undo.addEventListener('click', function () { undo.hidden = true; say('Undone. Nothing went.'); });

  /* The primary action and the plain ones beside it. */
  var act = $('#act');
  if (act) act.addEventListener('click', function () {
    if (act.getAttribute('data-action') === 'ack') { say(act.getAttribute('data-ack')); return; }
    open(draft);
  });
  $$('.actions [data-action="draft"]:not(#act)').forEach(function (b) { b.addEventListener('click', function () { open(draft); }); });
  $$('.actions > [data-ack]:not(#act):not(#pickdone):not(#saydone)').forEach(function (b) { b.addEventListener('click', function () { say(b.getAttribute('data-ack')); }); });

  /* Not Relevant: an action sheet with the reasons. */
  var nope = $('#nope');
  if (nope) nope.addEventListener('click', function () { open(reasons); });
  $$('#reasons [data-ack]').forEach(function (b) {
    b.addEventListener('click', function () { close(reasons); say(b.getAttribute('data-ack')); });
  });

  /* Answers: a list with one checkmark. */
  $$('.answers [data-ans]').forEach(function (b) {
    b.addEventListener('click', function () {
      $$('.answers [data-ans]').forEach(function (x) { x.setAttribute('aria-checked', x === b ? 'true' : 'false'); });
      say(b.getAttribute('data-ans'));
    });
  });

  /* Not sure: a segmented control on the back. */
  $$('[data-mini]').forEach(function (r) {
    r.addEventListener('change', function () { if (!miniack) return; miniack.textContent = r.getAttribute('data-mini'); miniack.hidden = false; });
  });

  /* Picks: up to n rows. */
  var picks = $$('.picks [role="checkbox"]'), done = $('#pickdone');
  if (done) {
    var n = +done.getAttribute('data-n');
    function chosen() { return picks.filter(function (p) { return p.getAttribute('aria-checked') === 'true'; }); }
    picks.forEach(function (p) {
      p.addEventListener('click', function () {
        if (p.getAttribute('aria-checked') === 'true') { p.setAttribute('aria-checked', 'false'); return; }
        if (chosen().length < n) p.setAttribute('aria-checked', 'true');
        else say('Three is the limit for this round. Take one off to add another.');
      });
    });
    done.addEventListener('click', function () {
      var on = chosen().map(function (p) { return p.querySelector('.ios-list__title').textContent; });
      if (!on.length) { say('Pick up to ' + n + ' first, or use my pick.'); return; }
      say(done.getAttribute('data-ack').replace('{picks}', on.join(', ')));
    });
  }

  /* Free text. */
  var sd = $('#saydone');
  if (sd) sd.addEventListener('click', function () {
    var t = ($('.say') || {}).value || '';
    if (!t.trim()) { say('A sentence is enough. Or use my guess.'); return; }
    say(sd.getAttribute('data-ack'));
  });
})();
