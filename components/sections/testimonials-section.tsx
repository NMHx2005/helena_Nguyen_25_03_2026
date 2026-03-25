"use client";

import Image from "next/image";
import { PenTool, Star } from "lucide-react";

import { Container } from "@/components/layout/container";
import { Section } from "@/components/layout/section";
import { cn } from "@/lib/utils";

const testimonials = [
  {
    quote:
      "The team completely transformed my property photos with creativity and attention to detail.",
    name: "Sarah J.",
    role: "Real Estate Agent",
    avatar:
      "https://framerusercontent.com/images/oUkBi1c8nERocfQrJWNLxZ9Fipw.jpg?width=3974&height=5000",
  },
  {
    quote:
      "Working with them has been a game-changer. The edits are top-notch and always delivered on time.",
    name: "Mark T.",
    role: "Photographer",
    avatar:
      "https://framerusercontent.com/images/LsJGvkbYbF1y4ifkFrjeNfRfzYM.jpg?width=3569&height=5354",
  },
  {
    quote:
      "I'm looking forward to continuing with the next batch. I’ve really appreciated their eye for detail and color so far.",
    name: "Emily H.",
    role: "Photographer",
    avatar:
      "https://framerusercontent.com/images/5P0eN6qtSxQg8Lrk6rw2GR9e7eI.jpg?width=3744&height=5616",
  },
  {
    quote:
      "It’s a pleasure working with this team—responsive, professional, and delivering high-quality edits.",
    name: "Matthew T.",
    role: "Marketing Director",
    avatar:
      "https://framerusercontent.com/images/iABb6ejla3A5ZzE4zgxiPqBaYHI.jpg?width=3000&height=4499",
  },
  {
    quote:
      "Turning daytime shots into eye-catching dusk photos has helped me attract more buyers. Truly impressive!",
    name: "Hannah J.",
    role: "Realtor",
    avatar:
      "https://framerusercontent.com/images/d4SpmpLmhUfMZkWsTOukrdAmhg.jpg?width=4912&height=7360",
  },
  {
    quote:
      "The customer service is excellent, and the process is fast and professional. Worth every cent!",
    name: "John S.",
    role: "Photographer",
    avatar:
      "https://framerusercontent.com/images/Y9KmJAQ4w53hsc4jJojfokLZ7D8.jpg?width=2662&height=3993",
  },
] as const;

function TestimonialCard({ item }: { item: (typeof testimonials)[number] }) {
  return (
    <article className="flex w-[320px] shrink-0 flex-col justify-between rounded-[25px] bg-white p-6 shadow-[0_20px_60px_-2.5px_rgba(10,10,10,0.03)] sm:w-[400px] sm:min-h-[229px] dark:bg-card">
      <div>
        <div className="mb-4 flex items-center gap-1.5 text-[#f15533]">
          {Array.from({ length: 5 }).map((_, i) => (
            <Star key={i} className="size-4 fill-current" />
          ))}
        </div>
        <p className="text-[15px] leading-relaxed text-[rgb(29,50,45)] dark:text-foreground/90">
          {item.quote}
        </p>
      </div>

      <div className="mt-5 flex items-center gap-3">
        <div className="relative size-[52px] overflow-hidden rounded-full">
          <Image src={item.avatar} alt={item.name} fill className="object-cover object-top" />
        </div>
        <div>
          <h4 className="text-base font-semibold text-[rgb(29,50,45)] dark:text-foreground">
            {item.name}
          </h4>
          <p className="text-sm text-muted-foreground">{item.role}</p>
        </div>
      </div>
    </article>
  );
}

export function TestimonialsSection() {
  const looped = [...testimonials, ...testimonials];

  return (
    <Section
      id="testimonials"
      spacing="lg"
      variant="default"
      className="scroll-mt-[calc(var(--navbar-height)+0.5rem)]"
      aria-labelledby="testimonials-heading"
    >
      <Container>
        <div className="space-y-10">
          <div className="flex flex-col items-center gap-8 text-center">
            <div
              className={cn(
                "mx-auto inline-flex w-fit max-w-full items-center gap-2 rounded-full px-3 py-2",
                "bg-[#eef1f4] dark:bg-muted/80",
              )}
            >
              <div className="flex size-7 shrink-0 items-center justify-center rounded-full bg-[#0a0a0a] text-white dark:bg-foreground dark:text-background">
                <PenTool className="size-3.5" />
              </div>
              <span className="text-sm font-medium text-primary/95">Testimonials</span>
            </div>

            <h2
              id="testimonials-heading"
              className="max-w-3xl text-balance text-center text-3xl font-semibold leading-tight tracking-tight text-[rgb(29,50,45)] dark:text-foreground md:text-4xl lg:text-[2.5rem] lg:leading-[1.15]"
            >
              Hear what our customers say
            </h2>
          </div>

          <section className="testimonials-mask overflow-hidden py-2">
            <ul className="testimonials-track flex w-max items-stretch gap-[5px]">
              {looped.map((item, idx) => (
                <li key={`${item.name}-${idx}`} className="list-none">
                  <TestimonialCard item={item} />
                </li>
              ))}
            </ul>
          </section>
        </div>
      </Container>

      <style jsx>{`
        .testimonials-mask {
          mask-image: linear-gradient(
            to right,
            rgba(0, 0, 0, 0) 0%,
            rgba(0, 0, 0, 1) 5%,
            rgba(0, 0, 0, 1) 95%,
            rgba(0, 0, 0, 0) 100%
          );
        }

        .testimonials-track {
          animation: testimonials-marquee 35s linear infinite;
        }

        .testimonials-track:hover {
          animation-play-state: paused;
        }

        @keyframes testimonials-marquee {
          from {
            transform: translateX(0);
          }
          to {
            transform: translateX(calc(-50% - 2.5px));
          }
        }
      `}</style>
    </Section>
  );
}
