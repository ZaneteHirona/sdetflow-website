# SDETFlow landing page

A responsive, accessible, dependency-free concept website for an SDET / Quality Engineering platform.

## Run locally

Option 1: open `index.html` directly in a browser.

Option 2: serve the folder locally:

```bash
python -m http.server 8080
```

Then visit `http://localhost:8080`.

## Structure

- `index.html` - semantic page structure and original SDET-focused content
- `assets/css/styles.css` - stylesheet entry point that imports the CSS layers
- `assets/css/base.css` - tokens, reset, layout primitives and shared typography
- `assets/css/components.css` - reusable UI pieces such as buttons, cards and tabs
- `assets/css/sections.css` - page-section styling for hero, features, proof, security and footer
- `assets/css/responsive.css` - breakpoints and reduced-motion behavior
- `assets/js/app.js` - mobile menu, accessible tabs, reveal animations and counters
- `assets/favicon.svg` - project favicon

## Suggested conventions

- Keep page structure and content in `index.html`.
- Keep major HTML areas grouped with section markers so the one-page layout stays easy to scan.
- Prefer section-prefixed class aliases such as `platform-*`, `capabilities-*`, `integrations-*`, `proof-*`, `security-*` and `cta-*` when touching markup.
- Keep shared styling primitives in `assets/css/base.css`.
- Keep reusable UI styles in `assets/css/components.css`.
- Keep section-specific styling in `assets/css/sections.css`.
- Keep breakpoints and motion fallbacks in `assets/css/responsive.css`.
- Keep JavaScript behavior split into small init functions in `assets/js/app.js`.
- Keep interaction logic in `assets/js/`.
- Keep icons and static media in `assets/`.

## Notes

- No framework or build step required.
- No external fonts, trackers or third-party dependencies.
- Respects `prefers-reduced-motion`.
- Placeholder email addresses and customer names should be replaced before production use.
