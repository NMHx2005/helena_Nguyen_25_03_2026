/**
 * Primary in-page anchors for Charm Studio nav.
 * Contact is the header CTA only (not duplicated in this list).
 */
export const mainNavItems = [
  { href: "#services", label: "Services" },
  { href: "#testimonials", label: "Testimonials" },
  { href: "#process", label: "Process" },
  { href: "#faqs", label: "FAQs" },
] as const;

/** Header CTA — same target as the contact section */
export const headerContactCta = {
  href: "#contact",
  label: "Contact",
} as const;
