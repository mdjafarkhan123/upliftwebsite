# Uplift Contractor Website Launch-Readiness Audit

Audit date: 2026-09-20  
Scope: Local marketing-website project only. The live website was excluded from the assessment.  
Status: Audit only; this document does not authorize deployment or changes to homepage content.

## Executive verdict

The local website is a strong work in progress, but it is not yet ready to be treated as the finished public website.

Estimated launch readiness: **approximately 65%**.

- Technically buildable: Yes
- Basic SEO foundation: Mostly complete
- Privacy and Terms: Substantially complete
- Conversion journey: Incomplete
- Trust and evidence: Needs significant work
- Content polish: Needs work
- Full search-ranking strategy: Not complete
- Twilio application readiness: Not yet complete

## What is already in good shape

- The homepage clearly identifies the target audience and core services.
- Pages use a single H1 and generally sensible heading structure.
- The homepage, Privacy Policy, and Terms have page titles and descriptions.
- Canonical URLs are present.
- Pages are indexable.
- Organization structured data uses the currently verified public identity and contact details.
- `robots.txt` is present.
- The build generates an XML sitemap containing `/`, `/privacy/`, and `/terms/`.
- Public Privacy Policy and Terms & Conditions routes are present.
- Email and telephone details are actionable links.
- SMS disclosures address optional consent, STOP, HELP, variable frequency, message/data rates, mobile-number non-sharing, and carrier liability.
- Responsive and optimized image formats are generated.
- Keyboard focus styling and reduced-motion handling are present.
- No cookie banner is currently necessary because the project does not use visitor analytics, advertising pixels, or similar tracking tools.
- `npm run build` succeeds.

The production build generates all three routes and the sitemap. Sass reports existing deprecation warnings for global map functions, but those warnings do not currently block the build.

## Launch blockers

### 1. Complete the booking journey

The main booking destination is empty in `publicSite.booking.url`, so homepage “Book a call” buttons fall back to an email link. That fallback works, but it does not behave like a normal booking experience.

The header “Book now” button points to the application login rather than the configured booking destination. This is inconsistent and could confuse prospective customers.

Before launch:

- Confirm a real scheduling URL, or intentionally rename the calls to action to “Email us” or “Request a call.”
- Make all public booking calls to action use the same destination.
- Do not restore the known fake booking URL.

### 2. Fix or remove the six nonfunctional “Quick demo” links

Each service card renders a “Quick demo” button without a destination. The built homepage therefore contains six `href="#!"` demo links.

Connect these buttons to genuine videos or demonstrations, or remove them before launch.

### 3. Add the missing social-sharing image

All pages declare `/og-image.jpg` for Open Graph and Twitter/X previews, but that file does not exist in `public/` or the production build.

Add an approved branded social image, normally 1200×630 pixels, and use a correct absolute production URL in the metadata.

### 4. Verify, qualify, or remove unsupported claims

The following claims need evidence or safer wording:

- “5.0 User review,” without a source, count, attribution, or link
- “87% of people visit websites on their phones”
- “Always A+ fast”
- “Five stars, every time”
- “Show you live client accounts & results”
- Seven-to-ten-day delivery
- Statements implying customers will immediately book jobs or that leads will never be lost

Do not publish a claim merely because it is persuasive. Keep evidence for any statistic, rating, testimonial, performance result, delivery promise, or customer outcome displayed publicly.

### 5. Rewrite the review-funnel language

Phrases such as “5-Star Reviews Only” and language about guiding customers specifically toward five-star reviews can be interpreted as review gating.

The service should request honest feedback consistently and should not selectively direct only satisfied customers to public review platforms. Google advises businesses to value honest and balanced reviews and prohibits manipulation of genuine review content.

