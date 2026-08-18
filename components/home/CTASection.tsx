"use client";

import { motion } from "framer-motion";
import { Phone } from "lucide-react";
import Button from "@/components/ui/Button";
import { SITE } from "@/lib/utils";
import FloatingOrbs from "@/components/ui/FloatingOrbs";

export default function CTASection() {
  return (
    <section className="section-pad bg-forest relative overflow-hidden">
      <FloatingOrbs variant="dark" />
      <motion.div
        initial={{ opacity: 0, y: 24 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-80px" }}
        transition={{ duration: 0.6 }}
        className="container-premium relative z-10 text-center max-w-2xl mx-auto px-4 sm:px-6"
      >
        <span className="eyebrow text-gold text-[10px] sm:text-xs">Free Site Inspection</span>
        <h2 className="font-display text-2xl sm:text-4xl lg:text-5xl mt-2 sm:mt-3 text-cream text-balance">
          Don&apos;t Wait for the Damage to Show.
        </h2>
        <p className="mt-3 sm:mt-4 text-sm sm:text-base text-cream/70 leading-relaxed">
          Get a no-obligation site inspection and a transparent quote within
          24 hours. Our team responds fastest over WhatsApp.
        </p>
        <div className="mt-7 sm:mt-9 flex flex-col sm:flex-row flex-wrap justify-center gap-3 sm:gap-4">
          <Button
            href={`tel:${SITE.phone.replace(/\s/g, "")}`}
            variant="secondary"
            size="lg"
            icon={<Phone size={18} />}
            className="w-full sm:w-auto"
          >
            Call {SITE.phoneDisplay}
          </Button>
          <Button href="/contact" variant="outline" size="lg" className="w-full sm:w-auto !text-cream !border-cream/40 hover:!bg-cream hover:!text-ink">
            Request Free Inspection
          </Button>
        </div>
      </motion.div>
    </section>
  );
}
