"use client";

import { FormEvent, useState } from "react";
import Link from "next/link";
import { Mail, MessageCircle, X } from "lucide-react";

import { Container } from "@/components/layout/container";
import { Section } from "@/components/layout/section";

export function ContactSection() {
  const [openNotice, setOpenNotice] = useState(false);

  const onSubmit = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    setOpenNotice(true);
  };

  return (
    <>
      <Section
        id="contact"
        spacing="lg"
        variant="default"
        className="scroll-mt-[calc(var(--navbar-height)+0.5rem)]"
        aria-labelledby="contact-heading"
      >
        <Container>
          <div className="relative overflow-hidden rounded-[34px] bg-[#0a0a0a] p-5 sm:p-8 lg:p-10">
            <div className="grid gap-10 lg:grid-cols-[0.95fr_1.05fr] lg:gap-12">
              <div className="space-y-5">
                <h2
                  id="contact-heading"
                  className="text-4xl font-semibold tracking-tight text-[rgb(245,255,253)] sm:text-5xl"
                >
                  Get Started!
                </h2>
                <p className="max-w-xl text-base leading-relaxed text-[rgb(245,255,253)]/85 sm:text-lg">
                  No customer is the same. Tell us about yourself - and we will make sure that you
                  are contacted by one of our staff members within the next 24 hours.
                </p>
              </div>

              <div className="rounded-[30px] bg-[rgb(245,247,249)] p-4 sm:p-6">
                <form onSubmit={onSubmit} className="space-y-3">
                  <input
                    type="text"
                    name="name"
                    required
                    placeholder="Name"
                    className="h-12 w-full rounded-2xl border border-black/10 bg-white px-4 text-sm outline-none transition focus:border-black/30"
                  />

                  <div className="grid gap-3 sm:grid-cols-2">
                    <input
                      type="email"
                      name="email"
                      required
                      placeholder="Email"
                      className="h-12 w-full rounded-2xl border border-black/10 bg-white px-4 text-sm outline-none transition focus:border-black/30"
                    />
                    <input
                      type="tel"
                      name="phone"
                      placeholder="Phone"
                      className="h-12 w-full rounded-2xl border border-black/10 bg-white px-4 text-sm outline-none transition focus:border-black/30"
                    />
                  </div>

                  <input
                    type="text"
                    name="subject"
                    required
                    placeholder="Enter Subject"
                    className="h-12 w-full rounded-2xl border border-black/10 bg-white px-4 text-sm outline-none transition focus:border-black/30"
                  />

                  <textarea
                    name="message"
                    required
                    placeholder="Enter your Message"
                    rows={5}
                    className="w-full resize-none rounded-2xl border border-black/10 bg-white px-4 py-3 text-sm outline-none transition focus:border-black/30"
                  />

                  <button
                    type="submit"
                    className="inline-flex h-12 items-center justify-center rounded-[30px] bg-[#f15533] px-7 text-sm font-medium text-white transition hover:brightness-95"
                  >
                    Submit
                  </button>
                </form>
              </div>
            </div>
          </div>
        </Container>
      </Section>

      {openNotice ? (
        <div className="fixed inset-0 z-120 grid place-items-center bg-black/55 p-4">
          <div className="relative w-full max-w-md rounded-3xl bg-white p-6 shadow-2xl">
            <button
              type="button"
              onClick={() => setOpenNotice(false)}
              className="absolute right-3 top-3 inline-flex size-8 items-center justify-center rounded-full bg-black/5 text-black/70 transition hover:bg-black/10"
              aria-label="Close modal"
            >
              <X className="size-4" />
            </button>

            <h3 className="text-2xl font-semibold tracking-tight text-[rgb(29,50,45)]">
              Contact us directly
            </h3>
            <p className="mt-2 text-sm leading-relaxed text-[rgb(29,50,45)]/75">
              For a faster response, please use one of the contact options below:
            </p>

            <div className="mt-5 space-y-3">
              <Link
                href="mailto:charmstudio2301@gmail.com"
                className="flex items-center gap-3 rounded-2xl border border-black/10 px-4 py-3 transition hover:bg-black/3"
              >
                <Mail className="size-4 text-[#f15533]" />
                <span className="text-sm font-medium text-[rgb(29,50,45)]">charmstudio2301@gmail.com</span>
              </Link>

              <Link
                href="https://wa.me/84396807801"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-3 rounded-2xl border border-black/10 px-4 py-3 transition hover:bg-black/3"
              >
                <MessageCircle className="size-4 text-[#f15533]" />
                <span className="text-sm font-medium text-[rgb(29,50,45)]">0396807801</span>
              </Link>
            </div>
          </div>
        </div>
      ) : null}
    </>
  );
}
