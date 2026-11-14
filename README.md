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

- `index.html` - semantic page structure and content
- `assets/css/portfolio.css` - shared tokens, reset, layout and section styling
- `assets/css/profile.css` - portrait hero and monochrome theme overrides
- `assets/css/chat.css` - portfolio assistant widget
- `assets/js/portfolio-chat.js` - guided portfolio assistant (no network calls)
- `assets/portrait-black-shirt.png` - hero portrait
- `assets/favicon.svg` - project favicon

## Suggested conventions

- Keep page structure and content in `index.html`.
- Keep shared styling in `portfolio.css`, and prefer editing it over adding overrides in `profile.css`.
- Keep chat widget styles in `chat.css` and behavior in `portfolio-chat.js`.
- Keep icons and static media in `assets/`.

## Notes

- No framework or build step required.
- No external fonts, trackers or third-party dependencies.
- Respects `prefers-reduced-motion`.
- Placeholder email addresses and customer names should be replaced before production use.
