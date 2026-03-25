"use client";

import Image from "next/image";
import Link from "next/link";
import { motion } from "motion/react";
import { ArrowRight, Wrench } from "lucide-react";
import { useCallback, useRef, useState } from "react";

import { Container } from "@/components/layout/container";
import { Section } from "@/components/layout/section";
import { cn } from "@/lib/utils";

type ServiceCard = {
  title: string;
  description: string;
  items: string[];
  sampleUrl: string;
  beforeImage: string;
  afterImage?: string;
  reverse?: boolean;
};

const services: ServiceCard[] = [
  {
    title: "Photo Enhancement",
    description:
      "Perfect for real estate photo editing so you can present your listing with top-notch, retouched professional-looking photos.",
    items: [
      "Single Exposure / Flash",
      "Multi Exposures",
      "Panorama / 360 image",
      "Architectural Style",
      "Flambient",
      "Pre-merged HDR",
      "HDR 3-5 Bracketing",
    ],
    sampleUrl:
      "https://drive.google.com/drive/folders/1xSzCCOrG56cahC3yuSsiW1bK7WU1lyQI?usp=drive_link",
    beforeImage:
      "/images/before-after/Photo_before.dng",
    afterImage:
      "/images/before-after/Photo_After.jpg",
  },
  {
    title: "Day to Dusk",
    description:
      "Advanced retouching that turns daytime captures into realistic dusk atmospheres to make listings stand out.",
    items: [
      "Day to Dusk",
      "Day to Evening",
      "Day to Night",
      "Virtual Twilight",
      "Twilight",
      "Indoor",
      "Custom Sample",
    ],
    sampleUrl:
      "https://drive.google.com/drive/folders/1gd3dguAn51Pa5EY81sLhENgPodkwBXW0?usp=drive_link",
    beforeImage:
      "https://framerusercontent.com/images/OKlVYgzeNkbc9B9qsAhl7EdCCSM.jpg?scale-down-to=1024&width=6000&height=4000",
    afterImage:
      "https://framerusercontent.com/images/H6340pg4RDCbR0S7lTkuwxNDJg.jpg?scale-down-to=1024&width=6000&height=4000",
    reverse: true,
  },
  {
    title: "High-end Photo Editing",
    description:
      "Premium photo editing for luxury real estate, commercial, editorial, and architectural projects.",
    items: [
      "Editorial",
      "Architecture",
      "Residential",
      "Commercial",
      "Customized Styles",
      "Multi Exposures",
    ],
    sampleUrl: "https://enzophotoediting.mypixieset.com/",
    beforeImage:
      "https://framerusercontent.com/images/PErEiEXoZZh830LKX3hRtf5ZaU.jpg?scale-down-to=1024&width=6000&height=4000",
    afterImage:
      "https://framerusercontent.com/images/vRL8UyVqNuFSsMJzTM2P3aMOco.jpg?scale-down-to=1024&width=6000&height=4000",
  },
  {
    title: "Video Editing",
    description:
      "Professional real estate video editing with clean tones, balanced exposure, and refined contrast while maintaining realism.",
    items: [
      "Short-form Video",
      "Reels",
      "Drone Video",
      "Interior & Exterior Property Video",
      "Photo Slideshow Video",
      "Combined Video",
    ],
    sampleUrl:
      "https://drive.google.com/drive/folders/1AvRFXKaMeS0vhTStJEr35rwoNh9WMgQB",
    beforeImage:
      "https://framerusercontent.com/images/BRU0IEwHzs6McRwYmldSm3rCqaQ.png?scale-down-to=1024&width=2430&height=1229",
    reverse: true,
  },
  {
    title: "Photo Retouching",
    description:
      "From quick fixes to detail-heavy polish, we improve each image so your listing looks clean, natural, and market-ready.",
    items: [
      "Change Seasons",
      "Remove Sun / People Reflection",
      "Raise Water Level",
      "Lawn Enhancement",
      "Remove Blemishes",
      "TV Screen / Window Replacement",
    ],
    sampleUrl:
      "https://drive.google.com/drive/folders/1xdmCsw5JweiDogUZrHvPYItm1B0FRmYt?usp=drive_link",
    beforeImage:
      "https://framerusercontent.com/images/gVsbA9UAstb1X4rsS22vEymwBE.jpg?scale-down-to=1024&width=3926&height=2640",
    afterImage:
      "https://framerusercontent.com/images/0ZqdvRgEfXaGPrIPCojhTxUG3I.jpg?scale-down-to=1024&width=3926&height=2640",
  },
  {
    title: "Item Removal & Virtual Cleaning",
    description:
      "We remove clutter and distracting details while preserving natural lighting, shadows, and texture for seamless results.",
    items: ["Remove Items", "Extend Background", "Virtual Cleaning"],
    sampleUrl:
      "https://drive.google.com/drive/folders/1D_rvd3GEWy5ikCxQ_RxDGQcQZBqnt8uj?usp=drive_link",
    beforeImage: "/images/before-after/Before_clean.jpg",
    afterImage: "/images/before-after/After_clean.jpg",
    reverse: true,
  },
  {
    title: "Virtual Staging",
    description:
      "Afraid that virtual staging will look fake? Don\u2019t like floating furniture? Neither do we! We use cutting edge technology combined with the latest staging techniques to ensure your finished image is photo realistic to the eye. Techniques including advanced lighting, shadowing and micro textures are all seamlessly blended together so your finished image looks as if it was traditionally staged.",
    items: [
      "Living Room",
      "Bedroom",
      "Kitchen",
      "Dining Room",
      "Office",
      "Outdoor / Patio",
    ],
    sampleUrl:
      "https://drive.google.com/drive/folders/1VGSeFYmMZq4bhNHpprZbf7zCHmBNjUlr?usp=drive_link",
    beforeImage:
      "/images/before-after/Before_staging.jpg",
    afterImage:
      "/images/before-after/After_staging.jpg",
  },
];

