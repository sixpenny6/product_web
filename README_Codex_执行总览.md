# Codex 推进管状电机官网项目：执行总览

## 1. 这个文件包是什么

这是专门为 Codex 准备的项目推进文件包，用于帮助你把“管状电机官网”从 0 推进到可运行、可测试、可部署的工程。

它假设你的项目目标是：

- 制作一个 B2B 管状电机官网；
- 风格参考 DJI Osmo Pocket 3、Dyson OnTrac、Razer Blade 16；
- 产品 360°/3D 查看体验参考 Dell PowerEdge XR5610；
- 第一版做产品展示、产品筛选、产品详情、3D/360 查看、下载中心、询盘和 CMS；
- 不做在线支付电商；
- 不编造真实产品参数。

## 2. Codex 专用核心文件

Codex 最重要的项目规则文件是：

```txt
AGENTS.md
```

本包已经包含一个完整的 `AGENTS.md`。你需要把它放到项目根目录。

Codex 阶段提示词放在：

```txt
codex-prompts/
```

可选技能文件放在：

```txt
skills/
```

## 3. 推荐项目目录

建议你的最终目录是：

```txt
D:\webGL\
  tubular-motor-website\
    docs\
      tubular_motor_website_docs\
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

    AGENTS.md
    codex-prompts\
    skills\
    .codex\
```

## 4. 总流程

不要直接让 Codex “完成整个项目”。

正确流程：

```txt
1. 放入 11 个项目文档
2. 放入 AGENTS.md
3. 放入 codex-prompts
4. 启动 Codex
5. 让 Codex 先读文档并复述理解
6. 让 Codex 列阶段计划
7. 一次只执行一个阶段
8. 本地运行验收
9. 修错
10. review
11. git commit
12. 下一阶段
```

## 5. 推荐阶段

```txt
阶段 0：环境检查
阶段 1：项目初始化
阶段 2：基础结构和 Layout
阶段 3：设计系统
阶段 4：首页静态版
阶段 5：产品 Mock 数据
阶段 6：产品列表和筛选
阶段 7：产品详情页
阶段 8：3D/360 查看器 MVP
阶段 9：Payload CMS + PostgreSQL
阶段 10：询盘表单和邮件
阶段 11：搜索、下载、对比增强
阶段 12：SEO、测试、部署准备
```

## 6. 最重要的规则

- 每次只让 Codex 做一个阶段。
- 每个阶段结束后都运行项目。
- 每个阶段结束后都 commit。
- 不要让 Codex 编造管状电机参数。
- 3D 查看器必须有 fallback。
- 表单必须有服务端校验。
- CMS、3D、部署不要提前混在一起做。
