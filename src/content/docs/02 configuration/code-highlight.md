---
title: 代码高亮
category: 配置
weight: 3
---

## astro-expressive-code

官方文档：[expressive-code](https://expressive-code.com/)

## 安装

```bash
npm install astro-expressive-code
```

## 配置

- 在 `astro.config.mjs` 中添加 `astro-expressive-code` 插件：

```js
// astro.config.mjs
import { defineConfig } from "astro/config";
import astroExpressiveCode from "astro-expressive-code";

export default defineConfig({
  integrations: [astroExpressiveCode()],
});
```

- 在项目根目录创建 `ec.config.mjs` 文件，配置expressive-code

```js
// ec.config.mjs
import { defineEcConfig } from "astro-expressive-code";

export default defineEcConfig({
  themes: ["github-light", "github-dark"], // 配置主题
  useDarkModeMediaQuery: false,
  themeCssSelector: (theme) => {
    if (theme.name === "github-light") return ":root";
    if (theme.name === "github-dark") return '[data-theme="dark"]';
    return `[data-theme="${theme.name}"]`;
  }, // 跟随页面主题切换
  defaultLocale: "zh-CN", // 将界面语言设为简体中文
});
```

## 使用

### 代码组件

```astro
---
import { Code } from 'astro-expressive-code/components'
---

<Code code="console.log('Hello world!')" lang="js" />
```

## 其他

为什么需要配置 `ec.config.mjs` 文件？

`astro-expressive-code` 配置了 `themeCssSelector` 为函数，而 Astro 在构建时会将 `astro.config.mjs` 中的配置序列化为 JSON，但是函数不能被序列化，导致构建失败。出现以下错误：

Your Astro config file contains Expressive Code options that are not serializable to JSON. To use the `<Code>` component, please create a separate config file called ec.config.mjs in your project root, move your Expressive Code options object into the config file, and export it as the default export.

单独的 `ec.config.mjs` 文件会被动态导入，不会经过 JSON 序列化，可以包含任意 JavaScript 逻辑。
