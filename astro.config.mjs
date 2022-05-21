import { defineConfig } from "astro/config";
import solid from "@astrojs/solid-js";
import sitemap from "@astrojs/sitemap";

import WindiCSS from "vite-plugin-windicss";

// https://astro.build/config
export default defineConfig({
  site: "https://kyberfestival.cz",
  vite: {
    plugins: [WindiCSS()],
    build: {
      target: ["safari12", "firefox78"],
      rollupOptions: {
        output: {
          assetFileNames: "[name].[ext]",
        },
      },
    },
  },
  integrations: [solid(), sitemap()],
});
