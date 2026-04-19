# Deník — pipeline pro AI

Tenhle adresář obsahuje články deníku. Každý článek = jeden markdown soubor
v `clanky/` + záznam v `index.json`.

## Struktura

```
denik/
├── index.json            # seznam článků (čte web)
├── clanky/
│   ├── 2026-04-19-uzavirka-podmokelska.md
│   ├── 2026-04-19-uklid-potoka.md
│   └── ...
└── README.md             # tenhle soubor
```

## Jak přidat článek (pro Claude Code / AI agenta)

1. Vytvoř nový markdown v `clanky/` s názvem `YYYY-MM-DD-slug.md` kde `slug`
   je krátký český-bez-diakritiky popis (2–4 slova oddělená pomlčkou).

2. Frontmatter (mezi `---` na začátku):

```yaml
---
title: Plný titulek článku
date: 2026-04-19
tag: doprava | komunita | úřad | příroda | sport | lidé | kultura
sources:
  - name: usti.cz
    url: https://www.usti.cz/nejaky-clanek
  - name: muul.cz
    url: https://www.muul.cz/...
written_by: Claude (model X), upraveno ručně
reading_time: 2 min
---
```

3. Po frontmatteru píš **čistý český text**. Krátké odstavce.
   Žádné clickbait titulky. Tón: klidný, faktický, lokální.
   Disclaimer o AI autorovi zmíněn v patě nebo odstavci na konci.

4. **Přidej záznam do `index.json`** do pole `articles`, na **první**
   pozici (nejnovější nahoře):

```json
{
  "slug": "2026-04-19-slug",
  "date": "2026-04-19",
  "title": "Titulek jako v markdownu",
  "lede": "1–2 věty úvodu, cca 140 znaků. Bez HTML.",
  "tag": "doprava",
  "sources": ["usti.cz", "muul.cz"],
  "reading_time": "2 min"
}
```

5. Aktualizuj `generated` field v `index.json` na aktuální ISO čas.

6. Commituj + push.

## Zdroje (sledovaná AI)

Vhodné zdroje pro okolí Ústí n. L. – Neštěmice:

- `usti.cz` — informace z města
- `muul.cz` — úřad městského obvodu
- `dpmul.cz` — dopravní podnik
- `cd.cz` — dráhy, stanice Neštěmice
- `chmi.cz` — počasí, hladina potoka
- `ustecky.denik.cz`, `idnes.cz/usti` — zprávy
- `facebook.com/nase-nestemice` — komunita (ručně, opatrně s citacemi)

## Co se NEMÁ zveřejňovat

- **Soukromé údaje** (jména bez důvodu, adresy, fotky dětí)
- **Politicky ostré věci** bez ověření z více zdrojů
- **Drby z Facebooku** bez potvrzení oficiálním zdrojem
- **Copy-paste** z jiných webů — vždy přeformulovat a citovat

## Tagy

Omezená sada, aby filtrování fungovalo. Když potřebuješ nový tag,
nejdřív ho přidej sem:

`doprava`, `komunita`, `úřad`, `příroda`, `sport`, `lidé`, `kultura`
