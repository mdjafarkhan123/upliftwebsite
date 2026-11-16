# Website redesign

Written from the kickoff and meeting on 16 November 2026. Jafar approved the core word by word on 16 November
2026. "Proposed:" lines in the topics wait for his yes, usually at the design reviews; the rest is his (see
[meeting notes](meeting-notes.md)).

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

**What happens:** A contractor opening the site should see a premium, modern marketing agency, not a template or a
trade site. Design references come only from marketing-agency, done-for-you, SaaS and premium business-service sites:
never CRM software sites such as Jobber, nor home-service or trade sites. Stone Systems, which sells the same thing,
guides structure only. Every reference is beautiful, premium and modern; the board is `design reference/README.md`
(git-ignored). (Jafar, 2026-11-16)

Two concepts are designed, each a hero plus 2 key sections at desktop and mobile width, and Jafar picks one. (Jafar,
2026-11-16)

1. **"Outcome system":** Overtake's layout and confident tone; AdScale's phone hero showing the system at work
   (missed call → automatic text → review request → new lead); Herb's green-hub feel.
2. **"Calm premium":** Waymark's serif headlines, green buttons and lots of white space. Proposed: the hero visual is
   the Uplift app on a phone in a soft green panel, and contractors' problems appear as chat bubbles, as Waymark does.

The 2 key sections are "The system" and "Pricing". (Jafar, 2026-11-16) Proposed: widths are 1440 px and 390 px.
Concepts use the current copy, minus lines that break the core (such as "No bullsh\*t"), until the new copy draft
exists.

**Checks:** a contractor opens the homepage on a phone or a laptop → it reads as a premium agency → nothing looks
copied from a reference.

**Sources:** the reference board, `design reference/README.md` (git-ignored) — what to borrow from each site.

### The homepage, top to bottom

**What happens:** Jafar asked for the sample work, pricing, testimonials and client logos (both hidden until real),
the about content, and "Book a call" opening a booking page. The order and the other sections are Proposed, from the
research and the current page:

1. Header: logo, links, "Book a call". Proposed: a sticky "Book a call" button on mobile.
2. Hero: what Uplift does in one line, "Book a call", and a short line such as "No contract · Live in 7–10 days".
3. Client logos, hidden until real. Proposed: until then, the current "Powered by trusted technology" strip, kept small.
4. The problem: where contractors lose jobs, drawn from the four problems in the current about content.
5. The system: the six current services, each with a screen from the Uplift app or a short demo.
6. Sample work, replacing "Project one…six": see the next topic.
7. How it works: three steps with timings (call, 7–10 day build, launch).
8. Pricing: see **Seeing the price and booking a call**.
9. Testimonials, hidden until real.
10. Why Uplift exists: the about content, with no photos. Proposed: it keeps the text byline "Jafar Khan, Founder",
    and the current "Why choose us" reasons join it.
11. Trades served, compact (the current list has 61 trades).
12. FAQ.
13. Final call to action, then the footer.

**Checks:**

- A visitor on a phone opens the homepage → the first screen says what Uplift does and shows "Book a call".
- No real testimonials or logos exist → neither section shows, and no gap is left.
- The page is read with scripts off → all content is still there.

### Trusting Uplift before it has reviews

**What happens:** Every sample is clearly labelled as a sample, never as a client. (Jafar, 2026-11-16) Proposed: the
rest of the proof is honest facts: what is included, how long setup takes, no contract, and screens from the Uplift
app. Proposed: sample sites are designed by us for fictional businesses. The current project images
(`src/assets/images/website1–5.webp`) are other designers' work and are removed. Lines that promise proof Uplift can't
show yet, such as "show you live client accounts & results" in the current process copy, are reworded in the new draft.

The current review wording ("5-Star Reviews Only… Five stars, every time") stays; Jafar chose this after the risk to
clients' Google profiles was explained. (Jafar, 2026-11-16)

**Checks:** any sample site or screen with made-up data → it carries a visible "Sample" label.

**Still open:** real screenshots of the Uplift app from Jafar — needed before the full pages. Concepts may draw the app
screens in Pencil with demo data.

### Seeing the price and booking a call

**What happens:** The pricing section shows one real monthly price and one setup fee. (Jafar, 2026-11-16) Proposed:
concepts show "$XXX" where the numbers go, so no one mistakes it for a real price. Every "Book a call" button opens a
booking page; Jafar adds its link before launch. (Jafar, 2026-11-16)

**Checks:** a visitor clicks any "Book a call" → the booking page opens.

**Still open:** the price numbers and the booking link (below).

## Still open for the whole campaign

- Price numbers: Jafar sends the monthly price and setup fee. Needed before the full pages.
- Booking link: Jafar adds the booking page URL before launch.
- App screenshots: Jafar sends real screens from the Uplift app. Needed before the full pages.
