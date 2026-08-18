import type { Metadata } from "next";
import PageHero from "@/components/ui/PageHero";
import FAQSearch from "@/components/home/FAQSearch";
import CTASection from "@/components/home/CTASection";

export const metadata: Metadata = {
  title: "Termite Treatment FAQ | Dimak Ka Ilaj Kaise Hota Hai | Cost & Safety",
  description:
    "Dimak ka ilaj kaise hota hai? Anti-termite treatment cost kitna hai? Porous pipe kya hai? Get answers to all common questions about termite control, safety, warranty & more.",
  alternates: { canonical: "/faq" },
};

export default function FAQPage() {
  return (
    <>
      <PageHero
        eyebrow="FAQ"
        title="Everything You're Wondering About Termite Treatment"
      />
      <section className="section-pad bg-cream">
        <div className="container-premium max-w-3xl">
          <FAQSearch />
        </div>
      </section>
      <CTASection />
    </>
  );
}