Official reference: [Google Business Profile review guidance](https://support.google.com/business/answer/3474122)

### 6. Replace placeholder-style portfolio content with credible proof

The “Our Works” section uses generic labels such as “Project one” and repeated images. It does not identify clients, link to completed work, explain the work performed, or show attributable outcomes.

Before presenting the section as real work, add only verified material such as:

- Client or business name, with permission
- Project description
- Link to the completed work, where appropriate
- Challenge, solution, and scope
- Measurable results supported by evidence
- Attributable testimonial, with permission

If the images are concept work, label them clearly as samples or demonstrations.

### 7. Professionally copyedit the homepage

The site has enough grammar, capitalization, and wording errors to reduce trust. Examples include:

- “What happen if…”
- “Got questions? We’ve the answers”
- “most easiest”
- “gently reminder”
- “succesful”
- Inconsistent capitalization of Google
- “Jafar khan” and “CEO of UpliftContractor”

The informal, contractor-focused voice can remain, but the final wording should be intentionally informal rather than accidentally incorrect.

Google recommends accurate, trustworthy, well-produced, people-first content rather than content built mainly around search terms.

Official reference: [Google people-first content guidance](https://developers.google.com/search/docs/fundamentals/creating-helpful-content)

### 8. Correct the hero image alternative text

Both hero images use `alt="Robert the lawyer"`, which appears to be leftover template text and does not describe Uplift Contractor.

- Use empty alt text for purely decorative images.
- Use concise, accurate alt text for meaningful images.

Official reference: [WCAG 2.2 Quick Reference](https://www.w3.org/WAI/WCAG22/quickref/)

### 9. Custom 404 page — completed

The project now includes a branded, responsive `404.html` page with recovery links and `noindex, follow` metadata. After deployment, confirm that the hosting platform serves this page with a genuine HTTP 404 status for unknown URLs.

## SEO assessment

### Technical and on-page SEO already present

- Crawlable static HTML
- Page titles and descriptions
- Canonical URLs
- Indexable robots directives
- Sitemap generation
- `robots.txt`
- One H1 per page
- Generally logical headings
- Organization structured data
- Image alt attributes, although the hero alternatives are currently incorrect

### SEO work still needed

- Add the missing social-sharing image.
- Verify the deployed property in Google Search Console and Bing Webmaster Tools.
- Submit and validate the sitemap after deployment.
- Inspect indexing and selected canonicals after deployment.
- Add a search-performance measurement process.
- Publish more helpful, evidence-backed content.
- Create service-specific pages when there is enough genuinely useful content to justify them.
- Create genuine project or case-study pages.
- Define a geographic strategy based only on markets the business actually serves.
- Earn legitimate external mentions, partnerships, directory listings, and backlinks.

Meta tags and a sitemap help search engines understand and discover pages, but they do not create rankings by themselves. Google prioritizes helpful and reliable content.

Official references:

- [Google SEO Starter Guide](https://developers.google.com/search/docs/fundamentals/seo-starter-guide)
- [Google sitemap guidance](https://developers.google.com/search/docs/crawling-indexing/sitemaps/overview)

Do not create large numbers of thin service or city pages merely to capture keyword variations. Add a service or location page only when it provides distinct, useful, truthful information.

## Pages assessment

### Present

- Homepage
- Custom 404 page
- Privacy Policy
- Terms & Conditions
- Services section on the homepage
- About section on the homepage
- FAQ section on the homepage
- Portfolio-style section on the homepage
- Email and telephone contact options

### Missing or incomplete

- Dedicated booking or contact experience
- Credible case studies or portfolio details
- Pricing or clear “starting from” guidance
- Dedicated service pages for organic-search targeting

Dedicated About, Services, Contact, and Pricing pages are not mandatory for an initial launch. Dedicated service and case-study pages would, however, materially improve trust, conversion, and search visibility.

## Privacy and Twilio assessment

The local Privacy Policy and Terms are strong operational drafts. The relevant SMS language is present and covers the major website-review disclosures.

Twilio readiness remains incomplete because:

- The exact registered business identity and full registered address remain pending.
- The policies do not yet show confirmed effective dates.
- The real opt-in experience must be publicly verifiable or supplied to the reviewer through another accepted evidence method.
- SMS permission must remain a separate, optional, initially unchecked choice.
- Privacy and Terms must be publicly accessible on the same business domain before submission.
- Business and campaign information must match the issued registration documents exactly.
- Marketing SMS requires the appropriate level of consent.

Official references:

- [Twilio A2P 10DLC business-information requirements](https://www.twilio.com/docs/messaging/compliance/a2p-10dlc/collect-business-info)
- [Twilio optional-consent requirement](https://www.twilio.com/docs/api/errors/30923)

Do not submit the Twilio registration until the real trade licence and corresponding identity details are available. The policies are operational compliance documents, not a guarantee of legal sufficiency; obtain qualified legal review when appropriate for the countries served.

## Accessibility assessment

### Good foundations

- Semantic headings
- Button controls for the FAQ accordion
- Visible focus styling
- Reduced-motion handling
- Alt attributes on images
- Mobile menu button exposes `aria-expanded`

### Remaining concerns

- Incorrect hero alt text
- No skip-to-content link
- Mobile navigation does not clearly contain focus or restore focus when closed
- FAQ panels could communicate their hidden/open state more completely
- No completed keyboard, screen-reader, zoom, or contrast audit

Do not claim WCAG conformance until the rendered site has been tested with keyboard navigation, screen readers, zoom, and contrast checks at representative desktop and mobile sizes.

## Analytics and cookies

The project currently states that it does not use Google Analytics, advertising pixels, PostHog, Hotjar, or comparable visitor-tracking tools. Therefore, the absence of a cookie banner is appropriate for the current implementation.

Analytics are not mandatory for publication, but launching without measurement makes it difficult to evaluate traffic, conversions, broken journeys, or SEO performance. If analytics are added later:

- Select the provider and configuration first.
- Update the Privacy Policy before or when real data collection begins.
- Determine whether consent controls are required in each target market.
- Add a cookie banner only when the real storage/tracking behavior requires one.

## Pre-launch sequence

1. Confirm the real booking or contact flow.
2. Fix or remove every nonfunctional call to action.
3. Add the missing social-sharing image.
4. Review or remove unsupported ratings, statistics, results, and guarantees.
5. Rewrite the review-funnel content to request honest feedback without review gating.
6. Professionally proofread the homepage.
7. Correct inaccurate alternative text.
8. Replace the placeholder-style portfolio with genuine, attributable proof or clearly labeled sample work.
9. Confirm that unknown production URLs serve the custom page with a genuine HTTP 404 status.
10. Add confirmed policy dates and registered identity details when available.
11. Perform mobile, desktop, keyboard, contrast, screen-reader, and performance testing.
12. Run `npm run build` and review every warning.
13. Obtain explicit approval before deploying.
14. After deployment, configure search-engine verification, submit the sitemap, and monitor indexing and errors.

After items 1 through 8 are addressed, the project should be suitable for a careful initial launch. Dedicated service pages, detailed case studies, analytics, and ongoing SEO content can continue after launch, but broken actions and trust issues should be resolved first.
