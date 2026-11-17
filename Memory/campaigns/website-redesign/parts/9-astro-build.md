# 9 — Astro build and checks

**Campaign:** website-redesign · **Reads:** the core in `docs/plans/website-redesign/plan.md`, then all topics
**Stage:** Build — started 2026-11-17 · **Claim:** none — released 2026-11-17 at a safe point
**Code:** branch `website-redesign`, main folder
**Done when:** the roadmap's done-check for part 9

## Steps

Design PNGs: Pencil `Export` of the sections of `t4ww9` / `LGKcx`, scale 1. Each step ends with a build and a commit.

- [x] 1 Foundations: tokens, `inter*.woff2`, Button (`type`, `block`, `class`, `data-*`) and Badge (`tone`, dot
  on by default); icons `lu-*` (Lucide) and `ph-*` (Phosphor fill) in both sprites; `utils/_index.scss` forwards mixins
- [x] 2 Header, phone menu, `.cta-bar` (`sticky-header.js`: needs `data-hero-book` and `data-final-cta`), Footer
- [x] 3 Hero and technology strip, built and screenshotted at 1440 and 390 px; look matched the design. Last fixes
  (pill spacing, phone photo crop, logo scroll) and the footer not yet seen
- [ ] 4 The problem and The system (tabs on desktop, accordion on phones, Sample phone)
- [ ] 5 Projects: Jafar's `website1–5.webp` with the current titles, no "Sample" label; pop-up; "Show more"
- [ ] 6 How it works and Pricing ($XXX)
- [ ] 7 About, Why choose us, Trades, FAQ, final call to action; old homepage code removed
- [ ] 8 Motion (plan topic how-the-site-looks.md § Motion), in `src/code/modules`
- [ ] 9 Checks from the roadmap's done-check; /app, legal and 404 against the new tokens

**Next:** screenshot `/` at both widths (Chrome extension, or the headless shell in `~/.cache/ms-playwright`) and check the hero fixes and the footer. Then steps 4–7 by agents
(Jafar, 2026-11-17: may use agents; give each `CLAUDE.md`, the plan, this note and its section PNGs). Each agent owns
one `_<section>.scss` partial (add `@use` to `home.scss`), its block at the `<!-- SECTIONS -->` marker in `index.astro`
and its export in `data.js`; on a failed Edit, re-read and retry. Old page: `git show b191c96:src/pages/index.astro`. `src/pages/indextwo.astro` (old draft) now shows
`[object Object]` for its heading: ask Jafar whether to delete it.

## Notes

- Inputs (Jafar, 2026-11-17): "$XXX" prices and Sample app screens until he sends real ones; project cards use
  `website1–5.webp`; header "Log in" opens `https://app.upliftcontractor.com`; footer app card opens `/app`.

Carried from part 6 (design system, approved 2026-11-16), for turning `design.pen` into `src/styles/critical.css`:

- New design variables use the exact `critical.css` token names. The `device` theme (desktop/mobile) gives
  the two ends of each fluid token. Add the new tokens: `--font-heading`, `--fs-fluid-display`, `--round-full`,
  `--color-error-soft`, `--color-primary-soft-dark`. Changed values include radius 16/24/32 (was 20/30/40),
  `--space-fluid-2xl` 120/72, and every colour (read them from the board's 01 Colour section).
- Fonts: the design uses Inter (body) and Inter Tight (headings). The site today loads its own "Uplift"
  woff2 files from `public/fonts`; self-host the new fonts there.
- The 19 old `design.pen` variables (`primary`, `page-bg`, …) are not the new system.
- The brand on the board is rebuilt from `public/brand-logo.svg` (viewBox −360, 235.97, 394.79, 469.17) plus
  text. Use the SVG; the old PNG logo has an off-white box.
