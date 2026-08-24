import type { Metadata } from "next";
import { notFound } from "next/navigation";
import Link from "next/link";
import { Phone, ShieldCheck, MapPin, CheckCircle2, ArrowRight } from "lucide-react";
import PageHero from "@/components/ui/PageHero";
import Button from "@/components/ui/Button";
import CTASection from "@/components/home/CTASection";
import BeforeAfter from "@/components/home/BeforeAfter";
import { locationsData } from "@/lib/locations";
import { services } from "@/lib/data";
import { SITE } from "@/lib/utils";

function WhatsAppIcon() {
  return (
    <svg width={18} height={18} viewBox="0 0 24 24" fill="currentColor">
      <path d="M12.001 2C6.478 2 2 6.477 2 12c0 1.86.505 3.678 1.464 5.26L2 22l4.865-1.44A9.955 9.955 0 0012 22c5.523 0 10-4.478 10-10S17.523 2 12.001 2z" />
    </svg>
  );
}

export async function generateStaticParams() {
  return Object.keys(locationsData).map((city) => ({
    city,
  }));
}

type Props = {
  params: Promise<{ city: string }>;
};

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { city } = await params;
  const loc = locationsData[city.toLowerCase()];
  if (!loc) return {};

  return {
    title: loc.title,
    description: loc.description,
    keywords: loc.metaKeywords,
    alternates: { canonical: `/locations/${loc.slug}` },
    openGraph: {
      title: `${loc.title} | S.K. Termite Solutions`,
      description: loc.description,
      url: `${SITE.domain}/locations/${loc.slug}`,
      siteName: "S.K. Termite Solutions",
      locale: "en_IN",
      type: "website",
      images: [{ url: "/og-image.jpg", width: 1200, height: 630 }],
    },
    twitter: {
      card: "summary_large_image",
      title: loc.title,
      description: loc.description,
      images: ["/og-image.jpg"],
    },
  };
}

