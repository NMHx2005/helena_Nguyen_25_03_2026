"use client";

import { useState } from "react";
import { motion } from "motion/react";
import { Workflow } from "lucide-react";

import { Container } from "@/components/layout/container";
import { Section } from "@/components/layout/section";
import { cn } from "@/lib/utils";

const steps = [
  {
    number: "1",
    title: "Let’s Align & Get Started",
    description:
      "We work closely with you to understand your editing requirements and receive your photos for processing.",
  },
  {
    number: "2",
    title: "We Edit",
    description:
      "Our global team of photo editing experts will enhance your images within 15 hours.",
  },
  {
    number: "3",
    title: "Quality Assurance",
    description:
      "We have a dedicated quality control team to ensure editing is performed to the highest of standards.",
  },
  {
    number: "4",
    title: "Ready!",
    description:
      "We will send the professionally edited images to you for quick and easy download once they are ready.",
  },
] as const;

export function ProcessSection() {
  const [activeStep, setActiveStep] = useState(0);
  const inactiveWidth = 72;
  const gapPx = 8;
  const activeWidth = `calc(100% - ${(steps.length - 1) * inactiveWidth + (steps.length - 1) * gapPx}px)`;

  return (
    <Section
      id="process"
      spacing="lg"
      variant="default"
      className="scroll-mt-[calc(var(--navbar-height)+0.5rem)]"
      aria-labelledby="process-heading"
    >
      <Container>
        <div className="space-y-8 lg:space-y-10">
          <div className="flex flex-col items-center gap-8 text-center">
            <div
              className={cn(
                "mx-auto inline-flex w-fit max-w-full items-center gap-2 rounded-full px-3 py-2",
                "bg-[#eef1f4] dark:bg-muted/80",
              )}
            >
              <div className="flex size-7 shrink-0 items-center justify-center rounded-full bg-[#0a0a0a] text-white dark:bg-foreground dark:text-background">
                <Workflow className="size-3.5" />
              </div>
              <span className="text-sm font-medium text-primary/95">Our Work Process</span>
            </div>

            <h2
              id="process-heading"
              className="max-w-4xl text-balance text-center text-3xl font-semibold leading-tight tracking-tight text-[rgb(29,50,45)] dark:text-foreground md:text-4xl lg:text-[2.5rem] lg:leading-[1.15]"
            >
              From idea to impact—our process makes it easy, exciting, and effective!
            </h2>
          </div>

          <div className="space-y-3 lg:hidden">
            {steps.map((step, index) => (
              <button
                key={step.number}
                type="button"
                onClick={() => setActiveStep(index)}
                className={cn(
                  "sticky border p-6 text-left transition-colors",
                  "rounded-[30px]",
                  activeStep === index
                    ? "border-black/10 bg-[#0a0a0a] text-white dark:border-white/20"
                    : "border-black/10 bg-[#eef1f4] text-[rgb(29,50,45)] dark:border-white/15 dark:bg-muted/70 dark:text-foreground",
                )}
                style={{
                  top: `calc(var(--navbar-height) + 0.75rem + ${index * 12}px)`,
                  zIndex: index + 1,
                }}
              >
                <p
                  className={cn(
                    "text-5xl font-semibold leading-none tracking-tight",
                    activeStep === index ? "text-[#f15533]" : "text-[#f15533]/90",
                  )}
                >
                  {step.number}
                </p>
                <h3 className="mt-6 text-xl font-semibold leading-snug">{step.title}</h3>
                <p
                  className={cn(
                    "mt-3 text-sm leading-relaxed",
                    activeStep === index
                      ? "text-white/85"
                      : "text-[rgb(29,50,45)]/80 dark:text-foreground/75",
                  )}
                >
                  {step.description}
                </p>
              </button>
            ))}
          </div>

          <div className="hidden w-full gap-2 lg:flex lg:items-stretch">
            {steps.map((step, index) => {
              const active = index === activeStep;
              return (
                <motion.button
                  key={step.number}
                  type="button"
                  onClick={() => setActiveStep(index)}
                  aria-label={`Open step ${step.number}`}
                  initial={false}
                  animate={{ width: active ? activeWidth : inactiveWidth }}
                  transition={{ duration: 0.42, ease: [0.22, 1, 0.36, 1] as const }}
                  className={cn(
                    "relative flex h-[190px] shrink-0 items-center overflow-hidden rounded-[30px] px-0 text-left",
                    active
                      ? "bg-[#0a0a0a] text-white"
                      : "bg-[#eef1f4] text-[#f15533] hover:bg-[#e7ebef] dark:bg-muted/70 dark:hover:bg-muted",
                  )}
                >
                  {active ? (
                    <motion.div
                      key={`active-${step.number}`}
                      initial={{ opacity: 0, y: 6 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ duration: 0.28, ease: [0.22, 1, 0.36, 1] as const }}
                      className="flex items-center gap-6 px-8"
                    >
                      <p className="w-[72px] text-center text-[5.25rem] font-semibold leading-none tracking-tight text-white">
                        {step.number}
                      </p>
                      <div className="pr-2">
                        <h3 className="text-[2rem] font-semibold leading-tight">
                          {step.title}
                        </h3>
                        <p className="mt-4 max-w-[730px] text-lg leading-relaxed text-white/90">
                          {step.description}
                        </p>
                      </div>
                    </motion.div>
                  ) : (
                    <p className="w-[72px] text-center text-[5rem] font-semibold leading-none tracking-tight">
                      {step.number}
                    </p>
                  )}
                </motion.button>
              );
            })}
          </div>
        </div>
      </Container>
    </Section>
  );
}
