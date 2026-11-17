# 10 — Speed optimization

**Campaign:** website-redesign · **Reads:** the core in `docs/plans/website-redesign/plan.md`, then
`how-the-site-looks.md` § Motion
**Stage:** Verifying — started 2026-11-17 · **Claim:** none — released 2026-11-17 at pause
**Code:** `main`, main folder
**Done when:** Jafar has seen before/after Lighthouse numbers at mobile and desktop and approved. Goal (Jafar,
2026-11-17): PageSpeed 100 on mobile and desktop.

## Steps

- [x] 1 Baseline, live site, Lighthouse 12 locally (PSI keyless quota was exhausted): mobile 94 (LCP 2.9 s,
  TBT 150 ms), desktop 100. Mobile LCP = `.hero__description`, held at opacity 0 until `motion.js` ran.
- [x] 2 Hero text shows at once, no entrance (Jafar, 2026-11-17); feed and status card keep theirs
- [x] 3 `motion.js` loads after `load` + idle (`interaction.js`); Lenis is a dynamic import, desktop only
- [x] 4 Fonts: `wght` 400–800, only the characters the site uses (48→19 KB, 45→17 KB). Kept `calt` (Inter centres
  the colon in "10:42"). `body-*.woff2` stay: `LawnDraftLayout.astro` uses them
- [x] 5 Hero photo: widths add 720, `quality={70}` (mobile 52→30 KB)
- [x] 5b Sprites: removed 34 symbols no page uses (`sprite.svg` 22→3.6 KB gz)
- [x] 5c One font (Jafar, 2026-11-17): Inter Tight removed; headings get `--tracking-heading` (-0.035em, 600–800)
  or `--tracking-heading-light` (-0.045em, 400–500), measured per weight; widths within ~1% (Playwright)
- [x] 5d Hero `sizes` now matches the real width (phones picked the 920 px file)
- [x] 6 `public/_headers`: `/_astro/*` a year immutable; fonts and sprites a week
- [ ] 7 Jafar: deploy, then run pagespeed.web.dev (mobile, desktop); show before/after; approval

## Next

All work committed on `main` (2026-11-17), not pushed. Waiting on Jafar: he minifies `critical.css` by hand, pushes,
runs pagespeed.web.dev (mobile, desktop) and shares the numbers. Then compare with the baseline (live mobile 94,
desktop 100). If mobile is 99, the next lever is the hero photo (30 KB before first paint); ask before more.

## Proof

- Local `astro preview`, Lighthouse 12, mobile ×3: before 95 (LCP 2.9 s) → after 99–100 (LCP 1.7–2.0 s, TBT 30 ms,
  CLS 0.001); desktop 100 → 100. Playwright 1440/390: no errors, hero text visible at load, Lenis on desktop only.
- What costs LCP now (experiments on `dist/index.html`): the two fonts ≈0.3 s (without them: 100, LCP 1.7 s);
  sprites ≈0.1 s; scripts, font preload and photo priority ≈0.

## Notes

- Keep `critical.css` imported `?raw` and inlined as now; Jafar minifies it by hand before release (2026-11-17).
- Cloudflare injects Web Analytics `beacon.min.js` and Email Obfuscation `email-decode.min.js`: dashboard toggles,
  Jafar's call (asked 2026-11-17, unanswered).
- `astro dev` on this external drive can keep a stale list of `public/` files: after a file there is replaced it
  answers 404 (Jafar saw Arial). Restarting the dev server fixes it; the build is fine.
- Don't clean up unused files unless they harm (Jafar, 2026-11-17); a full list was shown and declined.
- Measure: `CHROME_PATH=~/.cache/ms-playwright/chromium-1234/chrome-linux64/chrome npx -y lighthouse@12 <url>
  --only-categories=performance` (add `--preset=desktop`); local runs vary a few points.
