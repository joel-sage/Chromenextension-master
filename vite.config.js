/* eslint-disable no-undef */
import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import copy from "rollup-plugin-copy";
// https://vitejs.dev/config/
export default defineConfig({
  plugins: [
    react(),
    copy({
      targets: [
        { src: "src/manifest.json", dest: "dist" },
        { src: "src/assets", dest: "dist" },
      ],
      hook: "writeBundle",
    }),
  ],
  // define: {
  //   'process.env': {}
  // },
  build: {
    rollupOptions: {
      input: ["index.html", "src/background.ts", "src/contentScript.ts"],
      output: {
        chunkFileNames: "[name].[hash].js",
        assetFileNames: "[name].[hash].[ext]",
        entryFileNames: "[name].js",
        dir: "dist",
      }
    },
  },
});