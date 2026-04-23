# Fotky pro Zub času

Sem nahrávej fotky. Pojmenování:

```
<slug>-<rok>.jpg
```

Přípona musí být `.jpg` (ne `.jpeg` / `.png` / `.JPG`).

## Seznam míst & očekávaných souborů

### Akt 1 — Ústí nad Labem
- `mirove-namesti-1901.jpg`, `mirove-namesti-2001.jpg`, `mirove-namesti-2026.jpg`
- `corner-house-1901.jpg`, `corner-house-2001.jpg`, `corner-house-2026.jpg`
- `nadrazi-zapad-1901.jpg`, `nadrazi-zapad-2001.jpg`, `nadrazi-zapad-2026.jpg`
- `divadlo-1901.jpg`, `divadlo-2001.jpg`, `divadlo-2026.jpg`
- `mestske-sady-1901.jpg`, `mestske-sady-2001.jpg`, `mestske-sady-2026.jpg`

### Akt 2 — Neštěmice
- `nestemicke-namesti-1901.jpg`, `nestemicke-namesti-2001.jpg`, `nestemicke-namesti-2026.jpg`
- `hostinec-u-lipy-1901.jpg`, `hostinec-u-lipy-2001.jpg`, `hostinec-u-lipy-2026.jpg`
- `kostel-sv-floriana-1901.jpg`, `kostel-sv-floriana-2001.jpg`, `kostel-sv-floriana-2026.jpg`
- `mlyn-nad-potokem-1901.jpg`, `mlyn-nad-potokem-2001.jpg`, `mlyn-nad-potokem-2026.jpg`
- `stara-skola-1901.jpg`, `stara-skola-2001.jpg`, `stara-skola-2026.jpg`

### Akt 3 — okolí a krajina
- `nestemicky-potok-1901.jpg`, `nestemicky-potok-2001.jpg`, `nestemicky-potok-2026.jpg`
- `zricenina-blansko-1901.jpg`, `zricenina-blansko-2001.jpg`, `zricenina-blansko-2026.jpg`
- `ryjice-naves-1901.jpg`, `ryjice-naves-2001.jpg`, `ryjice-naves-2026.jpg`
- `zeleznicni-most-1901.jpg`, `zeleznicni-most-2001.jpg`, `zeleznicni-most-2026.jpg`
- `tefritovy-lom-1901.jpg`, `tefritovy-lom-2001.jpg`, `tefritovy-lom-2026.jpg`

## Jak to funguje

- Pokud soubor **existuje** → zobrazí se fotka přes placeholder.
- Pokud soubor **chybí** → zůstane vzorovaný placeholder („cca 1901" / „25. 6. 2001" / „2026").
- Nemusíš vyplňovat všechny tři roky — chybějící lze doplňovat postupně.

## Doporučení

- Poměr stran **4:3** (bude oříznuté na 4:3 přes `object-fit: cover`).
- Dlouhá strana alespoň **1200 px**, ideálně 1600–2000 px.
- Komprese JPG kolem **80 %** je akorát.
