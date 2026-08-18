import type { Metadata } from "next";
import Image from "next/image";
import PageHero from "@/components/ui/PageHero";
import Counter from "@/components/ui/Counter";
import CTASection from "@/components/home/CTASection";
import AboutValues from "@/components/home/AboutValues";
import { stats } from "@/lib/data";
import { images } from "@/lib/media";

export const metadata: Metadata = {
  title: "About S.K. Termite Solutions | 10+ Years Termite Control Experience",
  description:
    "10+ years experience in anti-termite treatment (dimak ka ilaj) — protecting homes, builders & commercial properties all over India with certified treatments and trained technicians.",
  alternates: { canonical: "/about" },
};

export default function AboutPage() {
  return (
    <>
      <PageHero
        eyebrow="About Us"
        title="A Decade of Keeping Structures Standing"
        description="S.K. Termite Solutions was built on one idea: termite protection should be engineered into a building, not patched on after the damage is visible."
      />



      {/* ── Our Story ── */}
      <section className="section-pad bg-cream">
        <div className="container-premium grid lg:grid-cols-2 gap-8 sm:gap-14 items-center">
          <div className="text-center lg:text-left order-2 lg:order-1">
            <span className="eyebrow text-[10px] sm:text-xs">Our Story</span>
            <h2 className="font-display text-2xl sm:text-4xl mt-2 sm:mt-3 text-ink text-balance">
              From a Two-Person Field Team to a Trusted Regional Name
            </h2>
            <p className="mt-4 sm:mt-5 text-sm sm:text-base text-ink/60 leading-relaxed">
              What began as a small team offering post-construction termite
              treatment to individual homeowners has grown into a full-service
              anti-termite contractor working with builders, real estate
              developers, schools, hospitals and warehouses across the region.
            </p>
            <p className="mt-3 sm:mt-4 text-sm sm:text-base text-ink/60 leading-relaxed">
              We specialise in the technical stages that most contractors
              skip: proper porous pipe installation at the pre-construction
              stage, correct chemical dosage per IS guidelines, and clean
              documentation so every warranty actually holds up when it
              matters.
            </p>
            <p className="mt-3 sm:mt-4 text-sm sm:text-base text-ink/60 leading-relaxed">
              Today, our team is trained across residential and commercial
              protocols, equipped with calibrated injection and drilling
              equipment, and backed by an annual maintenance program that
              keeps protection active for the life of a building.
            </p>
          </div>
          <div className="flex justify-center lg:justify-end order-1 lg:order-2">
            <div className="relative w-[260px] h-[325px] sm:w-[350px] sm:h-[438px] lg:w-full lg:h-auto lg:aspect-[4/5] rounded-3xl sm:rounded-5xl overflow-hidden shadow-premium-lg">
              <Image
                src={images.aboutStory}
                alt="Anti-termite treatment technician at a construction site"
                fill
                className="object-cover"
              />
            </div>
          </div>
        </div>
      </section>

      {/* ── Stats Bar ── */}
      <section className="bg-forest py-10 sm:py-14">
        <div className="container-premium grid grid-cols-2 sm:grid-cols-4 gap-6 sm:gap-8">
          {stats.map((s) => (
            <div key={s.label} className="text-center">
              <p className="font-display text-2xl sm:text-4xl text-gold">
                <Counter value={s.value} suffix={s.suffix} />
              </p>
              <p className="text-[10px] sm:text-sm text-cream/70 mt-1">
                {s.label}
              </p>
            </div>
          ))}
        </div>
      </section>

      {/* ── Our Values ── */}
      <section className="section-pad bg-white">
        <div className="container-premium">
          <div className="text-center max-w-2xl mx-auto mb-10 sm:mb-14">
            <span className="eyebrow text-[10px] sm:text-xs">Our Values</span>
            <h2 className="font-display text-2xl sm:text-4xl mt-2 sm:mt-3 text-ink text-balance">
              What Guides Every Job We Take
            </h2>
          </div>
          <AboutValues />
        </div>
      </section>

      <CTASection />
    </>
  );
}
