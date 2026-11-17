# 11 — Hero blocks that mean something

**Campaign:** website-redesign · **Reads:** the core in `docs/plans/website-redesign/plan.md`, then `how-the-site-looks.md` § Motion
**Stage:** Verifying
**Code:** `main`: f24a02d, then the new copy and worries loop (2026-11-17), all committed, unpushed
**Done when:** Jafar has picked a hero option, it is built into the live hero (data.js, critical.css, motion.js), and checked at mobile and desktop widths and by keyboard

## Steps

- [x] Review the hero's photo feed and status card for meaning (2026-11-17)
- [x] Three options as a dev-only draft with live motion; Jafar chose 3 "You vs. us" ([meeting notes, part 2](../../../../docs/plans/website-redesign/meeting-notes-2.md))
- [x] Built into the live hero: `hero.you` / `hero.us` in `data.js`, `.hero__you` / `.hero__us` in `critical.css`, entrance in `motion.js` `initHero`; draft files and draft-only icons removed
- [x] Committed (f24a02d), with Jafar's new description line "No need to rely on word of mouth…"
- [x] Jafar's ad idea (2026-11-17): the "You" worries take turns and light their answers in the card —
  `initWorries` in `motion.js`; `.hero__story`, `.hero__worry`, `.hero__answer` in `critical.css`;
  `lu-pause` / `lu-play` in `abovethefold.svg`; worries and labels in `data.js`
- [x] Jafar: the worries felt "disconnected" from the lead; they now take the sentence's own type (2026-11-17)
- [x] Jafar (2026-11-17): the ending still looked like a separate block. Seven drafted options; he chose 6, the
  highlight stroke: inline sentence, words painted in by the flat green highlight (`initWorries`, `.hero__paint`
  / `.hero__ink` in deferred `pages/home/_hero.scss`, only `.hero__rotator` hidden in `critical.css`); draft
  page deleted. Quicker pace on Jafar's ask: hold 2.4 s + 0.035 s/char, stroke 0.6 s, wipe 0.35 s
- [ ] Jafar reviews the stroke on the dev site, then commit and push

## Next

Ask Jafar how the highlight stroke looks on the dev site; commit when he is happy. Open: social media and the past-customer review campaign (neither is
on the site)? `design.pen` still shows the old hero. Settled: "$100 a month" shows in the hero (Jafar, 2026-11-17).

## Proof

- Highlight stroke, 2026-11-17, headless Chrome (scratchpad, not kept): 1440 and 390 px, each worry painted then its
  answer lit, text height steady, no console errors; Tab + Enter pauses; reduced motion and scripts off show the
  full sentence; build passes. On phones the long worry's stroke breaks at the line end (square edge).

- Build passes; hero checked at 1440 px and 390 px with motion, and with scripts off (all content shows) — 2026-11-17
- Worries loop, 2026-11-17, by a headless-Chrome script (scratchpad, not kept): one worry at a time with its
  answer lit at 1440 and 390 px; Tab reaches the pause button and scrolls to it; pause holds; reduced motion and
  scripts off show the full sentence still; build passes. Not checked: real touch devices, Safari.
