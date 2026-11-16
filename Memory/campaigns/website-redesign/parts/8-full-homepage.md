# 8 — Full homepage design

**Campaign:** website-redesign · **Reads:** the core in `docs/plans/website-redesign/plan.md`, then all topics
**Stage:** Design
**Code:** branch `website-redesign`, main folder (no worktree) · **Claim:** sixth session (2026-11-16), applying Jafar's changes
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
- [ ] Apply Jafar's list of changes to "Homepage — Desktop" ← **in progress**; he sends it in batches
  - [x] Batches 1–3 done (meeting notes): new tokens `color-green-950`, `color-on-dark-border` (add to
    `critical.css` in part 9); service points use variables; "View all projects" (`YJvSf`, destination
    asked); Button/Secondary has an arrow circle. Service text 15 px off-scale (asked). Problem cards: variant E (Phosphor filled icons, soft tile), also on Pricing rows
- [ ] Frame "Homepage — Mobile" (390, theme device=mobile, at x 1540, y 6000), then show Jafar again

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
