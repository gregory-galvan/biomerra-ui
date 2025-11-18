import { defineConfig } from "vite";
import { resolve } from "path";

export default defineConfig({
  resolve: {
    alias: {
      "@react": resolve(__dirname, "packages/react/src"),
      "@react/*": resolve(__dirname, "packages/react/src/*"),
      "@tokens": resolve(__dirname, "packages/tokens/src"),
      "@tokens/*": resolve(__dirname, "packages/tokens/src/*"),
      "@/*": resolve(__dirname, "packages/react/src/*"),
      "@biomerra-ui/react": resolve(__dirname, "packages/react/src"),
      "@biomerra-ui/tokens": resolve(__dirname, "packages/tokens/src"),
      "@biomerra-ui/react/*": resolve(__dirname, "packages/react/src/*"),
      "@biomerra-ui/tokens/*": resolve(__dirname, "packages/tokens/src/*"),
    },
  },
});
