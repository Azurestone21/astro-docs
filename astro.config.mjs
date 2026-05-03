import { defineConfig } from "astro/config";
import astroExpressiveCode from "astro-expressive-code";
import mdx from "@astrojs/mdx";

export default defineConfig({
  integrations: [astroExpressiveCode(), mdx()],
  devToolbar: {
    enabled: false,
  },
});
