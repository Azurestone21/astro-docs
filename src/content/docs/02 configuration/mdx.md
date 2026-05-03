---
title: 使用mdx
category: 配置
weight: 2
---

> Astro 原生支持 Markdown (.md)，但如果想在 Markdown 中直接使用 JSX 表达式或 UI 组件，就需要使用更强大的 MDX。Astro 将这个能力封装成了一个官方集成 @astrojs/mdx。

官方文档：[@astrojs/mdx](https://docs.astro.build/zh-cn/guides/integrations-guide/mdx/)

## 安装

```bash
npm install @astrojs/mdx
```

## 配置

```js
// astro.config.mjs
import { defineConfig } from "astro/config";
import mdx from "@astrojs/mdx";

export default defineConfig({
  // ...
  integrations: [mdx()],
});
```
