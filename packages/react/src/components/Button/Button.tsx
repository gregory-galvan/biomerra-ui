import React from "react";
import { useBiome } from "../../theme/BiomeProvider";

export type ButtonVariant = "primary" | "soft" | "ghost" | "outline";
export type ButtonSize = "sm" | "md" | "lg";

export type ButtonProps = React.ButtonHTMLAttributes<HTMLButtonElement> & {
  variant?: ButtonVariant;
  size?: ButtonSize;
};

export const Button: React.FC<ButtonProps> = ({
  variant = "primary",
  size = "md",
  children,
  ...rest
}) => {
  const { tokens } = useBiome();

  const padding =
    size === "sm"
      ? "6px 10px"
      : size === "lg"
      ? "12px 18px"
      : "8px 14px";

  const base: React.CSSProperties = {
    borderRadius: tokens.radius.md,
    padding,
    fontSize: "0.9rem",
    fontWeight: 500,
    borderWidth: 1,
    borderStyle: "solid",
    cursor: "pointer",
    transition: "transform 120ms ease-out, box-shadow 120ms ease-out",
    outline: "none"
  };

  let colors: React.CSSProperties = {};
  if (variant === "primary") {
    colors = {
      backgroundColor: tokens.colors.primary,
      color: tokens.colors.text,
      borderColor: tokens.colors.border
    };
  } else if (variant === "soft") {
    colors = {
      backgroundColor: tokens.colors.primarySoft,
      color: tokens.colors.text,
      borderColor: tokens.colors.border
    };
  } else if (variant === "ghost") {
    colors = {
      backgroundColor: "transparent",
      color: tokens.colors.text,
      borderColor: "transparent"
    };
  } else if (variant === "outline") {
    colors = {
      backgroundColor: "transparent",
      color: tokens.colors.text,
      borderColor: tokens.colors.border
    };
  }

  const [hover, setHover] = React.useState(false);
  const [active, setActive] = React.useState(false);

  const interactive: React.CSSProperties = {
    transform: active ? "scale(0.97)" : hover ? "scale(1.02)" : "scale(1)"
  };

  return (
    <button
      {...rest}
      style={{ ...base, ...colors, ...interactive, ...(rest.style || {}) }}
      onMouseEnter={(e) => {
        setHover(true);
        rest.onMouseEnter?.(e);
      }}
      onMouseLeave={(e) => {
        setHover(false);
        setActive(false);
        rest.onMouseLeave?.(e);
      }}
      onMouseDown={(e) => {
        setActive(true);
        rest.onMouseDown?.(e);
      }}
      onMouseUp={(e) => {
        setActive(false);
        rest.onMouseUp?.(e);
      }}
    >
      {children}
    </button>
  );
};
