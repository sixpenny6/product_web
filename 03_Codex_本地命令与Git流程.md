# 本地命令与 Git 流程

## 1. 常用命令

查看环境：

```powershell
node -v
npm -v
git --version
```

运行开发服务器：

```powershell
npm run dev
```

检查代码：

```powershell
npm run lint
```

生产构建：

```powershell
npm run build
```

## 2. 每阶段提交

每个阶段通过后：

```powershell
git status
git add .
git commit -m "stage X: stage name"
```

示例：

```powershell
git commit -m "stage 4: build static homepage"
```

## 3. 出错不要立刻回滚

先把错误复制给 Codex：

```txt
运行 npm run dev 后出现以下错误。请只修复这个错误，不要重构无关代码：

[错误]
```

## 4. 什么时候回滚

只有在以下情况考虑回滚：

- Codex 大量改坏 unrelated 文件；
- 项目完全跑不起来且修复多轮无效；
- 它删除了重要文档；
- 它提前做了错误架构。

新手不建议手动执行高风险命令。需要回滚时先问 Codex 让它解释影响范围，再手动决定。

## 5. 每阶段验收后再继续

不要连续执行多个阶段再测试。

正确节奏：

```txt
阶段执行
运行
修错
review
commit
下一阶段
```
