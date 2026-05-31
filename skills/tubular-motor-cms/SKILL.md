---
name: tubular-motor-cms
description: Use this skill when implementing Payload CMS, product schemas, media, documents and inquiries for the tubular motor website.
---

# Tubular Motor CMS Skill

Follow:

```txt
docs/tubular_motor_website_docs/06_后端_CMS_API_数据模型.md
```

## Collections

- Products
- ProductSeries
- ProductCategories
- Applications
- Documents
- Media
- Inquiries

## Rules

- Do not fabricate real product specs.
- Product specs must be structured.
- Media must support images, PDFs, GLB, USDZ and ZIP if feasible.
- Inquiries must be stored.
- Admin APIs must not be public.
- Environment variables must be documented.
- Keep mock data and CMS compatible during migration.
- Avoid breaking existing frontend pages while integrating CMS.
