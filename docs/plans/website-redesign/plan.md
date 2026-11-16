# Website redesign

Draft from the kickoff and meeting on 16 November 2026. Jafar has not approved the core yet. Lines marked with his name are things he
has already said; lines marked "Proposed:" wait for the meeting.

## Core

**What Jafar wants:** A completely new, modern design concept for the Uplift Contractor marketing site, based on research
and proven real-world marketing sites, not fancy branding. It must fit a marketing business for contractors and look
great to the contractors who visit it. (Jafar, 2026-11-16)

**Who it is for:** Owners of contractor and home service businesses, such as roofers, plumbers and landscapers, deciding
whether to hire Uplift. Proposed: they are busy, often read on a phone between jobs, and compare Uplift with similar
done-for-you offers such as Stone Systems.

**What success means:** Proposed: a visitor understands in seconds what Uplift does, trusts it even before Uplift has
client reviews, and books a call.

**Rules for every part** (Jafar, 2026-11-16, except lines marked Proposed):

- No testimonials or client logos exist yet: design both sections, show them only once real ones exist. Proposed:
  never show invented clients, reviews, numbers or results anywhere.
- No photos of Jafar anywhere, including the about content.
- Keep Jafar's copy, saved in `docs/redesign/copy-current.md`. New copy goes in a separate draft; Jafar chooses line by
  line. `src/data/data.js` changes only in the build.
- Copy is confident and plain-spoken, with light humour and no swearing, and names no country. Proposed: spelling as
  in the current copy (US style).
- Stone Systems (same business) guides structure only. Design references come only from marketing-agency,
  done-for-you, SaaS and premium business-service sites (Framer, Dribbble): never CRM software sites such as Jobber,
  nor home-service or trade sites. Every pick is beautiful, premium and modern; the board is in `design reference/`.
- Keep the logo and the green identity, tuned to one bright green accent on white with near-black or deep-green bands.
- Design in Pencil (`design.pen`) in this order: concepts, a new design system from the chosen concept, full pages,
  then the build.
- The homepage shows one real monthly price and setup fee; "Book a call" opens a booking page; sample work is shown,
  each item labelled as a sample, never as a client; the current review wording ("5-Star Reviews Only…") stays.

**Edges:** The homepage with all its sections, including the about content; the shared header and footer; a check that
/app, legal and 404 still look right with the new design system. **Not doing:** any other page; Proposed: no new legal or
/app wording. (Jafar, 2026-11-16)

## Topics

Written after the meeting. The research and its recommended page structure are in
[research-2026-11-16.md](../../redesign/research-2026-11-16.md).

**Concepts (Jafar, 2026-11-16):** two concepts, each a hero plus 2 key sections at desktop and mobile width.
1 "Outcome system": Overtake's layout and confident tone, AdScale's phone hero showing missed call → auto text →
review request → new lead, Herb's green-hub feel; light with dark statement bands. 2 "Calm premium": Waymark's serif
headlines, green buttons and white space. Number-heavy proof from the references becomes honest proof (what's
included, timelines, no contract, real app screens).

## Still open for the whole campaign

- Price numbers: Jafar sends the monthly price and setup fee. Needed before the full pages; concepts may show a
  clearly marked placeholder.
- Booking link: Jafar adds the booking page URL before launch.
