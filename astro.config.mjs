import { defineConfig } from "astro/config";
import WindiCSS from "vite-plugin-windicss";
import solid from "@astrojs/solid-js";

// https://astro.build/config
export default defineConfig({
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
  integrations: [solid()],
});
