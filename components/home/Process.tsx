"use client";

import { motion } from "framer-motion";
import { process } from "@/lib/data";

export default function Process() {
  return (
    <section className="section-pad bg-cream">
      <div className="container-premium">
        <div className="text-center max-w-2xl mx-auto mb-10 sm:mb-16">
          <span className="eyebrow text-[10px] sm:text-xs">Our Process</span>
          <h2 className="font-display text-2xl sm:text-4xl lg:text-5xl mt-2 sm:mt-3 text-ink text-balance">
            From Inspection to Warranty, in Six Steps
          </h2>
        </div>

        <div className="relative">
          <div className="hidden lg:block absolute left-0 right-0 top-[38px] h-[2px] bg-forest/15" />
          <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-8 sm:gap-10 lg:gap-6">
            {process.map((p, i) => (
              <motion.div
                key={p.step}
                initial={{ opacity: 0, y: 24 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-60px" }}
                transition={{ duration: 0.5, delay: i * 0.08 }}
                className="relative text-center lg:text-left"
              >
                <div className="relative z-10 flex h-14 w-14 sm:h-[76px] sm:w-[76px] items-center justify-center rounded-full bg-forest text-cream font-display text-lg sm:text-xl shadow-premium mx-auto lg:mx-0">
                  {p.step}
                </div>
                <h3 className="font-display text-base sm:text-lg mt-3 sm:mt-5 text-ink">
                  {p.title}
                </h3>
                <p className="text-xs sm:text-sm text-ink/60 mt-1.5 sm:mt-2 leading-relaxed">
                  {p.description}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
