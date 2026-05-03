---
title: 内容集合
category: 内容
weight: 1
---

## 配置

```ts
// src/content.config.ts
import { defineCollection, z } from "astro:content";
import { glob } from "astro/loaders";

const docs = defineCollection({
  // 加载器：匹配 src/content/docs/ 下所有 .md 或 .mdx 文件（包括子文件夹）
  loader: glob({ pattern: "**/*.{md,mdx}", base: "./src/content/docs" }),
});

export const collections = { docs };
```

## 获取文档集合

```astro
---
// src/pages/docs/[...slug].astro
import { getCollection } from "astro:content"; // 导入类型

const allDocs = await getCollection("docs");
---
```

## 获取当前文档详情

```astro
---
import { render, type CollectionEntry } from "astro:content"; // 导入类型

type DocEntry = CollectionEntry<"docs">;

const { doc } = Astro.props as { doc: DocEntry };
const { Content } = await render(doc);
---

<div class="doc-container">
  <Content />
</div>
```
