"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { ArrowUpRight } from "lucide-react";
import { services } from "@/lib/data";
import TiltCard from "@/components/ui/TiltCard";

export default function Services() {
  return (
    <section className="section-pad bg-cream" id="services">
      <div className="container-premium">
        <div className="text-center max-w-2xl mx-auto mb-10 sm:mb-14">
          <span className="eyebrow text-[10px] sm:text-xs">What We Do</span>
          <h2 className="font-display text-2xl sm:text-4xl lg:text-5xl mt-2 sm:mt-3 text-ink text-balance">
            Complete Termite Protection, Start to Finish
          </h2>
          <p className="mt-3 sm:mt-4 text-sm sm:text-base text-ink/60 leading-relaxed">
            From the day your foundation trenches are dug to years after
            move-in, our services cover every stage a building needs.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6">
          {services.map((s, i) => {
            const Icon = s.icon;
            return (
              <motion.div
                key={s.slug}
                id={s.slug}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-60px" }}
                transition={{ duration: 0.5, delay: (i % 4) * 0.08 }}
              >
                <TiltCard className="group rounded-3xl sm:rounded-4xl bg-white p-5 sm:p-7 shadow-premium hover:shadow-premium-lg transition-shadow duration-400 border border-ink/5 h-full">
                  <div className="flex h-11 w-11 sm:h-12 sm:w-12 items-center justify-center rounded-xl sm:rounded-2xl bg-forest/10 text-forest group-hover:bg-forest group-hover:text-cream transition-colors duration-300">
                    <Icon size={22} className="sm:hidden" />
                    <Icon size={24} className="hidden sm:block" />
                  </div>
                  <h3 className="font-display text-base sm:text-lg mt-4 sm:mt-5 text-ink leading-snug">
                    {s.title}
                  </h3>
                  <p className="text-xs sm:text-sm text-ink/60 mt-2 leading-relaxed">
                    {s.short}
                  </p>
                  <Link
                    href="/services"
                    className="mt-4 sm:mt-5 inline-flex items-center gap-1 text-sm font-semibold text-forest group-hover:text-gold transition-colors"
                  >
                    Learn more
                    <ArrowUpRight
                      size={15}
                      className="transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5"
                    />
                  </Link>
                </TiltCard>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
