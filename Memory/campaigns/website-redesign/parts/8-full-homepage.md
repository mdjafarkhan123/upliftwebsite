# 8 — Full homepage design

**Campaign:** website-redesign · **Reads:** the core in `docs/plans/website-redesign/plan.md`, then all topics
**Stage:** Design
**Code:** branch `website-redesign`, main folder (no worktree) · **Claim:** fourth session, 2026-11-16
**Done when:** Jafar has approved the page
**Read next:** `docs/redesign/copy-current.md`; in `design.pen` the board "Uplift design system" (`LF2UJ`) and the
frames "Concept 1 · Outcome system — Desktop/Mobile"

## Steps

- [ ] Frames "Homepage — Desktop" (1440) and "Homepage — Mobile" (390), built from design-system instances
- [ ] Sections in the order of the plan topic "The homepage, top to bottom", with the current copy, "$XXX"
  prices and Sample app screens (Jafar, 2026-11-16); logos and testimonials designed but marked hidden
- [ ] Check each section by render at both widths; then show Jafar and apply his changes

## Next

Read the concept frames and copy, then build the desktop page section by section.

## Notes

- Pencil ignores variables in `width`/`height` (stores 0); globals don't persist between `execute` calls; the
  layout checker flags false "clipped" nodes in the Brand/Header sections, so trust renders there.
