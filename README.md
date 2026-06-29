# Cyber Foundation 官网

香港科技大学AI×Sci-Fi社 (HKUSTSFAIC) 官方网站

## 技术栈

- **框架**: Next.js 14 + React
- **样式**: Tailwind CSS
- **动画**: Framer Motion + GSAP
- **3D效果**: Three.js + React Three Fiber
- **字体**: Space Grotesk, IBM Plex Sans, JetBrains Mono

## 设计特色

- 黑白银配色方案
- 液态玻璃按钮效果 (Liquid Glass Effect)
- Three.js 粒子背景
- 流畅的页面过渡动画
- 响应式设计

## 页面结构

- `/` - 落地页
- `/about` - 社团架构
- `/activities` - 活动中心
- `/projects` - 项目展示
- `/join` - 加入我们
- `/social` - 官方账号

## 开发

```bash
# 安装依赖
npm install

# 启动开发服务器
npm run dev

# 构建生产版本
npm run build
```

## 项目结构

```
cyber-foundation/
├── app/
│   ├── layout.tsx      # 全局布局
│   ├── page.tsx        # 落地页
│   ├── about/          # 社团架构页
│   ├── activities/     # 活动中心页
│   ├── projects/       # 项目展示页
│   ├── join/           # 加入我们页
│   └── social/         # 官方账号页
├── components/         # React 组件
├── lib/               # 工具函数
└── public/            # 静态资源
```

## 设计系统

### 色彩

| 名称 | 色值 | 用途 |
|------|------|------|
| Black Deep | #000000 | 主背景 |
| Silver Bright | #E8E8E8 | 强调文字 |
| Silver Metal | #C0C0C0 | 次要文字 |
| Silver Muted | #8A8A8A | 辅助文字 |

### 字体

- **Display**: Space Grotesk - 标题
- **Body**: IBM Plex Sans - 正文
- **Mono**: JetBrains Mono - 代码/强调

---

© 2026 Cyber Foundation. All rights reserved.