function SampleButton({ href }: { href: string }) {
  return (
    <Link
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      className="group relative inline-flex w-fit items-center gap-2 overflow-hidden rounded-full border border-black bg-white px-4 py-1.5 text-[1.05rem] font-semibold text-black shadow-sm transition-colors duration-500 hover:text-white"
    >
      <span className="pointer-events-none absolute right-1 top-1/2 z-0 size-7 -translate-y-1/2 rounded-full bg-black scale-0 transition-transform duration-500 ease-out group-hover:scale-[13]" />
      <span className="relative z-10">View Samples</span>
      <span className="relative z-10 inline-flex size-7 items-center justify-center rounded-full bg-black text-white transition-colors duration-300 group-hover:bg-white group-hover:text-black">
        <ArrowRight className="size-4" />
      </span>
    </Link>
  );
}

function BeforeAfterImage({
  beforeImage,
  afterImage,
  title,
}: {
  beforeImage: string;
  afterImage?: string;
  title: string;
}) {
  const [split, setSplit] = useState(50);
  const [dragging, setDragging] = useState(false);
  const wrapperRef = useRef<HTMLDivElement>(null);

  const updateFromClientX = useCallback((clientX: number) => {
    const el = wrapperRef.current;
    if (!el) return;
    const rect = el.getBoundingClientRect();
    const next = ((clientX - rect.left) / rect.width) * 100;
    setSplit(Math.min(95, Math.max(5, next)));
  }, []);

  return (
    <div
      ref={wrapperRef}
      className={cn(
        "relative h-full min-h-[240px] overflow-hidden rounded-[26px] bg-black p-1.5 sm:min-h-[300px]",
        afterImage && "cursor-col-resize touch-none select-none",
      )}
      onPointerDown={(event) => {
        if (!afterImage) return;
        setDragging(true);
        event.currentTarget.setPointerCapture(event.pointerId);
        updateFromClientX(event.clientX);
      }}
      onPointerMove={(event) => {
        if (!dragging) return;
        updateFromClientX(event.clientX);
      }}
      onPointerUp={() => setDragging(false)}
      onPointerCancel={() => setDragging(false)}
      onPointerLeave={() => setDragging(false)}
    >
      {afterImage ? (
        <>
          <div className="absolute inset-1.5 overflow-hidden rounded-[20px]">
            <Image src={beforeImage} alt={`${title} before`} fill className="object-cover" />
          </div>
          <div
            className="absolute inset-1.5 overflow-hidden rounded-[20px]"
            style={{ clipPath: `inset(0 0 0 ${split}%)` }}
          >
            <Image src={afterImage} alt={`${title} after`} fill className="object-cover" />
          </div>
          <div
            className="absolute inset-y-1.5 w-0.5 -translate-x-1/2 bg-white/95"
            style={{ left: `${split}%` }}
          />
          <span className="absolute left-4 top-4 rounded bg-[#f25633] px-3 py-1 text-[10px] font-semibold text-white">
            Before
          </span>
          <span className="absolute right-4 top-4 rounded bg-[#f25633] px-3 py-1 text-[10px] font-semibold text-white">
            After
          </span>
        </>
      ) : (
        <div className="relative h-full min-h-[248px] overflow-hidden rounded-[20px] sm:min-h-[308px]">
          <Image src={beforeImage} alt={title} fill className="object-cover" />
        </div>
      )}
    </div>
  );
}

