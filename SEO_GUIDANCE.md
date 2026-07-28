# Uplift Contractor - SEO Implementation & Best Practices Guide

This guide outlines the SEO structure currently implemented in your Astro project and provides guidelines for keeping the website 100% search-engine friendly as you build out your page content.

---

## 📁 Table of Contents

1. [💻 Framework SEO Configuration (Completed)](#1-framework-seo-configuration-completed)
2. [✍️ On-Page Content Guidelines (Action Required)](#2-on-page-content-guidelines-action-required)
3. [⚡ Core Web Vitals & Image Optimization](#3-core-web-vitals--image-optimization)
4. [🗺️ Sitemap & robots.txt Management](#4-sitemap--robotstxt-management)
5. [🚀 Launch & Ranking Checklist](#5-launch--ranking-checklist)

---

## 1. Framework SEO Configuration (Completed)

We updated [src/layout/Layout.astro](file:///D:/Projects/UpliftContractor/src/layout/Layout.astro) with a production-ready, search-optimized `<head>` shell.

### 🔹 Page Props Customization

The layout accepts dynamic props so you can customize SEO metadata on a page-by-page basis (e.g., your Home page vs. an About page or Service page):

```astro
---
// In any page (like src/pages/index.astro):
import Layout from "../layout/Layout.astro";
---
<Layout
  title="My Custom Title"
  description="My custom page description"
  keywords="roofing, contracting"
>
  <!-- Page Content -->
</Layout>
```

If no props are passed, the layout automatically defaults to the highly optimized values built for **Uplift Contractor** and the **Contractor Turbo** service catalog.

### 🔹 Open Graph & Twitter Cards

Standardized meta tags are implemented so your pages display rich previews when shared on social networks (Facebook, LinkedIn, X/Twitter, Slack, etc.).

- **Canonical Link**: Dynamically populated via `Astro.url.href` to instruct search engines which URL is the master version, preventing duplicate content penalties.
- **Favicons**: Linked modern `/favicon.svg` directly from the `public` directory.

### 🔹 JSON-LD Structured Data Schema

A linked graph-style script is injected in the layout head using `type="application/ld+json"`. It helps Google's crawlers identify the nature of your business instantly:

- **WebSite Schema**: Asserts the site identity and language settings.
- **Organization Schema**: Links Uplift Contractor to social profiles, email contact (`dev.jafarkhan@gmail.com`), and phone number (`+8801834969563`).
- **ProfessionalService / Service Schema**: Indexes the **Contractor Turbo** core catalog (websites, CRM, chatbot, missed call text-back, review booster, calendar scheduler) to enable rich search snippets in Google.

---

## 2. On-Page Content Guidelines (Action Required)

Since you are adding content to the `<body>` of your pages later, follow these rules to maintain high ranking potential.

### 🔹 Semantic Heading Hierarchy

Search engines read headings to understand the structure of your content.

- **Use exactly one H1 per page**: The `<h1>` tag should contain your primary focus keyword (e.g., `<h1>Grow Your Home Service Business With Contractor Turbo</h1>`). Do not wrap logos or subheadings in H1 tags.
- **Maintain order**: Never jump heading levels. Follow a logical sequence: `H1 ➔ H2 ➔ H3 ➔ H2 ➔ H3 ➔ H4`.
- **Use H2s for services**: Use `<h2>` for major sections like services (e.g., `<h2>Our Core Service Features</h2>`), and `<h3>` for individual features (e.g., `<h3>AI Chatbot & Lead Capture</h3>`).

### 🔹 Keyword Optimization

- **Natural Placement**: Place your focus keyword in the first paragraph, in at least one subheading (H2/H3), and in the first 100 words of the body copy.
- **Avoid Keyword Stuffing**: Keep it readable. Write high-value copy designed to solve contractor paint points. Google ranks helpful content over keyword-stuffed pages.

### 🔹 Image ALT Text

Google cannot "read" images without descriptive alternative text.

- **Always add alt tags**: Every image element must have a descriptive `alt` attribute.
    - _Bad_: `<img src="/dashboard.png" alt="image" />`
    - _Good_: `<img src="/dashboard.png" alt="Contractor Turbo dashboard displaying job pipeline and lead tracking pipeline" />`

---

## 3. Core Web Vitals & Image Optimization

Page load speed is a major search ranking signal. To ensure lightning-fast speeds:

### 🔹 Preloading Critical Assets

Your primary body fonts (`body-regular.woff2`, `body-500.woff2`, etc.) are preloaded in the layout head to prevent layout shifts (CLS) and flash of unstyled text.

### 🔹 Astro `<Image />` Component

Always import and use the native Astro Image component instead of a raw HTML `<img>` tag for static assets. This optimizes the image format, file size, and handles lazy loading automatically.

```astro
---
import { Image } from "astro:assets";
import myImage from "../assets/images/dashboard.png";
---
<Image
  src={myImage}
  alt="Detailed description of the dashboard interface"
  width={800}
  height={600}
  loading="lazy"
  format="webp"
/>
```

- **Above-the-Fold (Hero Section)**: For images visible instantly on page load, set `loading="eager"` and `fetchpriority="high"` to optimize Largest Contentful Paint (LCP).
- **Below-the-Fold**: Keep the default `loading="lazy"` on all other images to prevent blocking the initial page load.

---

## 4. Sitemap & robots.txt Management

Your site is configured to auto-generate search guides.

### 🔹 robots.txt

Located at [public/robots.txt](file:///D:/Projects/UpliftContractor/public/robots.txt). It allows search crawlers to scan all pages and defines the path to the sitemap file.

- To exclude folders from indexing (e.g., admin pages or private templates), add:
    ```txt
    Disallow: /admin/
    Disallow: /templates/
    ```

### 🔹 Sitemap

Managed automatically using the `@astrojs/sitemap` integration in [astro.config.mjs](file:///D:/Projects/UpliftContractor/astro.config.mjs).

- On every build (`npm run build`), Astro generates a complete `sitemap-index.xml` in your build target directory (`dist/`).
- You do not need to update this file manually. Any new `.astro` page you create under `src/pages/` will automatically be indexed.

---

## 5. Launch & Ranking Checklist

When you are ready to launch your site live:

1. **Update Domain URLs**:
    - In [astro.config.mjs](file:///D:/Projects/UpliftContractor/astro.config.mjs), change the `site` property from `https://upliftcontractor.com` to your live production domain (e.g. `https://mycontractorturbo.com`).
    - In [public/robots.txt](file:///D:/Projects/UpliftContractor/public/robots.txt), update the `Sitemap:` URL to match your live domain.
2. **Run a Build Verification**:
    - Build the project (`npm run build`) to ensure the files in the output `dist/` folder map the updated URLs correctly.
3. **Verify Google Search Console**:
    - Sign in to [Google Search Console](https://search.google.com/search-console).
    - Verify ownership of your live domain.
    - Go to **Sitemaps** and submit your sitemap URL (e.g. `https://mycontractorturbo.com/sitemap-index.xml`).
4. **Link Google Business Profile**:
    - Make sure your Google Business Profile matches your website name, phone number, and address to optimize for **Local 3-Pack Map rankings**.
