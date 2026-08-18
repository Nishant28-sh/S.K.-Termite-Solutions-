"use client";

import { motion } from "framer-motion";
import { ourValues } from "@/lib/data";

export default function AboutValues() {
  return (
    <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6">
      {ourValues.map((w, i) => (
        <motion.div
          key={w.title}
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-60px" }}
          whileHover={{ y: -6 }}
          transition={{ duration: 0.5, delay: (i % 3) * 0.1 }}
          className="rounded-3xl sm:rounded-4xl bg-cream p-5 sm:p-7 border border-ink/5 hover:border-gold/40 hover:shadow-premium transition-colors duration-300 text-center"
        >
          <span className="eyebrow text-gold text-[10px] sm:text-xs">{w.year}</span>
          <h3 className="font-display text-base sm:text-lg mt-2 sm:mt-3 text-ink leading-snug">
            {w.title}
          </h3>
          <p className="text-xs sm:text-sm text-ink/60 mt-2 sm:mt-3 leading-relaxed">
            {w.description}
          </p>
        </motion.div>
      ))}
    </div>
  );
}
