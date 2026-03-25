"use client";

import Image from "next/image";
import { motion, useReducedMotion, useScroll, useTransform } from "motion/react";
import { Play, Star } from "lucide-react";
import { useLayoutEffect, useRef, useState, type RefObject } from "react";

import { Container } from "@/components/layout/container";
import { MagneticButton } from "@/components/shared/magnetic-button";
import { buttonVariants } from "@/components/ui/button";
import { cn } from "@/lib/utils";

/** Mirrors Enzo hero media sources (replace with your own assets later). */
const HERO_IMG_1 = "/images/hero/20260323-EF1_1060.jpg";
const HERO_IMG_2 = "/images/hero/20260323-EF1_1067.jpg";
const HERO_VIDEO_SRC =
  "https://framerusercontent.com/assets/s8NH38u1I51KR6uS5OsGh2Srs.mp4";
const WORK_DRIVE_URL =
  "https://drive.google.com/drive/folders/1jc4brUwD_MfOoMWCH1iVkyTFUu4gSEVi?usp=drive_link";
const SHOWREEL_YOUTUBE_URL = "https://youtu.be/uCWv-z1Rf9w";

const mantraAccent = "#ff6d41";
/** Review row — warm orange like Enzo reference */
const reviewStar = "#f97316";
const reviewText = "#ea580c";

const textVariants = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: { staggerChildren: 0.08, delayChildren: 0.05 },
  },
};

const itemVariants = {
  hidden: { opacity: 0, y: 20 },
  show: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.55, ease: [0.22, 1, 0.36, 1] as const },
  },
};

type HeroMediaProps = {
  /** Tall “runway” wrapper: scroll distance maps 1:1 to scale before page continues. */
  scrubRunwayRef: RefObject<HTMLElement | null>;
};

/** Desktop: ~3 cột + gap → scale ~3.8+ để video phủ kín cả khối hero-media. Mobile: 1 cột → zoom vừa phải. */
const SCALE_MAX_LG = 3.85;
const SCALE_MAX_SM = 1.38;
/** Phần đầu của runway (0–1) dùng để phóng hết; càng nhỏ càng nhanh. */
const ZOOM_RAMP_END = 0.22;

/**
 * Three-column hero strip: image | video | image.
 * — Center video scale is driven by scroll progress through `scrubRunwayRef` (sticky + tall parent).
 * — Entire strip is one hit target → YouTube showreel.
 * — “Play Showreel” pill follows the cursor (fixed position).
 */
