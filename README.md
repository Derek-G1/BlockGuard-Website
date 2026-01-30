# Block Guard Website (Next.js + Tailwind) — static export

This project is set up so you can:
- develop locally with `npm run dev`
- export a **static site** you can upload to shared hosting (Namecheap/cPanel, etc.)

## Local dev
```bash
npm install
npm run dev
```

## Build + static export
This project uses Next.js `output: "export"` and `trailingSlash: true`.
Running `npm run build` generates a fully static site in the `out/` folder.

```bash
npm run build
```

Then upload the contents of `out/` to your web root (e.g. `public_html/`).

## Where the sitemap/robots live
- `public/sitemap.xml`
- `public/robots.txt`

Update the sitemap URLs/lastmod when you add new routes.

## Reusable modules
- `components/Navbar.tsx`
- `components/Footer.tsx`
- `components/ThemeToggle.tsx` (dark/light)

These are included globally in `app/layout.tsx`.
