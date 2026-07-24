import react from "@vitejs/plugin-react";
import { defineConfig } from "vite";
import tsconfigPaths from "vite-tsconfig-paths";

import { cloudflare } from "@cloudflare/vite-plugin";

export default defineConfig({
  plugins: [react(), tsconfigPaths(), cloudflare()],
  build: {
    sourcemap: false,
    cssCodeSplit: true,
    chunkSizeWarningLimit: 900,
  },
});