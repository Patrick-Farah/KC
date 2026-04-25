# KlimaContra Website Rebuild Foundation

This folder is the clean foundation for rebuilding the KlimaContra website.

The current repository contains a legacy static WordPress export. Do not build on top of the exported WordPress files. Treat them as a reference archive only.

## Recommended Stack

- Astro for a fast corporate/product website
- TypeScript for structured data and safer edits
- Plain CSS with design tokens for predictable branding
- Markdown/data-driven product content

## Getting Started

```bash
cd rebuild-foundation
npm install
npm run dev
```

## Build

```bash
npm run build
npm run preview
```

## Working Rules

1. Keep product content in `src/data/products.ts` until a CMS is introduced.
2. Keep navigation in `src/data/navigation.ts`.
3. Keep brand variables in `src/styles/tokens.css`.
4. Keep old WordPress pages only as migration references.
5. Do not copy WordPress plugin/theme files into the new build.

## Main Sections

- Home
- About
- Products
- Solutions
- Projects
- Certifications
- Downloads
- News
- Careers
- Contact

## Migration Documents

See the `docs/` folder for content mapping, SEO planning, redirect planning, and asset inventory.
