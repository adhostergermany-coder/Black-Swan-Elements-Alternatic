# AGENTS.md

Static-only repo: hand-written HTML sites, no build, no bundler, no package manager, no tests, no lint, no CI.

## Structure

- `index.html` — hub/landing page linking all 30 site slots (only 01–03 active).
- `"Website N/Website N/"` — double-nested dirs **with spaces**; inner dir holds the site. Quote paths in shell, e.g. `ls "Website 1/Website 1"`.
- Entrypoints:
  - `Website 1/Website 1/index.html` + `impressum.html`
  - `Website 2/Website 2/index.html` (no impressum page)
  - `Website 3/Website 3/index-1.html` (hub links here, **not** `index.html`), plus `index-2.html` variant and `impressum.html`
- Each site is self-contained: inline `<style>` in `<head>`, images in sibling `images/` via relative paths. Only inline `<script>` is small header/scroll logic in Website 1 & 2; Website 3 has no JS.

## Preview

No build step. Serve from repo root so relative links work:

```bash
python3 -m http.server 8000
# then open http://localhost:8000/ and http://localhost:8000/Website%203/Website%203/index-1.html
```

Spaces in paths must be URL-encoded (`%20`) when linking or opening directly.

## Conventions / gotchas

- No shared CSS/JS — edit each HTML file in place; do not extract or add external stylesheets unless asked.
- External deps are only Google Fonts (`fonts.googleapis.com`) and `https://ebay.de` buy links. Keep them as-is.
- Images must stay as relative `images/...` references with existing filenames (`.webp`/`.png`); don't rename or move.
- Content is German (`lang="de"`); keep new copy in German.
- Adding a new site (e.g. Website 4): create `"Website 4/Website 4/index.html"`, then update root `index.html` — flip card 04 from `disabled` div to `active` anchor, fix its `href`, and bump the Completed/Coming Soon stats.
- Verify by opening the touched page(s) plus the hub in a browser; check links, images, and layout at desktop + ~768px width.
