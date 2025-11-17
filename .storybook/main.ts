import { mergeConfig } from "vite";
import { resolve } from "path";
import tsconfigPaths from "vite-tsconfig-paths";
import type { StorybookConfig } from "@storybook/react-vite";
import type { InlineConfig } from "vite";

interface ViteAliasConfig {
  "@react": string;
  "@tokens": string;
}

const config: StorybookConfig = {
  stories: ["../packages/react/src/**/*.stories.@(ts|tsx)"],
  addons: [
    "@storybook/addon-essentials",
    "@storybook/addon-interactions"
  ],
  framework: {
    name: "@storybook/react-vite",
    options: {}
  },
  viteFinal: async (config: InlineConfig): Promise<InlineConfig> => {
    return mergeConfig(config, {
      plugins: [tsconfigPaths()],
      resolve: {
        alias: {
          "@react": resolve(__dirname, "../packages/react/src"),
          "@tokens": resolve(__dirname, "../packages/tokens/src")
        } as ViteAliasConfig
      }
    });
  }
};

export default config;
