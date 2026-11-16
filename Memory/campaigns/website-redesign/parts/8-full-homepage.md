# 8 — Full homepage design

**Campaign:** website-redesign · **Reads:** the core in `docs/plans/website-redesign/plan.md`, then all topics
**Stage:** Design
**Code:** branch `website-redesign`, main folder (no worktree) · **Claim:** fourth session, 2026-11-16
**Done when:** Jafar has approved the page
**Read next:** `docs/redesign/copy-current.md`; in `design.pen` the board "Uplift design system" (`LF2UJ`) and the
frames "Concept 1 · Outcome system — Desktop/Mobile"

## Steps

- [x] Frame "Homepage — Desktop" (`w7z5oA`, x 0, y 6000, still marked placeholder), theme device=desktop, built from
  design-system instances and variables: header, hero, technology strip, the problem, the system, sample work
  (3 fictional sites, stock photos via Generate), how it works, pricing
- [ ] Desktop still to build: about + why choose us, trades, FAQ, final call to action, footer; a separate frame
  for client logos and testimonials, marked hidden until real
- [ ] Frame "Homepage — Mobile" (390, theme device=mobile)
- [ ] Check each section by render at both widths; then show Jafar and apply his changes

## Next

**Paused by Jafar on 2026-11-16** ("pause here designing..") right after he asked "yo know what type of design I
want?" and "do you have inspiration screenshot?". Don't build more until he says so. First ask what he wants changed;
he may want the page closer to the references in `design reference/` (Overtake, AdScale, Herb). Then continue the
desktop list above.

## Notes

- Your existing copy is used word for word (Jafar, 2026-11-16). Two lines break approved rules; raise them at the
  review: "No bullsh*t" (no swearing) and "show you live client accounts & results" (no clients yet; in step 1).
- New small labels, not from the current copy, for Jafar to check: hero chips "Live in 7–10 days", "No fluff";
  hero panel "Running while you work", status names, "days to build"; badge "The problem" and the four problem
  card titles; "Sites we designed for fictional businesses"; the sample business names; step pills; the pricing
  section text (from the approved concept).
- About's "Read more" has no page to open: there is no about page (the current nav uses `/#about`).
- Pencil ignores variables in `width`/`height` (stores 0); globals don't persist between `execute` calls; the
  layout checker flags false "clipped" nodes in the Brand/Header sections, so trust renders there.
