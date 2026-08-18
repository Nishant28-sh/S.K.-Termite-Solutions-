"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import Link from "next/link";
import { ArrowUpRight } from "lucide-react";
import { projects } from "@/lib/data";

export default function ProjectsPreview() {
  const featured = projects.slice(0, 6);

  return (
    <section className="section-pad bg-cream">
      <div className="container-premium">
        <div className="flex flex-col sm:flex-row sm:flex-wrap sm:items-end sm:justify-between gap-4 sm:gap-6 mb-8 sm:mb-12 text-center sm:text-left">
          <div className="max-w-xl mx-auto sm:mx-0">
            <span className="eyebrow text-[10px] sm:text-xs">Our Work</span>
            <h2 className="font-display text-2xl sm:text-4xl lg:text-5xl mt-2 sm:mt-3 text-ink text-balance">
              Projects Protected Across Every Building Type
            </h2>
          </div>
          <Link
            href="/projects"
            className="inline-flex items-center justify-center sm:justify-start gap-2 font-semibold text-forest hover:text-gold transition-colors text-sm sm:text-base"
          >
            View All Projects <ArrowUpRight size={16} />
          </Link>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6">
          {featured.map((p, i) => (
            <motion.div
              key={p.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-60px" }}
              transition={{ duration: 0.5, delay: (i % 3) * 0.1 }}
              className={`group relative rounded-3xl sm:rounded-4xl overflow-hidden shadow-premium ${
                i === 0 ? "sm:col-span-2 lg:col-span-2 aspect-[16/10]" : "aspect-[4/3] sm:aspect-[4/5]"
              }`}
            >
              <Image
                src={p.image}
                alt={p.title}
                fill
                className="object-cover transition-transform duration-700 group-hover:scale-110"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-ink/85 via-ink/10 to-transparent" />
              <div className="absolute bottom-0 left-0 right-0 p-4 sm:p-6">
                <span className="inline-block text-[10px] sm:text-[11px] font-semibold tracking-wide uppercase text-gold mb-1.5 sm:mb-2">
                  {p.category}
                </span>
                <h3 className="font-display text-cream text-base sm:text-lg leading-snug">
                  {p.title}
                </h3>
                <p className="text-cream/60 text-[10px] sm:text-xs mt-0.5 sm:mt-1">{p.location}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
