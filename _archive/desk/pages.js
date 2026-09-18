// The desk's page writer, cut from build.js on 18 September 2026 when the desk was archived.
// It does not run on its own: it expects build.js's library, sorted cards and world above it.

/* ---------- the pages ---------- */
/* The playbook stays plain static HTML that opens by double-clicking. What changes is
   that the chrome lives here, once, instead of being copied into twenty-two files. */

const h = s => String(s == null ? '' : s)
  .replace(/&/g, '&amp;').replace(/</g, '&lt;').replace(/>/g, '&gt;')
  .replace(/"/g, '&quot;').replace(/'/g, '&#x27;');
const lis = html => [...String(html || '').matchAll(/<li>([\s\S]*?)<\/li>/g)].map(m => m[1]);
const kindSlug = c => c.kind === 'act' ? c.label.toLowerCase() : c.kind;

const TABBAR = (here) => `<nav class="ios-tabbar" aria-label="Sections">
  <a class="ios-tabbar__item"${here === 'cards' ? ' aria-selected="true"' : ''} href="${here === 'card' ? '../' : ''}index.html"><svg width="22" height="22" viewBox="0 0 22 22" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linejoin="round"><rect x="3" y="5" width="16" height="12" rx="2.5"/><path d="M6 2.5h10"/></svg>Cards</a>
  <a class="ios-tabbar__item" href="${here === 'card' ? '../' : ''}ask.html"><svg width="22" height="22" viewBox="0 0 22 22" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round"><circle cx="9.5" cy="9.5" r="6.5"/><path d="m14.5 14.5 5 5"/></svg>Ask</a>
  <a class="ios-tabbar__item" href="${here === 'card' ? '../' : ''}library.html"><svg width="22" height="22" viewBox="0 0 22 22" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linejoin="round"><rect x="3" y="3" width="4" height="16" rx="1"/><rect x="9" y="3" width="4" height="16" rx="1"/><path d="M15.5 4.2l3.3 15.2" stroke-linecap="round"/></svg>Library</a>
  <a class="ios-tabbar__item" href="${here === 'card' ? '../' : ''}deck.html"><svg width="22" height="22" viewBox="0 0 22 22" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linejoin="round"><rect x="6" y="2" width="10" height="18" rx="2.5"/><path d="M9.5 17h3" stroke-linecap="round"/></svg>Phone</a>
</nav>`;

const HEAD = (title, up) => `<!DOCTYPE html>
<html lang="en">
<head>
<meta charset="utf-8">
<meta name="viewport" content="width=device-width, initial-scale=1">
<meta name="color-scheme" content="light dark">
<title>${h(title)}</title>
<link rel="stylesheet" href="${up}assets/fonts/inter.css">
<link rel="stylesheet" href="${up}assets/ios-tokens.css">
<link rel="stylesheet" href="${up}assets/ios-components.css">
<link rel="stylesheet" href="${up}assets/style.css">
</head>`;

function frontReply(c) {
  if (c.reply && c.reply.module === 'choices' && c.answers)
    return `  <ul class="ios-list answers" role="radiogroup" aria-label="Your answer">\n` +
      c.answers.map(a => `    <li><button class="ios-list__row ios-list__row--tappable" role="radio" aria-checked="false" data-ans="${h(a.says)}"><span class="ios-list__title">${h(a.label)}</span>${a.suggested ? '<span class="ios-list__value">Suggested</span>' : ''}<span class="check" aria-hidden="true"></span></button></li>`).join('\n') +
      `\n  </ul>\n`;
  if (c.reply && c.reply.module === 'several' && c.picks)
    return `  <div class="ios-list__header">${h(c.reply.header)}</div>\n  <ul class="ios-list picks">\n` +
      c.picks.map(p => `    <li><button class="ios-list__row ios-list__row--tappable" role="checkbox" aria-checked="false"><span class="ios-list__title">${h(p)}</span><span class="check" aria-hidden="true"></span></button></li>`).join('\n') +
      `\n  </ul>\n`;
  if (c.reply && c.reply.module === 'field')
    return `  <ul class="ios-list"><li class="ios-list__row ios-list__row--field"><textarea class="ios-field say" rows="3" placeholder="${h(c.reply.placeholder)}" aria-label="Your answer"></textarea></li></ul>\n`;
  return '';
}

function frontActions(c) {
  const isAnswer = c.reply && c.reply.module !== 'buttons';
  const btns = (c.actions || []).map((a, i) => {
    const cls = ['ios-btn', a.style === 'filled' ? 'ios-btn--filled' : a.style === 'tinted' ? 'ios-btn--tinted' : ''].filter(Boolean).join(' ');
    if (a.opens === 'reasons') return `    <button class="${cls}" id="nope">${h(a.label)}</button>`;
    if (a.confirms === 'picks')  return `    <button class="${cls}" id="pickdone" data-n="${a.limit}" data-ack="${h(a.says)}">${h(a.label)}</button>`;
    if (a.confirms === 'field')  return `    <button class="${cls}" id="saydone" data-ack="${h(a.says)}">${h(a.label)}</button>`;
    const first = a.style === 'filled' && !isAnswer;
    const attrs = [first ? ' id="act"' : ''];
    if (a.opens === 'draft') attrs.push(first ? ' data-action="draft"' : ' data-action="draft"');
    else if (a.says) attrs.push(first ? ` data-action="ack" data-ack="${h(a.says)}"` : (isAnswer && a.style === 'tinted' ? ` data-ans="${h(a.says)}"` : ` data-ack="${h(a.says)}"`));
    return `    <button class="${cls}"${attrs.join('')}>${h(a.label)}</button>`;
  });
  return `  <div class="actions${isAnswer ? ' answers' : ''}">\n${btns.join('\n')}\n  </div>`;
}

function backSections(c) {
  const out = [];
  for (const name of c.sectionOrder || []) {
    if (name === 'The draft') continue;
    if (name === 'What I read' && c.readRows) {
      const items = c.readRows.map(r => `      <li class="ios-list__row"><span class="ios-list__title">${inline(r.words)}</span><span class="ios-list__value">${h(r.sources.map(sourceName).filter((v, i, a) => a.indexOf(v) === i).join(', '))}</span></li>`);
      out.push(`  <div class="ios-list__header">What I read</div>\n  <ul class="ios-list read">\n${items.join('\n')}\n  </ul>`);
      continue;
    }
    const rows = lis(c.sections[name].html);
    if (!rows.length) continue;
    const extra = name === 'What I read' ? ' read' : '';
    const items = rows.map(r => `      <li class="ios-list__row"><span class="ios-list__title">${r}</span></li>`);
    if (name === 'Not sure' && c.notsure && c.notsure.length) {
      items.push(`      <li class="ios-list__row ios-list__row--control"><div class="ios-segmented mini" role="radiogroup" aria-label="Your read">\n` +
        c.notsure.map(o => `        <label><input type="radio" name="mini" data-mini="${h(o.says)}"><span></span>${h(o.label)}</label>`).join('\n') +
        `\n      </div></li>`);
    }
    out.push(`  <div class="ios-list__header">${h(name)}</div>\n  <ul class="ios-list${extra}">\n${items.join('\n')}\n  </ul>`);
    if (name === 'Not sure' && c.notsure && c.notsure.length)
      out.push(`  <p class="ios-list__footer" id="miniack" role="status" hidden></p>`);
  }
  return out.join('\n');
}

function cardPage(c, prev, next) {
  const draftSection = c.sections['The draft'];
  const sheets = [];
  if (c.draft && draftSection) {
    sheets.push(`<div class="sheet-backdrop" id="draft" hidden>
  <div class="sheet" role="dialog" aria-modal="true" aria-labelledby="draft-title">
    <div class="sheet__grabber" aria-hidden="true"></div>
    <header class="sheet__bar">
      <button class="ios-btn sheet-cancel">Cancel</button>
      <span class="ios-navbar__title" id="draft-title">${h(c.draft.title)}</span>
      ${c.draft.hand ? `<button class="ios-btn ios-btn--filled sheet-hand"${c.draft.hand === 'Send' ? ' data-sends' : ''}>${h(c.draft.hand)}</button>` : '<span class="navbar-spacer" aria-hidden="true"></span>'}
    </header>
    ${c.draft.sub ? `<p class="ios-list__footer sheet__sub">${h(c.draft.sub)}</p>` : ''}
    <div class="sheet__body">
${draftSection.html}
    </div>
    ${c.draft.footer ? `<p class="ios-list__footer">${h(c.draft.footer)}</p>` : ''}
  </div>
</div>`);
  }
  if (c.reasons && c.reasons.length) {
    sheets.push(`<div class="sheet-backdrop sheet-backdrop--actions" id="reasons" hidden>
  <div class="ios-actionsheet" role="dialog" aria-modal="true" aria-labelledby="reasons-title">
    <p class="ios-actionsheet__title" id="reasons-title">Why isn&#x27;t this relevant?</p>
    <div class="ios-actionsheet__actions">
${c.reasons.map(r => `      <button class="ios-btn" data-ack="${h(r.says)}">${h(r.label)}</button>`).join('\n')}
      <button class="ios-btn ios-actionsheet__cancel sheet-cancel">Cancel</button>
    </div>
  </div>
</div>`);
  }
  const whenLine = c.when ? c.when.words : c.held_words;
  return `${HEAD(c.title + ' · Signal cards', '../')}
<body class="page page--card">

<nav class="ios-navbar">
  <a class="ios-btn navbar-back" href="../index.html"><span class="chevron" aria-hidden="true"></span>Signal cards</a>
  <span class="ios-navbar__title">${h(c.label)}</span>
  <span class="navbar-spacer" aria-hidden="true"></span>
</nav>

<main class="page-body">
<div class="card-page">

<section class="card-front">
  <article class="card${c.held_by ? ' card--held' : ''}">
    <span class="kind kind--${kindSlug(c)}">${h(c.label)}</span>
    <h1>${h(c.title)}</h1>
    <p>${h(c.intro.replace(/<\/?p>/g, '').trim())}</p>
${whenLine ? `    <p class="when">${h(whenLine)}</p>\n` : ''}  </article>
${frontReply(c)}${frontActions(c)}
  <p class="ios-list__footer ack" id="ack" role="status" hidden></p>
${c.draft && c.draft.hand === 'Send' ? '  <button class="ios-btn undo" id="undo" hidden>Undo</button>\n' : ''}
</section>

<section class="card-back">
  <h2 class="back-title">The thinking${c.sure ? ` <span class="sure">${h(c.sure)}</span>` : ''}</h2>
${c.sure_because ? `  <p class="ios-list__footer sure-because">${h(c.sure_because)}</p>\n` : ''}${backSections(c)}
</section>

</div>

<nav class="toolbar" aria-label="Previous and next card">
  ${prev ? `<a class="ios-btn toolbar__prev" href="${prev.id}.html"><span class="chevron" aria-hidden="true"></span><span>${h(prev.title)}</span></a>` : '<span></span>'}
  ${next ? `<a class="ios-btn toolbar__next" href="${next.id}.html"><span>${h(next.title)}</span><span class="chevron chevron--next" aria-hidden="true"></span></a>` : '<span></span>'}
</nav>
</main>

${sheets.join('\n\n')}

${TABBAR('card')}
<script src="../assets/card.js"></script>
</body>
</html>
`;
}

const CARDS_DIR = path.join(ROOT, 'playbook/cards');
for (let i = 0; i < sorted.length; i++)
  fs.writeFileSync(path.join(CARDS_DIR, sorted[i].id + '.html'),
                   cardPage(sorted[i], sorted[i - 1], sorted[i + 1]));

console.log(`  wrote playbook/cards/*.html (${sorted.length} pages)`);

/* The home. Its tiles are the cards; everything else on it is the page's own furniture
   and is kept here verbatim, the same way the card's chrome is. */
// An Ask tile says "Answer": the card's own front actions are the replies, and on a tile
// there is nothing to reply to yet. Every other kind shows its one action.
const tileAction = c => c.kind === 'ask' ? 'Answer' : (c.actions && c.actions[0] ? c.actions[0].label : null);

// Today, from world/goal.md, said the way the page says a date: "Wednesday 16 September".
const todayWords = (() => {
  const d = new Date((world.goal && world.goal.today) + 'T12:00:00Z');
  return isNaN(d) ? '' : d.toLocaleDateString('en-GB', {weekday: 'long', day: 'numeric', month: 'long', timeZone: 'UTC'}).replace(',', '');
})();
function homePage(cards) {
  const tiles = cards.map(c => `  <a class="card card--item${c.held_by ? ' card--held' : ''}" data-c="${kindSlug(c)}" href="cards/${c.id}.html">
    <span class="kind kind--${kindSlug(c)}">${h(c.label)}</span>
    <h2>${h(c.title)}</h2>
    <p>${h(c.intro.replace(/<\/?p>/g, '').trim())}</p>
${(c.when || c.held_words) ? `    <p class="when">${h(c.when ? c.when.words : c.held_words)}</p>\n` : ''}${tileAction(c) ? `    <span class="ios-btn ios-btn--tinted">${h(tileAction(c))}</span>\n` : ''}  </a>`).join('\n');

  return `${HEAD('Signal cards', '')}
<body class="page page--home">

<main class="page-body">

<header class="large-title">
  <h1>Signal cards</h1>
  <p class="date">${todayWords}</p>
</header>

<div class="ios-segmented filters" role="radiogroup" aria-label="Kind of card">
  <label><input type="radio" name="kind" value="all" checked><span></span>All</label>
  <label><input type="radio" name="kind" value="sustain"><span></span>Sustain</label>
  <label><input type="radio" name="kind" value="advance"><span></span>Advance</label>
  <label><input type="radio" name="kind" value="expand"><span></span>Expand</label>
  <label><input type="radio" name="kind" value="ask"><span></span>Ask</label>
  <label><input type="radio" name="kind" value="connect"><span></span>Connect</label>
</div>

<section class="grid" id="grid" aria-label="Today&#x27;s cards">
${tiles}
</section>

<div class="ios-empty" id="empty" hidden>
  <p class="ios-empty__title" id="empty-title">No cards of this kind today</p>
  <p class="ios-empty__body">When one comes up it will appear here. Show all cards to see what there is.</p>
</div>

<section class="section card" id="box">
  <h2>Wondering about someone?</h2>
  <p>The cards above are what I think matters today. Ask me about a person, a council or a deal and I&#x27;ll bring the right cards up, or tell you what I know and what I read to know it.</p>
  <form class="search" action="ask.html" method="get" role="search">
    <svg width="18" height="18" viewBox="0 0 22 22" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" aria-hidden="true"><circle cx="9.5" cy="9.5" r="6.5"/><path d="m14.5 14.5 5 5"/></svg>
    <input class="ios-field" type="search" name="q" placeholder="A person, a council or a deal" aria-label="Ask me">
  </form>
  <div class="tries">
    <span class="lead">Try</span>
    <a class="ios-btn ios-btn--tinted ios-btn--small" href="ask.html#cold">Who&#x27;s going cold?</a>
    <a class="ios-btn ios-btn--tinted ios-btn--small" href="ask.html#felton">What&#x27;s happening with Felton?</a>
    <a class="ios-btn ios-btn--tinted ios-btn--small" href="ask.html#westmoor">Who am I talking to about Westmoor?</a>
  </div>
</section>

<p class="ios-list__footer foot-line">${todayWords}. ${cards.filter(c => c.when && c.when.mode === 'dated').length} cards carry a date, ${cards.filter(c => c.when && c.when.mode === 'fresh').length} are fresh, the rest simmer. The real tool would show what fits your day and hold the rest; the playbook shows the whole deck, sorted by what waiting a day would cost.</p>

</main>

${TABBAR('cards')}

<script>
(function(){
  var radios=document.querySelectorAll('.filters input'),cards=document.querySelectorAll('.card--item'),empty=document.getElementById('empty'),title=document.getElementById('empty-title');
  var names={sustain:'Sustain',advance:'Advance',expand:'Expand',ask:'Ask',connect:'Connect'};
  Array.prototype.forEach.call(radios,function(r){
    r.addEventListener('change',function(){
      var f=r.value,n=0;
      Array.prototype.forEach.call(cards,function(c){var show=(f==='all'||c.getAttribute('data-c')===f);c.hidden=!show;if(show)n++;});
      empty.hidden=n>0;
      title.textContent='No '+names[f]+' cards today';
    });
  });
})();
</script>
</body>
</html>
`;
}

fs.writeFileSync(path.join(ROOT, 'playbook/index.html'), homePage(sorted));
console.log('  wrote playbook/index.html');
