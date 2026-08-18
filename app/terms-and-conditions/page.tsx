import type { Metadata } from "next";
import PageHero from "@/components/ui/PageHero";
import { SITE } from "@/lib/utils";

export const metadata: Metadata = {
  title: "Terms & Conditions",
  description: "Terms and conditions governing the use of SK Termite Solutions's website and services.",
  alternates: { canonical: "/terms-and-conditions" },
  robots: { index: false, follow: true },
};

const sections = [
  {
    title: "1. Acceptance of Terms",
    body: "By accessing this website or engaging our services, you agree to be bound by these Terms & Conditions. If you do not agree, please discontinue use of the website and services.",
  },
  {
    title: "2. Service Quotations",
    body: "All quotations provided, whether verbally, on-site, or in writing, are estimates based on the information available at the time of inspection. Final pricing is confirmed in a written quotation before work begins.",
  },
  {
    title: "3. Warranty Terms",
    body: "Warranty coverage, where offered, applies only to the specific treatment performed and is subject to the terms stated in your service agreement, including any requirement to maintain an Annual Maintenance Contract to keep the warranty valid.",
  },
  {
    title: "4. Site Access & Cooperation",
    body: "Customers are responsible for providing safe and reasonable access to the property for inspection and treatment. Delays caused by restricted access may affect scheduling.",
  },
  {
    title: "5. Chemical Handling",
    body: "We use only certified termiticides applied per manufacturer and regulatory guidelines. Customers will be informed of any temporary precautions (such as ventilation time) specific to their treatment.",
  },
  {
    title: "6. Payment Terms",
    body: "Payment terms will be specified in your service quotation or agreement. Any advance payment, milestone payment, or full payment terms will be communicated clearly before work commences.",
  },
  {
    title: "7. Limitation of Liability",
    body: "While we take every precaution to deliver effective treatment, termite behaviour can be affected by external factors such as new construction, landscaping changes, or adjoining untreated properties, which are outside our control.",
  },
  {
    title: "8. Website Use",
    body: "Content on this website is for general informational purposes and does not constitute a binding offer. All content, images, and branding are the property of SK Termite Solutions unless otherwise noted.",
  },
  {
    title: "9. Governing Law",
    body: "These terms are governed by the laws of India, and any disputes shall be subject to the jurisdiction of the courts in Haryana.",
  },
  {
    title: "10. Contact",
    body: `Questions about these Terms & Conditions can be directed to ${SITE.email} or ${SITE.phoneDisplay}.`,
  },
];

export default function TermsPage() {
  return (
    <>
      <PageHero eyebrow="Legal" title="Terms & Conditions" />
      <section className="section-pad bg-cream">
        <div className="container-premium max-w-3xl">
          <p className="text-sm text-ink/50 mb-10">Last updated: July 2026</p>
          <div className="space-y-8">
            {sections.map((s) => (
              <div key={s.title}>
                <h2 className="font-display text-xl text-ink mb-2">
                  {s.title}
                </h2>
                <p className="text-ink/60 leading-relaxed text-sm">
                  {s.body}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
