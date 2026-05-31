---
name: tubular-motor-deployment
description: Use this skill when preparing deployment, environment variables, build checks, SEO, storage and email configuration.
---

# Tubular Motor Deployment Skill

Use when working on:

- `.env.example`
- Vercel / Railway / Render deployment notes
- PostgreSQL connection
- R2/S3 object storage
- Email service
- sitemap
- robots
- build checks
- production readiness

## Requirements

- `npm run build` must pass before deployment.
- Do not commit real secrets.
- Document every required environment variable.
- Missing optional services should fail gracefully in development.
- Large assets should live in object storage, not Git.
- Product pages must include metadata.
- Do not fake product price schema.
- Include deployment checklist.
