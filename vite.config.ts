import path from "node:path";
import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

export default defineConfig({
  resolve: {
    alias: {
      "@shadcn-ui": path.resolve(__dirname, "./src/components/shadcn/ui"),
      "@public": path.resolve(__dirname, "./public"),
      "@data": path.resolve(__dirname, "./src/data"),
      "@assets": path.resolve(__dirname, "./src/assets"),
      "@pages": path.resolve(__dirname, "./src/pages"),
      "@utils": path.resolve(__dirname, "./src/utils"),
      "@defines": path.resolve(__dirname, "./src/defines"),
      "@hooks": path.resolve(__dirname, "./src/hooks"),
      "@styles": path.resolve(__dirname, "./src/styles"),
      "@sections": path.resolve(__dirname, "./src/sections"),
      "@providers": path.resolve(__dirname, "./src/providers"),
      "@components": path.resolve(__dirname, "./src/components"),
    },
  },

  plugins: [react()],
  build: {
    outDir: "../static",
    emptyOutDir: true,
    sourcemap: true,
  },
  server: {
    proxy: {
      "/api": {
        target: "http://127.0.0.1:5000/",
        changeOrigin: true,
        secure: false,
        rewrite: (path) => path.replace(/^\/api/, ""),
      },
    },
  },
});
