/* eslint-disable no-undef */
import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import path from "path";

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  resolve: {
    alias: {
      "@/components": path.resolve(__dirname, "./src/components"),
      "@/ui": path.resolve(__dirname, "./src/components/ui"),
      "@/store": path.resolve(__dirname, "./src/store"),
      "@/utils": path.resolve(__dirname, "./src/utils"),
      "@/api": path.resolve(__dirname, "./src/api"),
    },
  },
});
