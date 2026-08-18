import type { Metadata } from "next";
import PageHero from "@/components/ui/PageHero";
import { SITE } from "@/lib/utils";

export const metadata: Metadata = {
  title: "Privacy Policy",
  description: "How S.K. Termite Solutions collects, uses, and protects your information.",
  alternates: { canonical: "/privacy-policy" },
  robots: { index: false, follow: true },
};

const sections = [
  {
    title: "1. Information We Collect",
    body: "When you contact us through our website, phone, or WhatsApp, we may collect your name, phone number, email address, property location, and details about the service you're enquiring about. We do not collect sensitive personal data through this website.",
  },
  {
    title: "2. How We Use Your Information",
    body: "We use the information you provide to respond to enquiries, schedule site inspections, prepare quotations, deliver services, and send service-related communication such as appointment confirmations and warranty reminders.",
  },
  {
    title: "3. Information Sharing",
    body: "We do not sell or rent your personal information to third parties. Information may be shared with our own field technicians solely for the purpose of carrying out an inspection or treatment you have requested.",
  },
  {
    title: "4. Cookies & Analytics",
    body: "Our website may use basic analytics cookies to understand site traffic and improve user experience. You can disable cookies through your browser settings at any time.",
  },
  {
    title: "5. Data Security",
    body: "We take reasonable technical and organisational measures to protect the information you share with us from unauthorised access, alteration, or disclosure.",
  },
  {
    title: "6. Your Rights",
    body: "You may request access to, correction of, or deletion of your personal information held by us at any time by contacting us using the details below.",
  },
  {
    title: "7. Changes to This Policy",
    body: "We may update this Privacy Policy from time to time. Changes will be posted on this page with an updated revision date.",
  },
  {
    title: "8. Contact Us",
    body: `For any questions about this Privacy Policy, please contact us at ${SITE.email} or ${SITE.phoneDisplay}.`,
  },
];

export default function PrivacyPolicyPage() {
  return (
    <>
      <PageHero eyebrow="Legal" title="Privacy Policy" />
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
