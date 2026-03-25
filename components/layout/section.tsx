import * as React from "react";

import { cn } from "@/lib/utils";

export type SectionProps = React.ComponentProps<"section"> & {
  /** Vertical padding preset; values from CSS variables `--section-y-*`. */
  spacing?: "none" | "sm" | "md" | "lg" | "xl" | "hero";
  /** Subtle background treatment for alternating bands. */
  variant?: "default" | "muted" | "surface";
};

const spacingClass: Record<NonNullable<SectionProps["spacing"]>, string> = {
  none: "",
  sm: "py-[length:var(--section-y-sm)]",
  md: "py-[length:var(--section-y-md)]",
  lg: "py-[length:var(--section-y-lg)]",
  xl: "py-[length:var(--section-y-xl)]",
  hero: "py-[length:var(--section-y-hero)]",
};

const variantClass: Record<NonNullable<SectionProps["variant"]>, string> = {
  default: "bg-background",
  muted: "bg-muted/50",
  surface: "bg-surface-muted",
};

/**
 * Full-bleed section wrapper with consistent vertical rhythm.
 * Pair inner content with `<Container />` for horizontal alignment.
 */
export function Section({
  className,
  spacing = "md",
  variant = "default",
  ...props
}: SectionProps) {
  return (
    <section
      data-slot="section"
      className={cn(
        variantClass[variant],
        spacingClass[spacing],
        className,
      )}
      {...props}
    />
  );
}
