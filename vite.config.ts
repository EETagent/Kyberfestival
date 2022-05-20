import { defineConfig } from "vite";
import solidPlugin from "vite-plugin-solid";
import WindiCSS from "vite-plugin-windicss";

export default defineConfig({
  plugins: [solidPlugin(), WindiCSS()],
  build: {
    target: ["safari12", "firefox78"],
    rollupOptions: {
      output: {
        assetFileNames: "[name].[ext]",
      },
    },
  },
});
