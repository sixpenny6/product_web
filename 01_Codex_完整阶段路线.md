# Codex 完整阶段路线

## 阶段 0：环境检查

目标：

- 确认 Node.js、npm/pnpm、Git 可用；
- 确认当前目录正确；
- 确认 11 个项目文档已放入；
- 不写代码。

验收：

```powershell
node -v
npm -v
git --version
pwd
dir docs\tubular_motor_website_docs
```

## 阶段 1：项目初始化

目标：

- Next.js App Router
- TypeScript
- Tailwind
- ESLint
- src 目录
- @/* alias
- 基础路由

不做：

- CMS
- 3D
- 真实数据
- 表单后端

验收：

```powershell
npm run dev
```

## 阶段 2：基础结构和 Layout

目标：

- 建立组件目录；
- 添加 Header / Footer；
- 添加基础导航；
- 设置全局深色背景。

验收：

```powershell
npm run dev
npm run lint
```

## 阶段 3：设计系统

目标：

- Button
- Card
- Badge
- GlassPanel
- SectionHeader
- SpecBadge
- CTAGroup

验收：

- 首页或预览区能看到组件；
- hover/focus/disabled 状态存在；
- 移动端不崩。

## 阶段 4：首页静态版

目标：

- HomeHero
- ProductSeriesGrid
- ApplicationShowcase
- TechnologyHighlights
- HomeViewerPreview，占位
- FinalCTA

验收：

- 首屏清楚说明产品；
- CTA 明显；
- 四大产品系列清楚。

## 阶段 5：产品 Mock 数据

目标：

- 产品类型定义；
- 四大系列 mock 数据；
- 规格结构化；
- 不编造真实参数。

验收：

- mock 数据中未知值使用 TODO / 待补充。

## 阶段 6：产品列表和筛选

目标：

- /products；
- 产品卡；
- 筛选；
- 对比抽屉；
- 空状态。

验收：

- 能筛选；
- 能进入详情；
- 能添加对比。

## 阶段 7：产品详情页

目标：

- /products/[slug]；
- Hero；
- 3D 占位；
- Quick Specs；
- 规格表；
- 下载；
- FAQ；
- 询盘 CTA。

验收：

- 真实 slug 可打开；
- 假 slug 返回 404；
- 规格结构化。

## 阶段 8：3D/360 查看器 MVP

目标：

- React Three Fiber；
- drei；
- GLB 加载；
- OrbitControls；
- Hotspots；
- fallback；
- 移动端可用。

验收：

- 无模型时不崩；
- 有模型 URL 时尝试加载；
- fallback 清楚；
- 3D 不挡 CTA。

## 阶段 9：Payload CMS + PostgreSQL

目标：

- Products；
- ProductSeries；
- ProductCategories；
- Applications；
- Documents；
- Media；
- Inquiries；
- seed 脚本。

验收：

- CMS 后台可访问；
- 能创建产品；
- 能上传文件；
- 能看到询盘 collection。

## 阶段 10：询盘表单和邮件

目标：

- InquiryForm；
- Zod；
- React Hook Form；
- POST /api/inquiries；
- 保存到 Inquiries；
- 邮件通知；
- honeypot；
- rate limit。

验收：

- 表单成功提交；
- 后台能看到询盘；
- 错误提示清楚。

## 阶段 11：搜索、下载、对比增强

目标：

- 下载中心筛选；
- 产品搜索；
- Header 搜索；
- 对比完善；
- 相关产品和相关下载。

验收：

- 搜索可用；
- 下载可筛选；
- 对比字段清楚。

## 阶段 12：SEO、测试、部署准备

目标：

- metadata；
- Open Graph；
- sitemap；
- robots；
- structured data；
- .env.example；
- 部署说明；
- build 通过。

验收：

```powershell
npm run lint
npm run build
```
