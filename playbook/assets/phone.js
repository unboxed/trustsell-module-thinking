/* Signal cards: the phone. It draws the day from data.js, which build.js
   writes from library/, so a card changed there changes here and on every
   slide that shows the phone (decided 19 September: the phone is built, not
   typed). The slides hold it in an iframe inside their bezel.

   The address says what to show:
     phone.html                   the day: the cards that arrive today, in the home's order. The
                                  week strip shows any other day's. A card that waits on another
                                  slides in once that one is done, and every day ends on a page
                                  saying what the tool is watching (decided 19 September)
     phone.html?card=a            one card on its own, with the count line (the details slide)
     &open=details                scrolled into the details
     &fresh                       start clean: nothing remembered, nothing kept

   Outside the slides it remembers what you did (sent, skipped, the thumbs)
   in this browser, so a day can be gone through for real. It also works on
   the deck's bare sheets, which is why deck.html loads it too. */
(function () {
  var LIB = window.LIBRARY;
  var q = new URLSearchParams(location.search);
  var embedded = window.self !== window.top;
  var fresh = q.has('fresh');

  /* ---------- what it remembers ---------- */
  var KEY = 'signal-cards:phone';
  var memory = {};
  if (!fresh) { try { memory = JSON.parse(localStorage.getItem(KEY)) || {}; } catch (e) { memory = {}; } }
  function keep() {
    if (fresh) return;
    try { localStorage.setItem(KEY, JSON.stringify(memory)); } catch (e) { /* storage blocked: the day still works, it just forgets */ }
  }

  /* ---------- drawing ---------- */
  function esc(t) { return String(t == null ? '' : t).replace(/&/g, '&amp;').replace(/</g, '&lt;').replace(/"/g, '&quot;'); }
  function find(id) { return (LIB.cards || []).filter(function (c) { return c.id === id; })[0]; }
  // A section's list items become the details' paragraphs.
  function paras(html) { return (html || '').replace(/<\/?ul>/g, '').replace(/<li>/g, '<p>').replace(/<\/li>/g, '</p>'); }

  var SVG = {
    close: '<svg width="16" height="16" viewBox="0 0 16 16" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" aria-hidden="true"><path d="M2.5 2.5l11 11M13.5 2.5l-11 11"/></svg>',
    mail: '<svg width="22" height="18" viewBox="0 0 22 18" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linejoin="round" aria-hidden="true"><rect x="1.5" y="1.5" width="19" height="15" rx="2"/><path d="m2 3 9 7 9-7"/></svg>',
    clip: '<svg width="12" height="13" viewBox="0 0 12 13" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" aria-hidden="true"><path d="M10.2 6.3 6 10.5a2.6 2.6 0 0 1-3.7-3.7l4.6-4.6a1.7 1.7 0 0 1 2.4 2.4L4.8 9.1a.8.8 0 0 1-1.2-1.2l3.9-3.9"/></svg>',
    up: '<svg width="14" height="14" viewBox="0 0 14 14" fill="none" stroke="currentColor" stroke-width="2.2" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><path d="M7 12V2.5M2.8 6.5 7 2.3l4.2 4.2"/></svg>',
    next: '<svg width="16" height="12" viewBox="0 0 16 12" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><path d="M1 6h13M9.5 1.5 14 6l-4.5 4.5"/></svg>',
    tick: '<svg width="56" height="56" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.4" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><circle cx="12" cy="12" r="10"/><path d="m7.5 12.5 3 3 6-6.5"/></svg>',
    skip: '<svg width="56" height="56" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.4" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><circle cx="12" cy="12" r="10"/><path d="m9 8 4.5 4L9 16"/><path d="M15.5 8v8"/></svg>',
    good: '<svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><path d="M7 10v12"/><path d="M15 5.88 14 10h5.83a2 2 0 0 1 1.92 2.56l-2.33 8A2 2 0 0 1 17.5 22H4a2 2 0 0 1-2-2v-8a2 2 0 0 1 2-2h2.76a2 2 0 0 0 1.79-1.11L12 2a3.13 3.13 0 0 1 3 3.88Z"/></svg>',
    bad: '<svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><path d="M17 14V2"/><path d="M9 18.12 10 14H4.17a2 2 0 0 1-1.92-2.56l2.33-8A2 2 0 0 1 6.5 2H20a2 2 0 0 1 2 2v8a2 2 0 0 1-2 2h-2.76a2 2 0 0 0-1.79 1.11L12 22a3.13 3.13 0 0 1-3-3.88Z"/></svg>',
    note: '<svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z"/></svg>',
    file: '<svg width="16" height="18" viewBox="0 0 16 18" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linejoin="round" aria-hidden="true"><path d="M2 1.5h7.5L14 6v10.5H2z"/><path d="M9.5 1.5V6H14"/></svg>',
    bars: '<svg width="18" height="12" viewBox="0 0 18 12" fill="currentColor"><rect x="0" y="8" width="3" height="4" rx="1"/><rect x="5" y="5.5" width="3" height="6.5" rx="1"/><rect x="10" y="3" width="3" height="9" rx="1"/><rect x="15" y="0" width="3" height="12" rx="1"/></svg>',
    wifi: '<svg width="16" height="12" viewBox="0 0 16 12" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round"><path d="M1 4.2a10.5 10.5 0 0 1 14 0"/><path d="M3.6 6.9a6.8 6.8 0 0 1 8.8 0"/><path d="M6.2 9.5a3 3 0 0 1 3.6 0"/></svg>',
    battery: '<svg width="27" height="13" viewBox="0 0 27 13" fill="none"><rect x=".5" y=".5" width="23" height="12" rx="3.5" stroke="currentColor" opacity=".4"/><rect x="2" y="2" width="20" height="9" rx="2" fill="currentColor"/><path d="M25 4.5v4a2 2 0 0 0 0-4z" fill="currentColor" opacity=".4"/></svg>',
    menuL: '<svg width="18" height="18" viewBox="0 0 18 18" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" aria-hidden="true"><path d="M2.5 5h13M2.5 9h13M2.5 13h13"/></svg>',
    /* The view switch shows the view it takes you to, as Apple's buttons show their action (the user
       asked; Notes and Files do the same). The card view shows the stack, the stack shows one card. */
    oneCard: '<svg width="20" height="20" viewBox="0 0 20 20" fill="none" stroke="currentColor" stroke-width="1.7" stroke-linejoin="round" aria-hidden="true"><rect x="3.5" y="2.5" width="13" height="15" rx="3"/></svg>',
    stacked: '<svg width="20" height="20" viewBox="0 0 20 20" fill="none" stroke="currentColor" stroke-width="1.7" stroke-linejoin="round" aria-hidden="true"><rect x="3" y="8.5" width="14" height="9" rx="2.5"/><path d="M4.5 5.5h11M6.5 2.5h7" stroke-linecap="round"/></svg>',
    menuR: '<svg width="18" height="18" viewBox="0 0 18 18" fill="currentColor" aria-hidden="true"><circle cx="3.5" cy="9" r="1.8"/><circle cx="9" cy="9" r="1.8"/><circle cx="14.5" cy="9" r="1.8"/></svg>'
  };

  var statusbar = '<div class="ios-statusbar" aria-hidden="true"><span>9:41</span><span class="ios-statusbar__island"></span>' +
    '<span class="ios-statusbar__indicators">' + SVG.bars + SVG.wifi + SVG.battery + '</span></div>';
  function top(inner, right) {
    return '<div class="screen__top"><button class="ios-glass-btn screen__menu" type="button" aria-label="Menu, left">' + SVG.menuL + '</button>' +
      inner + (right || '<button class="ios-glass-btn screen__menu" type="button" aria-label="Menu, right">' + SVG.menuR + '</button>') + '</div>';
  }
  var toggle = '<button class="ios-glass-btn screen__menu" type="button" aria-label="Show the day as a stack" data-view-toggle>' + SVG.stacked + '</button>';

  /* The details' widgets: the card picks them and fills them, never arranges them. */
  var WIDGET = {
    number: function (rows) {
      var now = rows[0], usual = rows[1];
      return '<div class="w-number"><span class="w-number__fig">' + esc(now[1]) + '</span><p>' + esc(now[2]) + '</p>' +
        '<div class="w-number__bars" aria-hidden="true"><i></i><i class="is-usual"></i></div>' +
        '<p class="w-number__usual">' + esc(usual[0] + ' ' + usual[1]) + ': ' + esc(usual[2]) + '</p></div>';
    },
    timeline: function (rows) {
      return '<ol class="w-time">' + rows.map(function (r) {
        return '<li' + (r[0] === 'Today' ? ' class="is-today"' : '') + '><span>' + esc(r[0]) + '</span><p>' + esc(r[1]) + '</p></li>';
      }).join('') + '</ol>';
    },
    'their-words': function (rows) {
      return '<div class="w-words">' + rows.map(function (r) {
        return '<blockquote><p>“' + esc(r[2]) + '”</p><cite>' + esc(r[0]) + ', ' + esc(r[1]) + '</cite></blockquote>';
      }).join('') + '</div>';
    },
    people: function (rows) {
      return '<ul class="w-people">' + rows.map(function (r) {
        return '<li><b>' + esc(r[0]) + '</b><span>' + esc(r[1]) + '</span><p>' + esc(r[2]) + '</p></li>';
      }).join('') + '</ul>';
    },
    'open-items': function (rows) {
      return '<ul class="w-open">' + rows.map(function (r) {
        return '<li><p>' + esc(r[0]) + '<em>' + esc(r[1]) + '</em></p><span>' + esc(r[2]) + '</span></li>';
      }).join('') + '</ul>';
    },
    documents: function (rows) {
      return '<ul class="w-docs">' + rows.map(function (r) {
        return '<li>' + SVG.file + '<p>' + esc(r[0]) + '<em>' + esc(r[1]) + ' · ' + esc(r[2]) + '</em></p></li>';
      }).join('') + '</ul>';
    }
  };
  function widgetHead(card, id) {
    var w = (LIB.widgets || []).filter(function (x) { return x.id === id; })[0];
    return (card.widget_heads && card.widget_heads[id]) || (w && w.label);
  }

  /* The details, on the spine: Why now, What happened, the widgets, Still unclear, What happens
     next, Sources. The card's own sections, in its own order, with Sources last; an Ask keeps
     its own names in the same places. The drafts belong to the sheet, not here. */
  function details(card) {
    var heads = {};
    [].concat(card.widgets || []).forEach(function (id) { heads[widgetHead(card, id)] = id; });
    var order = card.sectionOrder.filter(function (s) { return !/draft$/.test(s) && s !== 'Sources' && s !== 'The message'; });   // The message is the draft's trail, the card's back; the phone shows the draft itself (22 September)
    if (card.sections.Sources) order.push('Sources');
    var part = function (h, body) { return '<div class="details__part"><h3>' + esc(h) + '</h3>' + body + '</div>'; };
    return '<section class="details snap">' + order.map(function (s) {
      if (heads[s] && card.widgetRows && card.widgetRows[heads[s]]) return part(s, WIDGET[heads[s]](card.widgetRows[heads[s]]));
      if (s === 'Sources') return part(s, '<ul class="details__rows">' + (card.readRows || []).map(function (r) {
        return '<li>' + esc(r.from) + ': ' + esc(r.words) + '</li>';
      }).join('') + '</ul>');
      var html = paras(card.sections[s].html);
      if (s === 'What happened') {
        var m = html.match(/^<p>Why now: (.*?)<\/p>/);
        if (m) return part('Why now', '<p>' + m[1].charAt(0).toUpperCase() + m[1].slice(1) + '</p>') + part(s, html.slice(m[0].length));
      }
      return part(s, html);
    }).join('') + '</section>';
  }

  function front(card) {
    var p = card.phone, kind = card.kind;
    var badges = [p.when, card.orgName].filter(Boolean);
    return '<div class="snap"></div><article class="card deck__card deck__card--front">' +
      '<div class="deck__labels"><span class="kind kind--' + kind + '">' + esc(kind[0].toUpperCase() + kind.slice(1)) + '</span>' +
      (card.sure ? '<span class="deck__sure" title="' + esc(card.sure_because) + '">' + esc(card.sure) + '</span>' : '') + '</div>' +
      '<h2>' + esc(card.title) + '</h2>' + card.intro +
      (badges.length ? '<div class="badges">' + badges.map(function (b) { return '<span class="badge">' + esc(b) + '</span>'; }).join('') + '</div>' : '') +
      '</article>';
  }

  /* One filled action and at most one plain one, then Skip. With no plain one, Skip keeps its place. */
  function actions(card) {
    var p = card.phone;
    var act = '<button class="reply__row reply__row--action act act--send" type="button" ' +
      (p.act_does === 'open' || p.act_does === 'view' ? 'data-reply-open' : 'data-send-message') + '>' + esc(p.act) + '</button>';
    if (!p.view) return act + '<button class="ios-btn act act--skip act--skip-alone" type="button">Skip</button>';
    return act + '<button class="ios-btn act act--view" type="button" data-reply-open>' + esc(p.view) + '</button>' +
      '<button class="ios-btn act act--skip" type="button">Skip</button>' +
      '<button class="ios-btn act act--view-bar" type="button" data-reply-open>' + esc(p.view) + '</button>';
  }
  function said(card) {
    var line = '<p>' + esc(card.phone.said) + '</p><button class="ios-btn" type="button" data-undo>Undo</button>';
    return '<div class="said said--card" aria-live="polite">' + line + '</div><div class="said said--bar">' + line + '</div>';
  }
  /* Once replied or skipped, the card darkens and says what happened. The last card has no hint,
     because what comes after the day's last card is not written yet. */
  function done(card, last) {
    var p = card.phone, hint = last ? '' : '<p class="done__hint" aria-hidden="true">Swipe for the next card<span class="chevron chevron--next"></span></p>';
    var noteBtn = '<button class="done__icon" type="button" aria-label="Tell me more">' + SVG.note + '</button>';
    var undo = '<button class="ios-btn done__undo" type="button" data-undo>Undo</button>';
    return '<div class="done done--sent" role="status"><span class="done__mark">' + SVG.tick + '</span>' +
      '<p class="done__head">' + esc(p.done) + '</p><p class="done__text">' + esc(p.done_text) + '</p>' +
      '<div class="done__icons" data-marks><button class="done__icon" type="button" aria-label="A good card" aria-pressed="false" data-mark>' + SVG.good + '</button>' +
      '<button class="done__icon" type="button" aria-label="Not a good card" aria-pressed="false" data-mark>' + SVG.bad + '</button>' + noteBtn + '</div>' + hint + undo + '</div>' +
      '<div class="done done--skipped" role="status"><span class="done__mark">' + SVG.skip + '</span>' +
      '<p class="done__head">Skipped</p><p class="done__text">Tell me why, if you like. It changes what I bring you next.</p>' +
      '<div class="done__why" data-marks><button class="ios-btn done__cap" type="button" aria-pressed="false" data-mark>Not Now</button>' +
      '<button class="ios-btn done__cap" type="button" aria-pressed="false" data-mark>Not Relevant</button></div>' +
      '<div class="done__icons">' + noteBtn + '</div>' + hint + undo + '</div>' +
      '<div class="said said--bar said--skipped"><p>Skipped.</p><button class="ios-btn" type="button" data-undo>Undo</button></div>';
  }
  var more = '<p class="deck__more"><span class="chevron chevron--down" aria-hidden="true"></span>Scroll for details</p>';

  /* The reply sheet: the draft, or the card's answers to choose from. */
  function sheet(card) {
    var p = card.phone, module = card.reply && card.reply.module;
    if (p.act_does === 'open') {
      var several = module === 'several', rows = module === 'field' ? '' : (card.answers || card.picks || []).map(function (a) {
        return '<li role="' + (several ? 'checkbox' : 'radio') + '" aria-checked="false" tabindex="0">' + esc(a.label || a) + '</li>';
      }).join('');
      /* Several choices can carry a limit, from the action that confirms them. Only an Ask about what
         you intend or prefer takes one; an Ask about what happened never does (19 September). */
      var limit = several ? +((card.actions || []).filter(function (a) { return a.limit; })[0] || {}).limit || 0 : 0;
      var place = (card.reply && card.reply.placeholder) || (module === 'field' ? 'Type a name or a date' : 'Type your answer…');
      return '<div class="reply-sheet" role="group" aria-label="Your answer">' +
        '<div class="reply-sheet__top"><span></span><button class="reply-sheet__close" type="button" aria-label="Close">' + SVG.close + '</button></div>' +
        '<h2>' + esc(card.title) + '</h2>' +
        (several && card.reply.header ? '<p class="reply-sheet__header">' + esc(card.reply.header) + '</p>' : '') +
        '<ul class="reply-sheet__rows"' + (limit ? ' data-limit="' + limit + '"' : '') + (module === 'choices' ? ' role="radiogroup"' : several ? ' role="group"' : '') + ' aria-label="Your answer">' + rows +
        '<li><input type="text" placeholder="' + place + '" aria-label="' + place + '"></li></ul>' +
        '<div class="reply-sheet__foot"><button class="ios-btn ios-btn--filled" type="button" data-send data-send-message disabled>Next ' + SVG.next + '</button></div></div>';
    }
    var files = p.act_does === 'send' ? (card.documentNames || []).map(function (n) {
      return '<span class="badge email__file">' + SVG.clip + esc(n) + '</span>';
    }).join('') : '';
    var body = function (s) { return card.sections[s].html + files; };
    var again = card.sections['The shorter draft'];
    /* A draft that is not mail (a brief, a Slack message, a tender's questions) is handed over,
       not sent: its head is the draft's own title, and its one action is the card's hand-over. */
    var handed = p.act_does === 'view', head = handed ? card.draft.title : 'Email';
    if (handed) return '<div class="reply-sheet reply-sheet--email" role="group" aria-label="' + esc(head) + '">' +
      '<div class="email__head">' + SVG.file + '<span>' + esc(head) + '</span><button class="reply-sheet__close" type="button" aria-label="Close">' + SVG.close + '</button></div>' +
      '<div class="email__part"><div class="email__body" tabindex="0">' + card.sections['The draft'].html + '</div></div>' +
      '<button class="ios-btn email__send" type="button" data-send data-send-message>' + esc(card.draft.hand) + '</button></div>';
    return '<div class="reply-sheet reply-sheet--email" role="group" aria-label="The message">' +
      '<div class="email__head">' + SVG.mail + '<span>Email</span><button class="reply-sheet__close" type="button" aria-label="Close">' + SVG.close + '</button></div><div>' +
      (p.subject ? '<div class="email__part"><span class="email__label">Subject</span><p>' + esc(p.subject) + '</p></div>' : '') +
      '<div class="email__part"><span class="email__label">Body</span><div class="email__body" tabindex="0">' + body('The draft') + '</div></div></div>' +
      (again ? '<ul class="reply-sheet__rows"><li><input type="text" placeholder="Tell me what to change…" aria-label="Tell me what to change" data-ask-input>' +
        '<button class="ask-send" type="button" aria-label="Ask for this change" data-ask disabled>' + SVG.up + '</button></li></ul>' +
        '<template data-redraft>' + body('The shorter draft') + '</template>' : '') +
      /* Sending the draft is the reply only when the filled action sends it; otherwise it only closes the sheet. */
      (p.act_does === 'send'
        ? '<button class="ios-btn email__send" type="button"' + (again ? ' data-email-send' : ' data-send') + ' data-send-message>Send Message</button>'
        : '<button class="ios-btn email__send" type="button" data-send>Send Message</button>') +
      '</div>';
  }

  /* The day: the cards side by side, and what stays put while they move. */
  function page(card, k, n) {
    return '<div class="screen__page" role="group" aria-roledescription="card" aria-label="' + esc(card.title) + ', ' + (k + 1) + ' of ' + n + '" data-card="' + card.id + '">' +
      '<div class="screen__scroll" data-scroll><div class="screen__over"><div class="screen__overin"><div class="screen__foot"></div><div class="card-hole"></div>' +
      actions(card) + said(card) + done(card, k === n - 1) + more + '</div></div>' +
      front(card) + details(card) + '</div>' + sheet(card) + '</div>';
  }
  var DAYS = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'];
  var MONTHS = ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'];
  /* The week strip: this week and the next four, today filled, the days gone faint. */
  function weekStart() {
    var today = new Date(LIB.today + 'T12:00:00Z'), start = new Date(today);
    start.setUTCDate(start.getUTCDate() - (today.getUTCDay() + 6) % 7);
    return start;
  }
  /* Every day on the strip, Monday of this week to the Sunday four weeks on. */
  function stripDates() {
    var start = weekStart(), out = [];
    for (var k = 0; k < 35; k++) { var d = new Date(start); d.setUTCDate(start.getUTCDate() + k); out.push(d.toISOString().slice(0, 10)); }
    return out;
  }
  function week() {
    var today = new Date(LIB.today + 'T12:00:00Z'), start = weekStart();
    var rows = '';
    for (var w = 0; w < 5; w++) {
      var mon = new Date(start); mon.setUTCDate(start.getUTCDate() + w * 7);
      rows += '<div class="week__row" role="group" aria-label="Week of ' + mon.getUTCDate() + ' ' + MONTHS[mon.getUTCMonth()] + '">';
      for (var d = 0; d < 7; d++) {
        var day = new Date(mon); day.setUTCDate(mon.getUTCDate() + d);
        var iso = day.toISOString().slice(0, 10), gap = Math.round((day - today) / 864e5);
        var name = DAYS[day.getUTCDay()];
        rows += '<button class="week__day' + (gap < 0 ? ' is-past' : gap === 0 ? ' is-today is-selected' : '') + '" type="button" data-date="' + iso + '" aria-label="' +
          name + ' ' + day.getUTCDate() + ' ' + MONTHS[day.getUTCMonth()] + '"' + (gap === 0 ? ' aria-current="date" aria-pressed="true"' : ' aria-pressed="false"') + '>' +
          '<span class="week__name" aria-hidden="true">' + name[0] + '</span><span class="week__num" aria-hidden="true">' + day.getUTCDate() + '</span></button>';
      }
      rows += '</div>';
    }
    return '<div class="week">' + rows + '</div>';
  }
  /* A day's cards: the ones the tool puts on the home that day, less any still waiting on a card
     that is not done. Sending (or answering) frees what waits on it; skipping does not. */
  var isDone = function (id) { return memory[id] && memory[id].state === 'is-sent'; };
  function cardsOn(date) {
    return ((LIB.days || {})[date] || []).map(find).filter(function (c) {
      return c && c.phone && (c.waits_on || []).every(isDone);
    });
  }
  /* What the tool is watching on a day: the watches set by cards you have acted on. On the last
     day of a watch, what it will do if nothing comes. */
  function watching(date) {
    var lines = [];
    (LIB.cards || []).forEach(function (c) {
      if (!isDone(c.id) || !c.watch || c.arrives > date) return;
      [].concat(c.watch).forEach(function (w) {
        if (w.until && date > w.until) return;
        lines.push(w.until === date && w.otherwise ? 'Nothing from ' + w.for.replace(/'s .*$/, '') + ' by today. ' + w.otherwise
                                                   : 'Watching for ' + w.for + '.');
      });
    });
    return lines;
  }
  function dayWord(date) {
    var gap = Math.round((new Date(date + 'T12:00:00Z') - new Date(LIB.today + 'T12:00:00Z')) / 864e5);
    return gap === 0 ? 'today' : gap === 1 ? 'tomorrow' : DAYS[new Date(date + 'T12:00:00Z').getUTCDay()];
  }
  /* After the day's last card: not a card, the card's shape as a faded outline with nothing in it
     but the big words, grey, and what the tool is still watching (19 September, by looking:
     https://claude.ai/artifact/CdpkU44FdAYVj8NecebAfg). */
  function endHead(date, n) {
    var w = dayWord(date), on = w === 'today' || w === 'tomorrow' ? w : 'on ' + w;
    return (n ? 'No more cards ' : 'No cards ') + on + '.';
  }
  function end(date, n) {
    var lines = watching(date), head = endHead(date, n);
    return '<div class="screen__page screen__page--end" role="group" aria-label="' + esc(head) + '" data-end>' +
      '<div class="day-end"><h2>' + esc(head) + '</h2>' +
      (lines.length ? lines.map(function (l) { return '<p>' + esc(l) + '</p>'; }).join('')
                    : '<p>Nothing I am watching yet. Once you act on a card, I watch for what comes back.</p>') +
      '</div></div>';
  }
  function pagesOf(date) {
    var cards = cardsOn(date), n = cards.length;
    return {cards: cards, html: cards.map(function (c, k) { return page(c, k, n + 1); }).join('') + end(date, n), count: n + 1};
  }
  /* The day as a stack (decided 19 September, by looking:
     https://claude.ai/artifact/1Svan95P5BFhYUEYwqMuVr). Each card shows its top: the kind and the
     when, then the title in up to two lines. One day to a page, sideways between days, the strip
     following. A day with no cards says so in the end page's words. A card you have sent or skipped
     keeps its place, dark; tapping a card opens it in the one-card view (both proposals, not decided). */
  function stackCard(c) {
    var m = memory[c.id], done = m && m.state;
    return '<button class="stack__card' + (done ? ' is-done' : '') + '" type="button" data-open-card="' + c.id + '">' +
      '<span class="stack__meta"><span class="kind kind--' + c.kind + '">' + esc(c.kind[0].toUpperCase() + c.kind.slice(1)) + '</span>' +
      (c.phone.when ? '<span>' + esc(c.phone.when) + '</span>' : '') + '</span>' +
      '<span class="stack__two">' + esc(c.title) + '</span></button>';
  }
  function stackPages() {
    return stripDates().map(function (date) {
      var cards = cardsOn(date);
      return '<section class="stack-view__page" data-date="' + date + '"><div class="stack-view__scroll">' +
        (cards.length ? '<div class="stack">' + cards.map(stackCard).join('') + '</div>' : '<p class="stack__none">' + esc(endHead(date, 0)) + '</p>') +
        '</div></section>';
    }).join('');
  }
  function day(date) {
    var d = pagesOf(date), first = d.cards[0];
    return '<div class="screen screen--week" data-title-at="209" data-date="' + date + '"><div class="pager" data-pager>' + d.html + '</div>' +
      '<div class="stack-view" data-stack-pager inert></div>' +
      '<div class="screen__shared"><div class="screen__bar"></div><div class="screen__head">' + statusbar +
      top('<span class="screen__day" aria-live="polite">Today</span><span class="screen__title" aria-hidden="true">' + esc(first ? first.title : '') + '</span>', toggle) + '</div>' +
      week() +
      '<div class="dots" role="img" aria-label="Card 1 of ' + d.count + '">' + dots(d.count) + '</div>' +
      '</div><div class="home-indicator" aria-hidden="true"></div></div>';
  }
  function dots(n) { var h = ''; for (var k = 0; k < n; k++) h += '<i' + (k ? '' : ' class="is-on"') + '></i>'; return h; }
  /* One card on its own, as the details slide shows it: the header scrolls with the card and a
     count line says where it sits in the day. It says back one line; it does not darken. */
  function one(card, k, n) {
    return '<div class="screen" data-card="' + card.id + '"><div class="screen__scroll" data-scroll><div class="screen__over"><div class="screen__overin">' +
      '<div class="screen__foot"></div><div class="card-hole"></div><div class="screen__bar"></div>' +
      '<div class="screen__head">' + statusbar + top('<span class="screen__title" aria-hidden="true">' + esc(card.title) + '</span>') + '</div>' +
      '<p class="deck__count">' + (k + 1) + ' of ' + n + ' cards</p>' + actions(card) + said(card) + more + '</div></div>' +
      front(card) + details(card) + '</div>' + sheet(card) + '<div class="home-indicator" aria-hidden="true"></div></div>';
  }

  var mount = document.getElementById('day');
  if (mount && LIB) {
    var today = (LIB.day || []).map(find).filter(function (c) { return c && c.phone && c.arrives === LIB.today; });
    var html;
    if (q.get('card')) {
      var c = find(q.get('card'));
      html = c && c.phone ? one(c, Math.max(0, today.indexOf(c)), today.length) : '';
    } else {
      html = day(LIB.today);
    }
    if (!html) html = '<p class="phone-missing">No card here has a phone block yet.</p>';
    mount.innerHTML = '<div class="phone">' + html + '</div>';
    document.body.classList.toggle('is-embedded', embedded);
    /* On a real phone: no bezel, and the screen takes the size of the one in your hand. */
    if (!embedded && (innerWidth <= 500 || matchMedia('(hover: none) and (pointer: coarse)').matches)) {
      document.body.classList.add('is-device');
      /* Opened from the Home Screen, iOS reports a window short by about the status bar, which
         left a black strip at the foot; there the screen's own size is the true one. */
      var standalone = navigator.standalone || matchMedia('(display-mode: standalone)').matches;
      var fit = function () {
        var w = innerWidth, h = innerHeight;
        if (standalone) {
          var portrait = h >= w;
          w = Math.max(w, portrait ? screen.width : screen.height);
          h = Math.max(h, portrait ? screen.height : screen.width);
        }
        document.documentElement.style.setProperty('--screen-w', w + 'px');
        document.documentElement.style.setProperty('--screen-h', h + 'px');
        /* Whatever iOS leaves uncovered shows the page's own ground, never black. */
        document.documentElement.style.background = getComputedStyle(document.body).backgroundColor;
      };
      fit();
      window.addEventListener('resize', fit);
    }
    restore(mount);
  }
  // What was remembered: which cards were sent or skipped, and which marks were pressed.
  function restore(root) {
    root.querySelectorAll('[data-card]').forEach(function (host) {
      var m = memory[host.getAttribute('data-card')];
      if (!m) return;
      if (m.state && host.querySelector('.done')) host.classList.add(m.state);
      var marks = host.querySelectorAll('[data-mark]');
      (m.marks || []).forEach(function (j) { if (marks[j]) marks[j].setAttribute('aria-pressed', 'true'); });
    });
  }
  /* A card done (or undone) changes what waits on it: draw the day again, after the dark card has shown. */
  function freed(host) {
    var id = host.getAttribute('data-card'), pager = host.closest('[data-pager]');
    if (!pager || !pager.redraw) return;
    if (!(LIB.cards || []).some(function (c) { return (c.waits_on || []).indexOf(id) > -1; })) return;
    setTimeout(function () { pager.redraw(); }, 50);
  }
  function remember(host) {
    var id = host && host.getAttribute('data-card');
    if (!id) return;
    var state = host.classList.contains('is-sent') ? 'is-sent' : host.classList.contains('is-skipped') ? 'is-skipped' : null;
    var marks = [];
    host.querySelectorAll('[data-mark]').forEach(function (m, j) { if (m.getAttribute('aria-pressed') === 'true') marks.push(j); });
    if (state || marks.length) memory[id] = {state: state, marks: marks}; else delete memory[id];
    keep();
  }

  /* ---------- how it behaves ---------- */
  /* The scroll. The card becomes a page over the first 120 pt: --p runs from
     0 to 1 and the stylesheet does the rest. --t brings in the compact title
     once the large one has passed under the bar, 160 pt in. is-page says which
     View Draft is in play, the card's or the bar's. The snap is only for the
     way between the card and the start of the details. Past that start the
     scroll runs free (is-free): the details are taller than the screen, and
     not every browser lets you rest inside a snap area that big; Safari pulls
     back to its edges. */
  function clamp(x) { return Math.max(0, Math.min(1, x)); }
  /* Where a card keeps its state: its page, when the screen holds several cards side by side, or else the screen. */
  function scope(el) { return el.closest('.screen__page') || el.closest('.screen'); }
  function mirror(from, to) {
    to.style.setProperty('--p', from.style.getPropertyValue('--p') || 0);
    to.style.setProperty('--t', from.style.getPropertyValue('--t') || 0);
    to.classList.toggle('is-page', from.classList.contains('is-page'));
  }
  function wireScroll(sc) {
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
    sc.addEventListener('scroll', set, { passive: true });
    if (q.get('open') === 'details' && sc === document.querySelector('[data-scroll]'))
      sc.scrollTop = details.offsetTop - parseFloat(getComputedStyle(sc).scrollPaddingTop);
    set();
  }
  document.querySelectorAll('[data-scroll]').forEach(wireScroll);

  /* Cards side by side: a sideways swipe moves one card at a time. The card in
     view (is-here) lends its scroll to the layer that stays put, its title to
     the bar, and its place to the dots. The cards either side are really
     there, their edges in the gutters, so a swipe pulls in the edge you saw. */
  document.querySelectorAll('[data-pager]').forEach(function (pager) {
    var screen = pager.closest('.screen'), shared = screen.querySelector('.screen__shared');
    var pages, dotEls, here;
    /* Draw the day again: another day picked, or a card done that frees one waiting on it.
       The card in view stays in view. */
    pager.redraw = function (date, cardId) {
      var keepId = pages && pages[here] && pages[here].getAttribute('data-card');
      if (date) screen.setAttribute('data-date', date);
      var d = pagesOf(screen.getAttribute('data-date'));
      pager.innerHTML = d.html;
      shared.querySelector('.dots').innerHTML = dots(d.count);
      restore(pager);
      pager.querySelectorAll('[data-scroll]').forEach(wireScroll);
      reset();
      var to = Math.max(0, [].indexOf.call(pages, pager.querySelector('[data-card="' + (cardId || keepId) + '"]')));
      if (date && !cardId) to = 0;
      pager.scrollLeft = pages[to].offsetLeft - pages[0].offsetLeft;
      here = -1; go();
    };
    function reset() { pages = pager.querySelectorAll('.screen__page'); dotEls = shared.querySelectorAll('.dots i'); here = -1; }
    reset();
    function go() {
      /* One card's step: the pages overlap, so it is less than the screen. A hidden page has no width yet; it starts on the first card. */
      var w = pages.length > 1 ? pages[1].offsetLeft - pages[0].offsetLeft : pager.clientWidth;
      var k = w > 0 ? Math.max(0, Math.min(pages.length - 1, Math.round(pager.scrollLeft / w))) : 0;
      if (k === here) return;
      here = k;
      pages.forEach(function (pg, j) { pg.classList.toggle('is-here', j === k); pg.inert = j !== k; });
      dotEls.forEach(function (d, j) { d.classList.toggle('is-on', j === k); });
      shared.querySelector('.dots').setAttribute('aria-label', 'Card ' + (k + 1) + ' of ' + pages.length);
      shared.querySelector('.screen__title').textContent = pages[k].querySelector('h2').textContent;
      screen.classList.toggle('is-at-end', pages[k].hasAttribute('data-end'));
      mirror(pages[k], shared);
    }
    pager.addEventListener('scroll', go, { passive: true }); go();
    pager.again = function () { here = -1; go(); };
  });

  /* The reply sheet. The card's plain action raises it and the close button
     lowers it; sending, from the card or the sheet, lowers it and the card
     darkens and says back what happened, with a way to undo. In any sheet, a
     row can be chosen (one, or several), and the send button wakes once there
     is an answer. A draft's version pills switch between its versions. */
  function ready(sheet) {
    var send = sheet.querySelector('[data-send]'), input = sheet.querySelector('input');
    if (!send || !sheet.querySelector('[role], input')) return;
    send.disabled = !(sheet.querySelector('[aria-checked="true"]') || (input && input.value.trim()));
  }
  function choose(row) {
    if (row.getAttribute('aria-disabled') === 'true') return;
    var on = row.getAttribute('aria-checked') === 'true';
    if (row.getAttribute('role') === 'radio') {
      row.parentNode.querySelectorAll('[role="radio"]').forEach(function (r) { r.setAttribute('aria-checked', 'false'); });
      row.setAttribute('aria-checked', 'true');
    } else {
      row.setAttribute('aria-checked', on ? 'false' : 'true');
      /* At the limit, the rows not ticked stand down until one is unticked. */
      var list = row.parentNode, limit = +list.getAttribute('data-limit');
      if (limit) {
        var full = list.querySelectorAll('[aria-checked="true"]').length >= limit;
        list.querySelectorAll('[role="checkbox"]').forEach(function (r) {
          if (full && r.getAttribute('aria-checked') !== 'true') r.setAttribute('aria-disabled', 'true'); else r.removeAttribute('aria-disabled');
        });
      }
    }
    ready(row.closest('.reply-sheet'));
  }
  /* The week strip. Tapping a day moves the selection, the header names it (Today, Tomorrow,
     Yesterday, or the weekday and date) and the pager shows that day's cards. */
  function dayName(d, today) {
    var a = new Date(d.getAttribute('data-date') + 'T12:00:00');
    var t = new Date(today.getAttribute('data-date') + 'T12:00:00');
    var gap = Math.round((a - t) / 864e5);
    return gap === 0 ? 'Today' : gap === 1 ? 'Tomorrow' : gap === -1 ? 'Yesterday' : d.getAttribute('aria-label');
  }
  function select(screen, d) {
    screen.querySelectorAll('.week__day').forEach(function (x) {
      x.classList.toggle('is-selected', x === d);
      x.setAttribute('aria-pressed', x === d ? 'true' : 'false');
    });
    screen.querySelector('.screen__day').textContent = dayName(d, screen.querySelector('.week__day.is-today'));
  }
  function pick(d) {
    var screen = d.closest('.screen');
    select(screen, d);
    if (screen.classList.contains('is-stacked')) { stackTo(screen, d.getAttribute('data-date'), true); return; }
    var pager = screen.querySelector('[data-pager]');
    if (pager && pager.redraw) pager.redraw(d.getAttribute('data-date'));
  }

  /* The two views. The switch shows the other view; the stacked view is drawn afresh each
     time it opens, so what you did in the card view shows there. Remembered, unless fresh. */
  function stackTo(screen, date, smooth) {
    var sv = screen.querySelector('[data-stack-pager]'), pg = sv.querySelector('[data-date="' + date + '"]');
    if (pg) sv.scrollTo({ left: pg.offsetLeft, behavior: smooth ? 'smooth' : 'auto' });
  }
  function setView(screen, stacked, cardId) {
    var sv = screen.querySelector('[data-stack-pager]'), pager = screen.querySelector('[data-pager]');
    var btn = screen.querySelector('[data-view-toggle]'), shared = screen.querySelector('.screen__shared');
    var date = screen.getAttribute('data-date');
    if (stacked) {
      sv.innerHTML = stackPages();
      /* The header and strip stay the day's, not the open card's page. */
      shared.style.setProperty('--p', 0); shared.style.setProperty('--t', 0); shared.classList.remove('is-page');
    }
    screen.classList.toggle('is-stacked', stacked);
    sv.inert = !stacked; pager.inert = stacked;
    btn.innerHTML = stacked ? SVG.oneCard : SVG.stacked;
    btn.setAttribute('aria-label', stacked ? 'Show one card at a time' : 'Show the day as a stack');
    if (stacked) { stackTo(screen, date); settle(screen, date); }
    else if (cardId || date !== pager.shownDate) pager.redraw(date, cardId);
    else pager.again();
    pager.shownDate = date;
    memory.view = stacked ? 'stack' : 'card';
    keep();
  }

  /* The stack's motion (decided 19 September, by trying four on one sheet:
     https://claude.ai/artifact/EesojPnV7RRKuFE3i5hMcm). The layout stays as it was; only the
     motion is added. When the stack opens, the day's cards rise into place one after another.
     A tapped card dips and lifts, then grows into the card it opens, the card view fading in
     under it. With reduced motion there is none of it. */
  var still = matchMedia('(prefers-reduced-motion: reduce)').matches;
  var EASE = 'cubic-bezier(.2,.8,.2,1)';
  function settle(screen, date) {
    if (still) return;
    screen.querySelectorAll('.stack-view__page[data-date="' + date + '"] .stack__card').forEach(function (c, i) {
      c.animate([{ opacity: 0, transform: 'translateY(28px)' }, { opacity: 1, transform: 'none' }],
        { duration: 380, delay: i * 40, easing: EASE, fill: 'backwards' });
    });
  }
  function openFromStack(c) {
    var screen = c.closest('.screen'), id = c.getAttribute('data-open-card');
    if (still) { setView(screen, false, id); return; }
    if (screen.opening) return;
    screen.opening = true;
    function box(el) {
      var r = el.getBoundingClientRect(), s = screen.getBoundingClientRect();
      return { top: r.top - s.top, left: r.left - s.left, width: r.width, height: r.height };
    }
    c.animate([{ transform: 'none' }, { transform: 'scale(.97)', offset: .45 }, { transform: 'translateY(-4px) scale(1.01)' }],
      { duration: 220, easing: 'ease-out', fill: 'forwards' }).finished.then(function () {
      /* A copy of the stacked card stands in while the real one is drawn in the card view. */
      var from = box(c), wrap = document.createElement('div'), ghost = c.cloneNode(true);
      wrap.className = 'stack stack__ghost';
      wrap.style.cssText = 'top:' + from.top + 'px;left:' + from.left + 'px;width:' + from.width + 'px';
      ghost.style.height = from.height + 'px';
      wrap.appendChild(ghost);
      setView(screen, false, id);
      var hole = screen.querySelector('.screen__page.is-here .card-hole'), pager = screen.querySelector('[data-pager]');
      if (!hole) { screen.opening = false; return; }
      screen.appendChild(wrap);
      var to = box(hole), t = 460;
      wrap.animate([{ top: from.top + 'px', left: from.left + 'px', width: from.width + 'px' },
        { top: to.top + 'px', left: to.left + 'px', width: to.width + 'px' }], { duration: t, easing: EASE, fill: 'forwards' });
      ghost.animate([{ height: from.height + 'px' }, { height: to.height + 'px', borderRadius: getComputedStyle(hole).borderRadius }],
        { duration: t, easing: EASE, fill: 'forwards' });
      [].forEach.call(ghost.children, function (k) { k.animate([{ opacity: 1 }, { opacity: 0, offset: .45 }, { opacity: 0 }], { duration: t, fill: 'forwards' }); });
      pager.animate([{ opacity: 0 }, { opacity: 0, offset: .35 }, { opacity: 1 }], { duration: t, easing: 'ease-out' });
      wrap.animate([{ opacity: 1 }, { opacity: 1, offset: .75 }, { opacity: 0 }], { duration: t + 60, fill: 'forwards' }).finished.then(function () {
        wrap.remove(); screen.opening = false;
      });
    });
  }
  document.querySelectorAll('[data-stack-pager]').forEach(function (sv) {
    var screen = sv.closest('.screen'), weekEl = screen.querySelector('.week');
    screen.querySelector('[data-pager]').shownDate = screen.getAttribute('data-date');
    sv.addEventListener('scroll', function () {
      if (!screen.classList.contains('is-stacked')) return;
      var pages = sv.children, k = Math.round(sv.scrollLeft / sv.clientWidth), pg = pages[k];
      if (!pg || pg.getAttribute('data-date') === screen.getAttribute('data-date')) return;
      var date = pg.getAttribute('data-date'), d = screen.querySelector('.week__day[data-date="' + date + '"]');
      screen.setAttribute('data-date', date);
      select(screen, d);
      /* Crossing into another week brings its row onto the strip. */
      if (Math.abs(weekEl.scrollLeft - d.parentNode.offsetLeft) > 2) weekEl.scrollTo({ left: d.parentNode.offsetLeft, behavior: 'smooth' });
    }, { passive: true });
    if (memory.view === 'stack') setView(screen, true);
  });

  document.addEventListener('click', function (e) {
    var d = e.target.closest('.week__day');
    if (d) { pick(d); return; }
    var vt = e.target.closest('[data-view-toggle]'), oc = e.target.closest('[data-open-card]');
    if (vt) { var scr = vt.closest('.screen'); setView(scr, !scr.classList.contains('is-stacked')); return; }
    if (oc) { openFromStack(oc); return; }
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
      remember(sc);
      freed(sc);
      return;
    }
    /* Skip darkens the card too, where the card has a skipped state; the reason
       and the thumbs mark themselves, one in each group, and a second tap clears it. */
    var skip = e.target.closest('.screen .act--skip'), mark = e.target.closest('[data-mark]');
    if (skip && scope(skip).querySelector('.done--skipped')) { scope(skip).classList.add('is-skipped'); remember(scope(skip)); return; }
    /* A thumb or a reason is the acknowledgment too: it marks itself, and after a
       beat the card slides off to the next one, which keeps its own state. A
       swipe does the same without a mark. The last card only marks. */
    if (mark) {
      var was = mark.getAttribute('aria-pressed') === 'true';
      mark.closest('[data-marks]').querySelectorAll('[data-mark]').forEach(function (m) { m.setAttribute('aria-pressed', 'false'); });
      mark.setAttribute('aria-pressed', was ? 'false' : 'true');
      var pg = mark.closest('.screen__page'), pager = pg && pg.closest('[data-pager]');
      if (pg) remember(pg);
      if (!was && pager && pg.nextElementSibling) {
        setTimeout(function () { pager.scrollTo({ left: pg.nextElementSibling.offsetLeft, behavior: 'smooth' }); }, 450);
      }
      return;
    }
    if (undo) {
      var u = scope(undo);
      u.classList.remove('is-sent', 'is-skipped');
      u.querySelectorAll('[data-mark]').forEach(function (m) { m.setAttribute('aria-pressed', 'false'); });
      remember(u);
      freed(u);
      return;
    }
    if (open) { var sh = scope(open).querySelector('.reply-sheet'); sh.classList.add('is-open'); more(sh.querySelector('.reply-sheet__rows')); }
    else if (row) choose(row);
    else if (shut) shut.closest('.reply-sheet').classList.remove('is-open');
  });
  /* A draft: words typed in the ask row wake its arrow and rest the sheet's
     send; the arrow (or return) hands them over and the draft is rewritten.
     The prototype answers every ask the same way, with the card's shorter draft. */
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

  /* A list of answers taller than the sheet fades at its foot while there are more rows below. */
  function more(rows) {
    if (rows) rows.classList.toggle('is-more', rows.scrollTop + rows.clientHeight < rows.scrollHeight - 2);
  }
  document.addEventListener('scroll', function (e) {
    if (e.target.classList && e.target.classList.contains('reply-sheet__rows')) more(e.target);
  }, true);
  document.addEventListener('input', function (e) {
    var sh = e.target.closest('.reply-sheet'); if (sh) { ready(sh); askState(sh); }
  });
  document.addEventListener('keydown', function (e) {
    if (e.key === 'Enter' && e.target.matches('[data-ask-input]')) { e.preventDefault(); ask(e.target.closest('.reply-sheet')); return; }
    if (e.target.closest('input, textarea')) return;
    var row = e.target.closest('.reply-sheet__rows [role]');
    if (row && (e.key === ' ' || e.key === 'Enter')) { e.preventDefault(); choose(row); return; }
    /* Inside a slide, the deck's arrows still move the slides once the phone has been clicked. */
    if (embedded && /^(ArrowLeft|ArrowRight|PageUp|PageDown)$/.test(e.key)) {
      e.preventDefault();
      window.parent.postMessage({deckKey: e.key}, '*');
    }
  });
})();
