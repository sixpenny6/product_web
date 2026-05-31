# 验收、测试、SEO 与部署

## 1. 功能验收

### 1.1 导航

- 顶部导航可进入所有主要页面。
- Products Mega Menu 清楚展示四大系列。
- Get Quote 按钮全站可见。
- 移动端菜单可正常展开和关闭。

### 1.2 首页

- 首屏清楚说明公司产品。
- 产品系列入口明确。
- 应用场景可点击。
- CTA 明确且可点击。
- 页面动效不影响阅读。

### 1.3 产品列表

- 筛选可用。
- 产品卡信息完整。
- Compare 可添加和移除产品。
- 空结果有提示。
- 移动端筛选体验可用。

### 1.4 产品详情

- 产品名、系列、应用和 CTA 清楚。
- 3D/360 查看器可用。
- 规格表结构化。
- 下载文件可点击。
- 相关产品显示正确。
- 询盘表单能带入产品信息。

### 1.5 询盘

- 必填字段校验。
- 邮箱格式校验。
- 提交后进入后台。
- 销售收到通知邮件。
- 重复提交有限制。
- 错误状态清楚。

### 1.6 CMS

- 管理员能创建产品。
- 管理员能上传图片、PDF、GLB。
- 管理员能维护规格。
- 管理员能查看询盘。
- 草稿内容不会出现在前台。

## 2. 3D 查看器验收

- 桌面端可拖拽旋转。
- 移动端可滑动旋转。
- 可以 reset view。
- 可以全屏。
- 热点可点击。
- 热点信息正确。
- 模型加载失败时有 fallback。
- 弱网下先显示 poster。
- 页面不会因为模型加载而空白。

## 3. 性能验收

建议目标：

| 指标 | 目标 |
|---|---|
| LCP | 小于 2.5s，复杂 3D 页可适度放宽 |
| CLS | 小于 0.1 |
| INP | 小于 200ms |
| JS 初始包 | 尽量控制，3D 组件懒加载 |
| 图片 | 使用 next/image |
| 3D 模型 | 懒加载，不阻塞首屏 |

## 4. SEO 验收

### 4.1 页面 Metadata

每个页面要有：

- title
- description
- canonical
- Open Graph
- Twitter Card，可选

### 4.2 产品页 SEO

产品页 title 格式：

```txt
[Product Name] | Tubular Motor for [Application] | Brand Name
```

description 格式：

```txt
Explore [Product Name], a tubular motor solution for [application]. View specs, installation details, downloads and 360° product view.
```

### 4.3 Sitemap

需要包含：

- 首页
- 产品系列页
- 产品详情页
- 应用场景页
- 下载中心
- 关于
- 联系

### 4.4 结构化数据

可选：

- Organization
- Product
- BreadcrumbList
- FAQPage

注意：如果没有公开价格，不要乱填 offers.price。

## 5. 可访问性验收

- 按钮和链接有 focus-visible。
- 图片有 alt。
- 表单 label 正确。
- 错误信息可读。
- 颜色对比足够。
- 3D 查看器提供替代文本和 fallback。
- 键盘能操作导航和表单。

## 6. 安全验收

- 后台需要登录。
- 表单服务端校验。
- 文件上传限制类型和大小。
- 环境变量不进 Git。
- API 不暴露管理接口。
- 邮件发送做频率限制。
- 数据库备份策略明确。

## 7. 部署方案

### 推荐方案 A：Vercel + Managed Postgres + R2

适合快速上线。

- Frontend/Next.js：Vercel
- Database：Supabase / Neon / Prisma Postgres / Railway Postgres
- Object Storage：Cloudflare R2
- Email：Resend / SendGrid / SMTP
- DNS/CDN：Cloudflare

### 方案 B：Railway / Render 全栈部署

适合想把应用、数据库和后台放在更统一的平台。

### 方案 C：自建服务器

适合公司已有服务器和运维人员。需要自己处理：

- Node 进程管理
- Nginx
- SSL
- PostgreSQL
- 文件存储
- 备份
- 监控

## 8. 环境变量示例

```env
DATABASE_URL=
PAYLOAD_SECRET=
NEXT_PUBLIC_SITE_URL=
R2_ACCOUNT_ID=
R2_ACCESS_KEY_ID=
R2_SECRET_ACCESS_KEY=
R2_BUCKET=
R2_PUBLIC_URL=
EMAIL_FROM=
SALES_NOTIFY_EMAIL=
RESEND_API_KEY=
```

## 9. 上线前 Checklist

- [ ] 所有页面无 404
- [ ] 产品数据完整
- [ ] 询盘测试通过
- [ ] 下载测试通过
- [ ] 3D 模型加载测试通过
- [ ] 移动端测试通过
- [ ] SEO metadata 检查完成
- [ ] sitemap 可访问
- [ ] robots.txt 可访问
- [ ] 后台账号权限确认
- [ ] 数据库备份确认
- [ ] 域名 HTTPS 正常
- [ ] 表单邮件不进垃圾箱，或已设置 SPF/DKIM
- [ ] Lighthouse 基础分数达标