export default async function LocationPage({ params }: Props) {
  const { city } = await params;
  const loc = locationsData[city.toLowerCase()];

  if (!loc) {
    notFound();
  }

  const jsonLd = [
    {
      "@context": "https://schema.org",
      "@type": "PestControlService",
      name: `S.K. Termite Solutions - ${loc.name}`,
      description: loc.description,
      url: `${SITE.domain}/locations/${loc.slug}`,
      telephone: SITE.phone,
      email: SITE.email,
      address: {
        "@type": "PostalAddress",
        streetAddress: "Saraswati Vihar",
        addressLocality: loc.name,
        addressRegion: loc.state,
        addressCountry: "IN",
      },
      areaServed: {
        "@type": "City",
        name: loc.name,
      },
      priceRange: "₹₹",
    },
    {
      "@context": "https://schema.org",
      "@type": "FAQPage",
      mainEntity: loc.faqs.map((faq) => ({
        "@type": "Question",
        name: faq.question,
        acceptedAnswer: {
          "@type": "Answer",
          text: faq.answer,
        },
      })),
    },
  ];

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />

      {/* ── City Hero ── */}
      <section className="bg-ink text-cream relative overflow-hidden pt-28 pb-16 sm:pt-36 sm:pb-24">
        <div className="container-premium relative z-10 text-center max-w-4xl mx-auto">
          <span className="eyebrow text-gold text-[10px] sm:text-xs">
            Termite Solution &amp; Dimak Control in {loc.name}
          </span>
          <h1 className="font-display text-cream text-3xl sm:text-5xl lg:text-6xl mt-3 text-balance leading-tight">
            {loc.h1}
          </h1>
          <p className="mt-4 text-cream/70 text-sm sm:text-lg leading-relaxed max-w-2xl mx-auto">
            {loc.tagline}
          </p>

          <div className="mt-8 flex flex-col sm:flex-row gap-4 justify-center items-center">
            <Button
              href={`tel:${SITE.phone.replace(/\s/g, "")}`}
              size="lg"
              icon={<Phone size={18} />}
              className="w-full sm:w-auto"
            >
              Call {SITE.phoneDisplay}
            </Button>
            <Button
              href={`https://wa.me/${SITE.whatsapp}?text=Hi,%20I%20need%20termite%20solution%20in%20${loc.name}`}
              variant="whatsapp"
              size="lg"
              icon={<WhatsAppIcon />}
              className="w-full sm:w-auto"
            >
              WhatsApp Us for {loc.name}
            </Button>
          </div>
        </div>
      </section>

      {/* ── City Overview & Why Choose ── */}
      <section className="section-pad bg-white">
        <div className="container-premium max-w-5xl">
          <div className="grid lg:grid-cols-2 gap-10 sm:gap-14 items-center">
            <div>
              <span className="eyebrow text-[10px] sm:text-xs">Local Expertise</span>
              <h2 className="font-display text-2xl sm:text-4xl mt-2 text-ink">
                Trusted Termite &amp; Dimak Control in {loc.name}
              </h2>
              <p className="mt-4 text-sm sm:text-base text-ink/70 leading-relaxed">
                {loc.intro}
              </p>
              <div className="mt-6 flex items-center gap-3 text-forest font-semibold text-sm">
                <MapPin size={18} /> Serving {loc.name}, {loc.state} &amp; Surrounding Regions
              </div>
            </div>

            <div className="rounded-3xl bg-cream p-6 sm:p-8 border border-ink/5 shadow-premium">
              <h3 className="font-display text-xl text-ink mb-4">
                Why Property Owners in {loc.name} Choose Us
              </h3>
              <ul className="space-y-3">
                {loc.whyChoose.map((item, idx) => (
                  <li key={idx} className="flex items-start gap-3 text-sm text-ink/80">
                    <CheckCircle2 size={18} className="text-forest shrink-0 mt-0.5" />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* ── Services Section ── */}
      <section className="section-pad bg-cream">
        <div className="container-premium">
          <div className="text-center max-w-2xl mx-auto mb-10">
            <span className="eyebrow text-[10px] sm:text-xs">Our Services</span>
            <h2 className="font-display text-2xl sm:text-4xl mt-2 text-ink">
              Comprehensive Anti-Termite Treatments in {loc.name}
            </h2>
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {services.slice(0, 6).map((s) => {
              const Icon = s.icon;
              return (
                <div
                  key={s.slug}
                  className="rounded-3xl bg-white p-6 shadow-premium border border-ink/5 flex flex-col justify-between"
                >
                  <div>
                    <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-forest text-cream mb-4">
                      <Icon size={22} />
                    </div>
                    <h3 className="font-display text-lg text-ink mb-2">{s.title}</h3>
                    <p className="text-xs sm:text-sm text-ink/60 leading-relaxed">
                      {s.short}
                    </p>
                  </div>
                  <Link
                    href={`/services#${s.slug}`}
                    className="inline-flex items-center gap-1.5 text-xs font-semibold text-forest hover:text-gold transition-colors mt-5"
                  >
                    Learn More <ArrowRight size={14} />
                  </Link>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      <BeforeAfter />

      {/* ── City FAQs ── */}
      <section className="section-pad bg-white">
        <div className="container-premium max-w-3xl">
          <div className="text-center mb-10">
            <span className="eyebrow text-[10px] sm:text-xs">Frequently Asked Questions</span>
            <h2 className="font-display text-2xl sm:text-4xl mt-2 text-ink">
              Termite &amp; Dimak Solution Questions in {loc.name}
            </h2>
          </div>

          <div className="space-y-4">
            {loc.faqs.map((faq, i) => (
              <div
                key={i}
                className="rounded-2xl bg-cream/70 border border-ink/5 p-5 sm:p-6"
              >
                <h3 className="font-display text-base text-ink mb-2 font-semibold">
                  {faq.question}
                </h3>
                <p className="text-xs sm:text-sm text-ink/70 leading-relaxed">
                  {faq.answer}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── Other Nearby Cities ── */}
      <section className="bg-forest text-cream py-10">
        <div className="container-premium text-center">
          <h3 className="font-display text-lg sm:text-xl text-cream mb-4">
            Also Providing Termite &amp; Dimak Solutions in Nearby Cities:
          </h3>
          <div className="flex flex-wrap gap-3 justify-center text-xs sm:text-sm">
            {Object.values(locationsData)
              .filter((l) => l.slug !== loc.slug)
              .map((l) => (
                <Link
                  key={l.slug}
                  href={`/locations/${l.slug}`}
                  className="px-4 py-2 rounded-full bg-cream/10 border border-cream/20 hover:bg-gold hover:text-ink transition-colors font-medium"
                >
                  Termite Solution in {l.name}
                </Link>
              ))}
          </div>
        </div>
      </section>

      <CTASection />
    </>
  );
}
