import type { Metadata } from "next";
import { Check } from "lucide-react";
import PageHero from "@/components/ui/PageHero";
import Button from "@/components/ui/Button";
import CTASection from "@/components/home/CTASection";
import { services } from "@/lib/data";
import { videos } from "@/lib/media";

export const metadata: Metadata = {
  title: "Anti-Termite Treatment Services | Dimak Ka Ilaj | Porous Pipe Installation",
  description:
    "Complete anti-termite treatment services (dimak ki dawa) — pre-construction soil treatment, porous pipe installation, post-construction drilling, chemical injection, AMC & emergency termite control. All over India.",
  alternates: { canonical: "/services" },
  keywords: [
    "anti termite treatment services",
    "dimak ka ilaj",
    "dimak ki dawa",
    "porous pipe installation",
    "pre construction termite treatment",
    "post construction termite treatment",
    "termite chemical injection",
    "annual maintenance contract termite",
    "commercial termite treatment India",
  ],
};

export default function ServicesPage() {
  return (
    <>
      <PageHero
        eyebrow="Our Services"
        title="Every Stage of Termite Protection, Handled"
        description="Whether you're pouring a foundation this month or noticed activity in a 20-year-old home, there's a treatment plan for your building."
      />

      <section className="section-pad bg-cream">
        <div className="container-premium space-y-10">
          {services.map((s, i) => {
            const Icon = s.icon;
            const isPorousPipe = s.slug === "porous-pipe-installation";
            return (
              <div
                key={s.slug}
                id={s.slug}
                className={`scroll-mt-28 grid lg:grid-cols-5 gap-8 rounded-5xl bg-white p-8 sm:p-10 shadow-premium border border-ink/5 ${
                  i % 2 === 1 ? "lg:[&>*:first-child]:order-2" : ""
                }`}
              >
                <div className="lg:col-span-2">
                  <div className="flex h-14 w-14 items-center justify-center rounded-2xl bg-forest text-cream">
                    <Icon size={26} />
                  </div>
                  <h2 className="font-display text-2xl sm:text-3xl mt-5 text-ink text-balance">
                    {s.title}
                  </h2>
                  <p className="mt-4 text-ink/60 leading-relaxed">
                    {s.description}
                  </p>
                  <Button href="/contact" className="mt-6" size="md">
                    Enquire About This Service
                  </Button>
                </div>
                <div className="lg:col-span-3 space-y-5">
                  {isPorousPipe && (
                    <div className="relative aspect-video rounded-3xl overflow-hidden shadow-premium bg-ink">
                      <video
                        muted
                        loop
                        playsInline
                        autoPlay
                        poster={videos.porousPipeInstallPoster}
                        className="h-full w-full object-cover"
                      >
                        <source src={videos.porousPipeInstall} type="video/mp4" />
                      </video>
                      <span className="absolute top-3 left-3 text-[10px] font-semibold px-2.5 py-1 rounded-full bg-gold text-ink">
                        Real Site Footage
                      </span>
                    </div>
                  )}
                  <ul className="grid sm:grid-cols-2 gap-4 w-full">
                    {s.benefits.map((b) => (
                      <li
                        key={b}
                        className="flex items-start gap-3 rounded-2xl bg-cream p-4"
                      >
                        <Check size={18} className="text-forest shrink-0 mt-0.5" />
                        <span className="text-sm text-ink/70 leading-snug">
                          {b}
                        </span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            );
          })}
        </div>
      </section>

      <CTASection />
    </>
  );
}
