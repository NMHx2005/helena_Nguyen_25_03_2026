import * as React from "react";

import { cn } from "@/lib/utils";

type SiteShellProps = React.ComponentProps<"div">;

/**
 * Root page wrapper: min height, flex column, background + text from design tokens.
 * Keeps future sticky footer / main layout predictable.
 */
export function SiteShell({ className, ...props }: SiteShellProps) {
  return (
    <div
      data-slot="site-shell"
      className={cn(
        "relative flex min-h-dvh flex-col bg-background text-foreground",
        className,
      )}
      {...props}
    />
  );
}
