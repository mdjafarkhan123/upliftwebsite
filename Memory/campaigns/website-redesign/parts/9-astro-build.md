# 9 — Astro build and checks

**Campaign:** website-redesign · **Reads:** the core in `docs/plans/website-redesign/plan.md`, then all topics
**Stage:** Not started — waits for part 8, and for the real prices and app screenshots in `design.pen`
**Code:** branch `website-redesign`, main folder
**Done when:** the roadmap's done-check for part 9

## Notes

Carried from part 6 (design system, approved 2026-11-16), for turning `design.pen` into `src/styles/critical.css`:

- New design variables use the exact `critical.css` token names. The `device` theme (desktop/mobile) gives
  the two ends of each fluid token. Add the new tokens: `--font-heading`, `--fs-fluid-display`, `--round-full`,
  `--color-error-soft`, `--color-primary-soft-dark`. Changed values include radius 16/24/32 (was 20/30/40),
  `--space-fluid-2xl` 120/72, and every colour (read them from the board's 01 Colour section).
- Fonts: the design uses Inter (body) and Inter Tight (headings). The site today loads its own "Uplift"
  woff2 files from `public/fonts`; self-host the new fonts there.
- The 19 old variables in `design.pen` (`primary`, `page-bg`, …) belong to the /app frames and the old
  `Site header`/`Site footer` components; they are not the new system.
- The brand on the board is rebuilt from `public/brand-logo.svg` (viewBox −360, 235.97, 394.79, 469.17) plus
  text. Use the SVG; the old PNG logo has an off-white box.
