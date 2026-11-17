# 9 — Astro build and checks

**Campaign:** website-redesign · **Reads:** the core in `docs/plans/website-redesign/plan.md`, then all topics
**Stage:** Build — started 2026-11-17 · **Claim:** none — released 2026-11-17 at a safe point
**Code:** branch `website-redesign`, main folder
**Done when:** the roadmap's done-check for part 9

## Steps

Design PNGs: Pencil `Export` of the sections of `t4ww9` / `LGKcx`, scale 1. Each step ends with a build and a commit.

- [x] 1 Foundations: tokens, fonts, Button and Badge; icons `lu-*` (Lucide) and `ph-*` (Phosphor fill)
- [x] 2 Header, phone menu, `.cta-bar` (`sticky-header.js`: needs `data-hero-book` and `data-final-cta`), Footer
- [x] 3 Hero and technology strip
- [x] 4 The problem and The system (tabs on desktop, accordion on phones, Sample phone)
- [x] 5 Projects: Jafar's `website1–5.webp` with the current titles, no "Sample" label; pop-up; "Show more"
- [x] 6 How it works and Pricing ($XXX)
- [x] 7 About, Why choose us, Trades, FAQ, final call to action; old homepage code removed
- [ ] 8 Motion (plan topic how-the-site-looks.md § Motion), in `src/code/modules`
- [ ] 9 Checks from the roadmap's done-check; /app, legal and 404 against the new tokens

**Next:** step 8 Motion, then step 9. Steps 4–7 built by four agents, reviewed at 1440/390, committed 2026-11-17.
`services-tabs.js` loads at once: lazy loading collapsed ~3300 px under menu jumps. Headless shots: wait ~1.5 s after
load (deferred `home.scss` transitions) before judging.

**Open for Jafar:** Project six repeats `website1.webp` (his "ok" was unclear: drop it or send a 6th image?); approve
or drop the five unapproved Sample phone screens in The system (`services[].sample`); Trades rows clip without motion
(add "See all trades"?); About icon labels. "show you live client accounts & results" waits for part 7 copy.
Settled: Projects intro "Websites we've designed and built."; category/live URL appear when he sends them.

Agents (Jafar, 2026-11-17): give each `CLAUDE.md`, the plan, this note and its section PNGs. `src/pages/indextwo.astro` (old draft) now shows
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