function HeroMediaCollage({ scrubRunwayRef }: HeroMediaProps) {
  const reduceMotion = useReducedMotion();
  const isLgRef = useRef(true);
  const [badge, setBadge] = useState<{ x: number; y: number; visible: boolean }>(
    { x: 0, y: 0, visible: false },
  );

  useLayoutEffect(() => {
    const mq = window.matchMedia("(min-width: 1024px)");
    const sync = () => {
      isLgRef.current = mq.matches;
    };
    sync();
    mq.addEventListener("change", sync);
    return () => mq.removeEventListener("change", sync);
  }, []);

  const { scrollYProgress } = useScroll({
    target: scrubRunwayRef,
    offset: ["start start", "end end"],
  });

  const centerScale = useTransform(scrollYProgress, (v) => {
    if (reduceMotion) return 1;
    const max = isLgRef.current ? SCALE_MAX_LG : SCALE_MAX_SM;
    const t = Math.min(1, Math.max(0, v / ZOOM_RAMP_END));
    return 1 + (max - 1) * t;
  });

  const sideOpacity = useTransform(scrollYProgress, (v) => {
    if (reduceMotion) return 1;
    const t = Math.min(1, Math.max(0, v / ZOOM_RAMP_END));
    return 1 - 0.94 * t;
  });

  const columnClass =
    "relative min-h-[240px] overflow-hidden rounded-[24px] bg-muted/30 sm:min-h-[280px] sm:rounded-[26px] lg:min-h-[min(56vh,520px)] lg:rounded-[28px]";

  return (
    <>
      <div
        id="hero-media"
        className="relative w-full overflow-hidden rounded-[28px] shadow-sm ring-1 ring-black/[0.04] dark:ring-white/10"
      >
        <div className="relative grid grid-cols-1 gap-3 sm:gap-4 lg:grid-cols-3 lg:items-stretch lg:gap-5">
          {/* Left — still image + mantra */}
          <motion.div
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.65, delay: 0.12, ease: [0.22, 1, 0.36, 1] as const }}
            className={cn(columnClass, "pointer-events-none z-0")}
            style={reduceMotion ? undefined : { opacity: sideOpacity }}
          >
            <Image
              src={HERO_IMG_1}
              alt="Interior showcase"
              fill
              priority
              sizes="(max-width: 1024px) 100vw, 33vw"
              className="object-cover object-center"
            />
            <div className="pointer-events-none absolute inset-x-3 bottom-3 rounded-[20px] bg-[rgb(255,251,251)]/95 p-3.5 shadow-sm backdrop-blur-sm dark:bg-card/90 sm:inset-x-4 sm:bottom-4 sm:rounded-[24px] sm:p-4">
              <p className="text-xs leading-snug text-foreground sm:text-sm">
                People first, profits second—that&apos;s our{" "}
                <span className="font-medium" style={{ color: mantraAccent }}>
                  mantra
                </span>
                .
              </p>
            </div>
          </motion.div>

          {/* Center — video scales on scroll */}
          <motion.div
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.65, delay: 0.2, ease: [0.22, 1, 0.36, 1] as const }}
            className={cn(
              columnClass,
              "z-[18] origin-center will-change-transform pointer-events-none",
            )}
            style={reduceMotion ? undefined : { scale: centerScale }}
          >
            <video
              className="absolute inset-0 size-full object-cover"
              src={HERO_VIDEO_SRC}
              autoPlay
              muted
              loop
              playsInline
              preload="auto"
            />
          </motion.div>

          {/* Right */}
          <motion.div
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.65, delay: 0.28, ease: [0.22, 1, 0.36, 1] as const }}
            className={cn(columnClass, "pointer-events-none z-0")}
            style={reduceMotion ? undefined : { opacity: sideOpacity }}
          >
            <Image
              src={HERO_IMG_2}
              alt="Interior detail"
              fill
              sizes="(max-width: 1024px) 100vw, 33vw"
              className="object-cover object-center"
            />
          </motion.div>
        </div>

        {/* Full-area link + mouse tracking for badge */}
        <a
          id="showreel"
          href={SHOWREEL_YOUTUBE_URL}
          target="_blank"
          rel="noopener noreferrer"
          className="absolute inset-0 z-20 cursor-none rounded-[28px] outline-offset-4 focus-visible:outline focus-visible:ring-2 focus-visible:ring-ring"
          aria-label="Play showreel on YouTube — opens in a new tab"
          onMouseEnter={() => setBadge((b) => ({ ...b, visible: true }))}
          onMouseMove={(e) =>
            setBadge({ x: e.clientX, y: e.clientY, visible: true })
          }
          onMouseLeave={() => setBadge((b) => ({ ...b, visible: false }))}
        />
      </div>

      {/* Follow-cursor badge (fixed = không bị clip bởi overflow) */}
      {badge.visible ? (
        <div
          className="pointer-events-none fixed z-[200] flex items-center gap-2.5 rounded-full border border-black/[0.06] bg-white/95 px-3.5 py-2 text-sm font-medium tracking-tight text-neutral-900 shadow-[0_8px_30px_rgba(0,0,0,0.12)] backdrop-blur-md dark:border-white/10 dark:bg-zinc-900/95 dark:text-white"
          style={{
            left: badge.x,
            top: badge.y,
            transform: "translate(-50%, -50%)",
          }}
          aria-hidden
        >
          <span className="flex size-9 shrink-0 items-center justify-center rounded-full bg-black dark:bg-white">
            <Play
              className="ml-0.5 size-[14px] text-[#ff5c33] dark:text-orange-500"
              fill="currentColor"
              strokeWidth={0}
            />
          </span>
          Play Showreel
        </div>
      ) : null}
    </>
  );
}

