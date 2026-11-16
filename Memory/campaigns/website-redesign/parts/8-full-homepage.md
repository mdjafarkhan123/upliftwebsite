# 8 — Full homepage design

**Campaign:** website-redesign · **Reads:** the core in `docs/plans/website-redesign/plan.md`, then all topics
**Stage:** Design
**Code:** branch `website-redesign`, main folder (no worktree) · **Claim:** eighth session, 2026-11-17 (header Log in, app download, mobile review)
**Done when:** Jafar has approved the page
**Read next:** `docs/redesign/copy-current.md`; in `design.pen` the board "Uplift design system" (`LF2UJ`); the
reference board `design reference/README.md` (Overtake, AdScale and Herb first)

## Steps

- [x] Desktop page `t4ww9` (x 0, y 6000) approved by Jafar on 2026-11-16. Logos and testimonials wait in `bbhSJ`;
  project pop-up in `Ksg3E`.
  New tokens `color-green-950`, `color-on-dark-border`, `color-green-900` go into `critical.css` in part 9
- [x] Frame "Homepage — Mobile" (`LGKcx`, x 1540, y 6000, theme mobile), copied from the desktop page and
  adapted section by section (plan § How the site looks, phone rule). Frame "Homepage — Mobile states" (`giW6j`,
  x 9923, y 7160): scrolled page with sticky bar, menu open, project pop-up at phone width. Checked by export
- [x] Summarised for Jafar in chat on 2026-11-16; he answered only the header question (plan § The homepage, item 1;
  state 1 in `giW6j` shows it), then paused
- [x] 2026-11-17: "Log in" in Header/Desktop and Mobile menu; "Uplift app" card in both footers (plan § The
  homepage, items 1, 13). Log in URL: ask before part 9
- [ ] **Next:** run `git diff --stat design.pen`. At the pause Pencil had not written the mobile work to disk (file
  last saved 2026-11-16 22:27). If `LGKcx` and `giW6j` are in Pencil, ask Jafar to save, then commit `design.pen`.
  Then show Jafar the mobile page with the list below and the Log in/app placement, and wait for his verdict

Phone layouts that differ from desktop, to point out at the review: services tabs become an accordion (detail and
phone inside the open item; its repeated title hidden); 3 projects, then "Show more projects"; previews scaled
like screenshots, no hover overlay; step pills above titles; price card between heading and facts; Why choose us as
four rows in one card; logo strip scrolls sideways; headings wrap onto extra lines. Still 15 px: trade chips, About
byline name (map to a token in part 9).

## Notes

- Current copy word for word (Jafar, 2026-11-16). Two lines break approved rules and were not raised yet:
  "No bullsh*t" (no swearing) and "show you live client accounts & results" (no clients yet).
- New small labels not from the current copy (hero assurances and status card, problem card titles, sample-work
  texts, step pills, photo chip, pricing text) were on the approved desktop page; the mobile page reuses them.
- About has no "Read more" (no about page).
- Photos: four Pencil stand-ins in `design/images/` plus two Unsplash fills.
- Pencil: `execute` globals do not persist between calls; copied frames get new ids, so find nodes by name. The
  checker falsely flags Brand/Header and intended bleeds as clipped. `TakeScreenshot` is 400 px; export a PNG at
  scale 1 to the scratchpad to inspect detail.
