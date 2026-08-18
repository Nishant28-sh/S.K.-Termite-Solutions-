import Hero from "@/components/home/Hero";
import TrustBar from "@/components/home/TrustBar";
import WarningSigns from "@/components/home/WarningSigns";
import Services from "@/components/home/Services";
import TreatmentFinder from "@/components/home/TreatmentFinder";
import Process from "@/components/home/Process";
import VideoShowcase from "@/components/home/VideoShowcase";
import BeforeAfter from "@/components/home/BeforeAfter";
import ProjectsPreview from "@/components/home/ProjectsPreview";
import ServiceAreas from "@/components/home/ServiceAreas";
import TestimonialsCarousel from "@/components/home/TestimonialsCarousel";
import FAQAccordion from "@/components/home/FAQAccordion";
import CTASection from "@/components/home/CTASection";
import { faqs } from "@/lib/data";
import Link from "next/link";
import { ArrowUpRight } from "lucide-react";

export default function HomePage() {
  return (
    <>
      <Hero />
      <TrustBar />
      <WarningSigns />
      <Services />
      <TreatmentFinder />
      <Process />
      <VideoShowcase />
      <BeforeAfter />
      <ProjectsPreview />
      <ServiceAreas />

      <section className="section-pad bg-cream">
        <div className="container-premium">
          <div className="flex flex-col sm:flex-row sm:flex-wrap sm:items-end sm:justify-between gap-4 sm:gap-6 mb-8 sm:mb-12 text-center sm:text-left">
            <div className="max-w-xl mx-auto sm:mx-0">
              <span className="eyebrow text-[10px] sm:text-xs">Testimonials</span>
              <h2 className="font-display text-2xl sm:text-4xl lg:text-5xl mt-2 sm:mt-3 text-ink text-balance">
                What Our Customers Say
              </h2>
            </div>
            <Link
              href="/testimonials"
              className="inline-flex items-center justify-center sm:justify-start gap-2 font-semibold text-forest hover:text-gold transition-colors text-sm sm:text-base"
            >
              All Reviews <ArrowUpRight size={16} />
            </Link>
          </div>
          <TestimonialsCarousel />
        </div>
      </section>

      <section className="section-pad bg-white">
        <div className="container-premium max-w-3xl">
          <div className="text-center mb-8 sm:mb-12">
            <span className="eyebrow text-[10px] sm:text-xs">FAQ</span>
            <h2 className="font-display text-2xl sm:text-4xl lg:text-5xl mt-2 sm:mt-3 text-ink text-balance">
              Common Questions, Answered
            </h2>
          </div>
          <FAQAccordion items={faqs.slice(0, 5)} />
        </div>
      </section>

      <CTASection />
    </>
  );
}
