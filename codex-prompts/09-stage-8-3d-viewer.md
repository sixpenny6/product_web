# 09 - Stage 8: 3D/360 Viewer MVP

执行阶段 8：3D/360 查看器 MVP。

请根据 `04_360产品查看器技术方案.md` 实现 ProductViewer3D。

技术：

- three
- @react-three/fiber
- @react-three/drei

功能：

1. model3d 存在时懒加载 GLB；
2. model3d 不存在时显示 modelPoster fallback；
3. OrbitControls 拖拽旋转；
4. 限制 zoom 范围；
5. Auto Rotate 开关；
6. Reset View；
7. Fullscreen；
8. Loading 状态；
9. Hotspots；
10. HotspotDrawer；
11. WebGL 或模型加载失败时 fallback；
12. 移动端可触控。

要求：

- 3D 组件必须 dynamic import，避免影响首屏；
- 不要让 Canvas 阻止整个页面滚动；
- 不要让 3D 模块遮挡 CTA；
- 不要把真实 GLB 文件放进 Git，用 public/placeholders 或远程 URL 占位。
