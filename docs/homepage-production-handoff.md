# Approved homepage conversion

Status: local implementation for review. Nothing has been deployed or published.

## Review

- `/`: the approved design, converted into the project's production structure.
- `/indextwo`: the original design reference, kept unchanged and marked noindex.
- The previous homepage is preserved as `src/pages/index.astro.bak`.
- The privacy, terms, and error pages retain their content and use the new shared header and footer.

## File organization

| Responsibility | File |
| --- | --- |
| Page sections and content composition | `src/pages/index.astro` |
| Document shell, metadata, font preloads, style loading | `src/layout/Layout.astro` |
| Header and mobile dialog markup | `src/components/Header.astro` |
| Shared brand lockup | `src/components/Brand.astro` |
| Shared footer | `src/components/Footer.astro` |
| CTA and section-label presentation | `src/components/Button.astro`, `src/components/Badge.astro` |
| Existing icons, unchanged | `src/components/Svg.astro` |
| Existing FAQ component, unchanged | `src/components/Accordion.astro` |
| Inline font, base, header, menu, and hero essentials | `src/styles/critical.css` |
| Shared disclosure styles | `src/styles/globals/base.scss` |
| Below-the-fold homepage BEM/SCSS | `src/styles/pages/home/home.scss` |
| Footer BEM/SCSS | `src/styles/pages/footer/footer.scss` |
| Legal-layout compatibility styles | `src/styles/pages/legal/legal.scss` |
| JavaScript entry point | `src/code/interaction.js` |
| Mobile navigation behavior | `src/code/modules/menu.js` |
| Existing FAQ behavior, unchanged | `src/code/modules/accordion.js` |
| Existing authored copy and public business settings | `src/data/data.js` |

The page's `bottom-style` fragment is now inside `Layout`, matching its named slot. Deferred styles retain the existing `media="print"`/`onload` pattern and no-JavaScript stylesheet fallbacks.

The content in `data.js` is preserved. Only shared menu control labels were appended. All ten sections remain in the original homepage order. The reference's native read-more disclosures are preserved; FAQs use the original Accordion component and behavior.

## Icons and JavaScript

No SVG file was created or changed. The SVG and Accordion component source files are byte-for-byte identical to their backups. All icon references point to existing symbols in the two existing sprites. The menu opener is a text control; its close control uses the existing plus icon.

The fixed SVG component creates immediate `<use>` references. Both sprite files remain separate, but this implementation does not claim to defer the second sprite's network request. Its legacy empty `data-sprite` attribute is left untouched.

Navigation initializes immediately. FAQ behavior is imported when its section comes within 200 pixels of the viewport. The approved design does not require the original GSAP pinning, Lenis scrolling, or carousel behavior, so those existing module files remain on disk but are not loaded by the new homepage.

The mobile menu uses a native modal dialog, large navigation targets, a call action, and verified contact links. It supports close-button, backdrop, and Escape dismissal, keyboard focus cycling, focus restoration, scroll locking, closing on section selection, and cleanup when switching to desktop width. Without JavaScript, the normal navigation links remain available.

## Backups and restoration

Eighteen files were preserved with `.bak` appended to their complete filename, in the same folders. Backups contain the working files as they existed immediately before this conversion, including previous uncommitted work. No original version was overwritten without a backup.

`docs/homepage-backups.json` lists the original paths, backup paths, and SHA-256 checksums. The SVG, Accordion, and lazy-loading files were included in the initial backup set but did not need modification. Backups are not emitted into the built website or turned into routes.

To restore the former implementation, first preserve any newer work, then copy the backup files over their corresponding original paths as a set. Restoring only the old homepage without its associated shared layout, component, style, and interaction files would mix the two implementations.

## Verification

- Production build passes.
- Desktop, tablet, and narrow mobile layouts inspected; mobile checks include 320px and 390px widths.
- Menu opening, focus cycling, Escape dismissal, focus restoration, and FAQ section navigation checked in the browser.
- Existing FAQ tested: opening another question closes the previous answer.
- All ten sections, six service cards, and six project entries verified.
- Privacy, Terms, and 404 compatibility checked.
- Built local assets, anchor targets, existing SVG symbol references, backup integrity, and unchanged fixed components verified.
- Responsive image variants generated for the homepage images.
- Production CSS links verified to switch to `media="all"`.
- Reference and 404 routes excluded from the sitemap; homepage canonical uses the configured public domain.
- Missing social-image metadata is omitted rather than pointing at a nonexistent file.

The build continues to report the existing Sass global `map-has-key` and `map-get` deprecation warnings from the shared breakpoint mixin. No accessibility-conformance certification is implied by these checks.

## Before publication

Jafar's review and explicit deployment approval are still required. The existing launch-readiness audit remains the baseline: booking still uses the verified email fallback, marketing claims and portfolio attribution need review, a real social-sharing image remains to be supplied, and the pending business/policy details still need confirmation. This conversion preserves the approved copy; it does not resolve those external/content approvals.
