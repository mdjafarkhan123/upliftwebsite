Topic of the [website redesign plan](plan.md).

# How the site looks

**What happens:** A contractor opening the site should see a premium, modern marketing agency, not a template or a
trade site. Design references come only from marketing-agency, done-for-you, SaaS and premium business-service sites:
never CRM software sites such as Jobber, nor home-service or trade sites. Stone Systems, which sells the same thing,
guides structure only. Every reference is beautiful, premium and modern; the board is `design reference/README.md`
(git-ignored). (Jafar, 2026-11-16)

Jafar chose Concept 1, **"Outcome system"** (Jafar, 2026-11-16): Overtake's layout and confident tone; AdScale's
phone notifications showing the system at work (missed call → automatic text → new lead → review request) over a stock
photo of a tradesperson; Herb's green-hub feel; light panels with a dark services band and one bright green accent.
It is in `design.pen` as "Concept 1 · Outcome system" (desktop 1440 px, mobile 390 px) and is the base for the design
system. Jafar rejected the serif "Calm premium" direction (Waymark-like) after seeing its hero. (Jafar, 2026-11-16)

Jafar approved the design system, the board "Uplift design system" in `design.pen`, on 2026-11-16. Every screen is
built from its variables and components. Its colours are two shades of one green: #037741 (`--color-primary`) for
the logo and for green text, links and checks on white, and the bright shade #1ED27E (`--color-brand-bright`) for the
highlight, green buttons and all green on the deep-green bands, always with near-black text on it. Dark bands and
dark cards use deep green #0B3D26 (`--color-dark`), not near-black; headings and body text stay near-black. The logo
shield is #037741 with a near-black name. (Jafar, 2026-11-16)

On phones, the page keeps the desktop's content and section order, but each section takes the layout that works
best on a phone, such as swipeable cards or an accordion instead of a wide grid or tabs. Where the desktop layout
already works, it simply stacks. Both widths come from one page, so no section shows different content on phones.
(Jafar, 2026-11-16)

**Motion.** The site moves like an Awwwards site, built with GSAP. (Jafar, 2026-11-17) It is polished, not a
showpiece: each animation ends within a second and never stops anyone reading. Headings reveal line by line, cards
rise in and buttons respond to the cursor. Three signature moments: the hero phone plays missed call → automatic text →
new lead → review request on a loop; a line draws through the three How it works steps as you scroll; the
green highlight sweeps in behind heading words. The services section has no scroll-linked or sticky effect: only
a chosen tab's content settles in. (Jafar, 2026-11-17) Smooth scrolling on desktop only; phones keep normal touch
scrolling. (Jafar, 2026-11-17) With reduced motion turned on, or with scripts off, everything shows still and in
full.

**Checks:** a contractor opens the homepage on a phone or a laptop → it reads as a premium agency → nothing looks
copied from a reference.

**Sources:** the reference board, `design reference/README.md` (git-ignored) — what to borrow from each site.
