# nestemice — projektový deník

> Tento soubor čti vždycky jako první, než začneš na webu pracovat.
> Obsahuje kontext, role, pravidla a stav, který se jinak ztrácí mezi chaty.

---

## 1. Co to je

**Soukromý, neoficiální web o Neštěmicích a okolí.**

- Navazuje na starý web z let 2001–2005 (autor „Fox" = FC)
- Doména `nestemice.cz` patří FC, je nasměrovaná na jeho server
- Není to oficiální web městského obvodu — ten je `nestemice.eu`
- Na webu **není** reklama, není komerční využití

GitHub repo: `FCISCZ/new-nestemice` (default branch `main`)

---

## 2. Kdo na tom pracuje

### FC (člověk, vlastník, arbitr)
- Má poslední slovo
- Dává směr, rozhoduje, schvaluje velké změny
- Mluví česky, neformálně, bez diakritiky
- Oceňuje: stručnost, přímočarost, neplácat
- Štve ho: zbytečné stěny textu, „AI slop", bannery/disclaimery, změny mimo zadání, kostrbatý sloh

### Babička (člověk, redaktorka)
- Lidská perspektiva, paměť místa, sloh
- Píše **vlastní články** — vzpomínky, komentáře, reportáže
- **Kontroluje a upravuje AI texty** před publikací
- Pracuje přes Claude Code (nebo skrz FC)

### Claude Code (AI, dělník)
- Má připojenou databázi přes MCP
- Stahuje ze zdrojů, sumarizuje, vkládá články, dělá technické úpravy
- Hlavní objem rutinní práce

### Claude (já, v tomto projektu — designér)
- **Pracuju jen se soubory v tomto projektu** — žádné MCP, žádná databáze
- Umím číst GitHub (přes `github_read_file`) a fetchovat web
- Role: návrhář webu, HTML/CSS/JS, slohové úpravy textů
- Pokud chceš vidět nejnovější články → Claude Code je musí pushnout na GitHub, pak si je natáhnu

---

## 3. Verzování (DŮLEŽITÉ)

**Každá změna = vlastní verze ve formátu `YY_MM_DD_NNv`**

- Příklad: `26_04_19_01v` = 19. 4. 2026, první změna dne
- Čítač se každý den resetuje
- **Každý autor (FC / Babička / Claude Code / Claude-designér) přidává verzi** při jakékoli úpravě
- Cíl: kdykoli najít *před/po*, vrátit se, identifikovat kdo co kdy změnil

**Jak to chceme dělat (návrh, není finální — FC dořeší ráno):**
- Každý commit má v message přesně formát: `[26_04_19_03v] popis změny (autor)`
- Patička článku/stránky zobrazuje aktuální verzi a autora
- Historie viditelná na webu (jako Wikipedia)
- Otevřené: verzujeme **celý web** / **každou stránku** / **každý článek**? FC se ještě nerozhodl.

---

## 4. Struktura webu (aktuální stav)

Stránky v rootu:
- `index.html` — hlavní, aktuality/deník
- `kronika.html` — scany kroniky (zatím prázdné, čeká na materiály)
- `zub-casu.html` — historické fotky + jejich současné protějšky
- `o-projektu.html` — co to je, kdo za tím stojí, pravidla
- `archiv-2001.html` — ukázka toho, jak se dělaly weby v 2001
- `rozcestnik.html` — rozcestník (přehled)

Sdílené soubory:
- `styles.css` — všechny styly
- `shell.js` — společná hlavička, nav, patička (vkládá se do každé stránky)

---

## 5. Aktuality — jak se zobrazují

### Stránkování
- **10 článků na stránku** (konstanta `PAGE_SIZE` v index.html)
- Řazení: **nejnovější první** (podle `date` z index.json)
- URL: `index.html?p=2`, `?p=3` atd. Bez parametru = strana 1.
- **První článek na straně 1** (bez filtru) se vykreslí jako `featured` (větší, zvýrazněný pozadím)

### Pager dole
```
← novější    [1]       [2]         [3]          starší →
             duben     březen      leden–únor
```
- Vlevo: `← novější` (stránka o 1 nižší, disabled na straně 1)
- Uprostřed: čísla stránek, **pod každým číslem label měsíce** podle dat článků na té stránce:
  - 1 měsíc → `duben`
  - 2 měsíce ve stejném roce → `březen–duben`
  - přes rok → `prosinec 2025–leden 2026`
- Vpravo: `starší →` (stránka o 1 vyšš��, disabled na poslední)
- Aktuální stránka je zvýrazněná (tmavé pozadí, bílý text)

### Filtr tagem
- Nahoře lišta s tagy: `vše`, `doprava`, `komunita`, `úřad`, `příroda`, `sport`, `lidé`, `kultura`
- Přepnutí tagu resetuje stránku na 1
- Tag `vše` = žádný filtr

### Jak přidat článek
1. Markdown do `denik/clanky/YYYY-MM-DD-slug.md` s frontmatterem (viz `denik/README.md`)
2. Záznam do `denik/index.json` na **první pozici** v `articles[]`
3. Aktualizovat `generated` timestamp
4. Commit + push

### Zobrazení článku
- Klik na titulek → `clanek.html?s=<slug>` → načte markdown, vykreslí plný text
- Podporuje: odstavce, **tučné**, *kurzíva*, odkazy, citáty (blockquote), h2, média (obrázky, video, audio)

---

## 6. Tón a vizuální řešení

- **Novinový / magazínový pocit** — serif nadpisy, monospace pro technické texty
- Akcentová barva: **oranžová** (`--accent`)
- Žádné zbytečné emoji, žádné gradientové bannery
- Autorství článku musí být vidět — štítky `AI`, `AI · redakce`, `Babička`, `FC`
- Babiččiny texty mají typograficky jiný pocit (bez kickeru, jen datum a podpis)

---

## 7. Co zbývá (roadmap)

- [ ] Rozhodnout verzování: celý web vs. článek vs. zápis
- [ ] Nastavit Claude Code na publikační workflow (draft → babička → publikace)
- [ ] Kronika: scan 189 stránek, zobrazit jako obrázky (OCR zatím ne)
- [ ] Zub času: doplnit současné fotografie (FC focení)
- [ ] Hosting: zatím GitHub Pages na testování, později nasměrování `nestemice.cz` (není spěch)
- [ ] Editor pro Babičku — buď Google Docs + Claude Code publikátor, nebo vlastní lehké webové rozhraní (později)

---

## 8. Pravidla pro mě (Claude-designéra)

- **Čtu tento soubor jako první.** Pak teprve sahám na cokoli jiného.
- Neměním věci, které FC nezadal. Ani „při tom, když už to dělám".
- Úpravy textů: nejdřív ukázat návrh, pak měnit. Sloh je u FC důležitý.
- Pokud si nejsem jistý, **ptám se.** Radši 1 otázka navíc než špatná úprava.
- Když provedu úpravu, říkám *co přesně* jsem změnil. Bez „vylepšil jsem ještě…"
- **Nechlubím se, nepíšu oslavné shrnutí.** FC chce vědět fakta, ne marketing.

---

*Aktualizováno: 19. 4. 2026, ~23:45, Claude-designér na konci dlouhého dne.*
*Pokud něco z toho neodpovídá realitě, FC to ráno upraví.*
