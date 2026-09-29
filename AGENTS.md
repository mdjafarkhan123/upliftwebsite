# Agent instructions

These conventions apply throughout this Astro project. Preserve the existing structure when adding or changing features. Prefer explicit, maintainable code.

## Before editing

- Read the files you will change and their existing callers or imports.
- For page or layout work, read `src/layout/Layout.astro` and `src/pages/index.astro`. `src/pages/ref.astro.backup` as a structural reference only.
- For UI work, inspect `src/components` for reusable components before writing new markup.

## Components

- Reuse existing components. Modify their props or behavior when necessary, preserving existing usages.
- Create a component only when it will be used in at least two places. Keep one-off sections in their page.
- **Ask the user before creating any new component**, unless they have already explicitly approved that component. Explain its purpose, intended reuse, and why existing components cannot cover it.
- Store components in `src/components`, following the existing `ComponentName.astro` file convention.

## Content and assets

- Keep all editable site text in `src/data/data.js`, including headings, descriptions, button labels, accessible labels, image alt text, and page metadata. Follow its existing named exports and object/array structures; render content from those exports in templates.
- Store images, videos, and other media in `src/assets/<foldername>` and import them using the existing Astro asset patterns.
- Store fonts in `public/fonts`.
- SVG icons follow the sprite rules below. Preserve existing public files that require a direct URL, such as the favicon and `robots.txt`.

## Styling and responsiveness

- Use BEM naming: `block`, `block__element`, and `block--modifier`.
- Keep authored styles in `src/styles`. Use SCSS except for `src/styles/critical.css`; avoid adding component-local style blocks or new standalone CSS files.
- Use these locations:
    - `src/styles/globals`: shared base styles.
    - `src/styles/pages/<foldername>`: page, Header, and Footer styles.
    - `src/styles/utils`: shared SCSS utilities and responsive mixins.
    - `src/styles/critical.css`: design tokens and above-the-fold styles.
- Preserve existing token names and their organization in `critical.css`. Values may change; add missing tokens using the existing naming pattern. Do not delete existing tokens.
- Fill existing empty rules in `critical.css` where appropriate instead of duplicating selectors elsewhere.
- Design the desktop composition first, then implement mobile-first: base rules for small screens, with `min-width` queries for larger screens.
- In SCSS, use the `respond-to` mixin from `src/styles/utils/_mixins.scss`, following existing imports.
- In `critical.css`, write plain CSS media queries using the breakpoint values in `_mixins.scss`. This file is loaded as raw CSS and cannot import SCSS mixins.

## Layout and page structure

- Preserve the organization of `src/layout/Layout.astro`: frontmatter imports and data, head metadata, inline critical CSS, Header/main/Footer, deferred styles, fallbacks, and the script entry point.
- Pass page-specific SEO data through the existing Layout props.
- Keep each page's `<Fragment slot="bottom-style">` at the bottom inside `<Layout>`. Follow the existing stylesheet URL imports, deferred links, and matching `<noscript>` fallbacks.
- Use the existing `container` class and this section structure:

    ```astro
    <section id="services" class="services" aria-labelledby="services-heading">
        <div class="services__wrapper container">
            <!-- h2 heading can contain here or inside any div where appropriate based on design -->
            <h2 id="services-heading">{services.title}</h2>
            <!-- Section content -->
        </div>
    </section>
    ```

- Make section and heading IDs unique. Each `aria-labelledby` must reference the actual heading ID. Use an `h1` for the page's primary heading and appropriate heading levels thereafter.

## JavaScript and interactions

- Keep browser interaction logic, including GSAP code, in modules under `src/code/modules`, following the existing `<modulename>.js` convention.
- Import and initialize modules through `src/code/interaction.js`. Preserve its immediate, deferred, and section-based loading patterns; choose the appropriate path for each interaction.
- Keep page-specific modules safe to load when their target elements are absent.
- Use JavaScript, GSAP, Splide, or other tools when needed for the requested behavior. Prefer existing dependencies and patterns.

## SVG icons

- Store icon symbols in the two existing sprites:
    - `public/abovethefold.svg`: icons used above the fold.
    - `public/sprite.svg`: all remaining icons.
- Render icons through `src/components/Svg.astro`, conventionally imported as `Icon`. Match `name` to the symbol ID and select the sprite with `src="abovethefold"` or `src="sprite"`.
- Extend these sprites for new icons. Do not add third-party icon libraries or separate icon SVG files.
- Hide decorative icons from assistive technology; give icon-only controls an accessible label.

## SEO and completion checks

- For page changes, check semantic landmarks, one descriptive `h1`, logical heading order, meaningful link text, and appropriate image alt text.
- Supply a relevant page title and description, verify the canonical URL, and preserve the Layout's social metadata and structured-data integration. Use verified business facts in structured data.
- Keep essential content available without interaction scripts. Preserve image dimensions and appropriate loading behavior, particularly for above-the-fold images.
- For code changes, run the applicable checks from `package.json`, including the build. For visual or interaction changes, inspect affected pages at mobile and desktop widths and check keyboard operation.
- Report what changed, what was verified, and any checks blocked by existing project issues. For documentation-only edits, verify paths and instructions against the project; a build is unnecessary.
