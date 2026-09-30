# ADORN – React Ecommerce (Vite + TypeScript)
`npm install` → `npm run dev` → `npm run build`.

**Everything editable lives in `src/config/`:**
- `site.ts` – all text, **SEO (title, description, keywords, canonical, OG)**, nav, contact/WhatsApp, footer, section copy
- `theme.ts` – **colors, fonts, radius, shadows, layout** (become CSS variables)
- `products.ts`, `categories.ts`, `testimonials.ts` – content data
- `img.ts` – placeholder generator; replace any `image` with `'/images/file.webp'` (files in `public/images/`)
WhatsApp/phone: `site.contact`. SEO is applied at runtime by `seo.ts`.

## Your images
- `public/images/logo.png`, `public/images/hero.jpg` (single hero image; text stays centered over it)
- `public/images/products/<product-id>.png` (ids in `products.ts`, e.g. `day-cream.png`)
- `public/images/categories/<category-id>.png` (e.g. `face-creams.png`), `public/images/avatars/nimali.png` etc.
- Different names/extension (.webp/.jpg)? Edit `assets` in `src/config/img.ts`. Missing files fall back to a placeholder.
- Trust content: `trustSection` in `site.ts`. Only keep claims that are true for your business.
