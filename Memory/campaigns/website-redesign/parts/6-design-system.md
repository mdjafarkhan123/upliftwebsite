# 6 — Design system

**Campaign:** website-redesign · **Reads:** the core in `docs/plans/website-redesign/plan.md`, then its topic "How the site looks"
**Stage:** Design — waiting for Jafar's review
**Code:** branch `website-redesign`, main folder (no worktree)
**Done when:** Jafar has approved the design system in `design.pen`
**Read next:** board "Uplift design system" (`LF2UJ`, x 3830, y −1000) in `design.pen`

## Steps

- [x] Variables named after `critical.css` tokens with a `device` theme (desktop/mobile)
- [x] Board: 01 Colour, 02 Type, 03 Space/radius/layout, 04 Components (39 masters)
- [x] Components: buttons, badges, Sample label, status pill, highlight, icon tiles, checks, notification card,
  info/step/sample-work cards, feature row, section headings, price card, FAQ item, brand, header set, footer
- [x] Whole board rendered and checked (exports in the session scratchpad only)
- [ ] Jafar reviews; apply his changes; record his answer in the meeting notes and plan topic

## Next

Waiting for Jafar. Questions asked (2026-11-16): approve the board or name changes; footer contact;
commit `design.pen`? On approval: record it, mark part 6 done in `ROADMAP.md`, delete this note, point `NOW.md` at part 7.

## Notes

- Jafar (2026-11-16, meeting notes): dark bands use a deep shade of the brand green: `--color-dark` #0B3D26
  (white 12.3:1, `--color-text-white` #A9C4B4 6.6:1); raised #114A2F; lines #1D5A3B. Ink stays #0C1A13.
- Jafar (2026-11-16): two shades of one green (hue 152). `--color-primary` #037741: logo on light, green text,
  links, checks on light (5.7:1 on white); hover #025F34; `--color-green-700` = primary; soft #E2F0E7.
  `--color-brand-bright` #1ED27E (hover #19B36B): highlight, Button/Accent, arrow circle, badge dots, and all green
  on deep green (6.2:1), always with ink text on it. Core unchanged. Both go into the topic "How the site looks"
  on approval.
- The 19 old variables (`primary`, `page-bg`, …) serve the /app frames and the old `Site header`/`Site footer`
  components; leave them. New variables use the exact CSS names. New tokens: `font-heading`, `fs-fluid-display`,
  `round-full`, `color-error-soft`, `color-primary-soft-dark`; `color-brand-bright(-hover)` reuse existing names. Changed values: radius 16/24/32 (was 20/30/40),
  `space-fluid-2xl` 120/72.
- Proposed, for Jafar to confirm: header links Services · How it works · Pricing · FAQ; footer links add Sample
  work and About; sticky mobile Book a call bar; brand shield in #037741 with an ink name.
- Pencil ignores variables in `width`/`height` (stores 0); globals don't persist between `execute` calls; the
  layout checker flags false "clipped" nodes in the Brand/Header sections, so trust renders there.
- Brand is rebuilt from `public/brand-logo.svg` (viewBox −360, 235.97, 394.79, 469.17) plus text; the old PNG has
  an off-white box.
- Footer question: the live footer shows "Savar, Dhaka, Bangladesh" and a +880 phone, but the core says the
  site names no country. The board shows them as today until Jafar answers.
- `design.pen` is not tracked by git (nor were the concepts). Asked Jafar whether to commit it.
