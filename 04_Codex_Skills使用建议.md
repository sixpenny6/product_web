# Codex Skills 使用建议

## 1. 前期是否需要 Skill

前期不需要。

阶段 0 到阶段 7，用 `AGENTS.md` + `codex-prompts` 就够。

## 2. 什么时候引入 Skill

建议从阶段 8 开始考虑 Skill，因为 3D、CMS、部署属于重复且专业的任务。

推荐 Skill：

```txt
skills/tubular-motor-frontend
skills/tubular-motor-3d-viewer
skills/tubular-motor-cms
skills/tubular-motor-deployment
```

## 3. Skill 的作用

Skill 用来固定某类复杂任务的做法。

例如 3D viewer skill 可以要求：

- React Three Fiber；
- GLB 懒加载；
- fallback；
- hotspot；
- mobile scroll 不被锁死；
- CTA 不被遮挡。

## 4. 新手建议

先不要花太多时间做复杂 Skill。你可以先用本包给的简单 `SKILL.md`，等 Codex 在某个模块反复犯错，再把错误总结进对应 Skill。
