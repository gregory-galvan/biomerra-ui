import type { Preview } from "@storybook/react";
import React from "react";
import { BiomeProvider } from "@react";

const preview: Preview = {
  decorators: [
    (Story) => React.createElement(
      BiomeProvider,
      { biome: "redwood-forest", children: React.createElement(
        "div",
        {
          style: {
            minHeight: "100vh",
            backgroundColor: "var(--bm-bg)",
            color: "var(--bm-text)",
            padding: "2rem"
          }
        },
        React.createElement(Story)
      ) }
    )
  ]
};

export default preview;
