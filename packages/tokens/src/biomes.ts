export type BiomeName =
  | "redwood-forest"
  | "deep-ocean"
  | "desert-sands"
  | "sunset-canyon";

export type BiomeTokens = {
  name: BiomeName;
  colors: {
    bg: string;
    surface: string;
    primary: string;
    primarySoft: string;
    text: string;
    textMuted: string;
    border: string;
    accent: string;
  };
  radius: {
    sm: string;
    md: string;
    lg: string;
    pill: string;
  };
  spacing: {
    x1: string;
    x2: string;
    x3: string;
    x4: string;
    x5: string;
    x6: string;
    x7: string;
    x8: string;
  };
};

export const biomes: Record<BiomeName, BiomeTokens> = {
  "redwood-forest": {
    name: "redwood-forest",
    colors: {
      bg: "#050807",
      surface: "#0C1411",
      primary: "#3F7C5D",
      primarySoft: "#214836",
      text: "#F3F7F4",
      textMuted: "#9BAAA3",
      border: "#1C2822",
      accent: "#B5743A",
    },
    radius: {
      sm: "calc(0.25rem * 1)",
      md: "calc(0.25rem * 2)",
      lg: "calc(0.25rem * 3)",
      pill: "999px",
    },
    spacing: {
      x1: "calc(0.125rem * 1)",
      x2: "calc(0.125rem * 2)",
      x3: "calc(0.125rem * 3)",
      x4: "calc(0.125rem * 4)",
      x5: "calc(0.125rem * 5)",
      x6: "calc(0.125rem * 6)",
      x7: "calc(0.125rem * 7)",
      x8: "calc(0.125rem * 8)",
    },
  },

  "deep-ocean": {
    name: "deep-ocean",
    colors: {
      bg: "#02050A",
      surface: "#050A13",
      primary: "#2F6C9B",
      primarySoft: "#163955",
      text: "#F3F6FA",
      textMuted: "#9BA7B8",
      border: "#1A2836",
      accent: "#57C0D8",
    },
    radius: {
      sm: "calc(0.25rem * 1)",
      md: "calc(0.25rem * 2)",
      lg: "calc(0.25rem * 3)",
      pill: "999px",
    },
    spacing: {
      x1: "calc(0.125rem * 1)",
      x2: "calc(0.125rem * 2)",
      x3: "calc(0.125rem * 3)",
      x4: "calc(0.125rem * 4)",
      x5: "calc(0.125rem * 5)",
      x6: "calc(0.125rem * 6)",
      x7: "calc(0.125rem * 7)",
      x8: "calc(0.125rem * 8)",
    },
  },

  "desert-sands": {
    name: "desert-sands",
    colors: {
      bg: "#19110A",
      surface: "#25170A",
      primary: "#C4893A",
      primarySoft: "#5B3A17",
      text: "#FAF3E6",
      textMuted: "#B9AA93",
      border: "#3A2613",
      accent: "#E3A85E",
    },
    radius: {
      sm: "calc(0.25rem * 1)",
      md: "calc(0.25rem * 2)",
      lg: "calc(0.25rem * 3)",
      pill: "999px",
    },
    spacing: {
      x1: "calc(0.125rem * 1)",
      x2: "calc(0.125rem * 2)",
      x3: "calc(0.125rem * 3)",
      x4: "calc(0.125rem * 4)",
      x5: "calc(0.125rem * 5)",
      x6: "calc(0.125rem * 6)",
      x7: "calc(0.125rem * 7)",
      x8: "calc(0.125rem * 8)",
    },
  },

  "sunset-canyon": {
    name: "sunset-canyon",
    colors: {
      bg: "#130910",
      surface: "#1E0D18",
      primary: "#C8636F",
      primarySoft: "#5A2430",
      text: "#FCEBF1",
      textMuted: "#C19AA9",
      border: "#3F1A2A",
      accent: "#F59654",
    },
    radius: {
      sm: "calc(0.25rem * 1)",
      md: "calc(0.25rem * 2)",
      lg: "calc(0.25rem * 3)",
      pill: "999px",
    },
    spacing: {
      x1: "calc(0.125rem * 1)",
      x2: "calc(0.125rem * 2)",
      x3: "calc(0.125rem * 3)",
      x4: "calc(0.125rem * 4)",
      x5: "calc(0.125rem * 5)",
      x6: "calc(0.125rem * 6)",
      x7: "calc(0.125rem * 7)",
      x8: "calc(0.125rem * 8)",
    },
  },
};
