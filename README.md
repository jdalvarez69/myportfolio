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
