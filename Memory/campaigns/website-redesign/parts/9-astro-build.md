# 9 — Astro build and checks

**Campaign:** website-redesign · **Reads:** the core in `docs/plans/website-redesign/plan.md`, then all topics
**Stage:** Build — started 2026-11-17 · **Claim:** none — released 2026-11-17 after step 8
**Code:** branch `main`, main folder (live since 2026-11-17)
**Done when:** the roadmap's done-check for part 9

## Steps

Design PNGs: Pencil `Export` of the sections of `t4ww9` / `LGKcx`, scale 1. Each step ends with a build and a commit.

- [x] 1–7 Foundations, Header/Footer, every homepage section (`.cta-bar` needs `data-hero-book` and `data-final-cta`)
- [x] 8 Motion: `motion.js` (GSAP, ScrollTrigger, SplitText, Lenis on desktop with a fine pointer), loaded by
  `interaction.js` after `services-tabs.js` unless reduced motion; `<html class="motion">` from Layout holds the hero text
- [ ] 9 Checks from the roadmap's done-check; /app, legal and 404 against the new tokens
  - [x] 2026-11-17: all 6 pages at 1440/390: one h1, heading order, alt text and image sizes, `aria-labelledby`,
    no sideways scroll, no console errors; homepage complete with scripts off; every reveal shows when reached;
    keyboard: visible focus everywhere, phone menu opens with Enter, closes with Esc and returns focus;
    404 is `noindex` and out of the sitemap. Fixed: duplicate logo `id`, unnamed phone logo strip (focusable scroller)
  - [x] "Book a call": Jafar set `publicSite.booking.url` (2026-11-17); every button on all pages opens it (200)
  - [ ] Legal pages and 404 still use the old look (bright gradients, grid, square buttons); /app is close.
    Restyle to the homepage panels and Button waits for Jafar's yes

**Next:** step 9 — Jafar's yes on restyling legal/404. Motion checked headless at 1440/390, reduced motion and scripts off (trades wrap, all visible).
`services-tabs.js` loads at once: lazy loading collapsed ~3300 px under menu jumps. Headless shots: wait ~1.5 s after
load (deferred `home.scss` transitions) before judging.

**Decided (Jafar, 2026-11-17):** Project six dropped; The system's Sample phone shows on desktop only (he will
replace the screens later); `indextwo.astro` deleted. Trades keep the design's multi-row infinite scroll in step 8;
mobile the same; no "load more"; with reduced motion, wrap the rows so every trade shows. About icon labels kept.
"show you live client accounts & results" waits for part 7 copy.

Agents (Jafar, 2026-11-17): give each `CLAUDE.md`, the plan, this note and its section PNGs.

## Notes

- Inputs (Jafar, 2026-11-17): "$XXX" prices and Sample app screens until he sends real ones; project cards use
  `website1–5.webp`; header "Log in" opens `https://app.upliftcontractor.com`; footer app card opens `/app`.

Tokens from the design system went into `critical.css` in step 1 (2026-11-17); `design.pen` still shows Inter
Tight for headings, the site uses Inter only (part 10). Use `public/brand-logo.svg`, not the old PNG logo.
