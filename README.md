# Klimacontra Website Rebuild

This branch is the clean foundation for the Klimacontra website rebuild.

The existing repository content is a static WordPress mirror/export. It should be treated as a legacy reference source for content, images, product names, SEO history, and redirects — not as the working codebase for the rebuild.

## Recommended Stack

- Astro for a fast, secure, content-driven corporate/product website.
- TypeScript for structured content and product data.
- Component-based layouts for consistent reusable sections.
- Static-first output for performance and simple hosting.

## Repository Purpose

This structure supports:

- New design and layout system.
- Rewritten company and product content.
- Structured product catalogue.
- Project/case-study pages.
- Certifications and downloads.
- SEO metadata and redirect planning.

## Directory Overview

```text
src/
  components/      Reusable UI and layout components
  content/         Markdown/MDX content for pages, products, projects, news
  data/            Structured navigation, company, category and certification data
  layouts/         Page-level layout wrappers
  pages/           Website routes
  styles/          Global styles and design tokens
  lib/             SEO, schema, utility helpers
public/
  images/          Brand, product, project, certification and background images
  documents/       Catalogues, brochures, certificates, datasheets
docs/
  sitemap.md       Target sitemap
  content-map.md   Legacy-to-new content mapping
  migration-plan.md Cleanup and migration approach
  seo-plan.md      SEO and redirect strategy
```

## Development Commands

```bash
npm install
npm run dev
npm run build
npm run preview
```

## Immediate Next Steps

1. Extract legacy product/category list from the WordPress export.
2. Clean and rename selected brand/product/project assets.
3. Rewrite core pages: Home, About, Products, Projects, Certifications, Contact.
4. Build product detail template.
5. Prepare redirect map from old URLs to new URLs.
