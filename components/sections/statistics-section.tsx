"use client";

import {
  animate,
  motion,
  useInView,
  useMotionValue,
  useMotionValueEvent,
  useReducedMotion,
} from "motion/react";
import { useEffect, useRef, useState, type CSSProperties } from "react";

import { Container } from "@/components/layout/container";
import { Section } from "@/components/layout/section";
import { cn } from "@/lib/utils";

const accent = "#f15533";
const plusGreen = "#9cd93b";
const body = "rgb(15, 15, 15)";

const stats = [
  {
    value: 920,
    label: "Projects Delivered",
    description:
      "We've successfully completed over 920 projects—and we're just getting started!",
  },
  {
    value: 4,
    label: "Regions",
    description:
      "We are proud of serving clients worldwide: UK, France, USA, Australia, Switzerland, etc.",
  },
  {
    value: 750,
    label: "Happy Clients",
    description:
      "More than 750 satisfied clients trust us to make their real estate photos stand out.",
  },
] as const;

function ValueStatement() {
  return (
    <p
      className="mx-auto max-w-5xl text-balance text-center text-xl leading-snug sm:text-2xl md:text-3xl lg:text-[2rem] lg:leading-[1.35]"
      style={{ color: body }}
    >
      <span className="font-medium" style={{ color: accent }}>
        Providing
      </span>{" "}
      <span className="text-[rgb(20,20,20)] dark:text-foreground/95">
        high-quality edits,
      </span>{" "}
      <span className="font-medium" style={{ color: accent }}>
        empowering
      </span>{" "}
      <span className="text-[rgb(15,15,15)] dark:text-foreground/90">your</span>{" "}
      <span className="text-[rgb(20,20,20)] dark:text-foreground/95">
        businesses, and
      </span>{" "}
      <span className="font-medium" style={{ color: accent }}>
        creating
      </span>{" "}
      <span className="text-[rgb(20,20,20)] dark:text-foreground/95">
        lasting visual impact. Let&apos;s
      </span>{" "}
      <span className="text-[rgb(15,15,15)] dark:text-foreground/90">grow</span>{" "}
      <span className="text-[rgb(20,20,20)] dark:text-foreground/95">
        together.
      </span>
    </p>
  );
}

function AnimatedStatNumber({
  value,
  className,
  style,
}: {
  value: number;
  className?: string;
  style?: CSSProperties;
}) {
  const ref = useRef<HTMLSpanElement>(null);
  const isInView = useInView(ref, { once: true, margin: "-60px" });
  const count = useMotionValue(0);
  const [display, setDisplay] = useState(0);
  const reduced = useReducedMotion();

  useMotionValueEvent(count, "change", (latest) => {
    setDisplay(Math.round(latest));
  });

  useEffect(() => {
    if (!isInView) return;

    if (reduced) {
      count.set(value);
      return;
    }

    count.set(0);
    const controls = animate(count, value, {
      duration: Math.min(2.2, Math.max(0.85, 0.35 + value / 420)),
      ease: [0.22, 1, 0.36, 1] as const,
    });
    return () => controls.stop();
  }, [isInView, value, reduced, count]);

  return (
    <span ref={ref} className={className} style={style}>
      {display}
    </span>
  );
}

function StatCard({
  item,
  index,
}: {
  item: (typeof stats)[number];
  index: number;
}) {
  return (
    <motion.article
      initial={{ opacity: 0, y: 24 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-60px" }}
      transition={{
        duration: 0.5,
        delay: index * 0.08,
        ease: [0.22, 1, 0.36, 1] as const,
      }}
      className="flex flex-col"
    >
      <div
        className={cn(
          "rounded-[30px] border border-dashed border-black/40 bg-white p-6 dark:border-white/25 dark:bg-card/80",
          "shadow-[0_1px_0_rgba(0,0,0,0.04)]",
        )}
      >
        <div className="flex flex-wrap items-end justify-center gap-1">
          <AnimatedStatNumber
            value={item.value}
            className="text-[clamp(3rem,8vw,4.625rem)] font-normal tabular-nums tracking-[-0.09em] leading-none"
            style={{ color: body }}
          />
          <span
            className="pb-1 text-[clamp(2rem,5vw,3.5rem)] font-medium leading-none tracking-[-0.04em]"
            style={{ color: plusGreen }}
            aria-hidden
          >
            +
          </span>
        </div>
        <p className="mt-4 text-center text-lg font-medium md:text-xl" style={{ color: body }}>
          {item.label}
        </p>
      </div>
      <p className="mt-4 px-1 text-center text-sm leading-relaxed opacity-80 md:text-base">
        {item.description}
      </p>
    </motion.article>
  );
}

export function StatisticsSection() {
  return (
    <Section
      id="statistics"
      spacing="lg"
      variant="default"
      className="scroll-mt-[calc(var(--navbar-height)+0.5rem)]"
      aria-labelledby="statistics-heading"
    >
      <Container>
        <h2 id="statistics-heading" className="sr-only">
          Statistics
        </h2>
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] as const }}
        >
          <ValueStatement />
        </motion.div>

        <div className="mt-14 grid grid-cols-1 gap-8 md:grid-cols-3 md:gap-6 lg:mt-20 lg:gap-8">
          {stats.map((item, index) => (
            <StatCard key={item.label} item={item} index={index} />
          ))}
        </div>
      </Container>
    </Section>
  );
}
