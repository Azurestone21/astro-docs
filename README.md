# Astro 学习文档

该项目是一个基于 Astro 框架的文档网站，用于学习 Astro 框架。

## 项目命令

| 命令                      | 功能                                               |
| :------------------------ | :------------------------------------------------- |
| `npm install`             | 安装项目依赖                                       |
| `npm run dev`             | 启动本地开发服务器，监听端口 4321                  |
| `npm run build`           | 构建生产站点到 ./dist/ 目录                        |
| `npm run preview`         | 预览本地构建，部署前检查错误                       |
| `npm run astro ...`       | 运行 Astro CLI 命令，如 `astro add`, `astro check` |
| `npm run astro -- --help` | 获取 Astro CLI 帮助信息                            |

## 项目结构

```text
astro-demo/
├── .vscode/                    # VS Code 配置
│   ├── extensions.json
│   └── launch.json
├── public/                     # 静态资源（直接复制到 dist）
│   ├── favicon.ico
│   └── favicon.svg
├── src/
│   ├── assets/                 # 构建时处理的资源
│   │   ├── astro.svg
│   │   └── background.svg
│   ├── components/             # 可复用组件
│   │   ├── Card.astro          # 卡片组件（带渐变边框）
│   │   └── Navbar.astro        # 导航栏组件（毛玻璃效果、主题切换）
│   ├── content/                # 内容集合
│   │   ├── docs/               # 文档内容
│   │   │   ├── 01 start/       # 开始篇
│   │   │   │   └── new-project.md
│   │   │   ├── 02 configuration/ # 配置篇
│   │   │   │   ├── alias.md
│   │   │   │   ├── code-highlight.md
│   │   │   │   └── mdx.md
│   │   │   ├── 03 content/     # 内容篇
│   │   │   │   └── content-collections.md
│   │   │   └── index.md        # 文档首页
│   │   └── content.config.ts   # 内容集合配置
│   ├── layouts/                 # 布局组件
│   │   └── Layout.astro        # 主布局
│   ├── pages/                   # 页面（文件即路由）
│   │   ├── docs/
│   │   │   └── [...slug].astro # 动态路由（文档详情页）
│   │   └── index.mdx           # 首页
│   ├── styles/                  # 全局样式
│   │   └── global.css          # 主题变量、全局样式
│   └── utils/                   # 工具函数
│       └── theme.ts             # 主题切换工具
├── astro.config.mjs             # Astro 配置
├── ec.config.mjs                # Expressive Code 配置
├── package.json                 # 依赖和脚本
└── tsconfig.json                # TypeScript 配置
```
