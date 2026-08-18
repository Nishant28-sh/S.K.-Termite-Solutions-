import type { Metadata } from "next";
import { Star, Quote } from "lucide-react";
import PageHero from "@/components/ui/PageHero";
import CTASection from "@/components/home/CTASection";
import { testimonials } from "@/lib/data";

export const metadata: Metadata = {
  title: "Customer Reviews | Termite Treatment Testimonials India",
  description:
    "1000+ happy customers — read real reviews from homeowners, builders & commercial clients about our anti-termite treatment, porous pipe installation & dimak control services.",
  alternates: { canonical: "/testimonials" },
};

export default function TestimonialsPage() {
  return (
    <>
      <PageHero
        eyebrow="Testimonials"
        title="1000+ Customers, Real Reviews"
        description="Honest feedback from homeowners, builders and commercial clients we've worked with."
      />
      <section className="section-pad bg-cream">
        <div className="container-premium grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {testimonials.map((t) => (
            <div
              key={t.name}
              className="rounded-4xl bg-white p-7 shadow-premium border border-ink/5 flex flex-col"
            >
              <Quote className="text-gold/40" size={28} />
              <div className="flex gap-0.5 mt-4">
                {Array.from({ length: 5 }).map((_, s) => (
                  <Star
                    key={s}
                    size={15}
                    className={
                      s < t.rating
                        ? "fill-gold text-gold"
                        : "fill-ink/10 text-ink/10"
                    }
                  />
                ))}
              </div>
              <p className="text-sm text-ink/70 leading-relaxed mt-4 grow">
                &ldquo;{t.text}&rdquo;
              </p>
              <div className="mt-6 pt-5 border-t border-ink/5">
                <p className="font-semibold text-ink text-sm">{t.name}</p>
                <p className="text-xs text-ink/50 mt-0.5">{t.location}</p>
              </div>
            </div>
          ))}
        </div>
      </section>
      <CTASection />
    </>
  );
}
