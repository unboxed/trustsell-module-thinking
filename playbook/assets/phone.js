/* Signal cards: the phone. It draws the day from data.js, which build.js
   writes from library/, so a card changed there changes here and on every
   slide that shows the phone (decided 19 September: the phone is built, not
   typed). The slides hold it in an iframe inside their bezel.

   The address says what to show:
     phone.html                   the day: every card with a phone block, in the home's order
     phone.html?cards=a,b,c       those cards, in that order
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
    menuR: '<svg width="18" height="18" viewBox="0 0 18 18" fill="currentColor" aria-hidden="true"><circle cx="3.5" cy="9" r="1.8"/><circle cx="9" cy="9" r="1.8"/><circle cx="14.5" cy="9" r="1.8"/></svg>'
  };

  var statusbar = '<div class="ios-statusbar" aria-hidden="true"><span>9:41</span><span class="ios-statusbar__island"></span>' +
    '<span class="ios-statusbar__indicators">' + SVG.bars + SVG.wifi + SVG.battery + '</span></div>';
  function top(inner) {
    return '<div class="screen__top"><button class="ios-glass-btn screen__menu" type="button" aria-label="Menu, left">' + SVG.menuL + '</button>' +
      inner + '<button class="ios-glass-btn screen__menu" type="button" aria-label="Menu, right">' + SVG.menuR + '</button></div>';
  }

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
    var order = card.sectionOrder.filter(function (s) { return !/draft$/.test(s) && s !== 'Sources'; });
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
    var p = card.phone, kind = card.kind === 'act' ? card.label.toLowerCase() : card.kind;
    var badges = [p.when, card.councilName].filter(Boolean);
    return '<div class="snap"></div><article class="card deck__card deck__card--front">' +
      '<div class="deck__labels"><span class="kind kind--' + kind + '">' + esc(card.label) + '</span>' +
      (card.sure ? '<span class="deck__sure" title="' + esc(card.sure_because) + '">' + esc(card.sure) + '</span>' : '') + '</div>' +
      '<h2>' + esc(card.title) + '</h2>' + card.intro +
      (badges.length ? '<div class="badges">' + badges.map(function (b) { return '<span class="badge">' + esc(b) + '</span>'; }).join('') + '</div>' : '') +
      '</article>';
  }

  /* One filled action and at most one plain one, then Skip. With no plain one, Skip keeps its place. */
  function actions(card) {
    var p = card.phone;
    var act = '<button class="reply__row reply__row--action act act--send" type="button" ' +
      (p.act_does === 'open' ? 'data-reply-open' : 'data-send-message') + '>' + esc(p.act) + '</button>';
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
      var several = module === 'several', rows = module === 'field' ? '' : (card.answers || []).map(function (a) {
        return '<li role="' + (several ? 'checkbox' : 'radio') + '" aria-checked="false" tabindex="0">' + esc(a.label) + '</li>';
      }).join('');
      var place = module === 'field' ? 'Type a name or a date' : 'Type your answer…';
      return '<div class="reply-sheet" role="group" aria-label="Your answer">' +
        '<div class="reply-sheet__top"><span></span><button class="reply-sheet__close" type="button" aria-label="Close">' + SVG.close + '</button></div>' +
        '<h2>' + esc(card.title) + '</h2>' +
        '<ul class="reply-sheet__rows"' + (module === 'choices' ? ' role="radiogroup"' : several ? ' role="group"' : '') + ' aria-label="Your answer">' + rows +
        '<li><input type="text" placeholder="' + place + '" aria-label="' + place + '"></li></ul>' +
        '<div class="reply-sheet__foot"><button class="ios-btn ios-btn--filled" type="button" data-send data-send-message disabled>Next ' + SVG.next + '</button></div></div>';
    }
    var files = p.act_does === 'send' ? (card.documentNames || []).map(function (n) {
      return '<span class="badge email__file">' + SVG.clip + esc(n) + '</span>';
    }).join('') : '';
    var body = function (s) { return card.sections[s].html + files; };
    var again = card.sections['The shorter draft'];
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
  function week() {
    var today = new Date(LIB.today + 'T12:00:00Z'), start = new Date(today);
    start.setUTCDate(start.getUTCDate() - (today.getUTCDay() + 6) % 7);
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
  function day(cards) {
    var n = cards.length;
    return '<div class="screen screen--week" data-title-at="209"><div class="pager" data-pager>' +
      cards.map(function (c, k) { return page(c, k, n); }).join('') + '</div>' +
      '<div class="screen__shared"><div class="screen__bar"></div><div class="screen__head">' + statusbar +
      top('<span class="screen__day" aria-live="polite">Today</span><span class="screen__title" aria-hidden="true">' + esc(cards[0].title) + '</span>') + '</div>' +
      week() + '<div class="peek peek--left" hidden></div><div class="peek peek--right"' + (n > 1 ? '' : ' hidden') + '></div>' +
      '<div class="dots" role="img" aria-label="Card 1 of ' + n + '">' + cards.map(function (c, k) { return '<i' + (k ? '' : ' class="is-on"') + '></i>'; }).join('') + '</div>' +
      '</div><div class="home-indicator" aria-hidden="true"></div></div>';
  }
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
    var today = (LIB.day || []).map(find).filter(function (c) { return c && c.phone; });
    var named = function (list) { return list.split(',').map(find).filter(function (c) { return c && c.phone; }); };
    var html;
    if (q.get('card')) {
      var c = find(q.get('card'));
      html = c && c.phone ? one(c, Math.max(0, today.indexOf(c)), today.length) : '';
    } else {
      var cards = q.get('cards') ? named(q.get('cards')) : today;
      html = cards.length ? day(cards) : '';
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
      };
      fit();
      window.addEventListener('resize', fit);
    }
    // What was remembered: which cards were sent or skipped, and which marks were pressed.
    mount.querySelectorAll('[data-card]').forEach(function (host) {
      var m = memory[host.getAttribute('data-card')];
      if (!m) return;
      if (m.state && host.querySelector('.done')) host.classList.add(m.state);
      var marks = host.querySelectorAll('[data-mark]');
      (m.marks || []).forEach(function (j) { if (marks[j]) marks[j].setAttribute('aria-pressed', 'true'); });
    });
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
    sc.addEventListener('scroll', set, { passive: true });
    if (q.get('open') === 'details' && sc === document.querySelector('[data-scroll]'))
      sc.scrollTop = details.offsetTop - parseFloat(getComputedStyle(sc).scrollPaddingTop);
    set();
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
      /* A hidden page has no width yet; it starts on the first card. */
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
  function dayName(d, today) {
    var a = new Date(d.getAttribute('data-date') + 'T12:00:00');
    var t = new Date(today.getAttribute('data-date') + 'T12:00:00');
    var gap = Math.round((a - t) / 864e5);
    return gap === 0 ? 'Today' : gap === 1 ? 'Tomorrow' : gap === -1 ? 'Yesterday' : d.getAttribute('aria-label');
  }
  function pick(d) {
    var screen = d.closest('.screen');
    screen.querySelectorAll('.week__day').forEach(function (x) {
      x.classList.toggle('is-selected', x === d);
      x.setAttribute('aria-pressed', x === d ? 'true' : 'false');
    });
    screen.querySelector('.screen__day').textContent = dayName(d, screen.querySelector('.week__day.is-today'));
  }

  document.addEventListener('click', function (e) {
    var d = e.target.closest('.week__day');
    if (d) { pick(d); return; }
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
        setTimeout(function () { pager.scrollTo({ left: pg.offsetLeft + pager.clientWidth, behavior: 'smooth' }); }, 450);
      }
      return;
    }
    if (undo) {
      var u = scope(undo);
      u.classList.remove('is-sent', 'is-skipped');
      u.querySelectorAll('[data-mark]').forEach(function (m) { m.setAttribute('aria-pressed', 'false'); });
      remember(u);
      return;
    }
    if (open) scope(open).querySelector('.reply-sheet').classList.add('is-open');
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
