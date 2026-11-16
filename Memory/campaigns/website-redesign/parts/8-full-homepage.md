# 8 — Full homepage design

**Campaign:** website-redesign · **Reads:** the core in `docs/plans/website-redesign/plan.md`, then all topics
**Stage:** Design
**Code:** branch `website-redesign`, main folder (no worktree) · **Claim:** none — the fifth session released it
when Jafar paused on 2026-11-16 to start a new session
**Done when:** Jafar has approved the page
**Read next:** `docs/redesign/copy-current.md`; in `design.pen` the board "Uplift design system" (`LF2UJ`) and the
frames "Concept 1 · Outcome system — Desktop/Mobile"; the reference board `design reference/README.md` and its
captures (Overtake, AdScale and Herb first)

## Restart (2026-11-16)

Jafar deleted the first half-built page and asked for a design based on every reference capture, "not from your
guess". All 20 captures were reviewed; the page was rebuilt in the design system, borrowing:

- **Overtake:** inset rounded panels, pill eyebrows, the hero's icon pill, photo plus dark status card, statement
  band, numbered service tabs, large work cards, the deep-green closing panel.
- **AdScale:** the system shown as phone notifications; cards carrying a small product screen.
- **Herb:** the green highlight on key words.

## Steps

- [x] Frame "Homepage — Desktop" (`t4ww9`, x 0, y 6000), all 13 sections from design-system instances; frame
  "Homepage — Hidden until real (desktop)" (`bbhSJ`, x 2030) holds client logos and testimonials. Checked by
  render and layout check (only intended bleeds clip)
- [x] Shown to Jafar on 2026-11-16. **Paused by him** ("pause here… I'll send you a list of changes")
- [ ] Apply Jafar's list of changes to "Homepage — Desktop" ← **next**, then re-check by render
- [ ] Frame "Homepage — Mobile" (390, theme device=mobile, at x 1540, y 6000), then show Jafar again

Photos: four Pencil-generated stand-ins in `design/images/` (committed with `design.pen`) plus two Unsplash fills. The copy split: the problem section uses the about intro
and the four ⚠️ paragraphs; About keeps the ✅ paragraphs, the byline and the four "Why choose us" reasons.

## Notes

- The current copy is used word for word (Jafar, 2026-11-16). Two lines break approved rules; raise them at the
  review: "No bullsh*t" (no swearing) and "show you live client accounts & results" (no clients yet; in step 1).
- New small labels, not from the current copy, for Jafar to check at the review: hero assurances and status
  card; problem card titles; "Six systems, one team"; the sample-work heading, lead, names and "Built in" lists;
  the step pills (step 2's "(7 - 10 days)" moved into its pill) and the photo chip; the pricing text (from the
  approved concept). The hero's "No fluff. We just say what we exactly do" line is replaced by the assurances.
- About's "Read more" is left out: there is no about page to open (the current nav uses `/#about`).
- Pencil ignores variables in `width`/`height` (stores 0); globals don't persist between `execute` calls; the
  layout checker flags false "clipped" nodes in the Brand/Header sections, so trust renders there. `TakeScreenshot`
  returns 400 px images; export a PNG at scale 1 to the scratchpad to inspect detail.
