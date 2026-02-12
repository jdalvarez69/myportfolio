# MyPortfolio (scaffold)

Minimal Next.js scaffold for the portfolio. No business logic yet — placeholders only.

Local dev:

```bash
cd site
npm install
npm run dev
```


Generate the PDF checklist (requires dependencies including `puppeteer`):

```bash
cd site
npm ci
npm run generate-pdf
```

Note: `npm run generate-pdf` runs `node scripts/generate-pdf.js` which produces `public/automation-audit-checklist.pdf`.

Add a headshot image (optional):

1. Save your headshot image to `site/public/images/headshot.jpg` (replace existing if present).
2. The site will automatically display the image in the hero and About page as `headshot.jpg`.

Example path:
`/Users/jorgealvarez/myportfolio/site/public/images/headshot.jpg`

