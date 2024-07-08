import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import { resolve } from "path";
import svgr from "vite-plugin-svgr";

// https://vitejs.dev/config/
export default defineConfig({
  root: "src",
  build: {
    sourcemap: true,
    outDir: "../dist",
    rollupOptions: {
      input: {
        main: resolve(__dirname, "src/index.html"),
      },
    },
  },
  plugins: [react(), svgr()],
  optimizeDeps: {
    force: true,
  },
  resolve: {
    alias: [
      { find: "@views", replacement: resolve(__dirname, "src/views") },
      { find: "@adapters", replacement: resolve(__dirname, "src/adapters") },
      {
        find: "@components",
        replacement: resolve(__dirname, "src/components"),
      },
      { find: "@utils", replacement: resolve(__dirname, "src/utils") },
      { find: "@contexts", replacement: resolve(__dirname, "src/contexts") },
      { find: "@assets", replacement: resolve(__dirname, "src/assets") },
    ],
  },
});
