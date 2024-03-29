import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import path from "path";

export default defineConfig({
  plugins: [react()],
  resolve: {
    alias: {
      "@/components": path.resolve(__dirname, "src/components"),
      "@/data": path.resolve(__dirname, "src/data"),
      "@/css": path.resolve(__dirname, "src/css"),
      "@/assets": path.resolve(__dirname, "src/assets"),
      "@/pages": path.resolve(__dirname, "src/pages"),
    },
  },
});