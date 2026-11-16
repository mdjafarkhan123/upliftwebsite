# 8 — Full homepage design

**Campaign:** website-redesign · **Reads:** the core in `docs/plans/website-redesign/plan.md`, then all topics
**Stage:** Design
**Code:** branch `website-redesign`, main folder (no worktree) · **Claim:** none — the sixth session released it on 2026-11-16
**Done when:** Jafar has approved the page
**Read next:** `docs/redesign/copy-current.md`; in `design.pen` the board "Uplift design system" (`LF2UJ`) and the
frames "Concept 1 · Outcome system — Desktop/Mobile"; the reference board `design reference/README.md` and its
captures (Overtake, AdScale and Herb first)

## Restart (2026-11-16)

Jafar deleted the first half-built page and asked for a design based on every reference capture, "not from your
guess". All 20 captures were reviewed; the page was rebuilt in the design system, borrowing:

- **Overtake:** inset panels, pill eyebrows, numbered service tabs, large work cards, deep-green closing panel.
- **AdScale:** phone notifications; cards with a small product screen. **Herb:** green highlight on key words.

## Steps

- [x] Frame "Homepage — Desktop" (`t4ww9`, x 0, y 6000), all 13 sections from design-system instances; frame
  "Homepage — Hidden until real (desktop)" (`bbhSJ`, x 2030) holds client logos and testimonials. Checked by
  render and layout check (only intended bleeds clip)
- [x] Shown to Jafar on 2026-11-16. **Paused by him** ("pause here… I'll send you a list of changes")
- [x] Jafar's changes applied and the desktop page approved ("ok all approved", 2026-11-16; meeting notes).
  New tokens `color-green-950`, `color-on-dark-border`, `color-green-900` go into `critical.css` in part 9.
  Projects grid `ylEsP` with "Show more projects" loading in place; pop-up state frame `Ksg3E`
- [ ] Frame "Homepage — Mobile" ← **next** (390, theme device=mobile, at x 1540, y 6000), from the approved
  desktop page, then show Jafar. Still unanswered: service point text 15 px (off the type scale) or `fs-base`?

Photos: four Pencil stand-ins in `design/images/` plus two Unsplash fills. Problem section: about intro and the
four ⚠️ paragraphs; About: the ✅ paragraphs, byline and four "Why choose us" reasons.

## Notes

- The current copy is used word for word (Jafar, 2026-11-16). Two lines break approved rules; raise them at the
  review: "No bullsh*t" (no swearing) and "show you live client accounts & results" (no clients yet; in step 1).
- New small labels, not from the current copy, for Jafar to check at the review: hero assurances and status
  card; problem card titles; "Six systems, one team"; the sample-work heading, lead, names and "Built in" lists;
  the step pills (step 2's "(7 - 10 days)" moved into its pill) and the photo chip; the pricing text (from the
  approved concept). The hero's "No fluff. We just say what we exactly do" line is replaced by the assurances.
- About's "Read more" is left out: there is no about page to open (the current nav uses `/#about`).
- Pencil stores 0 for variables in `width`/`height`; its checker falsely flags Brand/Header as clipped. `TakeScreenshot`
  returns 400 px images; export a PNG at scale 1 to the scratchpad to inspect detail.
