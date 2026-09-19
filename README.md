# Zaid — Web Portfolio

A one-page portfolio site for a freelance website-building business, built
with React, TypeScript, Vite, and Tailwind CSS.

## Getting started

```bash
npm install
npm run dev
```

Open the local URL Vite prints (usually `http://localhost:5173`).

## Before you deploy — things to edit

1. **Contact details** — `src/config/site.ts`
   - `WHATSAPP_NUMBER`: your WhatsApp number in international format, digits only (e.g. `923001234567`).
   - `EMAIL_ADDRESS`: the email you want enquiries sent to.
   - `SITE_URL`: your live domain once you have one.

2. **Project screenshots** — `src/data/projects.ts`
   - Each project currently points at a placeholder graphic in `public/projects/`.
   - Replace `image` with a real screenshot (drop the file into `public/projects/` and update the path), and update `url` once each demo is deployed somewhere.

3. **SEO metadata** — `index.html`
   - Update the canonical URL, Open Graph URL, and Twitter/OG image URLs once you have a real domain.
   - Add a real `og-image.png` (1200×630px) to `public/` if you want link previews to show an image — the tag is already in place but no image file is included yet.

4. **Sitemap & robots** — `public/sitemap.xml` and `public/robots.txt`
   - Replace `https://YOUR-PROJECT.vercel.app` with your real domain once available.

## Build

```bash
npm run build
```

Output is written to `dist/`. Deploy `dist/` (or connect the repo directly) to Vercel.

## Project structure

```
src/
  components/   UI sections (Navbar, Hero, SelectedWork, ProjectCard, Services,
                WhyWorkWithMe, About, FinalCTA, Footer, HeroVisual)
  config/site.ts   Editable contact info, nav links, site name
  data/projects.ts Editable project/demo data
  hooks/           useRevealOnScroll (scroll-reveal, respects prefers-reduced-motion)
public/
  projects/        Placeholder project preview graphics (SVG)
  favicon.svg, robots.txt, sitemap.xml
```
