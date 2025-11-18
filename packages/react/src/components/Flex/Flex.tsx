import React from "react";

export type FlexDirection = "row" | "row-reverse" | "column" | "column-reverse";
export type FlexAlignItems =
  | "stretch"
  | "center"
  | "flex-start"
  | "flex-end"
  | "baseline";
export type FlexJustifyContent =
  | "flex-start"
  | "flex-end"
  | "center"
  | "space-between"
  | "space-around"
  | "space-evenly";

export type FlexProps = React.HTMLAttributes<HTMLDivElement> & {
  direction?: FlexDirection;
  alignItems?: FlexAlignItems;
  justifyContent?: FlexJustifyContent;
  gap?: string;
};

export const Flex: React.FC<FlexProps> = ({
  direction = "row",
  alignItems = "stretch",
  justifyContent = "flex-start",
  gap = "0",
  style,
  children,
  ...rest
}) => {
  const combinedStyle: React.CSSProperties = {
    display: "flex",
    flexDirection: direction,
    alignItems: alignItems,
    justifyContent: justifyContent,
    gap: gap,
    ...style,
  };

  return (
    <div
      style={combinedStyle}
      {...rest}
    >
      {children}
    </div>
  );
};
