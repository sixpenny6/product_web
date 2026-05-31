# 后端、CMS、API 与数据模型

## 1. 后端定位

MVP 后端主要承担：

- 产品内容管理
- 产品规格管理
- 媒体资源管理
- 3D 模型资源配置
- 下载文件管理
- 询盘收集
- SEO 内容管理
- 管理员权限

不建议 MVP 阶段做复杂订单、价格系统、库存系统。

## 2. 推荐架构

```txt
Next.js App
  ├── Public Website
  ├── Route Handlers / Server Actions
  ├── Payload CMS Admin
  ├── PostgreSQL
  ├── Object Storage: Cloudflare R2 / S3
  └── Email Service
```

## 3. CMS Collections

### 3.1 Products

字段：

```ts
Product {
  id: string
  slug: string
  name: string
  modelNumber: string
  series: Relation<ProductSeries>
  category: Relation<ProductCategory>
  applications: Relation<Application>[]
  shortDescription: string
  longDescription: RichText
  status: 'draft' | 'published'
  featured: boolean

  heroImage: Media
  gallery: Media[]
  model3d?: Media
  usdzModel?: Media
  modelPoster?: Media
  rotationFrames?: Media[]

  specs: ProductSpec[]
  highlights: ProductHighlight[]
  hotspots: ProductHotspot[]
  downloads: Relation<Document>[]

  seoTitle?: string
  seoDescription?: string
  ogImage?: Media

  createdAt: Date
  updatedAt: Date
}
```

### 3.2 ProductSeries

```ts
ProductSeries {
  id: string
  name: string
  slug: string
  description: string
  heroImage: Media
  sortOrder: number
}
```

默认系列：

- Small Tubular Motors
- 59 Series Motors
- 92 Series Motors
- 92 Servo Motors

### 3.3 ProductCategory

```ts
ProductCategory {
  id: string
  name: string
  slug: string
  description: string
}
```

### 3.4 Applications

```ts
Application {
  id: string
  name: string
  slug: string
  description: RichText
  heroImage: Media
  recommendedSeries: Relation<ProductSeries>[]
  recommendedProducts: Relation<Product>[]
  seoTitle?: string
  seoDescription?: string
}
```

应用：

- Sunshade & Blinds
- Curtains
- Small Rolling Shutters
- Garage Doors
- Industrial Doors

### 3.5 Documents

```ts
Document {
  id: string
  title: string
  file: Media
  fileType: 'datasheet' | 'manual' | 'wiring' | 'certificate' | 'catalog' | 'cad' | 'other'
  language: string
  version?: string
  relatedProducts: Relation<Product>[]
  relatedSeries: Relation<ProductSeries>[]
  publishedAt: Date
}
```

### 3.6 Media

需要支持：

- 图片
- PDF
- GLB
- USDZ
- ZIP
- 视频

字段：

```ts
Media {
  id: string
  filename: string
  alt?: string
  mimeType: string
  filesize: number
  url: string
  width?: number
  height?: number
}
```

### 3.7 Inquiries

```ts
Inquiry {
  id: string
  name: string
  company?: string
  email: string
  phone?: string
  country?: string
  productInterest?: Relation<Product>
  application?: Relation<Application>
  expectedQuantity?: string
  message: string
  sourcePage?: string
  status: 'new' | 'contacted' | 'qualified' | 'closed' | 'spam'
  attachment?: Media
  createdAt: Date
}
```

### 3.8 CaseStudies，可第二阶段

```ts
CaseStudy {
  id: string
  title: string
  slug: string
  industry: string
  application: Relation<Application>
  products: Relation<Product>[]
  content: RichText
  images: Media[]
  seoTitle?: string
  seoDescription?: string
}
```

## 4. 规格数据结构

规格不要写死在纯文本里，建议结构化。

```ts
ProductSpec {
  group: 'Performance' | 'Electrical' | 'Mechanical' | 'Control' | 'Environment' | 'Certification'
  key: string
  label: string
  value: string
  unit?: string
  sortOrder: number
  highlight?: boolean
}
```

示例：

```json
{
  "group": "Performance",
  "key": "ratedTorque",
  "label": "Rated Torque",
  "value": "待补充",
  "unit": "Nm",
  "highlight": true
}
```

## 5. API 设计

### 5.1 Public APIs

```txt
GET /api/products
GET /api/products/:slug
GET /api/product-series
GET /api/applications
GET /api/downloads
POST /api/inquiries
GET /api/search?q=
```

### 5.2 Admin APIs

如果使用 Payload CMS，大部分 Admin API 由 Payload 提供。
自定义接口只保留必要功能：

```txt
POST /api/admin/revalidate
POST /api/admin/model-validate
```

## 6. 表单处理

### 6.1 提交流程

1. 前端提交表单。
2. Zod 校验。
3. 服务端再次校验。
4. 写入 Inquiry。
5. 发送销售通知邮件。
6. 返回成功。
7. 可选：给客户发送确认邮件。

### 6.2 防垃圾

- Honeypot 字段
- IP 频率限制
- Turnstile / reCAPTCHA，可选
- 服务端验证邮箱格式
- 附件类型限制

## 7. 文件存储

建议使用对象存储：

```txt
/r2-bucket
  /images
  /documents
  /models
  /videos
  /downloads
```

3D 文件和 PDF 不要放在 Git repo 里。

## 8. 权限

角色建议：

| 角色 | 权限 |
|---|---|
| Admin | 全部 |
| Editor | 产品、文章、下载、SEO |
| Sales | 查看和更新询盘 |
| Viewer | 只读 |

## 9. 数据迁移与 Seed

MVP 阶段需要准备 seed 数据：

- 4 个产品系列
- 4-8 个产品
- 4 个应用场景
- 8-20 个规格字段
- 3-5 个下载文件
- 1-4 个 3D 模型或 poster

## 10. 后端验收标准

- 管理员能登录后台。
- 后台能创建/编辑/发布产品。
- 产品能关联系列、应用、下载文件和 3D 模型。
- 前台产品页能读取 CMS 数据。
- 表单能创建 Inquiry。
- 邮件通知能正常发送。
- 下载文件权限和 URL 正常。
- SEO 字段能在前台输出。
- 数据库 migration 可重复执行。
- 生产环境变量完整。
