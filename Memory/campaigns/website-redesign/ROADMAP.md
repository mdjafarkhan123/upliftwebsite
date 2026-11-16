# Website redesign — roadmap

**Plan:** `docs/plans/website-redesign/plan.md` — core approved 2026-11-16; topic lines marked Proposed are confirmed at
the design reviews. Parts follow the order Jafar agreed on 2026-11-16 (meeting notes).

| Part | Reads | Delivers | Waits for | Done when | State |
| --- | --- | --- | --- | --- | --- |
| 1–4 Planning | — | research, reference board, meeting, plan, parts | — | — | Done 2026-11-16 — proof: [plan](../../../docs/plans/website-redesign/plan.md), [meeting notes](../../../docs/plans/website-redesign/meeting-notes.md), [research](../../../docs/redesign/research-2026-11-16.md); a fresh reviewer's 13 findings were fixed before approval |
| 5 Concepts | core; topics "How the site looks", "Trusting Uplift before it has reviews", "Seeing the price and booking a call"; `design reference/README.md` | two concepts in `design.pen`: hero, The system and Pricing, each at 1440 px and 390 px, with "$XXX" for the price and "Sample" on demo data | 1–4 | Jafar has named one concept, or what to change | Done 2026-11-16 — Jafar chose Concept 1 "Outcome system" (`design.pen`, frames "Concept 1 · Outcome system — Desktop/Mobile"); proof: [meeting notes](../../../docs/plans/website-redesign/meeting-notes.md) |
| 6 Design system | core; "How the site looks"; the chosen concept | a new design system in `design.pen`: variables named after the `src/styles/critical.css` tokens, type scale, and components for header, footer, buttons, cards, the Sample label, the price card and the FAQ | 5 | Jafar has approved it | In review — [note](parts/6-design-system.md) |
| 7 Copy draft | core; all topics; `docs/redesign/copy-current.md` | a new file, copy-new-draft.md, in `docs/redesign/`, section by section next to the current copy, with no Stone Systems wording | 1–4 (can run beside 5–6) | Jafar has chosen every line | Not started |
| 8 Full homepage design | core; all topics | the full homepage, header and footer in `design.pen` at both widths, from the design system and the chosen copy | 6, 7; Jafar's price numbers and app screenshots | Jafar has approved the page | Not started |
| 9 Astro build and checks | core; all topics; the approved design | the homepage, header and footer in Astro; `src/data/data.js` updated; the old project images removed | 8; booking link before launch | build passes; checked at mobile and desktop widths and by keyboard; content is there with scripts off; testimonials and logos are absent until real; every "Book a call" opens the booking page; /app, legal and 404 look right | Not started |

Already done outside the parts: Jafar's current homepage copy is preserved word for word in
[copy-current.md](../../../docs/redesign/copy-current.md) (2026-11-16).
