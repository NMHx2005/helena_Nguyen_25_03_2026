/**
 * Semantic names for layout & section spacing (values live in `app/globals.css`).
 * Use these when you need token names in TS (e.g. CMS mapping, tests).
 */
export const layoutTokens = {
  containerMax: "--container-max",
  containerNarrow: "--container-narrow",
  containerWide: "--container-wide",
  containerPaddingX: "--container-px",
  containerPaddingXLarge: "--container-px-lg",
  navbarHeight: "--navbar-height",
} as const;

export const sectionSpacing = {
  sm: "--section-y-sm",
  md: "--section-y-md",
  lg: "--section-y-lg",
  xl: "--section-y-xl",
  hero: "--section-y-hero",
} as const;

export type SectionSpacingKey = keyof typeof sectionSpacing;
