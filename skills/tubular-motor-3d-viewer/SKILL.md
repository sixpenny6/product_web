---
name: tubular-motor-3d-viewer
description: Use this skill when implementing or debugging the 3D/360 product viewer with React Three Fiber, drei, GLB loading, hotspots and fallback UI.
---

# Tubular Motor 3D Viewer Skill

Follow:

```txt
docs/tubular_motor_website_docs/04_360产品查看器技术方案.md
```

## Requirements

- Use React Three Fiber and drei.
- Lazy-load heavy 3D components.
- Show poster fallback when model3d is missing.
- Show error fallback when GLB fails to load.
- Support OrbitControls for mouse drag and touch rotation.
- Limit zoom range.
- Include loading state.
- Include reset view.
- Include fullscreen if feasible.
- Hotspots must open readable drawer or panel.
- The 3D canvas must not trap mobile scrolling.
- 3D UI must not cover Get Quote or Download buttons.
- Do not store heavy GLB files in Git long-term.
- Keep model URLs configurable from product data or CMS.

## Fallback Priority

1. GLB model
2. 360 image sequence
3. Poster image
4. Static placeholder with message
