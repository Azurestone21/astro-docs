---
title: 开始新项目
category: 开始
weight: 2
---

## 创建项目

```bash
npm create astro@latest [my-project]
cd [my-project]
```


### 安装依赖

```bash
npm install
```


## 运行项目

```bash
npm run dev
```

## 目录和文件

Astro 采用一套约定俗成的文件夹布局来管理项目。每个 Astro 项目的根目录下都应该包括以下目录和文件：

- `src/*` - 项目源代码（组件、页面、样式、图片等）。
- `public/*` - 非代码、未处理的资源（字体、图标等）。
- `package.json` - 项目清单。
- `astro.config.mjs` - Astro 配置文件（推荐）。
- `tsconfig.json` - TypeScript 配置文件（推荐）。

