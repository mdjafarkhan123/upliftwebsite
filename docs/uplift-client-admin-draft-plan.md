# Uplift Website Admin — Conversation Context and Product Draft

Status: This is an early product idea. Nothing has been built or finally decided yet.

Last updated: 2026-09-30

## Our business model

Uplift Contractor builds websites for contractors and other home-service businesses.

Our normal arrangement is:

- We build the client's website.
- We keep and manage the website code in our GitHub account.
- We host the website through our Cloudflare account, normally using free hosting.
- The client provides their domain.
- We connect and manage the domain through Cloudflare.
- The client pays us monthly for hosting, management, maintenance, and support.
- We remain responsible for the technical side of the website.

Clients do not need access to GitHub, Cloudflare, Astro, website code, or other technical tools.

## The current problem

Our websites do not currently have an admin area for clients.

If a client wants to change text, services, images, contact details, FAQs, or other website content, they have to ask us to make the change.

We want clients to feel that they have proper access to their website. They should be able to make normal content changes themselves without being able to damage the website design or code.

We do not want to pay a monthly fee to a service such as CloudCannon for every website or client.

## The product idea

We want to create our own branded website-management portal.

A possible address is:

`websiteadmin.upliftcontractor.com`

It would feel similar to the customer area provided by Hostinger or GoDaddy, but it would be simpler and focused on the websites managed by Uplift Contractor.

## How the client experience should work

1. The client visits `websiteadmin.upliftcontractor.com`.
2. The client signs in with their own account.
3. They see only the website or websites that belong to them.
4. They click the website they want to manage.
5. They enter that website's admin area.
6. They change content, upload images, preview the changes, and publish them.

The client should never see another client's website or information.

## What a client may be able to manage

- Business name
- Phone number and email address
- Address or service area
- Opening hours
- Homepage text
- Services and service descriptions
- Projects and gallery images
- Reviews and testimonials
- Frequently asked questions
- Buttons and links
- Social-media links
- Website images
- Basic page titles and descriptions for Google

The exact options can depend on the website design and the client's package.

## What clients should not control

Clients should not receive access to:

- GitHub repositories
- Cloudflare settings
- Website source code
- Hosting secrets
- Other clients' information
- Important design and layout code
- Anything that could easily break the website

The portal should allow content editing, not unrestricted website rebuilding.

## Our administrator access

Uplift should have a master administrator account.

From our account, we should eventually be able to:

- See every client
- See every website
- Create a client account
- Assign one or more websites to a client
- Open and manage any client website
- Control what each client is allowed to edit
- Help a client when they have a problem
- See when changes were made and published

## Possible portal areas

The first version could include:

- Sign in
- My Websites
- Website overview
- Pages and content
- Services
- Projects or gallery
- Reviews
- FAQs
- Business details
- Images and files
- Google/SEO information
- Preview
- Publish
- Account settings

In the future, the portal might also include website analytics, leads, support requests, domain status, hosting status, maintenance reports, and payment information. Those are future ideas, not part of the current decision.

## Current preferred direction

We currently prefer SvelteKit for building the admin portal.

The public client websites can continue to use Astro. The admin portal and the public websites would be separate products that connect to each other.

The current preferred services are:

- SvelteKit for the admin portal
- Cloudflare for running and hosting it
- A Cloudflare database for accounts, websites, and content
- Cloudflare storage for uploaded images
- A secure login system for client usernames or email addresses and passwords

These are draft preferences, not final technical decisions.

## Project organization

The admin portal should be a brand-new project and repository. It should not be built inside the existing Uplift Contractor Astro website project.

The two projects would be separate:

```text
UpliftContractor     The existing public Astro website
UpliftWebsiteAdmin  The new client admin portal
```

Keeping them separate will make the work easier to understand and manage. It will also prevent changes to the admin portal from accidentally affecting the public Uplift Contractor website.

When we are ready, we can create the new project folder, copy this document into it, and begin a new session from that folder. This document should provide the next session with the conversation context.

## Decisions we have not made yet

- The final name of the admin portal
- The final web address
- Whether clients sign in with a username, email address, or both
- Whether clients can publish immediately or Uplift must approve changes
- Exactly which content each website design will allow clients to edit
- Whether every client receives the same features or features depend on their package
- Which website will be used as the first test
- Which additional features should be added after basic content editing works

## Current conclusion

The idea is to build one Uplift-branded admin portal that can serve all present and future website clients.

Each client signs in, sees only their own website, opens its admin area, and changes approved content. Uplift continues to own and manage the technical system, hosting, code, and Cloudflare setup.

The portal should make the service feel professional and give clients useful control without exposing the technical parts of their website.
