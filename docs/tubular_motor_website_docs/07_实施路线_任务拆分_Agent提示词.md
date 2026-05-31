# 实施路线、任务拆分与 Agent 提示词

## 1. 总体执行策略

不要让 vibe coding 一次性生成整个网站。正确做法是分阶段、分 agent、分验收点。

推荐顺序：

1. 生成项目骨架
2. 建立设计系统
3. 做静态页面
4. 做产品数据 Mock
5. 做产品详情页
6. 做 3D 查看器
7. 接 CMS 和数据库
8. 做表单和邮件
9. 做 SEO 和性能
10. 部署和验收

## 2. Agent 角色

### 2.1 Product Architect Agent

负责：

- 信息架构
- 页面结构
- 用户流程
- 产品分类和筛选逻辑

### 2.2 UI System Agent

负责：

- Tailwind 主题
- 基础组件
- 按钮、卡片、导航、表格
- 响应式规范
- 动效规范

### 2.3 Frontend Agent

负责：

- Next.js 页面
- 前台组件
- 产品列表
- 产品详情
- 下载中心
- 询盘页

### 2.4 3D Viewer Agent

负责：

- React Three Fiber
- GLB 加载
- OrbitControls
- Hotspots
- Fallback
- 性能优化

### 2.5 Backend CMS Agent

负责：

- Payload CMS
- Collections
- API
- PostgreSQL
- 文件上传
- 权限

### 2.6 QA / SEO / Performance Agent

负责：

- Playwright 测试
- Lighthouse
- SEO metadata
- sitemap
- robots.txt
- 可访问性
- 表单测试

### 2.7 Deployment Agent

负责：

- 环境变量
- Vercel / Railway / Render 配置
- 数据库连接
- 对象存储
- 域名
- CI/CD

## 3. Master Prompt

把下面这段作为 vibe coding 主提示词。

```md
你是一个资深全栈工程师和产品设计师。我要制作一个面向 B2B 客户的管状电机产品官网。网站风格参考 DJI Osmo Pocket 3、Dyson OnTrac、Razer Blade 16 的高级科技感、清晰 CTA 和产品叙事；产品 360°/3D 查看体验参考 Dell PowerEdge XR5610。

产品分类：
1. 遮阳帘/窗帘用小型管状电机
2. 小卷帘门用 59 系列电机
3. 车库门/大型门用 92 系列电机
4. 92 伺服电机

网站目标：
- 客户能快速找到对应产品
- 产品详情清楚，规格完整
- 产品页提供 360°旋转/3D 查看
- 支持资料下载
- 支持产品筛选、对比和询盘
- 后台可维护产品、规格、下载资料、3D 模型和询盘
- 第一版先做 B2B 产品展示和询盘，不做在线支付

技术栈：
- Next.js App Router
- React + TypeScript
- Tailwind CSS + shadcn/ui
- Framer Motion
- React Three Fiber + drei + three.js
- Payload CMS
- PostgreSQL
- Cloudflare R2 或 S3 存储媒体和 3D 模型
- 邮件服务用于询盘通知

开发要求：
- 先生成清晰的文件结构
- 所有组件必须 TypeScript 类型完整
- UI 必须响应式
- 产品详情页必须有 3D 查看器 fallback
- 表单必须有前后端校验
- 代码必须可部署
- 不要写死产品真实参数，用 mock 数据占位并标记 TODO
- 每完成一个阶段，给出验收清单
```

## 4. 阶段 Prompt

### 阶段 1：初始化项目

```md
请初始化 Next.js App Router + TypeScript + Tailwind 项目结构。创建以下目录：
src/app, src/components, src/components/layout, src/components/product, src/components/viewer3d, src/lib, src/types。
添加基础 layout、首页、产品列表页、产品详情页、下载页、联系页。
不要实现复杂逻辑，先保证路由和页面骨架可运行。
```

### 阶段 2：设计系统

```md
请基于高级工业科技风创建 Tailwind 设计系统。颜色以深色背景、电蓝强调色、金属铜点缀为主。实现 Button、Card、SectionHeader、SpecBadge、CTAGroup、GlassPanel 组件。所有组件支持响应式、hover、focus-visible 和 disabled 状态。
```

### 阶段 3：首页

```md
请实现管状电机官网首页。结构包括：
Hero、产品系列入口、应用场景、技术优势、360°展示预览、底部询盘 CTA。
风格参考 DJI 的分段产品叙事、Dyson 的高级质感、Razer 的暗色科技感。按钮必须清楚，首屏必须出现 Explore Products 和 Get Quote。
```

### 阶段 4：产品数据 Mock

```md
请创建 mockProducts.ts，包含四个系列的产品数据：
Small Tubular Motor、59 Series Motor、92 Series Motor、92 Servo Motor。
字段包括 slug、name、series、applications、shortDescription、specs、downloads、model3d、modelPoster、hotspots。
所有未知真实参数用 TODO 或 待补充 标记，不要编造真实参数。
```

### 阶段 5：产品列表和筛选

```md
请实现产品列表页。支持按系列、应用、控制方式、是否伺服筛选。实现 ProductCard、ProductFilterSidebar、ProductCompareDrawer。产品卡必须显示图、名称、系列、应用、核心规格、View Details、Compare、Get Quote。
```

### 阶段 6：产品详情页

```md
请实现产品详情页。页面结构：
Breadcrumb、Hero、3D Viewer、Quick Specs、Key Features、Technical Specifications、Dimensions & Installation、Downloads、Related Products、FAQ、Inquiry CTA。
产品详情必须从 slug 获取 mock 数据。规格表必须结构化显示。
```

### 阶段 7：3D 查看器

```md
请实现 ProductViewer3D 组件，使用 React Three Fiber 和 drei。功能包括：
加载 GLB 模型、OrbitControls 拖拽旋转、自动旋转开关、Reset View、Fullscreen、Loading、模型失败 fallback、Hotspots、HotspotDrawer。
如果没有模型 URL，显示 poster 图片和提示。
注意移动端性能，Canvas 不要阻塞页面滚动。
```

### 阶段 8：CMS 后端

```md
请集成 Payload CMS，创建 collections：
Products、ProductSeries、ProductCategories、Applications、Documents、Media、Inquiries。
Products 需要支持关联系列、应用、下载文件、3D 模型、热点、规格和 SEO 字段。
请给出 schema、访问权限和 seed 数据脚本。
```

### 阶段 9：询盘表单

```md
请实现 InquiryForm。前端使用 react-hook-form + zod，后端 route handler 再次校验。提交后写入 Inquiries collection，并发送邮件通知销售。加入 honeypot 和基础 rate limit。成功后显示明确反馈。
```

### 阶段 10：SEO 与部署

```md
请实现 SEO 基础能力：
generateMetadata、产品页 Open Graph、sitemap.xml、robots.txt、结构化数据、canonical。
请准备 .env.example、部署说明、Vercel 配置、数据库连接说明、R2/S3 文件存储说明。
```

## 5. 每阶段验收方式

每个阶段完成后都要求 agent 输出：

```md
## 完成内容
## 修改文件
## 如何运行
## 如何测试
## 已知问题
## 下一步建议
```

## 6. 禁止事项

- 不要一次性生成 50 个文件后不解释。
- 不要编造产品真实参数。
- 不要把 3D 模型直接放进 Git。
- 不要让 3D 动效挡住按钮。
- 不要只做漂亮首页，不做产品详情。
- 不要把规格做成图片。
- 不要跳过移动端。
- 不要跳过表单后端校验。