export function Hero() {
  /** Chiều cao “runway”: cuộn hết đoạn này thì scale max, sau đó mới đi tiếp xuống sections dưới. */
  const mediaScrubRunwayRef = useRef<HTMLDivElement>(null);

  return (
    <section
      id="hero"
      className="relative isolate overflow-x-clip overflow-y-visible"
      aria-labelledby="hero-heading"
    >
      <div className="pointer-events-none absolute inset-0 -z-10">
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_80%_50%_at_50%_-20%,rgba(120,120,120,0.08),transparent)] dark:bg-[radial-gradient(ellipse_80%_50%_at_50%_-20%,rgba(255,255,255,0.06),transparent)]" />
      </div>

      <Container className="pb-12 pt-[calc(var(--navbar-height)+2rem)] lg:pb-16 lg:pt-[calc(var(--navbar-height)+3rem)]">
        <div className="flex flex-col gap-12 lg:gap-16">
          {/* Copy — full width on top (như layout Enzo) */}
          <motion.div
            variants={textVariants}
            initial="hidden"
            animate="show"
            className="max-w-3xl"
            data-framer-name="Texts"
          >
            <motion.h1
              id="hero-heading"
              variants={itemVariants}
              className="text-balance text-4xl font-semibold leading-[1.08] tracking-tight text-[rgb(20,20,20)] dark:text-foreground sm:text-5xl lg:text-[2.75rem] xl:text-6xl"
            >
              Professional Real Estate Photo &amp; Video Editing
              <span className="inline-block pl-1 text-foreground" aria-hidden>
                ⚡
              </span>
            </motion.h1>

            <motion.p
              variants={itemVariants}
              className="mt-5 max-w-lg text-pretty text-base leading-relaxed text-[rgb(20,20,20)]/85 dark:text-muted-foreground sm:text-lg"
            >
              At Charm Studio, we craft compelling real estate imagery and videos
              tailored to help your listings shine and sell.
            </motion.p>

            <motion.div variants={itemVariants} className="mt-8">
              <MagneticButton strength={20}>
                <a
                  href={WORK_DRIVE_URL}
                  target="_blank"
                  rel="noopener noreferrer"
                  className={cn(
                    buttonVariants({ size: "lg" }),
                    "h-12 rounded-[40px] border-0 bg-black px-8 text-white shadow-[0_1px_0_rgba(0,0,0,0.09),0_4px_12px_rgba(0,0,0,0.08),0_12px_32px_rgba(0,0,0,0.06)] hover:bg-black/90 dark:bg-white dark:text-black dark:hover:bg-white/90",
                  )}
                >
                  Check Out All Our Work
                </a>
              </MagneticButton>
            </motion.div>

            <motion.div
              variants={itemVariants}
              className="mt-10 flex flex-wrap items-center gap-3"
              data-framer-name="Review Wrapper"
            >
              <div className="flex items-center gap-0.5" aria-hidden>
                {Array.from({ length: 5 }).map((_, i) => (
                  <Star
                    key={i}
                    className="size-6 shrink-0 sm:size-7"
                    strokeWidth={0}
                    style={{ color: reviewStar, fill: reviewStar }}
                  />
                ))}
              </div>
              <p
                className="text-sm font-medium sm:text-base"
                style={{ color: reviewText }}
              >
                Over 300+ Five Star Reviews
              </p>
            </motion.div>
          </motion.div>
        </div>
      </Container>

      {/*
        Sticky scrub: cuộn trong runway → video giữa scale 1 → max.
        Chỉ khi runway kết thúc (progress = 1) thì khối sticky nhả và trang cuộn xuống phần dưới.
        Cuộn ngược: scale max → 1 trước, rồi mới lên được phần text.
      */}
      <div
        ref={mediaScrubRunwayRef}
        className="relative h-[min(175vh,2200px)] w-full sm:h-[min(185vh,2350px)] lg:h-[min(195vh,2500px)]"
        aria-label="Hero media scroll interaction"
      >
        <div
          className="sticky z-[1] flex w-full justify-center px-0"
          style={{
            top: "calc(var(--navbar-height) + 0.75rem)",
          }}
        >
          <Container className="w-full overflow-visible py-4 sm:py-6 lg:py-8">
            <HeroMediaCollage scrubRunwayRef={mediaScrubRunwayRef} />
          </Container>
        </div>
      </div>

      <div className="h-8 lg:h-12" aria-hidden />
    </section>
  );
}
