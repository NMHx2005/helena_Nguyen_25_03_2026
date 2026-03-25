"use client";

import Link from "next/link";
import Image from "next/image";
import { useEffect, useState } from "react";
import { Moon, Sun, Menu } from "lucide-react";
import { useTheme } from "next-themes";

import { Button } from "@/components/ui/button";
import { buttonVariants } from "@/components/ui/button";
import {
  Sheet,
  SheetClose,
  SheetContent,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet";
import { Container } from "@/components/layout/container";
import { headerContactCta, mainNavItems } from "@/lib/site-nav";
import { cn } from "@/lib/utils";

export function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const { theme, setTheme } = useTheme();
  const isDark = theme === "dark";

  useEffect(() => {
    const onScroll = () => setIsScrolled(window.scrollY > 24);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header
      className={cn(
        "fixed inset-x-0 top-0 z-50 transition-all duration-300",
        isScrolled
          ? "border-b border-border/60 bg-background/75 backdrop-blur-xl"
          : "bg-transparent",
      )}
    >
      <nav aria-label="Main navigation">
        <Container className="flex h-[var(--navbar-height)] items-center justify-between">
          <Link
            href="/"
            className="inline-flex items-center"
            aria-label="Charm Studio home"
          >
            <Image
              src="/images/logo/logo.jpg"
              alt="Charm Studio logo"
              width={140}
              height={42}
              className="h-9 w-auto rounded-sm object-contain"
              priority
            />
          </Link>

          <div className="hidden items-center gap-0.5 lg:gap-1 md:flex">
            {mainNavItems.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                className={buttonVariants({ variant: "ghost", size: "sm" }) + " text-sm font-semibold tracking-[0.2em] uppercase"}
              >
                {item.label}
              </Link>
            ))}
          </div>

          <div className="flex items-center gap-2">
            <Button
              variant="ghost"
              size="icon"
              onClick={() => setTheme(isDark ? "light" : "dark")}
              aria-label="Toggle color theme"
            >
              {isDark ? <Sun className="size-4" /> : <Moon className="size-4" />}
            </Button>

            <div className="hidden md:block">
              <Link
                href={headerContactCta.href}
                className={cn(buttonVariants({ size: "sm" }), "rounded-full")}
              >
                {headerContactCta.label}
              </Link>
            </div>

            <Sheet>
              <SheetTrigger
                className="md:hidden"
                render={<Button variant="ghost" size="icon" aria-label="Open mobile menu" />}
              >
                <Menu className="size-5" />
              </SheetTrigger>
              <SheetContent side="right" className="w-[320px]">
                <SheetHeader>
                  <SheetTitle className="text-left">
                    <Image
                      src="/images/logo/logo.jpg"
                      alt="Charm Studio logo"
                      width={132}
                      height={40}
                      className="h-8 w-auto rounded-sm object-contain"
                    />
                  </SheetTitle>
                </SheetHeader>
                <div className="mt-10 flex flex-col gap-2">
                  {mainNavItems.map((item) => (
                    <SheetClose
                      key={item.href}
                      nativeButton={false}
                      render={
                        <Link
                          href={item.href}
                          className={cn(
                            buttonVariants({ variant: "ghost" }),
                            "justify-start",
                          )}
                        />
                      }
                    >
                      {item.label}
                    </SheetClose>
                  ))}
                  <SheetClose
                    nativeButton={false}
                    render={
                      <Link
                        href={headerContactCta.href}
                        className={cn(
                          buttonVariants({ size: "sm" }),
                          "mt-4 rounded-full",
                        )}
                      />
                    }
                  >
                    {headerContactCta.label}
                  </SheetClose>
                </div>
              </SheetContent>
            </Sheet>
          </div>
        </Container>
      </nav>
    </header>
  );
}
