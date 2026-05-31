# Vibe Coding 文件结构与首批任务

## 1. 推荐 Repo 名称

```txt
tubular-motor-website
```

## 2. 初始文件结构

```txt
tubular-motor-website/
  README.md
  package.json
  .env.example
  next.config.ts
  tailwind.config.ts
  tsconfig.json
  payload.config.ts
  src/
    app/
      layout.tsx
      page.tsx
      products/
        page.tsx
        [slug]/
          page.tsx
      applications/
        page.tsx
        [slug]/
          page.tsx
      downloads/
        page.tsx
      contact/
        page.tsx
      api/
        inquiries/
          route.ts
    components/
      layout/
        AppHeader.tsx
        Footer.tsx
        MegaMenu.tsx
      sections/
        HomeHero.tsx
        ProductSeriesGrid.tsx
        ApplicationShowcase.tsx
        TechnologyHighlights.tsx
        FinalCTA.tsx
      product/
        ProductCard.tsx
        ProductFilterSidebar.tsx
        ProductSpecsTable.tsx
        ProductCompareDrawer.tsx
        ProductDownloads.tsx
      viewer3d/
        ProductViewer3D.tsx
        ProductModel.tsx
        ProductHotspots.tsx
        HotspotDrawer.tsx
        ViewerFallback.tsx
      forms/
        InquiryForm.tsx
      ui/
        Button.tsx
        Card.tsx
        Badge.tsx
        GlassPanel.tsx
    collections/
      Products.ts
      ProductSeries.ts
      Applications.ts
      Documents.ts
      Inquiries.ts
      Media.ts
    lib/
      mock/
        products.ts
      validators/
        inquiry.ts
      seo/
        metadata.ts
      utils.ts
    types/
      product.ts
      cms.ts
  public/
    images/
    placeholders/
```

## 3. 首批任务列表

### Task 1：项目初始化

输出：

- Next.js 项目
- Tailwind 配置
- 基础路由
- 基础 layout
- 深色主题变量

验收：

- `npm run dev` 可运行
- 首页、产品页、联系页可打开

### Task 2：设计系统组件

输出：

- Button
- Card
- Badge
- GlassPanel
- SectionHeader
- SpecBadge

验收：

- 组件有 hover/focus 状态
- 颜色符合工业科技风
- 移动端正常

### Task 3：首页静态版

输出：

- HomeHero
- ProductSeriesGrid
- ApplicationShowcase
- TechnologyHighlights
- FinalCTA

验收：

- 首屏有清楚 CTA
- 四大产品分类清楚
- 页面视觉有科技感，但按钮不难找

### Task 4：Mock 数据

输出：

- `src/lib/mock/products.ts`
- `src/types/product.ts`

验收：

- 四大系列都有数据
- 未知参数标记 TODO
- 产品详情页能读取数据

### Task 5：产品列表与详情

输出：

- 产品列表
- 筛选
- 产品详情页
- 规格表
- 下载区

验收：

- 产品能按系列筛选
- 产品详情结构完整
- CTA 清楚

### Task 6：3D 查看器 MVP

输出：

- ProductViewer3D
- Hotspots
- Fallback

验收：

- 有模型时显示 3D
- 无模型时显示 poster
- 热点点击可打开说明
- 移动端不崩

### Task 7：CMS

输出：

- Payload collections
- 产品后台
- 询盘后台
- 媒体上传

验收：

- 能创建产品
- 能上传 GLB/PDF/图片
- 前台读取 CMS 数据

### Task 8：询盘

输出：

- InquiryForm
- API route
- 邮件通知
- 后台保存

验收：

- 正常提交
- 错误提示清楚
- 销售收到邮件

### Task 9：部署

输出：

- `.env.example`
- 部署说明
- Vercel 配置
- R2/S3 配置说明

验收：

- 生产环境可访问
- 表单可提交
- CMS 可登录
- 3D 模型可加载

## 4. 给 Agent 的工作规则

每次只做一个 task。
每个 task 完成后必须说明：

```md
完成了什么
改了哪些文件
如何运行
如何验证
下一步做什么
```

出现不确定参数时，必须用 TODO，不要编造。
