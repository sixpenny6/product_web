# 10 - Stage 9: Payload CMS and PostgreSQL

执行阶段 9：Payload CMS + 数据库。

请根据 `06_后端_CMS_API_数据模型.md` 集成 Payload CMS。

Collections：

- Products
- ProductSeries
- ProductCategories
- Applications
- Documents
- Media
- Inquiries

要求：

1. 使用 PostgreSQL；
2. Media 支持图片、PDF、GLB、USDZ、ZIP；
3. Products 支持 specs、hotspots、downloads、model3d、modelPoster、SEO；
4. Inquiries 用于保存询盘；
5. 加入基础访问权限；
6. 创建 seed 脚本；
7. 不要移除现有 mock 页面，先让 CMS 和 mock 可并存；
8. 不要编造真实参数。

请先输出你准备安装的包、修改的文件、需要的环境变量。确认后再修改。
