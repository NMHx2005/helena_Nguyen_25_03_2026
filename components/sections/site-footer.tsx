import Link from "next/link";
import Image from "next/image";
import { ChevronRight, Clock3, Mail, Phone } from "lucide-react";

import { Container } from "@/components/layout/container";

const navLinks = [
  { label: "Home", href: "#hero" },
  { label: "Benefits", href: "#benefits" },
  { label: "Services", href: "#services" },
  { label: "Testimonials", href: "#testimonials" },
  { label: "About", href: "#about" },
] as const;

const socialLinks = [
  { label: "Facebook", href: "https://www.facebook.com/share/1CNsv7KetL/" },
  {
    label: "Instagram",
    href: "https://www.instagram.com/charmstudio2301?igsh=MTV2a2t1ZTV0ZGI1OA==",
  },
  { label: "Youtube", href: "#" },
] as const;

function FooterLink({
  label,
  href,
  external = false,
}: {
  label: string;
  href: string;
  external?: boolean;
}) {
  return (
    <Link
      href={href}
      target={external ? "_blank" : undefined}
      rel={external ? "noopener noreferrer" : undefined}
      className="group inline-flex items-center gap-1.5 text-white/60 transition-colors hover:text-[rgb(194,250,105)]"
    >
      <ChevronRight className="size-3.5 text-[#f15533] transition-transform group-hover:translate-x-0.5" />
      <span className="text-sm font-medium">{label}</span>
    </Link>
  );
}

export function SiteFooter() {
  return (
    <footer className="pb-10 pt-6">
      <Container>
        <div className="overflow-hidden rounded-[30px] bg-black text-white">
          {/* Main content */}
          <div className="px-8 pb-8 pt-10 sm:px-10 lg:px-12">
            <div className="grid gap-10 lg:grid-cols-[1fr_auto]">
              {/* Brand block */}
              <div className="max-w-xs">
                <Image
                  src="/images/logo/logo.jpg"
                  alt="Charm Studio logo"
                  width={280}
                  height={120}
                  className="h-auto w-[min(100%,220px)] rounded-md object-contain"
                />
                <p className="mt-4 text-sm leading-relaxed text-white/50">
                  Where great edits sell great homes.
                </p>
              </div>

              {/* Nav columns */}
              <div className="flex flex-col justify-between gap-8 sm:flex-row lg:items-start lg:gap-16">
                <div>
                  <p className="mb-3 text-xs font-semibold uppercase tracking-widest text-white/30">
                    Navigation
                  </p>
                  <div className="space-y-2.5">
                    {navLinks.map((item) => (
                      <div key={item.label}>
                        <FooterLink label={item.label} href={item.href} />
                      </div>
                    ))}
                  </div>
                </div>

                <div>
                  <p className="mb-3 text-xs font-semibold uppercase tracking-widest text-white/30">
                    Follow Us
                  </p>
                  <div className="space-y-2.5">
                    {socialLinks.map((item) => (
                      <div key={item.label}>
                        <FooterLink label={item.label} href={item.href} external />
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>

            {/* Contact strip */}
            <div className="mt-10 grid gap-6 rounded-2xl bg-white/5 px-6 py-5 sm:grid-cols-3">
              <div className="flex items-start gap-3">
                <div className="mt-0.5 flex size-8 shrink-0 items-center justify-center rounded-full bg-[#f15533]/15">
                  <Phone className="size-3.5 text-[#f15533]" />
                </div>
                <div>
                  <p className="mb-0.5 text-[10px] font-semibold uppercase tracking-widest text-[#ffa587]">
                    WhatsApp
                  </p>
                  <Link
                    href="https://wa.me/84396807801"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-sm text-white hover:underline"
                  >
                    0396 807 801
                  </Link>
                </div>
              </div>

              <div className="flex items-start gap-3">
                <div className="mt-0.5 flex size-8 shrink-0 items-center justify-center rounded-full bg-[#f15533]/15">
                  <Mail className="size-3.5 text-[#f15533]" />
                </div>
                <div>
                  <p className="mb-0.5 text-[10px] font-semibold uppercase tracking-widest text-[#ffa587]">
                    Email
                  </p>
                  <Link
                    href="mailto:charmstudio2301@gmail.com"
                    className="text-sm text-white hover:underline"
                  >
                    charmstudio2301@gmail.com
                  </Link>
                </div>
              </div>

              <div className="flex items-start gap-3">
                <div className="mt-0.5 flex size-8 shrink-0 items-center justify-center rounded-full bg-[#f15533]/15">
                  <Clock3 className="size-3.5 text-[#f15533]" />
                </div>
                <div>
                  <p className="mb-0.5 text-[10px] font-semibold uppercase tracking-widest text-[#ffa587]">
                    Opening Hours
                  </p>
                  <p className="text-sm text-white">24/7 Service · Global Support</p>
                </div>
              </div>
            </div>
          </div>

          {/* Bottom bar */}
          <div className="flex flex-col items-center justify-between gap-2 border-t border-white/10 px-8 py-4 sm:flex-row sm:px-10 lg:px-12">
            <p className="text-xs text-white/30">
              © {new Date().getFullYear()} Charm Studio. All rights reserved.
            </p>
            <p className="text-xs text-white/20">Real estate photo editing · Vietnam</p>
          </div>
        </div>
      </Container>
    </footer>
  );
}