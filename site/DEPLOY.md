# Deployment (Vercel)

Recommended: deploy the `site/` folder to Vercel for fast CI/CD and automatic HTTPS.

1. Push your repo to GitHub.
2. Sign in to Vercel and create a new project.
3. Import from GitHub and select the repository.
4. Set the root directory to `site/` and use the default build command `npm run build` and output `.` (Next.js defaults are fine).
5. Add environment variables if you later wire forms/CRM.

Alternative: deploy to Netlify or static host for a simpler static site.
