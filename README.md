# The Newark AI-Automation Consulting Hub

## Live Link

- https://jdalvarez69.github.io/myportfolio/

## Project Overview

This repository contains a professional portfolio site focused on small-business automation, dashboards, and CRM integrations. The build uses Next.js with a neutral visual style, clear CTAs, case studies, and a lead-gen contact flow.

## Orchestration Log

During build-out, the agent generated invalid Next.js `Link` markup by nesting `<a>` tags inside `Link`, which caused the runtime error: `Invalid <Link> with <a> child`. I corrected this by migrating all links to Next.js 13-compatible usage (`<Link href="...">Label</Link>` with classes/styles on `Link`). Another issue was case-study parsing: markdown files lacked YAML frontmatter while the parser expected it, so frontmatter was added to align content and renderer behavior.

## Local Preview

```bash
cd site
npm install
npm run dev
```

Then open `http://localhost:3000`.

## Notes

- If GitHub Pages is not yet enabled, enable Pages in repository settings or deploy with Vercel/Netlify.
- Third-party hooks are ready via environment variables in the contact page:
  - `NEXT_PUBLIC_FORMSPREE_ENDPOINT`
  - `NEXT_PUBLIC_CALENDLY_URL`
  - `NEXT_PUBLIC_HUBSPOT_MEETING_URL`
- For GitHub Pages builds, set these in GitHub → Settings → Secrets and variables → Actions → Variables (Repository variables).

## Integration Setup (Step-by-step)

Use **3 separate repository variables** (not one combined value).

1. Open GitHub repo → **Settings** → **Secrets and variables** → **Actions**.
2. Click **Variables**.
3. Add each variable exactly:

- `NEXT_PUBLIC_FORMSPREE_ENDPOINT` = `https://formspree.io/f/your-real-form-id`
- `NEXT_PUBLIC_CALENDLY_URL` = `https://calendly.com/your-handle/20min-audit`
- `NEXT_PUBLIC_HUBSPOT_MEETING_URL` = `https://meetings.hubspot.com/your-handle` (optional)

Formatting rules:
- Paste plain URL text only.
- No quotes, no commas, no JSON, no brackets.
- One variable per line in GitHub UI.

After saving variables:
1. Go to **Actions**.
2. Re-run **Deploy GitHub Pages** workflow (or push any commit).
3. Wait for green check, then verify:
   - Form submit redirects to `/thanks/`
   - Calendly button opens your personal booking link
   - HubSpot button opens your meeting page (if configured)
