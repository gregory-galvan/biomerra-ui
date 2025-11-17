import React, { createContext, useContext, useMemo } from "react";
import { biomes, BiomeName, BiomeTokens } from "@biomerra-ui/tokens";

type BiomeContextValue = {
  biomeName: BiomeName;
  tokens: BiomeTokens;
};

const BiomeContext = createContext<BiomeContextValue | null>(null);

export type BiomeProviderProps = {
  biome?: BiomeName;
  children: React.ReactNode;
};

export const BiomeProvider: React.FC<BiomeProviderProps> = ({
  biome = "redwood-forest",
  children
}) => {
  const tokens = biomes[biome];

  const value = useMemo(
    () => ({
      biomeName: biome,
      tokens
    }),
    [biome, tokens]
  );

  const cssVars = {
    "--bm-bg": tokens.colors.bg,
    "--bm-surface": tokens.colors.surface,
    "--bm-primary": tokens.colors.primary,
    "--bm-primary-soft": tokens.colors.primarySoft,
    "--bm-text": tokens.colors.text,
    "--bm-text-muted": tokens.colors.textMuted,
    "--bm-border": tokens.colors.border,
    "--bm-accent": tokens.colors.accent
  } as React.CSSProperties;

  return (
    <BiomeContext.Provider value={value}>
      <div style={cssVars} data-biome={biome}>
        {children}
      </div>
    </BiomeContext.Provider>
  );
};

export const useBiome = () => {
  const ctx = useContext(BiomeContext);
  if (!ctx) throw new Error("useBiome must be used within a BiomeProvider");
  return ctx;
};
