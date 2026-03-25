import * as React from "react";

import { cn } from "@/lib/utils";

export type ContainerProps = React.ComponentProps<"div"> & {
  /** Narrower reading width for long copy (e.g. About). */
  size?: "default" | "narrow" | "wide";
};

/**
 * Horizontally centered content with consistent horizontal padding and max width.
 * Width tokens are defined in `app/globals.css` (`--container-max`, `--container-px`).
 */
export function Container({
  className,
  size = "default",
  ...props
}: ContainerProps) {
  return (
    <div
      data-slot="container"
      className={cn(
        "mx-auto w-full px-[var(--container-px)] lg:px-[var(--container-px-lg)]",
        size === "default" && "max-w-[var(--container-max)]",
        size === "narrow" && "max-w-[var(--container-narrow)]",
        size === "wide" && "max-w-[var(--container-wide)]",
        className,
      )}
      {...props}
    />
  );
}
