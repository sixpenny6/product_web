# AGENTS.md

## Project

This repository is a B2B product website for tubular motors.

The website should help business customers clearly find products, understand technical details, inspect products in 360°/3D, download documents, compare models and submit inquiries.

## Required Reading

Before doing any coding work, read the documents in:

```txt
docs/tubular_motor_website_docs/
```

Important files:

```txt
README_执行总览.md
01_PRD_产品与业务目标.md
02_信息架构_页面流程.md
03_UI视觉设计规范.md
04_360产品查看器技术方案.md
05_前端功能模块与组件清单.md
06_后端_CMS_API_数据模型.md
07_实施路线_任务拆分_Agent提示词.md
08_验收测试_SEO_部署.md
09_Vibe_Coding_文件结构与首批任务.md
10_内容素材清单_给工厂和设计师.md
```

If these files are missing, stop and ask the user to add them.

## Product Categories

The website must support four product categories:

1. Small tubular motors for sunshade, blinds and curtains
2. 59 Series motors for small rolling shutters
3. 92 Series motors for garage doors and large rolling shutters
4. 92 Servo motors for precise control scenarios

## Design References

Use these references conceptually only:

- DJI Osmo Pocket 3: product storytelling, premium tech presentation and staged feature sections.
- Dyson OnTrac: clean premium UI, configurator-like product visualization and clear CTAs.
- Razer Blade 16: dark high-impact technology style and strong specification presentation.
- Dell PowerEdge XR5610: B2B hardware detail page structure with 3D/360 product view and support/spec sections.

Do not copy copyrighted assets, copy, images or code from reference websites.

## MVP Scope

Build a B2B product website, not a full e-commerce system.

MVP includes:

- Homepage
- Product categories
- Product listing and filtering
- Product comparison
- Product detail pages
- 360°/3D product viewer
- Technical specifications
- Downloads center
- Application pages
- Inquiry form
- CMS backend
- SEO and deployment readiness

MVP does not include:

- Online payment checkout
- Complex inventory
- ERP integration
- Distributor pricing portal
- Full CRM automation

## Preferred Stack

Use this stack unless there is a clear reason not to:

- Next.js App Router
- React
- TypeScript
- Tailwind CSS
- shadcn/ui style components
- Framer Motion
- React Three Fiber
- drei
- three.js
- Payload CMS
- PostgreSQL
- Cloudflare R2 or S3-compatible storage for large assets
- Resend / SendGrid / SMTP for email notifications

## Hard Rules

- Work one stage at a time.
- Never implement the whole project in one task.
- Do not fabricate real motor specifications.
- Unknown motor values must be written as `TODO` or `待补充`.
- Do not invent torque, speed, voltage, tube diameter, certifications, IP rating or other technical specs.
- Product specs must be structured data, not images.
- CTA buttons must remain clear and visible.
- 3D effects must never block navigation, product information or inquiry buttons.
- 3D viewer must have loading, error and fallback states.
- If no 3D model exists, show poster image fallback.
- Forms must have both client-side and server-side validation.
- Do not store heavy GLB, PDF, ZIP or video assets directly in Git long-term.
- Avoid unnecessary dependencies.
- Keep the code deployable.
- Keep mobile layouts usable.

## Stage Workflow

Before coding a stage:

1. Restate the current stage goal.
2. List planned files to create or modify.
3. List packages or commands required.
4. Confirm the work stays within the current stage.

After coding a stage, report:

```md
## Completed
## Modified Files
## How to Run
## How to Test
## Known Issues
## Next Step
```

## Error Handling

When fixing errors:

- Fix only the reported error.
- Do not refactor unrelated code.
- Do not jump to another stage.
- Explain the root cause briefly.
- Run the minimum validation command again.

## Git Safety

The user should commit after each working stage.

Do not run destructive Git commands unless explicitly requested.

Never run:

```txt
git reset --hard
rm -rf
deleting .git
deleting docs
mass rewriting unrelated files
```

## Current Recommended Stage Order

```txt
0. Environment check
1. Project initialization
2. Base structure and layout
3. Design system
4. Static homepage
5. Mock product data
6. Product listing and filters
7. Product detail pages
8. 3D/360 viewer MVP
9. Payload CMS and PostgreSQL
10. Inquiry form and email
11. Search, downloads and comparison
12. SEO, tests and deployment
```
