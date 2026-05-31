# Codex 从零开始操作手册

## 1. 准备项目目录

在 PowerShell 中执行：

```powershell
cd D:\webGL
mkdir tubular-motor-website
cd tubular-motor-website
git init
mkdir docs
mkdir docs\tubular_motor_website_docs
```

然后把之前生成的 11 个项目文档复制到：

```txt
D:\webGL\tubular-motor-website\docs\tubular_motor_website_docs
```

再把本 Codex 文件包里的内容复制到项目根目录：

```txt
AGENTS.md
codex-prompts\
skills\
.codex\
README_Codex_执行总览.md
```

## 2. 启动 Codex 的建议方式

推荐从项目根目录启动 Codex。

示例：

```powershell
cd D:\webGL\tubular-motor-website
codex --sandbox workspace-write --ask-for-approval on-request
```

如果你的 Codex 版本参数不同，以你本机 `codex --help` 为准。

新手建议保持：

- sandbox：只允许在当前 workspace 写文件；
- approval：需要越界或高风险操作时询问；
- 不要一开始就给完全无限权限。

## 3. 第一次对话

进入 Codex 后，不要直接让它写代码。

先复制：

```txt
请先读取 AGENTS.md 和 docs/tubular_motor_website_docs 中的全部 Markdown 文档。

本轮不要写代码，不要创建文件，不要运行命令。

请输出：
1. 项目一句话定位；
2. 目标用户；
3. MVP 功能范围；
4. 页面结构；
5. 前端模块；
6. 后端/CMS 模块；
7. 3D/360 查看器实现方案；
8. 推荐开发阶段；
9. 第一阶段应该做什么；
10. 风险点和需要我补充的资料。

严格要求：
- 不要编造产品参数；
- 不要一次性做完整项目；
- 不要跳到 CMS / 3D / 部署。
```

如果回答正确，再进入阶段 0 或阶段 1。

## 4. 每个阶段的工作节奏

```txt
复制阶段 prompt
↓
Codex 列计划
↓
你确认
↓
Codex 修改文件
↓
本地运行 npm run dev / lint / build
↓
报错就用 fix-error-only prompt
↓
用 review prompt 检查
↓
git commit
↓
下一阶段
```

## 5. 每阶段完成后提交

示例：

```powershell
git add .
git commit -m "stage 1: initialize next app"
```

不要等整个项目完成再提交。

## 6. 报错时不要乱问

错误时只问：

```txt
运行 [命令] 后出现以下错误。请只修复这个错误，不要重构无关代码：

[粘贴完整错误]
```

## 7. Codex 不能做什么

不要让 Codex：

- 一次性完成整个项目；
- 编造真实电机参数；
- 删除 docs；
- 删除 `.git`；
- 提前接 CMS；
- 提前做部署；
- 把所有页面和后台混在一个任务里；
- 没有 fallback 就做 3D；
- 只做视觉，不做产品查找和询盘。
