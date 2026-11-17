# 11 — Hero blocks that mean something

**Campaign:** website-redesign · **Reads:** the core in `docs/plans/website-redesign/plan.md`, then `how-the-site-looks.md` § Motion
**Stage:** Verifying
**Code:** `main`, committed f24a02d 2026-11-17, unpushed
**Done when:** Jafar has picked a hero option, it is built into the live hero (data.js, critical.css, motion.js), and checked at mobile and desktop widths and by keyboard

## Steps

- [x] Review the hero's photo feed and status card for meaning (2026-11-17)
- [x] Three options as a dev-only draft with live motion; Jafar chose 3 "You vs. us" ([meeting notes, part 2](../../../../docs/plans/website-redesign/meeting-notes-2.md))
- [x] Built into the live hero: `hero.you` / `hero.us` in `data.js`, `.hero__you` / `.hero__us` in `critical.css`, entrance in `motion.js` `initHero`; draft files and draft-only icons removed
- [x] Committed (f24a02d), with Jafar's new description line "No need to rely on word of mouth…"
- [ ] Jafar reviews it on the dev site and pushes

## Next

Wait for Jafar's review and push. Open questions: show the ~$100/month price in the hero card? Add social
media and the past-customer review campaign (neither is on the site yet)? `design.pen` still shows the old hero.

## Proof

- Build passes; hero checked at 1440 px and 390 px with motion, and with scripts off (all content shows) — 2026-11-17
