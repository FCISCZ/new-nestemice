/* ===========================================================
   Sdilena hlavicka + paticka pro vsechny stranky
   Includujes to do <head> jako <script src="shell.js" defer></script>
   nebo pred </body>.

   Na strance:
   - <div id="shell-header"></div>  se nahradi hlavickou + navigaci
   - <footer id="shell-footer"></footer>  se nahradi paticku
   - data-page attribut na <body> urcuje aktivni polozku v navigaci
   =========================================================== */

(function () {
  const NAV = [
    { key: 'home',    href: 'index.html',       label: 'Aktuality' },
    { key: 'kronika', href: 'kronika.html',     label: 'Kronika' },
    { key: 'zub',     href: 'zub-casu.html',    label: 'Zub času' },
    { key: 'o',       href: 'o-projektu.html',  label: 'O projektu' },
    { key: 'archiv',  href: 'archiv-2001.html', label: 'Archiv 2001' },
  ];

  function formatDate(d) {
    const dni = ['neděle','pondělí','úterý','středa','čtvrtek','pátek','sobota'];
    const mes = ['ledna','února','března','dubna','května','června','července','srpna','září','října','listopadu','prosince'];
    return `${dni[d.getDay()]} ${d.getDate()}. ${mes[d.getMonth()]} ${d.getFullYear()}`;
  }

  function calcDepth() {
    // kolikrat "../" potrebujeme, aby se dostalo na root
    const p = location.pathname.replace(/\/$/, '');
    const parts = p.split('/').filter(Boolean);
    // pokud posledni je .html, tak je to soubor, jinak je to slozka
    const last = parts[parts.length - 1] || '';
    const isFile = /\.html?$/i.test(last);
    const depth = isFile ? parts.length - 1 : parts.length;
    // Kdyz je stranka v rootu, depth = 0 (nepocitame domenu)
    // Pro GH Pages a file:// pocitame podle kusu cesty od rootu site
    return ''; // relative odkazy zvladne prohlizec
  }

  function renderHeader() {
    const el = document.getElementById('shell-header');
    if (!el) return;
    const page = document.body.dataset.page || 'home';
    const base = document.body.dataset.base || '';
    const today = formatDate(new Date());

    const navItems = NAV.map(n => {
      const href = base + n.href;
      const current = page === n.key ? ' class="current"' : '';
      return `<a href="${href}"${current}>${n.label}</a>`;
    }).join('');

    el.innerHTML = `
      <header class="masthead">
        <div class="meta-l">
          ${today}<br/>
          Ústí nad Labem · ČR<br/>
          Ročník XXI · Č. ${Math.floor((Date.now()/86400000)%365 + 1)}
        </div>
        <h1 class="brand">
          <a href="${base}index.html">
            <small>soukromá stránka FC &amp; AI &nbsp;·&nbsp; nezávisle na obecním úřadu</small>
            Neštěmický <em>sousedský</em> deník
          </a>
        </h1>
        <div class="meta-r">
          Vydává FC <span class="soft">(soukromě)</span><br/>
          Redakce člověk &amp; AI<br/>
          &nbsp;
        </div>
      </header>
      <nav class="mainnav">
        ${navItems}
      </nav>
    `;
  }

  function renderFooter() {
    const el = document.getElementById('shell-footer');
    if (!el) return;
    const base = document.body.dataset.base || '';

    el.className = 'site';
    el.innerHTML = `
      <div class="cols">
        <div>
          <h4>O webu</h4>
          <p>Soukromý projekt o Neštěmicích a okolí. Deník denně sbírá a sepisuje AI. Kronika a historické stránky navazují na původní web <b>Fox</b> z let 2001–2005.</p>
          <p class="mono soft">Žádné komerční využití. Dotazy a opravy vítány.</p>
        </div>
        <div>
          <h4>Sekce</h4>
          <ul>
            <li><a href="${base}index.html">Aktuality</a></li>
            <li><a href="${base}kronika.html">Kronika</a></li>
            <li><a href="${base}zub-casu.html">Zub času</a></li>
            <li><a href="${base}o-projektu.html">O projektu</a></li>
            <li><a href="${base}archiv-2001.html">Archiv 2001</a></li>
          </ul>
        </div>
        <div>
          <h4>Odkazy</h4>
          <ul>
            <li><a href="https://www.nestemice.eu" target="_blank" rel="noopener">nestemice.eu (oficiální)</a></li>
            <li><a href="https://www.usti-nad-labem.cz" target="_blank" rel="noopener">usti-nad-labem.cz</a></li>
            <li><a href="https://cs.wikipedia.org/wiki/Ne%C5%A1t%C4%9Bmice" target="_blank" rel="noopener">Wikipedia</a></li>
          </ul>
        </div>
      </div>
      <div class="colophon">
        <span>© nestemice · soukromý projekt FC</span>
        <span></span>
      </div>
    `;
  }

  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', () => { renderHeader(); renderFooter(); });
  } else {
    renderHeader(); renderFooter();
  }
})();
