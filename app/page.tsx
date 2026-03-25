import { AboutSection } from "@/components/sections/about-section";
import { SiteShell } from "@/components/layout/site-shell";
import { BenefitsSection } from "@/components/sections/benefits-section";
import { ContactSection } from "@/components/sections/contact-section";
import { FaqsSection } from "@/components/sections/faqs-section";
import { Hero } from "@/components/sections/hero";
import { Navbar } from "@/components/sections/navbar";
import { PageAnchorTargets } from "@/components/sections/page-anchor-targets";
import { ProcessSection } from "@/components/sections/process-section";
import { SiteFooter } from "@/components/sections/site-footer";
import { ServicesSection } from "@/components/sections/services-section";
import { StatisticsSection } from "@/components/sections/statistics-section";
import { TestimonialsSection } from "@/components/sections/testimonials-section";

export default function Home() {
  return (
    <SiteShell>
      <Navbar />
      <main className="flex-1">
        <Hero />
        <StatisticsSection />
        <BenefitsSection />
        <ServicesSection />
        <TestimonialsSection />
        <AboutSection />
        <ProcessSection />
        <FaqsSection />
        <ContactSection />
        <PageAnchorTargets />
        <SiteFooter />
      </main>
    </SiteShell>
  );
}
