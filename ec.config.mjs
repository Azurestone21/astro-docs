// ec.config.mjs
import { defineEcConfig } from "astro-expressive-code";

export default defineEcConfig({
  themes: ["github-light", "github-dark"],
  useDarkModeMediaQuery: false,
  themeCssSelector: (theme) => {
    if (theme.name === "github-light") return ":root";
    if (theme.name === "github-dark") return '[data-theme="dark"]';
    return `[data-theme="${theme.name}"]`;
  },
  defaultLocale: "zh-CN", // 将界面语言设为简体中文
});
