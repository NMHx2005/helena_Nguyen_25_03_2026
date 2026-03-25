"use client";

import { useState } from "react";
import { CircleHelp, Plus } from "lucide-react";

import { Container } from "@/components/layout/container";
import { Section } from "@/components/layout/section";
import { cn } from "@/lib/utils";

const faqs = [
  {
    question: "Can I request corrections or revisions?",
    answer:
      "You will inform us via email or WhatsApp. If it’s your change of mind, we’ll charge the additional request. In case it’s our editor’s fault, we’ll edit until you are happy for free.",
  },
  {
    question: "Is there a minimum number of photos per order?",
    answer: "No. We accept both single-photo edits and bulk orders.",
  },
  {
    question: "What is your turnaround time? Do you offer rush delivery?",
    answer:
      "Our turnaround is typically between 8-15 hours. Rush delivery is available for urgent requests.",
  },
  {
    question: "How much does your editing cost and do you offer volume discounts?",
    answer:
      "Our pricing varies from client to client, depending on your input and output requirements. Depending on your volume, we might have a special discount. Please contact our team with your indicated volume to discuss further.",
  },
  {
    question: "What if I want a different sky from the ones you've suggested?",
    answer:
      "We're here to bring your ideas to life. If you have a particular sky in mind, let us know and our team will match your vision with advanced editing techniques. You can also upload your preferred sky reference.",
  },
  {
    question: "How does Charm Studio process payment?",
    answer:
      "We process payments via PayPal, with flexible billing options - daily, weekly, or per project basis depending on your needs.",
  },
  {
    question: "What makes Charm Studio different from the rest?",
    answer:
      "We’re not just a team - we’re your partners in success. We blend creativity, strategy, and professionalism to make your photos stand out.",
  },
] as const;

export function FaqsSection() {
  const [openIndex, setOpenIndex] = useState(0);

  return (
    <Section
      id="faqs"
      spacing="lg"
      variant="default"
      className="scroll-mt-[calc(var(--navbar-height)+0.5rem)]"
      aria-labelledby="faqs-heading"
    >
      <Container>
        <div className="grid gap-8 lg:grid-cols-[0.9fr_1.1fr] lg:gap-10">
          <div className="space-y-6 lg:sticky lg:top-[calc(var(--navbar-height)+1rem)] lg:self-start">
            <div
              className={cn(
                "inline-flex w-fit max-w-full items-center gap-2 rounded-full px-3 py-2",
                "bg-[#eef1f4] dark:bg-muted/80",
              )}
            >
              <div className="flex size-7 shrink-0 items-center justify-center rounded-full bg-[#0a0a0a] text-white dark:bg-foreground dark:text-background">
                <CircleHelp className="size-3.5" />
              </div>
              <span className="text-sm font-medium text-primary/95">Frequently Asked Questions</span>
            </div>

            <h2
              id="faqs-heading"
              className="text-balance text-3xl font-semibold leading-tight tracking-tight text-[rgb(29,50,45)] dark:text-foreground md:text-4xl lg:text-left lg:text-[2.4rem]"
            >
              Your curiosity meets our expertise—let&apos;s clear things up!
            </h2>

            <p className="max-w-xl text-base leading-relaxed text-[rgb(29,50,45)]/70 dark:text-muted-foreground">
              We&apos;ve gathered all the important info right here. Explore our FAQs and find the
              answers you need.
            </p>
          </div>

          <div className="space-y-3">
            {faqs.map((faq, index) => {
              const open = index === openIndex;
              return (
                <article
                  key={faq.question}
                  className="rounded-[30px] border border-black/10 bg-[#eef1f4] p-2 dark:border-white/15 dark:bg-muted/60"
                >
                  <button
                    type="button"
                    onClick={() => setOpenIndex(open ? -1 : index)}
                    className="flex w-full items-center justify-between rounded-[28px] bg-[#f5f7f9] px-5 py-4 text-left dark:bg-background/70"
                    aria-expanded={open}
                  >
                    <h3 className="pr-4 text-lg font-semibold leading-snug text-[rgb(15,15,15)] dark:text-foreground">
                      {faq.question}
                    </h3>
                    <span
                      className={cn(
                        "flex size-7 shrink-0 items-center justify-center rounded-[13px] transition-transform duration-300",
                        open ? "rotate-45" : "rotate-0",
                      )}
                    >
                      <Plus className="size-4" />
                    </span>
                  </button>

                  <div
                    className={cn(
                      "grid transition-all duration-300",
                      open ? "grid-rows-[1fr] opacity-100" : "grid-rows-[0fr] opacity-0",
                    )}
                  >
                    <div className="overflow-hidden">
                      <div className="mx-5 border-t border-dashed border-black/35 py-4 dark:border-white/25">
                        <p className="text-sm leading-relaxed text-[rgb(20,20,20)]/70 dark:text-foreground/75">
                          {faq.answer}
                        </p>
                      </div>
                    </div>
                  </div>
                </article>
              );
            })}
          </div>
        </div>
      </Container>
    </Section>
  );
}
