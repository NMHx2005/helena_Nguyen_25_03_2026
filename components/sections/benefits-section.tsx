"use client";

import Image from "next/image";
import { motion } from "motion/react";
import { Star } from "lucide-react";

import { Container } from "@/components/layout/container";
import { Section } from "@/components/layout/section";
import { cn } from "@/lib/utils";

const iconGrad =
  "linear-gradient(rgb(227, 168, 154) 0%, rgb(241, 85, 51) 100%)";

const benefits = [
  {
    title: "Fast turnaround",
    body: "Get high-quality real estate edits delivered in 8–15 hours.",
    icon: "https://framerusercontent.com/images/KcS6EWgdORi5Mmm4jklLWSnusGc.svg?width=24&height=24",
  },
  {
    title: "Real service",
    body: "Our customer service is available 24/7, working without days off",
    icon: "https://framerusercontent.com/images/a61pyRJBYOo13xtt2CNLT09Jak.svg",
  },
  {
    title: "Free trial",
    body: "Receive 3 image enhancements and 1 day to dusk edit for trial",
    icon: "https://framerusercontent.com/images/HHYU8dGzaVSEEgWs5qhQ3eSI4tg.svg?width=24&height=24",
  },
] as const;

function BenefitCard({
  item,
  index,
}: {
  item: (typeof benefits)[number];
  index: number;
}) {
  return (
    <motion.article
      initial={{ opacity: 0, y: 22 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-40px" }}
      transition={{ duration: 0.5, delay: index * 0.1, ease: [0.22, 1, 0.36, 1] as const }}
      className="flex h-full flex-col items-center text-center"
    >
      <div
        className="relative mb-5 flex size-14 items-center justify-center rounded-[15px] p-3 shadow-sm"
        style={{ background: iconGrad }}
      >
        <Image
          src={item.icon}
          alt=""
          width={24}
          height={24}
          className="size-6 object-contain"
        />
      </div>
      <h3 className="text-lg font-semibold tracking-tight text-foreground md:text-xl">
        {item.title}
      </h3>
      <p className="mt-3 max-w-sm text-sm leading-relaxed text-[rgb(15,15,15)]/80 dark:text-muted-foreground">
        {item.body}
      </p>
    </motion.article>
  );
}

export function BenefitsSection() {
  return (
    <Section
      id="benefits"
      spacing="lg"
      variant="surface"
      className="scroll-mt-[calc(var(--navbar-height)+0.5rem)]"
      aria-labelledby="benefits-heading"
    >
      <Container>
        <div className="flex flex-col items-center gap-12 lg:items-start lg:gap-16">
          <div className="flex flex-col items-center gap-8 lg:items-start lg:gap-12 xl:gap-20">
            <div
              className={cn(
                "mx-auto inline-flex w-fit max-w-full items-center gap-2 rounded-full px-3 py-2 lg:mx-0",
                "bg-[#eef1f4] dark:bg-muted/80",
              )}
            >
              <div className="flex size-7 shrink-0 items-center justify-center rounded-full bg-[#0a0a0a] text-white dark:bg-foreground dark:text-background">
                <Star className="size-3.5 fill-white" strokeWidth={0} />
              </div>
              <div className="text-sm font-medium text-foreground">
                <span className="text-primary">Benefits</span>
              </div>
            </div>
            <motion.h2
              id="benefits-heading"
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.55 }}
              className="max-w-3xl flex-1 text-balance text-center text-3xl font-semibold leading-tight tracking-tight text-[rgb(29,50,45)] dark:text-foreground md:text-4xl lg:text-left lg:text-[2.5rem] lg:leading-[1.15]"
            >
              See why choosing us is the smartest move.
            </motion.h2>
          </div>

          <div className="grid grid-cols-1 gap-10 sm:grid-cols-2 lg:grid-cols-3 lg:gap-8">
            {benefits.map((item, index) => (
              <BenefitCard key={item.title} item={item} index={index} />
            ))}
          </div>
        </div>
      </Container>
    </Section>
  );
}
