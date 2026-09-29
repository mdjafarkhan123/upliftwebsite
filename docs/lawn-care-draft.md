# Greenland lawn-care design draft

Local preview: <http://127.0.0.1:4321/drafts/lawn-care/>

Start the preview with `npm run dev`. Nothing has been deployed. The dynamic route returns a path only in development; a production build generates neither draft HTML nor a draft sitemap entry. Astro may still emit imported image and script assets as unused build assets.

## Structure

- `src/pages/drafts/[design].astro`: complete independent concept homepage.
- `src/layout/LawnDraftLayout.astro`: separate layout, inline critical CSS, deferred page styling, and its own script entry.
- `src/components/lawn-draft/`: brand, header, and footer.
- `src/styles/pages/lawn-draft/critical.css`: draft tokens, foundation, header, mobile menu, and hero.
- `src/styles/pages/lawn-draft/lawn.scss`: below-the-fold styling.
- `src/code/lawn-draft.js`: small entry point following the existing `interaction.js` loader pattern.
- `src/code/modules/lawn-draft/`: separate comparison, Splide gallery, and local quote-preview modules.

The existing `Accordion.astro`, `Svg.astro`, `SliderController.astro`, accordion behavior, and mobile-menu behavior are reused without changes. Existing homepage, shared layout, critical styles, public identity data, and dependencies are untouched.

## Content and behavior

An independent design informed by the Figma reference, rather than a reproduction. Warm ivory, forest green, lime, large editorial typography, original garden imagery, and a focused enquiry flow.

Includes hero, services, approach/about, reasons to choose, interactive before/after, touch-enabled inspiration gallery, process, review area, team area, FAQ, expandable field notes, service-area area, quote form, and footer.

The form is a local interaction demo. It validates required fields and displays a confirmation without sending, storing, or booking anything. Its submission stays disabled until the preview handler is installed. There is no SMS or CRM integration.

Greenland is a concept identity drawn from the design reference. Imagery and project examples are explicitly illustrative. Customer reviews, actual team profiles, business details, locations, and operating policies need confirmed business content before any launch. No fabricated customer reviews, ratings, credentials, contact details, or service-coverage claims have been added.

## Image generation

Created with the built-in image-generation tool. Original outputs were copied into `src/assets/images/lawn-draft/`; Astro's Image component delivers responsive WebP versions in the preview. Originals remain in the Codex generated-images directory.

### garden.png

Use case: photorealistic-natural. Asset type: wide website hero photograph for a premium lawn care and landscaping concept. Create one exceptionally beautiful photoreal editorial landscape photograph, wide 3:2 composition: a gracious modern warm white home with cedar details at the far right background, lush neatly mown green lawn sweeping across foreground, organically curved planting beds with soft ornamental grasses, white hydrangeas, established olive and shade trees, simple pale stone path. Eye-level camera, authentic elegant suburban garden, late afternoon sunlight, cinematic warm natural shadows, rich forest greens and soft straw colors, restrained architectural magazine photography, detailed natural grass textures, believable landscape. The left half is mostly open lawn and mature foliage; home and garden focal point center-right. No text, no watermarks, no logos, no people. This is inspiration imagery, not a real client project. Return a landscape image.

### gardener.png

Use case: photorealistic-natural. Asset type: editorial lawn care website services photograph. One landscape 3:2 photo of a professional gardener in muted olive work clothing and work gloves, face turned away, kneeling at a beautiful curved flower border and carefully planting ornamental grasses next to an immaculate green lawn. Only one person, believable hands and tools, natural candid human warmth, garden in soft late-afternoon light, high-end Kinfolk garden magazine photography, white hydrangeas and mature green trees in background, authentic textures, restrained greens and warm cream. No logos, no text, no watermark. Concept illustration, not a real employee portrait.

### before.png

Edit of garden.png. Use case: precise-object-edit. This is the BEFORE image of a conceptual garden renovation slider. Keep the exact same camera framing, perspective, house, trees, path, sunlight, dimensions and composition of this photograph. Change ONLY the garden maintenance: lawn should be patchy dry and overgrown in areas with scattered weeds; flower beds unmaintained, lacking hydrangea flowers, with scruffy weeds and tired sparse shrubs. Remove the beautiful ornamental grass planting and flower arrangements, replace with sparse neglected beds. Make it believable, mildly neglected not apocalyptic. Photoreal. No text, no labels, no logo.

### patio.png

Use case: photorealistic-natural. Asset type: premium landscaping website project photograph, landscape 3:2. Beautiful quiet backyard with a small pale limestone patio, two understated teak lounge chairs, lush richly green lawn with curved edges in foreground, gravel path curving through ornamental grasses and soft purple salvias, mature shade tree, timber fence with climbing jasmine. Warm afternoon daylight with dappled leaf shadows. Art-directed but believable contemporary garden editorial photography, subtle film color, exceptionally beautiful composition, no humans, no text, no watermarks, not oversaturated. Distinct garden setting with no house dominating. Concept inspiration image.

## Verification

- Production build passes; existing Sass global map-function deprecation warnings remain in shared mixins used by legal/error pages.
- Draft HTML and sitemap entry absent from production output.
- Desktop and mobile visual inspection; narrow-screen overflow checks at 390px and 320px.
- Existing slider controls advance the Splide gallery and disable at its ends.
- Before/after supports keyboard changes and updates its accessible value.
- Existing accordion opens/closes its panels.
- Existing mobile menu opens, dismisses with Escape, and restores its expanded state.
- Local quote form validates and displays its confirmation without leaving the page.
- Page has one H1, valid section-link targets, and no observed broken images or console errors.
