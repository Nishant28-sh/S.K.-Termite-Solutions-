"use client";

import { motion } from "framer-motion";
import { MapPin } from "lucide-react";
import { serviceAreas } from "@/lib/data";

export default function ServiceAreas() {
  return (
    <section className="section-pad bg-white">
      <div className="container-premium">
        <div className="text-center max-w-2xl mx-auto mb-10 sm:mb-14">
          <span className="eyebrow text-[10px] sm:text-xs">Where We Work</span>
          <h2 className="font-display text-2xl sm:text-4xl lg:text-5xl mt-2 sm:mt-3 text-ink text-balance">
            Serving Homes &amp; Businesses All Over India
          </h2>
          <p className="mt-3 sm:mt-4 text-sm sm:text-base text-ink/60 leading-relaxed">
            Based in Rewari, Haryana — with teams serving clients across
            all of India.
          </p>
        </div>

        <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-5 max-w-4xl mx-auto">
          {serviceAreas.map((area, i) => (
            <motion.div
              key={area.name}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-60px" }}
              transition={{ duration: 0.5, delay: i * 0.07 }}
              className="rounded-2xl bg-cream/60 border border-ink/5 p-5 text-center shadow-premium"
            >
              <div className="mx-auto flex h-10 w-10 items-center justify-center rounded-full bg-forest/10 text-forest">
                <MapPin size={18} />
              </div>
              <h3 className="font-display text-sm sm:text-base mt-3 text-ink">
                {area.name}
              </h3>
              <p className="text-[11px] sm:text-xs text-ink/50 mt-1 leading-snug">
                {area.note}
              </p>
            </motion.div>
          ))}
        </div>

        <p className="text-center text-xs sm:text-sm text-ink/50 mt-8 max-w-lg mx-auto">
          Not sure if we cover your area? Message us your location on
          WhatsApp or call — we service all over India.
        </p>
      </div>
    </section>
  );
}
