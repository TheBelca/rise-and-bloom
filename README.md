# Rise & Bloom

**Botany, taught beautifully.**

A vintage botanical field-guide website for Rise & Bloom — illustrated plant
lessons, a print shop, and *the Greenhouse* newsletter. Built as a fast,
self-contained static site with hand-drawn SVG botanical "plates," an antique
herbarium palette, and elegant serif typography.

## Structure

```
index.html        — single-page site (nav, hero, lessons, print shop, about, greenhouse, footer)
css/styles.css    — design system: parchment palette, plate frames, responsive layout
js/main.js        — sticky nav, mobile menu, scroll reveals, newsletter form
```

## Sections

- **Hero** — "Botany, taught beautifully." with the illustrated *Plate I — Flos matutinus*.
- **The Lesson Archive** — three illustrated lesson plates (Morphologia, Radices, Florescentia).
- **The Print Shop** — archival prints, stationery & cards, and the field book.
- **About** — the studio story, wrapped around an animated wax-seal mark.
- **The Greenhouse** — newsletter signup ("Plant your seed").

## Run locally

It's a static site — open `index.html` directly, or serve it:

```bash
python3 -m http.server 8000
# then visit http://localhost:8000
```

Fonts (Fraunces, EB Garamond) load from Google Fonts with serif fallbacks;
all illustrations are inline SVG, so the site works without external images.
