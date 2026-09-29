# Twilio Website Readiness Handoff

## Current status

The marketing website has local, uncommitted Twilio-readiness work. Do not deploy without Jafar Khan's explicit approval.

Completed:

- Public, indexable `/privacy` and `/terms` routes.
- Footer links to those routes, plus working `mailto:` and `tel:` contact links.
- Public SMS program rules in the Terms page, including optional consent, variable frequency, message/data rates, STOP, HELP, support contact, carrier-liability, and mobile-number non-sharing language.
- Privacy disclosures for Supabase, Cloudflare, Brevo, Stripe, and Mapbox; it correctly says that Brevo is the current email provider and does not say Amazon SES handles real data.
- Removal of the unsupported `foundingDate: "2020"` structured-data field.
- A central `publicSite` settings block in `src/data/data.js` for public name, owner, location, contact information, social links, and booking configuration.
- The fake booking URL is not rendered. Homepage call buttons use `publicSite.booking.url` if set; otherwise they use the verified email fallback.

## Important user decisions

- Do not change the homepage's authored copy or visual content without first asking Jafar. This includes its marketing claims, rating card, headings, service descriptions, and calls to action.
- `src/styles/critical.css` is reserved for critical styles. Do not edit it without Jafar's prior approval.
- The legal pages may be designed or edited. Their page-specific styles live at `src/styles/pages/legal/legal.scss`.
- The user prefers a clear heads-up before changing any content or design outside an explicitly requested scope.

## Public facts approved for legal pages

- Brand: Uplift Contractor
- Owner/proprietor: Jafar Khan
- Location: Savar, Dhaka, Bangladesh
- Email: info@upliftcontractor.com
- Phone: +8801834969563
- Business role for future Twilio onboarding: ISV, Reseller or Partner
- Text messaging is not active yet. The CRM already presents an initially unchecked, optional SMS-permission checkbox when it collects a phone number. CRM changes are out of scope for this website task.
- No Google Analytics, advertising pixels, PostHog, Hotjar, or comparable visitor-tracking tools are currently used.

## Current providers

- Supabase: accounts, forms, and customer information
- Cloudflare: website protection, spam checking, network delivery, and file storage
- Brevo: current email delivery for platform and CRM email
- Stripe: online payment processing; payment-card details are entered on Stripe's secure page
- Mapbox: maps and address features where needed
- Twilio: planned for SMS; live texting is not active
- Amazon SES: selected and tested for a future email change, but it must not be described as receiving real visitor or customer data until that becomes true

## Remaining work before deployment

1. Add the confirmed public booking URL to `publicSite.booking.url` in `src/data/data.js`. The previously referenced `https://app.upliftcontractor.com/book/jkltd/quickcall` URL is known to be fake and must remain absent unless Jafar explicitly confirms a real replacement.
2. Ask Jafar before changing any existing homepage claims. Some existing claims may need review for Twilio evidence requirements, but the user explicitly asked to preserve homepage content for now.
3. When the Bangladesh trade licence is issued, obtain and use the exact legal business name, full registered address, effective dates, and any other confirmed registration details. Do not publish placeholders or registration identifiers.
4. Get explicit approval before deploying.

## Verification run

`npm run build` passed after the current changes. Sass reports existing `map-has-key` and `map-get` deprecation warnings, but the build succeeds and generates `/privacy/`, `/terms/`, and sitemap entries.
