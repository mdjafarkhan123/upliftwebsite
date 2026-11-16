# Website redesign

Written from the kickoff and meeting on 16 November 2026. Jafar approved the core word by word on 16 November
2026. "Proposed:" lines in the topics wait for his yes, usually at the design reviews; the rest is his (see
[meeting notes](meeting-notes.md), [part 2](meeting-notes-2.md)).

## Core

**What Jafar wants:** A completely new, modern design for the Uplift Contractor marketing site, based on research and
proven real-world marketing sites, not fancy branding. It must fit a marketing agency for contractors and look great
to the contractors who visit it. (Jafar, 2026-11-16)

**Who it is for:** Owners of contractor and home service businesses, such as roofers, plumbers and landscapers, deciding
whether to hire Uplift. They are busy, often read on a phone between jobs, and compare Uplift with similar
done-for-you offers.

**What success means:** A visitor understands in seconds what Uplift does, trusts it even before Uplift has
client reviews, and books a call.

**Rules for every part** (Jafar, 2026-11-16):

- Uplift has no testimonials, client logos or results yet. Design both sections, but show them only once real ones
  exist. Never show invented clients, reviews, numbers or results. The only exception is made-up demo data
  inside a product screen or sample site, such as a fictional roofing company's missed-call text, and it always
  carries a visible "Sample" label.
- No photos of Jafar anywhere, including the about content. Stock photos of tradespeople at work may be
  used, but never presented as clients.
- Jafar's current copy stays saved in `docs/redesign/copy-current.md`. New copy goes in
  `docs/redesign/copy-new-draft.md`, and Jafar chooses line by line. `src/data/data.js` changes only in the build.
- Copy is confident and plain-spoken, with light humour and no swearing, and names no country. Use US spelling,
  as in the current copy, and no reuse of Stone Systems' wording.
- Keep the logo and the green identity, tuned to one bright green accent on white with near-black or deep-green bands.
- Every screen is designed in Pencil (`design.pen`) before it is built, in the order kept in the roadmap.

**Edges:** The homepage with all its sections, including the about content, and the shared header and footer. /app,
the legal pages and 404 are only checked against the new design system. **Not doing:** any other page, and no
new wording on /app or the legal pages.

## Topics

Small enough to stay in this file. The research behind them is in
[research-2026-11-16.md](../../redesign/research-2026-11-16.md).

### How the site looks

In its own file: [how-the-site-looks.md](how-the-site-looks.md) — references, the chosen concept, colours, the
phone rule and motion.

### The homepage, top to bottom

**What happens:** Jafar asked for the sample work, pricing, testimonials and client logos (both hidden until real),
the about content, and "Book a call" opening a booking page. The order and the other sections are Proposed, from the
research and the current page:

1. Header: logo, the links Services · How it works · Pricing · FAQ, and "Book a call"; on phones, a menu and a
   sticky "Book a call" bar at the bottom of the screen. (Jafar, 2026-11-16) On phones, the header's "Book a call"
   hides when the hero's button scrolls away and the bar appears; the bar hides again when the closing call to
   action comes into view. (Jafar asked for the most user-friendly option, 2026-11-17) "Log in" by "Book a
   call", opening app.upliftcontractor.com; phones: in the menu. (Jafar, 2026-11-17)
2. Hero: the current H1 and its description, word for word (Jafar, 2026-11-16), "Book a call", and a short line
   such as "No contract · Live in 7–10 days".
3. Client logos, hidden until real. Proposed: until then, the current "Powered by trusted technology" strip, kept small.
4. The problem: where contractors lose jobs, drawn from the four problems in the current about content.
5. The system: the six current services, each with its current name, description and points, word for word
   (Jafar, 2026-11-16), and a screen from the Uplift app or a short demo.
6. Sample work, replacing "Project one…six": see the next topic.
7. How it works: three steps with timings (call, 7–10 day build, launch).
8. Pricing: see **Seeing the price and booking a call**.
9. Testimonials, hidden until real.
10. Why Uplift exists: the about content, with no photos. Proposed: it keeps the text byline "Jafar Khan, Founder",
    and the current "Why choose us" reasons join it.
11. Trades served, compact (the current list has 61 trades).
12. FAQ.
13. Final call to action, then the footer. The footer links to the homepage sections, including Sample work and
    About, the app and the legal pages. Its only contact detail is info@upliftcontractor.com, so it names no
    country. (Jafar, 2026-11-16) An app card
    links to /app. (Jafar, 2026-11-17)

**Checks:**

- A visitor on a phone opens the homepage → the first screen says what Uplift does and shows "Book a call".
- No real testimonials or logos exist → neither section shows, and no gap is left.
- The page is read with scripts off → all content is still there.

### Trusting Uplift before it has reviews

**What happens:** Every sample is clearly labelled as a sample, never as a client. (Jafar, 2026-11-16) Proposed: the
rest of the proof is honest facts: what is included, how long setup takes, no contract, and screens from the Uplift
app. The project cards use Jafar's real project images (`src/assets/images/website1–5.webp`), not
made-up sample sites. (Jafar, 2026-11-17) Lines that promise proof Uplift can't
show yet, such as "show you live client accounts & results" in the current process copy, are reworded in the new draft.

The current review wording ("5-Star Reviews Only… Five stars, every time") stays; Jafar chose this after the risk to
clients' Google profiles was explained. (Jafar, 2026-11-16)

**Checks:** any sample site or screen with made-up data → it carries a visible "Sample" label.

**Still open:** real screenshots of the Uplift app from Jafar. Until they arrive, the designs draw the app screens in
Pencil with demo data and a "Sample" label; the real screenshots replace them in `design.pen` before the build.
(Jafar, 2026-11-16)

### Seeing the price and booking a call

**What happens:** The pricing section shows one real monthly price and one setup fee. (Jafar, 2026-11-16) Until Jafar
sends the numbers, designs show "$XXX" where they go, so no one mistakes it for a real price, and the real numbers
replace it in `design.pen` before the build. (Jafar, 2026-11-16) Every "Book a call" button opens a
booking page; Jafar adds its link before launch. (Jafar, 2026-11-16)

**Checks:** a visitor clicks any "Book a call" → the booking page opens.

**Still open:** the price numbers and the booking link (below).

## Still open for the whole campaign

- Price numbers: Jafar sends the monthly price and setup fee. Needed before the build.
- Booking link: Jafar adds the booking page URL before launch.
- App screenshots: Jafar sends real screens from the Uplift app. Needed before the build.
