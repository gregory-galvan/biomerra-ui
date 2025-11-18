import type { Preview } from "@storybook/react";
import { BiomeProvider } from "@biomerra-ui/react";

const preview: Preview = {
  parameters: {
    actions: { argTypesRegex: "^on[A-Z].*" },
    controls: {
      matchers: {
        color: /(background|color)$/i,
        date: /Date$/,
      },
    },
    layout: "padded",
  },
  decorators: [
    (Story, context) => (
      <BiomeProvider biome={context.globals?.biome ?? "redwood-forest"}>
        <div
          style={{
            minHeight: "100vh",
            backgroundColor: "var(--bm-bg)",
            color: "var(--bm-text)",
            padding: "2rem",
          }}
        >
          <Story />
        </div>
      </BiomeProvider>
    ),
  ],
};

export default preview;
