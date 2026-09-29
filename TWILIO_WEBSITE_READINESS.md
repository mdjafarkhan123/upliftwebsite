# Twilio Website Readiness

Read this file before changing the Uplift Contractor website for Twilio, SMS consent, privacy, or legal-page work.

## Outcome

Make `https://upliftcontractor.com` ready for Twilio Trust Hub and US A2P 10DLC website review without claiming that Twilio or the business registration has already been approved.

Uplift Contractor is a contractor CRM and marketing platform. Contractors use it to communicate with their own leads and customers, so the Twilio business identity is **ISV, Reseller or Partner**. Intended customer markets are the US, Canada, UK, Europe, and Australia; the owner operates from Bangladesh.

## Verified business facts

- Public brand: **Uplift Contractor**
- Owner/proprietor: **Jafar Khan**
- Current public location: **Savar, Dhaka, Bangladesh**
- Email: **info@upliftcontractor.com**
- Phone: **+8801834969563**
- Website: **https://upliftcontractor.com**
- A Bangladesh sole-proprietorship trade licence is pending.
- The exact registered business name, full registered address, trade-licence number, and e-TIN are pending.
- Jafar will apply to Twilio only after the real trade licence is issued.

## Evidence rule

Public production content must contain only verified facts. Keep pending registration fields in an internal checklist excluded from the built site. Local test fixtures may use unmistakable values such as `TEST-ONLY-NOT-A-REAL-ID`, but they must remain in test files and must never enter rendered HTML, metadata, screenshots used as evidence, deployment output, or a Twilio submission.

The public website does not need to display a trade-licence number, e-TIN, or BIN. When the licence arrives, make the public legal business name and address match the documents exactly. Never imply that Uplift Contractor is Twilio-approved.

## Required website work

1. Inspect the source, built site, and live site before editing. Preserve the established Astro design and performance.
2. Add polished, public, indexable routes for a Privacy Policy and Terms & Conditions. Replace the footer's current dead `#` links with those routes.
3. Make the displayed email and phone actionable with correct `mailto:` and `tel:` links. Keep business identity and contact details consistent across visible content, metadata, and structured data.
4. Add a public SMS disclosure/consent explanation suitable for a Twilio reviewer.
5. Wherever a public form collects a phone number for SMS, use a separate optional checkbox that starts unchecked. Submitting a form or buying service must not depend on SMS consent.
6. Place a clear disclosure beside the checkbox naming Uplift Contractor, describing the expected message types, saying frequency may vary, stating “Message and data rates may apply,” giving “Reply STOP to opt out and HELP for help,” and linking to the Privacy Policy and Terms.
7. The Privacy Policy must truthfully cover collected data, purposes, operational service providers, retention, security, user choices/rights, and contact details. It must clearly state that SMS consent and phone-number information are not sold or shared with third parties or affiliates for their marketing or promotional purposes, and that consent is not a condition of purchase.
8. The Terms must truthfully cover services, customer responsibilities, acceptable use, cancellation, and the SMS program. The SMS section must include program name, message types, variable frequency, message/data rates, STOP, HELP, support contact, and that carriers are not liable for delayed or undelivered messages.
9. Audit public claims and structured data. Correct or remove any claim that Jafar cannot prove, including the current `foundingDate: "2020"` and claims about live client accounts/results if they lack evidence.
10. Do not add a cookie banner unless the site's actual storage/tracking behavior requires one. Describe only data handling that the implementation really performs.

## Pending-document checklist

Do not publish these placeholders. Ask Jafar for the real values after the trade licence arrives:

- Exact registered business name
- Full registered business address
- Trade-licence number and issuing authority
- e-TIN
- Effective dates for the Privacy Policy and Terms
- Twilio's written answer on whether its Bangladesh registration field should use the trade-licence number or e-TIN

## Sources and review standard

Use current official Twilio documentation as the authority:

- Primary compliance profiles: `https://www.twilio.com/docs/trust-hub/profiles/primary-compliance-profiles`
- A2P required business information and website review: `https://www.twilio.com/docs/messaging/compliance/a2p-10dlc/collect-business-info`
- ISV onboarding: `https://www.twilio.com/docs/messaging/compliance/a2p-10dlc/onboarding-isv`

Use original wording that accurately describes this business. Legal pages are operational compliance documents, not guarantees of legal sufficiency. Flag any choice that requires Jafar or a qualified lawyer/accountant.

## Completion gate

Finish only when all new routes build successfully, footer/contact links work, consent is optional and unchecked, policy links are public without login, no test identity appears in the production build, modified files are formatted, and the production build passes. Inspect the rendered pages at mobile and desktop sizes. Report remaining pending-document replacements separately. Ask Jafar before deploying.
