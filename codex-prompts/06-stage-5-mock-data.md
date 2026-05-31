# 06 - Stage 5: Mock Product Data

执行阶段 5：产品 Mock 数据。

请创建：

- `src/types/product.ts`
- `src/lib/mock/products.ts`
- `src/lib/mock/applications.ts`，可选

产品覆盖四大系列：

1. Small Tubular Motors
2. 59 Series Motors
3. 92 Series Motors
4. 92 Servo Motors

Product 字段至少包括：

- slug
- name
- modelNumber
- series
- applications
- shortDescription
- heroImage
- modelPoster
- model3d，可为空
- specs
- highlights
- hotspots
- downloads

规格字段按照 `06_后端_CMS_API_数据模型.md` 的 ProductSpec 设计。

重要：

- 不知道的真实参数必须写 TODO 或 待补充；
- 不允许编造扭矩、电压、速度、防护等级、认证；
- mock 数据是为了页面开发，不代表真实产品资料。
