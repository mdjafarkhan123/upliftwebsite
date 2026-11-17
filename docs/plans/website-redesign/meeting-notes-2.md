# Website redesign — meeting notes, part 2

Continues [meeting-notes.md](meeting-notes.md).

- 2026-11-17 · Log in URL, placement, mobile page · Jafar: "the login goes there. All ok. Approved." · Decided: Log in opens app.upliftcontractor.com; part 8 approved
- 2026-11-17 · Build before prices arrive? · Jafar: "start with dummy price but in the project section I have my real project photos" · Decided: build with $XXX; projects use website1–5.webp
- 2026-11-17 · (unprompted) · Jafar: "We need to have gsap amazing animaton like we see in Awwwards websites" · Decided: the build adds GSAP motion of Awwwards quality
- 2026-11-17 · Motion: how bold, which moments, smooth scrolling? · Jafar chose "Polished premium (Recommended)"; all four moments (hero system story, pinned services, How it works line, highlight sweep); smooth scroll "Desktop only (Recommended)" · Decided: as chosen
- 2026-11-17 · Motion review · Jafar: "the scrolling feels a bit buggy", "scroll speed is slow" · Decided: FAQ script loads at once (it shrank the page mid-scroll); Lenis lerp 0.14, wheel ×1.2
- 2026-11-17 · Motion review · Jafar: "for service section dont use any scrolling or sticky effect" · Decided: services pin removed; tabs work by click and keys only, the chosen service settles in
- 2026-11-17 · Header links: add About (Jafar asked) and Projects? · Jafar chose "Add Projects and About (Recommended)" · Decided: header links Services · Projects · How it works · Pricing · About · FAQ, as in the footer
- 2026-11-17 · (unprompted) · Jafar asked for the award-site effect where "big texts are showing up on a scroll… from the fading state", in the problem section · Decided: scroll-linked word fill on the problem heading (opacity 0.2 → 1, colour only)
- 2026-11-17 · Icon motion: which? · Jafar chose "Checks draw in", "Box icons pop", "Plus morphs to minus" (all Recommended); not the hero feed icons · Decided: as chosen; `Svg.astro` gains `inline` for animated icons only
