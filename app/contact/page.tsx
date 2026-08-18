import type { Metadata } from "next";
import { Phone, Mail, MapPin, Clock } from "lucide-react";
import PageHero from "@/components/ui/PageHero";
import ContactForm from "@/components/home/ContactForm";
import { SITE } from "@/lib/utils";

export const metadata: Metadata = {
  title: "Contact Us | Free Termite Inspection | Dimak Treatment Enquiry",
  description:
    "Get a free anti-termite treatment inspection and quote. Call +91 89305 00699, WhatsApp, or fill our contact form. Dimak ki dawa ka rate janein. Service all over India.",
  alternates: { canonical: "/contact" },
};

const contactInfo = [
  { icon: Phone, label: "Call Us", value: SITE.phoneDisplay, href: `tel:${SITE.phone.replace(/\s/g, "")}` },
  { icon: Mail, label: "Email Us", value: SITE.email, href: `mailto:${SITE.email}` },
  { icon: MapPin, label: "Visit Us", value: SITE.address, href: undefined },
  { icon: Clock, label: "Hours", value: SITE.hours, href: undefined },
];

export default function ContactPage() {
  return (
    <>
      <PageHero
        eyebrow="Contact Us"
        title="Let's Protect Your Property"
        description="Call us, message us on WhatsApp, or fill out the form below — we usually respond within a few hours."
      />

      <section className="section-pad bg-cream">
        <div className="container-premium">
          {/* Contact info strip — always visible */}
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-3 sm:gap-4 mb-8 sm:mb-10">
            {contactInfo.map((c) => {
              const Icon = c.icon;
              const card = (
                <div className="flex items-start gap-3 rounded-2xl bg-white px-4 py-4 shadow-premium border border-ink/5 h-full">
                  <span className="flex h-9 w-9 shrink-0 items-center justify-center rounded-xl bg-forest/10 text-forest">
                    <Icon size={17} />
                  </span>
                  <div className="min-w-0">
                    <p className="text-[10px] sm:text-xs font-semibold uppercase tracking-wide text-ink/40">
                      {c.label}
                    </p>
                    <p className="text-xs sm:text-sm text-ink mt-0.5 leading-snug break-words">
                      {c.value}
                    </p>
                  </div>
                </div>
              );
              return c.href ? (
                <a key={c.label} href={c.href} className="block">
                  {card}
                </a>
              ) : (
                <div key={c.label}>{card}</div>
              );
            })}
          </div>

          {/* Form + Map side by side on desktop */}
          <div className="grid lg:grid-cols-5 gap-6 sm:gap-8">
            <div className="lg:col-span-3 rounded-3xl sm:rounded-4xl bg-white p-5 sm:p-8 lg:p-10 shadow-premium border border-ink/5">
              <span className="eyebrow text-[10px] sm:text-xs">Request a Free Inspection</span>
              <h2 className="font-display text-xl sm:text-2xl lg:text-3xl mt-2 sm:mt-3 text-ink text-balance">
                Tell Us About Your Property
              </h2>
              <p className="mt-2 sm:mt-3 text-xs sm:text-sm text-ink/60 leading-relaxed">
                Fill in the details below and our team will call to confirm
                your inspection slot — usually within a few business hours.
              </p>
              <ContactForm />
            </div>

            <div className="lg:col-span-2 rounded-3xl sm:rounded-4xl overflow-hidden shadow-premium h-64 sm:h-80 lg:h-auto lg:min-h-[400px]">
              <iframe
                src={SITE.mapEmbed}
                width="100%"
                height="100%"
                style={{ border: 0 }}
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                title="Our location on Google Maps"
              />
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
