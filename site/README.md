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

