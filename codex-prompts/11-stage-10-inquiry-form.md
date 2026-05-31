# 11 - Stage 10: Inquiry Form and Email

执行阶段 10：询盘表单和邮件。

请实现 InquiryForm 和 `POST /api/inquiries`。

要求：

1. 前端使用 react-hook-form + zod；
2. 后端再次使用 zod 校验；
3. 字段包括 name、company、email、phone、country、productInterest、application、expectedQuantity、message、attachment 可选；
4. 加 honeypot；
5. 加基础 rate limit；
6. 成功后写入 Inquiries；
7. 成功后发送销售通知邮件；
8. 邮件服务先使用 Resend 或 SMTP 抽象，环境变量缺失时不要让 dev 崩溃；
9. 产品详情页 Get Quote 能带入当前产品。

不要做复杂 CRM。
