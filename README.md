![React](https://img.shields.io/badge/React-18-blue?logo=react)
![Vite](https://img.shields.io/badge/Vite-4-purple?logo=vite)
![Netlify](https://img.shields.io/badge/Deployed%20on-Netlify-green?logo=netlify)
![TypeScript](https://img.shields.io/badge/TypeScript-%233178C6?logo=typescript&logoColor=white)
![Coverage](https://img.shields.io/badge/Coverage-100%25-brightgreen)

[🇺🇸 English](./README.md) | [🇰🇷 한국어](./README.ko.md)

# 🌱 Potting Soil Volume Calculator
> A practical soil calculator built with React, TypeScript, and Vite — fast, mobile-friendly, SEO-ready, and designed like a real product.

This calculates the right amount of soil based on your plant pot's shape and size.

## Why This Project?
I created this calculator as a practical tool for beginner gardeners and to showcase my full ownership of a production-ready frontend tool — from UX to deployment and SEO.

- user input validation
- domain logic (geometry, volume calculation)
- product recommendation logic
- mobile-first design, SEO, analytics ready

<p align="center">
  <img src="screenshot_1.png" alt="Screenshot 1" width="22%" />
  <img src="screenshot_2.png" alt="Screenshot 2" width="22%" />
  <img src="screenshot_3.png" alt="Screenshot 3" width="22%" />
  <img src="screenshot_4.png" alt="Screenshot 3" width="22%" />
</p>

### 👉 [Try it Live](https://soilcalc.changbitfarm.com)

## Features
- Supports 4 pot shapes: rectangle, cylinder, cone, and custom surface area
- Calculates volume in liters (assuming 80% fill level)
- Suggests product combinations (20L + 8L) for optimal soil usage
- Responsive, fast-loading SPA with Vite + React + Tailwind
- SEO-optimized with Open Graph meta tags, favicon, sitemap, and analytics

## Tech Stack
- Frontend: React + TypeScript + Tailwind CSS
- Build: Vite
- Deployment: Netlify
- SEO: Open Graph, custom sitemap.xml, robots.txt
- Analytics: Google Analytics (GA4)
- Tested with: Jest + ts-jest

## Testing
Run unit tests:
```bash
npm test
npm run test:coverage
```

## Notable Code Highlights

- [Soil volume calculation logic](./src/utils/calculator.ts)
- [Unit tests with full coverage](./src/utils/calculator.test.ts)
- [Product breakdown logic](./src/utils/breakdown.ts)
- [Shape selector component](./src/components/ShapeSelector.tsx)

## Production Readiness
- HTTPS (via Netlify)
- No runtime backend: pure static SPA = low attack surface
- Googlebot and KakaoTalk-friendly (og:image, meta tags)
- Deployed via CI/CD from main branch to [Netlify](https://soilcalc.changbitfarm.com).


---
Made with 🧡 by Nami Kim
[Blog](https://namixkim.com) | [GitHub](https://github.com/namikimlab) | [LinkedIn](https://linkedin.com/in/namixkim)