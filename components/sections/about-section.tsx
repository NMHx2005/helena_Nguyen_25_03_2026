import Image from "next/image";
import { UsersRound } from "lucide-react";

import { Container } from "@/components/layout/container";
import { Section } from "@/components/layout/section";
import { cn } from "@/lib/utils";

export function AboutSection() {
  return (
    <Section
      id="about"
      spacing="lg"
      variant="default"
      className="scroll-mt-[calc(var(--navbar-height)+0.5rem)]"
      aria-labelledby="about-heading"
    >
      <Container>
        <div className="space-y-8 lg:space-y-10">
          <div
            className={cn(
              "mx-auto inline-flex w-fit max-w-full items-center gap-2 rounded-full px-3 py-2 lg:mx-0",
              "bg-[#eef1f4] dark:bg-muted/80",
            )}
          >
            <div className="flex size-7 shrink-0 items-center justify-center rounded-full bg-[#0a0a0a] text-white dark:bg-foreground dark:text-background">
              <UsersRound className="size-3.5" />
            </div>
            <span id="about-heading" className="text-sm font-medium text-primary/95">
              About us
            </span>
          </div>

          <article className="rounded-[28px] border border-black/10 bg-white p-4 shadow-[0_2px_20px_rgba(0,0,0,0.04)] sm:p-6 dark:border-white/15 dark:bg-card/80">
            <div className="grid gap-6 lg:grid-cols-[0.42fr_0.58fr] lg:items-center">
              <div className="relative mx-auto aspect-square w-full max-w-[460px] overflow-hidden rounded-[24px]">
                <Image
                  src="https://framerusercontent.com/images/yH1xg7UD3r2rwD5EPSzJ27lQ6IQ.jpg?width=1651&height=1657"
                  alt="About Enzo Editing"
                  fill
                  className="object-cover"
                />
              </div>

              <div className="space-y-4 lg:space-y-5">
                <p className="text-lg font-medium leading-relaxed text-[#f15533] sm:text-xl">
                  At Enzo Editing,
                </p>
                <p className="text-base leading-relaxed text-[rgb(15,15,15)] dark:text-foreground/90 sm:text-lg">
                  Our mission is simple: to help your listings stand out in a competitive market.
                  From virtual enhancements to full image transformations, we deliver visuals that
                  sell.
                </p>
                <p className="text-base leading-relaxed text-[rgb(15,15,15)] dark:text-foreground/90 sm:text-lg">
                  We started as a small team of passionate creatives who believed that powerful
                  imagery can make all the difference. Today, we are a trusted partner for agents,
                  architects, and media teams across the globe.
                </p>
                <p className="pt-2 text-2xl font-semibold italic text-[#f15533] sm:text-3xl">
                  Enzo Editing
                </p>
              </div>
            </div>
          </article>
        </div>
      </Container>
    </Section>
  );
}
