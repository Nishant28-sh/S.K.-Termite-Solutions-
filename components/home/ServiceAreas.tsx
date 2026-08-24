"use client";

import { motion } from "framer-motion";
import { MapPin, ArrowUpRight } from "lucide-react";
import Link from "next/link";
import { serviceAreas } from "@/lib/data";

const citySlugMap: Record<string, string> = {
  Rewari: "/locations/rewari",
  Bhiwani: "/locations/bhiwani",
  Rohtak: "/locations/rohtak",
  Hisar: "/locations/hisar",
  "Gurugram & Delhi NCR": "/locations/gurugram",
  "All Over India": "/services",
};

export default function ServiceAreas() {
  return (
    <section className="section-pad bg-white">
      <div className="container-premium">
        <div className="text-center max-w-2xl mx-auto mb-10 sm:mb-14">
          <span className="eyebrow text-[10px] sm:text-xs">Where We Work</span>
          <h2 className="font-display text-2xl sm:text-4xl lg:text-5xl mt-2 sm:mt-3 text-ink text-balance">
            Top Termite Solution &amp; Dimak Treatment Across Haryana &amp; India
          </h2>
          <p className="mt-3 sm:mt-4 text-sm sm:text-base text-ink/60 leading-relaxed">
            Headquartered in Rewari, with dedicated field teams providing fast termite &amp; dimak solutions in Bhiwani, Rohtak, Hisar, Gurugram, and across all of India.
          </p>
        </div>

        <div className="grid grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-5 max-w-5xl mx-auto">
          {serviceAreas.map((area, i) => {
            const href = citySlugMap[area.name] || "/services";
            return (
              <motion.div
                key={area.name}
                initial={{ opacity: 0, y: 24 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-60px" }}
                transition={{ duration: 0.5, delay: i * 0.07 }}
              >
                <Link
                  href={href}
                  className="block rounded-2xl bg-cream/60 border border-ink/5 p-5 text-center shadow-premium hover:bg-forest/5 hover:border-forest/20 transition-all group h-full flex flex-col justify-between"
                >
                  <div>
                    <div className="mx-auto flex h-10 w-10 items-center justify-center rounded-full bg-forest/10 text-forest group-hover:bg-forest group-hover:text-cream transition-colors">
                      <MapPin size={18} />
                    </div>
                    <h3 className="font-display text-sm sm:text-base mt-3 text-ink font-semibold flex items-center justify-center gap-1 group-hover:text-forest transition-colors">
                      {area.name}
                      <ArrowUpRight size={14} className="opacity-0 group-hover:opacity-100 transition-opacity" />
                    </h3>
                    <p className="text-[11px] sm:text-xs text-ink/60 mt-1 leading-snug">
                      {area.note}
                    </p>
                  </div>
                  <span className="text-[10px] uppercase font-semibold tracking-wider text-forest/80 mt-3 block group-hover:underline">
                    View City Services &rarr;
                  </span>
                </Link>
              </motion.div>
            );
          })}
        </div>

        <p className="text-center text-xs sm:text-sm text-ink/50 mt-8 max-w-xl mx-auto">
          Need urgent termite / dimak treatment in Rewari, Bhiwani, Rohtak, Hisar or anywhere in India? Contact us on WhatsApp or call for immediate inspection.
        </p>
      </div>
    </section>
  );
}
