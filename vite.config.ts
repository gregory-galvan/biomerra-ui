import { defineConfig } from "vite";
import { resolve } from "path";

export default defineConfig({
  resolve: {
    alias: {
      "@react": resolve(__dirname, "packages/react/src"),
      "@tokens": resolve(__dirname, "packages/tokens/src")
    }
  }
});