function ServiceCard({ item, index }: { item: ServiceCard; index: number }) {
  return (
    <motion.article
      initial={{ opacity: 0, y: 24 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-80px" }}
      transition={{ duration: 0.55, delay: index * 0.03, ease: [0.22, 1, 0.36, 1] as const }}
      className="rounded-[26px] border border-black/10 bg-white p-4 shadow-[0_2px_20px_rgba(0,0,0,0.04)] sm:p-5 dark:border-white/15 dark:bg-card/80"
    >
      <div
        className={cn(
          "grid gap-6 lg:items-stretch",
          item.reverse ? "lg:grid-cols-[1.05fr_0.95fr]" : "lg:grid-cols-[0.95fr_1.05fr]",
        )}
      >
        <div className={cn("space-y-5", item.reverse && "lg:order-2")}>
          <div className="space-y-2.5">
            <h3 className="text-[2rem] font-semibold tracking-tight text-[rgb(29,50,45)] dark:text-foreground">
              {item.title}
            </h3>
            <p className="text-base leading-relaxed text-[rgb(77,77,77)] dark:text-muted-foreground">
              {item.description}
            </p>
          </div>

          <div className="flex flex-wrap gap-2">
            {item.items.map((text) => (
              <span
                key={text}
                className="rounded-full border border-black/15 bg-background px-3 py-1 text-sm text-[rgb(29,50,45)] dark:border-white/20 dark:text-foreground"
              >
                {text}
              </span>
            ))}
          </div>
          <SampleButton href={item.sampleUrl} />
        </div>

        <div className={cn("lg:min-h-[320px]", item.reverse && "lg:order-1")}>
          <BeforeAfterImage
            beforeImage={item.beforeImage}
            afterImage={item.afterImage}
            title={item.title}
          />
        </div>
      </div>
    </motion.article>
  );
}

export function ServicesSection() {
  return (
    <Section
      id="services"
      spacing="lg"
      variant="default"
      className="scroll-mt-[calc(var(--navbar-height)+0.5rem)]"
      aria-labelledby="services-heading"
    >
      <Container>
        <div className="space-y-10 sm:space-y-12 lg:space-y-14">
          <div className="flex flex-col items-center gap-8 text-center">
            <div
              className={cn(
                "mx-auto inline-flex w-fit max-w-full items-center gap-2 rounded-full px-3 py-2",
                "bg-[#eef1f4] dark:bg-muted/80",
              )}
            >
              <div className="flex size-7 shrink-0 items-center justify-center rounded-full bg-[#0a0a0a] text-white dark:bg-foreground dark:text-background">
                <Wrench className="size-3.5" />
              </div>
              <span className="text-sm font-medium text-primary/95">Our services</span>
            </div>

            <h2
              id="services-heading"
              className="max-w-3xl text-balance text-3xl font-semibold leading-tight tracking-tight text-[rgb(29,50,45)] dark:text-foreground md:text-4xl lg:text-[2.5rem] lg:leading-[1.15]"
            >
              This is what we do.
            </h2>
          </div>

          <div className="space-y-6 sm:space-y-8">
            {services.map((service, index) => (
              <ServiceCard key={service.title} item={service} index={index} />
            ))}
          </div>
        </div>
      </Container>
    </Section>
  );
}
