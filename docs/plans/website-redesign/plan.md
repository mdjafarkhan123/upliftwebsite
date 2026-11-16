# Website redesign

Draft from the kickoff on 16 November 2026. Jafar has not approved the core yet. Lines marked with his name are things he
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

**Rules for every part:**

- Uplift has no testimonials or client logos yet. Design both sections now, but show them only once real ones exist.
  (Jafar, 2026-11-16) Proposed: never show invented clients, reviews, numbers or results anywhere.
- No photos of Jafar anywhere on the site, including the about content. (Jafar, 2026-11-16)
- Keep Jafar's current copy. It is saved in `docs/redesign/copy-current.md`. New copy goes in a separate draft, and Jafar
  chooses line by line what to keep. `src/data/data.js` changes only in the build. (Jafar, 2026-11-16)
- Stone Systems (same business) is a reference for structure only. Design inspiration comes from marketing agencies,
  done-for-you services, Framer and Dribbble, never from CRM software sites such as Jobber or Housecall Pro.
  (Jafar, 2026-11-16)
- Design happens in Pencil (`design.pen`) in this order: concepts, then a new design system from the chosen concept,
  then full pages, then the build. (Jafar, 2026-11-16)

**Edges:** Proposed: the homepage with all its sections, including the about content; the shared header and footer; and
a check that the /app, legal and 404 pages still look right with the new design system. **Not doing:** Proposed: new
legal or /app wording, and any page beyond the homepage unless Jafar adds it in the meeting.

## Topics

Written after the meeting. The research and its recommended page structure are in
[research-2026-11-16.md](../../redesign/research-2026-11-16.md).

## Still open for the whole campaign

- Price: show a real monthly price and setup fee on the site? If yes, what are they? — blocks the pricing section
- Brand: keep the current logo and green, or are new colours open? — blocks the concepts
- Market: US, Canada, or both? — affects wording, spelling and imagery
- Voice: keep the cheeky "no bullsh*t" tone, or more straightforward? — blocks the new copy
- Pages: homepage only, or also separate Services, Pricing or About pages? — sets the edges
- Sample work: may the site show example trade websites clearly labelled as samples, such as the lawn-care concept? —
  blocks the sample-work section
- Booking: "Book a call" opens an email because `publicSite.booking.url` is empty. Will Jafar set up a booking page? —
  shapes the main call to action
- Review wording: Google's review policy forbids asking only happy customers for reviews. Rewrite lines such as "5-Star
  Reviews Only… Five stars, every time"? — blocks the services copy
