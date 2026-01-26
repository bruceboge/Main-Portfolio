# Bruce Boge — Personal Portfolio

[![Portfolio Status](https://img.shields.io/badge/status-complete-brightgreen)](https://github.com/bruceboge/Portfolio)
[![Languages](https://img.shields.io/badge/HTML-42.4%25-orange)](#stats)
[![Languages](https://img.shields.io/badge/CSS-39%25-blue)](#stats)
[![Languages](https://img.shields.io/badge/JavaScript-18.6%25-yellow)](#stats)

Welcome to the source for my personal portfolio website — a clean, responsive showcase built with HTML, CSS and JavaScript. This project was designed and implemented with attention to accessibility, performance, and a focus on clean UI/UX. I built it following inspiration from https://aakashrajbanshi.com.np/ and adapted visual ideas and interaction patterns into a unique, personal design language.

---

Demo
- Live preview: (deployed via GitHub Pages / your preferred host)
- Screenshot (Hero):
  ![Hero Screenshot](./images/portfolio.png)
  > Replace `./assets/hero-screenshot.png` with your actual hero image path if different.

Quick links
- Design inspiration: https://aakashrajbanshi.com.np/

---

Table of contents
- Project overview
- Design goals & UX decisions
- Visual design system
- Layout & responsive behavior
- Interactivity & JavaScript
- Accessibility
- Performance & optimization
- Tech stack & stats
- File structure
- How to run locally
- Credits & license

---

Project overview
This portfolio is a single-page, component-driven site that presents:
- A welcoming hero section with name, tagline and primary call-to-action
- A concise About section describing background and skills
- A Projects gallery with project cards (image, summary, tech, links)
- A Skills / Tools area visualizing strengths
- Testimonials or highlights (optional)
- Contact area with an accessible contact form (or mailto link)
- Footer with social links and quick nav

Everything is structured so sections can be reused or extracted into separate pages later.

Design goals & UX decisions
- Clarity first: minimal visual clutter so content and projects stand out.
- Intentional hierarchy: large hero → concise intro → projects → contact.
- Focused CTAs: each project card has clear primary actions (view live / source).
- Micro-interactions: subtle hover and focus states to give feedback without distraction.
- Mobile-first: designed to be fully usable on phones, then scaled up for tablet/desktop.

Visual design system
- Color scheme: a neutral base with a single accent color for CTAs and highlights.
- Typography: system or web-safe fonts for good performance; heading scale chosen for readable rhythm.
- Spacing: consistent spacing scale using CSS custom properties (e.g., --space-xx).
- Components:
  - Container: centered max-width with padding
  - Card: image, title, tags, short description, CTA
  - Nav: sticky on scroll with a compact mobile menu
- Imagery: optimized, lazy-loaded thumbnails for project cards, retina-ready where beneficial.

Design tokens (example)
- Colors: --bg, --text, --muted, --accent
- Spacing: --space-1 .. --space-6
- Radius: --rounded-md, --rounded-lg
- Transitions: --motion-fast, --motion-medium

Layout & responsive behavior
- Grid-first approach:
  - Hero: single-column on mobile, two-column split on wider viewports.
  - Projects: responsive grid using CSS Grid with auto-fit/minmax pattern.
- Breakpoints:
  - Mobile: up to 600px — stacked single-column
  - Tablet: 600–900px — two columns for content where appropriate
  - Desktop: 900px+ — full layout with enhanced spacing and side-by-side areas
- CSS features used: CSS Grid, Flexbox, custom properties, clamp() for fluid typography.

Interactivity & JavaScript
- Vanilla JS for small, focused interactions:
  - Mobile nav toggle (aria-expanded toggling, focus management)
  - Project modal or lightbox (keyboard accessible)
  - Theme switcher (persisted to localStorage)
  - Simple form validation for contact (if present)
- Progressive enhancement: content is fully accessible with JS disabled; JS only adds convenience and extra UX touches.

Accessibility
- Semantic HTML elements (header, main, nav, section, footer).
- Keyboard focus visible for all actionable elements.
- Sufficient color contrast for text and interactive elements.
- ARIA attributes used where necessary (e.g., aria-expanded, role="dialog" for modals).
- Images include descriptive alt text; decorative images use empty alt attributes.
- Landmarks for screen reader navigation.

Performance & optimization
- Image optimization: responsive srcsets, WebP where possible, and lazy-loading with loading="lazy".
- Critical CSS: keep above-the-fold CSS lean and defer non-critical styles.
- Minified assets for production (CSS and JS).
- Use caching headers and deployable on GitHub Pages / CDN.
- Example targets / guidance:
  - Lighthouse (target after optimization): Performance >= 90, Accessibility >= 95, Best Practices >= 90, SEO >= 90.
  - Real results may vary — run Lighthouse or PageSpeed Insights on your deployment to measure.

Tech stack & stats
- Languages:
  - HTML: 42.4%
  - CSS: 39%
  - JavaScript: 18.6%
- Primary tools:
  - Hand-coded HTML/CSS/JS (no heavy framework)
  - Build & tooling: optional npm scripts for minification, image optimization
  - Deployment: GitHub Pages, Netlify, or similar
- Example badges:
  - ![Built with HTML/CSS/JS](https://img.shields.io/badge/stack-HTML%20%7C%20CSS%20%7C%20JS-lightgrey)

File structure (example)
- index.html — main markup
- assets/
  - hero-screenshot.png
  - projects/
- css/
  - main.css
  - components.css
- js/
  - main.js
  - nav.js
- README.md

How to run locally
1. Clone the repo
   git clone https://github.com/bruceboge/Portfolio.git
2. Open index.html in a browser (for static setup), or:
   - If using a dev server: serve with Live Server / simple-http-server / npm script
3. Optional: run build tasks for minification/images if included (npm install && npm run build)

Customizing content
- Replace the images in assets/ with your own project screenshots.
- Update project cards in HTML with live links and repo links.
- Tweak CSS variables in :root for quick theme changes.

Visuals
- Preview:
  ![Hero](./images/portfolio.png)
- Projects sample card:
  ![ClubVote Project](./images/ClubVote.png)

Notes on inspiration
This project was inspired by the design and flow of Aakash Raj Banshi's portfolio (https://aakashrajbanshi.com.np/). I studied the layout, spacing, and subtle interactivity there and adapted concepts such as a focused hero, clean project cards, and tasteful micro-animations, while maintaining my own color palette, typography choices, and content priorities.

Tips & future improvements
- Add an automated image optimization pipeline (e.g., sharp) for CI builds.
- Integrate simple analytics (privacy-friendly) to learn which projects get attention.
- Add a small CMS or Markdown-driven projects section for easier updates.
- Make the site a PWA for offline-first access and installability.

Credits
- Design inspiration: Aakash Raj Banshi — https://aakashrajbanshi.com.np/
- Built by: Bruce Boge — https://github.com/bruceboge

License
This repository is available under the MIT License. See LICENSE.md for details.

Contact
- Email: trionmulti@gmail.com
- GitHub: https://github.com/bruceboge
- LinkedIn: BRUCE OKAYA

Thank you for visiting — enjoy exploring!
